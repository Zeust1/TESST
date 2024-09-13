import React from 'react'

const handleSelect = (e) => {
    const id = e.target.id
    
}



const Moviecard = ({movieList}) => {
  return (
    <div className='card' onClick={handleSelect}>
        {movieList.map(({id, movieName, description, image, episode}) => (
            <div className='movieitem' key={id}>
                <img src={image} alt="this img" id={id}/>
                <p>episode {episode}</p>
                <h4>{movieName}</h4>
            </div>
        ))}        
    </div>
  )
}

export default Moviecard
