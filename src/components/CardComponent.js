
import { Card, Col } from "react-bootstrap"

function CardComponent(card) {
    return (
        <Col key={card.id} ><Card data-testid="cardImage" style={{ margin: "auto", marginTop:10 }} key={card.id} >
            <Card.Img data-testid="imagem" variant="top" height="300px" src={`http://farm${card.farm}.static.flickr.com/${card.server}/${card.id}_${card.secret}.jpg`} />
        </Card></Col>
    )
}
export default CardComponent