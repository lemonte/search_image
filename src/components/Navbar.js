import { Form, Navbar, Nav, NavDropdown, Button, FormControl, Col, Row } from "react-bootstrap"

function NavbarComponent() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#link">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex" >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}
export default NavbarComponent