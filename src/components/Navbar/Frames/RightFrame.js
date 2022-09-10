import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { style } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/Avatar.png";
import wallet from "../../../assets/icon-wallet.svg";
import menu from "../../../assets/menu.png";
import styles from "../Navbar.module.css";

const RightFrame = () => {
  return (
    <div className={styles.rightFrameContainer}>
      <button className={styles.langBtn}>
        <div>English</div>
        <KeyboardArrowDownIcon />
      </button>
      <button className={styles.langBtnSmall}>
        <div>EN</div>
        <KeyboardArrowDownIcon />
      </button>
      <button className={styles.walletBtn}>
        {/* <AccountBalanceWalletIcon /> */}
        <img src={wallet} />
        <div>₹200</div>
      </button>
      <Link to="/">
        <div className={styles.avatar}>
          <img src={avatar} />
        </div>
      </Link>
      <Link to="/">
        <img className={styles.menu} src={menu} />
      </Link>
    </div>
  );
};

export default RightFrame;
