import React from 'react'

import { useDispatch, useSelector } from "@hooks/all";
import { setIsNavbar } from "@store/navbar/navbarSlice";

import { logoText } from "@components/Content/Content";
import FeatherIcon from "@components/FeatherIcon/FeatherIcon";

type Props = {}

const Header = (props: Props) => {
  const dispatch = useDispatch()
  const isNavbar = useSelector((state) => state.navbar.isNavbar);
  console.log("isNavbar", isNavbar);
  const handleShowNavbar = () => {
    dispatch(setIsNavbar())
  }
  return (
    <>
     <header className="position-fixed top-0 start-0 end-0">
        <div className="tw-container mx-auto p-2">
          <div className="d-flex justify-content-between ">
            <h3 className="h3 m-0">{logoText}</h3>
            <div>
              <button className="btn btn-transparent rounded-0 p-1 menu-btn" onClick={handleShowNavbar}>
                <FeatherIcon icon="menu" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header