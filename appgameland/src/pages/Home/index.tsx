import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

import { 
	Container,
	SearchBox,
	SearchBoxText,
	GameSection,
	HeaderSection,
	Title,
	ShowMoreButtonText,
	Content,
	Game,
	GameImage,
} from './styles'

const Home: React.FC = () => {

	return (
		<Container>
			<SearchBox>
				<Icon name="search" size={18} color="#777" />
				<SearchBoxText>Search...</SearchBoxText>
			</SearchBox>
			<GameSection>
				<HeaderSection>
					<Title>Popular games</Title>
					<RectButton>
						<ShowMoreButtonText>See all</ShowMoreButtonText>
					</RectButton>
				</HeaderSection>
				<Content 
					pagingEnabled 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					<Game activeOpacity={0.6}>
						<GameImage
							resizeMode="cover"
							source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_thumb/co2s0o.jpg' }}
						/>
					</Game>
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
					pagingEnabled 
					horizontal 
					showsHorizontalScrollIndicator={false}
				>
					<Game activeOpacity={0.6}>
						<GameImage
							resizeMode="cover"
							source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_thumb/co2s0o.jpg' }}
						/>
					</Game>
				</Content>
			</GameSection>
		</Container>
	)
}

export default Home