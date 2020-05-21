import React from 'react';
import { Link } from '@reach/router';
import TMDB from '../images/theMovieDb.png';
import {
	StyledHeader,
	StyledTMDBLogo,
	StyledRMDBLogo
} from '../styles/StyledHeader';
const Header = () => {
	return (
		<StyledHeader>
			<div className='header-content'>
				<Link to='/'>
					<StyledRMDBLogo src={TMDB} alt='The Movie Database Logo' />
				</Link>
			</div>
		</StyledHeader>
	);
};

export default Header;
