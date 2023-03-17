import React from 'react'
import "./navbar.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 90,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));
   
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));


function Navbar({setCategory, handelClick}) {

  function handelChange(e){
    setCategory(e.target.value)
  }

  return (
      <div className='navbardiv'>
          <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography
                    id = "head"
                    variant="h4"
                    // noWrap
                    component="div"
                    sx={{ flexGrow: 1}}
                >
                   Scraper
                </Typography>
                <Search sx={{width: "50%"}}>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handelChange}
                    />
                </Search>
                    <SearchIcon className='searchicon' onClick={handelClick}/>
                </Toolbar>
            </AppBar>
        </Box>
      </div>
  )
}
  
  export default Navbar


  