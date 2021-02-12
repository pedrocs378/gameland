import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

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

const EditProfile: React.FC = () => {

	const { user } = useAuth()

	return (
		<Container>
			<UserData>
				<TitleSection>Your datas</TitleSection>
				<InputSection>
					<InputTitle>Name</InputTitle>
					<Input
						selectTextOnFocus
						autoCapitalize="words"
						defaultValue={user.name}
					/>
				</InputSection>
				<InputSection>
					<InputTitle>Last name</InputTitle>
					<Input
						selectTextOnFocus
						autoCapitalize="words"
						defaultValue={user.last_name}
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
						defaultValue={user.email}
					/>
				</InputSection>
				<InputSection>
					<InputTitle>Your description</InputTitle>
					<Input
						multiline
					/>
				</InputSection>
			</UserData>
			<SaveButton>
				<Icon name="save" size={30} color="#fff" />
			</SaveButton>
		</Container>
	)
}

export default EditProfile