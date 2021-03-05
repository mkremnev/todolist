import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/core';
import { StyledProps } from "./Field";

const changeColor = keyframes`
	from {
		background-color: #DCDCDC;
		padding-left: 10px;
	}
	to {
		background-color: #FFFFFF;
		padding-left: 50px;
	}
`;

const commonField = css`
	background: #DCDCDC;
	border: 1px solid #DCDCDC;
	position: relative;
	width: 645px;
	height: 50px;
	box-sizing: border-box;
	padding: 17px 230px 15px 10px;
	border-radius: 10px;
	outline: none;
	resize: none;
	overflow: hidden;
	&:hover {
		background: #D3D3D3;
		cursor: pointer
	}
	
	::-webkit-input-placeholder, ::placeholder {
		color: #000000;
	}
	
	&:focus::placeholder {
		color: #D0D0D0;
		transition: color 0.4s ease;
	}
`;

const visibleField = css`
	z-index: 200;
`;

const notVisibleField = css`
	z-index: 100;
	animation: ${changeColor} 0.3s linear forwards;
`;

export const TextArea = styled.textarea`
	${commonField}
	${({ isClicked }: StyledProps) => (isClicked ? notVisibleField : visibleField)}
`;