import React from 'react';
import './Footer.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">© Copyright {new Date().getFullYear()}{" "}
        {/*<Link className="footer__portfolioLink hvr-icon-grow" target="_blank" to={{ pathname: "https://junjie-wu.web.app/" }}>*/}
        <Link className="footer__portfolioLink" target="_blank" to={{ pathname: "https://junjie-wu.web.app/" }}>
          {" "}Junjie Wu
        </Link>
        <IconButton className="footer__mail" href="mailto:contact@junjiewu.com">
          {/*<IoMailOutline />*/}
          <MailOutlineIcon />
        </IconButton>
      </p>
    </div>
  )
}
