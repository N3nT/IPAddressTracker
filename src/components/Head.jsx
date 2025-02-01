import { ChevronRight } from 'lucide-react';

function Head(){
    return(
        <>
            <div className="bg-[url(./assets/pattern-bg-mobile.png)] bg-center bg-no-repeat bg-cover w-full h-1/3 flex flex-col items-center">
                <h1 className="text-2xl text-center text-white font-bold py-5">IP Address Tracker</h1>
                <div className='flex'>
                    <input className="bg-white rounded-l-xl p-3 text-lg" type="text" placeholder="Search for any IP address or domain"/>
                    <button className='flex items-center justify-center rounded-r-xl bg-veryDarkGray px-3'><ChevronRight color='white'/></button>
                </div>
                <div className="bg-white px-15 py-5 rounded-xl mt-5 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-5">
                        <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">ip adress</span>
                        <span className="font-bold text-xl">192.168.1.1</span>
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">location</span>
                        <span className="font-bold text-xl">Brooklyn, NY 10001</span>
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">timezone</span>
                        <span className="font-bold text-xl">UTC -05:00</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="uppercase text-xs text-darkGrey font-bold tracking-widest">isp</span>
                        <span className="font-bold text-xl">SpaceX Starlink</span>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 w-full h-full">

            </div>
        </>
    )
}

export default Head;