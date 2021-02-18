import styled from 'styled-components/native'
import { setLightness } from 'polished'
import { RectButton } from 'react-native-gesture-handler'

interface AddGameButtonProps {
	isGameAdded: boolean
}

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
	height: 60px;
	width: 60px;
	border-radius: 15px;
	opacity: 0.8;
	background-color: ${setLightness(0.6, '#3c90ef')};
	align-items: center;
	justify-content: center;
`

export const AddGameButton = styled(RectButton)<AddGameButtonProps>`
	position: absolute;
	bottom: -30px;
	right: 30px;
	background-color: ${({ isGameAdded }) => isGameAdded ? '#ff2000' : '#04D361'};
	height: 60px;
	width: 170px;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
`

export const AddGameButtonText = styled.Text`
	font-family: 'Poppins-SemiBold';
	color: #fff;
	font-size: 17px;
`


export const Content = styled.View`
	z-index: -1;
`

export const Section = styled.View`
	background-color: #fff;
	padding: 28px 20px 15px;
	border-radius: 8px;
	margin-bottom: 20px;
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
export const RecommendedGames = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 5px;
`

export const Recommended = styled.TouchableOpacity`
	height: 160px;
	width: 107px;
	margin-right: 5px;
	margin-bottom: 5px;
	border-radius: 5px;
	overflow: hidden;
`

export const RecommendedImage = styled.Image`
	height: 100%;
`