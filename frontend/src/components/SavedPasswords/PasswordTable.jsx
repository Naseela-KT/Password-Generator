
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,

} from "@material-tailwind/react";
import { useState,useEffect } from "react";
import {pwdApiRequest} from '../../config/axios.js'
import { useSelector } from "react-redux";
const TABLE_HEAD = ["Password", "Action"];
import toast from 'react-hot-toast';

 
const PasswordTable=()=> {
  let { userInfo } = useSelector((state) => state.userAuth);
  const [passwords,setPasswords]  = useState([])
  const fetchData = async () => {
    try {
        const response = await pwdApiRequest({
            method: 'get',
            url: `/getPassword?userId=${userInfo._id}`,
        });
        console.log(response.passwords)
        if (response.passwords) {
            setPasswords(response.passwords);
        }
    } catch (error) {
        console.error("Error fetching passwords:", error);
    }
};
const deletePassword = async(id) =>{
  try {
      const response = await pwdApiRequest({
          method: 'delete',
          url: '/delete',
          data:{
              id:id
          }
      });
      if (response.data) {
          toast.success("Password Deleted")
          fetchData()
          
      }

  } catch (error) {
      console.error("Error deleting passwords:", error);
  }
}
useEffect( ()=>{
  fetchData();
},[])
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-1 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h4" color="blue-gray">
              Passwords
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {passwords.map(
              ({ password,_id}, index) => {
                const isLast = index === passwords.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {password}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Button
                        size="sm"
                      
                          color="blue-gray"
                          className="font-normal"
                          onClick={()=>deletePassword(_id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PasswordTable;