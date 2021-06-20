import { useContext } from "react"
import { useState } from "react"
import { Form, Navbar, Button, FormControl, Row, Col } from "react-bootstrap"
import { AplicationContext } from "../controllers/ListOfCardsController"

function NavbarComponent() {
    const [textSearch, setTextSearch] = useState("")
    const context = useContext(AplicationContext)
    const { getData } = context;
    return (
        <>
            <Navbar data-testid="navBar" bg="light" expand="xg" style={{ display: "block" }}>
                <Row >
                <Col className="col-md-3 col-sm-12 col-12 text-center" >
                <Navbar.Brand id="titlePage" href="#home">Buscador de Imagem</Navbar.Brand>
                </Col>
                    <Col className="col-md-7 col-sm-10 col-9" >
                        <FormControl data-testid="formSearch" type="text" placeholder="Search" className="mr-sm-2"
                            onChange={(e) => setTextSearch(e.target.value)}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    return getData(textSearch)
                                }
                            }}
                        />
                    </Col>
                    <Col className="col-md-2 col-sm-2 col-3" >
                    <Button variant="primary" onClick={() => getData(textSearch)} >Buscar</Button>
                    </Col>

                </Row>

            </Navbar>
        </>
    )
}
export default NavbarComponent