import styled from 'styled-components/native'
import { FlatList, RectButton } from 'react-native-gesture-handler'

import SearchHeader from '../../components/SearchHeader'

import { GameResponse } from './index'

export const Container = styled.View`
	flex: 1;
`

export const Header = styled(SearchHeader)`
	width: 100%;
`

export const Title = styled.Text`
	font-family: 'Poppins-SemiBold';
	font-size: 18px;
	padding-left: 20px;
	margin-top: 10px;
`

export const Content = styled(FlatList as new () => FlatList<GameResponse>)`
	padding: 10px 20px;
`

export const Game = styled(RectButton)`
	width: 100%;
	height: 350px;

	margin-bottom: 8px;
	border-radius: 5px;
	overflow: hidden;
`

export const GameImage = styled.ImageBackground`
	height: 100%;
	position: relative;
`

export const SaveButton = styled(RectButton)`
	position: absolute;
	top: 20px;
	right: 20px;
`

export const GameTitle = styled.Text`
	position: absolute;
	bottom: 20px;
	left: 20px;
	color: #fff;
	font-family: 'Poppins-SemiBold';
	font-size: 25px;	
`

export const ThemesContainer = styled.View`
	position: absolute;
	left: 20px;
	bottom: 10px;
	flex-direction: row;
`

export const ThemeText = styled.Text`
	font-family: 'Poppins-Regular';
	font-size: 12px;
	color: #fff;
	margin-right: 5px;
`
