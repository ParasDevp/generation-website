import { makeStyles } from "@mui/styles";
import { fontFamily, fontWeight } from "@mui/system";

const useStyles = makeStyles(theme => ({
   // discountLine :{
   //     color : `white`,
   //     fontSize : `20px`,
   //     fontWeight : 400
   //     // color: white;
   //     // font-size: 20px;
   //     // font-weight: 400    
   // },
   main: {
      marginTop: `100px`
   },
   Discount: {
      fontSize: `18px !important`,
      fontWeight: `400`,
      alignItems: `center !important`
   },
   discountLine: {
      background: `linear-gradient(125.17deg, #272727 0%, #11101D 100%)`,
      display: `flex !important`,
      borderRadius: `10px`,
      padding: `10px`,
      width: `fit-content`,
      alignItems: `center`,
      color: `white`,
      fontSize: `20px`,
      fontWeight: 400

   },
   discountLinespan: {
      color: `grey`
   },
   nextContent: {
      color: `white`,
      marginTop: `35px`
   },
   nextContentLine: {
      display: ` flex`,
      justifyContent: `space-between`,
      width: `90%`
   },
   Next: {
      fontStyle: `normal !important`,
      fontWeight: `600 !important`,
      fontSize: `80px !important`,
      lineHeight: `140% !important`,

   },
   Nextspan: {
      fontStyle: `normal`,
      fontWeight: `600`,
      fontSize: `72px`,
      background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
      WebkitBackgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
      backgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
   },
   Started: {
      height: `150px`,
      width: `150px`,
      marginTop: `30px`,
      borderRadius: `85px !important`,
      border: `3px solid lightblue`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`
   },
   GetStarted: {
      margin: `0 auto`,
      textAlign: `center`,
      fontSize: `25px !important`,
      background: `linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
      WebkitBackgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
      backgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
   },
   Icon: {
      height: `20px !important`,
      marginLeft: `3px`
   },
   LowerContent: {
      width: `100% !important`,
      marginTop: `25px !important`,
      color: `rgba(255, 255, 255, 0.7) !important`,
      fontSize: `15px !important`,
      lineHeight: `170%`
   },
   RobotImage: {
      display: `flex`,
      justifyContent: `end`,
      background: -`moz-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
      background: -`webkit-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
      background: -`o-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
      background: -`ms-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
      background: `radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
   },
   Robot: {
      height: `700px !important`
   },
   active: {
      color: `#fff`,
      fontSize: `40px`,
      margin: `unset`,
      fontWeight: `900`
   },
   Records: {
      marginTop: `50px !important`
   },
   userActive: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`
   },
   userActivespan: {
      color: `grey`,
      fontSize: `20px`,
      fontWeight: `400`,
      textTransform: `uppercase`,
      background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) `,
      marginLeft: `10px`,
      WebkitBackgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
      backgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
   },
     [theme.breakpoints.down('xl')]: {
        Robot : {
            height : `500px !important`
         },
         RobotImage : {
            display : `flex`,
            justifyContent : `end`,
            marginTop: `50px !important`,
                background:-`moz-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`webkit-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`o-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`ms-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:`radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
         },
         Next : {
            fontStyle : `normal !important`,
            fontWeight : `600 !important`,
            fontSize : `60px !important`,
            lineHeight : `140% !important`,

         },
         Nextspan : {
            fontStyle: `normal`,
            fontWeight : `600`,
            fontSize : `60px`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         Started : {
            height : `125px`,
            width : `125px`,
            marginTop : `30px`,
            borderRadius : `70px !important`,
            border : `3px solid lightblue`,
            display  :`flex`,
            flexDirection : `column`,
            justifyContent : `center`
         },
         GetStarted :{
            margin: `0 auto`,
            textAlign: `center`,
            fontSize:`20px !important`,
            background:`linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         LowerContent : {
            width : `100% !important`,
            marginTop: `25px !important`,
            color : `rgba(255, 255, 255, 0.7) !important`,
            fontSize : `12px !important`,
            lineHeight : `170%`
         },
         Discount : {
            fontSize : `15px !important`,
            fontWeight : `400`,
            alignItems : `center !important`
        },
        active :{
            color : `#fff`,
            fontSize : `30px`,
            margin : `unset`,
            fontWeight : `900`
         },
         userActivespan : {
            color : `grey`,
            fontSize : `15px`,
            fontWeight : `400`,
            textTransform : `uppercase`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) `,
            marginLeft : `10px`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },

      },
      [theme.breakpoints.down('lg')]: {
         Robot : {
            height : `400px !important`
         },
         RobotImage : {
            display : `flex`,
            justifyContent : `end`,
            marginTop: `50px !important`,
                background:-`moz-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`webkit-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`o-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`ms-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:`radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
         },
         Next : {
            fontStyle : `normal !important`,
            fontWeight : `600 !important`,
            fontSize : `40px !important`,
            lineHeight : `140% !important`,

         },
         nextContentLine: {
            display :` flex`,
            justifyContent : `space-between`,
            width : `75%`
         },
         Nextspan : {
            fontStyle: `normal`,
            fontWeight : `600`,
            fontSize : `40px`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         Started : {
            height : `90px`,
            width : `90px`,
            marginTop : `5px`,
            borderRadius : `70px !important`,
            border : `3px solid lightblue`,
            display  :`flex`,
            flexDirection : `column`,
            justifyContent : `center`
         },
         GetStarted :{
            margin: `0 auto`,
            textAlign: `center`,
            fontSize:`15px !important`,
            background:`linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         LowerContent : {
            width : `100% !important`,
            marginTop: `25px !important`,
            color : `rgba(255, 255, 255, 0.7) !important`,
            fontSize : `10px !important`,
            lineHeight : `170%`
         },
         Discount : {
            fontSize : `12px !important`,
            fontWeight : `400`,
            alignItems : `center !important`
        },
        active :{
            color : `#fff`,
            fontSize : `22px`,
            margin : `unset`,
            fontWeight : `900`
         },
         userActivespan : {
            color : `grey`,
            fontSize : `13px`,
            fontWeight : `400`,
            textTransform : `uppercase`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) `,
            marginLeft : `10px`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
      },
      [theme.breakpoints.down('md')] : {
         main  : {
            marginTop : `50px`
            },
         Robot : {
            height : `300px !important`
         },
         RobotImage : {
            display : `flex`,
            justifyContent : `end`,
            marginTop: `50px !important`,
                background:-`moz-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`webkit-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`o-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`ms-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:`radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
         },
         Next : {
            fontStyle : `normal !important`,
            fontWeight : `600 !important`,
            fontSize : `30px !important`,
            lineHeight : `140% !important`,

         },
         nextContentLine: {
            display :` flex`,
            justifyContent : `space-between`,
            width : `90%`
         },
         Nextspan : {
            fontStyle: `normal`,
            fontWeight : `600`,
            fontSize : `30px`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         Started : {
            height : `70px`,
            width : `70px`,
            marginTop : `5px`,
            borderRadius : `70px !important`,
            border : `3px solid lightblue`,
            display  :`flex`,
            flexDirection : `column`,
            justifyContent : `center`
         },
         GetStarted :{
            margin: `0 auto`,
            textAlign: `center`,
            fontSize:`12px !important`,
            background:`linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         LowerContent : {
            width : `100% !important`,
            marginTop: `25px !important`,
            color : `rgba(255, 255, 255, 0.7) !important`,
            fontSize : `7px !important`,
            lineHeight : `170%`
         },
         Discount : {
            fontSize : `10px !important`,
            fontWeight : `400`,
            alignItems : `center !important`
        },
        active :{
            color : `#fff`,
            fontSize : `20px`,
            margin : `unset`,
            fontWeight : `900`
         },
         userActivespan : {
            color : `grey`,
            fontSize : `11px`,
            fontWeight : `400`,
            textTransform : `uppercase`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) `,
            marginLeft : `10px`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
      },
      [theme.breakpoints.down('sm')] : {
         main  : {
            marginTop : `50px`
            },
         Robot : {
            height : `185px !important`
         },
         RobotImage : {
            display : `flex`,
            justifyContent : `end`,
            marginTop: `80px !important`,
                background:-`moz-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`webkit-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`o-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:-`ms-radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
                background:`radial-gradient(circle at 50% 50%, rgba(96, 96, 96, 1) 0%, rgba(33, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)`,
         },
         Next : {
            fontStyle : `normal !important`,
            fontWeight : `600 !important`,
            fontSize : `18px !important`,
            lineHeight : `140% !important`,

         },
         nextContentLine: {
            display :` flex`,
            justifyContent : `space-between`,
            width : `100%`
         },
         Icon : {
          height  : `10px !important`,
          marginLeft  : `-6px !important`
         },
         Nextspan : {
            fontStyle: `normal`,
            fontWeight : `600`,
            fontSize : `18px`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         Started : {
            height : `45px`,
            width : `45px`,
            marginTop : `0px`,
            borderRadius : `25px !important`,
            border : `2px solid lightblue`,
            display  :`flex`,
            flexDirection : `column`,
            justifyContent : `center`
         },
         GetStarted :{
            margin: `0 auto`,
            textAlign: `center`,
            fontSize:`8px !important`,
            background:`linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
         LowerContent : {
            width : `100% !important`,
            marginTop: `25px !important`,
            color : `rgba(255, 255, 255, 0.7) !important`,
            fontSize : `5px !important`,
            lineHeight : `170%`
         },
         discountLine : {
            background : `linear-gradient(125.17deg, #272727 0%, #11101D 100%)`,
            display : `flex !important`,
            borderRadius : `10px`,
            padding : `5px`,
            width  :`fit-content`,
            alignItems : `center`,
            color : `white`,
                fontSize : `20px`,
                fontWeight : 400

        },
         Discount : {
            fontSize : `6px !important`,
            fontWeight : `400`,
            alignItems : `center !important`
        },
        active :{
            color : `#fff`,
            fontSize : `15px`,
            margin : `unset`,
            fontWeight : `900`
         },
         userActivespan : {
            color : `grey`,
            fontSize : `8px`,
            fontWeight : `400`,
            textTransform : `uppercase`,
            background : `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) `,
            marginLeft : `10px`,
            WebkitBackgroundClip:  `text`,
            WebkitTextFillColor : `transparent`,
            backgroundClip : `text`,
            WebkitTextFillColor : `transparent`,
         },
      }



}
))
export default useStyles;