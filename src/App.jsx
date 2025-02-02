import { useState } from 'react';

import Head from "./components/Head";
import MapComponent from "./components/MapComponent";

import 'leaflet/dist/leaflet.css';


function App() {
  const [ipInput, setIpInput] = useState('');
  const [cords, setCords] = useState({x: 32.55, y:23.123});

  return (
    <div className="font-rubik h-screen overflow-hidden">
        <Head ipInput={ipInput} setIpInput={setIpInput} setCords={setCords}/>
        <MapComponent x={cords.x} y={cords.y}/>
    </div>
  )
}

export default App
