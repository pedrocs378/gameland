import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
	flex: 1;
`

export const SearchButton = styled(RectButton)`
	flex-direction: row;
	align-items: center;
	margin: 60px 20px 0;
	background-color: #e1e1e1;
	padding: 10px;
	border-radius: 5px;
`

export const SearchButtonText = styled.Text`
	margin-left: 8px;
	font-family: 'Poppins-Regular';
	color: #777;
`

export const GameSection = styled.View`
	margin-top: 15px;
`

export const HeaderSection = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px 10px;
`

export const Title = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
`

export const ShowMoreButtonText = styled.Text`
	font-family: 'Poppins-Regular';
	color: #3c90ef;
`

export const Content = styled.ScrollView`
	height: 240px;
	padding-left: 15px;
`

export const Game = styled.TouchableOpacity`
	width: 160px;
	position: relative;

	margin-left: 5px;
`

export const GameImage = styled.Image`
	height: 100%;
	border-radius: 8px;
	
`


