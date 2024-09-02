import React from "react";
import cn from "classnames";

import styles from "./photo.module.css";

function Photo({
  src = "https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg",
  alt,
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
}
export default Photo;
