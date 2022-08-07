import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import WelcomeInfo from './components/WelcomeInfo/WelcomeInfo';
import InfoBlock from './components/InfoBlock/InfoBlock';
import HelpForm from './components/HelpForm/HelpForm';

import './scss/_app.scss';
import Tab from './components/Tab/Tab';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Tab />
      <Video />
      <Feedback />
      <WelcomeInfo />
      <InfoBlock />
      <HelpForm />
      <Footer />
    </div>
  );
}

export default App;
