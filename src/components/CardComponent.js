
import { Card, Button, Col } from "react-bootstrap"

function CardComponent(card) {
    console.log(card)
    return (
        <Col><Card style={{ margin: "auto", marginTop:10 }} key={card.id} >
            <Card.Img variant="top" height="300px" src={`http://farm${card.farm}.static.flickr.com/${card.server}/${card.id}_${card.secret}.jpg`} />
        </Card></Col>
    )
}
export default CardComponent