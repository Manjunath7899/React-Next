import React, { SetStateAction, use, useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

interface CreateMenusProps {
  activeLink: string;
  getMenuItems: any[];
  setActiveLink: React.Dispatch<SetStateAction<string>>;
  mobileOption?: boolean;
}

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "Project",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const CreateMenus: React.FC<CreateMenusProps> = ({
  activeLink,
  getMenuItems,
  setActiveLink,
  mobileOption = false,
}) => {
  return getMenuItems.map((item: any) => {
    return (
      <LinkScroll
        key={item.id}
        to={item.id}
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1000}
        onSetActive={() => {
          setActiveLink(item.id);
        }}
        onClick={() => {
          setActiveLink(item.id);
        }}
        className={`px-2 py-2 mx-2 cursor-pointer font-bold 2xl:text-[25px] text-[18px] inline-block relative text-[#000] transition-all duration-300
              ${mobileOption ? "block" : "inline-block"} 
              ${
                activeLink === item.id
                  ? "text-green-600 border-b-"
                  : "text-[#000] font-bold hover:text-green-600"
              }
            `}
      >
        {item.label}
        {activeLink === item.id && (
          <motion.div
            className="absolute left-0 -bottom-1 h-[3px] w-full bg-green-600 origin-center rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </LinkScroll>
    );
  });
};

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <header className="fixed top-0 w-full bg-white z-40">
        <nav className="2xl:max-w-screen-2xl max-w-screen-xl 2xl:px-12 px-6 sm:px-8 lg:px-16 mx-auto flex justify-between items-center 2xl:py-6 py-3 sm:py-4 w-full">
          <div className="col-start-1 col-end-2 flex items-center max-sm:col-start-10 max-sm:col-end-12 max-sm:ml-auto max-md:col-start-10 max-md:col-end-12 max-md:ml-auto max-lg:col-start-10 max-lg:col-end-12 max-lg:ml-auto">
            <div className="cursor-pointer flex gap-1 items-center 2xl:text-[30px] text-[20px] font-bold text-green-600">
              <div className="2xl:w-[60px] 2xl:h-[60px] w-[40px] h-[40px] flex justify-center items-center 2xl:p-6 p-3 bg-green-600 rounded-[8px]">
                <span className="font-bold text-[#fff]">P</span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex 2xl:flex col-start-4 col-end-8 font-medium text-[#000] items-center">
            <CreateMenus
              activeLink={activeLink}
              setActiveLink={(newActiveLink) => {
                setActiveLink(newActiveLink);
              }}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveLink("contact")}
              onClick={() => setActiveLink("contact")}
            >
              <button className="hidden lg:block rounded-lg 2xl:text-2xl lg:text-lg text-xl text-[#000] px-6 py-3 border-[2px] cursor-pointer border-green-600 bg-[#fff] tracking-widest hover:bg-green-600 hover:text-[#fff] transition-all outline-none">
                Contact Me
              </button>
            </LinkScroll>
          </div>
        </nav>
      </header>

      {/* Mobile Device */}
      <nav className="fixed top-0 left-0 px-6 py-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-green-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </button>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg justify-center items-center z-50"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-5 right-10 text-3xl text-green-600 cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
            <div className="flex justify-center gap-6 items-center flex-col mt-[100px]">
              <CreateMenus
                activeLink={activeLink}
                setActiveLink={(newActiveLink) => {
                  setActiveLink(newActiveLink);
                  setMobileMenuOpen(false);
                }}
                getMenuItems={menuItems}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
