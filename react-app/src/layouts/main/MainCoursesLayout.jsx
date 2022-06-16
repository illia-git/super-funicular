import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Searchbar from '../../components/Searchbar/Searchbar';
import AddNewCourse from '../../components/AddNewCourse/AddNewCourse';
import CoursesList from '../../components/CoursesList/CoursesList';

export default function MainCoursesLayout() {
	return (
		<main>
			<Container>
				<Row>
					<Searchbar />
					<AddNewCourse />
				</Row>
			</Container>
			<section className='courses'>
				<Container className='mt-2'>
					<CoursesList />
				</Container>
			</section>
		</main>
	);
}
