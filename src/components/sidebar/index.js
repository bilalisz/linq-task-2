import { Box } from '@mui/material'
import React from 'react';
import classes from './style.module.css'
import NavLink from './NavLink';

const Sidebar = () => {
  return (
    <Box component="aside" className={classes.asideCnt} >
        <Box component="figure" className={classes.logoCnt}>
        <Box component="img" sx={{mt:1}} src='/images/logo.svg' width={"50%"} height={"50%"} />
        </Box>
        <Box component="nav" className={classes.navCnt}>
            <NavLink/>
        </Box>
        <Box className={classes.profileCnt}></Box>
    </Box>
  )
}

export default Sidebar