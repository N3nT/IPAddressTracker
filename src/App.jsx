import { useState } from 'react'

import Head from './components/Head'
import MapComponent from './components/MapComponent'

import 'leaflet/dist/leaflet.css'

function App() {
	const [ipInput, setIpInput] = useState('')
	const [cords, setCords] = useState({ x: -33.859336, y: 151.203624 })
	const [ip, setIp] = useState('1.1.1.1')
	const [location, setLocation] = useState('AU, New South Wales, Sydney')
	const [timeZone, setTimeZone] = useState('UTC +1100')
	const [isp, setIsp] = useState('CLOUDFLARENET')

	async function fetchData() {
		try {
			const response = await fetch(`https://ipapi.co/${ipInput}/json/`)
			const data = await response.json()
			console.log(data)
			if (!data.error) {
				setIp(data.ip)
				setLocation(`${data.country}, ${data.region}, ${data.city}`)
				setTimeZone(`UTC ${data.utc_offset}`)
				setCords({ x: data.latitude, y: data.longitude })
				setIsp(data.org)
			} else {
				setIp(data.ip)
				setLocation(`None`)
				setTimeZone(`None`)
				setCords({ x: 0, y: 0 })
				setIsp(data.reason)
			}
		} catch (error) {
			console.error('Błąd:', error)
		}
	}

	return (
		<div className='font-rubik h-screen overflow-hidden'>
			<Head
				ipInput={ipInput}
				setIpInput={setIpInput}
				setCords={setCords}
				fetchData={fetchData}
				ip={ip}
				location={location}
				timeZone={timeZone}
				isp={isp}
			/>
			<MapComponent x={cords.x} y={cords.y} />
		</div>
	)
}

export default App
