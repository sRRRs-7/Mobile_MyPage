import React from 'react';
import Header from '../components/Header';
import { Draggable } from 'drag-react';

const skills = [
  {
    title: 'Node.js',
    description: 'yarn, ',
    bgColor: 'bg-green-200',
    image: '/nodejs.png',
  },
  {
    title: 'Three.js',
    description: '3D Graphics',
    bgColor: 'bg-red-200',
    image: '/threejs.png',
  },
  {
    title: 'tailwind.css',
    description: 'tailwind-elements',
    bgColor: 'bg-yellow-200',
    image: '/tailwind.png',
  },
  {
    title: 'Next.js',
    description: 'SSR, SWR, Vercel',
    bgColor: 'bg-blue-200',
    image: '/next.png',
  },
  {
    title: 'React.js',
    description: 'axios, recoil, React.js example',
    bgColor: 'bg-gray-200',
    image: '/react.png',
  },
];

const nodejs = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-3 xs:grid-cols-1 p-20 space-x-5 space-y-5'>
        {skills.map((s) => (
          <div className='flex max-w-3xl'>
            <div
              className={`border border-gray-400 rounded-b p-4 flex flex-col justify-between leading-normal ${s.bgColor}`}
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

export default nodejs;
