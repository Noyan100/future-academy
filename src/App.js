import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Header from './components/Navigation/Navigation';
import Slider from './components/Header/Header';
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
