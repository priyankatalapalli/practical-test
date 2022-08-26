import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";

function Header(props) {
  const { setAlphaSort, expensiveFilter, losingCryptoFilter } = props;
  return (
    <header className="app-header">
      <Container>
        <Row>
          <Col sm={6}>Coinfactory</Col>
          <Col sm={6} style={{ justifyContent: "flex-end", display: "flex" }}>
            <Button onClick={expensiveFilter}>Highest value crypto</Button>
            <Button onClick={losingCryptoFilter}>Losing crypto</Button>
            <Button onClick={() => setAlphaSort("down")}>A-Z</Button>
            <Button onClick={() => setAlphaSort("up")}>Z-A</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
