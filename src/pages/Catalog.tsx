
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Заглушка данных для примера
const getProductData = (category: string) => {
  const catalogData = {
    'classic': {
      title: 'Классические торты',
      description: 'Традиционные торты с нежными кремами и классическими вкусами',
      products: [
        {
          id: 'classic-1',
          name: 'Наполеон',
          price: 2200,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=2000',
          description: 'Классический слоеный торт с заварным кремом',
          category: 'от 1.5 кг'
        },
        {
          id: 'classic-2',
          name: 'Медовик',
          price: 2400,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2000',
          description: 'Нежные медовые коржи с кремом из сметаны',
          category: 'от 1.5 кг'
        },
        {
          id: 'classic-3',
          name: 'Птичье молоко',
          price: 2600,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1549572189-dddb1dbc046e?q=80&w=2000',
          description: 'Бисквит с нежным суфле и шоколадной глазурью',
          category: 'от 1.5 кг'
        },
        {
          id: 'classic-4',
          name: 'Бенто Шоколад',
          price: 1200,
          weight: '450 г',
          imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2000',
          description: 'Мини-торт с шоколадным бисквитом и кремом',
          category: 'бенто'
        },
        {
          id: 'classic-5',
          name: 'Бенто Ягодный',
          price: 1400,
          weight: '450 г',
          imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2000',
          description: 'Миниатюрный торт со свежими ягодами',
          category: 'бенто'
        },
        {
          id: 'classic-6',
          name: 'Бенто Кофейный',
          price: 1800,
          weight: '1 кг',
          imageUrl: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=2000',
          description: 'Кофейный бисквит с муссом из эспрессо',
          category: 'бенто'
        }
      ]
    },
    'diet': {
      title: 'ПП торты',
      description: 'Полезные десерты с пониженным содержанием сахара',
      products: [
        {
          id: 'diet-1',
          name: 'Фитнес',
          price: 2400,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1572383672419-ab35444a209d?q=80&w=2000',
          description: 'Низкокалорийный торт без сахара на основе творога',
          category: 'от 1.5 кг'
        },
        {
          id: 'diet-2',
          name: 'Морковный ПП',
          price: 2500,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1621303837338-5db179b41709?q=80&w=2000',
          description: 'Морковный бисквит без муки с кремом из рикотты',
          category: 'от 1.5 кг'
        },
        {
          id: 'diet-3',
          name: 'Бенто Ягодный ПП',
          price: 1300,
          weight: '450 г',
          imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2000',
          description: 'Мини-торт с натуральными подсластителями',
          category: 'бенто'
        }
      ]
    },
    'vegan': {
      title: 'Веган торты',
      description: 'Десерты без продуктов животного происхождения',
      products: [
        {
          id: 'vegan-1',
          name: 'Ореховый веган',
          price: 2700,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2000',
          description: 'Торт из орехов и фиников без добавления сахара',
          category: 'от 1.5 кг'
        },
        {
          id: 'vegan-2',
          name: 'Шоколадный веган',
          price: 2800,
          weight: '1.5 кг',
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000',
          description: 'Насыщенный шоколадный торт без яиц и молока',
          category: 'от 1.5 кг'
        },
        {
          id: 'vegan-3',
          name: 'Бенто Кокос',
          price: 1400,
          weight: '450 г',
          imageUrl: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=2000',
          description: 'Кокосовый мини-торт с ганашем из темного шоколада',
          category: 'бенто'
        }
      ]
    },
    'small': {
      title: 'Капкейки и эскимо',
      description: 'Порционные десерты для праздников и повседневных радостей',
      products: [
        {
          id: 'small-1',
          name: 'Капкейк Ванильный',
          price: 200,
          weight: '80 г',
          imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=2000',
          description: 'Ванильный кекс с кремом из маскарпоне',
          category: 'капкейки'
        },
        {
          id: 'small-2',
          name: 'Эскимо Клубничное',
          price: 250,
          weight: '100 г',
          imageUrl: 'https://images.unsplash.com/photo-1544639870-9d2bee7f4b4d?q=80&w=2000',
          description: 'Клубничное мороженое в белом шоколаде',
          category: 'эскимо'
        },
        {
          id: 'small-3',
          name: 'Кейк-попс',
          price: 180,
          weight: '40 г',
          imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=2000',
          description: 'Шоколадные шарики на палочке',
          category: 'кейк-попс'
        }
      ]
    },
  };
  
  return catalogData[category as keyof typeof catalogData] || catalogData['classic'];
};

const Catalog = () => {
  const { category } = useParams();
  const catalogData = getProductData(category || 'classic');
  
  // Группировка продуктов по категории
  const fullSizeCakes = catalogData.products.filter(product => product.category === 'от 1.5 кг');
  const bentoCakes = catalogData.products.filter(product => product.category === 'бенто');
  const otherProducts = catalogData.products.filter(product => !['от 1.5 кг', 'бенто'].includes(product.category || ''));

  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[#A67F5D] mb-4">
            <Link to="/" className="hover:text-[#6B4025]">Главная</Link>
            <span>/</span>
            <span>{catalogData.title}</span>
          </div>
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-[#6B4025] mb-2">{catalogData.title}</h1>
          <p className="text-[#A67F5D] font-roboto">{catalogData.description}</p>
        </div>

        <Tabs defaultValue={fullSizeCakes.length > 0 ? "full" : bentoCakes.length > 0 ? "bento" : "other"} className="space-y-8">
          <TabsList className="bg-white border border-[#E8D5C4] p-1">
            {fullSizeCakes.length > 0 && (
              <TabsTrigger value="full" className="font-roboto text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
                Торты от 1.5 кг
              </TabsTrigger>
            )}
            {bentoCakes.length > 0 && (
              <TabsTrigger value="bento" className="font-roboto text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
                Бенто торты
              </TabsTrigger>
            )}
            {otherProducts.length > 0 && (
              <TabsTrigger value="other" className="font-roboto text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
                Другие сладости
              </TabsTrigger>
            )}
          </TabsList>
          
          {fullSizeCakes.length > 0 && (
            <TabsContent value="full" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullSizeCakes.map((product, index) => (
                  <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link to={`/product/${product.id}`}>
                      <ProductCard {...product} />
                    </Link>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
          
          {bentoCakes.length > 0 && (
            <TabsContent value="bento" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bentoCakes.map((product, index) => (
                  <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link to={`/product/${product.id}`}>
                      <ProductCard {...product} />
                    </Link>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
          
          {otherProducts.length > 0 && (
            <TabsContent value="other" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProducts.map((product, index) => (
                  <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link to={`/product/${product.id}`}>
                      <ProductCard {...product} />
                    </Link>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>
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

export default Catalog;
