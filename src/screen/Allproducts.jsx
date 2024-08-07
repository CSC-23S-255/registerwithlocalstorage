import React from 'react'
import { ProductData } from '../ProductData'
import Cards from './Cards'

const Allproducts = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>ALL PRODUCTS</h1>

         {ProductData.map((e,i)=>{
           return (
             <div  style={{display:"inline-block",textAlign:"center",marginLeft:"50px"}}>
                <Cards
                id={e.id}
                title={e.title}
                desc={e.description}
                image={e.image}
                 key={i}
                />
             </div>

           )

         })}



        
    </div>
  )
}

export default Allproducts
