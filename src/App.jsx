import React, { useState } from 'react';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(searchText);
      setSearchText('');
    }
  };

  return (
    <div className='h-screen'>
      <div className='w-full flex items-center justify-center h-[50px] bg-neutral-900'>
        <p className='text-white text-xl font-bold'>F1 Insight</p>
      </div>
      <div className='flex justify-center h-full'>
        <div className='w-full bg-neutral-800 flex justify-center'>
          <div className='w-[70%] h-full bg-neutral-800'>
            <div className="mt-8 flex justify-center">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-2/3 px-4 py-2 text-white rounded-l-lg border border-gray-500 focus:outline-none bg-neutral-800"
                value={searchText}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-r-lg focus:outline-none transition duration-300">
                검색
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
