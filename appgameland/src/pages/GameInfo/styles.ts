import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
	flex: 1;
`

export const GameImage = styled.ImageBackground`
	height: 500px;
	position: relative;
`

export const BackButton = styled(RectButton)`
	position: absolute;
	top: 50px;
	left: 20px;
	height: 50px;
	width: 50px;
	border-radius: 25px;
	background-color: #3c90ef;
	align-items: center;
	justify-content: center;
`

export const Content = styled.View`
	padding: 20px;
	
`

export const GameTitle = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
`

export const RatingContainer = styled.View`
	justify-content: flex-start;
`
