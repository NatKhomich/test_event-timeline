import { useState } from 'react';
import { CircleMenu } from './components/circle-menu/CircleMenu';
import { EventSlider } from './components/event-slider/EventSlider';
import './index.scss';
import { Category } from './types/types';

const data: any[] = [
  {
    label: 'Наука',
    events: [
      {
        year: 2015,
        title: '2015',
        description:
          'Наука 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        title: '2016',
        description:
          'Наука Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        title: '2017',
        description:
          'Наука Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2022,
        title: '2022',
        description:
          'Наука Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },

  {
    label: 'Литература',
    events: [
      {
        year: 2012,
        title: '2012',
        description: 'Литература Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        year: 2016,
        title: '2016',
        description:
          'Литература Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2020,
        title: '2020',
        description:
          'Литература Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2024,
        title: '2024',
        description:
          'Литература Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },

  {
    label: 'Кино',
    events: [
      {
        year: 2012,
        title: '2012',
        description: 'Кино Lorem ipsum dolor.',
      },
      {
        year: 2016,
        title: '2016',
        description: 'Кино Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod',
      },
      {
        year: 2020,
        title: '2020',
        description: 'Кино Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod',
      },
      {
        year: 2022,
        title: '2022',
        description: 'Кино Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod',
      },
    ],
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(data[0]);
  return (
    <div className="container">
      <div className="lines" />
      <div className="content">
        <h1 className="heading">
          Исторические <div>даты</div>
        </h1>
        <CircleMenu categories={data} onSelect={setSelectedCategory} />
        {selectedCategory && <EventSlider events={selectedCategory.events} />}
      </div>
    </div>
  );
};

export default App;
