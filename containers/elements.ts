import styled from 'styled-components';

export const Image = styled.img`
	width: 60%;

	&.hidden {
		visibility: hidden;
		overflow: hidden;
		width: 0;
		height: 0;
	}

	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const BackButton = styled.button`
	border: 3px solid #1050ff;
	color: #1050ff;
	border-radius: 5px;
	font-size: 1em;
	padding: 10px;
	cursor: pointer;
	background-color: white;
	margin-top: 20px;

	:hover {
		background: #1050ff;
		color: white;
	}
`;

export const InputSubmit = styled.input`
	display: inline-block;
	border-top: 4px solid #1050ff;
	border-bottom: 4px solid #1050ff;
	border-right: 4px solid #1050ff;
	border-left: 1px solid #1050ff;
	color: #1050ff;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	font-size: 1.4em;
	padding: 15px;
	cursor: pointer;
	background-color: white;
	margin: 0;

	:hover {
		background: #1050ff;
		color: white;
	}
`;

export const InputText = styled.input`
	padding: 15px;
	font-size: 1.4em;
	box-sizing: border-box;
	outline: none;
	outline-width: 0;
	width: 400px;
	border: 4px solid #1050ff;
	border-top-left-radius: 5px;
	border-right: 3px solid #1050ff;
	border-bottom-left-radius: 5px;
	color: #1050ff;
	background: ${(props: { invalidUrl: boolean }) => (props.invalidUrl ? '#ffefef' : 'transparent')};
	@media screen and (max-width: 500px) {
		width: 200px;
	}
`;
