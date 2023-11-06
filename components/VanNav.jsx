import { NavLink } from 'react-router-dom'

export const VanNav = () => {
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    }
    return (
        <div>
            <NavLink
                end
                to="."
                style={({ isActive }) => (isActive ? activeStyle : null)}
            >
                Details
            </NavLink>
            <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? activeStyle : null)}
            >
                Pricing
            </NavLink>
            <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeStyle : null)}
            >
                Photos
            </NavLink>
        </div>
    )
}
