import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
    margin: "20px",
    position: "relative",
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 900,
  },
  linkText: {
    padding: "20px",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  logo: {
    height: "-webkit-fill-available",
    verticalAlign: "middle",
    width: "min-content",
  }
}));
