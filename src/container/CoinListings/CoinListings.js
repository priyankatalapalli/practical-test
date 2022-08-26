import "./CoinListings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function CoinListings(props) {
  const { coins } = props;
  return (
    <div className="coin-listings-wrapper">
      <Container>
        <Row>
          {coins &&
            coins.length > 0 &&
            coins.map((coin, index) => {
              return (
                <Col sm={3} key={index}>
                  <div className="coin-detail-wrapper">
                    <div className="coin-thumb">
                      <img src={coin.image.large} alt="" />
                    </div>
                    <div className="coin-details">
                      <h3>{coin.name}</h3>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default CoinListings;
