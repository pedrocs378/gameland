import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper'

import Input from '../../components/Input'

import background from '../../assets/introBackground.png'

import { 
	Container,
	Intro,
	IntroBackground,
	IntroTitle,
	IntroSubTitle,
	Content,
	Form,
	FormRow,
	FormTitle,
	RegisterButtonText,
	RememberInput,
	RememberInputText,
	ForgotPasswordText,
	FormButton,
	FormButtonText,
} from './styles'

const SignIn: React.FC = () => {
	const [checked, setChecked] = useState(false)

	return (
		<KeyboardAvoidingView 
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			enabled
		>
			<Container
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{ flex: 2 }}
			>
				<Intro>
					<IntroBackground source={background}  />

					<View>
						<IntroTitle>Game Land</IntroTitle>
						<IntroSubTitle>Your platform from online games.</IntroSubTitle>
					</View>
				</Intro>
				<Content>
					<Form>
						<FormRow style={{ marginBottom: 20 }}>
							<FormTitle>Sign In</FormTitle>
							<TouchableOpacity>
								<RegisterButtonText>Register here</RegisterButtonText>
							</TouchableOpacity>
						</FormRow>
						<Input 
							name="email"
							icon="mail"
							placeholder="E-mail"
							keyboardType="email-address"
							autoCapitalize="none"
							returnKeyType="next"
							autoCompleteType="email"
						/>
						<Input 
							name="password" 
							icon="lock"
							placeholder="Password"
							isPassword
						/>
						<FormRow style={{ marginTop: 25 }}>
							<RememberInput 
								activeOpacity={1} 
								onPress={() => setChecked(!checked)}
							>
								<Checkbox
									status={ checked ? "checked" : "unchecked" }
									color="#04D361"
								/>
								<RememberInputText>Remember me</RememberInputText>
							</RememberInput>
							<TouchableOpacity>
								<ForgotPasswordText>Forgot my password</ForgotPasswordText>
							</TouchableOpacity>
						</FormRow>
						<FormButton onPress={() => {}}>
							<FormButtonText>Login</FormButtonText>
						</FormButton>
					</Form>
				</Content>
			</Container>
		</KeyboardAvoidingView>
	)
}

export default SignIn