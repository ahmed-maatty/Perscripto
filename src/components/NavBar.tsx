import logo from "/assets/logo.png";
import { Link, NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 py-4 px-6">
      <div className="nav_logo flex justify-center items-center gap-2">
        <img src={logo} alt="" className="w-8" />
        <h1 className="text-2xl font-semibold logo_txt_color">Prescripto</h1>
      </div>
      <div className="navigation">
        <ul className="flex items-center gap-8">
          <NavLink
            to={"/"}
            className={"capitalize text-lg font-normal txt_main_colo"}
          >
            home
          </NavLink>
          <NavLink
            to={"all-doctors"}
            className={"capitalize text-lg font-normal txt_main_colo"}
          >
            all doctors
          </NavLink>
          <NavLink
            to={"about"}
            className={"capitalize text-lg font-normal txt_main_colo"}
          >
            about
          </NavLink>
          <NavLink
            to={"contact"}
            className={"capitalize text-lg font-normal txt_main_colo"}
          >
            contact
          </NavLink>
        </ul>
      </div>
      <div>
        <Link
          to={"auth/register"}
          className="capitalize py-2 px-4 nav_auth_btn"
        >
          {" "}
          create account
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
