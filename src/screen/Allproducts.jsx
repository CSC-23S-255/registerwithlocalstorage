import React from 'react'
import { ProductData } from '../ProductData'
import Cards from './Cards'

const Allproducts = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",border:"1px solid black",backgroundColor:"lightgreen" ,borderRadius:"100px"}}>ALL PRODUCTS</h1>
             <br /><br />
         {ProductData.map((e,i)=>{
           return (
             <div key={i} style={{display:"inline-block",textAlign:"center",marginLeft:"50px"}}>
                <Cards
                id={e.id}
                title={e.title}
                desc={e.description}
                image={e.image}
                 
                />
             </div>

           )

         })}



        
    </div>
  )
}

export default Allproducts
