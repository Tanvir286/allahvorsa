"use client";

import { useParams } from 'next/navigation';
import shopData from '../../../data/restaurants';
import { MdLocationPin } from "react-icons/md";
import CategoryItem from './../../../components/layout/CategoryItem';



const RestaurantDetail = () => {
  const { id } = useParams();  // Get the id from URL parameters

  // Find the restaurant that matches the id
  const restaurant = shopData.restaurant.find(item => item.id.toString() === id);

  if (!restaurant) {
    return (
      <div className="bg-white-all">
        <div className="max-w-container mx-auto py-20">
          <h1>Restaurant Not Found</h1>
        </div>
      </div>
    );
  }

  // Destructuring restaurant data for easier use
  const { title, location, description, rating } = restaurant;

  return (
    <div className="bg-white-all">
      <div className="max-w-container mx-auto py-20">
        {/* Restaurant detail section */}
        <div className='px-5 lg:px-0'>
          {/* Restaurant image */}
          <img 
            src="/images/product/eight.png" 
            alt={title} 
            className="w-full lg:h-[500px]" 
          />
          
          {/* Title part */}
          {/* Title part */}
          <p className="font-roboto pb-2 font-medium text-32 sm:text-40 mt-2 border-b-2 border-third-black">
            <span className='text-green'>{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
          </p>

          {/* Location and Description */}
          <div className="sm:flex justify-between mt-5"> 
            {/* Left part - Location */}
            <div className="sm:w-[50%]" >
                <div className='flex gap-x-2 '>
                    <MdLocationPin className='text-green text-2xl mt-1'/>
                    <p className="font-kumbhSans font-normal text-2xl max-w-382 text-five-black">{location}</p>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mt-3">
                  <div className="flex items-center ml-2 text-3xl">
                    <span className="text-orange">{'★'.repeat(Math.floor(rating))}</span>
                    <span className="text-gray-500">{'★'.repeat(5 - Math.floor(rating))}</span>
                    <p className="font-kumbhSans text-xl text-black ml-2">{rating}</p>
                  </div>
                </div>
            </div>

            {/* Right part - Description */}
            <div className="sm:w-[50%] mt-5 sm:mt-0">
              <p className="font-kumbhSans text-2xl text-five-black">{description}</p>
            </div>
          </div>
        </div>
         {/* Restaurant detail section */}
         {/* Category item */}
         <CategoryItem/>

      </div>
    </div>
  );
};

export default RestaurantDetail;
