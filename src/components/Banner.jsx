

const Banner = ({bannerInfo}) => {
  return (
    <div className="banner">
      <h3>Explore</h3>
      <p style={{color: "#868686"}}>What are you gonnna watch today?</p>
      <div className="img">
        <img src={bannerInfo.image} alt="this image" style={{width: "100%"}}/>
        <div className="description">
            <h3>{bannerInfo.movieName}</h3>
            <p>{bannerInfo.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
