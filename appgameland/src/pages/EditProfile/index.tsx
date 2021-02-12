import React, { useCallback, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Toast from 'react-native-simple-toast'
import * as Yup from 'yup'

import { useAuth } from '../../hooks/auth'

import {
	Container,
	Input,
	InputSection,
	InputTitle,
	TitleSection,
	UserData,
	SaveButton,
} from './styles'
import api from '../../services/api'

const EditProfile: React.FC = () => {
	const { user, updateUser } = useAuth()
	
	const [name, setName] = useState(user.name)
	const [last_name, setLastName] = useState(user.last_name)
	const [email, setEmail] = useState(user.email)
	const [description, setDescription] = useState(user.description || "")


	const handleSave = useCallback(async () => {
		try {
			const data = {
				name,
				last_name,
				email,
				description
			}
	
			const schema = Yup.object().shape({
				name: Yup.string().required('Name is required'),
				last_name: Yup.string().required('Last name is required'),
				email: Yup.string().required('E-mail is required').email('Text a valid e-mail'),
				description: Yup.string().max(200)
			})
	
			await schema.validate(data, {
				abortEarly: false
			})

			const response = await api.put('/profile', data)

			updateUser(response.data)

			Toast.show('Succesfull', Toast.LONG)
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
	}, [name, last_name, email, description, updateUser])

	return (
		<Container>
			<UserData>
				<TitleSection>Your datas</TitleSection>
				<InputSection>
					<InputTitle>Name</InputTitle>
					<Input
						selectTextOnFocus
						autoCapitalize="words"
						value={name}
						onChangeText={(text) => setName(text)}
					/>
				</InputSection>
				<InputSection>
					<InputTitle>Last name</InputTitle>
					<Input
						selectTextOnFocus
						autoCapitalize="words"
						value={last_name}
						onChangeText={(text) => setLastName(text)}
					/>
				</InputSection>
				<InputSection>
					<InputTitle>E-mail</InputTitle>
					<Input
						selectTextOnFocus
						autoCapitalize="none"
						keyboardType="email-address"		
						returnKeyType="next"
						autoCompleteType="email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</InputSection>
				<InputSection>
					<InputTitle>Your description</InputTitle>
					<Input
						multiline
						editable
						maxLength={200}
						textAlignVertical="top"
						numberOfLines={5}
						value={description}
						onChangeText={(text) => setDescription(text)}
					/>
				</InputSection>
			</UserData>
			<SaveButton onPress={handleSave}>
				<Icon name="save" size={30} color="#fff" />
			</SaveButton>
		</Container>
	)
}

export default EditProfile