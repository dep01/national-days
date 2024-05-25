import create from 'zustand';
import ConvertHolidays from 'rbase-model/holidayModel';
import * as calendarProvider from 'rbase-providers/calendar'

export function base_state(props) {
  return {
    loading: props?.loading ?? true,
    holidays_data: ConvertHolidays.listOfholidayModel(props?.holidays_data??[])
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: () => {
    initialize()
  },
  cleanUp: () => {
    useStore.setState(base_state());
  },
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  holidays_data:(value = []) =>useStore.setState({holidays_data:ConvertHolidays.listOfholidayModel(value)})
};


 const initialize = async()=>{
  try {
      getHolidays()
  } catch (error) {
    
  }
}

export const getHolidays =async()=>{
  setter.loading(true)
  try {
    const resp = await calendarProvider.getHolidays(2024,"ID")
    console.log(resp.data)
    setter.holidays_data(resp.data)
  } catch (error) {
    
  }
  setter.loading(false)
}