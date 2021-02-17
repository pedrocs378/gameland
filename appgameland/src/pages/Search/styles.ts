import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
`

export const Header = styled.View`
	flex-direction: row;
	height: 100px;
	padding-top: 25px;
	align-items: center;
	background-color: #fff;
`

export const BackButton = styled(RectButton)`
	margin-left: 20px;
	height: 40px;
	width: 40px;
	align-items: center;
	justify-content: center;
`

export const SearchInput = styled.TextInput`
	flex: 1;
	margin: 0 10px;
	font-family: 'Poppins-Medium';
	color: #000;
	font-size: 18px;
`

export const ClearButton = styled(RectButton)`
	height: 40px;
	width: 40px;
	margin-right: 10px;
	align-items: center;
	justify-content: center;
`

export const Content = styled.ScrollView`
	flex: 1;
	background-color: #fff;
`

export const Game = styled(RectButton)`
	background-color: white;
	height: 90px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 15px 20px;
	border-bottom-width: 1px;
	border-bottom-color: #e6e6e6;
`

export const GameContainer = styled.View`
	flex-direction: row;
	height: 100%;
	align-items: center;
`

export const GameImage = styled.Image`
	height: 100%;
	width: 40px;
`

export const GameTitle = styled.Text`
	margin-left: 15px;
	font-family: 'Poppins-Medium';
	font-size: 15px;
	max-width: 80%;
`
