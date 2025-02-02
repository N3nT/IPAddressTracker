import { useState } from 'react';

import { ChevronRight } from 'lucide-react';

const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&ipAddress=`

function Head(props){
    const [ip, setIp] = useState('192.168.1.1');
    const [location, setLocation] = useState('Brooklyn, NY 10001');
    const [timeZone, setTimeZone] = useState('UTC -05:00');
    const [isp, setIsp] = useState('SpaceX Starlink');
    

    async function fetchData() {
        try {
          const response = await fetch(`${URL}${props.ipInput}`);
          const data = await response.json();
          console.log(data);
          setIp(data.ip);
          setLocation(`${data.location.country}, ${data.location.region}, ${data.location.city}`)
          setTimeZone(`UTC ${data.location.timezone}`);
          props.setCords({x: data.location.lng, y: data.location.lat})
          setIsp(data.isp);
        } catch (error) {
          console.error('Błąd:', error);
        }
    }
    
    const handleIpInputChange = (e) => {
        props.setIpInput(e.target.value)
    }

    return(
        <>
            <div className="bg-[url(./assets/pattern-bg-mobile.png)] sm:bg-[url(./assets/pattern-bg-desktop.png)] bg-center bg-no-repeat bg-cover w-full h-1/3 flex flex-col items-center z-10 relative">
                <h1 className="text-2xl text-center text-white font-bold py-5">IP Address Tracker</h1>
                <div className='flex w-full justify-center p-5'>
                    <input className="bg-white rounded-l-xl p-3 text-lg w-full max-w-[500px]" type="text" placeholder="Search for any IP address or domain" value={props.ipInput} onChange={handleIpInputChange}/>
                    <button className='flex items-center justify-center rounded-r-xl bg-veryDarkGray px-3' onClick={fetchData}><ChevronRight color='white'/></button>
                </div>
                <div className="p-5 w-full flex justify-center">
                    <div className="bg-white py-5 rounded-xl mt-5 flex flex-col items-center w-full sm:flex-row sm:justify-around sm:h-[150px] max-w-[900px] sm:mt-8">
                        <div className="flex flex-col items-center justify-center mb-5 sm:mb-0 sm:items-start">
                            <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">ip adress</span>
                            <span className="font-bold text-xl">{ip}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center mb-5 sm:mb-0 sm:items-start">
                            <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">location</span>
                            <span className="font-bold text-xl">{location}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center mb-5 sm:mb-0 sm:items-start">
                            <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">timezone</span>
                            <span className="font-bold text-xl">{timeZone}</span>
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                            <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">isp</span>
                            <span className="font-bold text-xl">{isp}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head;