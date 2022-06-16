import React from 'react';
import { Button, Form as FormStrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import yupSchemas from '../../services/utils/yupSchemas';

export default function LoginForm() {
	return (
		<>
			<Formik
				validationSchema={yupSchemas.loginSchema}
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}
				// validate={validate}
			>
				{({ handleSubmit, handleChange, values, touched, errors }) => (
					<Form id='login-form' onSubmit={handleSubmit}>
						<FormStrap.Group className='mb-3' controlId='login-email'>
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
						<FormStrap.Group className='mb-3' controlId='login-password'>
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
						<FormStrap.Group className='mb-3'>
							<FormStrap.Text className='text-muted'>
								Don't have an account?{' '}
								<Link to='/registration'>Sign up now</Link>
							</FormStrap.Text>
						</FormStrap.Group>
					</Form>
				)}
			</Formik>
		</>
	);
}
