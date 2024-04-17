import React, { useState, useEffect } from 'react';
import '@kfonts/neodgm-code';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingCursor from './FloatingCursor';
import usePokemonData from './usePokemonData';
import './Random.style.css';
import Modal from './Modal';

// -랜덤으로 뽑은 포켓몬은 나의 포켓몬에 저장된다
// -랜덤 포켓몬은 진화되지 않은 포켓몬만 나온다?
// -랜덤 뽑기시 오박사의 오늘의 포켓몬은 뭘까요?처럼 검은색 그림자로 먼저 포켓몬이 나온다
// -뽑기는 티켓을 사용해서 뽑느다
// -티켓은 1분에 하나씩 차오른다
// -티켓의 최대치는 20개이다
// -나의 포켓몬에 저장되어있는 포켓몬이 나오면 이상한사탕으로 변한다
// -랜덤 뽑기시 뮤,뮤츠 같은 종류의 확률은 낮게 설정한다
// -테스트 용으로 티켓 최대치를 채우는 버튼을 숨겨둔다

const Random = () => {
	const { pokemonData, loading, error } = usePokemonData();
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [randomImgIndex, setRandomImgIndex] = useState(3);
	const [showPokemon, setShowPokemon] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [texts, setTexts] = useState(['나는 오박사라네!', '자 오늘의 포켓몬은 뭘까요~~?', '오늘의 포켓몬은~~~~~!', '랜덤으로 포켓몬 불러오는 중.....']);

	useEffect(() => {
		if (pokemonData) {
			const randomIndex = Math.floor(Math.random() * pokemonData.length);
			setSelectedPokemon(pokemonData[randomIndex]);
		}
	}, [pokemonData]);

	useEffect(() => {
		let interval;
		if (showPokemon) {
			interval = setInterval(() => {
				const newRandomImgIndex = Math.floor(Math.random() * 13) + 3;
				setRandomImgIndex(newRandomImgIndex);
			}, 100);
		}
		return () => clearInterval(interval);
	}, [showPokemon]);

	useEffect(() => {
		if (selectedPokemon) {
			const newTexts = [...texts];
			newTexts[4] = `바로 '${selectedPokemon.korean_name}' 포켓몬이다!`;
			setTexts(newTexts);
		}
	}, [selectedPokemon, texts]);

	const handleNextClick = () => {
		const newIndex = (currentTextIndex + 1) % texts.length;
		setCurrentTextIndex(newIndex);

		if (newIndex === 3) {
			setShowModal(true);
		} else {
			setShowModal(false);
		}

		if (newIndex === 4) {
			setShowPokemon(true);
		} else {
			setShowPokemon(false);
		}
	};

	if (loading) {
		return (
			<div className='spinner-area' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
				<Spinner animation='border' variant='danger' style={{ width: '5rem', height: '5rem' }} />
				<p className='loading_txt ft'>오박사님 만나러 가는 중.....</p>
			</div>
		);
	}

	if (error) {
		return <div>에러 발생: {error.message}</div>;
	}

	return (
		<>
			<FloatingCursor imgSrc='/img/random/pokeball.svg' altText='Pokeball' />
			<div className='random_page'>
				<div className='inner'>
					<div className={`top_cont ${showPokemon ? 'visible' : ''}`}>
						<div className='pokemon_cont'>
							{showPokemon && (
								<div className='random_pokemon_img_cont'>
									<img src={`/img/random/img${randomImgIndex.toString().padStart(2, '0')}.jpg`} alt='포켓몬 이미지' />
								</div>
							)}
							<div className='random_pokemon_cont'>
								{selectedPokemon && (
									<>
										<div className='img_box'>
											<img src={selectedPokemon.image} alt={selectedPokemon.korean_name} />
										</div>
										<div className='txt_box'>
											<p className='type'>{selectedPokemon.type}</p>
											<p className='id'>ID : {selectedPokemon.id}</p>
											<p className='name'>{selectedPokemon.korean_name}</p>
											<p className='height'>키 : {selectedPokemon.height}m</p>
											<p className='weight'>몸무게 : {selectedPokemon.weight}kg</p>
											<ul className='spec'>
												<li>체력 : {selectedPokemon.hp}</li>
												<li>공격 : {selectedPokemon.attack}</li>
												<li>방어 : {selectedPokemon.defense}</li>
												<li>스페셜 공격 : {selectedPokemon.special_attack}</li>
												<li>스페셜 방어 : {selectedPokemon.special_defense}</li>
												<li>스피드 : {selectedPokemon.speed}</li>
											</ul>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
					<div className='bottom_box'>
						<div className='cont_box'>
							<div className='speech_bubble' onClick={handleNextClick}>
								<div className='img_box'>
									<img src='img/random/img01.jpg' alt='오박사님' />
								</div>
								<div className='txt_box'>
									{texts.map((text, index) => (
										<div key={index} className={index === currentTextIndex ? 'txt_desc' : 'txt_desc dn'}>
											<p className='typing ft'>{text}</p>
										</div>
									))}
								</div>
								<button type='button' className='next_btn ft'>
									넘어가기 &#62;
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showModal && <Modal />}
		</>
	);
};

export default Random;