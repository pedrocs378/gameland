import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import Button from '../../components/Button'

export const Container = styled.View`
	flex: 1;

	background-color: #3c90ef;
	justify-content: center;
	position: relative;
`

export const Content = styled.View`
	align-items: center;
	align-self: center;
	justify-content: center;
	position: absolute;
`

export const ContentBackground = styled.Image`
	position: absolute;
`

export const ContentTitle = styled.Text`
	margin-top: 20px;
	color: #fff;
	font-family: 'Poppins-SemiBold';
	font-size: 32px;
	max-width: 190px;
	text-align: center;
`

export const ContentSubtitle = styled.Text`
	font-family: 'Poppins-Regular';
	font-size: 16px;
	margin-top: 10px;
	color: #D3E5FF;
	max-width: 230px;
	text-align: center;
`

export const BackToLoginButton = styled(Button)`
	height: 60px;
	width: 80%;
	align-self: center;
	position: absolute;
	bottom: ${60 + getBottomSpace()}px;
`

export const BackToLoginButtonText = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 16px;
	color: #fff;
`

