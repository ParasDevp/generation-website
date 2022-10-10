import React from 'react'
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Hidden } from '@mui/material';
import Logo from '../../Assets/img/logo.svg';
import { Link } from '@mui/material';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './style';
import CloseIcon from '@mui/icons-material/Close';
import './style.css'

const Navbar = () => {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  return (
    <>
      <div className={classes.Navbar}>
        <div className={classes.Logo}>
          <img className={classes.LogoImg} src={Logo} />
        </div>
        <Hidden smDown>
          <div className={classes.ListNames}>
            <Link className={classes.List}>Home</Link>
            <Link className={classes.List}>Feature</Link>
            <Link className={classes.List}>Product</Link>
            <Link className={classes.List}>Clients</Link>
          </div>
        </Hidden>
        <Hidden smUp>
          <div>
            <MenuIcon style={{ color: `white ` }} onClick={() => setopen(true)} />
          </div>
        </Hidden>

      </div>
      <Drawer
        open={open}
        className={classes.NavbarDrawer}
        variant="persistent"

        sx={{
          width: 240,
          flexShrink: 0,

        }}
        anchor='left'
        style={{ background: `green`, color: `green` }}
      >
        <div className={classes.Menuicon}>
          <CloseIcon onClick={() => setopen(false)} style={{ color: `white` }} />
        </div>
        <div className={classes.NavbarContent}>
          <li className={classes.Navbarli}>Home</li>
          <li className={classes.Navbarli}>Feature</li>
          <li className={classes.Navbarli}>Product</li>
          <li className={classes.Navbarli}>Clients</li>
        </div>
      </Drawer>
      <h1>this is react js tutorial</h1>
    </>
  )
}

export default Navbar
