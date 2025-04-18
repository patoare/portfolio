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
<h1>Bienvenido al portfolio de Patricio Arellano</h1>
  <div className="main-content">
    <Cuerpo />
  </div>
    </>
  )
}

export default App
