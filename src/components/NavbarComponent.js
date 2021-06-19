import { useContext } from "react"
import { useState } from "react"
import { Form, Navbar, Nav, Button, FormControl } from "react-bootstrap"
import { AplicationContext } from "../controllers/ListOfCardsController"

function NavbarComponent() {
    const [textSearch, setTextSearch] = useState("")
    const context = useContext(AplicationContext)
    const { getData } = context;
    return (
        <>
            <Navbar bg="light" expand="xg" style={{display: "block"}}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#link">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex" action="#" onSubmit={() => { return getData(textSearch)}} >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"
                    onChange={(e) => setTextSearch(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            getData(textSearch)
                        }
                    }}
                    />
                    <Button as="input" type="submit" value="Submit" />
                </Form>
            </Navbar>
        </>
    )
}
export default NavbarComponent