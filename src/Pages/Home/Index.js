import React from 'react';
import Navbar from '../../Components/Navbar/Index';
import { Grid, Typography, Container } from '@mui/material';
// import './style.css'
import useStyles from './style';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import DiscountImage from '../../Assets/img/Discount.svg';
import RobotImage from '../../Assets/img/robot.png'
import Business from '../Business';
const Home = () => {
  const classes = useStyles();
  return (
    <>
          <Grid container spacing={1} >
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.main} >
                <div className={classes.discountLine}>
                  <img src={DiscountImage} /><Typography className={classes.Discount}>20% <span className={classes.discountLinespan}>DISCOUNT FOR</span> 1MONTH <span className={classes.discountLinespan}>ACCOUNT</span></Typography>
                </div>
                <div className={classes.nextContent}>
                  <div className={classes.nextContentLine}>
                    <Typography className={classes.Next}>The Next<br /><span className={classes.Nextspan}>Generation</span></Typography>
                    <div className={classes.Started}>
                      <Typography className={classes.GetStarted}>Get<NorthEastIcon className={classes.Icon} /><br />Started</Typography>
                    </div>
                  </div>
                  <Typography className={classes.Next}>Payment Method.</Typography>
                </div>
                <div className={classes.LowerContent}>
                  <h2>Our team of experts uses a methodology to identify <br />the credit cards most likely to fit your needs.<br />
                    We examine annual percentage rates, annual fees.</h2>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.RobotImage}>
                <img className={classes.Robot} src={RobotImage} />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.Records}>
            <Grid item xs={12} md={12} lg={4}>
              <div className={classes.userActive}>
                <h2 className={classes.active}>3800+</h2>
                <span className={classes.userActivespan}>userActive</span>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={4}>
            <div className={classes.userActive}>
                <h2 className={classes.active}>3800+</h2>
                <span className={classes.userActivespan}>Trusted By Company</span>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={4}>
            <div className={classes.userActive}>
                <h2 className={classes.active}>3800+</h2>
                <span className={classes.userActivespan}>Transactions</span>
              </div>
            </Grid>
          </Grid>
    </>
  )
}

export default Home
