import { Link } from "gatsby";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        {" "}
        <Link>Vida Carmel</Link>
      </div>
      <ul>
        <li>
          <Link to="/individuals">Individuals</Link>
        </li>
        <li>
          <Link to="/organisations">Organisations</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
