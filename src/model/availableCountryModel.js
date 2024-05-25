// HOW TO IMPORT ?
// const Convert = require('location/availableCountryModel.js'); 
// OR
// import Convert from 'location/availableCountryModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfavailableCountryModel(data)
// FOR ARRAY
// const data = Convert.listOfavailableCountryModel(data)
const modelOfDataavailableCountryModel = {
	countryCode: '',
	name: ''
};
function listOfavailableCountryModel(data = []) {
  var listData = [modelOfDataavailableCountryModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				countryCode: val.countryCode ?? null,
				name: val.name ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfavailableCountryModel(data = null) {
  var objectData = modelOfDataavailableCountryModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.countryCode = data.countryCode ?? null;
		objectData.name = data.name ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfavailableCountryModel: listOfavailableCountryModel,
  objectOfavailableCountryModel: objectOfavailableCountryModel,
};




  