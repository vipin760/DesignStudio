import React from "react";
import "./About.css";
const About = () => {
    return (
        <div className="w-full ">
            <div className="flex about_page_1 justify-center ">
                <h1
                    className="text-2xl font-bold text-white"
                    data-aos="fade-up-right"
                >
                    ABOUT US
                </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-8 ">
                <div className="flex md:justify-end justify-center md:w-1/2 ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMOnzJm3bD4x7-Wq4ZfahyfuzSuQGSSTQYLqrlokNJQmr0RRdRNwkj6NyeAy6yMaiscc&usqp=CAU"
                        data-aos="fade-up-right"
                        className=" size-3/4"
                    />
                </div>
                <div className="flex md:w-1/2  justify-center">
                    <div className="w-3/4">
                        <h1 className="font-great-vibes  text-customBrown text-4xl text-center">
                            AThma DEsigns
                        </h1>
                        <h1 className="font-cursive text-xl text-amber-800 m-5  text-center ">
                            FIRST LUXUARY BRAND IN INDIA
                        </h1>
                        <p className="text-justify leading-6 ">
                            Centrally located in the CBD (Central Business
                            District) of Bangalore on Vittal Mallya Road, UB
                            City is just 1.5 kms away from the MG Road – Brigade
                            Road junction. UB City set heads rolling when it was
                            first announced & till date continues to dazzle.
                            With a total built up area of 16 lakh sq ft, UB City
                            is completed by the UB Tower, Kingfisher Plaza,
                            Concorde, Canberra & Comet Blocks! Each of these
                            blocks stand out for their distinctive look, while
                            yet combining to produce the feeling of a city.
                        </p>
                        <div className="pt-4 ">
                            <button className="text-black bg-white m-5 text-xs p-2 rounded-sm ">
                                VIEW LOCATION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" about_page_2 flex justify-center lg:m-10">
                <div className=" p-8  ">
                    <h1 className="font-bold text-3xl text-center pt-4 pb-4">
                        TIMINGS{" "}
                    </h1>
                    <p className=" leading-8 text-wrap text-lg lg:w-[800px]">
                        UB City, a destination to fashionista’s from all over
                        the world, houses over 40 Luxury Brands under one roof
                        at, The Collection. With so many brands on display, the
                        next question on every shopper’s mind is, “the time
                        factor”. This section details the timings of the Mall,
                        allowing you to plan your shopping at UB City.
                    </p>
                    <div className="flex flex-row justify-center p-6">
                        <i className="fa-regular fa-clock text-xl"></i>
                        <p className="p-1">9AM OPEN - 5PM CLOSE</p>
                    </div>
                </div>
            </div>
            <div className="md:flex w-full md:items-center justify-center   gap-4">
                <div className="flex items-center justify-center md:w-1/2 md:justify-end ">
                    <p className="text-justify leading-6 text-lg  w-3/4">
                        Another feather in UB City’s hat is, UB Tower – the
                        tallest structure in Karnataka as on date, measuring up
                        to a height of 123 m, the tower houses the UB Group
                        offices. Standing at 115 m, Concorde Block is the second
                        tallest structure within the UB City complex, followed
                        by the Canberra Block which stands at 105 m. Some of the
                        biggest corporate names – 3M, Apple, Citibank, Ernst &
                        Young, Kawasaki & Yahoo! sit out of these blocks.
                    </p>
                </div>
                <div className="flex md:w-1/2 justify-center h-full  md:items-center">
                    <img
                        src="https://media.istockphoto.com/id/1867035079/photo/analytics-and-data-management-systems-business-analytics-and-data-management-systems-to-make.webp?b=1&s=170667a&w=0&k=20&c=Ofxk5oXumr7Tw2SC0XaqAn848J8fLrkPuF40Q49OaUQ="
                        className="size-3/4"
                        // data-aos="fade-up-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
