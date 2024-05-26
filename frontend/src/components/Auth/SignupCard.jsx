/* eslint-disable react/prop-types */
import {
    Card,
    // CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    // Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { XIcon } from '@heroicons/react/outline';
  import { AuthContext } from "../../context/authContext"; 
  import { useContext } from "react";
   
  const SignupCard=({onClose})=> {
    const {handleSignupOpen}=useContext(AuthContext)
    return (
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Typography variant="h3" color="black" className="text-center">
            Signup
          </Typography>
          <XIcon 
            className="h-6 w-6 text-gray-500 cursor-pointer" 
            onClick={onClose} // Adding the onClose prop to handle the close action
          />
        </div>
          <Input label="Name" size="sm" />
          <Input label="Email" size="sm" />
          <Input label="Mobile" size="sm" />
          <Input label="Password" size="sm" />
          <Input label="Confirm Password" size="sm" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Button variant="text" onClick={handleSignupOpen} className="-mt-2">
               Login
          </Button>
          </Typography>
        </CardFooter>
      </Card>
    );
  }

  export default SignupCard;