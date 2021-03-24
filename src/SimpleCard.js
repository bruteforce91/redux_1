import React from "react";
import { Card, Button } from "react-bootstrap";
import SimpleCardDetail from "./SimpleCardDetail";
import "./SimpleCard.css"
import {useState} from "react"

function SimpleCard({ hero }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="SimpleCard">
    <Card style={{ width: "15rem",height:"100%"}}>
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
        <Card.Img variant="top" src={hero.image} />
        <Card.Text>Alter-Ego: {hero.alterEgo}</Card.Text>
        <Button onClick={()=>setOpen(true)} variant="primary">View Details</Button>
        <Button variant="danger">Delete</Button> 
      </Card.Body>
      <SimpleCardDetail hero={hero} show={open} handleClose={() => setOpen(false)}/>
    </Card>
    </div>
  );
}

export default SimpleCard;
