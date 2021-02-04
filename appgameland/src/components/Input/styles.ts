import styled from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
	isFocused: boolean
}

export const Container = styled.View<ContainerProps>`
	width: 100%;
	background-color: #FAFAFC;
	padding: 0 10px;
	margin-top: 5px;
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
	border-left-width: 3px;
	border-left-color: ${({ isFocused }) => isFocused ? "#3c90ef" : "transparent" };

`

export const InputText = styled.TextInput`
	flex: 1;
	height: 64px;
	color: #6A6180;
	font-size: 14px;
	font-family: 'Poppins-Regular';
`

export const Icon = styled(FeatherIcon)`
	margin: 0 10px;
`