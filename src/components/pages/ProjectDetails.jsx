import React from 'react'
import underLine from '../../assets/img/line.svg'

export default function ProjectDetails() {
    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e] w-full'>
                <div className="intro text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>My <span className='text-[#56b887] mb-5'>Projects</span></p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>Live Weather App</h3>
                            <div className="flex justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-[#8b9f9f] mb-3 mt-5'><span className='text-[#56b887] mb-5'>Technologies used: </span>Angular, Live weather API </p>
                <p className='text-[#8b9f9f] my-2 text-justify md:text-left'><span className='text-[#56b887] mb-5'>Description: </span>A Live Weather App in Angular is a web application that provides real-time weather information using a live weather API. The app allows users to input their city or detect their current location, and it displays detailed weather data such as temperature, humidity, wind speed, and conditions. The app fetches data from a weather API (like OpenWeatherMap or WeatherAPI) using HTTP requests and dynamically updates the UI to show current weather conditions</p>

                <p className='text-[#8b9f9f] mb-3 mt-5'><span className='text-[#56b887] mb-5'>Key features: </span></p>
                <ul className='text-[#8b9f9f] custom-bullets'>
                    <li>Real-time weather updates.</li>
                    <li>City search and location-based weather.</li>
                    <li>Responsive design for various devices.</li>
                    <li>Integration with live weather API (e.g., OpenWeatherMap).</li>
                </ul>
                <p className='text-[#8b9f9f] mb-3 mt-5 text-justify md:text-left'>
                    A Live Weather App built using Angular, TypeScript, and a live weather API integrates real-time weather data into a user-friendly interface. By leveraging Angular's HttpClient service and the subscribe method, the app makes asynchronous API requests to retrieve weather data for a specified location. The subscribe method handles the observable returned by the API request, ensuring that the data is fetched asynchronously and the UI updates dynamically once the response is received. TypeScript's strong typing ensures that the API responses are handled efficiently, enhancing both performance and reliability. This combination provides a seamless user experience, displaying current weather details such as temperature, humidity, wind speed, and conditions.
                </p>
            </div>
        </>
    )
}
