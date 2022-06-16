import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function MainLoginLayout() {
	return (
		<main>
			<Container className='mt-4'>
				<Row className='justify-content-center'>
					<Col md='4' className='align-self-center'>
						<LoginForm />
					</Col>
				</Row>
			</Container>
		</main>
	);
}
