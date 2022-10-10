import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import useStyles from "./style";
import Star from '../../Assets/img/Star.svg';
import Shield from '../../Assets/img/Shield.svg'
import Send from '../../Assets/img/Send.svg';
import Bill from '../../Assets/img/bill.png';
import Google from '../../Assets/img/google.svg';
import Apple from '../../Assets/img/apple.svg';
import CardImage from '../../Assets/img/card.png';
import { useTheme } from "@mui/styles";


const Business  = () => {
  const theme = useTheme()
  const classes = useStyles()
    return(
        <>
        <Grid container spacing={1} style ={{ marginTop: `100px`}}>
            <Grid item xs={12} md={6} lg={6}>
                <div className={classes.Business}>
                  <div className={classes.BusinessMain}>
                    <Typography className={classes.subtitle1}>You do the business, we’ll handle the money.</Typography>
                    <Typography className ={classes.subtitle2}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</Typography>
                    <Button variant="contained" className= {classes.StartedBtn}>Get Started</Button>
                  </div>
                </div>
            </Grid>
            <Grid xs ={12} md ={6} lg={6} style ={{ display: `flex`, justifyContent : `center `}}>
              <div className={classes.RewardGrid}>
               
                <div className={classes.AllReward}>
                  <div className = {classes.StarLogo}>
                  <img className={classes.StartIcon} src = {Star}/>
                  </div>
                  <div className={classes.RewardContent}>
                  <Typography className={classes.Reward}>Rewards</Typography>
                  <Typography className={classes.RewardDetails}>The best credit cards offer some tantalizing combinations of promotions and prizes</Typography>
                  </div>
                </div>
                <div className={classes.SpecialAllReward}>
                  <div className = {classes.StarLogo}>
                  <img className={classes.StartIcon} src = {Shield}/>
                  </div>
                  <div className={classes.RewardContent}>
                  <Typography className={classes.Reward}>100% Secured</Typography>
                  <Typography className={classes.RewardDetails}>We take proactive steps make sure your information and transactions are secure.</Typography>
                  </div>
                </div>
                <div className={classes.AllReward}>
                  <div className = {classes.StarLogo}>
                  <img className={classes.StartIcon} src = {Send}/>
                  </div>
                  <div className={classes.RewardContent}>
                  <Typography className={classes.Reward}>Balance Transfer</Typography>
                  <Typography className={classes.RewardDetails}>A balance transfer credit card can save you a lot of money in interest charges</Typography>
                  </div>
                </div>
                </div>
            </Grid>
        </Grid>
        <Grid container spacing = {1}>
          <Grid item xs={12} md ={6} lg={6} className = {classes.PaypalGrid}>
            <div className={classes.Paypal}>
              <img className={classes.Paypalimg} src={Bill}/>
            </div>
          </Grid>
          <Grid item xs= {12} md ={6} lg={6} className = {classes.Control}>
           
             <div className = {classes.ControlGrid} >
             <Typography className = {classes.Controlheading}>Easily control your billing & invoicing.</Typography>
             <Typography className= {classes.Controlcontent}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</Typography>
             <div className={classes.Banner}>
              <img className= {classes.Googlelogo} src={Google}/>
              <img className= {classes.Googlelogo} src= {Apple}/>  
             </div>
             
             </div>
          </Grid>
        </Grid>
        <Grid container spacing = {1} style ={{ marginTop : `100px`}}>
          <Grid item xs= {12} md= {6} lg= {6} className = {classes.SubtitleGrid} >
                  <div className={classes.BusinessMain}>
                    <Typography className={classes.subtitle1}>Find a better card deal in few easy steps.</Typography>
                    <Typography className ={classes.subtitle2}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</Typography>
                    <Button variant="contained" className= {classes.StartedBtn}>Get Started</Button>
                  </div>
          </Grid>
          <Grid item xs= {12} md={6} lg= {6}  className = { classes.CardGrid}>
            <div className={classes.CardImage}>
              <img className={classes.Card} src= {CardImage}/>
            </div>

          </Grid>
        </Grid> 
      
        </>
    )
}
export default Business;