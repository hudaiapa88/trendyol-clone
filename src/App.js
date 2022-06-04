import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import BannerHeader from './layouts/BannerHeader';
import Footer from './layouts/Footer';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <BannerHeader></BannerHeader>
      <Navi></Navi>
      <Container>
        <Dashboard></Dashboard>
      </Container>
     <Footer></Footer>
    </div>
  );
}

export default App;
