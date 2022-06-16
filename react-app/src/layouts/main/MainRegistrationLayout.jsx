import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function MainRegistrationLayout() {
	return (
		<main>
			<Container className='mt-4'>
				<Row className='justify-content-center'>
					<Col md='4' className='align-self-center'>
						<RegistrationForm />
					</Col>
				</Row>
			</Container>
		</main>
	);
}
