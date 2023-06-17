import Button from '@/components/Button';
import Logo from '@/components/Logo';
import MenuItem from '@/components/MenuItem';
import NameCard from '@/components/NameCard';
import Notification from '@/components/Notification';
import SearchButton from '@/components/SearchButton';
import Image from 'next/image';

const menus = ['Contact', 'Testimonial', 'About', 'Terms'];

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-between py-8'>
        <Logo />
        <div className='flex items-center gap-[131px]'>
          <ul className='flex items-center gap-14'>
            {menus.map((menu, index) => (
              <li key={index}>
                <MenuItem>{menu}</MenuItem>
              </li>
            ))}
          </ul>
          <SearchButton />
        </div>
      </div>

      <div className='relative pb-[42px]'>
        <Notification />
        <h2 className='font-playfair font-bold text-[90px] text-blue-300 leading-[120%] tracking-[0.02em] mt-5 w-[748px]'>
          Your Solution Legal Consultacy
        </h2>
        <p className='font-jakarta font-medium text-2xl leading-[158%] tracking-[0.5px] text-grey-600 mt-[46px] w-[590px]'>
          We are here to help you take care of your legality with the best
          service especially for you.
        </p>
        <Button />
        <p className='font-jakarta text-[22px] leading-[140.5%] tracking-[0.04em] text-grey-500 mt-[115px]'>
          Trusted by 10+ companies in indonesia
        </p>

        <div className='grid gap-y-[33px] mt-[34px] grid-cols-[154px_auto]'>
          <Image src='/brands/airbnb.png' alt='Airbnb' width={90} height={28} />
          <Image
            src='/brands/hubspot.png'
            alt='Hubspot'
            width={84}
            height={24.01}
          />
          <Image
            src='/brands/microsoft.png'
            alt='Microsoft'
            width={122}
            height={26}
          />
          <Image src='/brands/google.png' alt='Google' width={84} height={28} />
        </div>
        <NameCard />
      </div>
    </>
  );
}
