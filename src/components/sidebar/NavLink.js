import { Box, Typography } from '@mui/material';
import React from 'react';
import classes from './style.module.css'


const navLinks=[
    {id:1,name:"Dashboard",icon:"dashboard"},
    {id:2,name:"Client",icon:"client"},
    {id:3,name:"Matters",icon:"matters"},
    {id:4,name:"Contacts",icon:"contact"},
    {id:5,name:"Accounts",icon:"accounts"},
    {id:6,name:"Nominal",icon:"nominal"},
    {id:7,name:"Purchase",icon:"purchase"},
    {id:8,name:"Admin",icon:"admin"},
    {id:9,name:"Free Earne",icon:"free-earne"},
    {id:10,name:"Reports",icon:"reports"},
]

const NavLink = () => {
  return (
    <Box component="ul" className={classes.navLinkCnt}>
        {navLinks.map(link=>(
          <Box component="li" key={link.id} className={classes.navLink}>
          <img src={`icons/${link.icon}.svg`} width={20} height={20}/>
          <Typography component="a" href='#' className={classes.navLinkText}>{link.name}</Typography>
      </Box>
        ))}
    </Box>
  )
}

export default NavLink