import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

import igdbConfig from '../../configs/igdb'
import api from '../../services/api'

import { 
	Container,
	SearchButton,
	SearchButtonText,
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

const Home: React.FC = () => {
	const [popularGames, setPopularGames] = useState<GameProps[]>([])
	const [releases, setReleases] = useState<GameProps[]>([])

	const navigation = useNavigation()

	const handleGetPopularGames = useCallback(() => {
		api.post(
			'/games',
			'fields name, first_release_date, rating, cover.*; limit 20; sort rating desc; where rating != null & cover != null & rating >= 70 & rating_count >= 120 & first_release_date >= 1517858929;',
		).then(response => {
			setPopularGames(response.data)
		})	
	}, [])
	const handleGetReleases = useCallback(() => {
		api.post(
			'/games',
			'fields name, first_release_date, rating, cover.*; limit 20; sort first_release_date desc; where first_release_date != null & cover != null & first_release_date <= 1612559228 & rating >= 80;',
		).then(response => {
			setReleases(response.data)
		})	
	}, [])

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	useFocusEffect(() => {
		handleGetPopularGames()
	})

	return (
		<Container>
			<SearchButton onPress={() => navigation.navigate('Search')}>
				<Icon name="search" size={18} color="#777" />
				<SearchButtonText>Search...</SearchButtonText>
			</SearchButton>
			<GameSection>
				<HeaderSection>
					<Title>Popular games</Title>
					<RectButton>
						<ShowMoreButtonText>See all</ShowMoreButtonText>
					</RectButton>
				</HeaderSection>
				<Content 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					{popularGames.map((game) => {
						return (
							<Game 
								key={game.id} 
								activeOpacity={0.6}
								onPress={() => handleGoToGameInfo(game.id)}
							>
								<GameImage
									resizeMode="cover"
									source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` }}
								/>
							</Game>
						)
					})}
				</Content>
			</GameSection>
			<GameSection>
				<HeaderSection>
					<Title>Releases</Title>
					<RectButton>
						<ShowMoreButtonText>See all</ShowMoreButtonText>
					</RectButton>
				</HeaderSection>
				<Content 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					{releases.map((game) => {
						return (
							<Game key={game.id} activeOpacity={0.6}>
								<GameImage
									resizeMode="cover"
									source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` }}
								/>
							</Game>
						)
					})}
				</Content>
			</GameSection>
		</Container>
	)
}

export default Home