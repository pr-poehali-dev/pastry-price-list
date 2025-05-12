
import React from 'react';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import { Button } from "@/components/ui/button";

const Index = () => {
  const categories = [
    {
      title: 'Классические торты',
      path: '/catalog/classic',
      imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Традиционные торты с нежными кремами и классическими вкусами, которые любят все.'
    },
    {
      title: 'ПП торты',
      path: '/catalog/diet',
      imageUrl: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Полезные десерты с пониженным содержанием сахара и калорий для правильного питания.'
    },
    {
      title: 'Веган торты',
      path: '/catalog/vegan',
      imageUrl: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Изысканные торты без продуктов животного происхождения, но с потрясающим вкусом.'
    },
    {
      title: 'Бенто торты',
      path: '/catalog/bento',
      imageUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Миниатюрные тортики для особых случаев, размером с ладонь и с любым дизайном.'
    },
    {
      title: 'Капкейки и эскимо',
      path: '/catalog/small',
      imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Маленькие порционные десерты и сладости для праздников и повседневных радостей.'
    },
    {
      title: 'Наборы и подарки',
      path: '/catalog/sets',
      imageUrl: 'https://images.unsplash.com/photo-1541005420386-01f8d3d58676?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      description: 'Готовые наборы из различных сладостей — идеальный подарок для любого случая.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl mb-16">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-[500px] object-cover"
            alt="Кондитерские изделия"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-10 md:p-16">
            <h1 className="text-white font-montserrat text-4xl md:text-5xl font-bold max-w-2xl mb-4 animate-fade-in">
              Изысканные десерты ручной работы
            </h1>
            <p className="text-white/90 font-roboto text-lg md:text-xl max-w-xl mb-8 animate-fade-in">
              Каждый десерт создается с любовью, из натуральных ингредиентов и по уникальным рецептам
            </p>
            <Button className="bg-white text-[#6B4025] hover:bg-[#E8D5C4] hover:text-[#6B4025] text-lg px-8 py-6 rounded-full animate-fade-in">
              Выбрать десерт
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold text-[#6B4025] mb-8 text-center">
            Наши категории
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E8D5C4] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B4025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2z"></path>
                  <path d="M18.3 14.9l-1.4-1.4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4s-1 .4-1.4 0z"></path>
                  <path d="M5.7 14.9l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L4.3 13.5c-.4.4-.4 1 0 1.4s1 .4 1.4 0z"></path>
                  <circle cx="12" cy="16" r="6"></circle>
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-medium text-[#6B4025] mb-2">Натуральные ингредиенты</h3>
              <p className="text-[#A67F5D] font-roboto">Используем только свежие и качественные продукты для наших десертов</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E8D5C4] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B4025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-medium text-[#6B4025] mb-2">Ручная работа</h3>
              <p className="text-[#A67F5D] font-roboto">Каждый десерт создается вручную с вниманием к деталям</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E8D5C4] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B4025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-medium text-[#6B4025] mb-2">Уникальные рецепты</h3>
              <p className="text-[#A67F5D] font-roboto">Авторские рецепты и сочетания вкусов, которые вы не найдете больше нигде</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#6B4025] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat text-xl mb-4 md:mb-0">Sweet Delights</p>
            <p className="font-roboto text-sm text-white/80">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
