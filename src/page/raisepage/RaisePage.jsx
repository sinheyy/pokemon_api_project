import React from 'react'
import './RaisePage.style.css'

const RaisePage = () => {
  return (
    <div className='container-fluid bg-primary'>
      <div className='bg-white raise-area'>
        <div className='headline head-section'>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.35 30.95L0.45 17.05C0.283333 16.8833 0.166667 16.7167 0.1 16.55C0.0333337 16.3833 0 16.2 0 16C0 15.8 0.0333337 15.6167 0.1 15.45C0.166667 15.2833 0.283333 15.1167 0.45 14.95L14.4 1C14.6667 0.733333 15 0.6 15.4 0.6C15.8 0.6 16.15 0.75 16.45 1.05C16.75 1.35 16.9 1.7 16.9 2.1C16.9 2.5 16.75 2.85 16.45 3.15L5.1 14.5H29.9C30.3333 14.5 30.6917 14.6417 30.975 14.925C31.2583 15.2083 31.4 15.5667 31.4 16C31.4 16.4333 31.2583 16.7917 30.975 17.075C30.6917 17.3583 30.3333 17.5 29.9 17.5H5.1L16.5 28.9C16.7667 29.1667 16.9 29.5 16.9 29.9C16.9 30.3 16.75 30.65 16.45 30.95C16.15 31.25 15.8 31.4 15.4 31.4C15 31.4 14.65 31.25 14.35 30.95Z" fill="#1D1D1D" />
          </svg>
          <h1 className='headline'>포켓몬 성장</h1></div>
        <div className='row'>
          <div className='col-6 center pokemon-info'>
            <img className='pokemon-img' src="https://i.namu.wiki/i/l0x04r27DjSQmS-WgYk6I5x6IkKMyvZjRMyK5dI3EMoMikzCd2Kfl2SMRdvL3-y4zpxI_qLP-fs3QToSR7AU3g.webp" alt="pokemon" />
            <div className='w-80'>
              LV.1
            </div>
            <div className='w-80 '>
              <div>
                exp 1/30
              </div>
              <div className='progress-bar'>

              </div>
            </div>
            <div className='w-80'>
              속성
            </div>
          </div>
          <div className='col-6 center button-section'>
            <button className='button-style btn-Bug'>사탕주기(LV 1+)</button>
            <button className='button-style btn-Electric'>놀아주기(Exp 1+)</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RaisePage