import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import api from '../../services/api'

import { 
	Container,
	Header,
	BackButton,
	SearchInput,
	ClearButton,
	Content,
	Game,
	GameContainer,
	GameImage,
	GameTitle,
} from './styles'

interface CoverProps {
	id: number
	url: string
	image_id: string
}

interface GameProps {
	id: number
	name: string
	cover: CoverProps
}

const Search: React.FC = () => {
	const [games, setGames] = useState<GameProps[]>([])
	const [inserted, setInserted] = useState(false)
	const [searchText, setSearchText] = useState("")
	const [isSubscribed, setIsSubscribed] = useState(true)

	const navigation = useNavigation()

	const handleSearch = useCallback(async (text: string) => {
		setSearchText(text)
		const response = await api.get(`/igdb/games/search?q=${text}`)

		setGames(response.data)
	}, [])

	const handleGoToGameInfo = useCallback((id: number) => {
		navigation.navigate('GameInfo', { id })
	}, [navigation.navigate])

	const handleClearSearchText = useCallback(() => {
		setSearchText("")
	}, [])

	useEffect(() => {
		setIsSubscribed(true)

		api.get('/igdb/games/popular').then((response) => {
			if (isSubscribed) {
				setGames(response.data)
			}
		})

		return () => {
			setIsSubscribed(false)
		}
	}, [])

	if (!games) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
				<ActivityIndicator size={50} color="#3c90ef" />
			</View>
		)
	} 

	return (
		<Container>
			<Header>
				<BackButton onPress={() => navigation.goBack()}>
					<Icon name="arrow-left" size={25} color="#000" />
				</BackButton>
				<SearchInput
					placeholder="Search..."
					placeholderTextColor="#777"
					autoFocus
					value={searchText}
					onChangeText={handleSearch}
				/>
				<ClearButton
					onPress={handleClearSearchText}
					enabled={!!searchText}
					style={{
						opacity: searchText ? 1 : 0
					}}
				>
					<Icon name="x" size={25} color="#000" />
				</ClearButton>
			</Header>
			<Content>
				{games.map(game => {
					return (
						<Game key={game.id} onPress={() => handleGoToGameInfo(game.id)}>
							<GameContainer>
								<GameImage
									resizeMode="cover"
									source={{ uri: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg` }}
								/>
								<GameTitle>
									{game.name}
								</GameTitle>
							</GameContainer>
							<RectButton onPress={() => setInserted(!inserted)}>
								<Icon 
									name={ inserted ? "check-square" : "plus-square"} 
									size={25} 
									color="#3c90ef" 
								/>
							</RectButton>
						</Game>
					)
				})}
			</Content>
		</Container>
	)

}

export default Search