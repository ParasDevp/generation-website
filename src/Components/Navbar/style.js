import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({

  Navbar: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    height: `80px`
  },
  Menuicon: {
    display: `flex !important`,
    margin: `20px`,
    justifyContent: `space-between !important`
  },
  Navbarli: {
    textDecoration: `none`,
    listStyle: `none`,
    color: `white`,
    fontSize: `25px`,
    margin: `50px 0px 20px 50px`,
    '&:hover': {
      color: `grey`
    }
  },
  ListNames: {
    display: `flex`,
    color: `#fff`,
    textDecoration: `none`,
    listStyle: `none`
  },
  List: {
    marginLeft: `50px !important`,
    fontSize: `20px !important`,
    fontWeight: `900 !important`,
    color: `rgba(255, 255, 255, 0.7) !important`,
    textDecoration: `none !important`,
    cursor: `pointer`,
    fontStyle: `normal`,
    '&:hover': {
      color: `white !important`
    },

  },
  LogoImg: {
    height: `45px !important`
  },
  NavbarDrawer: {
    '& .MuiDrawer-paper': {
      background: 'linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)',
      width: 240,
      position: 'fixed',
      boxSizing: 'border-box',
      // background: `grey`
    },
  },

  // [theme.breakpoints.down('xl')]: {

  //   List: {
  //     marginLeft: `45px !important`,
  //     fontSize: `18px !important`,
  //     fontWeight: `900 !important`,
  //     color: `rgba(255, 255, 255, 0.7) !important`,
  //     textDecoration: `none !important`,
  //     cursor: `pointer`,
  //     fontStyle: `normal`,
  //     '&:hover': {
  //       color: `white !important`
  //     },

  //   },
  //   LogoImg: {
  //     height: `40px !important`
  //   },
  // },
  // [theme.breakpoints.down('lg')]: {
  //   List: {
  //     marginLeft: `40px !important`,
  //     fontSize: `16px !important`,
  //     fontWeight: `900 !important`,
  //     color: `rgba(255, 255, 255, 0.7) !important`,
  //     textDecoration: `none !important`,
  //     cursor: `pointer`,
  //     fontStyle: `normal`,
  //     '&:hover': {
  //       color: `white !important`
  //     },

  //   },
  //   LogoImg: {
  //     height: `35px !important`
  //   },
  // },
  // [theme.breakpoints.down('md')]: {

  //   LogoImg: {
  //     height: `30px !important`
  //   },
  // }

}));
export default useStyles;