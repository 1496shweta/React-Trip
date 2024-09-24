import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg-px-56 xl:px-60 px-5 mt-10">
     <h2 className='font-bold text-3xl'> Tell us your travel Perference </h2>
     <p className='mt-3 text-gray-500 text-xl'> Just provide some basic information of the about your trip so we can customize it.. </p>
     <div className='mt-10'>  
      <div> 
        <h2 className='text-xl my-3 font-medium'> what is your destination of your choice?</h2>
        <GooglePlacesAutocomplete 
        apiKey=''
        />
      </div>
     </div>
    </div>
  )
}

export default  CreateTrip