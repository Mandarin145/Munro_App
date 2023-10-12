import React from "react";
import { Nav, NavLink, NavMenu }
from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faClipboardList, faMapMarkerAlt, faMountain } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/weather" activeStyle>
            <FontAwesomeIcon icon={faCloudSun} />
		</NavLink>
		<NavLink to="/checklist" activeStyle>
            <FontAwesomeIcon icon={faClipboardList} />
		</NavLink>
		<NavLink to="/transport" activeStyle>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
		</NavLink>
		<NavLink to="/munroinfo" activeStyle>
            <FontAwesomeIcon icon={faMountain} />
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
