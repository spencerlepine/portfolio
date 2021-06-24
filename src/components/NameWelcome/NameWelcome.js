import React from "react";
import useStyles from "./styles"

function NameWelcome() {
  const classes = useStyles();

  return (
    <div className={classes.welcomeContainer}>
      <h1>
        <span className={classes.nameIntro}>I'm</span>
        <br />
        <span className={classes.name}> Spencer Lepine </span>
        <br />
        <span className={classes.title}>
          a Software Engineer
        </span>
      </h1>
    </div>
  );
}

export default NameWelcome;