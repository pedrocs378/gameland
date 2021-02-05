import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	height: 100px;
	padding-top: 25px;
	align-items: center;
	background-color: #fff;
	margin-bottom: 5px;
`

export const BackButton = styled(RectButton)`
	margin-left: 20px;
	height: 40px;
	width: 40px;
	align-items: center;
	justify-content: center;
`

export const Title = styled.Text`
	margin-right: 40px;
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
`
