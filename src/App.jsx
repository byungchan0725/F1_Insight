import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const circuitData = [
  { id: 1, name: 'test-1', country: '이탈리아', circuit: '몬자' },
  { id: 2, name: '이름 2', country: '이탈리아', circuit: '몬자' },
  { id: 3, name: '이름 3', country: '이탈리아', circuit: '몬자' },
  { id: 4, name: '이름 4', country: '이탈리아', circuit: '몬자' },
  { id: 5, name: '이름 5', country: '이탈리아', circuit: '몬자' },
  { id: 6, name: '이름 6', country: '이탈리아', circuit: '몬자' },
  { id: 7, name: '이름 7', country: '이탈리아', circuit: '몬자' },
];

const CircuitCard = ({ name, country, circuit }) => (
  <div className="border border-gray-300 p-4 rounded-lg w-full">
    <Link to={`/circuit/${name}`}>
      <img 
        src="http://raceweek.co.kr/wp-content/uploads/2024/09/MONZA-4.jpg" 
        alt={name} 
        className="w-[350px] h-auto object-cover mx-auto"
      />
      <div className="mt-2 text-center">
        <h2 className="font-bold">{name}</h2>
        <p>나라: {country}</p>
        <p>서킷: {circuit}</p>
      </div>
    </Link>
  </div>
);

const CircuitDetail = ({ match }) => {
  const name = match.params.name;

  // 여기에 동적으로 추가할 정보
  const circuitInfo = circuitData.find(circuit => circuit.name === name);

  return (
    <div>
      <h2>{name} 상세 정보</h2>
      {circuitInfo ? (
        <div>
          <p>나라: {circuitInfo.country}</p>
          <p>서킷: {circuitInfo.circuit}</p>
          {/* 추가적인 정보가 필요하면 여기에 추가 */}
        </div>
      ) : (
        <p>서킷 정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

const years = Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (v, i) => 1950 + i);

const App = () => {
  const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());

  return (
    <Router>
      <div className="flex flex-col bg-white min-h-screen">
        <header className="flex items-center justify-center bg-black h-[60px]">
          <h1 className="text-white text-lg font-bold">F1 서킷 요약 서비스</h1>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center p-4 mt-[20px]">
          {/* 헤더와 요소 사이에 추가할 코드 */}
          <div className="mb-4 flex flex-col items-center justify-center w-[70%]">
            <input 
              id="year-slider" 
              type="range" 
              min="1950" 
              max={new Date().getFullYear()} 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)} 
              className="slider w-full"
            />
          </div>
          <label htmlFor="year-slider" className="mr-2">연도 선택: {selectedYear}</label>
          <Routes>
            <Route path="/" element={
              <div className="w-[70%] max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {circuitData.map((circuit) => (
                    <CircuitCard 
                      key={circuit.id}
                      name={circuit.name}
                      country={circuit.country}
                      circuit={circuit.circuit}
                    />
                  ))}
                </div>
              </div>
            } />
            <Route path="/circuit/:name" element={<CircuitDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;