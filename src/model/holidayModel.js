// HOW TO IMPORT ?
// const Convert = require('location/holidayModel.js'); 
// OR
// import Convert from 'location/holidayModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfholidayModel(data)
// FOR ARRAY
// const data = Convert.listOfholidayModel(data)
const modelOfDataholidayModel = {
	date: '',
	localName: '',
	name: '',
	countryCode: '',
	fixed: false,
	global: false,
	counties: null,
	launchYear: null,
	types: []
};
function listOfholidayModel(data = []) {
  var listData = [modelOfDataholidayModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				date: val.date ?? null,
				localName: val.localName ?? null,
				name: val.name ?? null,
				countryCode: val.countryCode ?? null,
				fixed: val.fixed ?? null,
				global: val.global ?? null,
				counties: val.counties ?? null,
				launchYear: val.launchYear ?? null,
				types: val.types ?? []
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfholidayModel(data = null) {
  var objectData = modelOfDataholidayModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.date = data.date ?? null;
		objectData.localName = data.localName ?? null;
		objectData.name = data.name ?? null;
		objectData.countryCode = data.countryCode ?? null;
		objectData.fixed = data.fixed ?? null;
		objectData.global = data.global ?? null;
		objectData.counties = data.counties ?? null;
		objectData.launchYear = data.launchYear ?? null;
		objectData.types = data.types ?? [];
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfholidayModel: listOfholidayModel,
  objectOfholidayModel: objectOfholidayModel,
};




  