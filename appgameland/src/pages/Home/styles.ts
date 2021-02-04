import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
	flex: 1;
	padding: 0 20px;
`

export const SearchBox = styled(RectButton)`
	flex-direction: row;
	align-items: center;
	margin-top: 60px;
	background-color: #e1e1e1;
	padding: 10px;
	border-radius: 5px;
`

export const SearchBoxText = styled.Text`
	margin-left: 8px;
	font-family: 'Poppins-Regular';
	color: #777;
`
