import styled from 'styled-components';

export const StyledHeader = styled.div`
	background: #1c1c1c;
	padding: 0 20px;
	box-sizing: border-box;

	.header-content {
		max-width: 1280px;
		min-height: 120px;
		padding: 20px 0px;
		margin: 0 auto;
		box-sizing: border-box;

		@media screen and (max-width: 500px) {
			max-width: 1280px;
			min-height: 0px;
		}
	}
`;

export const StyledRMDBLogo = styled.img`
	width: 75px;

	@media screen and (max-width: 500px) {
		width: 65px;
		margin-top: 5px;
	}
`;
