import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex-center'>
      <Image
        src='/assests/icons/icons8-loading-heart.gif'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;