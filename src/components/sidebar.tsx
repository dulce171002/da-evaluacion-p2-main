import { Home, Images, Settings , Milk } from "lucide-react";
function App() {
  return (
    
  <div style={{width:'25%',right:'0'}} className="w3-sidebar w3-bar-block">
  <h5 className="w3-bar-item">Menu</h5>
  <a href="../index.html" className="w3-bar-item w3-button"><Home size={15}/> Inicio</a>
  <a href="../tarjeta.html" className="w3-bar-item w3-button"><Milk size={15}/>Productos</a>
  <a href="../index.html" className="w3-bar-item w3-button"><Settings size={15}/>Configuraciones</a>
  <a href="#" className="w3-bar-item w3-button"><Images size={15}/>Galeria</a>
</div>
  );
}

export default App;
