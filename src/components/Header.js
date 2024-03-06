/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import urlFor from "../utils/imageUrlBuilder";
import { useRouter } from "next/router";

const Header = ({ layout }) => {
  const { mainLogo = "", header = [] } = layout;
  console.log(layout);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState("");
  const handleMenuOpen = () => {
    setMenuOpen((b) => !b);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setPath(window.location.pathname);
    menuOpen && handleMenuOpen();
  }, [router.asPath]);
  return (
    <div className='z-50 w-full bg-transparent absolute top-0 left-0 text-white'>
      <div className='flex items-center justify-between lg:px-20 px-6 lg:py-14 py-10'>
        <div className='flex lg:hidden ml-4 items-center lg:self-center justify-between h-16 lg:mr-auto cursor-pointer'>
          <img className='h-10' src={urlFor(mainLogo)} alt='primary logo' />
        </div>
        <div className='lg:hidden'>
          <button
            onClick={handleMenuOpen}
            className='flex items-center p-3 navbar-burger'
            data-menu
          >
            <svg
              width='30'
              height='25'
              viewBox='0 0 30 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 2H30' stroke='white' strokeWidth='2.5' />
              <path d='M0 13H30' stroke='white' strokeWidth='2.5' />
              <path d='M0 23H30' stroke='white' strokeWidth='2.5' />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex items-center lg:self-center justify-between h-16 lg:mr-auto cursor-pointer'>
          <span onClick={() => router.push("/")} className='mr-auto'>
            {mainLogo && (
              <img className='h-20' src={urlFor(mainLogo)} alt='primary logo' />
            )}
          </span>
        </div>
        <div className='hidden lg:flex uppercase'>
          <ul className='hidden lg:flex lg:items-center lg:w-auto lg:space-x-6 !list-none'>
            {header.map((link, i) => {
              const isSame =
                link?.slug?.current && path.indexOf(link?.slug?.current) > -1;
              return link?.slug ? (
                <div key={i}>
                  {path === "/signup-consult" ? (
                    ""
                  ) : link.slug ? (
                    <div
                      data-menu
                      onClick={() => router.push(link.slug?.current || "/")}
                      className={
                        isSame
                          ? "block py-4 text-md text-sunny-500 cursor-pointer"
                          : "block py-4 text-md text-white cursor-pointer"
                      }
                    >
                      {
                        <div
                          data-menu
                          onClick={() => router.push(link.slug || "/")}
                        >
                          {link.title}
                        </div>
                      }
                    </div>
                  ) : null}
                </div>
              ) : (
                <div>asd</div>
              );
            })}
          </ul>
        </div>
      </div>
      {/* 
          MOBILE
               */}
      <div
        className={`fixed top-0 bottom-0 left-0 px-9 py-3 transition-all duration-[450ms] overflow-y-auto transform bg-darkBlue w-full rounded shadow-md navbar-menu z-100 block lg:hidden overflow-x-hidden ${
          !menuOpen ? "translate-x-[150vw]" : ""
        }`}
        id='nav-wrapper'
      >
        <div className='flex items-center mb-8'>
          <a
            className='mr-auto text-3xl pl-[1.9px] font-bold leading-none cursor-pointer'
            href='#'
          >
            <span onClick={() => router.push("/")}>
              <img
                className='h-10 md:h-10'
                src={urlFor(mainLogo)}
                alt='primary logo'
              />
            </span>
          </a>
          <button onClick={closeMenu} className='navbar-close z-10' data-menu>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.00005 8.40005L2.10005 13.3C1.91672 13.4834 1.68338 13.575 1.40005 13.575C1.11672 13.575 0.883382 13.4834 0.700049 13.3C0.516715 13.1167 0.425049 12.8834 0.425049 12.6C0.425049 12.3167 0.516715 12.0834 0.700049 11.9L5.60005 7.00005L0.700049 2.10005C0.516715 1.91672 0.425049 1.68338 0.425049 1.40005C0.425049 1.11672 0.516715 0.883382 0.700049 0.700049C0.883382 0.516715 1.11672 0.425049 1.40005 0.425049C1.68338 0.425049 1.91672 0.516715 2.10005 0.700049L7.00005 5.60005L11.9 0.700049C12.0834 0.516715 12.3167 0.425049 12.6 0.425049C12.8834 0.425049 13.1167 0.516715 13.3 0.700049C13.4834 0.883382 13.575 1.11672 13.575 1.40005C13.575 1.68338 13.4834 1.91672 13.3 2.10005L8.40005 7.00005L13.3 11.9C13.4834 12.0834 13.575 12.3167 13.575 12.6C13.575 12.8834 13.4834 13.1167 13.3 13.3C13.1167 13.4834 12.8834 13.575 12.6 13.575C12.3167 13.575 12.0834 13.4834 11.9 13.3L7.00005 8.40005Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
        <div>
          <div className='divide-y divide-[#495D67]'>
            {header.map((link, i) => {
              const isSame =
                link?.slug?.current && path.indexOf(link?.slug?.current) > -1;
              return link?.slug ? (
                <div key={i}>
                  {path === "/signup-consult" ? (
                    ""
                  ) : link.slug ? (
                    <div
                      data-menu
                      onClick={() => router.push(link.slug?.current || "/")}
                      className={
                        isSame
                          ? "block py-4 text-md text-sunny-500 cursor-pointer"
                          : "block py-4 text-md text-white cursor-pointer"
                      }
                    >
                      {
                        <div
                          data-menu
                          onClick={() => router.push(link.slug || "/")}
                        >
                          {link.title}
                        </div>
                      }
                    </div>
                  ) : null}
                </div>
              ) : (
                <div>asd</div>
              );
            })}
            <div className='py-6'>buttons</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
