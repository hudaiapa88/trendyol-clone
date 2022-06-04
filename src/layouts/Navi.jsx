import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    
      display: 'block',
      backgroundColor:'white',
  
    backgroundColor:'white',
  },
  search: {
    position: 'relative',
    width:'%100',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white,0.15),
    '&:hover': {
      border: '1px solid orange',
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    
   borderRadius:'3px',
    width: '100%',
   
    
    backgroundColor:'#f5f5f5',
  },
  searchIcon: {
    padding: theme.spacing(0,1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'orange',
  },
  button:{
   color:'#212121',
    '&:hover':{
      color: 'orange',
      backgroundColor:'white'
    },
  textTransform:'capitalize'

  },
  buttonSmall:{
    color:'#bdbdbd',
     '&:hover':{
       
       backgroundColor:'white'
     },
   textTransform:'capitalize',
   fontSize:'x-small'
     
   },
  inputRoot: {
    backgroundColor:'#f5f5f5',
    color: '#f57c00'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.title} elevation={0}>
        <Toolbar>
          <Grid container
  direction="column"
>
       <Grid container
  direction="row"
  justifyContent="flex-end"
  alignItems="center">
 <Button
          companent
      disableRipple='false'
        className={classes.buttonSmall}
        size='small'
      >
       
       İndirim Kuponlarım
        
        
      </Button>
      <Button
          companent
      disableRipple='false'
        className={classes.buttonSmall}
        size='small'
      >
       
       Trendyol'da Satış Yap
        
        
      </Button>
      <Button
          companent
      disableRipple='false'
        className={classes.buttonSmall}
       size='small'
      >
       
       Yardım & Destek
        
        
      </Button>
       </Grid>

         
          <Grid container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center">
          <Grid >
            <IconButton className={classes.button}>
              <img className={classes.img} src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg" width="50%" height="50%"></img>
            </IconButton>
            
          </Grid>
        <Grid>
          <Grid className={classes.search}
          container
  direction="row">
        
            <InputBase
              placeholder="Aradığınız Ürün, Kategori veya Markayı yazınız."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            ></InputBase>
             <Grid >
              <SearchIcon className={classes.searchIcon}/>
            </Grid>

          </Grid>
          </Grid>
          <Grid>
          <Button
          companent
      disableRipple='false'
        className={classes.button}
        startIcon={<PersonIcon />}
      >
       
      giriş yap
        
        
      </Button>
      <Button
          companent
      disableRipple='false'
        className={classes.button}
        startIcon={<FavoriteBorderIcon />}
      >
       
      Favorilerim
        
        
      </Button>
      <Button
          companent
      disableRipple='false'
        className={classes.button}
        startIcon={<ShoppingCartOutlinedIcon />}
      >
       
      Sepet
        
        
      </Button>
          </Grid>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
