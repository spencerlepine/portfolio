import React from "react"
import useStyles from "./styles.js";

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      {children}
    </div >
  )
}