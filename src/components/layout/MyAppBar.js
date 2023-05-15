import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Button, Stack, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { authActions } from '../../store/ui-slice';
import classes from './appbar.module.css';


export const MyAppBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const signOutHandler = () => {
    dispatch(authActions.signOut())
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='fixed' color='warning' >
      <Toolbar>
        <Typography variant='h6'
          component='div'
          sx={{ flexGrow: 1, fontFamily: 'Lato' }}>
          DE<span>LI</span>CI.
        </Typography>
        {isAuth &&
          <Stack direction='row' spacing={2} >
            <NavLink style={({ isActive }) =>
              ({ color: isActive ? 'yellow' : 'white' })}
              to='/'>
              <Button color='inherit' className={classes.hidden}>Home</Button>
            </NavLink>
            <NavLink style={({ isActive }) =>
              ({ color: isActive ? 'yellow' : 'white' })}
              to='/local'>
              <Button color='inherit'
                className={classes.hidden}>Local</Button>
            </NavLink>

            <NavLink style={({ isActive }) =>
              ({ color: isActive ? 'yellow' : 'white' })}
              to='/foreign'>
              <Button color='inherit' className={classes.hidden}>
                Foreign
              </Button>
            </NavLink>
            <Button color='inherit' className={classes.hidden}>
              About
            </Button>
            <Button color='inherit'  
              onClick={signOutHandler} className={classes.hidden}>
              Logout
            </Button>
          </Stack>
        }
        <Menu id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'arialabelledby': 'resources-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}

        >
          <Link
            to='/' >
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>

          <Link 
            to='/local'>
            <MenuItem onClick={handleClose}>Local</MenuItem>
          </Link>

          <Link 
            to='/foreign'>
            <MenuItem onClick={handleClose}>Foreign</MenuItem>
          </Link>
          <Link 
            to='/about'>
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
          <MenuItem onClick={handleClose}>
            <Button onClick={signOutHandler}>Logout</Button>
          </MenuItem>
        </Menu>

        <IconButton edge='start' color='inherit' aria-label='menu' sx={{
          padding: '1rem'
        }}>
          <MenuIcon color='inherit'
            id='resources-button'
            onClick={handleClick}
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

