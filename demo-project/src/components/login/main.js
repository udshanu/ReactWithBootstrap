import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from '../styled/login/loginmain';
import { LoginBox } from "./loginbox";

export const Main = () => {
    return (
        <Styles>
            <div className="root-container">
                <div className="box-controller">
                    <div className="controller">
                        Login
                    </div>
                    <div className="controller">
                        Register
                    </div>
                </div>
                <div className="box-container">
                    <LoginBox />
                </div>
            </div>

        </Styles>

        // <Styles>
        //     <Container>
        //         <Row className="justify-content-md-center">
        //             <Col xs lg="2">
        //                 ABC
        //             </Col>
        //         </Row>
        //     </Container>
        // </Styles>
    )
}
