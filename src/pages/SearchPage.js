import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import AlertComponent from '../components/AlertComponent';
import CardComponent from '../components/CardComponent';
import NavbarComponent from '../components/NavbarComponent';
import { AplicationContext } from '../controllers/ListOfCardsController';

function SearchPage() {
    const context = useContext(AplicationContext)
    const { listCards, erro } = context;
    return (
        <>
            <NavbarComponent />
            {erro.map(err => <AlertComponent item={err} />)}
            <Row >
                <Col xs={1} md={1} > </Col>
                <Col xs={10} md={10} data-testid="listaCards" >
                    <Row xs={1} md={4}>
                        {listCards.map(card => {
                            return CardComponent(card)
                        })}
                    </Row>
                </Col>

                <Col xs={1} md={1} > </Col>
            </Row>

        </>
    )



}

export default SearchPage