import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
    const [vans, setVans] = React.useState([])

    const fetchVans = async () => {
        const response = await fetch('api/vans')
        const { vans } = await response.json()
        setVans(vans)
    }
    useEffect(() => {
        fetchVans()
    }, [])

    const vanElements = vans.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1 className="uppercase text-2xl">Explore our van options</h1>
            <div className="van-list">{vanElements}</div>
        </div>
    )
}
export default Vans
