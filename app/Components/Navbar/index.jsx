"use client";

import "./navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { setIndex } from "../../lib/store";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/Events",
    label: "Events",
  },
  {
    path: "/Team",
    label: "Our Team",
  },
  {
    path: "/Blogs",
    label: "Blogs",
  },
  {
    path: "/Feed",
    label: "Feed",
  },
  {
    path: "/Contact",
    label: "Contact Us",
  },
];

/* This was change fix active link code */

const NavLinkWithUnderline = ({ to, text, index, location }) => {
  return (
    <div className={to === location ? "active-link" : ""}>
      <Link key={index} href={to}>
        {text}
      </Link>
    </div>
  );
};

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [elevate, setElevate] = useState(false);
  const location = usePathname();
  const dispatch = useAppDispatch();

  console.log(location);

  useEffect(() => {
    setExpanded(false);
    dispatch(setIndex(links.findIndex((x) => location === x.path)));
  }, [location, dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      window.addEventListener("scroll", scrollHandler);
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }
  }, []);

  const navState = useAppSelector((state) => state.navLogoState.logoState);

  const scrollHandler = (event) => {    
    if (typeof window !== "undefined") {
      // browser code
      window.scrollY > 0 ? setElevate(true) : setElevate(false);
    }
    
  };

  return (
    <div
      className={`navbar ${elevate ? "elevate" : ""} ${
        location === "/" ? "home" : ""
      }`}
    >
      <div
        className={`navbar-container ${
          navState || location !== "/" ? "" : "right"
        }`}
      >
        <div className="navbar-logo">
          <img src="/gdsc-logo.png" alt="GDSC Logo" />
          <div className="navbar-logo-text">
            <span>Google Developer Student Clubs</span>
            <span>Netaji Subhas University of Technology</span>
          </div>
        </div>

        <div className={`navbar-links ${expanded ? "expanded" : ""}`}>
          {links.map((link, n) => {
            return (
              <NavLinkWithUnderline
                to={link.path}
                text={link.label}
                index={n}
                location={location}
                key={n}
              />
            );
          })}
        </div>
        {expanded ? (
          <FaTimes onClick={() => setExpanded(false)} />
        ) : (
          <FaBars onClick={() => setExpanded(true)} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
