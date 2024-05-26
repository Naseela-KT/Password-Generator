/* eslint-disable react/prop-types */
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
  import { XIcon } from '@heroicons/react/outline';
  import { AuthContext } from "../../context/authContext"; 
  import { useContext } from "react";
   
  const LoginCard=({onClose})=> {
    const {handleSignupOpen}=useContext(AuthContext)
    return (
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Typography variant="h3" color="black" className="text-center">
            Login
          </Typography>
          <XIcon 
            className="h-6 w-6 text-gray-500 cursor-pointer" 
            onClick={onClose} // Adding the onClose prop to handle the close action
          />
        </div>
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
          Login
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Button variant="text" onClick={handleSignupOpen} className="-mt-2">
               Signup
          </Button>
          </Typography>
        </CardFooter>
      </Card>
     
    );
  }

  export default LoginCard;