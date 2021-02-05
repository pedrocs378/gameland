import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
	flex: 1;
`

export const CardUser = styled.View`
	height: 440px;
	background-color: #3c90ef;
	justify-content: center;
	align-items: center;

	position: relative;

`

export const CardUserBackground = styled.Image`
	position: absolute;
	height: 320px;
`

export const UserImageContainer = styled.View`
	height: 180px;
	width: 180px;
	position: relative;
`

export const UserImage = styled.Image`
	height: 100%;
	border-radius: 90px;
`

export const ChangeImageButton = styled(RectButton)`
	position: absolute;
	right: 0;
	bottom: 0;
	height: 50px;
	width: 50px;
	border-radius: 25px;
	align-items: center;
	justify-content: center;
	background-color: #04D361;
`

export const UserName = styled.Text`
	font-size: 28px;
	margin-top: 20px;
	font-family: 'Poppins-SemiBold';
	color: #fff;
`

export const UserContainer = styled.View`
	position: relative;
	/* flex: 1; */
`

export const UserData = styled.View`
	background-color: #fff;
	position: absolute;
	top: -50px;
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

