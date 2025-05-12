
import React, { useState } from 'react';
import './App.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
              
              {/* Классические торты */}
              <TabsContent value="classic">
                <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4">Классические торты</h2>
                
                <Accordion type="single" collapsible defaultValue="regular" className="mb-8">
                  <AccordionItem value="regular">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Торты от 1.5 кг
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mb-6">
                        <p className="text-[#A67F5D] italic text-sm mb-4">Стоимость декора рассчитывается отдельно</p>
                        
                        <div className="bg-[#F7F1E9] rounded-lg p-4 mb-6">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">2500₽/кг</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CakeVariety name="Молочный ломтик" description="Нежный ванильный бисквит, сливочно-молочный крем, тонкая карамельная нотка" />
                            <CakeVariety name="Груша" description="Ванильный бисквит, сливочный крем с кусочками груши, карамель и корица" />
                            <CakeVariety name="3 шоколада" description="Шоколадный бисквит с тремя слоями шоколадного мусса (белый, молочный, тёмный)" />
                            <CakeVariety name="Сникерс" description="Шоколадный бисквит, карамель, хрустящий слой с орехами, шоколадный крем" />
                            <CakeVariety name="Клубника" description="Ванильный бисквит, сливочный крем со свежей клубникой и клубничным конфи" />
                            <CakeVariety name="Малина" description="Ванильный бисквит, сливочный крем с малиновым конфи и свежей малиной" />
                            <CakeVariety name="Вишня" description="Шоколадный бисквит, сливочный крем с вишневым конфи и свежей вишней" />
                          </ul>
                        </div>
                        
                        <div className="bg-[#F7F1E9] rounded-lg p-4 mb-6">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">2600₽/кг</h3>
                          <CakeVariety name="Фисташка-малина" description="Фисташковый бисквит, малиновое конфи, крем с фисташковой пастой, свежая малина" />
                        </div>
                        
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">3100₽/кг</h3>
                          <CakeVariety name="Орео" description="Шоколадный бисквит с целыми печеньями Орео, крем-чиз с кусочками печенья, шоколадный ганаш" />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bento">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Бенто торты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <p className="text-[#A67F5D] italic text-sm mb-4">Размеры: S ~450гр и M ~1кг</p>
                        
                        <div className="flex items-center mb-6">
                          <Badge className="bg-[#E8D5C4] text-[#6B4025] hover:bg-[#E8D5C4] mr-2">S 1900₽</Badge>
                          <Badge className="bg-[#E8D5C4] text-[#6B4025] hover:bg-[#E8D5C4]">M 3500₽</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <CakeVariety name="Вишня" description="Шоколадный бисквит, сливочный крем с вишневым конфи" />
                          <CakeVariety name="Сникерс" description="Шоколадный бисквит, карамель, хрустящий слой с арахисом" />
                          <CakeVariety name="Орео" description="Шоколадный бисквит, крем-чиз с кусочками печенья Орео" />
                          <CakeVariety name="Клубника" description="Ванильный бисквит, сливочный крем со свежей клубникой" />
                          <CakeVariety name="Малина" description="Ванильный бисквит, сливочный крем с малиновым конфи" />
                          <CakeVariety name="Фисташка-малина" description="Фисташковый бисквит, малиновое конфи, фисташковый крем" />
                          <CakeVariety name="Крем-чиз" description="Ванильный бисквит с нежным сливочным кремом" />
                        </div>
                        
                        <Separator className="bg-[#E8D5C4] my-6" />
                        
                        <div className="space-y-2">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Декор:</h3>
                          <p className="text-[#6B4025]"><span className="font-medium">От 200₽</span> - простая надпись, сердечки, цветное покрытие, золото/серебро</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 500₽</span> - контурный рисунок</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 700₽</span> - простой рисунок</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 1000₽</span> - сложный рисунок</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="cake-to-go">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Cake to Go - торты в стаканах
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-montserrat text-lg font-medium text-[#6B4025]">900₽/шт</h3>
                            <p className="text-[#A67F5D] text-sm">~250гр</p>
                          </div>
                          <p className="text-[#A67F5D] text-sm italic mb-4">Заказ от 2 шт</p>
                          <p className="text-[#6B4025]">Те же начинки, что в бенто-тортах. Десерт в стаканчике сохраняет нежный вкус и текстуру торта, но подается в удобной порционной форме.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="cupcakes">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Капкейки
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">320₽/шт</h3>
                          <p className="text-[#A67F5D] text-sm italic mb-4">В стоимость входит декор на вкус кондитера. Индивидуальный декор рассчитывается отдельно.</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CakeVariety name="Шоколад-карамель" description="Шоколадный кекс с карамельной начинкой и шоколадным кремом сверху" />
                            <CakeVariety name="Клубника-ваниль" description="Ванильный кекс с клубничной начинкой и сливочно-ванильным кремом" />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="eskimo">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Эскимо - пирожное картошка в шоколадной глазури
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="bg-[#F7F1E9] rounded-lg p-4 mb-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Шоколадные - 220₽/шт</h3>
                          <p className="text-[#6B4025]">Классическое пирожное "картошка" из бисквита, пропитанного кремом и покрытого шоколадной глазурью</p>
                        </div>
                        
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Шоколад - соленая карамель и арахис - 250₽/шт</h3>
                          <p className="text-[#6B4025]">Шоколадное пирожное с добавлением соленой карамели и арахиса, покрытое шоколадной глазурью</p>
                          <p className="text-[#A67F5D] text-sm italic mt-2">Под заказ</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="cakepops">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Кейк попсы
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Шоколадные - 300₽/шт</h3>
                          <p className="text-[#6B4025]">Миниатюрные шоколадные пирожные на палочке, покрытые шоколадной глазурью</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="other">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Другие сладости
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-[#F7F1E9] rounded-lg p-4">
                            <h3 className="font-montserrat text-base font-medium text-[#6B4025] mb-2">Леденцы из изомальта</h3>
                            <p className="text-[#6B4025] font-medium">от 90₽/шт</p>
                            <p className="text-[#A67F5D] text-sm mt-2">Ручная работа, натуральные ингредиенты</p>
                          </div>
                          
                          <div className="bg-[#F7F1E9] rounded-lg p-4">
                            <h3 className="font-montserrat text-base font-medium text-[#6B4025] mb-2">Шоколадные фигурки</h3>
                            <p className="text-[#6B4025] font-medium">от 500₽/шт</p>
                            <p className="text-[#A67F5D] text-sm mt-2">Фигурки из бельгийского шоколада</p>
                          </div>
                          
                          <div className="bg-[#F7F1E9] rounded-lg p-4">
                            <h3 className="font-montserrat text-base font-medium text-[#6B4025] mb-2">Сахарная печать</h3>
                            <p className="text-[#6B4025] font-medium">от 400₽</p>
                            <p className="text-[#A67F5D] text-sm mt-2">Индивидуальный дизайн</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              {/* ПП торты */}
              <TabsContent value="diet">
                <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4">ПП торты</h2>
                <p className="text-[#A67F5D] font-roboto mb-6">Полезные десерты с пониженным содержанием сахара и натуральными ингредиентами</p>
                
                <Accordion type="single" collapsible defaultValue="regular" className="mb-8">
                  <AccordionItem value="regular">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Торты от 1.5 кг
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mb-6">
                        <div className="bg-[#F7F1E9] rounded-lg p-4 mb-6">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">2600₽/кг</h3>
                          <p className="text-[#A67F5D] italic text-sm mb-4">Стоимость декора рассчитывается отдельно</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DietCakeVariety 
                              name="Красный бархат" 
                              description="Нежный свекольный бисквит с легким сливочным кремом на основе творожного сыра"
                              kbju="Б: 8.5г, Ж: 5.2г, У: 14.3г, 136 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Медовик" 
                              description="Тонкие медовые коржи с кремом на основе греческого йогурта и мёда"
                              kbju="Б: 6.8г, Ж: 4.1г, У: 17.2г, 132 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Сникерс" 
                              description="Шоколадный бисквит без муки, с арахисовой пастой и кремом на кокосовых сливках"
                              kbju="Б: 9.4г, Ж: 7.8г, У: 11.5г, 151 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Рафаэлло" 
                              description="Кокосовый бисквит с миндальной мукой и кремом на кокосовом молоке"
                              kbju="Б: 7.2г, Ж: 8.3г, У: 9.8г, 142 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Малина-облепиха" 
                              description="Ванильный бисквит на кокосовой муке с ягодным конфи без сахара"
                              kbju="Б: 5.9г, Ж: 4.2г, У: 10.3г, 102 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Вишня-шоколад" 
                              description="Шоколадный бисквит без муки с вишневым конфи и легким шоколадным кремом"
                              kbju="Б: 6.8г, Ж: 5.4г, У: 12.1г, 124 ккал/100г" 
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bento">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Бенто торты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <p className="text-[#A67F5D] italic text-sm mb-4">Размеры: S ~450гр и M ~1кг</p>
                        
                        <div className="flex items-center mb-6">
                          <Badge className="bg-[#E8D5C4] text-[#6B4025] hover:bg-[#E8D5C4] mr-2">S 2100₽</Badge>
                          <Badge className="bg-[#E8D5C4] text-[#6B4025] hover:bg-[#E8D5C4]">M 3700₽</Badge>
                        </div>
                        
                        <p className="text-[#6B4025] mb-4">Начинки те же, что и в больших тортах. Каждый бенто-торт содержит все питательные преимущества ПП-десертов в компактном размере.</p>
                        
                        <Separator className="bg-[#E8D5C4] my-6" />
                        
                        <div className="space-y-2">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Декор:</h3>
                          <p className="text-[#6B4025]"><span className="font-medium">От 200₽</span> - простая надпись, сердечки, цветное покрытие, золото/серебро</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 500₽</span> - контурный рисунок</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 700₽</span> - простой рисунок</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 1000₽</span> - сложный рисунок</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="eskimo">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Эскимо - пирожное картошка в шоколадной глазури
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Шоколадные - 260₽/шт</h3>
                          <p className="text-[#6B4025]">ПП версия классического пирожного без сахара и с минимальным содержанием жиров</p>
                          <div className="mt-3 p-2 bg-[#F1E8DB] rounded-md">
                            <p className="text-[#A67F5D] text-sm font-medium">КБЖУ: Б: 5.7г, Ж: 3.8г, У: 9.2г, 93 ккал/100г</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="cakepops">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Кейк попсы
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="bg-[#F7F1E9] rounded-lg p-4">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Шоколадные - 320₽/шт</h3>
                          <p className="text-[#6B4025]">ПП версия кейк-попсов на основе миндальной муки и органического какао</p>
                          <div className="mt-3 p-2 bg-[#F1E8DB] rounded-md">
                            <p className="text-[#A67F5D] text-sm font-medium">КБЖУ: Б: 4.9г, Ж: 5.1г, У: 7.3г, 94 ккал/100г</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              {/* Веган торты */}
              <TabsContent value="vegan">
                <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4">Веган торты</h2>
                <p className="text-[#A67F5D] font-roboto mb-6">Десерты без продуктов животного происхождения на растительной основе</p>
                
                <Accordion type="single" collapsible defaultValue="regular" className="mb-8">
                  <AccordionItem value="regular">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Торты от 1.5 кг
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mb-6">
                        <div className="bg-[#F7F1E9] rounded-lg p-4 mb-6">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">3500₽/кг</h3>
                          <p className="text-[#A67F5D] italic text-sm mb-4">Стоимость декора рассчитывается отдельно</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DietCakeVariety 
                              name="Молочный ломтик" 
                              description="Нежный ванильный бисквит на растительном молоке с кремом из кешью и кокосовых сливок"
                              kbju="Б: 6.8г, Ж: 9.2г, У: 15.3г, 169 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Сникерс" 
                              description="Шоколадный бисквит без яиц с арахисовой пастой, карамелью и шоколадным ганашем"
                              kbju="Б: 8.4г, Ж: 10.8г, У: 18.5г, 203 ккал/100г" 
                            />
                            
                            <DietCakeVariety 
                              name="Клубника-ваниль" 
                              description="Ванильный бисквит на кокосовом молоке с кремом из кешью и свежей клубникой"
                              kbju="Б: 5.9г, Ж: 8.3г, У: 14.7г, 156 ккал/100г" 
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bento">
                    <AccordionTrigger className="font-montserrat text-xl text-[#6B4025] hover:no-underline">
                      Бенто торты
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <p className="text-[#A67F5D] italic text-sm mb-4">Размеры: S ~450гр и M ~1кг</p>
                        
                        <div className="flex items-center mb-6">
                          <Badge className="bg-[#E8D5C4] text-[#6B4025] hover:bg-[#E8D5C4] mr-2">S 2700₽</Badge>
                          <Badge className="bg-[#E8D5C4] text-[#6B4025] hover:bg-[#E8D5C4]">M 3700₽</Badge>
                        </div>
                        
                        <p className="text-[#6B4025] mb-4">Начинки те же, что и в больших тортах. Все ингредиенты 100% растительного происхождения.</p>
                        
                        <Separator className="bg-[#E8D5C4] my-6" />
                        
                        <div className="space-y-2">
                          <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-2">Декор:</h3>
                          <p className="text-[#6B4025]"><span className="font-medium">От 200₽</span> - простая надпись, сердечки, цветное покрытие, золото/серебро</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 500₽</span> - контурный рисунок</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 700₽</span> - простой рисунок</p>
                          <p className="text-[#6B4025]"><span className="font-medium">От 1000₽</span> - сложный рисунок</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
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

// Компонент для отображения начинки классического торта
const CakeVariety = ({ name, description }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <h4 className="font-montserrat text-base font-medium text-[#6B4025] mb-1">{name}</h4>
      <p className="text-[#A67F5D] text-sm">{description}</p>
    </div>
  );
}

// Компонент для отображения ПП и веган тортов с КБЖУ
const DietCakeVariety = ({ name, description, kbju }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <h4 className="font-montserrat text-base font-medium text-[#6B4025] mb-1">{name}</h4>
      <p className="text-[#A67F5D] text-sm mb-2">{description}</p>
      <div className="p-2 bg-[#F1E8DB] rounded-md">
        <p className="text-[#A67F5D] text-sm font-medium">{kbju}</p>
      </div>
    </div>
  );
}

export default App;
