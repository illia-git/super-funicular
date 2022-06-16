import React from 'react';
import AuthInfo from '../AuthInfo/AuthInfo';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand>
						<Link to='/courses' className='btn btn-outline-dark'>
							Courses
						</Link>
					</Navbar.Brand>
					<AuthInfo />
				</Container>
			</Navbar>
		</>
	);
}
