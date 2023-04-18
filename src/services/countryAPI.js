import axios from 'axios'

const getCountries = () => {
	return axios.get(
		'https://restcountries.com/v2/all?fields=name,capital,flags,population,region'
	)
}
const getCountry = name => {
	return axios.get(`https://restcountries.com/v2/name/${name}`)
}

const countriesAPI = {
	getCountries,
	getCountry,
}
export default countriesAPI
