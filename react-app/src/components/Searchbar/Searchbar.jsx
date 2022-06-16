import React from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';

export default function Searchbar() {
	return (
		<>
			<Col sm={8}>
				<Form className='d-flex mt-2 w-50'>
					<FormControl
						type='search'
						placeholder='Search'
						className='me-2 w-35'
						aria-label='Search'
					/>
					<Button variant='outline-success'>Search</Button>
				</Form>
			</Col>
		</>
	);
}
