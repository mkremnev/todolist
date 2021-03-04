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
		padding-left: 20px;
	}
`;

const commonField = css`
	background: #DCDCDC;
	border: 1px solid #DCDCDC;
	position: relative;
	width: 500px;
	height: 50px;
	box-sizing: border-box;
	padding: 15px 10px;
	border-radius: 15px;
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
	z-index: 1;
`;

const notVisibleField = css`
	z-index: 3;
	animation: ${changeColor} 0.3s linear forwards;
`;

export const TextArea = styled.textarea`
	${commonField}
	${({ isClicked }: StyledProps) => (isClicked ? notVisibleField : visibleField)}
`;