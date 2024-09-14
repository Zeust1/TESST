import Moviecard from "./Moviecard"

const Movielist = ({movieList, handleSelect}) => {
  return (
    <div className="movielist">
      <h1 style={{margin: "14px 0",color: "white"}}>New Release</h1>
      <Moviecard movieList={movieList} handleSelect={handleSelect}/>
    </div>
  )
}

export default Movielist
