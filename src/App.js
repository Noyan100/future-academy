import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Video from './components/Video/Video';
import WelcomeInfo from './components/WelcomeInfo/WelcomeInfo';

import './scss/_app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Video />
      <Feedback />
      <WelcomeInfo />
      <Footer />
    </div>
  );
}

export default App;
