import styled from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
	width: 100%;
	background-color: #FAFAFC;
	padding: 0 10px;
	margin-top: 5px;
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
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