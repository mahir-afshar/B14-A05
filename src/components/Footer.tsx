import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto border-t border-gray-100">
      <section className="py-16">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="w-32">
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <p className="mt-5 max-w-sm text-sm leading-5 text-gray-500">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
            </div>
            <div>
              <ul className="mt-6 flex gap-5">
                <li className="text-sm text-gray-700">GitHub</li>
                <li className="text-sm text-gray-700">Twitter</li>
                <li className="text-sm text-gray-700">LinkedIn</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              PRODUCT
            </h2>
            <ul className="mt-5 space-y-3">
              <li className="text-sm text-gray-500">Home</li>
              <li className="text-sm text-gray-500">Technologies</li>
              <li className="text-sm text-gray-500">Projects</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              COMPANY
            </h2>
            <ul className="mt-5 space-y-3">
              <li className="text-sm text-gray-500">About</li>
              <li className="text-sm text-gray-500">Contact</li>
              <li className="text-sm text-gray-500">Careers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              LEGAL
            </h2>
            <ul className="mt-5 space-y-3">
              <li className="text-sm text-gray-500">Privacy Policy</li>
              <li className="text-sm text-gray-500">Terms of Service</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between border-t border-gray-100 py-8">
        <div>
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>

        <ul className="flex gap-7">
          <li className="text-sm text-gray-400">Privacy</li>
          <li className="text-sm text-gray-400">Terms</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
