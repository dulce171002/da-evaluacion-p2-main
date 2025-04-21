import datos from './datos.json';
import './tarjetas.css';

export default function Card() {
  return (
    <div className="tarjetas-container">
      {datos.map((estudiante, index) => (
        <div key={index} className="tarjeta">
          <h2>Tarjeta</h2>
          <fieldset className="legend">
            <ul>
              <li className="letras">Licenciatura:</li>
              <p className="letras">{estudiante.Licenciatura}</p>

              <li className="letras">Tiempo:</li>
              <p className="letras">{estudiante.Duracion}</p>

              <li className="letras">Nombre:</li>
              <p className="letras">{estudiante.nombre}</p>
            </ul>
          </fieldset>
        </div>
      ))}
    </div>
  );
}
