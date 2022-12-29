
import './App.css';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Nav/Nav';
import Row from './Component/Row/Row';
import requests from './requests';

function App() {
  return (

 <div className='App'>
 <Nav />
 <Banner />
<Row
 title="NETFLIX ORIGINALS"
  fetchUrl={requests.fetchNetflixOriginals}
  isLargeRow
 />
 
<Row title="Trending Now" 
  fetchUrl={requests.fetchTrending}
 />

<Row title="Top Rated" 
  fetchUrl={requests.fetchTopRatedMovies}
 />

<Row title="ActionMovies" 
  fetchUrl={requests.fetchActionMovies}
 />
 
 <Row title="Comedy Movies" 
  fetchUrl={requests.fetchComedyMovies}
 />
 <Row title="Horror Movies" 
  fetchUrl={requests.fetchHorrorMovies}
 />

<Row title="Documentaries Movies" 
  fetchUrl={requests.fetchDocumentaries}
 />
<Footer />
 </div>
  );
}

export default App;
