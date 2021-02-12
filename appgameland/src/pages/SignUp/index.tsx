import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Toast from 'react-native-simple-toast'
import * as Yup from 'yup'

import Input from '../../components/Input'
import api from '../../services/api'

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

interface SignUpStepOneProps {
	name: string
	lastName: string
	onNameChange?: (text: string) => void
	onLastNameChange?: (text: string) => void
}

interface SignUpStepTwoProps {
	email: string
	password: string
	onEmailChange?: (text: string) => void
	onPasswordChange?: (text: string) => void
}

const SignUpStepOne: React.FC<SignUpStepOneProps> = ({
	name = "",
	lastName = "",
	onNameChange, 
	onLastNameChange,
}) => {
	
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
				value={name}
				onChangeText={onNameChange}
			/>
			<Input 
				name="last_name" 
				icon="users"
				placeholder="Last name"
				autoCapitalize="words"
				value={lastName}
				onChangeText={onLastNameChange}
			/>	
		</>
	)
}

const SignUpStepTwo: React.FC<SignUpStepTwoProps> = ({ 
	email = "",
	password = "",
	onEmailChange, 
	onPasswordChange 
}) => {
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
				value={email}
				onChangeText={onEmailChange}
			/>
			<Input 
				name="password" 
				icon="lock"
				placeholder="Password"
				isPassword
				value={password}
				onChangeText={onPasswordChange}
			/>	
		</>
	)
}

const SignUp: React.FC = () => {
	const [step, setStep] = useState(1)
	const [active, setActive] = useState(false)

	const [name, setName] = useState("")
	const [last_name, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigation = useNavigation()

	const handleGoToNextStepOrSubmit = useCallback(async () => {
		if (step === 1) {
			setStep(2)
		} else {
			try {
				const data = {
					name,
					last_name,
					email,
					password
				}
	
				const schema = Yup.object().shape({
					name: Yup.string().required('Name is required'),
					last_name: Yup.string().required('Last name is required'),
					email: Yup.string().required('E-mail is required').email('Text a valid e-mail'),
					password: Yup.string().min(6, 'Password must be at least 6 characters')
				})
	
				await schema.validate(data, {
					abortEarly: false
				})

				await api.post('/users', data)

				navigation.navigate('SignUpComplete')
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					let message = ''
	
					err.inner.forEach((error, index) => {
						if (index === err.inner.length-1) {
							message = message + `${error.message}`
						} else {
							message = message + `${error.message}\n`
						}
					})
	
					Toast.show(message, Toast.LONG)
					return
				}
	
				Toast.show('An error has ocurred. Try again.', Toast.LONG)
			}
		}
	}, [step, navigation.navigate, name, last_name, email, password])

	const handleBackToStepOneOrSignIn = useCallback(() => {
		if (step !== 1) {
			setStep(1)
		} else {
			navigation.goBack()
		}
	}, [step, navigation.goBack])

	useEffect(() => {
		if (step === 1) {
			if (name.trim() && last_name.trim()) {
				setActive(true)
			} else {
				setActive(false)
			}
		} else if (step === 2) {
			if (email.trim() && password.trim()) {
				setActive(true)
			} else {
				setActive(false)
			}
		}
	}, [step ,name, last_name, email, password])

	const buttonColor = useMemo(() => {
		if (!active) {
			return '#DCDCE5'
		} else if (step === 1) {
			return '#3c90ef'
		} else if (step === 2) {
			return '#04D361'
		} else {
			return '#04D361'
		}
	}, [active, step])
	
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
					<BackButton activeOpacity={0.6} onPress={handleBackToStepOneOrSignIn}>
						<Icon name="arrow-left" size={30} color="#9C98A6" />
					</BackButton>
				</Header>
				<Intro>
					<IntroTitle>Create your free account</IntroTitle>
					<IntroSubTitle>Just fill in this data and you will be with us.</IntroSubTitle>
				</Intro>
				<Content>
					<Form>

						{ step === 1 ? (
							<SignUpStepOne
								name={name}
								onNameChange={(text) => setName(text)}
								lastName={last_name}
								onLastNameChange={(text) => setLastName(text)}
							/>
						) : (
							<SignUpStepTwo
								email={email}
								onEmailChange={(text) => setEmail(text)}
								password={password}
								onPasswordChange={(text) => setPassword(text)}
							/>
						)}

						<FormButton 
							activeOpacity={0.6} 
							step={step} 
							onPress={handleGoToNextStepOrSubmit}
							style={{
								backgroundColor: buttonColor
							}}
						>
							<FormButtonText isActive={active}>
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