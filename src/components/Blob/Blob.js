import React from "react";
import aboutPic from "../../images/about_pic.png"
import useStyles from "./styles"

function Blob() {
  const classes = useStyles();

  // green, yellow, blue, pink
  const blobSize = 200;
  return (
    <div>
      <div classeName={classes.searchContainer}>
        {/* <svg className={classes.curveDiv} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#42b029" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,266.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        <div className={classes.searchExample}>
          <svg className={`${classes.searchBlob} ${classes.firstBlob}`} viewBox={`0 0 ${blobSize} ${blobSize}`} xmlns="http://www.w3.org/2000/svg">
            <path fill="rgb(66, 176, 41)" d="M57.6,-56.2C71.8,-43.4,78.4,-21.7,78.2,-0.2C77.9,21.2,70.8,42.4,56.6,55.8C42.4,69.2,21.2,74.7,0.2,74.6C-20.9,74.4,-41.8,68.5,-56,55.1C-70.3,41.8,-78.1,20.9,-77.4,0.7C-76.7,-19.5,-67.7,-39.1,-53.4,-51.9C-39.1,-64.6,-19.5,-70.6,1.1,-71.7C21.7,-72.8,43.4,-68.9,57.6,-56.2Z" transform="translate(100 100)" />
          </svg>
          <svg className={`${classes.secondBlob} ${classes.searchBlob}`} viewBox={`0 0 ${blobSize} ${blobSize}`} xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M65,-23C71.7,-0.6,55.8,27.2,32.4,44.1C9,61,-22.1,67,-44,52.9C-65.9,38.8,-78.6,4.5,-69.8,-20.9C-60.9,-46.3,-30.5,-62.9,-0.7,-62.6C29.2,-62.4,58.3,-45.4,65,-23Z" transform="translate(100 100)" />
          </svg>
          <svg className={`${classes.thirdBlob} ${classes.searchBlob}`} viewBox={`0 0 ${blobSize} ${blobSize}`} xmlns="http://www.w3.org/2000/svg">
            <path fill="yellow" d="M61.3,-45.2C75.7,-30.9,80.9,-5.6,75,16C69.2,37.6,52.3,55.6,31.3,66.2C10.3,76.8,-14.8,79.9,-31.6,70.1C-48.4,60.3,-56.9,37.6,-62.5,14C-68.2,-9.7,-71,-34.3,-60.1,-47.8C-49.2,-61.2,-24.6,-63.6,-0.6,-63.1C23.5,-62.7,47,-59.4,61.3,-45.2Z" transform="translate(100 100)" />
          </svg>

          <svg svg className={`${classes.imageBlob}`} viewBox={`0 0 ${blobSize * 0.7} ${blobSize * 0.7}`} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="myCircle">
                <path fill="#00000000" d="M48,-34.7C62.4,-20.2,74.5,-0.2,71.3,17.3C68.1,34.8,49.7,49.9,29.4,58.7C9.2,67.5,-12.9,70.1,-29.5,61.9C-46.2,53.7,-57.4,34.7,-60.1,15.7C-62.9,-3.3,-57.2,-22.2,-45.8,-36C-34.4,-49.8,-17.2,-58.5,-0.2,-58.3C16.8,-58.1,33.6,-49.2,48,-34.7Z" transform="translate(65 60)" />
              </clipPath>
            </defs>
            <image width={blobSize * 0.7} height={blobSize * 0.7} xlinkHref={aboutPic} clip-path="url(#myCircle)" transform="translate(0 0)" />
          </svg>

        </div>
      </div >
    </div >
  );
}

export default Blob;