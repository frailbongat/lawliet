import Image from 'next/image';

function NameCard() {
  return (
    <div className='text-center w-fit absolute -bottom-[20.57px] -right-[223px]'>
      <Image src='/tiara.png' alt='Tiara' width={700} height={840.64} />
      <div className='w-[382px] h-[114px] rounded-[10px] bg-white drop-shadow-namecard flex flex-col items-center justify-center ml-[125px]'>
        <p class='font-jakarta font-bold text-2xl leading-[36px] text-blue-500'>
          Tiara Andini
        </p>
        <p className='font-jakarta font-medium leading-[36px] text-[#87898c] mt-0.5'>
          - Lawyer
        </p>
      </div>
    </div>
  );
}

export default NameCard;
