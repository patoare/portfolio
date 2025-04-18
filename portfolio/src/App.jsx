import videBkg from './assets/videoBkg.MP4';
import NavBar from './components/NavBar';
import Cuerpo from './components/Cuerpo';
import './App.css';

function App() {
  

  return (
    <>
    <NavBar/>
    <video
  src={videBkg}
  autoPlay
  loop
  muted
  playsInline
  className="video-background"
/>
     
  <div className="main-content">
    <h1>Vite + React</h1>
    <Cuerpo />
  </div>
    </>
  )
}

export default App
