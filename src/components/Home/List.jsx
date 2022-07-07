import React,{useState,useEffect} from 'react'
import { Typography, Box, TableContainer,Table,TableCell,TableHead,TableBody,TableRow,Paper,IconButton, Tooltip} from "@mui/material"
import  EditIcon from "@mui/icons-material/Edit"
import VisibilityIcon from "@mui/icons-material/Visibility"
import DeleteIcon from "@mui/icons-material/Delete"
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
const [name, setname] = useState([])
const [new1,setnew]=useState(false)
useEffect(()=>{
       
     getall()
     
},[new1])
   const getall= async ()=>{
        try{
const bname=await axios.get("http://localhost:8080/posts")
setname( bname.data)
// console.log(bname.data)
        }
        catch{
console.log("wrong")
        }
    }
    async function handledelete(id){
try{
await axios.delete(`http://localhost:8080/posts/${id}`)
setnew(!new1)
}
catch{
  console.log("Delete  error");
}
    }
    return (
    <>
        <Box textalign="center" p={2}>
  <Typography>Blog list</Typography>
      </Box>
      <TableContainer spacing={1} component={Paper}>
      <Table>
         <TableHead>
          <TableRow style={{backgroundColor:"red"}}>
            <TableCell textalign="center">No</TableCell>
            <TableCell textalign="center">Blog Name</TableCell>
            <TableCell textalign="center">Blog content</TableCell>
            <TableCell textalign="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {name.map((e,i)=>{
                return (
   <TableRow key={i}>
<TableCell align='center'>{i+1}</TableCell>
<TableCell align='center'>{e.name}</TableCell>
<TableCell align='center'>{e.content}</TableCell>
<TableCell align='center'>
<Tooltip title="View">
    <IconButton><Link to={`/view/${e.id}`}>
        <VisibilityIcon color="primary"/>
        </Link></IconButton>
        </Tooltip>

        <Tooltip title="Edit">
    <IconButton><Link to={`/edit/${e.id}`}>
        <EditIcon color="primary"/>
        </Link></IconButton>
        </Tooltip>
        
        <Tooltip title="Delete">
    <IconButton onClick={()=>handledelete(e.id)}>
        <DeleteIcon color="primary"/>
        </IconButton>
        </Tooltip>

</TableCell>
            </TableRow>
                )
            })}
         
        </TableBody>

      </Table>
      </TableContainer>

    </>
  )
}

export default List