import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
`

export const Intro = styled.View`
	height: 379px;
	background-color: #101823;

	align-items: center;
	justify-content: center;
`

export const IntroTitle = styled.Text`
	color: #fff;
	font-size: 35px;
`

export const IntroSubTitle = styled.Text`
	max-width: 130px;
	font-size: 15px;
	color: #d3e5ff;
	margin-top: 6px;
`

export const Content = styled.View`
	flex: 1;
	background-color: #F0F0F7;

	align-items: center;
	justify-content: center;
`

export const Form = styled.View`
	width: 80%;
`

export const FormRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const FormTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #32264D;
`

export const RegisterButton = styled.Text`
	color: #101823;
	font-size: 12px;
`

export const FormInput = styled.View`
	width: 100%;
	background-color: #FAFAFC;
	padding: 0 20px;
	margin-top: 5px;
	border-radius: 8px;
`

export const Input = styled.TextInput`
	height: 64px;
	color: #9C98A6;
	font-size: 14px;
`

export const FormButton = styled(RectButton)`
	border-radius: 8px;
	height: 56px;
	background-color: #04D361;
	align-items: center;
	justify-content: center;
`

export const FormButtonText = styled.Text`
	font-size: 16px;
	color: white;
	font-weight: bold;
`


