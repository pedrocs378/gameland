import styled from 'styled-components/native'

export const Container = styled.ScrollView`
	flex: 1;
`

export const GameSection = styled.View`
	margin-top: 15px;
`

export const Title = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
	margin: 0 20px 10px;
`

export const Content = styled.View`
	padding: 0 15px;
	flex-direction: row;
	flex-wrap: wrap;
`

export const MessageBox = styled.View`
	width: 100%;
	height: 500px;

	align-items: center;
	justify-content: center;
`

export const MessageText = styled.Text`
	font-family: 'Poppins-Medium';
	font-size: 17px;
	color: #adadad;
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