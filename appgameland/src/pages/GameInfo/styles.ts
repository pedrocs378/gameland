import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
	flex: 1;
`

export const GameImage = styled.ImageBackground`
	height: 600px;
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
	
`

export const Section = styled.View`
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
`

export const SectionTitle = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
`

export const RatingContainer = styled.View`
	flex-direction: row;
`

export const ReviewsCount = styled.Text`
	margin-left: 10px;
	font-family: 'Poppins-Regular';
	color: #90969c;
`

export const ThemesContainer = styled.View`
	flex-direction: row;
	margin-top: 10px;
`

export const Theme = styled.View`
	margin-right: 10px;
	border: 2px solid #3c90ef;
	padding: 2px 10px;
	border-radius: 5px;
`

export const ThemeText = styled.Text`
	font-family: 'Poppins-SemiBold';
`

export const GameDescription = styled.Text`
	font-size: 12px;
	font-family: 'Poppins-Regular';
	color: #90969c;
`

export const ReleaseContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;
`

export const ReleaseSection = styled.View``

export const ReleaseSectionTitle = styled.Text`
	font-family: 'Poppins-SemiBold';
	color: #000;
`

export const ReleaseSectionContent = styled.Text`
	font-family: 'Poppins-SemiBold';
	margin-top: -6px;
	color: #90969c;
`
