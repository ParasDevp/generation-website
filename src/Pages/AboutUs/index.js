import React from "react";
import useStyles from "./style";
import Quotes from '../../Assets/img/quotes.svg'
import { Grid, Typography } from "@mui/material";
import People1 from '../../Assets/img/people01.png'
import People2 from '../../Assets/img/people02.png'
import People3 from '../../Assets/img/people03.png'
 
const About = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1}>
                <Grid xs={12} md={6} lg={6} className = {classes.AboutGrid}>
                    <div className={classes.About}>
                        <Typography className={classes.Aboutcontent}>What people are saying about us</Typography>
                    </div>
                </Grid>
                <Grid xs= {12} md={6} lg={6} className= {classes.EverythinghGrid}>
                    <div className={classes.Everythingh}>
                        <Typography className={classes.Everythinghcontent}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} className ={classes.MoneyGrid}>
                <Grid xs= {12} md={12} lg={4} className ={classes.Moneysubgrid}>
                 <div className={classes.MoneyBox}>
                    <div className={classes.MoneyContent}>
                       <img className={classes.Quotesimg} src= {Quotes}/>
                       <Typography className= {classes.MoneyLine}>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</Typography>
                    </div>
                    <div className={classes.peopleContent}>
                        <img className={classes.peopleImg} src ={People1}/>
                        <div className={classes.peopleLine}>
                            <Typography className={classes.peopleName}>
                            Herman Jensen
                            </Typography>
                            <Typography className={classes.peopleDesg}>
                            Founder & Leader
                            </Typography>
                        </div>
                    </div>
                 </div>
                 
                </Grid>
                <Grid xs= {12} md={6} lg={4} className ={classes.Moneysubgrid}>
                 <div className={classes.MoneyBox1}>
                    <div className={classes.MoneyContent}>
                       <img className={classes.Quotesimg} src= {Quotes}/>
                       <Typography className= {classes.MoneyLine}>Money makes your life easier. If you're lucky to have it, you're lucky.</Typography>
                    </div>
                    <div className={classes.peopleContent}>
                        <img className={classes.peopleImg} src ={People2}/>
                        <div className={classes.peopleLine}>
                            <Typography className={classes.peopleName}>
                            Steve Mark
                            </Typography>
                            <Typography className={classes.peopleDesg}>
                            Founder & Leader
                            </Typography>
                        </div>
                    </div>
                 </div>
                 
                </Grid>
                <Grid xs= {12} md={6} lg={4} className ={classes.Moneysubgrid}>
                 <div className={classes.MoneyBox1}>
                    <div className={classes.MoneyContent}>
                       <img className={classes.Quotesimg} src= {Quotes}/>
                       <Typography className= {classes.MoneyLine}>It is usually people in the money business, finance, and international trade that are really rich.</Typography>
                    </div>
                    <div className={classes.peopleContent}>
                        <img className={classes.peopleImg} src ={People3}/>
                        <div className={classes.peopleLine}>
                            <Typography className={classes.peopleName}>
                            Kenn Gallagher
                            </Typography>
                            <Typography className={classes.peopleDesg}>
                            Founder & Leader
                            </Typography>
                        </div>
                    </div>
                 </div>
                 
                </Grid>
            </Grid>

        </>
    )
}

export default About;