import React from 'react';
//FrameWork Material-UI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar' 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//icons
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CloudIcon from '@material-ui/icons/Cloud';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import InfoIcon from '@material-ui/icons/Info';

export default function ButtonAppBar({ setCurrentiFrame }) {
  
  const media = useMediaQuery('(min-width: 1086px)');
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: media? '15%': '0%',
      marginRight: media? '15%': '0%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menu: {
      backgroundColor: '#4caf50',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menu}>
          <Grid container>
            <Grid item xs>
                <Button color="inherit" onClick={()=> setCurrentiFrame(0)} >
                  <Box m={1} alignSelf='center' >
                  <HomeIcon style={{ color: 'white', margin: '3px'}} fontSize='small' />
                </Box>
                Home 
              </Button>
            </Grid>
            <Grid item xs>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button color="inherit" {...bindTrigger(popupState)}>
                      <Box m={1} alignSelf='center' >
                        <CameraAltIcon style={{ color: 'white', margin: '3px'}} fontSize='small' />
                      </Box>
                      Overview
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(1);}}>Summary</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(2);}}>Irrigation 1</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(3);}}>Irrigation 2</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(4);}}>Irrigation 3</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(5);}}>Irrigation 4</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
            <Grid item xs>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button color="inherit" {...bindTrigger(popupState)}>
                      <Box m={1} alignSelf='center' >
                        <PersonIcon style={{ color: 'white', margin: '3px'}} fontSize='small' />
                      </Box>
                      Control
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(15);}}>Irrigation 1</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(16);}}>Irrigation 2</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(17);}}>Irrigation 3</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(18);}}>Irrigation 4</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
            <Grid item xs>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button color="inherit" {...bindTrigger(popupState)}>
                      <Box m={1} alignSelf='center' >
                        <CloudIcon style={{ color: 'white', margin: '3px'}} fontSize='small' />
                      </Box>
                      Enviroment
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(6);}}>Climate</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(13);}}>Energy</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(14);}}>Robot</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
            <Grid item xs>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button color="inherit" {...bindTrigger(popupState)}>
                      <Box m={1} alignSelf='center' >
                        <TrendingUpIcon style={{ color: 'white', margin: '3px'}} fontSize='small' />
                      </Box>
                      Graphs
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(7);}}>Summary</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(8);}}>Irrigation 1</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(9);}}>Irrigation 2</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(10);}}>Irrigation 3</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(11);}}>Irrigation 4</MenuItem>
                      <MenuItem onClick={()=>{popupState.close(); setCurrentiFrame(12);}}>Environment</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
            <Grid item xs>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button color="inherit" {...bindTrigger(popupState)}>
                      <Box m={1} alignSelf='center' >
                        <InfoIcon style={{ color: 'white', margin: '3px'}} fontSize='small' />
                      </Box>
                      Data
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Irrigation 1</MenuItem>
                      <MenuItem onClick={popupState.close}>Irrigation 2</MenuItem>
                      <MenuItem onClick={popupState.close}>Irrigation 3</MenuItem>
                      <MenuItem onClick={popupState.close}>Irrigation 4</MenuItem>
                      <MenuItem onClick={popupState.close}>Environment</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
          </Grid> 
        </Toolbar>
      </AppBar>
    </div>
  )
}
