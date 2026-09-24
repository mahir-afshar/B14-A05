import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex justify-between gap-8 items-center">
            <li className="font-medium text-pink-500 hover:text-purple-600">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:via-pink-600">
              <a href="#">Technologies</a>
            </li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:">
              <a href="#">Projects</a>
            </li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:">
              <a href="#">About</a>
            </li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <button className="btn btn-ghost rounded-full hover:text-pink-500">
            Sign In
          </button>
          <button className="btn btn-secondary rounded-full hover:text-zinc-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
