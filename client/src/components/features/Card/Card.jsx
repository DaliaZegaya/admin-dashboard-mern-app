import "./Card.css";

import Card from 'react-bootstrap/Card';
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

function CardStatus({ title }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <div className="box-icon">
            <GiProgression />
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>

  );
}

export default CardStatus;