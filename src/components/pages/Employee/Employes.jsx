import React, { useState } from 'react'
import EmployesFrom from '../../pages/Employee/EmplyesFrom'
import PageHeader from '../../PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import { makeStyles, Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core'
import { useTable } from '../../controls/useTable'
import * as emplyeeService from '../../services/employeService'
import { Controls } from '../../controls/controls'
import { Search } from '@material-ui/icons'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add'
import Popup from '../../controls/PopUpDialog'
import * as EmployeeData from '../../services/employeService'
import Notification from '../../controls/Notification'
import ConfirmDialog from '../../controls/ConfirmDialog'

const useStyle = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)

  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px'
  }
}))

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'department', label: 'Department' },
  { id: 'actions', label: 'Actions', disableSorting: true },
]

const Employes = () => {
  const classes = useStyle()
  const [records, setRecords] = useState(emplyeeService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [notify , setNotify] = useState({isOpen:false , message :'' , type :''})
  const [confirmDialog , setConfimDialog] = useState({ isOpen:false ,title :'' , subTitle : ''})

  const {
    TblContainer,
    Tbhead,
    TbPagination,
    recordAfterPagingAndSorting
  } = useTable(records, headCells, filterFn)

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value === "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0)
            EmployeeData.insertEmployee(employee)
        else
            EmployeeData.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(EmployeeData.getAllEmployees())
        setNotify({
          isOpen : true ,
          message: 'submited successfuly',
          type:'success'
        })
  }
  const openInPopup = (item) => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }
  
  const handleDelete = (itemId) =>{
      setConfimDialog({
        ...ConfirmDialog,
        isOpen:false
      })
      EmployeeData.deleteEmployee(itemId)
      setRecords(EmployeeData.getAllEmployees())
      setNotify({
        isOpen : true ,
        message: 'deleted successfuly',
        type:'error'
      })
    
    
  }

  return (
    <div>
      <PageHeader
        title="New Emplyees"
        subTitle="From design with validation"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>

        <Toolbar>
          <Controls.Input
            label="Search Emplyees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position>
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text='Add New'
            variant='outlined'
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {setOpenPopup(true) ; setRecordForEdit(null) }}
          />
        </Toolbar>

        <TblContainer>
          <Tbhead />
          <TableBody>
            {
              recordAfterPagingAndSorting().map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>
                    <Controls.ActionButton
                      color='primary'
                      onClick={() => openInPopup(item)}
                     
                    >
                      <EditIcon fontSize='small'></EditIcon >

                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color='secondary'
                      onClick = {()=>{setConfimDialog({
                        isOpen:true ,
                        title:'Are you sure you went to delete this reocrd',
                        subTitle : 'You cant undo this operation',
                        onConfirm: ()=>handleDelete(item.id)
                      })}}
                   
                    >
                      <CloseIcon fontSize='small'></CloseIcon>

                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TblContainer>
        <TbPagination />
      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployesFrom
          recordForEdit  = {recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <Notification
         notify = {notify}
         setNotify = {setNotify}
        
      />
      <ConfirmDialog
         confirmDialog = {confirmDialog}
         setConfimDialog = {setConfimDialog}

      />

    </div>
  )
}

export default Employes
