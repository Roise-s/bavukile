import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="sticky mt-2 top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
    <nav className="relative max-w-5xl w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 ps-5 pe-2 md:py-0 mx-2 lg:mx-auto">
        <div className="flex items-center">
        {/* Logo */}
        <button className="flex rounded-md cursor-pointer text-xl justify-center items-center font-semibold focus:outline-hidden focus:opacity-80">
            <img src="/logo.png" alt="logo" width={30} />
            <p className="text-gray-100 text-[18px] w-[300px] ml-1.5">Bavukile Business Administration</p>
        </button>
        {/* End Logo */}

        <div className="ms-1 sm:ms-2">

        </div>
        </div>

        {/* Button Group */}
        <div className="md:order-3 flex items-center gap-x-3">
        <div className="md:ps-3">
            <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden" href="#">
            Contact Us
            </a>
        </div>
        </div>
        {/* End Button Group */}

        {/* Collapse */}
        <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-2 md:py-0 md:ps-7">
            <Link to="Home" smooth={true} duration={500}>
              <p className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white cursor-pointer hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300">Home</p>
            </Link>
            <Link to="Services" smooth={true} duration={500}>
              <p className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white cursor-pointer hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300">Services</p>
            </Link>
            <Link to="Vision" smooth={true} offset={-100} duration={500}>
              <p className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white cursor-pointer hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300">Vision</p>
            </Link>
            <Link to="About" smooth={true} offset={-70} duration={500}>
              <p className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white cursor-pointer hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300">About</p>
            </Link>
        </div>
        </div>
        {/* End Collapse */}
    </nav>
    </header>
  )
}

export default Header
