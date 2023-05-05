import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
const FormComponent = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				amount: 0,
				currency: '',
				text: '',
				terms: false,
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.max(10, 'Length must be less then 10')
					.required('Required'),
				email: Yup.string().email('It is not email').required('Required'),
				amount: Yup.number().max(1000, 'Max value is 1000'),
			})}
			onSubmit={values => {
				console.log(values)
			}}
		>
			{() => (
				<Form className='flex bg-blue-200 p-8 flex-col gap-4 border-4 w-[450px]'>
					<h2>Send donate</h2>
					<label htmlFor='name'>Name</label>
					<Field type='text' name='name' />
					<ErrorMessage name='name' component='div' />
					<label htmlFor='email'>Email</label>
					<Field type='email' name='email' />
					<ErrorMessage name='email' component='div' />
					<label htmlFor='amount'>Amount</label>
					<Field name='amount' type='number' />
					<ErrorMessage name='amount' component='div' />

					<label htmlFor='currency'>Currency</label>
					<Field as='select' name='currency'>
						<option value=''>Pick value</option>
						<option value='USD'>USD</option>
						<option value='UAH'>UAH</option>
					</Field>
					<label htmlFor='text'>Message</label>
					<Field as='textarea' id='text' name='text' />
					<label>
						<Field name='terms' type='checkbox' /> I am agree with private
						policy!
					</label>
					<button className='bg-green-500' type='submit'>
						Send
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default FormComponent
