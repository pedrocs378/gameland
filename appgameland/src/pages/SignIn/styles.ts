import { RectButton } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
	background-color: #F0F0F7;
`

export const Intro = styled.View`
	flex: 1;
	background-color: #3c90ef;

	align-items: center;
	justify-content: center;
	
	position: relative;
`

export const IntroBackground = styled.Image`
	width: 80%;
	height: 70%;
	position: absolute;
`

export const IntroTitle = styled.Text`
	color: #fff;
	font-size: 35px;
	font-family: 'Poppins-SemiBold';
`

export const IntroSubTitle = styled.Text`
	max-width: 150px;
	font-size: 15px;
	color: #d3e5ff;
	font-family: 'Poppins-Regular';
`

export const Content = styled.View`
	flex: 1;

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
	font-size: 26px;
	color: #32264D;
	font-family: 'Poppins-SemiBold';
`

export const RegisterButtonText = styled.Text`
	color: #3c90ef;
	font-size: 15px;
	font-family: 'Poppins-Regular';
`

export const RememberInput = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`

export const RememberInputCheckbox = styled(Checkbox)`
	border-radius: 8px;
	width: 24px;
	height: 24px;
`

export const RememberInputText = styled.Text`
	font-family: 'Poppins-Regular';
	font-size: 12px;
	color: #9C98A6;
`

export const ForgotPasswordText = styled.Text`
	font-family: 'Poppins-Regular';
	font-size: 12px;
	color: #9C98A6;
`


export const FormButton = styled(RectButton)`
	margin-top: 25px;
	border-radius: 8px;
	height: 56px;
	background-color: #04D361;
	align-items: center;
	justify-content: center;
`

export const FormButtonText = styled.Text`
	font-size: 16px;
	color: white;
	font-family: 'Poppins-SemiBold';
`


