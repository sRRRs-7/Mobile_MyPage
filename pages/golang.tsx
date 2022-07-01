import React from 'react';
import Header from '../components/Header';
import { Draggable } from 'drag-react';

const skills = [
  {
    id: 5,
    title: 'testify',
    description: 'Test',
    bgColor: 'bg-red-400',
    image: '/testify.png',
  },
  {
    id: 4,
    title: 'viper',
    description: 'Environment variables management library',
    bgColor: 'bg-blue-400',
    image: '/viper.png',
  },
  {
    id: 3,
    title: 'sqlc',
    description: 'ORM library',
    bgColor: 'bg-green-400',
    image: '/sqlc.png',
  },
  {
    id: 2,
    title: 'Gin Gonic',
    description: 'Golang framework',
    bgColor: 'bg-yellow-400',
    image: '/ginGonic.png',
  },
  {
    id: 1,
    title: 'Golang',
    description: 'My favorite backend language',
    bgColor: 'bg-gray-200',
    image: '/golang.png',
  },
];

const golang = () => {
  return (
    <>
      <Header />
      <div>
        <div className='flex items-center m-10 text-xl text-black font-serif'>
          <h1>Question: 2^8 = ?</h1>
        </div>
        <div className='flex justify-center items-center p-2 text-6xl text-blue-400 font-serif mt-64'>
          <h1>Look at my Skill Card by Drag</h1>
        </div>
        {skills.map((s) => (
          <Draggable>
            <div className='max-w-3xl border border-blue-200 m-3'>
              <div
                className={`border-r border-b border-l border-gray-400 rounded-b p-4 flex flex-col justify-between leading-normal ${s.bgColor}`}
              >
                <div className='flex'>
                  <img
                    src={s.image}
                    alt='icon or image'
                    className='p-2 m-5 w-48 h-48 object-contain'
                  />
                  <div>
                    <div className='flex'>
                      <h1 className='text-gray-900 font-bold text-xl mb-2 mr-3 ml-auto p-3'>
                        {s.id}
                      </h1>
                    </div>
                    <p className='text-gray-700 text-3xl mb-2'>{s.title}</p>
                    <p className='text-gray-700 text-xl'>{s.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>
    </>
  );
};

export default golang;
