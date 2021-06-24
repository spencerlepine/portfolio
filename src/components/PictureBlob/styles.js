import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  pictureContainer: {
    maxWidth: "300px",
    margin: "auto",
  },
  curveDiv: {
    position: "relative",
    marginTop: "-3em",
    marginLeft: "-2em",
    marginRight: "-2em",
    "@media (min-width:800px)": {
      top: "-4em",
    },
    "@media (max-width:600px)": {
      top: "-2em",
    },
    "@media (max-width:500px)": {
      top: "-0.5em",
    },
    "@media (max-width:400px)": {
      top: "0.3em",
    },
    "@media (max-width:300px)": {
      top: "1.3em",
    },
  },
  blobContainer: {
    zIndex: "-3",
    position: "relative",
    margin: "0",
  },
  searchBlob: {
    width: "inherit",
    height: "inherit",
    "margin": "-4px",
    zIndex: "-1",
    position: "absolute",
    "maxHeight": "-webkit-fill-available"
  },
  firstBlob: {
    zIndex: "-3",
  },
  secondBlob: {
    zIndex: "-2",
  },
  thirdBlob: {
    zIndex: "-1",
  },
  imageBlob: {
    zIndex: "2",
  },
  searchImg: {
    filter: "opacity(0.4)",
    zIndex: "6",
    position: "relative",
    padding: "5em 1em",
    maxWidth: "90vw",
    maxHeight: "50vh",
    margin: "auto",
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto",
  },
  aboutPic: {
    display: "block",
    width: "100%",
    height: "100%",
  },
}))