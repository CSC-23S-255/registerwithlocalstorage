import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../ProductData';
import Card from 'react-bootstrap/Card';


const Single = () => {
    const { id } = useParams();
 
    const filterdata = ProductData.filter((e,i)=>{
      return e.id = id ;

    });
    console.log(filterdata)
  return (
    <div>
      {filterdata.map((e,i)=>{
        return (
            <div style={{marginLeft:"400px"}} key={i}>
                 <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>
              {e.description}
           </Card.Text>
        
             </Card.Body>
       </Card>

            </div>
        )
      })}
    </div>
  )
}

export default Single
