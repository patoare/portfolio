import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Goody from '../assets/goody.png';
import Fisio from '../assets/fisio.png';

const Cuerpo = () => {
    return(
        <div className="cuerpo">
        <Card
  title="Ejemplo"
  text="Este es un texto de ejemplo para la card."
  updated="Actualizado hace 3 min"
  imageTop={Goody}
  style={{ width: "300px" }} // opcional
/>


<Card
  title="Ejemplo"
  text="Este es un texto de ejemplo para la card."
  updated="Actualizado hace 3 min"
  imageTop={Fisio}
  style={{ width: "300px" }} // opcional
/>

        </div>
    )
}
export default Cuerpo;
