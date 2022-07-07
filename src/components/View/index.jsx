
import React,{useEffect,useState} from 'react'
import { Typography, Box, TableContainer,Table,TableCell,TableHead,TableBody,TableRow,Paper,IconButton,Button, Tooltip} from "@mui/material"
import {Link,useParams} from "react-router-dom"
import axios from 'axios';
const View = () => {
  const {id}=useParams();
  const [data,setdata]=useState([])
// console.log(id)
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
  }, [id])
  
  return (
    <>
    <Box  textAlign="center" p={2}>
        <Typography>Blog page</Typography>
    </Box>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>ID </TableCell>
                    <TableCell align='center'>Blog Heading </TableCell>
                    <TableCell align='center'>Blog Content</TableCell>
                </TableRow>
                  </TableHead>
                 <TableBody>
            <TableRow>
<TableCell align='center'>{data.id}</TableCell>
<TableCell align='center'>{data.name}</TableCell>
<TableCell align='center'>{data.content}</TableCell>
                </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
    <Box m={3} textAlign="center">
      <Link to="/">  <Button variant="contained" color="primary">Back to Home</Button>
    </Link></Box>
    </>
  )
}

export default View;