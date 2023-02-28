import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import CategoriesList from "./components/CategoriesList";
import "./assest/styles/general.css";
import axios from "axios";

function App() {

  const [categories,setCategories] =useState(null)
  const [selectedCategory,setSelectedCategory] = useState({
    id:"0",
    name:"Hepsi"
  })


  useEffect(()=>{
    axios.get(" http://localhost:3004/Categories")
    .then((res)=>{
      setCategories(res.data)
    })
    .catch((err)=>{})
  },[])
  
  if(categories===null) return null



  return (
    <div>
      <Header />
      <CategoriesList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default App;
