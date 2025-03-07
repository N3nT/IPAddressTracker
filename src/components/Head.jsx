import { ChevronRight } from 'lucide-react'

function Head(props) {
	const handleIpInputChange = (e) => {
		props.setIpInput(e.target.value)
	}

    const handleIpButtonClick = () => {
        props.fetchData();
        props.setIpInput('');
    }

	return (
		<>
			<div className='bg-[url(./assets/pattern-bg-mobile.png)] sm:bg-[url(./assets/pattern-bg-desktop.png)] bg-center bg-no-repeat bg-cover w-full h-1/3 flex flex-col items-center z-10 relative min-h-[300px]'>
				<h1 className='text-2xl text-center text-white font-bold py-5 sm:text-4xl sm:mt-10'>
					IP Address Tracker
				</h1>
				<div className='flex w-full justify-center p-5'>
					<input
						className='bg-white rounded-l-xl p-3 text-lg w-full max-w-[500px] sm:p-5'
						type='text'
						placeholder='Search for any IP address or domain'
						value={props.ipInput}
						onChange={handleIpInputChange}
					/>
					<button
						className='flex items-center justify-center rounded-r-xl bg-veryDarkGray px-3'
						onClick={handleIpButtonClick}
					>
						<ChevronRight color='white' />
					</button>
				</div>
				<div className='p-5 w-full flex justify-center'>
					<div className='bg-white py-5 rounded-xl flex flex-col items-center w-full sm:flex-row sm:justify-around sm:h-[200px] max-w-[1000px] sm:mt-8'>
						<div className='flex flex-col items-center justify-center mb-5 sm:mb-0 sm:items-start sm:p-5'>
							<span className='uppercase text-xs lg:text-lg text-darkGrey font-bold tracking-widest'>
								ip adress
							</span>
							<span className='font-bold text-xl lg:text-2xl'>{props.ip}</span>
						</div>
                        <div className='bg-slate-200 w-[2px] h-3/4 hidden sm:block'></div>
						<div className='flex flex-col items-center justify-center mb-5 sm:mb-0 sm:items-start sm:p-5'>
							<span className='uppercase text-xs lg:text-lg text-darkGrey font-bold tracking-widest'>
								location
							</span>
							<span className='font-bold text-xl lg:text-2xl'>{props.location}</span>
						</div>
                        <div className='bg-slate-200 w-[2px] h-3/4 hidden sm:block'></div>
						<div className='flex flex-col items-center justify-center mb-5 sm:mb-0 sm:items-start sm:p-5'>
							<span className='uppercase text-xs lg:text-lg text-darkGrey font-bold tracking-widest'>
								timezone
							</span>
							<span className='font-bold text-xl lg:text-2xl'>{props.timeZone}</span>
						</div>
                        <div className='bg-slate-200 w-[2px] h-3/4 hidden sm:block'></div>
						<div className='flex flex-col items-center sm:items-start sm:p-5'>
							<span className='uppercase text-xs lg:text-lg text-darkGrey font-bold tracking-widest'>
								isp
							</span>
							<span className='font-bold text-xl lg:text-2xl'>{props.isp}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Head
