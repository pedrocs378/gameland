import styled from 'styled-components/native'

interface FormButtonProps {
	step: number
}

interface ButtonTextProps {
	isActive: boolean
}

export const Container = styled.ScrollView`
	background-color: #F0F0F7;

	position: relative;
`

export const Header = styled.View`
	margin-top: 30px;
	height: 100px;
	width: 85%;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	align-self: center;
`

export const BackButton = styled.TouchableOpacity`
	padding: 5px;
`

export const Intro = styled.View`
	flex: 1;
	
	align-items: flex-start;
	align-self: center;
	justify-content: center;
	width: 80%;
`

export const IntroTitle = styled.Text`
	color: #32264D;
	font-size: 32px;
	max-width: 236px;
	font-family: 'Poppins-SemiBold';
`

export const IntroSubTitle = styled.Text`
	max-width: 238px;
	font-size: 16px;
	color: #6A6180;
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

export const FormTitle = styled.Text`
	font-size: 26px;
	color: #32264D;
	font-family: 'Poppins-SemiBold';
`


export const FormButton = styled.TouchableOpacity<FormButtonProps>`
	margin-top: 25px;
	border-radius: 8px;
	height: 56px;
	align-items: center;
	justify-content: center;
`

export const FormButtonText = styled.Text<ButtonTextProps>`
	font-size: 16px;
	color: ${({ isActive }) => isActive ? '#fff' : '#9c98a6'};
	font-family: 'Poppins-SemiBold';
`


