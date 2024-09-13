import Moviecard from "./Moviecard"

const Movielist = ({movieList}) => {
  return (
    <div className="movielist">
      <h1 style={{margin: "14px 0",color: "white"}}>New Release</h1>
      <Moviecard movieList={movieList}/>
    </div>
  )
}

export default Movielist
