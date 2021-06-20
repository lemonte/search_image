import { useContext, useState } from "react";
import { Toast } from "react-bootstrap";
import { AplicationContext } from "../controllers/ListOfCardsController";

function AlertComponent(props) {
    const [show, setShow] = useState(true);
    const context = useContext(AplicationContext)
    const { removeError } = context;
    
    return (
               <Toast key={props.item.id} className="d-inline-block m-1"  onClose={() => {
                removeError(props.item)
                return setShow(false)
               }} show={show} delay={5000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Buscador de imagens</strong>
                    <small>Agora</small>
                </Toast.Header>
                <Toast.Body>{props.item.erro} !</Toast.Body>
            </Toast>

    )
}
export default AlertComponent