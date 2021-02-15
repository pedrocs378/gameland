import React, { useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Rating } from 'react-native-ratings'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
	Container,
	GameImage,
	BackButton,
	Content,
	Section,
	SectionTitle,
	RatingContainer,
	ReviewsCount,
	ThemesContainer,
	Theme,
	ThemeText,
	GameDescription,
	ReleaseContainer,
	ReleaseSection,
	ReleaseSectionTitle,
	ReleaseSectionContent
} from './styles'
import api from '../../services/api'

interface CoverProps {
	id: number
	image_id: string
}

interface Themes {
	id: number
	name: string
}

interface Company {
	id: number
	name: string
}

interface InvolvedCompanies {
	id: number
	company: Company
	developer: boolean
	publisher: boolean
}

interface GameProps {
	id: number
	name: string
	cover: CoverProps
	rating: number
	rating_count: number
	themes: Themes[]
	storyline: string
	summary: string
	first_release_date: number
	involved_companies: InvolvedCompanies[]
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
		api.get(`/games/${id}`).then(response => {
			setGame(response.data)
		})
	}, [id])

	const ratingValue = useMemo(() => {
		const value = (5 * game.rating) / 100

		return value
	}, [game.rating])

	const release_date = useMemo(() => {
		if (game.first_release_date){
			const timestamp = game.first_release_date * 1000
			
			const date = format(timestamp, "dd MMM',' yyyy", {
				locale: ptBR
			})
			
			return date
		}
	}, [game.first_release_date])

	const developer = useMemo(() => {
		if (game.involved_companies) {
			const companys = game.involved_companies.filter(company => company.developer === true)

			if (companys[0].company.name.length >= 20) {
				return `${companys[0].company.name.substring(0, 20)} ...`
			}

			return companys[0].company.name
		}
	}, [game.involved_companies])

	const publisher = useMemo(() => {
		if (game.involved_companies) {
			const companys = game.involved_companies.filter(company => company.publisher === true)

			if (companys[0].company.name.length >= 20) {
				return `${companys[0].company.name.substring(0, 20)} ...`
			}

			return companys[0].company.name
		}
	}, [game.involved_companies])

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
				resizeMode="stretch"
				source={{ 
					uri: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg` 
				}}
			>
				<BackButton onPress={() => navigation.goBack()} >
					<Icon name="arrow-left" size={30} color="#fff" />
				</BackButton>
			</GameImage>
			<Content>
				<Section>
					<SectionTitle>{game.name}</SectionTitle>
					<RatingContainer>
						<Rating
							type="custom"
							imageSize={21}
							readonly
							tintColor="#fff"
							startingValue={ratingValue}
							style={{
								backgroundColor: 'transparent',
							}}
						/>
						<ReviewsCount>{game.rating_count} reviews</ReviewsCount>
					</RatingContainer>
					<ThemesContainer>
						{game.themes.map(theme => {
							return (
								<Theme key={theme.id}>
									<ThemeText>{theme.name}</ThemeText>
								</Theme>
							)
						})}
					</ThemesContainer>
				</Section>
				<Section style={{ marginTop: 15 }}>
					<SectionTitle>About</SectionTitle>
					<GameDescription>{game.storyline || game.summary}</GameDescription>
					<ReleaseContainer>
						<ReleaseSection>
							<ReleaseSectionTitle>Release date</ReleaseSectionTitle>
							<ReleaseSectionContent>{release_date}</ReleaseSectionContent>
						</ReleaseSection>

						<ReleaseSection>
							<ReleaseSectionTitle>Developer</ReleaseSectionTitle>
							<ReleaseSectionContent>{developer}</ReleaseSectionContent>
						</ReleaseSection>

						<ReleaseSection>
							<ReleaseSectionTitle>Publisher</ReleaseSectionTitle>
							<ReleaseSectionContent>{publisher}</ReleaseSectionContent>
						</ReleaseSection>
					</ReleaseContainer>
				</Section>
			</Content>
		</Container>
	)
}

export default GameInfo