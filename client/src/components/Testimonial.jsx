import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {
     const testimonials = [
        { name: "Emma Rodriguez", location: "Barcelona, Spain", image: assets.testimonial_image_1, rating: 5, testimonial: "there was a great experience" },
        { name: "john smithh", location: "New York, USA", image: assets.testimonial_image_2, rating: 5, testimonial: "It made my trip more easier" },
        { name: "Ava Johnson", location: "sydney, Australia", image: assets.testimonial_image_2, rating: 5, testimonial: "this is the best ride i got" },
    ];
  return (
     <div className=" flex flex-col py-28 px-6 md:px-16 lg:px-24 xl:px-44">
           <Title title="whats our customers say" subTitle="Discover why discrening travels choose StayVentures for their luxury accomodation around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                               <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial