import React, { useCallback } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import background from '../../assets/splashBackground.png'
import icon from '../../assets/iconSuccessful.png'

import { 
	Container,
	Content,
	ContentBackground,
	ContentTitle,
	ContentSubtitle,
	BackToLoginButton,
	BackToLoginButtonText
} from './styles'

const SignUpComplete: React.FC = () => {

	const navigation = useNavigation()

	const handleBackToLogin = useCallback(() => {
		navigation.reset({
			routes: [{ name: 'SignIn' }],
			index: 0
		})
	}, [navigation.reset])

	return (
		<Container>
			<Content>
				<ContentBackground
					source={background} 
					resizeMode="center"
				/>
				<Image source={icon} />
				<ContentTitle>Register successful!</ContentTitle>
				<ContentSubtitle>
					Now yow are par of the Game Land platform.
				</ContentSubtitle>
			</Content>
			<BackToLoginButton onPress={handleBackToLogin}>
				<BackToLoginButtonText>
					Back to Log In
				</BackToLoginButtonText>
			</BackToLoginButton>
		</Container>
	)
}

export default SignUpComplete