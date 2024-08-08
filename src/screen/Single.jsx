import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../ProductData';



const Single = () => {
    const  { id } = useParams();
    console.log(id);

    const filterData = ProductData.filter((e,i)=>{
    return e.id == id

    })
    console.log(filterData)
  return (
    <div>
      
      {filterData.map((e,i)=>{
       return(
        <div key={i} style={{textAlign:"center"}} > 
          <img width={200} src={e.image}  />
          <h2>{e.title}</h2>
           <h2>Price : {e.price}</h2>
          <p>{e.description}</p>
          <button className='btn btn-success'>Buy</button>
        </div>
       )

      })}




    </div>
        )
    

}

export default Single
