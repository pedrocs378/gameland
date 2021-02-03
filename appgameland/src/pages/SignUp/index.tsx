import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Toast from 'react-native-simple-toast'

import Input from '../../components/Input'

import { 
	Container,
	Header,
	BackButton,
	Intro,
	IntroTitle,
	IntroSubTitle,
	Content,
	Form,
	FormTitle,
	FormButton,
	FormButtonText,
} from './styles'

const SignUpStepOne: React.FC = () => {
	return (
		<>
			<FormTitle style={{ marginBottom: 20 }}>
				01. How are you?
			</FormTitle>
			<Input 
				name="name"
				icon="user"
				placeholder="Name"
				returnKeyType="next"
				autoCapitalize="words"
			/>
			<Input 
				name="last_name" 
				icon="users"
				placeholder="Last name"
				autoCapitalize="words"
			/>	
		</>
	)
}

const SignUpStepTwo: React.FC = () => {
	return (
		<>
			<FormTitle style={{ marginBottom: 20 }}>
				02. Email and Password
			</FormTitle>
			<Input 
				name="email"
				icon="mail"
				placeholder="E-mail"
				keyboardType="email-address"
				returnKeyType="next"
				autoCapitalize="none"
				autoCompleteType="email"
			/>
			<Input 
				name="password" 
				icon="lock"
				placeholder="Password"
				isPassword
			/>	
		</>
	)
}

const SignUp: React.FC = () => {
	const [step, setStep] = useState(1)

	const navigation = useNavigation()

	const handleGoToNextStepOrSubmit = useCallback(() => {
		if (step === 1) {
			setStep(2)
		} else {
			Toast.show('Register successful', Toast.LONG)
			navigation.navigate('SignUpComplete')
		}
	}, [step, navigation.navigate])

	const handleBackToStepOneOrSignIn = useCallback(() => {
		if (step !== 1) {
			setStep(1)
		} else {
			navigation.goBack()
		}
	}, [step, navigation.goBack])
	
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
				<Header>
					<BackButton onPress={handleBackToStepOneOrSignIn}>
						<Icon name="arrow-left" size={30} color="#9C98A6" />
					</BackButton>
				</Header>
				<Intro>
					<IntroTitle>Create your free account</IntroTitle>
					<IntroSubTitle>Just fill in this data and you will be with us.</IntroSubTitle>
				</Intro>
				<Content>
					<Form>
						{ step === 1 ? <SignUpStepOne /> : <SignUpStepTwo /> }
						<FormButton step={step} onPress={handleGoToNextStepOrSubmit}>
							<FormButtonText>
								{step === 1 ? "Next" : "Register" }
							</FormButtonText>
						</FormButton>
					</Form>
				</Content>
			</Container>
		</KeyboardAvoidingView>
	)
}

export default SignUp