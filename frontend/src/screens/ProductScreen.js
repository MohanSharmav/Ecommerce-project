import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/Rating'

import axios from 'axios'

const ProductScreen = ({ match }) => {
   const [product,setProduct]=useState({})


   useEffect(() =>{
    const fetchProduct = async() =>{
        const {data}=await axios.get(`/api/products/${match.params.id}`)
   
      setProduct(data)
   }
   fetchProduct()
   },[match])
   


    return (<>
            <Link className='btn btn-light my-3' to='/'>
               go back
           </Link>
           <Row>
               <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>

               </Col>
               <Col md={3}>
                <ListGroup varient='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} 
                         text={`${product.numReviews}reviews`}
                         />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: RS {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                </ListGroup.Item>
                </ListGroup>
               </Col> 
               {/* <Col md={3}>
                   <Card>
                       <ListGroup variant='flush'>
                        <ListGroup.item>
                           <Row>
                               <Col>
                                    Price:
                               </Col>
                               <Col>
                                    <strong>
                                        Rs{product.price}
                                    </strong>
                               </Col>
                           </Row>
                           </ListGroup.item>
                           <ListGroup.item>
                           <Row>
                               <Col>
                                    Status:
                               </Col>
                               <Col>
                                
                                        {product.countInStock >0 ? 'IN stock' : 'out of stock'}
                                
                               </Col>
                           </Row>
                           </ListGroup.item>
                           <ListGroup.Item>
                               
                                   <Button className="btn-block" type="button" disabled={product.countInStock ===0}>
                                   Add To Cart

                               </Button>
                           </ListGroup.Item>
                       </ListGroup>
                   </Card>
               </Col> */}
             </Row>
             </>
    )
    
       
    
}

export default ProductScreen