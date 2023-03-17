import React, {useEffect} from 'react'
import "./home.css";
import ProdCard from "../components/cards/card";
import {VERCEL_API} from "../general";


function Home({setproducts, products}) {

  const getAllProducts = async ()=>{
    try{
      const res = await fetch(`${VERCEL_API}`);
      const data = await res.json()
      setproducts(data)
    }
    catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    getAllProducts(); 
  }, [])

  
  
  return (
    <div className='homediv'>
      {products.map((item, index)=> <ProdCard data ={item} key={index}/>)}
    </div>
  )
}

export default Home