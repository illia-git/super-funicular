import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AuthInfo() {
	return (
		<>
			<Nav className='justify-content-end'>
				<Nav.Item>
					<Nav.Link>Name</Nav.Link>
				</Nav.Item>
				<Nav.Item className='d-flex'>
					{/* <Button variant='outline-primary'> */}
					<Link to='/login' className='btn btn-outline-primary'>
						Logout
					</Link>
					{/* </Button> */}
				</Nav.Item>
			</Nav>
		</>
	);
}
