import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface User {
	id: string
	name: string
	last_name: string
	email: string
}

interface AuthState {
	token: string
	user: User
}

interface SignInCredentials {
	email: string
	password: string
}

interface AuthContextData {
	user: User
	signIn(credentials: SignInCredentials): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>({} as AuthState)

	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('sessions', {
			email,
			password
		})

		const { token, user } = response.data

		api.defaults.headers.authorization = `Bearer ${token[1]}`

		setData({ token, user })
	}, [])

	return (
		<AuthContext.Provider value={{ user: data.user, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth(): AuthContextData {
	return useContext(AuthContext)
}

export { AuthProvider, useAuth }