// HOW TO IMPORT ?
// const Convert = require('location/longWeekendModel.js'); 
// OR
// import Convert from 'location/longWeekendModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOflongWeekendModel(data)
// FOR ARRAY
// const data = Convert.listOflongWeekendModel(data)
const modelOfDatalongWeekendModel = {
	startDate: '',
	endDate: '',
	dayCount: 0,
	needBridgeDay: false
};
function listOflongWeekendModel(data = []) {
  var listData = [modelOfDatalongWeekendModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				startDate: val.startDate ?? null,
				endDate: val.endDate ?? null,
				dayCount: val.dayCount ?? null,
				needBridgeDay: val.needBridgeDay ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOflongWeekendModel(data = null) {
  var objectData = modelOfDatalongWeekendModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.startDate = data.startDate ?? null;
		objectData.endDate = data.endDate ?? null;
		objectData.dayCount = data.dayCount ?? null;
		objectData.needBridgeDay = data.needBridgeDay ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOflongWeekendModel: listOflongWeekendModel,
  objectOflongWeekendModel: objectOflongWeekendModel,
};




  