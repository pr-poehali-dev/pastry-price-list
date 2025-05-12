
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F9F5F0] p-4 md:p-6">
      <header className="max-w-5xl mx-auto mb-6 text-center">
        <h1 className="text-[#6B4025] font-montserrat text-3xl md:text-4xl font-semibold">
          Sweet Delights
        </h1>
        <p className="text-[#A67F5D] font-roboto mt-1">Прайс-лист кондитерской</p>
      </header>
      
      <main className="max-w-5xl mx-auto">
        {/* ТОРТЫ ОТ 1,5КГ */}
        <section className="mb-6">
          <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-3 pb-2 border-b border-[#E8D5C4]">
            Торты (заказ от 1,5 кг)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* КЛАССИКА */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" 
                    alt="Классические торты" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-lg font-medium text-[#6B4025]">Классика</h3>
              </div>
              
              <div className="mb-3">
                <div className="bg-[#F7F1E9] rounded p-3 mb-2">
                  <h4 className="font-medium text-[#6B4025] mb-1">2500₽/кг</h4>
                  <ul className="text-xs text-[#A67F5D]">
                    <li>Молочный ломтик</li>
                    <li>Груша</li>
                    <li>3 шоколада</li>
                    <li>Сникерс</li>
                    <li>Клубника</li>
                    <li>Малина</li>
                    <li>Вишня</li>
                  </ul>
                </div>
                
                <div className="bg-[#F7F1E9] rounded p-3 mb-2">
                  <h4 className="font-medium text-[#6B4025] mb-1">2600₽/кг</h4>
                  <p className="text-xs text-[#A67F5D]">Фисташка-малина</p>
                </div>
                
                <div className="bg-[#F7F1E9] rounded p-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">3100₽/кг</h4>
                  <p className="text-xs text-[#A67F5D]">Орео</p>
                </div>
              </div>
              
              <p className="text-[10px] text-[#A67F5D] italic">
                Стоимость декора рассчитывается отдельно.<br />
                В этом разделе состав к каждому десерту.
              </p>
            </div>
            
            {/* ПП */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1572383672419-ab35444a209d?w=500" 
                    alt="ПП торты" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-lg font-medium text-[#6B4025]">ПП</h3>
              </div>
              
              <div className="mb-3">
                <div className="bg-[#F7F1E9] rounded p-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">2600₽/кг</h4>
                  <ul className="text-xs text-[#A67F5D]">
                    <li>Красный бархат</li>
                    <li>Медовик</li>
                    <li>Сникерс</li>
                    <li>Рафаэлло</li>
                    <li>Малина-облепиха</li>
                    <li>Вишня-шоколад</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-[10px] text-[#A67F5D] italic">
                Стоимость декора рассчитывается отдельно.<br />
                Здесь рассчитан КБЖУ и указан состав к каждому десерту.
              </p>
            </div>
            
            {/* ВЕГАН */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=500" 
                    alt="Веган торты" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-lg font-medium text-[#6B4025]">Веган</h3>
              </div>
              
              <div className="mb-3">
                <div className="bg-[#F7F1E9] rounded p-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">3500₽/кг</h4>
                  <ul className="text-xs text-[#A67F5D]">
                    <li>Молочный ломтик</li>
                    <li>Сникерс</li>
                    <li>Клубника-ваниль</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-[10px] text-[#A67F5D] italic">
                Стоимость декора рассчитывается отдельно.<br />
                Здесь рассчитан КБЖУ и указан состав к каждому десерту.
              </p>
            </div>
          </div>
        </section>
        
        {/* БЕНТО-ТОРТЫ */}
        <section className="mb-6">
          <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-3 pb-2 border-b border-[#E8D5C4]">
            Бенто-торты
          </h2>
          
          <p className="text-xs text-[#A67F5D] mb-3">Размеры: S ~450г и M ~1кг</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* КЛАССИКА */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500" 
                    alt="Бенто классика" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-base font-medium text-[#6B4025]">Классика</h3>
              </div>
              
              <div className="flex mb-2">
                <span className="bg-[#E8D5C4] text-[#6B4025] px-2 py-1 rounded-full text-xs font-medium mr-2">S 1900₽</span>
                <span className="bg-[#E8D5C4] text-[#6B4025] px-2 py-1 rounded-full text-xs font-medium">M 3500₽</span>
              </div>
              
              <ul className="text-xs text-[#A67F5D] mb-3">
                <li>Вишня</li>
                <li>Сникерс</li>
                <li>Орео (не как в больших тортах)</li>
                <li>Клубника</li>
                <li>Малина</li>
                <li>Фисташка-малина</li>
                <li>Крем-чиз</li>
              </ul>
            </div>
            
            {/* ПП */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500" 
                    alt="Бенто ПП" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-base font-medium text-[#6B4025]">ПП</h3>
              </div>
              
              <div className="flex mb-2">
                <span className="bg-[#E8D5C4] text-[#6B4025] px-2 py-1 rounded-full text-xs font-medium mr-2">S 2100₽</span>
                <span className="bg-[#E8D5C4] text-[#6B4025] px-2 py-1 rounded-full text-xs font-medium">M 3700₽</span>
              </div>
              
              <p className="text-xs text-[#A67F5D] mb-3">
                Начинки те же, что в больших тортах
              </p>
            </div>
            
            {/* ВЕГАН */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=500" 
                    alt="Бенто веган" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-base font-medium text-[#6B4025]">Веган</h3>
              </div>
              
              <div className="flex mb-2">
                <span className="bg-[#E8D5C4] text-[#6B4025] px-2 py-1 rounded-full text-xs font-medium mr-2">S 2700₽</span>
                <span className="bg-[#E8D5C4] text-[#6B4025] px-2 py-1 rounded-full text-xs font-medium">M 3700₽</span>
              </div>
              
              <p className="text-xs text-[#A67F5D] mb-3">
                Начинки те же, что в больших тортах
              </p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-montserrat text-base font-medium text-[#6B4025] mb-2 flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500" 
                  alt="Декор" 
                  className="w-full h-full object-cover"
                />
              </div>
              Декор для бенто-тортов:
            </h3>
            <ul className="text-xs text-[#A67F5D]">
              <li><span className="font-medium">От 200₽</span> - простая надпись, сердечки, цветное покрытие, золото/серебро</li>
              <li><span className="font-medium">От 500₽</span> - контурный рисунок</li>
              <li><span className="font-medium">От 700₽</span> - простой рисунок</li>
              <li><span className="font-medium">От 1000₽</span> - сложный рисунок</li>
            </ul>
          </div>
        </section>
        
        {/* ДРУГИЕ ДЕСЕРТЫ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* CAKE TO GO */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://images.unsplash.com/photo-1621303837338-5db179b41709?w=500" 
                  alt="Cake to Go" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat text-base font-medium text-[#6B4025]">Cake to Go - торты в стаканах</h3>
            </div>
            
            <div className="bg-[#F7F1E9] rounded p-3 mb-2">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium text-[#6B4025]">900₽/шт</h4>
                <span className="text-xs text-[#A67F5D]">~250г</span>
              </div>
              <p className="text-xs text-[#A67F5D]">Начинки те же, что в бенто-тортах</p>
              <p className="text-[10px] text-[#A67F5D] italic mt-1">Заказ от 2 шт</p>
            </div>
          </div>
          
          {/* КАПКЕЙКИ */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://images.unsplash.com/photo-1519869325930-281384150729?w=500" 
                  alt="Капкейки" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat text-base font-medium text-[#6B4025]">Капкейки</h3>
            </div>
            
            <div className="bg-[#F7F1E9] rounded p-3 mb-2">
              <h4 className="font-medium text-[#6B4025] mb-1">Классика - 320₽/шт</h4>
              <ul className="text-xs text-[#A67F5D]">
                <li>Шоколад-карамель</li>
                <li>Клубника-ваниль</li>
              </ul>
              <p className="text-[10px] text-[#A67F5D] italic mt-1">
                Здесь указан состав к каждой начинке.<br />
                В стоимость входит декор на вкус кондитера.<br />
                Индивидуальный декор рассчитывается отдельно.
              </p>
            </div>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* ЭСКИМО */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://images.unsplash.com/photo-1544639870-9d2bee7f4b4d?w=500" 
                  alt="Эскимо" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat text-base font-medium text-[#6B4025]">
                Эскимо - пирожное картошка
              </h3>
            </div>
            
            <div className="mb-2">
              <h4 className="font-medium text-[#6B4025] text-sm mb-1">Классика</h4>
              <ul className="text-xs text-[#A67F5D]">
                <li>Шоколадные - 220₽/шт</li>
                <li>Шоколад - соленая карамель и арахис - 250₽/шт <span className="text-[10px] italic">(под заказ)</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-[#6B4025] text-sm mb-1">ПП</h4>
              <p className="text-xs text-[#A67F5D]">Шоколадные - 260₽/шт</p>
              <p className="text-[10px] text-[#A67F5D] italic mt-1">Везде указан состав</p>
            </div>
          </div>
          
          {/* КЕЙК ПОПСЫ */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500" 
                  alt="Кейк попсы" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat text-base font-medium text-[#6B4025]">Кейк попсы</h3>
            </div>
            
            <ul className="text-xs text-[#A67F5D]">
              <li>Классика - 300₽/шт (шоколадные)</li>
              <li>ПП - 320₽/шт (шоколадные)</li>
            </ul>
          </div>
          
          {/* ДРУГОЕ */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://images.unsplash.com/photo-1541005420386-01f8d3d58676?w=500" 
                  alt="Другие сладости" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat text-base font-medium text-[#6B4025]">Другие сладости</h3>
            </div>
            
            <ul className="text-xs text-[#A67F5D]">
              <li>Леденцы из изомальта - от 90₽/шт</li>
              <li>Шоколадные фигурки - от 500₽/шт</li>
              <li>Сахарная печать - от 400₽</li>
            </ul>
          </div>
        </section>
      </main>
      
      <footer className="max-w-5xl mx-auto text-center text-xs text-[#A67F5D] mt-6">
        <p>© 2025 Sweet Delights. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
