import React from 'react';
import "./card.css";



function ProdCard({data}) {
  return (
    <div className='cardmain'>
        <div className='cardimgdiv'>
            <img className='cardimg' src={data.img} alt="..dummy image.."/>
        </div>
        <div className='cardbody'>
            <h5 className='prodname'>{data.name}</h5>
            <p className='rating'>{data.rating}</p>
            <p className='price'><span className='cutprice text-muted'>{data.oriprice}</span> - {data.oriprice}</p>
        </div>
    </div>
  )
}

export default ProdCard
