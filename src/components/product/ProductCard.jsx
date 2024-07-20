import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = ({ items }) => {
  return (
    <a href={`/product/details/${items._id}`} className="">
      <Card className="w-96 flex  hover:scale-105 duration-200 cursor-pointer ">
        <CardHeader shadow={false} floated={false} className="h-96 ">
          <img
            src={items.image}
            alt={items.name}
            className="h-full w-full object-cover "
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {items.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${items.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {items.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {/* <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button> */}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProductCard;
