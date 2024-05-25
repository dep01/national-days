import {sys_get,sys_post,sys_put,sys_del} from '../utils/api_client.js';

const uriHolidays = '/publicholidays'
const uriCountry = '/availablecountries'
const uriLongWeekend = '/longweekend'
export async function getAvailableCountries(){
  try {
    const response = await sys_get({endpoint: uriCountry, auth:false});
    return response;
  } catch (error) {
    
  }
}
export async function getHolidays(year=0,countryId="ID"){
  try {
    const response = await sys_get({endpoint: `${uriHolidays}/${year}/${countryId}`});
    return response;
  } catch (error) {
    
  }
}
export async function getLongWeekend(year=0,countryId="ID"){
  try {
    const response = await sys_get({endpoint: `${uriLongWeekend}/${year}/${countryId}`});
    return response;
  } catch (error) {
    
  }
}