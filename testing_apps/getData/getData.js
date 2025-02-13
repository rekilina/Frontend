const axios = require('axios');
const mapArrToStrings = require('../mapArrayToString/mapArrayToString');

const getData = async () => {
	try {
		const response = await axios.get();
		const userIds = response.data.map(user => user.id);
		return mapArrToStrings(userIds);
	} catch (err) {
		console.log("Error: ", err);
	}
}

module.exports = getData;