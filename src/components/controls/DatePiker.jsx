import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePiker = (props) => {
  const { name, value, lable, onChange } = props
  const converToDefaultEventPara = (name , value) =>({
    target:{
      name , value
    }
})
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label= "hire date"
        format="MM/dd/yyyy"
        value={value}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => onChange(converToDefaultEventPara(name , date))}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePiker
