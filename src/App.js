import React, {useState} from 'react'

const App = () => {
  const [search,setSearch] = useState("");
  const changeHandler = e =>{
setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(search);
  }
  return(
    <div>
      <center>
        <h2>Galary Snapshort</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} /><br /><br />
          <input type="submit" name="Search" />
        </form>
      </center>
    </div>
  )
}

export default React