import React, { useState, useEffect } from 'react'

//styles
import './TripList.css'
export default function
    () {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
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

        </div>
    )
}
