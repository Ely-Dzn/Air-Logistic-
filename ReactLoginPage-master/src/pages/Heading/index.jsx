import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {createTheme} from '@mui/material/styles';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { ListItem,} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import PersonIcon from '@mui/icons-material/Person';
//import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createtables, rows } from '../Componets/feed';

const theme = createTheme();
const pages = [{id: 1, name: 'Pedidos em sede'},{id: 2, name:'Pedidos em transporte'}, {id: 3, name:'Pedidos entregues'}];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Heading() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    createtables();
    console.log(rows);
  };
      
  const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Pedidos', 'Configurações', 'Ajuda'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <InventoryIcon /> :<></>}
                  {index === 1 ? <SettingsIcon /> :<></>}
                  {index === 2 ? <HelpIcon /> :<></>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
       



      </Box>
    );
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
    </Menu>
  );


  
  return (
    <Box sx={{flexGrow: 1, bgcolor: 'warning.main',
    color: 'warning.contrastText',}} >
      <AppBar position="static" sx={{bgcolor: 'warning.main',
    color: 'warning.contrastText',
    p: 1, }} >
        <Toolbar>
          <div>
        {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onClick={toggleDrawer(anchor, true)}>
            {anchor}
            <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          </React.Fragment>
          ))}
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          AirLogistic
          </Typography>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ borderRadius: 1, flexGrow: 1, color: "inherit", display: { xs: 'none', md: 'flex' }, 
                  }}>
            {pages.map((page) => (
              <ListItem spacing={2} size="small" dense button key={`page-${page.id}-${page.name}`} onClick={handleMenuClose}
                sx={{ 
                '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                width: 1/4,
                display: 'flex', 
                borderBottom: '2px solid #ffffff', 
                my: 2, 
                bgcolor: 'warning.main',
                color: 'background.paper', 
                borderRadius: 1, 
                margin: theme.spacing(1, 'auto')}}
              >
                  {page.id === 1 ? <InventoryIcon /> :<></>}
                  {page.id === 2 ? <AirplanemodeActiveIcon /> :<></>}
                  {page.id === 3 ? <CheckCircleIcon /> :<></>}
                <ListItemText primary= {page.name} />
              </ListItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' },bgcolor: 'warning.main' }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, bgcolor: 'warning.main' }}>
          </Box>
        </Toolbar>
      </AppBar>
      
      {renderMenu}
    </Box>

  );
}
  export default Heading;