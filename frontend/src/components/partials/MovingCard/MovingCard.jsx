import React, { useEffect, useState } from "react";
import InfiniteMovingCards from "../../ui/InfiniteMovingCards";

const testimonials = [
  {
    name: "times",
    logo: "https://ayatacommerce.com/wp-content/themes/blazing-ayata/images/clients/black%20(4).png",
  },
  {
    name:"burger",
    logo:"https://ayatacommerce.com/wp-content/themes/blazing-ayata/images/clients/black%20(6).png"
},
{
    name:"times",
    logo:"https://ayatacommerce.com/wp-content/themes/blazing-ayata/images/clients/black%20(7).png"
},
{
    name:"times",
    logo:"https://ayatacommerce.com/wp-content/themes/blazing-ayata/images/clients/black%20(8).png"
},
{
    name:"times",
    logo:"https://ayatacommerce.com/wp-content/themes/blazing-ayata/images/clients/black%20(7).png"
}
];

const MovingCard = () => {
  return (
    <div >
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl p-4">WE FOSTER COLLABORATIONS</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default MovingCard;
