import banner from "../assets/banner-stack.png";

const Herosection = () => {
  return (
    <div className="grid grid-cols-2 justify-between gap-30 items-center container mx-auto bg-white rounded-2xl my-2">
      <div>
        <div>
          <h1 className="text-5xl font-bold">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-10 text-lg text-gray-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <div className="mt-20 flex gap-4">
          <button className="btn btn-secondary bg-linear-to-r from-orange-500 to-pink-500 rounded-full hover:text-gray-500">
            Explore Technologies
          </button>
          <button className="btn btn-ghost rounded-full hover:text-pink-500">Learn More</button>
        </div>
      </div>
      <div>
        <img src={banner} alt="Banner" className="w-full" />
      </div>
    </div>
  );
};

export default Herosection;
