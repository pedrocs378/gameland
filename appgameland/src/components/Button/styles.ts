import styled from 'styled-components/native'

interface ContainerProps {
	isDisabled: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	border-radius: 8px;
	height: 56px;
	background-color: ${({ isDisabled }) => !isDisabled ? "#04D361" : "#DCDCE5"};
	align-items: center;
	justify-content: center;
`