
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  path: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  imageUrl, 
  path, 
  description 
}) => {
  return (
    <Link 
      to={path}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full"
    >
      <div className="overflow-hidden h-[260px]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-montserrat text-xl font-medium text-[#6B4025] mb-2">{title}</h3>
        <p className="text-[#A67F5D] font-roboto text-sm mb-4 flex-grow">{description}</p>
        <span className="text-[#6B4025] font-roboto text-sm font-medium inline-flex items-center">
          Подробнее
          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
