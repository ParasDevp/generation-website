import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import useStyles from "./style";
import Hoologo from '../../Assets/img/logo.svg';
import {Divider} from "@mui/material";
import Instagram from '../../Assets/img/instagram.svg';
import Facebook from '../../Assets/img/facebook.svg';
import Twitter from '../../Assets/img/twitter.svg';
import Linkedin from '../../Assets/img/linkedin.svg'

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1} className={classes.ServiceGrid}>
                <Grid item xs={12} md={12} lg={12}>
                    <div className={classes.ServiceBox}>
                        <Grid container spacing={1}>
                            <Grid xs={9} md={8} lg={8} className={classes.Servicesubgrid}>
                                <div className={classes.ServiceContent}>
                                    <Typography className={classes.Servicemain}>Let’s try our service now!</Typography>
                                    <Typography className={classes.Servicesubmain}>Everything you need to accept card payments and grow your business anywhere on the planet.</Typography>
                                </div>
                            </Grid>
                            <Grid xs={2} md={4} lg={4} className={classes.StartedGrid}>
                                <div className={classes.Started}>
                                    <Button className={classes.Startedbtn} variant='contained' >Get Started</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.FooterGrid}>
                <Grid item xs={12} md={12} lg={5} className = {classes.Footersubgrid}>
                    <div className={classes.Footerimg}>
                        <img className={classes.Hooimg} src={Hoologo} />
                        <Typography className={classes.newcontent}>A new way to make the payments easy, reliable and secure.</Typography>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} lg={2.3} className={classes.Footerimg}>
                    <div className={classes.FooterContent}>

                        <Typography className={classes.FooterHeading}>Usefull Links</Typography>
                    </div>
                    <div>

                        <li className={classes.FooterList}>Content</li>
                        <li className={classes.FooterList}>How it works</li>
                        <li className={classes.FooterList}>Create</li>
                        <li className={classes.FooterList}>Explore</li>
                        <li className={classes.FooterList}>Terms & Service</li>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} lg={2.3} className={classes.Footerimg}>
                    <div className={classes.FooterContent}>
                        <Typography className={classes.FooterHeading}>Community</Typography>
                    </div>
                    <div>
                        <li className={classes.FooterList}>Help Center</li>
                        <li className={classes.FooterList}>Partners</li>
                        <li className={classes.FooterList}>Suggestions</li>
                        <li className={classes.FooterList}>Blog</li>
                        <li className={classes.FooterList}>Newsletters</li>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} lg={2.3} className={classes.Footerimg}>
                    <div className={classes.FooterContent}>
                        <Typography className={classes.FooterHeading}>Partner</Typography>
                    </div>
                    <div>
                        <li className={classes.FooterList}>Our Partner</li>
                        <li className={classes.FooterList}>Become a Partner</li>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} style ={{ padding: ` 0px 20px 0px 20px`}}>
                <Grid item xs={12} md={12} lg= {12}>
                  <Divider className={classes.FooterDivider}/>
                </Grid>
            </Grid>
            <Grid item xs= {12} md ={12} lg ={12} className ={classes.Footersubgrid1}>
                <div className={classes.copyright}>
                    <Typography className= {classes.copyrightLine}>@Copyright 2021 HooBank. All Rights Reserved.</Typography>
                </div>
                <div className={classes.FooterIcon}>
                <img className={classes.Icon} src ={Instagram}/>
                <img  className={classes.Icon} src ={Facebook}/>
                <img  className={classes.Icon} src ={Twitter}/>
                <img  className={classes.Icon} src ={Linkedin}/>
                </div>
            </Grid>
        </>
    )
}
export default Footer;