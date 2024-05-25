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

const PasswordCard = () => {
  return (
    <div>
      <Card className="mt-40 w-[600px] mx-auto align-items-center">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 text-center uppercase"
          >
            Password Generator
          </Typography>
          <Password />

          {/* Changes */}
          <Card className="mt-2 w-[550px] mx-auto align-items-center shadow-none">
            <CardBody>
             
              <CharacterLength />
              <Checkboxes/>
            </CardBody>
          </Card>



        </CardBody>
        <CardFooter className="pt-0 text-center">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordCard;
