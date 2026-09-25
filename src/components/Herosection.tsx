import banner from "../assets/banner-stack.png";

const Herosection = () => {
  return (
    <div className="container mx-auto my-2 grid grid-cols-1 items-center gap-8 rounded-2xl bg-white py-8 md:grid-cols-2 md:gap-30">
      <div>
        <div>
          <h1 className=" font-['Inter'] text-4xl font-bold md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-base text-gray-600 md:mt-10 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 md:mt-20">
          <button className="btn btn-secondary bg-linear-to-r from-orange-500 to-pink-500 rounded-lg hover:text-gray-500">
            Explore Technologies
          </button>
          <button className="btn btn-ghost rounded-lg bg-gray-100 hover:text-pink-500">Learn More</button>
        </div>
      </div>
      <div>
        <img src={banner} alt="Banner" className="w-full" />
      </div>
    </div>
  );
};

export default Herosection;
