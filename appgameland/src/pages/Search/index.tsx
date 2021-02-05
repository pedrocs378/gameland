import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

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

const Search: React.FC = () => {
	const [inserted, setInserted] = useState(false)
	const [searchText, setSearchText] = useState("")

	const navigation = useNavigation()

	const handleSearch = useCallback((text: string) => {
		setSearchText(text)
	}, [])

	const handleClearSearchText = useCallback(() => {
		setSearchText("")
	}, [])

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
				<Game>
					<GameContainer>
						<GameImage
							resizeMode="cover"
							source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_thumb/co2s0o.jpg' }}
						/>
						<GameTitle>
							Name of game
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
			</Content>
		</Container>
	)
}

export default Search