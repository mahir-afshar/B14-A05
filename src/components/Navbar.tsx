import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-4 items-center container mx-auto bg-white my-2">
        {/* logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex justify-between gap-8 items-center">
            <li className="font-medium text-pink-500">Home</li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:via-pink-600" >Technologies</li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:" >Projects</li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:" >About</li>
            <li className="text-gray-600 hover:text-pink-500 pointer-coarse:" >Contact</li>
        </ul>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <button className="btn btn-ghost rounded-full">Sign In</button>
        <button className="btn btn-secondary rounded-full">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
