import React, { useEffect } from 'react'
import {
  Grid,
} from '@material-ui/core'
import { useFrom, From } from './useForm'
import { Controls } from '../../controls/controls'
import * as EmployeeData from '../../services/employeService'

const genderItems = [
  { id: 'male', title: "Male" },
  { id: 'female', title: "Female" },
  { id: 'other', title: "Other" },
]
const initailStateValue = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,

}

const EmplyesFrom = (props) => {
  const {addOrEdit , recordForEdit} = props

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //form validation work is pandding
   
    if (validate()) {
      addOrEdit(values, resetForm)
    }
  }
  useEffect(()=>{
     if(recordForEdit != null){
       setValues({
         ...recordForEdit
       })
     }
  } , [recordForEdit])

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useFrom(initailStateValue, true, validate)
  return (
    <From onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6} >
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            onChange={handleInputChange}
            value={values.email}
          />
          <Controls.Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            onChange={handleInputChange}
            value={values.mobile}
          />
          <Controls.Input
            variant="outlined"
            label="city"
            name="city"
            onChange={handleInputChange}
            value={values.city}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroupContent
            label="Gender"
            name='gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.DatePiker
            name="hireDate"
            label="Hire Picker"
            onChange={handleInputChange}
            value={values.hireDate}
          />
          <Controls.select
            name='departmentId'
            label='Department'
            onChange={handleInputChange}
            value={values.departmentId}
            options={EmployeeData.getDepartmentCollection()}
          />

          <Controls.CheckBox
            name='isPermanent'
            label='Permanent emplyee'
            onChange={handleInputChange}
            value={values.isPermanent}
          />
          <div>
            <Controls.Button
              text='submit'
              type='submit'
            />
            <Controls.Button
              text='reset'
              color='default'
              onClick={resetForm}
            />
          </div>

        </Grid>

      </Grid>
    </From>
  )
}

export default EmplyesFrom
