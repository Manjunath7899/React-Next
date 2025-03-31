import React, { SetStateAction, use, useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface CreateMenusProps {
  activeLink: string;
  getMenuItems: any[];
  setActiveLink: React.Dispatch<SetStateAction<string>>;
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
    id: "education",
    label: "Education",
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
}) => {
  return (
    <div>
      {getMenuItems.map((item: any) => {
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
            className={`px-4 py-2 mx-2 cursor-pointer font-bold text-[18px] inline-block relative text-[#000] transition-all duration-300
              ${
                activeLink === item.id
                  ? "text-green-600 border-b-"
                  : "text-[#000] font-bold hover:text-green-600"
              }
            `}
          >
            {item.label}
          </LinkScroll>
        );
      })}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(true);

  return (
    <>
      <header className="fixed top-0 w-full bg-white">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-1 items-center text-[20px] font-bold text-green-600">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 bg-green-600 rounded-[8px]">
                <span className="font-bold text-[#fff]">P</span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 font-medium text-[#000] items-center">
            <CreateMenus
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button className="hidden lg:block rounded-lg text-xl text-[#000] px-6 py-3 border-[2px] cursor-pointer border-green-600 bg-[#fff] tracking-widest hover:bg-green-600 hover:text-[#fff] transition-all outline-none">
              Contact Me
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Device */}
    </>
  );
};

export default Navbar;
