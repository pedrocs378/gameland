import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
	flex: 1;
	/* background-color: #000; */
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

export const RefreshContainer = styled.RefreshControl`
	/* position: relative; */
`

export const HeaderSection = styled.View`
	flex-direction: row;
	align-items: center;
	margin: 0 20px 10px;
	margin-left: 20px;
	/* background-color: #000; */
	height: 30px;
	width: 300px;
`

export const Title = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
	margin: 0 20px 10px;
`

export const Content = styled.View`
	padding-left: 15px;
	flex-direction: row;
	flex-wrap: wrap;
`

export const Game = styled.TouchableOpacity`
	width: 145px;
	height: 220px;

	margin-left: 5px;
	margin-bottom: 8px;
`

export const GameImage = styled.Image`
	height: 100%;
	border-radius: 8px;
	
`