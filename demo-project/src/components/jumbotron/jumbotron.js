import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { Styles } from '../styled/jumbotrone';

export const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>This is test project</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}
