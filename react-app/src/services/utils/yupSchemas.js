import * as yup from 'yup';

const LOGIN_SCHEMA = yup.object().shape({
	email: yup.string().email('Invalid email').required('Required'),
	password: yup.string().required('Required'),
});

const REGISTERATION_SCHEMA = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Too Short!')
		.max(24, 'Too Long!')
		.required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup
		.string()
		.min(6, 'Too Short!')
		.max(14, 'Too Long!')
		.required('Required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords do not match')
		.required('Required'),
});

const COURSE_SCHEMA = yup.object().shape({
	title: yup
		.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Required'),
	description: yup
		.string()
		.min(24, 'Too Short!')
		.max(124, 'Too Long!')
		.required('Required'),
	authors: yup.array().of(yup.string()).required('Required'),
	duration: yup
		.number('Paste the duartion time in minutes')
		.integer('The number has to be integer')
		.min(15, 'At least 15 minutes!')
		.max(300, 'Maximum duration is 300 minutes!')
		.required('Required'),
});

const yupSchemas = {
	loginSchema: LOGIN_SCHEMA,
	registrationSchema: REGISTERATION_SCHEMA,
	courseSchema: COURSE_SCHEMA,
};

export default yupSchemas;
