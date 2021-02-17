import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
	height: 100px;
	padding-top: 25px;
	align-items: center;
	justify-content: flex-end;
	background-color: #fff;
	margin-bottom: 5px;
	background-color: transparent;
`

export const SearchButton = styled(RectButton)`
	flex-direction: row;
	align-items: center;
	margin: 0 20px;
	background-color: #e1e1e1;
	padding: 10px;
	border-radius: 5px;
	width: 92%;
`

export const SearchButtonText = styled.Text`
	margin-left: 8px;
	font-family: 'Poppins-Regular';
	color: #777;
`