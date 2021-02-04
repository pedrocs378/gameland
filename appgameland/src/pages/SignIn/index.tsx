import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper'

import Input from '../../components/Input'
import Button from '../../components/Button'

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
	ButtonText,
} from './styles'

const SignIn: React.FC = () => {
	const [checked, setChecked] = useState(false)
	const [active, setActive] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigation = useNavigation()

	useEffect(() => {
		if (email.trim() && password.trim()) {
			setActive(true)
		} else {
			setActive(false)
		}
	}, [email, password])

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
					<IntroBackground source={background} />

					<View>
						<IntroTitle>Game Land</IntroTitle>
						<IntroSubTitle>Your platform from online games.</IntroSubTitle>
					</View>
				</Intro>
				<Content>
					<Form>
						<FormRow style={{ marginBottom: 20 }}>
							<FormTitle>Log In</FormTitle>
							<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
								<RegisterButtonText>Create an account</RegisterButtonText>
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
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<Input 
							name="password" 
							icon="lock"
							placeholder="Password"
							isPassword
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<FormRow style={{ marginVertical: 25 }}>
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
						
						<Button isDisabled={!active}>
							<ButtonText isActive={active}>
								Log In
							</ButtonText>
						</Button>
					</Form>
				</Content>
			</Container>
		</KeyboardAvoidingView>
	)
}

export default SignIn