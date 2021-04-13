import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export const PplList = ({ name, userName, children }) => {
  return (
    <li className={utilStyles.liBordered}>
      <Link href={"/people/" + userName}>
        <a className={utilStyles.specialA}>
          <h3 className={utilStyles.nopaddingMargin}>{children}</h3>
        </a>
      </Link>
    </li>
  );
};
