import React, { useState } from 'react';
import './MyPokemonPage.style.css'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Container, Button } from 'react-bootstrap'
import MyPokeCard from './component/mypokemcard/MyPokeCard'
import { cheats, Ticket,changeName } from '../../redux/actions/raiseActions';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';

const MyPokemonPage = () => {
  const myInfo = useSelector(state => state.myInfo)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState('');

  const moveRaisePage = (id) => {
    navigate(`/mypokemon/${id}`)
  }

  const reset = () => {
    localStorage.removeItem('persist:root');
    window.location.reload();
  }

  const onCheat = () => {
    dispatch(cheats())
  }

  const onTicket = () => {
    dispatch(Ticket())
  }

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  const onName = () => {
    dispatch(changeName(inputName))
    setInputName('')
    setIsOpen(false);
  }

  const closeModal =()=>{
    setInputName('')
    setIsOpen(false);
  }


  const openModal=()=> {
    setIsOpen(true);
  }

  const customStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "400px",
      height: "180px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  }


  return (
    <Container className='mb-1'>
      <div className='py-3'>
        <h1 className='headline'>나의 포켓몬</h1>
      </div>
      <Row>

        <Col lg={3} className='d-flex flex-column align-items-center'>

          <img className='img-fluid' src="https://i.namu.wiki/i/dBxPv_wrni8hyvOBa9Ew-NtM6McepEFnB0phMKYX-RR4cY0epTURECZyYyCMTtAuoHKTGBc-pM2CgaXJcky1nQ.webp" alt="player" />
          <div className='w-100 body_1'>
            <div>Name : <span>{myInfo.name}</span></div>
            <div>Ticket : <span>{myInfo.Ticket}</span></div>
            <div>RareCandy : <span>{myInfo.RareCandy}</span></div>
            <div className='mt-1'>
              <Button onClick={openModal} variant='outline-danger' size='sm' className='w-100'>이름변경</Button>
            </div>
            <div className='mt-1'>
              <Button onClick={reset} variant='outline-danger' size='sm' className='me-1'>초기화</Button>
              <Button onClick={onCheat} variant='outline-warning' size='sm' className='me-1'>사탕 추가</Button>
              <Button onClick={onTicket} variant='outline-warning' size='sm' >티켓 추가</Button>
            </div>
          </div>

        </Col>

        <Col lg={9}>

          <div className='d-flex align-items-center'>
            <div className='sun-search-area py-2 pe-3'>
              <svg className='sun-search-icon' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9 12.6166L6.88333 8.59994C6.55 8.88883 6.16111 9.11383 5.71667 9.27494C5.27222 9.43605 4.8 9.51661 4.3 9.51661C3.1 9.51661 2.08333 9.09994 1.25 8.26661C0.416667 7.43328 0 6.42772 0 5.24994C0 4.07217 0.416667 3.06661 1.25 2.23328C2.08333 1.39994 3.09444 0.983276 4.28333 0.983276C5.46111 0.983276 6.46389 1.39994 7.29167 2.23328C8.11944 3.06661 8.53333 4.07217 8.53333 5.24994C8.53333 5.72772 8.45555 6.18883 8.3 6.63328C8.14444 7.07772 7.91111 7.49439 7.6 7.88328L11.65 11.8999C11.75 11.9888 11.8 12.1027 11.8 12.2416C11.8 12.3805 11.7444 12.5055 11.6333 12.6166C11.5333 12.7166 11.4111 12.7666 11.2667 12.7666C11.1222 12.7666 11 12.7166 10.9 12.6166ZM4.28333 8.51661C5.18333 8.51661 5.95 8.19716 6.58333 7.55828C7.21667 6.91939 7.53333 6.14994 7.53333 5.24994C7.53333 4.34994 7.21667 3.5805 6.58333 2.94161C5.95 2.30272 5.18333 1.98328 4.28333 1.98328C3.37222 1.98328 2.59722 2.30272 1.95833 2.94161C1.31944 3.5805 1 4.34994 1 5.24994C1 6.14994 1.31944 6.91939 1.95833 7.55828C2.59722 8.19716 3.37222 8.51661 4.28333 8.51661Z" fill="#DC0A2D" />
              </svg>
              <input className='sun-input-style' type="text" placeholder='Search' />
            </div>
            <div className='sun-slot-style'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H2.5C2.35556 12 2.23611 11.9528 2.14167 11.8583C2.04722 11.7639 2 11.6444 2 11.5C2 11.3556 2.04722 11.2361 2.14167 11.1417C2.23611 11.0472 2.35556 11 2.5 11H5.5C5.64444 11 5.76389 11.0472 5.85833 11.1417C5.95278 11.2361 6 11.3556 6 11.5C6 11.6444 5.95278 11.7639 5.85833 11.8583C5.76389 11.9528 5.64444 12 5.5 12ZM13.5 5H2.5C2.35556 5 2.23611 4.95278 2.14167 4.85833C2.04722 4.76389 2 4.64444 2 4.5C2 4.35556 2.04722 4.23611 2.14167 4.14167C2.23611 4.04722 2.35556 4 2.5 4H13.5C13.6444 4 13.7639 4.04722 13.8583 4.14167C13.9528 4.23611 14 4.35556 14 4.5C14 4.64444 13.9528 4.76389 13.8583 4.85833C13.7639 4.95278 13.6444 5 13.5 5ZM9.5 8.5H2.5C2.35556 8.5 2.23611 8.45278 2.14167 8.35833C2.04722 8.26389 2 8.14444 2 8C2 7.85556 2.04722 7.73611 2.14167 7.64167C2.23611 7.54722 2.35556 7.5 2.5 7.5H9.5C9.64444 7.5 9.76389 7.54722 9.85833 7.64167C9.95278 7.73611 10 7.85556 10 8C10 8.14444 9.95278 8.26389 9.85833 8.35833C9.76389 8.45278 9.64444 8.5 9.5 8.5Z" fill="#DC0A2D" />
              </svg>
            </div>
          </div>

          <Row>
            {myInfo.MyPokeMons.map((pokemons, index) => <Col xs='auto' className='py-1' onClick={() => moveRaisePage(pokemons.data.name)} ><MyPokeCard key={index} myPoke={pokemons} /></Col>)}
          </Row>

        </Col>
      </Row>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="알림"
        className="battle-modal"
      >
        <div className='d-flex justify-content-center h-100 align-items-center flex-column'>

          <h24 className='my-2' style={{ color: "#DC0A2D" }}>변경할 이름을 입력해주세요</h24>
          <input value={inputName} onChange={handleInputChange} className='sun-input-style2 my-2' type="text" />
          <div className='battle-btns'>
            <button onClick={onName} className='battle-modal-ok-btn' style={{ marginRight: 20 }}>확인</button>
          </div>

        </div>

      </Modal>
    </Container>
  )
}

export default MyPokemonPage