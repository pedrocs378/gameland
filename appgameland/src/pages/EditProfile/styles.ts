import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	position: relative;
`

export const UserData = styled.View`
	background-color: #fff;
	width: 90%;
	align-self: center;
	border-radius: 10px;
	padding: 30px 25px;
`

export const DataSection = styled.View`
`

export const TitleSection = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 20px;
	color: #32264D;
	margin-bottom: 10px;
	padding-bottom: 5px;
	border-bottom-width: 1px;
	border-bottom-color: #E6E6F0;
`

export const InputSection = styled.View`
	margin-top: 20px;
`

export const InputTitle = styled.Text`
	color: #9C98A6;
	font-family: 'Poppins-Regular';
	font-size: 12px;
`

export const Input = styled.TextInput`
	background-color: #FAFAFC;
	border-width: 1px;
	border-color: #E6E6F0;
	margin-top: 8px;
	border-radius: 8px;
	padding: 17px 30px;
	color: #6A6180;
	font-family: 'Poppins-Regular';
	font-size: 14px;
`

export const SaveButton = styled(RectButton)`
	position: absolute;
	bottom: 10px;
	right: 10px;
	height: 60px;
	width: 60px;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
	background-color: #3c90ef;
`