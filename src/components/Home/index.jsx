import React,{useState,useEffect} from 'react'
import { Typography, Box, TableContainer, Grid, TextField, Button,Table,TableBody,TableCell,TableHead,TableRow,Paper,IconButton,Tooltip } from "@mui/material"
import { deepPurple, green } from '@mui/material/colors';
import   {Link} from "react-router-dom"
import List from './List';
import axios from 'axios';
const Home = () => {
const [data, setdata] = useState({
  name:"",
  content:""
})
const [status,setstatus]=useState(false)
function handlesubmit(e){
  setdata({
    ...data,
    [e.target.name]:e.target.value
  })
  // console.log(data);
}
if(status)
return <Home/>
async function onsubmit(e){
  e.preventDefault()
  
    try{
await axios.post(`http://localhost:8080/posts`,data)
setstatus(true)
    }
    catch{
      console.log("post error")
    }
  
}
  return (
    <>
    <Box textAlign="center" p={2}>
      <Typography variant="h4">
        Blog page
      </Typography>
    </Box>
    <Grid container spacing={2} justify="center">
      <Grid item md={6} xs={12}>
 <Box textAlign="left" p={2} mb={2}>
<Typography>Add blogs</Typography>
 </Box>
 <form noValidate>
  <Grid container spacing={1}  md={12} xs={12}>
    <Grid item xs={12}  >
      <TextField name='name' id="name" label="Blog heading" onChange={e=>handlesubmit(e)} autoFocus fullWidth/>
    </Grid>
    <Grid item  xs={12}  >
      <TextField name='content' id='content' onChange={e=>handlesubmit(e)} label="Blog Content" fullWidth />
    </Grid>
  </Grid>
  <Box m={3}>
    <Button  type="submit" variant='contained' onClick={e=>{
      onsubmit(e)
    }} color="primary"> Add blog</Button>
  </Box>
 </form>
      </Grid>
       <Grid item md={6} xs={12}>
      <List/>
      </Grid>
      
 </Grid>
    </>
  )
}

export default Home