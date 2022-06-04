import React from 'react'
import Box from '@material-ui/core/Box';
import { Container, IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root:{


   },
   box:{
   backgroundColor:'#aa00ff',
   height:'65px'

   },
   img:{
width:'65%',
height:'100%',

   }
  }));
export default function BannerHeader() {
    const classes = useStyles();
    return (
        
        <Box className={classes.box}>
              <img  src="https://cdn.dsmcdn.com/mrktng/crm/topBnr/aug/18/ozel-firsat.gif" className={classes.img}></img>

        </Box>
    )
}
