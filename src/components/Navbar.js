import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Navbar extends React.Component{
    render(){
        return(
            <div>
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
            <h5 className="px-3" style={{color:"#FFFFFF"}}>Levain</h5>
    <SideNav.Toggle />
    
    <SideNav.Nav defaultSelected="/today">
        <NavItem eventKey="/today">
            <NavIcon>
            <NavLink to="/today"><i className="icon calendar outline" style={{ fontSize: '1.75em' }} /></NavLink>
            </NavIcon>
            <NavText>
                <NavLink to="/today">Today</NavLink>
            </NavText>
        </NavItem>
                <NavItem eventKey="/">
            <NavIcon>
            <NavLink to="/"><i className="icon calendar" style={{ fontSize: '1.75em' }} /></NavLink>
            </NavIcon>
            <NavText>
                <NavLink to="/">Production</NavLink>
            </NavText>
        </NavItem>
        <NavItem eventKey="/deliveries">
            <NavIcon>
            <NavLink to="/deliveries"><i className="icon truck" style={{ fontSize: '1.75em' }} /></NavLink>
            </NavIcon>
            <NavText>
                <NavLink to="/deliveries">Deliveries</NavLink>
            </NavText>
        </NavItem>
        <hr></hr>
        <NavItem eventKey="/customers">
            <NavIcon>
            <NavLink to="/customers"><i className="icon users" style={{ fontSize: '1.75em' }} /></NavLink>
            </NavIcon>
            <NavText>
                <NavLink to="/customers">Customers</NavLink>
            </NavText>
        </NavItem>
        <NavItem eventKey="/orders">
            <NavIcon>
            <NavLink to="/orders"><i className="icon folder open" style={{ fontSize: '1.75em' }} /></NavLink>
            </NavIcon>
            <NavText>
                <NavLink to="/orders">Orders</NavLink>
            </NavText>
        </NavItem>
        <NavItem eventKey="/products">
            <NavIcon>
            <NavLink to="/products"><i className="icon align center" style={{ fontSize: '1.75em' }} /></NavLink>
            </NavIcon>
            <NavText>
                <NavLink to="/products">Products</NavLink>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>    
            </div>

        )
    }
}

export default Navbar;