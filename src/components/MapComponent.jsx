import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = (props) => {
	const [cords, setCords] = useState({x: props.x, y: props.y})
	console.log(props.y);
	useEffect(() => {
		setCords({x: props.x, y: props.y});
	}, [props.x, props.y]);

	return (
		<MapContainer
			center={[cords.x, cords.y]}
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
			<Marker position={[cords.x, cords.y]}></Marker>
		</MapContainer>
	)
}

export default MapComponent
