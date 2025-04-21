const LeftSection = ({ title, title2, products }) => {
    return (
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-white pb-[47px]">{title}</h2>
        <p className="text-xl italic text-white">{title2}</p>
        <div className="mt-4 space-y-3">
          {products.map((product, index) => (
            <button
              key={index}
              className="w-full p-4 text-left bg-white text-teal-700 rounded-lg shadow hover:bg-gray-100 transition"
            >
              {product}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default LeftSection;
  