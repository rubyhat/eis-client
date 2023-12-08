import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./styles.module.scss";

export const Logotype = () => {
  return (
    <Link to="/" className={clsx(styles.logotype, "text-callout-regular")}>
      Roze <span className={styles.span}>Agency</span>
    </Link>
  );
};
