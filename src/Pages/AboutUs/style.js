import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme =>({
    About:{
     marginTop :  '100px',
     width : `62%`
    },
    Aboutcontent : {
        color: `#fff`,
        fontSize:  `48px !important`,
        fontWeight : '700 !important'
    },
    Everythingh:{ 
      marginTop: `100px`,
     width : `75%`
    },
    Everythinghcontent: {
        color  :`rgba(255, 255, 255, 0.7) !important`,
        fontSize : `18px !important `, 
        padding :`20px` 
    },
    EverythinghGrid:{
      display : `flex !important`,
      justifyContent :`center !important`,
      flexDirection :`column !important`
    },
    MoneyBox: {
        background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
        height : `400px`,
        width  : `70%`,
        borderRadius : `20px`,
        padding : `40px`,
        display  :`flex`,
        justifyContent : `space-between`,
        flexDirection  : `column`
    },
    MoneyBox1: {
        // background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
        height : `400px`,
        display  :`flex`,
        justifyContent : `space-between`,
        flexDirection  : `column`,
        width  : `70%`,
        // borderRadius : `20px`,
        padding : `40px`
    },
    MoneyContent:{
        marginTop :`50px `
    },
    MoneyLine: {
        fontSize  :`24px !important`,
        fontWeight : `900 !imporatnt`,
        color  : `#FFF`,
        width  : `88%`,
        marginTop : `50px !important`
    },
    peopleContent : {
     display  :`flex`,
     marginTop : `50px`
    },
    peopleImg: {
        height : `70px`
    },
    peopleLine : {
     marginLeft : `20px`,
     display : `flex`,
     flexDirection : `column`,
     justifyContent : `center`
    },
    peopleName: {
   fontSize  :`20px !important`,
   fontWeight : '400 !important',
   color: `#fff`
        },
        peopleDesg : {
     color : `rgba(255, 255, 255, 0.7) !important`,
     fontSize : `16px !important`
    },
    MoneyGrid:{
        marginTop : `90px !important`
    },
    [theme.breakpoints.down('xl')] : {
        Aboutcontent : {
            color: `#fff`,
            fontSize:  `40px !important`,
            fontWeight : '700 !important'
        },
        Everythinghcontent: {
            color  :`rgba(255, 255, 255, 0.7) !important`,
            fontSize : `14px !important `, 
            padding :`20px` 
        },
        MoneyBox: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `350px`,
            width  : `60%`,
            borderRadius : `20px`,
            padding : `40px`,
            display  :`flex`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        MoneyLine: {
            fontSize  :`18px !important`,
            fontWeight : `900 !imporatnt`,
            color  : `#FFF`,
            width  : `88%`,
            marginTop : `50px !important`
        },
        MoneyBox1: {
            // background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `350px`,
            width  : `60%`,
            // borderRadius : `20px`,
            padding : `40px`,
            display  :`flex`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        peopleImg: {
            height : `60px`
        },
        peopleLine : {
         marginLeft : `20px`,
         display : `flex`,
         flexDirection : `column`,
         justifyContent : `center`
        },
        peopleName: {
       fontSize  :`15px !important`,
       fontWeight : '400 !important',
       color: `#fff`
            },
            peopleDesg : {
         color : `rgba(255, 255, 255, 0.7) !important`,
         fontSize : `11px !important`
        },
    },
    [theme.breakpoints.down('lg')] :{
        Aboutcontent : {
            color: `#fff`,
            fontSize:  `30px !important`,
            fontWeight : '700 !important'
        },
        Everythinghcontent: {
            color  :`rgba(255, 255, 255, 0.7) !important`,
            fontSize : `11px !important `, 
            padding :`20px` 
        },
        MoneyBox: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `300px`,
            width  : `30%`,
            borderRadius : `20px`,
            padding : `40px`,
            display  :`flex`,
            marginTop : `20px`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        MoneyLine: {
            fontSize  :`14px !important`,
            fontWeight : `900 !imporatnt`,
            color  : `#FFF`,
            width  : `88%`,
            
            marginTop : `50px !important`
        },
        MoneyBox1: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `300px`,
            width  : `60%`,
            borderRadius : `20px`,
            marginTop : `20px`,
            padding : `40px`,
            display  :`flex`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        Moneysubgrid :{
            display  :`flex`,
            justifyContent : `center`
        },
        peopleImg: {
            height : `50px`
        },
        peopleLine : {
         marginLeft : `20px`,
         display : `flex`,
         flexDirection : `column`,
         justifyContent : `center`
        },
        peopleName: {
       fontSize  :`13px !important`,
       fontWeight : '400 !important',
       color: `#fff`
            },
            peopleDesg : {
         color : `rgba(255, 255, 255, 0.7) !important`,
         fontSize : `9px !important`
        },
        
    },
    [theme.breakpoints.down('md')] : {
        About:{
            marginTop :  '50px',
            width : `62%`
           },
        AboutGrid : {
          marginLeft : `80px`
        },
        Aboutcontent : {
            color: `#fff`,
            fontSize:  `40px !important`,
            fontWeight : '700 !important'
        },
        Everythingh:{ 
            marginTop: `50px`,
           width : `75%`
          },
        EverythinghGrid:{
            marginLeft : `80px`
            // flexDirection :`column !important`
          },
        Everythinghcontent: {
            color  :`rgba(255, 255, 255, 0.7) !important`,
            fontSize : `15px !important `, 
            padding :`10px` 
        },
        MoneyBox: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `300px`,
            width  : `40%`,
            borderRadius : `20px`,
            padding : `40px`,
            display  :`flex`,
            marginTop : `20px`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        MoneyLine: {
            fontSize  :`14px !important`,
            fontWeight : `900 !imporatnt`,
            color  : `#FFF`,
            width  : `88%`,
            
            marginTop : `50px !important`
        },
        MoneyBox1: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `300px`,
            width  : `40%`,
            borderRadius : `20px`,
            marginTop : `20px`,
            padding : `40px`,
            display  :`flex`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        Moneysubgrid :{
            display  :`flex`,
            justifyContent : `center`
        },
        peopleImg: {
            height : `50px`
        },
        peopleLine : {
         marginLeft : `20px`,
         display : `flex`,
         flexDirection : `column`,
         justifyContent : `center`
        },
        peopleName: {
       fontSize  :`13px !important`,
       fontWeight : '400 !important',
       color: `#fff`
            },
            peopleDesg : {
         color : `rgba(255, 255, 255, 0.7) !important`,
         fontSize : `9px !important`
        },
    },
    [theme.breakpoints.down('sm')]: {
        About:{
            marginTop :  '50px',
            width : `72%`
           },
        AboutGrid : {
          marginLeft : `80px`
        },
        Aboutcontent : {
            color: `#fff`,
            fontSize:  `25px !important`,
            fontWeight : '700 !important'
        },
        Everythingh:{ 
            marginTop: `20px`,
           width : `75%`
          },
        EverythinghGrid:{
            marginLeft : `80px`
            // flexDirection :`column !important`
          },
        Everythinghcontent: {
            color  :`rgba(255, 255, 255, 0.7) !important`,
            fontSize : `10px !important `, 
            padding :`10px` 
        },
        MoneyBox: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `250px`,
            width  : `50%`,
            borderRadius : `20px`,
            padding : `20px`,
            display  :`flex`,
            marginTop : `10px`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        MoneyContent:{
            marginTop :`10px `
        },
        MoneyLine: {
            fontSize  :`12px !important`,
            fontWeight : `900 !imporatnt`,
            color  : `#FFF`,
            width  : `88%`,
            
            marginTop : `20px !important`
        },
        MoneyBox1: {
            background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
            height : `250px`,
            width  : `50%`,
            borderRadius : `20px`,
            marginTop : `20px`,
            padding : `20px`,
            display  :`flex`,
            justifyContent : `space-between`,
            flexDirection  : `column`
        },
        Moneysubgrid :{
            display  :`flex`,
            justifyContent : `center`
        },
        peopleImg: {
            height : `35px`
        },
        peopleLine : {
         marginLeft : `20px`,
         display : `flex`,
         flexDirection : `column`,
         justifyContent : `center`
        },
        peopleName: {
       fontSize  :`11px !important`,
       fontWeight : '400 !important',
       color: `#fff`
            },
            peopleDesg : {
         color : `rgba(255, 255, 255, 0.7) !important`,
         fontSize : `7px !important`
        },
    }
}))
export default useStyles;