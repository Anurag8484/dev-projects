import { useState } from "react";
import "../header.css";
export function Header() {
  return (
    <>
      <header>
        <div className="header-left">100xDevs</div>
        <div className="header-middle">
          <p>About</p>
          <p>Features</p>
          <p>News</p>
        </div>
        <div className="header-right">
          <button className="header-button1">Contact us!</button>
        </div>
      </header>
    </>
  );
}
