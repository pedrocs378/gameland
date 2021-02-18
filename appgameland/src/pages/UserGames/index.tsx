import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import SearchHeader from '../../components/SearchHeader'

import api from '../../services/api'

import { 
	Container,
	Content,
	MessageBox,
	MessageText,
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
	const [isSubscribed, setIsSubscribed] = useState(true)
	const [loading, setLoading] = useState(true)
	const [refresh, setRefresh] = useState(false)
	
	const navigation = useNavigation()

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	useEffect(() => {
		api.get('/games/me').then((response) => {
			if (isSubscribed) {
				setUserGames(response.data)
			}
		}).finally(() => {
			if (isSubscribed) {
				setLoading(false)
			}
		})

		return () => {
			setIsSubscribed(false)
			setLoading(false)
		}
	}, [isSubscribed])

	useEffect(() => {
		if (refresh) {
			api.get('/games/me').then((response) => {
				if (isSubscribed) {
					setUserGames(response.data)
				}
			}).finally(() => {
				setRefresh(false)
			})
		}
	}, [refresh, isSubscribed])

	useFocusEffect(() => {
		api.get('/games/me').then((response) => {
			setUserGames(response.data)
		})
	})

	if (loading || !userGames) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size={50} color="#3c90ef" />
			</View>
		)
	}

	return (
		<Container
			refreshControl={
				<RefreshControl refreshing={refresh} onRefresh={() => setRefresh(true)} />
			}
		>
			<SearchHeader />
			
			<GameSection>
				<Title>My games</Title>
				<Content>
					{userGames.length === 0 && (
						<MessageBox>
							<Icon name="frown" size={40} color="#adadad" />
							<MessageText>You don't have none game added</MessageText>
						</MessageBox>
					)}

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