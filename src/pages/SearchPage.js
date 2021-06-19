import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import NavbarComponent from '../components/NavbarComponent';
import { AplicationContext } from '../controllers/ListOfCardsController';

function SearchPage() {
    const context = useContext(AplicationContext)
    const { listCards } = context;
    return (
        <>
            <NavbarComponent />
        <Row >
        <Col xs={1} md={1} > </Col>
        <Col xs={10} md={10} >
        <Row xs={1} md={4}>
             {listCards.map( card =>{
               return CardComponent(card)
            } )}
             </Row>
         </Col>
       
        <Col xs={1} md={1} > </Col>
        </Row>
           
        </>
    )
}

export default SearchPage