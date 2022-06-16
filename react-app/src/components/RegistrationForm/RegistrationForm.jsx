import React from 'react';
import { Button, Form as FormStrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import yupSchemas from '../../services/utils/yupSchemas';

export default function RegistrationForm() {
	return (
		<>
			<Formik
				validationSchema={yupSchemas.registrationSchema}
				initialValues={{
					name: '',
					email: '',
					password: '',
					passwordConfirmation: '',
				}}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}
				// validate={validate}
			>
				{({ handleSubmit, handleChange, values, touched, errors }) => (
					<Form id='registration-form' onSubmit={handleSubmit}>
						<FormStrap.Group className='mb-3' controlId='registration-name'>
							<FormStrap.Label>Name</FormStrap.Label>
							<Field
								className='form-control'
								type='text'
								placeholder='Enter name'
								name='name'
								value={values.name}
								onChange={handleChange}
							/>
							{errors.name && touched.name ? (
								<FormStrap.Text>{errors.name}</FormStrap.Text>
							) : null}
						</FormStrap.Group>
						<FormStrap.Group className='mb-3' controlId='registration-email'>
							<FormStrap.Label>Email </FormStrap.Label>
							<Field
								className='form-control'
								type='email'
								placeholder='Enter email'
								name='email'
								value={values.email}
								onChange={handleChange}
							/>
							{errors.email && touched.email ? (
								<FormStrap.Text>{errors.email}</FormStrap.Text>
							) : null}
						</FormStrap.Group>
						<FormStrap.Group className='mb-3' controlId='registration-password'>
							<FormStrap.Label>Password</FormStrap.Label>
							<Field
								className='form-control'
								type='password'
								placeholder='Enter password'
								name='password'
								value={values.password}
								onChange={handleChange}
							/>
							{errors.password && touched.password ? (
								<FormStrap.Text>{errors.password}</FormStrap.Text>
							) : null}
							<Field
								className='mt-2 form-control'
								type='password'
								placeholder='Confirm password'
								name='passwordConfirmation'
								value={values.passwordConfirmation}
								onChange={handleChange}
							/>
							{errors.passwordConfirmation && touched.passwordConfirmation ? (
								<FormStrap.Text>{errors.passwordConfirmation}</FormStrap.Text>
							) : null}
						</FormStrap.Group>
						<FormStrap.Group className='mb-3' controlId='registration-submit'>
							<Button
								type='submit'
								variant={`${
									Object.keys(errors).length > 0 ? 'danger' : 'success'
								}`}
							>
								Sign Up
							</Button>
						</FormStrap.Group>
						<FormStrap.Group className='mb-3'>
							<FormStrap.Text className='text-muted'>
								Already have an account? <Link to='/login'>Sign in now</Link>
							</FormStrap.Text>
						</FormStrap.Group>
					</Form>
				)}
			</Formik>
		</>
	);
}
