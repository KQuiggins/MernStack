import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useEffect, useState} from 'react';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`/api/products/`);
            console.log(response.status, response.data);
            setProducts(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchProducts();
      }, []);



  return (
   <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}

    </Row>

   </>
  )
}

export default HomeScreen