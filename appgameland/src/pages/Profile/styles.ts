import styled from 'styled-components/native'
import { setLightness } from 'polished'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
	flex: 1;

	position: relative;
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

export const UserAvatar = styled.View`
	height: 180px;
	width: 180px;
	position: relative;
`

export const Avatar = styled.Image`
	height: 100%;
	border-radius: 90px;
`

export const ChangeAvatarButton = styled(RectButton)`
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
	text-align: center;
	margin-top: 20px;
	font-family: 'Poppins-SemiBold';
	color: #fff;
`

export const EditProfileButton = styled(RectButton)`
	background-color: ${setLightness(0.67, '#3c90ef')};
	height: 35px;
	padding: 0 15px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
`

export const EditProfileButtonText = styled.Text`
	color: white;
	font-family: 'Poppins-Regular';
`

export const SignOutButton = styled(RectButton)`
	background: #3c90ef;

	position: absolute;
	bottom: 10px;
	left: 20px;
	right: 20px;
	align-items: center;
	justify-content: center;
	height: 55px;
	border-radius: 8px;
`

