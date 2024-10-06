import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ui/Header/Header';
import Garage from './asset/svg/garage.svg';

const App = () => {
  return (
    <Router>
      <div>
        <header className="flex items-center justify-center bg-red-600 h-[60px]">
          <h1 className="text-white text-xl font-bold">F1 Insight</h1>
        </header>
        <div className="w-full max-w-[60%] mx-auto mt-10">
          <h1 className="text-2xl font-nanum mb-3">F1 지식 습득 플랫폼</h1>
          <p className="text-sm font-light font-nanum mb-5">
            ~~~~~~~~~~~~~~~~~~
          </p>
          <p className="text-sm font-light font-nanum mb-5">
            디자인 해야함 디자인 해야함 디자인 해야함 디자인 해야함
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[80%]">
              <div className="border-2 border-gray-200 rounded-lg h-[200px] flex flex-col items-center overflow-hidden shadow-md hover:shadow-red-300">
                <img
                  src={Garage}
                  alt="garage"
                  className="w-[60px] h-auto mt-8 md:w-[20%]"
                />
                <h1 className="mt-2 text-2xl font-nanum">팀 확인</h1>
                <p className="text-center font-light font-nanum mt-4 px-4 flex-grow">
                  {new Date().getFullYear()} 시즌 팀을 확인합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
