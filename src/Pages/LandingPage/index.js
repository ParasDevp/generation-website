import React from "react";
import Home from "../Home/Index";
import Business from "../Business";
import Navbar from "../../Components/Navbar/Index";
import About from "../AboutUs";
import Service from "../Services";
import Footer from "../Footer";
import { Container } from "@mui/material";
import useStyles from "./style";
 

const LandingPage = () => {
  const classes =  useStyles()
    return(
        <>
        <div  className= {classes.Home}>
        <Container className={classes.Container}>
          <Navbar />
          <Home/>
          <Business/>
          <About/>
          <Service/>
          <Footer/>
        </Container>
      </div>
        </>
    )
}
export default LandingPage