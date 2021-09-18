import { CardQuiz } from './components/card-quiz/CardQuiz';

import './styles.css';
import './normalize.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={ store } > 
      <div className="container-card-quiz">
        <CardQuiz />
      </div>
    </Provider>
  );
}

export default App;
