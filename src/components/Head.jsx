import Accessibility from 'lucide-react';

function Head(){
    return(
        <div>
            <div>
                <input type="text" placeholder="Search for any IP address or domain"/>
                <button><Accessibility /></button>
            </div>
            <div>
                <div>
                    <span>ip adress</span>
                    <span>192.168.1.1</span>
                </div>
                <div>
                    <span>location</span>
                    <span>Brooklyn, NY</span>
                </div>
                <div>
                    <span>timezone</span>
                    <span>UTC -05:00</span>
                </div>
                <div>
                    <span>isp</span>
                    <span>SpaceX Starlink</span>
                </div>
            </div>
        </div>
    )
}

export default Head;