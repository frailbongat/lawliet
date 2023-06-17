function MenuItem({ children, href }) {
  return (
    <a href={href} className='font-poppins text-xs text-grey-700 uppercase'>
      {children}
    </a>
  );
}

export default MenuItem;
