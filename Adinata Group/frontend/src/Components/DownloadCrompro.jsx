// import unduh from '../assets/unduh.png';


const DownloadCompro = ({linkUnduh}) => (
  <a href={`${linkUnduh}`}>
    <button className=' fixed w-[141px] h-[39px] border-2 rounded-lg bottom-5 right-5 bg-primary text-white mr-15 p-3 shadow-lg hover:bg-blue-500 cursor-pointer transition-all flex items-center justify-center'>
      {/* <img src={unduh} alt='unduh' className='ml-0' /> */}
      <span className='text-[10px] font-inter'>Company profile</span>
    </button>
  </a>
);

export default DownloadCompro