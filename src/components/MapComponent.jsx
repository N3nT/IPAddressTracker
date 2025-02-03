import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '../node_modules/leaflet/dist/images/marker-icon-2x.png',
    iconUrl: '../node_modules/leaflet/dist/images/marker-icon.png',
    shadowUrl: '../node_modules/leaflet/dist/images/marker-shadow.png'
});

function ChangeView({ center, zoom }) {
	const map = useMap()

	useEffect(() => {
		map.setView(center, zoom)
	}, [center, zoom, map])

	return null
}

const MapComponent = (props) => {
	const [cords, setCords] = useState({ x: props.x, y: props.y })
	useEffect(() => {
		setCords({ x: props.x, y: props.y })
	}, [props.x, props.y])

	return (
		<MapContainer
			center={[cords.x, cords.y]}
			zoom={9}
			style={{ height: '100%', width: '100%', zIndex: 1 }}
			zoomControl={false}
			doubleClickZoom={false}
			attributionControl={false}
			className='fixed'
		>
			<ChangeView center={[cords.x, cords.y]} zoom={9} />
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[cords.x, cords.y]}></Marker>
		</MapContainer>
	)
}

export default MapComponent
