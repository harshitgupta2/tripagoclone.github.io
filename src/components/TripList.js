import React, { useState, useEffect } from 'react'

//styles
import './TripList.css'
export default function
    () {
    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setTrips(json))
    }, [])

    console.log(trips)

    return (
        <div className="trip-list">
            <h1>Trip List</h1>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h2>{trip.title}</h2>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                    European Trips
                </button>
                <button onClick={() => setUrl('http://localhost:3000/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
