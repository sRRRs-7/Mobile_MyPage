import React from 'react';
import Header from '../components/Header';
import { Draggable } from 'drag-react';

const skills = [
  {
    title: 'MySQL',
    description: 'mysql',
    bgColor: 'bg-green-400',
    image: '/mysql.png',
  },
  {
    title: 'PostgresQL',
    description: 'postgres',
    bgColor: 'bg-yellow-400',
    image: '/postgres.png',
  },
  {
    title: 'SQL',
    description: 'sql ',
    bgColor: 'bg-gray-200',
    image: '/sql.png',
  },
];

const database = () => {
  return (
    <>
      <Header />
      <div className='grid lg:grid-cols-3 xs:grid-cols-1 p-20 space-x-5 space-y-5'>
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

export default database;
