import SearchBar from './SearchBar'
import Images from './Images'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

 function App() {

const [imagefile,setImagefile]=useState({images:[]});
  const [searchElement,setSearchElement] =useState("");
  async function changeData(data){
    setSearchElement(data);
    console.log(`The new data is ${data.value}`)
    const response = await axios.get(`https://pixabay.com/api/?key=48177128-b9745fd19bf09e3d8d9878dbe&q=${data.value}&image_type=photo`)
   setImagefile({images:response.data.hits})
  }
  return (
    <div>
      <SearchBar change={changeData}></SearchBar>
      <Images images={imagefile.images}></Images>
    </div>
  )
}

export default App
