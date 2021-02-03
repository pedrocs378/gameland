import React from 'react'
import { View } from 'react-native'

import { 
	Container,
	Intro,
	IntroTitle,
	IntroSubTitle,
	Content,
	Form,
	FormRow,
	FormTitle,
	RegisterButton,
	FormInput,
	Input,
	FormButton,
	FormButtonText,
} from './styles'

const SignIn: React.FC = () => {

	return (
		<Container>
			<Intro>
				<View>
					<IntroTitle>Game Land</IntroTitle>
					<IntroSubTitle>Your platform from online games.</IntroSubTitle>
				</View>
			</Intro>
			<Content>
				<Form>
					<FormRow>
						<FormTitle>Sign In</FormTitle>
						<RegisterButton>Register here</RegisterButton>
					</FormRow>
					<FormInput>
						<Input placeholder="E-mail" />
					</FormInput>
					<FormInput>
						<Input placeholder="Password" />
					</FormInput>
					<FormButton onPress={() => {}}>
						<FormButtonText>Login</FormButtonText>
					</FormButton>
				</Form>
			</Content>
		</Container>
	)
}

export default SignIn