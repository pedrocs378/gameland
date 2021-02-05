import React, { useCallback, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Feather'

import background from '../../assets/introBackground.png'

import {
	Container,
	CardUser,
	CardUserBackground,
	UserImageContainer,
	UserImage,
	ChangeImageButton,
	UserName,
	UserContainer,
	UserData,
	DataSection,
	TitleSection,
	InputSection,
	InputTitle,
	Input,
} from './styles'

const Profile: React.FC = () => {
	const [uriImage, setUriImage] = useState("")

	const handleChangeUserPhoto = useCallback(() => {
			launchImageLibrary({ mediaType: 'photo' }, ({ didCancel, uri }) => {
				if (didCancel) {
					return
				}

				if (uri) {
					setUriImage(uri)
				}
			})
	}, [])

	return (
		<Container contentContainerStyle={{ flex: 1}} >
			<CardUser>
				<CardUserBackground
					resizeMode="contain"
					source={background}
				/>
				<UserImageContainer>
					<UserImage
						resizeMode="cover"
						source={{
							uri: uriImage ? uriImage : 'https://avatars.githubusercontent.com/u/53832604?s=460&u=c7f5ef19cc8de6de885a928cd96ced29b19461f3&v=4'
						}}
					/>
					<ChangeImageButton onPress={handleChangeUserPhoto}>
						<Icon name="camera" size={27} color="#FFF" />
					</ChangeImageButton>
				</UserImageContainer>
				<UserName>Pedro César</UserName>
			</CardUser>
			<UserContainer>
				<UserData>
					<DataSection>
						<TitleSection>Your datas</TitleSection>
						<InputSection>
							<InputTitle>Name</InputTitle>
							<Input
								selectTextOnFocus
								autoCapitalize="words"
							/>
						</InputSection>
						<InputSection>
							<InputTitle>Last name</InputTitle>
							<Input
								selectTextOnFocus
								autoCapitalize="words"
							/>
						</InputSection>
						<InputSection>
							<InputTitle>E-mail</InputTitle>
							<Input
								selectTextOnFocus
								autoCapitalize="none"
								keyboardType="email-address"
								autoCorrect={false}
							/>
						</InputSection>
						<InputSection>
							<InputTitle>Your description</InputTitle>
							<Input
								multiline
							/>
						</InputSection>
					</DataSection>
				</UserData>
			</UserContainer>
		</Container>
	)
}

export default Profile