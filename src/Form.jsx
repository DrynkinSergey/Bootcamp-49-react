const Form = () => {
	return (
		<form className='flex bg-blue-300 p-8 flex-col gap-4 border-4 w-1/2'>
			<h2>Send donate</h2>
			<label htmlFor='name'>Name</label>
			<input id='name' name='name' type='text' />
			<label htmlFor='email'>Email</label>
			<input id='email' name='email' type='email' />
			<label htmlFor='amount'>Amount</label>
			<input id='amount' name='amount' type='number' />
			<label htmlFor='currency'>Currency</label>
			<select id='currency' name='currency'>
				<option value=''>Pick value</option>
				<option value='USD'>USD</option>
				<option value='UAH'>UAH</option>
			</select>
			<label htmlFor='text'>Message</label>
			<textarea id='text' name='text' />
			<label>
				<input name='terms' type='checkbox' /> I am agree with private policy!
			</label>
			<button className='bg-green-500' type='submit'>
				Send
			</button>
		</form>
	)
}

export default Form
