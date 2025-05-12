
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  weight?: string;
  category?: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  description,
  weight,
  category,
  onClick
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col bg-white border-[#E8D5C4]">
      <div className="relative pt-[100%] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-[#F9F5F0] text-[#6B4025] text-xs py-1 px-2 rounded-full font-roboto">
            {category}
          </span>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium font-montserrat text-[#6B4025]">{name}</CardTitle>
        <CardDescription className="text-[#A67F5D] font-roboto">
          {weight && <span className="block">{weight}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-[#6B4025] line-clamp-2 font-roboto">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <p className="font-montserrat font-medium text-[#6B4025]">{price} ₽</p>
        <Button onClick={onClick} className="bg-[#6B4025] text-white hover:bg-[#A67F5D]">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
