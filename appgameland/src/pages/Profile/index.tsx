import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Feather'

import { useAuth } from '../../hooks/auth'

import background from '../../assets/introBackground.png'

import {
	Container,
	CardUser,
	CardUserBackground,
	UserAvatar,
	Avatar,
	ChangeAvatarButton,
	UserName,
	UserDescription,
	EditProfileButton,
	EditProfileButtonText,
	SignOutButton,
} from './styles'

const Profile: React.FC = () => {
	const [uriImage, setUriImage] = useState("")

	const { user, signOut } = useAuth()

	const navigation = useNavigation()

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
		<Container contentContainerStyle={{ flex: 1}}>
			<CardUser>
				<CardUserBackground
					resizeMode="contain"
					source={background}
				/>
				<UserAvatar>
					<Avatar
						resizeMode="cover"
						source={{
							uri: uriImage ? uriImage : 'https://avatars.githubusercontent.com/u/53832604?s=460&u=c7f5ef19cc8de6de885a928cd96ced29b19461f3&v=4'
						}}
					/>
					<ChangeAvatarButton onPress={handleChangeUserPhoto}>
						<Icon name="camera" size={27} color="#FFF" />
					</ChangeAvatarButton>
				</UserAvatar>
				<UserName>{user.name}</UserName>
				{
					user.description && (
						<UserDescription>
							{ user.description }
						</UserDescription>
					)
				}
				<EditProfileButton onPress={() => navigation.navigate('EditProfile')}>
					<EditProfileButtonText>Edit profile</EditProfileButtonText>
				</EditProfileButton>			
			</CardUser>
			
			<SignOutButton onPress={signOut}>
				<Icon name="log-out" size={27} color="#FFF" />
			</SignOutButton>
		</Container>
	)
}

export default Profile