import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

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
	const [isSubscribed, setIsSubscribed] = useState(true)

	const navigation = useNavigation()

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	useFocusEffect(() => {
		api.get('/games/popular').then((response) => {
			if (isSubscribed) {
				setPopularGames(response.data)
			}
		})
		api.get('/games/releases').then((response) => {
			if (isSubscribed) {
				setReleases(response.data)
			}
		})

		return () => {
			return setIsSubscribed(false)
		}
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
					<Title>New Releases</Title>
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
		</Container>
	)
}

export default Home