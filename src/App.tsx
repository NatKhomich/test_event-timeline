import './index.scss';
import { TimelineCircleBlock } from './components/features/timeline-circle-block';
import { timelineData } from './constants/timelineData';
import { Heading } from './components/ui/heading';

const App = () => {
  return (
    <div className="container">
      <Heading />
      <TimelineCircleBlock categories={timelineData} />
    </div>
  );
};

export default App;
