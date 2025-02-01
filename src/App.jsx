import Head from "./components/Head";
import MapComponent from "./components/MapComponent";

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="font-rubik h-screen overflow-hidden">
        <Head/>
        <MapComponent x={32.55} y={23.123}/>
    </div>
  )
}

export default App
