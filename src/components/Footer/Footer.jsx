import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.fw}>
      <div className={styles.fiw}>
        <div>
          <h1>Cineflex</h1>
        </div>
        <div>
          <p>
            Developed by <a href="#">Usama Israr</a>
          </p>
        </div>
        <div>
          <p>All rights reserved - 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
