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

{/* <Card sx={{ maxWidth: 270 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            width="50px"
            height="auto"
            src= {data.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card> */}