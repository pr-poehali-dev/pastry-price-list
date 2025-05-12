
import React, { useState } from 'react';
import './App.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const App = () => {
  const [activeCategory, setActiveCategory] = useState('classic');

  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      <header className="py-6 px-6 md:px-10 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <h1 className="text-[#6B4025] font-montserrat text-3xl md:text-4xl font-semibold tracking-tight text-center">
            Sweet Delights
            <p className="text-[#A67F5D] text-sm md:text-base font-normal mt-2">Изысканные десерты ручной работы</p>
          </h1>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="mb-12">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <Tabs defaultValue="classic" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="classic" className="font-montserrat text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
                  Классические
                </TabsTrigger>
                <TabsTrigger value="diet" className="font-montserrat text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
                  ПП торты
                </TabsTrigger>
                <TabsTrigger value="vegan" className="font-montserrat text-[#6B4025] data-[state=active]:bg-[#E8D5C4]">
                  Веган торты
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="classic">
                <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4">Классические торты</h2>
                <p className="text-[#A67F5D] font-roboto mb-6">Традиционные торты с нежными кремами и классическими вкусами, которые любят все.</p>
                
                <Accordion type="single" collapsible defaultValue="regular" className="mb-8">
                  <AccordionItem value="regular">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Торты от 1.5 кг
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <CakeItem 
                          name="Наполеон"
                          price={2200}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2000"
                          description="Классический слоеный торт с заварным кремом. Нежные, хрустящие коржи, пропитанные кремом, создают неповторимый вкус, знакомый с детства."
                          ingredients="Мука пшеничная, сливочное масло, молоко, яйца, сахар, соль, ванилин."
                        />
                        
                        <Separator className="my-6 bg-[#E8D5C4]" />
                        
                        <CakeItem 
                          name="Медовик"
                          price={2400}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2000"
                          description="Нежные медовые коржи с кремом из сметаны. Каждый слой пропитан и создает гармоничный вкус меда и сливочной нежности."
                          ingredients="Мед натуральный, мука пшеничная, сахар, яйца, сметана, сливочное масло, сода, специи."
                        />
                        
                        <Separator className="my-6 bg-[#E8D5C4]" />
                        
                        <CakeItem 
                          name="Птичье молоко"
                          price={2600}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1549572189-dddb1dbc046e?q=80&w=2000"
                          description="Бисквит с нежным суфле и шоколадной глазурью. Воздушное сочетание текстур, тающее во рту."
                          ingredients="Сливки, сахар, желатин, яйца, сливочное масло, шоколад, мука пшеничная, ваниль."
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bento">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Бенто торты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-4">450 грамм</h3>
                        
                        <CakeItem 
                          name="Бенто Шоколад"
                          price={1200}
                          weight="450 г"
                          imageUrl="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000"
                          description="Мини-торт с шоколадным бисквитом и кремом. Идеальный вариант для небольшого праздника."
                          ingredients="Шоколад темный, яйца, мука пшеничная, сахар, масло сливочное, сливки, какао."
                        />
                        
                        <Separator className="my-6 bg-[#E8D5C4]" />
                        
                        <CakeItem 
                          name="Бенто Ягодный"
                          price={1400}
                          weight="450 г"
                          imageUrl="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2000"
                          description="Миниатюрный торт со свежими ягодами. Нежный бисквит и кремчиз с добавлением сезонных ягод."
                          ingredients="Сыр сливочный, сливки, сахар, яйца, мука пшеничная, ягоды свежие, ваниль."
                        />
                        
                        <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mt-8 mb-4">1 килограмм</h3>
                        
                        <CakeItem 
                          name="Бенто Кофейный"
                          price={1800}
                          weight="1 кг"
                          imageUrl="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=2000"
                          description="Кофейный бисквит с муссом из эспрессо. Насыщенный вкус для истинных ценителей кофе."
                          ingredients="Мука пшеничная, масло сливочное, кофе, сахар, яйца, сливки, шоколад, ликер кофейный."
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="diet">
                <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4">ПП торты</h2>
                <p className="text-[#A67F5D] font-roboto mb-6">Полезные десерты с пониженным содержанием сахара и калорий для правильного питания.</p>
                
                <Accordion type="single" collapsible defaultValue="regular" className="mb-8">
                  <AccordionItem value="regular">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Торты от 1.5 кг
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <CakeItem 
                          name="Фитнес"
                          price={2400}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1572383672419-ab35444a209d?q=80&w=2000"
                          description="Низкокалорийный торт без сахара на основе творога. Идеален для тех, кто следит за фигурой, но не хочет отказывать себе в сладком."
                          ingredients="Творог обезжиренный, яйца, стевия, овсяные хлопья, йогурт натуральный, свежие ягоды, желатин."
                        />
                        
                        <Separator className="my-6 bg-[#E8D5C4]" />
                        
                        <CakeItem 
                          name="Морковный ПП"
                          price={2500}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1621303837338-5db179b41709?q=80&w=2000"
                          description="Морковный бисквит без муки с кремом из рикотты. Нежный и полезный торт с пониженным содержанием углеводов."
                          ingredients="Морковь, яйца, миндальная мука, кокосовая мука, эритрит, рикотта, ароматные специи, грецкие орехи."
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bento">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Бенто торты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-4">450 грамм</h3>
                        
                        <CakeItem 
                          name="Бенто Ягодный ПП"
                          price={1300}
                          weight="450 г"
                          imageUrl="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2000"
                          description="Мини-торт с натуральными подсластителями. Идеальная порция для тех, кто следит за своим питанием."
                          ingredients="Творог, стевия, яйца, кокосовая мука, свежие ягоды, греческий йогурт, лимонная цедра."
                        />
                        
                        <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mt-8 mb-4">1 килограмм</h3>
                        
                        <CakeItem 
                          name="Тирамису ПП"
                          price={1900}
                          weight="1 кг"
                          imageUrl="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=2000"
                          description="Легкая версия классического тирамису без сахара. Удовольствие без чувства вины."
                          ingredients="Миндальное печенье, стевия, творожный сыр, кофе, какао, яйца, желатин."
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="vegan">
                <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4">Веган торты</h2>
                <p className="text-[#A67F5D] font-roboto mb-6">Изысканные торты без продуктов животного происхождения, но с потрясающим вкусом.</p>
                
                <Accordion type="single" collapsible defaultValue="regular" className="mb-8">
                  <AccordionItem value="regular">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Торты от 1.5 кг
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <CakeItem 
                          name="Ореховый веган"
                          price={2700}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2000"
                          description="Торт из орехов и фиников без добавления сахара. Полностью растительный состав и натуральная сладость."
                          ingredients="Финики, грецкие орехи, миндаль, кокосовое молоко, кокосовое масло, агава, ваниль, соль."
                        />
                        
                        <Separator className="my-6 bg-[#E8D5C4]" />
                        
                        <CakeItem 
                          name="Шоколадный веган"
                          price={2800}
                          weight="1.5 кг"
                          imageUrl="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000"
                          description="Насыщенный шоколадный торт без яиц и молока. Глубокий вкус шоколада и нежная текстура."
                          ingredients="Темный шоколад, мука пшеничная, какао, растительное молоко, кокосовое масло, сахар тростниковый, разрыхлитель."
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bento">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Бенто торты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-4">450 грамм</h3>
                        
                        <CakeItem 
                          name="Бенто Кокос"
                          price={1400}
                          weight="450 г"
                          imageUrl="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=2000"
                          description="Кокосовый мини-торт с ганашем из темного шоколада. Экзотический вкус для небольшого праздника."
                          ingredients="Кокосовая мука, кокосовое молоко, растительное масло, темный шоколад, агава, ваниль, соль."
                        />
                        
                        <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mt-8 mb-4">1 килограмм</h3>
                        
                        <CakeItem 
                          name="Малиновый веган"
                          price={2000}
                          weight="1 кг"
                          imageUrl="https://images.unsplash.com/photo-1611293388250-580b08c4a145?q=80&w=2000"
                          description="Яркий торт с малиновым муссом на кокосовой основе. Свежий и легкий вкус."
                          ingredients="Малина, кешью, кокосовое молоко, агава, лимонный сок, кокосовое масло, ваниль, агар-агар."
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-6 text-center">Другие сладости</h2>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="capkakes">
                <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                  Капкейки
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <SimpleItem 
                      name="Капкейк Ванильный"
                      price={200}
                      weight="80 г"
                      imageUrl="https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=2000"
                      description="Ванильный кекс с кремом из маскарпоне."
                      ingredients="Мука пшеничная, масло сливочное, сахар, яйца, ваниль, маскарпоне, сливки."
                    />
                    
                    <Separator className="my-6 bg-[#E8D5C4]" />
                    
                    <SimpleItem 
                      name="Капкейк Шоколадный"
                      price={220}
                      weight="80 г"
                      imageUrl="https://images.unsplash.com/photo-1563778084459-859099e48677?q=80&w=2000"
                      description="Шоколадный кекс с кремом и шоколадной крошкой."
                      ingredients="Мука пшеничная, масло сливочное, какао, сахар, яйца, сливки, шоколад темный."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="eskimo">
                <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                  Эскимо
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <SimpleItem 
                      name="Эскимо Клубничное"
                      price={250}
                      weight="100 г"
                      imageUrl="https://images.unsplash.com/photo-1544639870-9d2bee7f4b4d?q=80&w=2000"
                      description="Клубничное мороженое в белом шоколаде."
                      ingredients="Клубника, сливки, молоко, сахар, белый шоколад, ваниль."
                    />
                    
                    <Separator className="my-6 bg-[#E8D5C4]" />
                    
                    <SimpleItem 
                      name="Эскимо Кокосовое"
                      price={270}
                      weight="100 г"
                      imageUrl="https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=2000"
                      description="Кокосовое мороженое в темном шоколаде."
                      ingredients="Кокосовое молоко, сливки, сахар, темный шоколад, кокосовая стружка."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cakepops">
                <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                  Кейк-попсы
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <SimpleItem 
                      name="Кейк-попс Классический"
                      price={180}
                      weight="40 г"
                      imageUrl="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=2000"
                      description="Шоколадные шарики на палочке с разноцветной посыпкой."
                      ingredients="Шоколадный бисквит, сливочный сыр, темный шоколад, посыпка кондитерская."
                    />
                    
                    <Separator className="my-6 bg-[#E8D5C4]" />
                    
                    <SimpleItem 
                      name="Кейк-попс Ванильный"
                      price={180}
                      weight="40 г"
                      imageUrl="https://images.unsplash.com/photo-1594054129719-e0572068ffec?q=80&w=2000"
                      description="Ванильные шарики на палочке в шоколадной глазури."
                      ingredients="Ванильный бисквит, сливочный сыр, белый шоколад, посыпка кондитерская."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="lollipops">
                <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                  Леденцы
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <SimpleItem 
                      name="Леденцы Фруктовый микс"
                      price={150}
                      weight="100 г"
                      imageUrl="https://images.unsplash.com/photo-1527761939622-9119094630cf?q=80&w=2000"
                      description="Набор разноцветных леденцов с фруктовыми вкусами."
                      ingredients="Сахар, глюкозный сироп, натуральные фруктовые ароматизаторы, пищевые красители."
                    />
                    
                    <Separator className="my-6 bg-[#E8D5C4]" />
                    
                    <SimpleItem 
                      name="Леденцы Карамельные"
                      price={150}
                      weight="100 г"
                      imageUrl="https://images.unsplash.com/photo-1575224300306-1b8da36134ec?q=80&w=2000"
                      description="Классические карамельные леденцы с легкой ноткой ванили."
                      ingredients="Сахар, глюкозный сироп, сливочное масло, ваниль."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="sets">
                <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                  Наборы и подарки
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <SetItem 
                      name="Набор 'Праздничный'"
                      price={2500}
                      description="Идеальный подарочный набор для любого торжества."
                      contents="Бенто-торт 450г, 6 капкейков, 10 кейк-попсов, коробка."
                      imageUrl="https://images.unsplash.com/photo-1541005420386-01f8d3d58676?q=80&w=2000"
                    />
                    
                    <Separator className="my-6 bg-[#E8D5C4]" />
                    
                    <SetItem 
                      name="Набор 'Детский'"
                      price={1800}
                      description="Красочный набор сладостей для детского праздника."
                      contents="4 капкейка, 8 кейк-попсов, 10 леденцов, коробка с декором."
                      imageUrl="https://images.unsplash.com/photo-1557725095-28139e4652ec?q=80&w=2000"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#6B4025] text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="font-montserrat text-xl mb-1">Sweet Delights</p>
              <p className="font-roboto text-sm text-white/80 mb-4 md:mb-0">Изысканные десерты ручной работы</p>
            </div>
            <div className="text-right">
              <p className="font-roboto text-sm mb-1">Для заказа: +7 (XXX) XXX-XX-XX</p>
              <p className="font-roboto text-sm text-white/80">© 2025 Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент для отображения торта
const CakeItem = ({ name, price, weight, imageUrl, description, ingredients }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="rounded-lg overflow-hidden h-[200px]">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="font-montserrat text-xl font-medium text-[#6B4025]">{name}</h3>
          <div className="text-right">
            <p className="font-montserrat text-lg font-semibold text-[#6B4025]">{price} ₽</p>
            <p className="text-[#A67F5D] text-sm">{weight}</p>
          </div>
        </div>
        <p className="text-[#6B4025] font-roboto mb-4">{description}</p>
        <div>
          <h4 className="font-montserrat text-sm font-medium text-[#6B4025] mb-1">Состав:</h4>
          <p className="text-[#A67F5D] text-sm font-roboto">{ingredients}</p>
        </div>
      </div>
    </div>
  );
}

// Компонент для отображения других сладостей
const SimpleItem = ({ name, price, weight, imageUrl, description, ingredients }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <div className="rounded-lg overflow-hidden h-[120px]">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-3">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="font-montserrat text-lg font-medium text-[#6B4025]">{name}</h3>
          <div className="text-right">
            <p className="font-montserrat text-base font-semibold text-[#6B4025]">{price} ₽</p>
            <p className="text-[#A67F5D] text-xs">{weight}</p>
          </div>
        </div>
        <p className="text-[#6B4025] text-sm font-roboto mb-2">{description}</p>
        <div>
          <h4 className="font-montserrat text-xs font-medium text-[#6B4025] mb-1">Состав:</h4>
          <p className="text-[#A67F5D] text-xs font-roboto">{ingredients}</p>
        </div>
      </div>
    </div>
  );
}

// Компонент для отображения наборов
const SetItem = ({ name, price, description, contents, imageUrl }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-1">
        <div className="rounded-lg overflow-hidden h-[120px]">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-3">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="font-montserrat text-lg font-medium text-[#6B4025]">{name}</h3>
          <p className="font-montserrat text-base font-semibold text-[#6B4025]">{price} ₽</p>
        </div>
        <p className="text-[#6B4025] text-sm font-roboto mb-2">{description}</p>
        <div>
          <h4 className="font-montserrat text-xs font-medium text-[#6B4025] mb-1">Состав набора:</h4>
          <p className="text-[#A67F5D] text-xs font-roboto">{contents}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
