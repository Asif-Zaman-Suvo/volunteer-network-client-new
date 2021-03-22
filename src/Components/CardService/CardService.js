import React from 'react';
import { Card } from 'react-bootstrap';

const CardService = ({ service }) => {

    return (

        <div className="col-md-3 pt-5">
            <Card style={{ width: '15em' }}>
                <Card.Img variant="top" style={{ height: '18em' }} src={service.img} />
                <Card.Body style={{ backgroundColor: '#CCBB0F' }}>
                    <h6 className="text-center">{service.name}</h6>
                </Card.Body>
            </Card>

        </div>

    );
};

export default CardService;