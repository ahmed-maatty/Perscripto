import logo from "/assets/logo.png";
import { Link, NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeUser } from "../store/userSlice";
import { useState } from "react";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { user } = useSelector((state: RootState) => state.User);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(removeUser());
  };
  console.log(menu);
  return (
    <nav className="flex justify-between items-center sticky top-0 py-4 px-6">
      <div className="nav_logo flex justify-center items-center gap-2">
        <img src={logo} alt="" className="w-8" />
        <h1 className="text-2xl font-semibold logo_txt_color">Prescripto</h1>
      </div>
      <div className={`navigation ${menu ? "active" : ""}`}>
        <ul className="flex items-center gap-8">
          <NavLink
            to={"/"}
            className={"capitalize text-lg font-normal txt_main_colo"}
            onClick={() => setMenu(false)}
          >
            home
          </NavLink>
          <NavLink
            to={"/all-doctors"}
            className={"capitalize text-lg font-normal txt_main_colo"}
            onClick={() => setMenu(false)}
          >
            all doctors
          </NavLink>
          <NavLink
            to={"/about"}
            className={"capitalize text-lg font-normal txt_main_colo"}
            onClick={() => setMenu(false)}
          >
            about
          </NavLink>
          <NavLink
            to={"/contact"}
            className={"capitalize text-lg font-normal txt_main_colo"}
            onClick={() => setMenu(false)}
          >
            contact
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <div className="dropDown active">
            <button className="capitalize text-lg font-normal logo_txt_color cursor-pointer">
              {user.username}
            </button>
            <div
              className={`dropDown_Menu ${
                user.role === "Admin" ? "admin_dropDown_style" : ""
              }`}
            >
              {user.role === "Admin" && (
                <>
                  <Link
                    to={"/dashboard"}
                    className="dashboard capitalize cursor-pointer py-4 px-8"
                  >
                    dashboard
                  </Link>
                </>
              )}
              <button
                className="logout capitalize cursor-pointer py-4 px-8"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to={"/auth/register"}
            className="capitalize py-2 px-4 nav_auth_btn"
          >
            create account
          </Link>
        )}
        <button
          className="menu"
          onClick={() => setMenu((prev: boolean) => !prev)}
        >
          {menu ? (
            <RiCloseFill size={30} color="red" />
          ) : (
            <RiMenu3Line size={30} color="#000b6d" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
