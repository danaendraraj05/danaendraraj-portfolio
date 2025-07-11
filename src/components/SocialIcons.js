const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Danaendraraj-R">
        <i className="fa-brands fa-github" aria-hidden="true" title="Danaendraraj R' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/danaendraraj-r-2227481b3/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Danaendraraj R' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://instagram.com/danaendraraj_039?igshid=MzNlNGNkZWQ4Mg==">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Danaendraraj R' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/rajendran.danaendraraj039">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="Danaendraraj R' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
