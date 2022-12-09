import styled from 'styled-components';

interface ColorLinkType {
	borderColor: string;
	disabled: boolean;
}

export const ColorLink = styled.span`
	display: inline-block;
	padding-bottom: 3px;
	border-bottom: 3px solid red;
	border-color: ${(props: ColorLinkType) => props.borderColor};
	opacity: ${(props: ColorLinkType) => (props.disabled ? 0.2 : 1)};
	pointer-events: ${(props: ColorLinkType) => (props.disabled ? 'none' : null)};
	cursor: ${(props: ColorLinkType) => (props.disabled ? 'none' : 'pointer')};
	transition: opacity 0.2s ease;
`;

export const Popover = styled.div`
	position: absolute;
	z-index: 2;
	top: 44px;
`;

export const Panel = styled.div`
	margin-top: 10px;
	font-size: 1em;
	font-weight: normal;
	position: relative;
	text-align: left;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 500px) {
		text-align: center;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
