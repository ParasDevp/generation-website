import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(theme =>({
    Banner : {
        padding: `20px`,
        display : `flex`,
        justifyContent : `center`
    },
    Banner2 : {
        padding: `8px 20px 20px 20px`, display : `flex`,
        justifyContent : `center`
    },
    Banner1 : {
        padding: `25px 20px 20px 20px`,
        display : `flex`,
        justifyContent : `center`
    },
    BannnerImg : {
     height : `80px`
    },
    BannnerImg3:{
        height : `60px`
    },
    BannnerImg2:{
        height : `60px`
    },
    BannnerImg1:{
        height : `65px`
    },
    BannerGrid : {
    marginTop : `100px !important`,
    alignItems : `center`
    },
    [theme.breakpoints.down('xl')]:{
        BannnerImg : {
            height : `65px`
           },
           BannnerImg3:{
               height : `45px`
           },
           BannnerImg2:{
               height : `40px`
           },
           BannnerImg1:{
               height : `50px`
           },
    },
    [theme.breakpoints.down('lg')]: {
         BannnerImg : {
            height : `60px`
           },
           BannnerImg3:{
               height : `40px`
           },
           BannnerImg2:{
               height : `40px`
           },
           BannnerImg1:{
               height : `45px`
           },
    },
    [theme.breakpoints.down('sm')]: {
        BannnerImg : {
            height : `50px`
           },
           BannnerImg3:{
               height : `30px`
           },
           BannnerImg2:{
               height : `30px`
           },
           BannnerImg1:{
               height : `35px`
           },
    }
}))
export default useStyles;