import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const SecondaryLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default SecondaryLayout;