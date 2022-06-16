import { React, useState } from 'react';
import { Button, Col, Modal, Form as FormStrap } from 'react-bootstrap';
import { Formik, Form, Field, FieldArray } from 'formik';
import yupSchemas from '../../services/utils/yupSchemas';

const Box = ({ children }) => <div>{children}</div>;

export default function AddNewCourse() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const poop = () => console.log('poop');

	return (
		<>
			<Col sm={4}>
				<Button className='float-end mt-2' onClick={handleShow}>
					Add new course
				</Button>
			</Col>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add new course</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						validationSchema={yupSchemas.courseSchema}
						initialValues={{
							title: '',
							description: '',
							authors: [' '],
							duration: '',
						}}
						onSubmit={(values) => {
							// same shape as initial values
							console.log(values);
						}}
						// validate={validate}
					>
						{({ handleSubmit, handleChange, values, touched, errors }) => (
							<Form id='login-form' onSubmit={handleSubmit}>
								<FormStrap.Group className='mb-3' controlId='course-title'>
									<FormStrap.Label>Title</FormStrap.Label>
									<Field
										className='form-control'
										type='text'
										placeholder='Enter title'
										name='title'
										value={values.title}
										onChange={handleChange}
									/>
									{errors.title && touched.title ? (
										<FormStrap.Text>{errors.title}</FormStrap.Text>
									) : null}
								</FormStrap.Group>
								<FormStrap.Group
									className='mb-3'
									controlId='course-description'
								>
									<FormStrap.Label>Description</FormStrap.Label>
									<Field
										as='textarea'
										className='form-control'
										type='text'
										placeholder='Enter description'
										name='description'
										value={values.description}
										onChange={handleChange}
									/>
									{errors.description && touched.description ? (
										<FormStrap.Text>{errors.description}</FormStrap.Text>
									) : null}
								</FormStrap.Group>
								<FormStrap.Group className='mb-3' controlId='course-duration'>
									<FormStrap.Label>Duration</FormStrap.Label>
									<Field
										className='form-control'
										type='text'
										placeholder='Enter course duration in minutes'
										name='duration'
										value={values.duration}
										onChange={handleChange}
									/>
									{errors.duration && touched.duration ? (
										<FormStrap.Text>{errors.duration}</FormStrap.Text>
									) : null}
								</FormStrap.Group>
								<FormStrap.Group className='mb-3' controlId='course-authors'>
									<FormStrap.Label>Authors</FormStrap.Label>
									<FieldArray
										name='authors'
										render={(arrayHelpers) => (
											<Box>
												{values.authors.map((author, index) => (
													<Box key={index}>
														<Field
															className='form-control'
															name={`author`}
															type='text'
															placeholder='Name Surname'
															onChange={handleChange}
															value={values.authors[index]}
														/>
														<Button
															className='my-1'
															variant='success'
															size='sm'
															onClick={() => arrayHelpers.push('')}
														>
															+
														</Button>{' '}
														<Button
															className='my-1'
															variant='danger'
															size='sm'
															onClick={() => arrayHelpers.pop(' ')}
															disabled={values.authors.length === 1}
														>
															-
														</Button>
													</Box>
												))}
											</Box>
										)}
									/>
								</FormStrap.Group>

								<FormStrap.Group className='mb-3' controlId='login-submit'>
									<Button
										type='submit'
										variant={`${
											Object.keys(errors).length > 0 ? 'danger' : 'success'
										}`}
									>
										Sign Up
									</Button>
								</FormStrap.Group>
							</Form>
						)}
					</Formik>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button
						variant='primary'
						onClick={() => {
							handleClose();
							poop();
						}}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
