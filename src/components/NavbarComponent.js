import { useContext } from "react"
import { useState } from "react"
import { Form, Navbar, Button, FormControl } from "react-bootstrap"
import { AplicationContext } from "../controllers/ListOfCardsController"

function NavbarComponent() {
    const [textSearch, setTextSearch] = useState("")
    const context = useContext(AplicationContext)
    const { getData } = context;
    return (
        <>
            <Navbar data-testid="navBar" bg="light" expand="xg" style={{display: "block"}}>
                <Navbar.Brand id="titlePage" href="#home">Buscador de Imagem</Navbar.Brand>
                <Form className="d-flex" action="#" onSubmit={() => { return getData(textSearch)}} >
                    <FormControl data-testid="formSearch" type="text" placeholder="Search" className="mr-sm-2"
                    onChange={(e) => setTextSearch(e.target.value)}
                    />
                    <Button data-testid="buttonSearch" as="input" type="submit" value="Submit" />
                </Form>
            </Navbar>
        </>
    )
}
export default NavbarComponent