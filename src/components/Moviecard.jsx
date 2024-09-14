
const Moviecard = ({movieList, handleSelect}) => {
  return (
    <div className='card' onClick={handleSelect}>
        {movieList.map(({id, movieName, image, episode}) => (
            <div className='movieitem' key={id}>
                <img src={image} alt="this img" id={id}/>
                <p>Episode {episode}</p>
                <h3>{movieName}</h3>
            </div>
        ))}        
    </div>
  )
}

export default Moviecard
