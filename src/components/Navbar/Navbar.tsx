import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg">
      <div className="mx-auto px-5">
        {/* Logo */}
        <div>
          <a href="/">
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              alt="logo"
              className=""
            />
          </a>
        </div>
        {/* Nav Items */}
      </div>
      <div className="bg-white md:hidden">
        <ul>
          <li>
            <a href="#" className="inline-block w-full px-5 py-2">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="inline-block w-full px-5 py-2">
              Copywriting
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
