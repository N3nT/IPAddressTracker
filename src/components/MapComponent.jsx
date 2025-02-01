import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = (props) => {
  const position = [props.x, props.y]
	return (
		<MapContainer
			center={position}
			zoom={13}
			style={{ height: '100%', width: '100%', zIndex: 1 }}
			dragging={false}
			zoomControl={false}
			doubleClickZoom={false}
			scrollWheelZoom={false}
			attributionControl={false}
		>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position}></Marker>
		</MapContainer>
	)
}

export default MapComponent
