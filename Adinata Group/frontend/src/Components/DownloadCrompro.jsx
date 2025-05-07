// import unduh from '../assets/unduh.png';


const DownloadCompro = ({linkUnduh, className="flex"}) => (
  <a href={`${linkUnduh}`}>
    <button className={`${className} w-[141px] h-[39px]  rounded-lg bottom-5 right-5 bg-primary text-white mr-15 p-3 shadow-lg hover:bg-blue-500 cursor-pointer transition-all  items-center justify-center`}>
      {/* <img src={unduh} alt='unduh' className='ml-0' /> */}
      <span className='text-[10px] font-inter'>Unduh Company profile</span>
    </button>
  </a>
);

export default DownloadCompro