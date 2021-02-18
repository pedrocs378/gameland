import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import SearchHeader from '../../components/SearchHeader'

import api from '../../services/api'

import { 
	Container,
	GameSection,
	HeaderSection,
	Title,
	ShowMoreButtonText,
	Content,
	Game,
	GameImage,
} from './styles'

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
}

interface GameResponse {
	game: GameProps
	isAdded: boolean
}

const Home: React.FC = () => {
	const [popularGames, setPopularGames] = useState<GameResponse[]>([])
	const [releases, setReleases] = useState<GameResponse[]>([])
	const [nextReleases, setNextReleases] = useState<GameResponse[]>([])
	const [isSubscribed, setIsSubscribed] = useState(true)

	const navigation = useNavigation()

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	useFocusEffect(() => {

		api.get('/igdb/games/popular?limit=20').then((response) => {
			if (isSubscribed) {
				setPopularGames(response.data)
			}
		})

		api.get('/igdb/games/releases?limit=20').then((response) => {
			if (isSubscribed) {
				setReleases(response.data)
			}
		})

		api.get('/igdb/games/next-releases?limit=20').then((response) => {
			if (isSubscribed) {
				setNextReleases(response.data)
			}
		})

		return () => {
			return setIsSubscribed(false)
		}
	})

	if (!popularGames || !releases || !nextReleases) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
				<ActivityIndicator size={50} color="#3c90ef" />
			</View>
		)
	} 

	return (
		<Container>
			<SearchHeader />

			<GameSection>
				<HeaderSection>
					<Title>Popular games</Title>
					<RectButton onPress={() => navigation.navigate('SeeAllGames', { title: 'Popular games', route: 'popular' })}>
						<ShowMoreButtonText>See all</ShowMoreButtonText>
					</RectButton>
				</HeaderSection>
				<Content 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					{popularGames.map(({ game }) => {
						if (game) {
							return (
								<Game 
									key={game.id} 
									activeOpacity={0.6}
									onPress={() => handleGoToGameInfo(game.id)}
								>
									<GameImage
										resizeMode="cover"
										source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg` }}
									/>
								</Game>
							)
						}
					})}
				</Content>
			</GameSection>
			<GameSection>
				<HeaderSection>
					<Title>New releases</Title>
					<RectButton onPress={() => navigation.navigate('SeeAllGames', { title: 'New releases', route: 'releases' })}>
						<ShowMoreButtonText>See all</ShowMoreButtonText>
					</RectButton>
				</HeaderSection>
				<Content 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					{releases.map(({ game }) => {
						if (game) {
							return (
								<Game 
									key={game.id} 
									activeOpacity={0.6} 
									onPress={() => handleGoToGameInfo(game.id)}
								>
									<GameImage
										resizeMode="cover"
										source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg` }}
									/>
								</Game>
							)
						}
					})}
				</Content>
			</GameSection>
			<GameSection>
				<HeaderSection>
					<Title>Next releases</Title>
					<RectButton onPress={() => navigation.navigate('SeeAllGames', { title: 'Next releases', route: 'next-releases' })}>
						<ShowMoreButtonText>See all</ShowMoreButtonText>
					</RectButton>
				</HeaderSection>
				<Content 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					{nextReleases.map(({ game }) => {
						if (game) {
							return (
								<Game 
									key={game.id} 
									activeOpacity={0.6} 
									onPress={() => handleGoToGameInfo(game.id)}
								>
									<GameImage
										resizeMode="cover"
										source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg` }}
									/>
								</Game>
							)
						}
					})}
				</Content>
			</GameSection>
		</Container>
	)
}

export default Home