import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import Auth from "../pages/Auth";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
 
export function NavbarDefault() {
  
  const {handleSignupOpen}=useContext(AuthContext)
  const [openNav, setOpenNav] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const openModal = () => {
    setIsModalVisible(true);
};

const closeModal = () => {
    setIsModalVisible(false);
    handleSignupOpen();
};
 

 
  return (
    <>
    <Navbar className="mx-auto max-w-screen px-4 py-3 lg:px-8 lg:py-3 rounded-none bg-black">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          PasswordGenerator
        </Typography>
        <div className="flex items-center gap-x-1">
          <Button variant="text" onClick={openModal} size="sm" color="white" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign up</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
     
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" color="white" className="" onClick={openModal}>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign up</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
    <Auth isVisible={isModalVisible} onClose={closeModal}/>
    </>
  );
}