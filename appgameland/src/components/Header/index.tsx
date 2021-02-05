import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import {
	Container,
	BackButton,
	Title,
} from './styles'

interface HeaderProps {
	title?: string
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {

	const navigation = useNavigation()

	return (
		<Container>
			<BackButton onPress={() => navigation.goBack()}>
				<Icon name="arrow-left" size={25} color="#000" />
			</BackButton>
			{ title ? (
				<Title>
					{title}
				</Title>
			) : (
				children
			)}
			<View />
		</Container>
	)
}

export default Header