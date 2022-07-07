
import React,{useState,useEffect} from 'react'
import { Typography, Box, TableContainer,Table,TableCell,TableHead,TextField,TableBody,TableRow,Paper,IconButton,Button, Grid,Tooltip} from "@mui/material"
import {Link,useNavigate,useParams} from "react-router-dom"
import axios from 'axios'
const Edit = () => {
    
const navigate=useNavigate()
      const {id}=useParams();
  const [data,setdata]=useState({
name:"",
content:""
  })
//   console.log(id);

  useEffect(() => {
    const getdata=async ()=>{
try{
const a=await axios.get(`http://localhost:8080/posts/${id}`)
setdata(a.data)
}
catch{
  console.log("error")
}

    }
getdata()   
  }, [])
  
  function handlesubmit(e){
  setdata({
    ...data,
    [e.target.name]:e.target.value
  })
  // console.log(data);
}
  async function onsubmit(e){
  e.preventDefault()
  
    try{
await axios.put(`http://localhost:8080/posts/${id}`,data)
navigate("/")
    }
    catch{
      console.log("post error")
    }
  
}
  return (
    <>
        {/* <Box  textAlign="center" p={2}>
        <Typography>Edit blog</Typography>
    </Box> */}
<Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
        <Box textAlign="center">
            <Typography variant="h4">Edit student</Typography>
        </Box>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}  sm={6}>
                <TextField autoComplete="id" name="id" label="ID"   disabled value={id} fullWidth/>
                </Grid>
                <Grid item xs={12}  sm={6}>
                <TextField autoComplete="name" onChange={e=>{handlesubmit(e)}} name="name" label="Blog Name" value={data.name}  fullWidth/>
                </Grid>
                <Grid item xs={12}  sm={6}>
                <TextField  onChange={e=>{handlesubmit(e)}} autoComplete="content" name="content" label="Blog Content"  value={data.content}  fullWidth/>
                </Grid>
                
                </Grid>  
                <Box m={3}>
                    <Button type="button" variant='contained' onClick={e=>onsubmit(e)} color="primary">Update</Button></Box>  
                
        </form>
         <Box m={3} textAlign="center">
      <Link to="/">  <Button variant="contained" color="primary">Back to Home</Button>
    </Link></Box>
    </Grid>

</Grid>
    </>
  )
}

export default Edit