import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
    StartedBtn : {

        background: "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
        marginTop: "45px !important",
        width : `150px`,
        fontWeight: '600 !important',
        fontSize: `15px !important`,
        height: `50px`,
        
    },
    CardGrid : {
        display : `flex`,
        justifyContent : `start`,
        padding : `20px`

    },
    BusinessMain : {
        width : `62%`
    },
    subtitle1:{
        fontSize: `48px !important`,
        color: "#fff",
        fontWeight: `600 !important`
    },
    subtitle2: {
        fontWeight: '400 !important',
        fontSize : `18px !important`,
        marginTop: `20px !important`,
        color: "rgba(255, 255, 255, 0.7)"
    },
    AllReward:{
      display: `flex`,
      alignItems : `center`,
      marginTop: `50px`,
      width: `70%`,
      padding : `20px`
    //   width : `70%`,
    },
    SpecialAllReward: {
        display: `flex`,
        // width  :`70%`,
        alignItems : `center`,
        padding : `20px`,
        marginTop: `40px`,
        width: `70%`,
        background: "linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%)",
boxShadow: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
borderRadius:  `20px`
    },
    StarLogo : {
     height :`64px`,
     display: `flex`,
     flexDirection :`column`,
     justifyContent :`center`,
     width  :`64px`,
     alignItems : `center`,
     borderRadius : `30px`,
background: "rgba(9, 151, 124, 0.1)"
    },
    RewardContent : {
        marginLeft : `30px`,    
        width  :`65%`
    },
    Reward: {
        color : `#fff`,
        fontSize : `22px !important`,
        fontWeight : `600 !important`
    },
    RewardDetails : {
        fontSize : `18px !important`,
        fontWeight : `600`,
        color: `rgba(255, 255, 255, 0.7)`,
    },
    Paypalimg : {
        height: `700px`,
        marginTop: `50px`
    },
    Controlheading: {
       color : `#fff `,
       fontSize: `50px !important`,
       fontWeight  : `600 !important`
    },
    Controlcontent : {
        color : `rgba(255, 255, 255, 0.7)`, 
        fontSize : `18px !important`,
        marginTop : `30px !important`

        
    },
    SubtitleGrid : {
        display : `flex !important`,
        flexDirection  :  `column !important`,
        justifyContent : `center !important `
    },
    ControlGrid :  {
        width  :`60%`,
        padding : `20px`
    },
    Banner :{
        marginTop : `30px`
    },
    Control : {
        display : `flex !important`,
        justifyContent : `center !important`,
        flexDirection : `column !important`,
        marginTop : `50px !important`
    },
    Googlelogo: {
        marginRight : `20px`,
        height : `50px`
    },
    Card : {
        height : `600px`
    },
    [theme.breakpoints.down('xl')]: {
       
        BusinessMain : {
            width : `55%`
        },
        subtitle1:{
            fontSize: `40px !important`,
            color: "#fff",
            fontWeight: `600 !important`
        },
        subtitle2: {
            fontWeight: '400 !important',
            fontSize : `14px !important`,
            marginTop: `20px !important`,
            color: "rgba(255, 255, 255, 0.7)"
        },
        StartedBtn : {
            background: "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
            marginTop: "45px !important",
            width : `120px`,
            fontWeight: '600 !important',
            fontSize: `10px !important`,
            height: `40px`,
            
        },
        AllReward:{
            display: `flex`,
            alignItems : `center`,
            marginTop: `25px`,
            width: `70%`,
            padding : `20px`
          //   width : `70%`,
          },
          CardGrid : {
            display : `flex`,
            justifyContent : `start`,
            padding : `20px`
    
        },
          StarLogo : {
            height :`54px`,
            display: `flex`,
            flexDirection :`column`,
            justifyContent :`center`,
            width  :`54px`,
            alignItems : `center`,
            borderRadius : `25px`,
       background: "rgba(9, 151, 124, 0.1)"
           },
           Reward: {
            color : `#fff`,
            fontSize : `20px !important`,
            fontWeight : `600 !important`
        },
        RewardDetails : {
            fontSize : `15px !important`,
            fontWeight : `600`,
            color: `rgba(255, 255, 255, 0.7)`,
        },
        Paypalimg : {
            height: `550px`,
            marginTop: `50px`
        },
        Controlheading: {
            color : `#fff `,
            fontSize: `40px !important`,
            fontWeight  : `600 !important`
         },
         Controlcontent : {
             color : `rgba(255, 255, 255, 0.7)`, 
             fontSize : `14px !important`,
             marginTop : `30px !important`
     
         },
         SubtitleGrid : {
            display : `flex !important`,
            flexDirection  :  `column !important`,
            justifyContent : `center !important`
        },
         Googlelogo: {
            marginRight : `20px`,
            height : `40px`
        },
        ControlGrid :  {
            width  :`60%`,
            padding : `20px`
        },
        Card : {
            height : `475px`
        }
    },
    [theme.breakpoints.down('lg')]:{
        
        BusinessMain : {
            width : `60%`
        },
        CardGrid : {
            display : `flex`,
            justifyContent : `start`,
            padding : `20px`
    
        },
        subtitle1:{
            fontSize: `30px !important`,
            color: "#fff",
            fontWeight: `600 !important`
        },
        subtitle2: {
            fontWeight: '400 !important',
            fontSize : `11px !important`,
            marginTop: `20px !important`,
            color: "rgba(255, 255, 255, 0.7)"
        },
        StartedBtn : {
            background: "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
            marginTop: "35px !important",
            width : `100px`,
            fontWeight: '600 !important',
            fontSize: `8px !important`,
            height: `35px`,
            
        },
        AllReward:{
            display: `flex`,
            alignItems : `center`,
            marginTop: `25px`,
            width: `70%`,
            padding : `20px`
          //   width : `70%`,
          },
          StarLogo : {
            height :`44px`,
            display: `flex`,
            flexDirection :`column`,
            justifyContent :`center`,
            width  :`44px`,
            alignItems : `center`,
            borderRadius : `25px`,
       background: "rgba(9, 151, 124, 0.1)"
           },
           Reward: {
            color : `#fff`,
            fontSize : `15px !important`,
            fontWeight : `600 !important`
        },
        RewardDetails : {
            fontSize : `11px !important`,
            fontWeight : `600`,
            color: `rgba(255, 255, 255, 0.7)`,
        },
        Paypalimg : {
            height: `450px`,
            marginTop: `50px`
        },
        Controlheading: {
            color : `#fff `,
            fontSize: `30px !important`,
            fontWeight  : `600 !important`
         },
         Controlcontent : {
             color : `rgba(255, 255, 255, 0.7)`, 
             fontSize : `11px !important`,
             marginTop : `30px !important`
     
         },
         ControlGrid :  {
            width  :`60%`,
            padding : `20px`
        },
         Googlelogo: {
            marginRight : `20px`,
            height : `30px`
        },
        SubtitleGrid : {
            display : `flex !important`,
            flexDirection  :  `column !important`,
            justifyContent : `center !important`
        },
        Card : {
            height : `375px`
        }
    },
    [theme.breakpoints.down('md')] : {
        Business : {
            display  :`flex`,
            justifyContent : `center`
            },
        BusinessMain : {
            width : `80%`
        },
        CardGrid : {
            display : `flex`,
            justifyContent : `start`,
            padding : `20px`
    
        },
        RewardGrid :{
             marginLeft : `70px`
        },
        subtitle1:{
            fontSize: `40px !important`,
            color: "#fff",
            fontWeight: `600 !important`
        },
        subtitle2: {
            fontWeight: '400 !important',
            fontSize : `14px !important`,
            marginTop: `20px !important`,
            color: "rgba(255, 255, 255, 0.7)"
        },
        StartedBtn : {
            background: "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
            marginTop: "35px !important",
            width : `130px`,
            fontWeight: '600 !important',
            fontSize: `12px !important`,
            height: `45px`,
            
        },
        AllReward:{
            display: `flex`,
            alignItems : `center`,
            marginTop: `25px`,
            width: `70%`,
            padding : `20px`
          //   width : `70%`,
          },
          StarLogo : {
            height :`55px`,
            display: `flex`,
            flexDirection :`column`,
            justifyContent :`center`,
            width  :`55px`,
            alignItems : `center`,
            borderRadius : `25px`,
       background: "rgba(9, 151, 124, 0.1)"
           },
           Reward: {
            color : `#fff`,
            fontSize : `25px !important`,
            fontWeight : `600 !important`
        },
        RewardDetails : {
            fontSize : `12px !important`,
            fontWeight : `600`,
            color: `rgba(255, 255, 255, 0.7)`,
        },
        Paypalimg : {
            height: `450px`,
            marginTop: `50px`
        },
        Controlheading: {
            color : `#fff `,
            fontSize: `40px !important`,
            fontWeight  : `600 !important`
         },
         Controlcontent : {
             color : `rgba(255, 255, 255, 0.7)`, 
             fontSize : `14px !important`,
             marginTop : `30px !important`
     
         },
         Googlelogo: {
            marginRight : `20px`,
            height : `35px`
        },
        Card : {
            marginTop : `40px`,
            height : `400px`
        },
        PaypalGrid : {
            display : `flex`,
            justifyContent : `center`
        },
        ControlGrid :  {
            width  :`80%`,
            padding : `20px`,
            margin : `0 auto`
        },
        SubtitleGrid : {
            display : `flex !important`,
            flexDirection  :  `row !important`,
            justifyContent : `center !important`
        },
        CardGrid : {
            display : `flex`,
            justifyContent : `center`,
            padding : `20px`

        }
    },
    [theme.breakpoints.down('sm')]: {
        Business : {
            display  :`flex`,
            justifyContent : `center`
            },
        BusinessMain : {
            width : `70%`
        },
        CardGrid : {
            display : `flex`,
            justifyContent : `start`,
            padding : `20px`
    
        },
        RewardGrid :{
             marginLeft : `70px`
        },
        subtitle1:{
            fontSize: `25px !important`,
            color: "#fff",
            fontWeight: `600 !important`
        },
        subtitle2: {
            fontWeight: '400 !important',
            fontSize : `10px !important`,
            marginTop: `20px !important`,
            color: "rgba(255, 255, 255, 0.7)"
        },
        StartedBtn : {
            background: "linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
            marginTop: "25px !important",
            width : `100px`,
            fontWeight: '600 !important',
            fontSize: `8px !important`,
            height: `35px`,
            
        },
        StartIcon: {
          height:  `20px`
        },
        Paypal : {
               marginLeft : `50px`
        },
        AllReward:{
            display: `flex`,
            alignItems : `center`,
            marginTop: `25px`,
            width: `70%`,
            padding : `10px`
          //   width : `70%`,
          },
          StarLogo : {
            height :`50px`,
            display: `flex`,
            flexDirection :`column`,
            justifyContent :`center`,
            width  :`50px`,
            alignItems : `center`,
            borderRadius : `20px`,
       background: "rgba(9, 151, 124, 0.1)"
           },
           Reward: {
            color : `#fff`,
            fontSize : `20px !important`,
            fontWeight : `600 !important`
        },
        RewardDetails : {
            fontSize : `10px !important`,
            fontWeight : `600`,
            color: `rgba(255, 255, 255, 0.7)`,
        },
        Paypalimg : {
            height: `300px`,
            marginTop: `50px`
        },
        Controlheading: {
            color : `#fff `,
            fontSize: `25px !important`,
            fontWeight  : `600 !important`
         },
         Controlcontent : {
             color : `rgba(255, 255, 255, 0.7)`, 
             fontSize : `10px !important`,
             marginTop : `30px !important`
     
         },
         Googlelogo: {
            marginRight : `15px`,
            height : `25px`
        },
        Card : {
            marginTop : `40px`,
            height : `270px`
        },
        PaypalGrid : {
            display : `flex`,
            justifyContent : `center`
        },
        ControlGrid :  {
            width  :`80%`,
            padding : `20px`,
            margin : `0 auto`
        },
        SubtitleGrid : {
            display : `flex !important`,
            flexDirection  :  `row !important`,
            justifyContent : `center !important`
        },
        CardGrid : {
            display : `flex`,
            justifyContent : `center`,
            padding : `20px`

        }
    }

}))
export  default useStyles