import { makeStyles } from "@mui/styles"


const useStyles = makeStyles(theme =>({

    ServiceGrid:{
     marginTop: `100px !important`
    },
    Servicesubgrid:{
     height : `350px`,
     display : `flex`,
     flexDirection : `column !important`,
     justifyContent : `center`,
    alignItems : `center`
    },
    ServiceBox : {
        height : `350px`,
        width  : `100%`,
        background: "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
        borderRadius : `20px`
    },
    Servicemain: {
        fontSize : `48px !important`,
        fontWeight : `900 !important`,
        color : `#fff`
    },
    Servicesubmain: {
        fontSize : `18px !important`,
        fontWeight : `700`,
        width  :`60%`,
        color: `rgba(255, 255, 255, 0.7)`
    },
    StartedGrid:{
        height : `350px`,
        display : `flex`,
        flexDirection : `column !important`,
        justifyContent : `center`,
       alignItems : `center`
    },
    Startedbtn: {
       height: `75px !important` ,
       width : `200px !important`,
       background : `linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
       fontSize : `18px !important`,
       color : `#000 !important`,
       fontWeight : `800 !important`,
       borderRadius : `10px !important`
    },
    FooterGrid :{
        marginTop : `100px !important`
    },
    Footerimg :{
        height : `300px`,
        display : `flex`,
        justifyContent : `start`,
        flexDirection : `column !important`,
        alignItems:  `start`
    },
    Hooimg : {
        height : `100px`
    },
    newcontent: {
        fontSize : `20px !important`,
        margin : `20px 10px 10px 35px !important`,
        
        width: `45%`,
        fontWeight : `700`, 
        color:'rgba(255, 255, 255, 0.7)'
    },
    FooterHeading: {
      fontSize  : `28px !important`,
      fontWeight : `700 !important`,
      color :`#FFF`
    },
    FooterList : {
        fontSize : `22px !important`,
        color : 'rgba(255, 255, 255, 0.7)',
        fontWeight : `500`,
        marginTop : `20px !important`,
        listStyle : `none !important`       
    },
    FooterDivider:  {
        background  :`#3F3E45`,
        height : `1px !important`,
          marginBottom : `20px !important`
    },
    Footersubgrid: {
        display : `flex !important`,
        justifyContent : `space-between !important`,
        marginTop : `40px !important`,
        padding : `0px 20px 30px 20px`
    },
    Footersubgrid1: {
        display : `flex !important`,
        justifyContent : `space-between !important`,
        marginTop : `40px !important`,
        padding : `0px 20px 30px 20px`
    },
    copyrightLine : {
       color : `#FFF`,
       fontSize : `24px !important`,
       fontWeight : `700`
    },
    FooterIcon : {
        marginRight :  `40px !important`
    },
    Icon : {
        marginLeft  : `40px !important`,
        height : `26px !important`
    },
    [theme.breakpoints.down('xl')]:{
        ServiceBox : {
            height : `250px`,
            width  : `100%`,
            background: "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
            borderRadius : `20px`
        },
        Servicesubgrid:{
            height : `250px`,
            display : `flex`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
           },
        Servicemain: {
            fontSize : `38px !important`,
            fontWeight : `900 !important`,
            color : `#fff`
        },
        Servicesubmain: {
            fontSize : `14px !important`,
            fontWeight : `700`,
            width  :`60%`,
            color: `rgba(255, 255, 255, 0.7)`
        },
        StartedGrid:{
            height : `250px`,
            display : `flex`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
        },
        Startedbtn: {
            height: `65px !important` ,
            width : `150px !important`,
            background : `linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            fontSize : `14px !important`,
            color : `#000 !important`,
            fontWeight : `800 !important`,
            borderRadius : `10px !important`
         },
         Footersubgrid1: {
            display : `flex !important`,
            justifyContent : `space-between !important`,
            marginTop : `40px !important`,
            padding : `0px 20px 30px 20px`
        },
         Footerimg :{
            height : `250px`,
            display : `flex`,
            justifyContent : `start`,
            flexDirection : `column !important`,
            alignItems:  `start`
        },
        Hooimg : {
            height : `80px`
        },
        newcontent: {
            fontSize : `15px !important`,
            margin : `20px 10px 10px 35px !important`,
            
            width: `45%`,
            fontWeight : `700`, 
            color:'rgba(255, 255, 255, 0.7)'
        },
        FooterHeading: {
            fontSize  : `20px !important`,
            fontWeight : `700 !important`,
            color :`#FFF`
          },
          FooterList : {
            fontSize : `18px !important`,
            color : 'rgba(255, 255, 255, 0.7)',
            fontWeight : `500`,
            marginTop : `20px !important`,
            listStyle : `none !important`       
        },
        copyrightLine : {
            color : `#FFF`,
            fontSize : `18px !important`,
            fontWeight : `700`
         },
         Icon : {
            marginLeft  : `40px !important`,
            height : `20px !important`
        },
    },
    [theme.breakpoints.down('lg')]: {
        ServiceBox : {
            height : `200px`,
            width  : `100%`,
            background: "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
            borderRadius : `20px`
        },
        Servicesubgrid:{
            height : `200px`,
            display : `flex`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
           },
        Servicemain: {
            fontSize : `32px !important`,
            fontWeight : `900 !important`,
            color : `#fff`
        },
        Servicesubmain: {
            fontSize : `11px !important`,
            fontWeight : `700`,
            width  :`60%`,
            color: `rgba(255, 255, 255, 0.7)`
        },
        StartedGrid:{
            height : `200px`,
            display : `flex`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
        },
        Startedbtn: {
            height: `55px !important` ,
            width : `135px !important`,
            background : `linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            fontSize : `12px !important`,
            color : `#000 !important`,
            fontWeight : `800 !important`,
            borderRadius : `10px !important`
         },
         Footerimg :{
            height : `280px`,
            display : `flex`,
            justifyContent : `start`,
            flexDirection : `column !important`,
            alignItems:  `center`
        },
        Hooimg : {
            height : `100px`
        },
        Footersubgrid: {
       display : `flex !important`, 
       justifyContent: `center !important`
        },
        newcontent: {
            fontSize : `20px !important`,
            margin : `20px 10px 10px 35px !important`,
            
            width: `70%`,
            fontWeight : `700`, 
            color:'rgba(255, 255, 255, 0.7)'
        },
        FooterHeading: {
            fontSize  : `20px !important`,
            fontWeight : `700 !important`,
            color :`#FFF`
          },
          FooterGrid :{
            marginTop : `50px !important`
        },
        Footersubgrid1: {
            display : `flex !important`,
            justifyContent : `space-between !important`,
            marginTop : `20px !important`,
            padding : `0px 20px 30px 20px`
        },
          FooterList : {
            fontSize : `18px !important`,
            color : 'rgba(255, 255, 255, 0.7)',
            fontWeight : `500`,
            marginTop : `20px !important`,
            listStyle : `none !important`       
        },
        copyrightLine : {
            color : `#FFF`,
            fontSize : `15px !important`,
            fontWeight : `700`
         },
         Icon : {
            marginLeft  : `40px !important`,
            height : `18px !important`
        },
    },
    [theme.breakpoints.down('md')] :{
        ServiceBox : {
            height : `200px`,
            width  : `100%`,
            background: "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
            borderRadius : `20px`
        },
        Servicesubgrid:{
            height : `200px`,
            display : `flex`,
            // marginLeft: `20px`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
           },
        Servicemain: {
            fontSize : `22px !important`,
            fontWeight : `900 !important`,
            color : `#fff`
        },
        Servicesubmain: {
            fontSize : `9px !important`,
            fontWeight : `700`,
            width  :`60%`,
            color: `rgba(255, 255, 255, 0.7)`
        },
        StartedGrid:{
            height : `200px`,
            display : `flex`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
        },
        Startedbtn: {
            height: `40px !important` ,
            width : `115px !important`,
            background : `linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            fontSize : `9px !important`,
            color : `#000 !important`,
            fontWeight : `800 !important`,
            borderRadius : `10px !important`
         },
         Footerimg :{
            height : `250px`,
            display : `flex`,
            justifyContent : `start`,
            flexDirection : `column !important`,
            alignItems:  `center`
        },
        Hooimg : {
            height : `80px`
        },
        Footersubgrid: {
       display : `flex !important`, 
       justifyContent: `center !important`
        },
        newcontent: {
            fontSize : `15px !important`,
            margin : `20px 10px 10px 35px !important`,
            
            width: `70%`,
            fontWeight : `700`, 
            color:'rgba(255, 255, 255, 0.7)'
        },
        FooterHeading: {
            fontSize  : `15px !important`,
            fontWeight : `700 !important`,
            color :`#FFF`
          },
          FooterGrid :{
            marginTop : `50px !important`
        },
        Footersubgrid1: {
            display : `flex !important`,
            justifyContent : `space-between !important`,
            marginTop : `20px !important`,
            padding : `0px 20px 30px 20px`
        },
          FooterList : {
            fontSize : `13px !important`,
            color : 'rgba(255, 255, 255, 0.7)',
            fontWeight : `500`,
            marginTop : `20px !important`,
            listStyle : `none !important`       
        },
        copyrightLine : {
            color : `#FFF`,
            fontSize : `14px !important`,
            fontWeight : `700`
         },
         Icon : {
            marginLeft  : `20px !important`,
            height : `14px !important`
        },
    },
    [theme.breakpoints.down('sm')]:{ 
        ServiceBox : {
            height : `150px`,
            width  : `100%`,
            background: "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
            borderRadius : `20px`
        },
        Servicesubgrid:{
            height : `150px`,
            display : `flex`,
            // marginLeft: `20px`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
           },
        Servicemain: {
            fontSize : `18px !important`,
            fontWeight : `900 !important`,
            color : `#fff`
        },
        Servicesubmain: {
            fontSize : `7px !important`,
            fontWeight : `700`,
            width  :`60%`,
            color: `rgba(255, 255, 255, 0.7)`
        },
        StartedGrid:{
            height : `200px`,
            display : `flex`,
            flexDirection : `column !important`,
            justifyContent : `center`,
           alignItems : `center`
        },
        Startedbtn: {
            height: `30px !important` ,
            width : `100px !important`,
            background : `linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            fontSize : `9px !important`,
            color : `#000 !important`,
            fontWeight : `800 !important`,
            borderRadius : `7px !important`
         },
         Footerimg :{
            height : `250px`,
            display : `flex`,
            justifyContent : `start`,
            flexDirection : `column !important`,
            alignItems:  `center`
        },
        Hooimg : {
            height : `80px`
        },
        Footersubgrid: {
       display : `flex !important`, 
       justifyContent: `center !important`
        },
        newcontent: {
            fontSize : `15px !important`,
            margin : `20px 10px 10px 35px !important`,
            
            width: `70%`,
            fontWeight : `700`, 
            color:'rgba(255, 255, 255, 0.7)'
        },
        FooterHeading: {
            fontSize  : `15px !important`,
            fontWeight : `700 !important`,
            color :`#FFF`
          },
          FooterGrid :{
            marginTop : `50px !important`
        },
        Footersubgrid1: {
            display : `flex !important`,
            justifyContent : `space-between !important`,
            marginTop : `20px !important`,
            padding : `0px 20px 30px 20px`
        },
          FooterList : {
            fontSize : `13px !important`,
            color : 'rgba(255, 255, 255, 0.7)',
            fontWeight : `500`,
            marginTop : `20px !important`,
            listStyle : `none !important`       
        },
        copyrightLine : {
            color : `#FFF`,
            fontSize : `14px !important`,
            fontWeight : `700`
         },
         Icon : {
            marginLeft  : `20px !important`,
            height : `14px !important`
        },
    }

}))
export default useStyles