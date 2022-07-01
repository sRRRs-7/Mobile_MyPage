import React from 'react';
import Header from '../components/Header';
import { Draggable } from 'drag-react';

const skills = [
  {
    title: 'testify',
    description: 'Test',
    bgColor: 'bg-red-400',
    image: '/testify.png',
  },
  {
    title: 'viper',
    description: 'Environment variables management library',
    bgColor: 'bg-blue-400',
    image: '/viper.png',
  },
  {
    title: 'sqlc',
    description: 'ORM library',
    bgColor: 'bg-green-400',
    image: '/sqlc.png',
  },
  {
    title: 'Gin Gonic',
    description: 'Golang framework',
    bgColor: 'bg-yellow-400',
    image: '/ginGonic.png',
  },
  {
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
      <div className='grid grid-cols-3 xs:grid-cols-1 p-20 space-x-5 space-y-5'>
        {skills.map((s) => (
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
                  <p className='text-gray-700 text-3xl mb-2'>{s.title}</p>
                  <p className='text-gray-700 text-xl'>{s.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default golang;
