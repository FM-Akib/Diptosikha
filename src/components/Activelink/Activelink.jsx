import { NavLink } from 'react-router-dom';
import './Activelink.css';

const Activelink = ({ to, children, onClick }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ""} onClick={onClick}>
            {children}
        </NavLink>
    );
};

export default Activelink;
