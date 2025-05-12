
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Общая база всех продуктов (заглушка данных)
const allProducts = [
  // Классические
  {
    id: 'classic-1',
    name: 'Наполеон',
    price: 2200,
    weight: '1.5 кг',
    imageUrl: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=2000',
    description: 'Классический слоеный торт с заварным кремом. Нежные, хрустящие коржи, пропитанные кремом, создают неповторимый вкус, знакомый с детства.',
    category: 'от 1.5 кг',
    mainCategory: 'classic',
    ingredients: 'Мука пшеничная, сливочное масло, молоко, яйца, сахар, соль, ванилин.',
    cutImage: 'https://images.unsplash.com/photo-1605291445244-9ff5e28a5376?q=80&w=2000'
  },
  {
    id: 'classic-2',
    name: 'Медовик',
    price: 2400,
    weight: '1.5 кг',
    imageUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2000',
    description: 'Нежные медовые коржи с кремом из сметаны. Каждый слой пропитан и создает гармоничный вкус меда и сливочной нежности.',
    category: 'от 1.5 кг',
    mainCategory: 'classic',
    ingredients: 'Мед натуральный, мука пшеничная, сахар, яйца, сметана, сливочное масло, сода, специи.',
    cutImage: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?q=80&w=2000'
  },
  // Диетические
  {
    id: 'diet-1',
    name: 'Фитнес',
    price: 2400,
    weight: '1.5 кг',
    imageUrl: 'https://images.unsplash.com/photo-1572383672419-ab35444a209d?q=80&w=2000',
    description: 'Низкокалорийный торт без сахара на основе творога. Идеален для тех, кто следит за фигурой, но не хочет отказывать себе в сладком.',
    category: 'от 1.5 кг',
    mainCategory: 'diet',
    ingredients: 'Творог обезжиренный, яйца, стевия, овсяные хлопья, йогурт натуральный, свежие ягоды, желатин.',
    cutImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000'
  },
  // И так далее для остальных продуктов
];

const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id) || allProducts[0];
}

const getRelatedProducts = (mainProduct: any) => {
  return allProducts
    .filter(product => product.mainCategory === mainProduct.mainCategory && product.id !== mainProduct.id)
    .slice(0, 3);
}

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const relatedProducts = getRelatedProducts(product);
  
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 text-[#A67F5D] mb-6">
          <Link to="/" className="hover:text-[#6B4025]">Главная</Link>
          <span>/</span>
          <Link to={`/catalog/${product.mainCategory}`} className="hover:text-[#6B4025]">
            {product.mainCategory === 'classic' ? 'Классические торты' : 
             product.mainCategory === 'diet' ? 'ПП торты' : 
             product.mainCategory === 'vegan' ? 'Веган торты' : 'Другие сладости'}
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="animate-fade-in">
            <h1 className="font-montserrat text-3xl font-bold text-[#6B4025] mb-2">{product.name}</h1>
            <p className="text-[#A67F5D] font-roboto mb-4">
              {product.category === 'от 1.5 кг' ? 'Классический торт' : 
               product.category === 'бенто' ? 'Мини-торт (бенто)' : 
               product.category}
            </p>
            
            <div className="mb-6">
              <p className="font-montserrat text-2xl font-semibold text-[#6B4025] mb-1">{product.price} ₽</p>
              <p className="text-[#A67F5D] font-roboto">{product.weight}</p>
            </div>
            
            <p className="text-[#6B4025] font-roboto mb-6">{product.description}</p>
            
            <Separator className="my-6 bg-[#E8D5C4]" />
            
            <div className="mb-6">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Состав:</h3>
              <p className="text-[#A67F5D] font-roboto">{product.ingredients}</p>
            </div>
            
            <Button className="w-full md:w-auto bg-[#6B4025] hover:bg-[#A67F5D] text-white font-medium px-10 py-6">
              Заказать
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="details" className="mb-16">
          <TabsList className="bg-white border border-[#E8D5C4] p-1 w-full justify-start">
            <TabsTrigger value="details" className="font-roboto text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
              Детали продукта
            </TabsTrigger>
            <TabsTrigger value="delivery" className="font-roboto text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
              Доставка и оплата
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="mt-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat text-xl font-medium text-[#6B4025] mb-4">О десерте</h3>
                  <p className="text-[#A67F5D] font-roboto mb-4">{product.description}</p>
                  <p className="text-[#A67F5D] font-roboto">
                    Все наши десерты готовятся вручную из отборных ингредиентов в день заказа. 
                    Мы не используем консерванты, искусственные красители и ароматизаторы.
                  </p>
                </div>
                
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={product.cutImage} 
                    alt={`Разрез торта ${product.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-montserrat text-xl font-medium text-[#6B4025] mb-4">Доставка и оплата</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8D5C4] flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-lg font-medium text-[#6B4025]">Время изготовления</h4>
                    <p className="text-[#A67F5D] font-roboto">Стандартное время изготовления составляет 24 часа. В пиковые сезоны может потребоваться дополнительное время.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8D5C4] flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-lg font-medium text-[#6B4025]">Доставка</h4>
                    <p className="text-[#A67F5D] font-roboto">Доставка осуществляется по городу ежедневно с 10:00 до 21:00. Стоимость доставки зависит от района.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8D5C4] flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M12 9v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-lg font-medium text-[#6B4025]">Оплата</h4>
                    <p className="text-[#A67F5D] font-roboto">Мы принимаем оплату наличными, банковскими картами и онлайн-переводами. Предоплата 50% для подтверждения заказа.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-montserrat text-2xl font-bold text-[#6B4025] mb-6">Похожие десерты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(relProduct => (
                <Link to={`/product/${relProduct.id}`} key={relProduct.id} className="animate-fade-in">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relProduct.imageUrl} 
                        alt={relProduct.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-1">{relProduct.name}</h3>
                      <p className="text-[#A67F5D] font-roboto text-sm">{relProduct.weight}</p>
                      <p className="font-montserrat font-medium text-[#6B4025] mt-2">{relProduct.price} ₽</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <footer className="bg-[#6B4025] text-white py-8 mt-12">
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

export default ProductPage;
