import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import {
	Container,
	SearchButton,
	SearchButtonText,
} from './styles'


const SearchHeader: React.FC = () => {

	const navigation = useNavigation()

	return (
		<Container>
			<SearchButton onPress={() => navigation.navigate('Search')}>
				<Icon name="search" size={18} color="#777" />
				<SearchButtonText>Search...</SearchButtonText>
			</SearchButton>
		</Container>
	)
}

export default SearchHeader