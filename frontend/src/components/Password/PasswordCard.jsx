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
          <Password />

          <Card className="mt-2 w-full max-w-[550px] mx-auto shadow-none">
            <CardBody>
              <CharacterLength />
              <Checkboxes />
            </CardBody>
          </Card>
        </CardBody>
        <CardFooter className="pt-0 text-center">
          <Button>Save Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordCard;
