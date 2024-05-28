import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Password from "./Password";
import CharacterLength from "./CharacterLength";
import Checkboxes from "./Checkboxes";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useGeneratePassword from "../../hooks/useGeneratePassword";
import { pwdApiRequest } from "../../config/axios";
import toast from "react-hot-toast";

const PasswordCard = () => {
  let { userInfo } = useSelector((state) => state.userAuth);
  const { password, errorMessage, generatePassword } = useGeneratePassword();
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Uppercase", state: true },
    { title: "Lowercase", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  useEffect(() => {
    generatePassword(checkboxData, length);
  }, [checkboxData, length]);

  const handleSavePassword = async() =>{
    if(userInfo){
      const response = await pwdApiRequest({
        method: 'post',
        url: '/add',
        data: {
          password: password,
          userId:userInfo._id
        }
      },{withCredentials:true})
      console.log(response)
      if(response.newPassword){
        toast.success("Password Saved")
      }
    }else{
      toast.error("Please Login To Save Password")
    }
    
  }

  const handleRefresh = () => {
    generatePassword(checkboxData, length)
  }

  return (
    <div className="px-4 py-6">
      <Card className="w-full max-w-[600px] mx-auto">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 text-center uppercase"
          >
            Password Generator
          </Typography>
          {password && <Password password={password} handleRefresh={handleRefresh}/>}

          <Card className="mt-2 w-full max-w-[550px] mx-auto shadow-none">
            <CardBody>
              <CharacterLength length={length} setLength={setLength} />
              <Checkboxes
                checkboxData={checkboxData}
                handleCheckboxChange={handleCheckboxChange}
              />
              {/* Error handling */}
              {errorMessage && (
                <div className="text-red-500 mt-5">{errorMessage}</div>
              )}
            </CardBody>
          </Card>
        </CardBody>
        <CardFooter className="pt-0 text-center">
          <Button onClick={handleSavePassword}>Save Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordCard;
