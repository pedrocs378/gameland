import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { 
	Container,
	SearchBox,
	SearchBoxText,
} from './styles'

const Home: React.FC = () => {

	return (
		<Container>
			<SearchBox>
				<Icon name="search" size={18} color="#777" />
				<SearchBoxText>Search...</SearchBoxText>
			</SearchBox>
		</Container>
	)
}

export default Home