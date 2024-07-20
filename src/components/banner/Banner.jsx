import { Carousel, Typography, Button } from "@material-tailwind/react";

import React from "react";

const Banner = () => {
  return (
    <div className="my-0.5">
      <Carousel className="">
        <div className="relative h-screen w-full">
          <img
            src="https://img.freepik.com/free-vector/fresh-exotic-perfume-bottle-dark-background-with-big-green-leaves-realistic-advertisement_1284-54820.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Parfum Strength
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Parfum has the highest concentration of perfume oils (between 20
                – 40%) and because of this has a longer staying power than the
                weaker variations.
              </Typography>
              <div className="flex justify-center gap-2">
                {/* <Button size="lg" color="white">
                Explore
              </Button> */}
                {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="https://img.freepik.com/free-psd/glossy-cosmetic-bottle-icon-golden-podium-stage-background_47987-11990.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Eau de Cologne Strength
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Eau de Cologne, also known as EDC has a lower level of
                concentration than that of Eau de Toilette at around 2 – 5%,
                because of this it’s lasting power drops to somewhere around two
                hours.
              </Typography>
              <div className="flex gap-2">
                {/* <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="https://img.freepik.com/premium-psd/amber-glass-cosmetic-bottle-mockup_358694-2874.jpg?size=626&ext=jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Eau de Parfum Strength
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Eau de Parfum has the next highest concentration of perfume oils
                normally around 15 -20%. Lasting slightly less on the skin at
                around four to five hours.
              </Typography>
              <div className="flex gap-2">
                {/* <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
