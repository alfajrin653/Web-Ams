


const Header = ({img, title, desk}) => {
    return (
      <>
      <div className="logo w-full flex items-center gap-4 ">
        <img src= {img} alt="logo" className="w-[122px] h-auto" />
        <div className="w-[1000px]">

        <h2 className="text-xl font-semibold text-primary italic">
          {title}
        </h2>
        </div>
        </div>
        <p className="text-left text-sm lg:text-xl font-bold text-primary  lg:max-w-6xl mt-4">
          {desk}
        </p>
        <h3 className="text-3xl font-bold text-primary mt-8 pt-5">PRODUCT & SERVICE</h3>
        </>
    );
  };


export default Header;