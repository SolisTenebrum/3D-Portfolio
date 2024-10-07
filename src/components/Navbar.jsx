import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { useTranslation } from "react-i18next";
import ruFlag from "../assets/ruFlag.svg";
import ukFlag from "../assets/ukFlag.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toggleLng, setToggleLng] = useState(false);
  const lngButtonRef = useRef(null);
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setToggleLng(false);
    setToggle(false);
  };

  const getLngMenuPosition = () => {
    if (lngButtonRef.current && menuRef.current) {
      const rect = lngButtonRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const buttonWidth = rect.width;

      return (
        window.innerWidth -
        rect.right -
        menuRect.width / 2 +
        buttonWidth / 2 -
        20
      );
    }

    return 0;
  };

  const handeScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
  }, []);

  const navLinks = [
    {
      id: "about",
      title: t("header.aboutButton"),
    },
    {
      id: "work",
      title: t("header.workButton"),
    },
    {
      id: "contact",
      title: t("header.contactButton"),
    },
  ];

  const LanguageFlags = () => {
    return (
      <>
        <img
          src={ruFlag}
          className="w-[40px] cursor-pointer"
          onClick={() => {
            changeLanguage("ru");
            setToggleLng(!toggleLng);
          }}
        />
        <img
          src={ukFlag}
          className="w-[40px] cursor-pointer"
          onClick={() => {
            changeLanguage("en");
            setToggleLng(!toggleLng);
          }}
        />
      </>
    );
  };

  return (
    <nav
      className={`
      ${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${
        scrolled ? " bg-opacity-100 " : " bg-opacity-0"
      } transition duration-500
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto select-none">
        <Link
          to="/"
          className="flex items-center gap-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-cover" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            SolisTenebrum &nbsp;
            <span className="xl:block hidden"> | {t("header.siteName")}</span>
          </p>
        </Link>
        <div className="flex gap-10">
          <p
            className="justify-self-end cursor-pointer hover:text-white hidden md:block text-secondary text-[18px]"
            onClick={() => {
              setToggleLng(!toggleLng);
            }}
            ref={lngButtonRef}
          >
            {t("header.languageButton")}
          </p>
          <div
            className={`${
              !toggleLng ? "opacity-0 invisible" : "opacity-100 visible"
            } p-6 menu-color absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300 hidden md:block`}
            style={{ right: `${getLngMenuPosition()}px` }}
            ref={menuRef}
          >
            <ul className="list-none flex justify-end items-start gap-5">
              <LanguageFlags />
            </ul>
          </div>

          <ul className="list-none hidden md:flex flex-row gap-10 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px]`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 grow-0 md:hidden">
          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 transform ${
                toggle ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setToggleLng(false);
              }}
            />
          </div>
          <div
            className={`${
              !toggle ? "opacity-0 invisible" : "opacity-100 visible"
            } p-6 menu-color absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <p
                className="justify-self-end cursor-pointer text-secondary md:hidden block text-[18px]"
                onClick={() => setToggleLng(!toggleLng)}
              >
                {t("header.languageButton")}
              </p>
              <div
                className={`${
                  !toggleLng ? "opacity-0 invisible" : "opacity-100 visible"
                }  p-6 menu-color absolute bottom-[-8px] right-[135px] mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300 md:hidden block`}
              >
                <ul className="list-none flex justify-end items-start gap-4">
                  <LanguageFlags />
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
