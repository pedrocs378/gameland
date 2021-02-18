import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
	justify-content: center;
	background-color: #fff;
	padding: 10px 0;
	margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : getStatusBarHeight()}px;
	background-color: transparent;
`

export const SearchButton = styled(RectButton)`
	flex-direction: row;
	align-items: center;
	margin: 0 20px;
	background-color: #e1e1e1;
	padding: 10px;
	border-radius: 5px;
	width: 92%;
`

export const SearchButtonText = styled.Text`
	margin-left: 8px;
	font-family: 'Poppins-Regular';
	color: #777;
`