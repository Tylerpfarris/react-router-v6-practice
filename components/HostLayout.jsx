import { Outlet } from 'react-router-dom'
import { HostNav } from './HostNav'

export const HostLayout = () => {
    return (
        <>
            <HostNav />
            <Outlet />
        </>
    )
}
