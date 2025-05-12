
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F9F5F0] p-6 md:p-8">
      <header className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-[#6B4025] font-montserrat text-3xl md:text-4xl font-semibold">
          Sweet Delights
        </h1>
        <p className="text-[#A67F5D] font-roboto mt-1">Прайс-лист кондитерской</p>
      </header>
      
      <main className="max-w-5xl mx-auto">
        {/* ТОРТЫ ОТ 1,5КГ */}
        <section className="mb-8">
          <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4 pb-2 border-b border-[#E8D5C4]">
            Торты (заказ от 1,5 кг)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* КЛАССИКА */}
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Классика</h3>
              
              <div className="mb-4">
                <div className="bg-[#F7F1E9] rounded p-3 mb-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">2500₽/кг</h4>
                  <ul className="text-sm text-[#A67F5D]">
                    <li>Молочный ломтик</li>
                    <li>Груша</li>
                    <li>3 шоколада</li>
                    <li>Сникерс</li>
                    <li>Клубника</li>
                    <li>Малина</li>
                    <li>Вишня</li>
                  </ul>
                </div>
                
                <div className="bg-[#F7F1E9] rounded p-3 mb-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">2600₽/кг</h4>
                  <p className="text-sm text-[#A67F5D]">Фисташка-малина</p>
                </div>
                
                <div className="bg-[#F7F1E9] rounded p-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">3100₽/кг</h4>
                  <p className="text-sm text-[#A67F5D]">Орео</p>
                </div>
              </div>
              
              <p className="text-xs text-[#A67F5D] italic">
                Стоимость декора рассчитывается отдельно
              </p>
            </div>
            
            {/* ПП */}
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">ПП</h3>
              
              <div className="mb-4">
                <div className="bg-[#F7F1E9] rounded p-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">2600₽/кг</h4>
                  <ul className="text-sm text-[#A67F5D]">
                    <li>Красный бархат</li>
                    <li>Медовик</li>
                    <li>Сникерс</li>
                    <li>Рафаэлло</li>
                    <li>Малина-облепиха</li>
                    <li>Вишня-шоколад</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-xs text-[#A67F5D] italic">
                Стоимость декора рассчитывается отдельно<br />
                Для каждого торта рассчитан КБЖУ
              </p>
            </div>
            
            {/* ВЕГАН */}
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Веган</h3>
              
              <div className="mb-4">
                <div className="bg-[#F7F1E9] rounded p-3">
                  <h4 className="font-medium text-[#6B4025] mb-1">3500₽/кг</h4>
                  <ul className="text-sm text-[#A67F5D]">
                    <li>Молочный ломтик</li>
                    <li>Сникерс</li>
                    <li>Клубника-ваниль</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-xs text-[#A67F5D] italic">
                Стоимость декора рассчитывается отдельно<br />
                Для каждого торта рассчитан КБЖУ
              </p>
            </div>
          </div>
        </section>
        
        {/* БЕНТО-ТОРТЫ */}
        <section className="mb-8">
          <h2 className="font-montserrat text-2xl font-medium text-[#6B4025] mb-4 pb-2 border-b border-[#E8D5C4]">
            Бенто-торты
          </h2>
          
          <p className="text-sm text-[#A67F5D] mb-4">Размеры: S ~450г и M ~1кг</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* КЛАССИКА */}
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Классика</h3>
              
              <div className="flex mb-3">
                <span className="bg-[#E8D5C4] text-[#6B4025] px-3 py-1 rounded-full text-sm font-medium mr-2">S 1900₽</span>
                <span className="bg-[#E8D5C4] text-[#6B4025] px-3 py-1 rounded-full text-sm font-medium">M 3500₽</span>
              </div>
              
              <ul className="text-sm text-[#A67F5D] mb-4">
                <li>Вишня</li>
                <li>Сникерс</li>
                <li>Орео</li>
                <li>Клубника</li>
                <li>Малина</li>
                <li>Фисташка-малина</li>
                <li>Крем-чиз</li>
              </ul>
            </div>
            
            {/* ПП */}
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">ПП</h3>
              
              <div className="flex mb-3">
                <span className="bg-[#E8D5C4] text-[#6B4025] px-3 py-1 rounded-full text-sm font-medium mr-2">S 2100₽</span>
                <span className="bg-[#E8D5C4] text-[#6B4025] px-3 py-1 rounded-full text-sm font-medium">M 3700₽</span>
              </div>
              
              <p className="text-sm text-[#A67F5D] mb-4">
                Начинки те же, что в больших тортах
              </p>
            </div>
            
            {/* ВЕГАН */}
            <div className="bg-white p-5 rounded-lg">
              <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Веган</h3>
              
              <div className="flex mb-3">
                <span className="bg-[#E8D5C4] text-[#6B4025] px-3 py-1 rounded-full text-sm font-medium mr-2">S 2700₽</span>
                <span className="bg-[#E8D5C4] text-[#6B4025] px-3 py-1 rounded-full text-sm font-medium">M 3700₽</span>
              </div>
              
              <p className="text-sm text-[#A67F5D] mb-4">
                Начинки те же, что в больших тортах
              </p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Декор для бенто-тортов:</h3>
            <ul className="text-sm text-[#A67F5D]">
              <li><span className="font-medium">От 200₽</span> - простая надпись, сердечки, цветное покрытие, золото/серебро</li>
              <li><span className="font-medium">От 500₽</span> - контурный рисунок</li>
              <li><span className="font-medium">От 700₽</span> - простой рисунок</li>
              <li><span className="font-medium">От 1000₽</span> - сложный рисунок</li>
            </ul>
          </div>
        </section>
        
        {/* ДРУГИЕ ДЕСЕРТЫ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* CAKE TO GO */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Cake to Go - торты в стаканах</h3>
            
            <div className="bg-[#F7F1E9] rounded p-3 mb-3">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium text-[#6B4025]">900₽/шт</h4>
                <span className="text-sm text-[#A67F5D]">~250г</span>
              </div>
              <p className="text-sm text-[#A67F5D]">Начинки те же, что в бенто-тортах</p>
              <p className="text-xs text-[#A67F5D] italic mt-1">Заказ от 2 шт</p>
            </div>
          </div>
          
          {/* КАПКЕЙКИ */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Капкейки</h3>
            
            <div className="bg-[#F7F1E9] rounded p-3 mb-3">
              <h4 className="font-medium text-[#6B4025] mb-1">Классика - 320₽/шт</h4>
              <ul className="text-sm text-[#A67F5D]">
                <li>Шоколад-карамель</li>
                <li>Клубника-ваниль</li>
              </ul>
              <p className="text-xs text-[#A67F5D] italic mt-2">
                В стоимость входит декор на вкус кондитера.<br />
                Индивидуальный декор рассчитывается отдельно.
              </p>
            </div>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* ЭСКИМО */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">
              Эскимо - пирожное картошка в шоколадной глазури
            </h3>
            
            <div className="mb-3">
              <h4 className="font-medium text-[#6B4025] mb-1">Классика</h4>
              <ul className="text-sm text-[#A67F5D]">
                <li>Шоколадные - 220₽/шт</li>
                <li>Шоколад - соленая карамель и арахис - 250₽/шт <span className="text-xs italic">(под заказ)</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-[#6B4025] mb-1">ПП</h4>
              <p className="text-sm text-[#A67F5D]">Шоколадные - 260₽/шт</p>
            </div>
          </div>
          
          {/* КЕЙК ПОПСЫ */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Кейк попсы</h3>
            
            <ul className="text-sm text-[#A67F5D]">
              <li>Классика - 300₽/шт (шоколадные)</li>
              <li>ПП - 320₽/шт (шоколадные)</li>
            </ul>
          </div>
          
          {/* ДРУГОЕ */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="font-montserrat text-lg font-medium text-[#6B4025] mb-3">Другие сладости</h3>
            
            <ul className="text-sm text-[#A67F5D]">
              <li>Леденцы из изомальта - от 90₽/шт</li>
              <li>Шоколадные фигурки - от 500₽/шт</li>
              <li>Сахарная печать - от 400₽</li>
            </ul>
          </div>
        </section>
      </main>
      
      <footer className="max-w-5xl mx-auto text-center text-sm text-[#A67F5D] mt-8">
        <p>© 2025 Sweet Delights. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;
