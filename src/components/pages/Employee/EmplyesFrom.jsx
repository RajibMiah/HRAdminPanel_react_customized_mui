import React , {useEffect } from 'react'
import { 
      Grid,   
   } from '@material-ui/core'
import {useFrom , From} from './useForm'
import {Controls} from '../../controls/controls'


const genderItems = [
  {id:'male' , title :"Male"},
  {id:'female' , title :"Female"},
  {id:'other' , title :"Other"},
]
const employeeService  =[
  {id:"1" , title :"Accounting"},
  {id:"2" , title :"Marketing"},
  {id:"3" , title :"Development"},
  {id:"4" , title :"HR"},
  {id:"5" , title :"Softwere"},
]

const initalFielValue = {
  id : 0,
  fullName:'',
  email:'',
  mobile: '',
  city: '',
  gender:'male',
  departmentId: "",
  hireDate : new Date(),
  isPermanent: false,

}




const EmplyesFrom = () => {
  const {value , setValue  , handleInputChange} =  useFrom(initalFielValue)
  return (
    <From>
      <Grid container>
        <Grid item xs = {6} >
            <Controls.Input
               name ="fullName"
               label = "Full Name"
               value ={value.fullName}
               onChange ={handleInputChange}
            />
           <Controls.Input
            variant = "outlined"
            label = "Email"
            name = "email"
            onChange = {handleInputChange}
            value = {value.email}
          />
           <Controls.Input
            variant = "outlined"
            label = "Mobile"
            name = "mobile"
            onChange = {handleInputChange}
            value = {value.mobile}
          />
           <Controls.Input
            variant = "outlined"
            label = "city"
            name = "city"
            onChange = {handleInputChange}
            value = {value.city}
          />
        </Grid>
        <Grid item xs = {6}>
          <Controls.RadioGroupContent
            label  = "Gender"
            name = 'gender'
            value = {value.gender}
            onChange = {handleInputChange}  
            items = {genderItems}        
          />
           <Controls.DatePiker
            name = "hireDate"
            label = "Hire Picker"
            onChange = {handleInputChange}
            value = {value.hireDate}
          />
          <Controls.select
            name = 'departmentId'
            label = 'Department'
            onChange = {handleInputChange}
            value = {value.departmentId}
            options = {employeeService}
          />
          
          <Controls.CheckBox
            name = 'isPermanent'
            label = 'Permanent emplyee'
            onChange = {handleInputChange}
            value = {value.isPermanent}
            // options = {employeeService}
          />
          <div>
            <Controls.Button 
               text = 'submit'
               type = 'submit'
            />
             <Controls.Button 
               text = 'reset'
               color  = 'default'
            />
          </div>
         
        </Grid>

      </Grid>
    </From>
  )
}

export default EmplyesFrom
