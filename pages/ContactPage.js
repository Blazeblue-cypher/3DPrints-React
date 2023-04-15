import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        810 Neptune Pointe Lane
                        <br />
                        Kissimmee, FL 34744
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+14077730297'
                    >
                        <i className='fa fa-phone' /> 1-407-773-0297
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:BlueBlaze3DPrints@gmail.com'
                    >
                        <i className='fa fa-envelope-o' /> BlueBlaze3DPrints@gmail.com
                    </a>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'><ContactForm /></Col>
            </Row>
        </Container>
    );
};

export default ContactPage;

