import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import authors from '../../services/constants/authors';
import formatDuration from '../../services/utils/formatDuration';
import authorsDeHash from '../../services/utils/authorsDeHash';
import printAuthors from '../../services/utils/printAuthors';

export default function CourseCard(props) {
	const course = props.value,
		DURATION_TIME = formatDuration(course.duration),
		authorsObj = printAuthors(authorsDeHash(course.authors, authors));

	return (
		<>
			<Card className='fluid mt-2'>
				<Card.Header as='h5' className='text-start'>
					{course.title}
				</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<Card.Text>{course.description}</Card.Text>
						</Col>
						<Col className='float-end'>
							<Card.Text className='text-start'>
								<strong>{authorsObj.title}</strong> {authorsObj.authors}
							</Card.Text>
							<Card.Text className='text-start'>
								<strong>Duration:</strong> {DURATION_TIME}
							</Card.Text>
							<Card.Text className='text-start'>
								<strong>Created:</strong> {course.creationDate}
							</Card.Text>
							<Button variant='primary' className='float-start'>
								Show course
							</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
}
