import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import courses from '../../services/constants/courses';

export default function CoursesList() {
	return courses.map((course) => <CourseCard key={course.id} value={course} />);
}
