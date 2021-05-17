import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardService = ({ service }) => {

    return (

        <div className="col-md-3 pt-5">
            <Link style={{ textDecoration: 'none' }} to='/register'>
                <Card style={{ width: '15em' }}>
                    <Card.Img variant="top" style={{ height: '18em',borderRadius:'none' }} src={service.img} />
                    <Card.Body className="text-center" style={{ backgroundColor: '#CCBB0F' }}>
                        <h6 className="text-dark">{service.name}</h6>
                    </Card.Body>
                </Card>
            </Link>

        </div>

    );
};

export default CardService;