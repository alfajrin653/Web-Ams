const Button = ({link, children, className="text-black hover:bg-gray-200 bg-white border-2 border-black font-bold h-[53px] w-[210px] "}) => {
    return(
        <button  className={`${className} scale-75 md:scale-100 cursor-pointer py-2 px-4 `}>
            <a href={`${link}`}>
            <span>{children}</span>
            </a>
        </button>
    );
};

export default Button