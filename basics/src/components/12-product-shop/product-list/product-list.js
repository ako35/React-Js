import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../product-card/product-card'
import products from '../../../assets/data/products.json'

const ProdutList = () => {
  return (
    <Container className='mt-5'>
        <Row className='gy-4 justify-content-center'>
            {
                products.map(product => (
                    <Col key={product.id} md={6} lg={4} xl={3} >
                        <ProductCard {...product} />
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default ProdutList