import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StatusBar } from 'react-native'
import { Rating } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import api from '../../services/api'

import {
	Container,
	GameImage,
	BackButton,
	Content,
	GameTitle,
	RatingContainer,
} from './styles'

interface CoverProps {
	id: number
	image_id: string
}

interface GameProps {
	id: number
	name: string
	cover: CoverProps
}

interface RouteParams {
	id: number
}

const GameInfo: React.FC = () => {
	const [game, setGame] = useState<GameProps>({} as GameProps)

	const navigation = useNavigation()
	const { params } = useRoute()
	const { id } = params as RouteParams

	useEffect(() => {
		api.post(
			'/games',
			`fields *, cover.*; where id = ${id};`
		).then(response => {
			setGame(response.data[0])
		})
	}, [id])

	if (!game || !game.cover) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
				<ActivityIndicator size={50} color="#3c90ef" />
			</View>
		)
	}

	return (
		<Container>
			<GameImage 
				resizeMode="cover"
				source={{ 
					uri: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` 
				}}
			>
				<BackButton onPress={() => navigation.goBack()} >
					<Icon name="arrow-left" size={30} color="#fff" />
				</BackButton>
			</GameImage>
			<Content>
				<GameTitle>{game.name}</GameTitle>
				<RatingContainer>
					<Rating
						imageSize={20}
						readonly					
					/>
				</RatingContainer>
			</Content>
		</Container>
	)
}

export default GameInfo