import { useFormik } from 'formik'

const Form = () => {
	const validateForm = values => {
		const errors = {}
		if (!values.name) {
			errors.name = 'Required'
		} else if (values.name.length > 15) {
			errors.name = 'Must be 15 characters or less'
		}
		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}

		if (!values.amount) {
			errors.amount = 'Required'
		} else if (values.amount > 1000) {
			errors.amount = 'You can send only 1000'
		}
		return errors
	}
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			amount: 0,
			currency: '',
			text: '',
			terms: false,
		},
		validate: validateForm,
		onSubmit: values => {
			values.name = values.name.trim()
			console.log(values)
			formik.resetForm()
		},
	})

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='flex bg-blue-200 p-8 flex-col gap-4 border-4 w-[450px]'
		>
			<h2>Send donate</h2>
			<label htmlFor='name'>Name</label>
			<input
				id='name'
				name='name'
				type='text'
				{...formik.getFieldProps('name')}
			/>
			{formik.touched.name && formik.errors.name ? (
				<div className='text-red-700'>{formik.errors.name}</div>
			) : null}
			<label htmlFor='email'>Email</label>
			<input
				id='email'
				name='email'
				type='email'
				{...formik.getFieldProps('email')}
			/>{' '}
			{formik.touched.email && formik.errors.email ? (
				<span className='text-red-700'>{formik.errors.email}</span>
			) : null}
			<label htmlFor='amount'>Amount</label>
			<input
				id='amount'
				name='amount'
				type='number'
				{...formik.getFieldProps('amount')}
			/>
			{formik.touched.amount && formik.errors.amount ? (
				<span className='text-red-700'>{formik.errors.amount}</span>
			) : null}
			<label htmlFor='currency'>Currency</label>
			<select
				id='currency'
				name='currency'
				value={formik.values.currency}
				onChange={formik.handleChange}
			>
				<option value=''>Pick value</option>
				<option value='USD'>USD</option>
				<option value='UAH'>UAH</option>
			</select>
			<label htmlFor='text'>Message</label>
			<textarea
				id='text'
				name='text'
				value={formik.values.text}
				onChange={formik.handleChange}
			/>
			<label>
				<input
					name='terms'
					type='checkbox'
					value={formik.values.terms}
					onChange={formik.handleChange}
				/>{' '}
				I am agree with private policy!
			</label>
			<button className='bg-green-500' type='submit'>
				Send
			</button>
		</form>
	)
}

export default Form
