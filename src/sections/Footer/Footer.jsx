import styles from "./FooterStyles.module.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {year} Kamlesh Vishwakarma
        <br />
        All rights reserved
      </p>
    </section>
  );
}

export default Footer;
