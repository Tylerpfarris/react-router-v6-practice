import React, { useEffect, useState } from 'react'
import { VanNav } from './VanNav'
import { Link, Outlet, useParams } from 'react-router-dom'

export const HostVanLayout = () => {
    const [currentVan, setCurrentVan] = useState(null)
    const { id } = useParams()
    const fetchHostVanDetails = async () => {
        const res = await fetch(`/api/host/vans/${id}`)
        const { vans } = await res.json()
        setCurrentVan(vans[0])
    }
    useEffect(() => {
        fetchHostVanDetails()
    }, [])

    if (null || !currentVan) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <section>
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <VanNav />
                </nav>

                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}
