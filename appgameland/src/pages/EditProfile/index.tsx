import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
	Container,
	DataSection,
	Input,
	InputSection,
	InputTitle,
	TitleSection,
	UserData,
	SaveButton,
} from './styles'

const EditProfile: React.FC = () => {

	return (
		<Container>
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
			<SaveButton>
				<Icon name="save" size={30} color="#fff" />
			</SaveButton>
		</Container>
	)
}

export default EditProfile