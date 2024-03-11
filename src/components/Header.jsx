import Button from "./Button/Button";
import { useState } from "react";
import LearnSection from "./LearnSection";
import { Link, Outlet } from "react-router-dom";
import MainSection from "./MainSection";
import logo from "/logo.svg";

export default function Header() {
  const [content, setContent] = useState("");
  function handleClick(type) {
    console.log("Button Clicked", type);
    setContent(type);
  }
  return (
    <>
      <header>
        <img src={logo} alt="React" className="img" />

        <input type="search" className="search" />
        <Link to="/" className="link">
          <p>Home</p>
        </Link>
        <Link to="/learn" className="link">
          <p>Learn</p>
        </Link>
      </header>
      <Outlet />
    </>
  );
}
