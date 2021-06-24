import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbarContainer: {
    backgroundColor: "#67c54f",
    width: "100%",
  },
  navbar: {
    height: "88px",
  },
  link: {
    display: "inline-block",
    height: "100%",
    webkitBoxAlign: "center",
    webkitAlignItems: "center",
    msFlexAlign: "center",
    alignItems: "center",
    color: "#3d4556",
    marginLeft: "20px",
    position: "relative",
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 900,
  },
  linkText: {
    "color": "white",
    fontWeight: "600",
    "padding": "20px",
    "fontSize": "1.5em",
    "lineHeight": "1.5",
    "textDecoration": "none",
    "textTransform": "uppercase",
    "fontFamily": "system-ui"
  },
  logo: {
    padding: "10px",
    height: "-webkit-fill-available",
  }
}));
