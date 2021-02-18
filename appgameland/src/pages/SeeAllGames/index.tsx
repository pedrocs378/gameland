import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Toast from 'react-native-simple-toast'

import SearchHeader from '../../components/SearchHeader'

import api from '../../services/api'

import { 
	Container,
	Header,
	Content,
	Title,
	Game,
	GameImage,
	SaveButton,
	GameTitle,
	ThemesContainer,
	ThemeText,
} from './styles'
import { RectButton } from 'react-native-gesture-handler'

interface Themes {
	id: number
	name: string
}

interface CoverProps {
	id: number
	url: string
	image_id: string
}


interface GameProps {
	id: number
	name: string
	rating: number
	first_release_date: number
	cover: CoverProps
	themes: Themes[]
}

export interface GameResponse {
	game: GameProps
	isAdded: boolean
}

interface RouteParams {
	title: string
	route: string
}

const SeeAllGames: React.FC = () => {
	const [allGames, setAllGames] = useState<GameResponse[]>([])
	const [isSubscribed, setIsSubscribed] = useState(true)
	const [loading, setLoading] = useState(true)
	const [refresh, setRefresh] = useState(false)
	
	const navigation = useNavigation()
	const { params } = useRoute()
	const { title, route } = params as RouteParams

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	const handleSaveOrRemoveGame = useCallback(async (id: number, isAdded: boolean) => {
		if (isAdded) {
			try {
				await api.delete(`/games/${id}/me`)
				setRefresh(true)

				Toast.show('Removed', Toast.LONG)
			} catch {
				Toast.show('Error', Toast.LONG)
			}
		} else {
			try {
				await api.post(`/games/${id}/me`)
				setRefresh(true)

				Toast.show('Added', Toast.LONG)
			} catch {
				Toast.show('Error', Toast.LONG)
			}
		}
	}, [])

	useEffect(() => {
		api.get(`/igdb/games/${route}?limit=200`).then((response) => {
			if (isSubscribed) {
				setAllGames(response.data)
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
			api.get(`/igdb/games/${route}`).then(response => {
				setAllGames(response.data)
			}).finally(() => {
				setRefresh(false)
			})
		}
	}, [refresh])

	if (loading || !allGames) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size={50} color="#3c90ef" />
			</View>
		)
	}

	return (
		<Container>
			<SearchHeader />
			
			<Title>{title}</Title>
				<Content
					data={allGames}
					keyExtractor={({ game }) => `${game.id}`}
					renderItem={({ item }) => (
						<Game 
							key={item.game.id} 
							activeOpacity={0.6}
							onPress={() => handleGoToGameInfo(item.game.id)}
						>
							<GameImage
								resizeMode="cover"
								source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${item.game.cover.image_id}.jpg` }}
							>
								<SaveButton onPress={() => handleSaveOrRemoveGame(item.game.id, item.isAdded) }>
									<Icon 
										name={ item.isAdded ? "check-square" : "plus-square"} 
										size={28} 
										color="#ff9000" 
									/>
								</SaveButton>

								<GameTitle>{item.game.name}</GameTitle>
								
								<ThemesContainer>
									{item.game.themes && item.game.themes.map((theme, i) => {
										return (
											<ThemeText key={theme.id}>{theme.name}{i != item.game.themes.length-1 ? "," : ""}</ThemeText>
										)
									})}
								</ThemesContainer>
							</GameImage>
						</Game>
					)}
				/>
		</Container>
	)
}

export default SeeAllGames