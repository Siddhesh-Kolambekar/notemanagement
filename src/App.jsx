import { useState } from 'react'
import './App.css'

function App() {
  let [notes,setNotes]=useState([])
  const [tle,setTitle]=useState("")
  const [cont,setContent]=useState("")
  const [tg,setTag]=useState("work")
  function insert(e){
    e.preventDefault()
    const note={
      title: tle,
      content: cont,
      tag: tg,
    }
    setNotes([...notes,note])
  }
  function del(e){
    notes.pop(e)
    setNotes([...notes])
  }
  return (
    <>
      <form>
        <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='content' onChange={(e)=>setContent(e.target.value)}/>
        <select onChange={(e)=>setTag(e.target.value)}>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="misc">Misc</option>
        </select>
        <button onClick={insert}>Submit</button>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"10px"}}>
          {notes.map((item,i)=>(
            <div key={i} style={{border:"1px solid black",padding:"10px"}}>
              <h1>{item.title}</h1>
              <h2>{item.content}</h2>
              <h3>{item.tag}</h3>
              <button onClick={del}>Delete</button>
            </div>
          ))}
        </div>
      </form>
    </>
  )
}

export default App
