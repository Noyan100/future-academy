import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

import { styles } from './scss/_app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
