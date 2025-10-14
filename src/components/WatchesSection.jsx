import { useState } from 'react';
import min1 from '../assets/PageProduct/1-min-300x300.jpg';
import min2 from '../assets/PageProduct/2-min-1-300x300.jpg';
import min3 from '../assets/PageProduct/3-min-1-300x300.jpg';
import min4 from '../assets/PageProduct/4-min.jpg';
import min5 from '../assets/PageProduct/5-min-300x300.jpg';
import min6 from '../assets/PageProduct/6-min-300x300.jpg';
import min7 from '../assets/PageProduct/7-min.jpg';

export default function WatchesSection() {
  const categories = [
    { id: 'men', name: 'Men', count: 4 },
    { id: 'women', name: 'Women', count: 5 },
    { id: 'luxury', name: 'Luxury', count: 1 },
    { id: 'smart', name: 'Smart', count: 2 },
    { id: 'classic', name: 'Classic', count: 2 },
    { id: 'sport', name: 'Sport', count: 6 },
  ];

  const products = {
    men: [
      {
        name: 'Leather Watch',
        price: '$120',
        img: min1,
      },
      {
        name: 'Blue Dial Watch',
        price: '$99',
        img: min3,
      },
      {
        name: 'Silver Chrono',
        price: '$135',
        img: min5,
      },
      {
        name: 'Elegant Black',
        price: '$110',
        img: min6,
      },
    ],
    women: [
      { name: 'Rose Gold', price: '$140', img: min4 },
      { name: 'Pearl Face', price: '$95', img: min7 },
      {
        name: 'Silver Strap',
        price: '$105',
        img: min2,
      },
      {
        name: 'Gold Edition',
        price: '$250',
        img: min6,
      },
      {
        name: 'Diamond Set',
        price: '$320',
        img: min3,
      },
    ],
    luxury: [
      {
        name: 'Gold Edition',
        price: '$250',
        img: min3,
      },
    ],
    smart: [
      { name: 'Smart Fit', price: '$180', img: min7 },
      {
        name: 'Active Pro',
        price: '$210',
        img: min1,
      },
    ],
    classic: [
      {
        name: 'Vintage Brown',
        price: '$130',
        img: min7,
      },
      {
        name: 'Retro Silver',
        price: '$115',
        img: min6,
      },
    ],
    sport: [
      {
        name: 'Sporty Blue',
        price: '$90',
        img: min2,
      },
      {
        name: 'Adventure Black',
        price: '$100',
        img: min1,
      },
      {
        name: 'Vintage Brown',
        price: '$130',
        img: min7,
      },
      {
        name: 'Retro Silver',
        price: '$115',
        img: min6,
      },
      {
        name: 'Silver Strap',
        price: '$105',
        img: min2,
      },
      {
        name: 'Gold Edition',
        price: '$250',
        img: min6,
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('men');

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full border border-gray-300 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 text-center">
          {categories.map((el, index) => (
            <div
              key={el.id}
              onClick={() => setActiveCategory(el.id)}
              className={`relative flex flex-col justify-center items-center 
          h-[170px] w-full transition-all duration-200 cursor-pointer 
          ${activeCategory === el.id ? 'bg-blue-600 text-white' : 'bg-white text-black hover:bg-blue-50'}`}
            >
              <span className="font-semibold text-sm md:text-base lg:text-base">{el.name}</span>

              <p className="text-xs md:text-sm lg:text-sm">
                <span className="opacity-70">{el.count}</span> items Available
              </p>

              {activeCategory === el.id && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-blue-600 rotate-45"></div>}

              {index < categories.length - 1 && (
                <div
                  className={`absolute top-1/4 right-0 h-1/2 w-[1px]
            ${activeCategory === el.id ? 'bg-blue-600 text-white' : 'bg-gray-300 hover:bg-blue-50'}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {products[activeCategory]?.map((el, index) => (
          <div key={index} className="w-[185px] h-[183px] flex flex-col els-center text-center">
            <img src={el.img} alt={el.name} className="w-full h-[120px] object-cover rounded-md" />
            <h3 className="font-semibold mt-2">{el.name}</h3>
            <p className="text-gray-600">{el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
