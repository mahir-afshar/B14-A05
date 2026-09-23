import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <section>
        <div className="flex justify-between gap-5">
          <div>
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <p>
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
            </div>
            <div>
              <ul className="flex gap-5">
                <li>GitHub</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>PRODUCT</h2>
            <ul>
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h2>COMPANY</h2>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h2>LEGAL</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-20 my-10">
        <div>
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>

        <ul className="flex justify-between gap-5">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
