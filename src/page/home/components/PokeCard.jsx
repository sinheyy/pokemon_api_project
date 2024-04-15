import React from 'react'

const PokeCard = ({pokemon,loading,infoPokemon}) => {
  return (
    <>
      {
        loading ? <h1>Loading...</h1>:
          pokemon.map((item)=>{
          return(
            <>
              <div className="Poke-card" key={item.id} onClick={()=>infoPokemon(item)}>
                <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </div>
            </>
          )
        })
      }
        
    </>
  )
}

export default PokeCard