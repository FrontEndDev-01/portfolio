import React from "react";

import { useDispatch, useSelector } from "@hooks/all";
import { Link } from "react-router-dom";
import { setIsNavbar } from "@store/navbar/navbarSlice";

import { logoText, navbarUrl } from "@components/Content/Content";
import FeatherIcon from "@components/FeatherIcon/FeatherIcon";

type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch();
  const isNavbar = useSelector((state) => state.navbar.isNavbar);
  console.log("isNavbar", isNavbar);
  const handleShowNavbar = () => {
    dispatch(setIsNavbar());
  };
  return (
    <>
      <header
        className="position-fixed top-0 start-0 h-100"
        style={{ width: "285px" }}
      >
        <div className="tw-container mx-auto p-2">
          <div className="d-flex justify-content-between ">
            <h3 className="h3 m-0">{logoText}</h3>
            <div>
              <button
                className="btn btn-transparent rounded-0 p-1 menu-btn"
                onClick={handleShowNavbar}
              >
                <FeatherIcon icon="menu" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`position-absolute top-0 bottom-0 start-0 end-0 vh-100 ${
          isNavbar ? "d-block" : "d-none"
        }`}
      >
        <div className="position-absolute top-0 end-0">
          <button
            className="btn btn-transparent rounded-0 p-1 menu-btn"
            onClick={handleShowNavbar}
          >
            <FeatherIcon icon="x" />
          </button>
        </div>
        <div className="bg-dark d-flex align-items-center justify-content-center h-100">
          <ul>
            {navbarUrl.map((item) => {
              return (
                <>
                  <li>
                    <Link to={item?.link} className="my-3">
                      {item.name}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
