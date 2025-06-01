import './index.scss';
import { Category } from './types/types';
import { TimelineCircleBlock } from './components/timeline-circle-block/TimelineCircleBlock';

const data: Category[] = [
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

  {
    label: 'История',
    events: [
      {
        year: 2015,
        title: '2015',
        description:
          'История 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        title: '2016',
        description:
          'История Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        title: '2017',
        description:
          'История Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2022,
        title: '2022',
        description:
          'История Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    label: 'Книги',
    events: [
      {
        year: 2015,
        title: '2015',
        description:
          'Книги 13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        title: '2016',
        description:
          'Книги Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        title: '2017',
        description:
          'Книги Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2022,
        title: '2022',
        description:
          'Книги Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
];

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">
        Исторические <br /> даты
      </h1>
      <TimelineCircleBlock categories={data} />
    </div>
  );
};

export default App;
