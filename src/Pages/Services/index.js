import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./style";
import airbnb from '../../Assets/img/airbnb.png'
import binance from '../../Assets/img/binance.png'
import coinbase from '../../Assets/img/coinbase.png'
import dropbox from '../../Assets/img/dropbox.png' 
const Service  = () =>{
    const classes =  useStyles()
     return (
        <>
        <Grid container spacing= {1} className= {classes.BannerGrid}>
            <Grid xs= {12} md ={6} lg={3}>
                <div className= {classes.Banner}>
                <img className={classes.BannnerImg} src= {airbnb}/>
                </div>
            </Grid>
            <Grid xs= {12} md ={6} lg={3}>
                <div className= {classes.Banner1}>
                <img className={classes.BannnerImg1} src= {binance}/>
                </div>
            </Grid>
            <Grid xs= {12} md ={6} lg={3}>
                <div className= {classes.Banner2}>
                <img className={classes.BannnerImg2} src= {coinbase}/>
                </div>
            </Grid>
            <Grid xs= {12} md ={6} lg={3}>
                <div className= {classes.Banner}>
                <img className={classes.BannnerImg3} src= {dropbox}/>
                </div>
            </Grid>
            
        </Grid>
        </>
     )
}
export default Service