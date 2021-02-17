import React, { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import api from '../../services/api'

import { 
	Container,
	SearchButton,
	SearchButtonText,
	Content,
	Game,
	GameImage,
	GameSection,
	Title,
} from './styles'

interface GameUser {
	id: number
	cover_url: string
}

const UserGames: React.FC = () => {
	const [userGames, setUserGames] = useState<GameUser[]>([])
	
	const navigation = useNavigation()

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	useFocusEffect(() => {
		api.get('/games/me').then((response) => {
			setUserGames(response.data)
		})
	})

	return (
		<Container>
			<SearchButton onPress={() => navigation.navigate('Search')}>
				<Icon name="search" size={18} color="#777" />
				<SearchButtonText>Search...</SearchButtonText>
			</SearchButton>
			<GameSection>
				<Title>My games</Title>
				<Content>
					{userGames.map((game) => {
						return (
							<Game 
								key={game.id} 
								activeOpacity={0.6}
								onPress={() => handleGoToGameInfo(game.id)}
							>
								<GameImage
									resizeMode="cover"
									source={{ uri: game.cover_url }}
								/>
							</Game>
						)
					})}
				</Content>
			</GameSection>
		</Container>
	)
}

export default UserGames