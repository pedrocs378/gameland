import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../services/api'

interface User {
	id: string
	name: string
	last_name: string
	email: string
	description?: string
}

interface OptionsProps {
	rememberUser: boolean
}

interface AuthState {
	token: string
	user: User
}

interface SignInCredentials {
	email: string
	password: string
	rememberUser: boolean
}

interface AuthContextData {
	user: User
	loading: boolean
	signIn(credentials: SignInCredentials): Promise<void>
	signOut(): Promise<void>
	updateUser(user: User): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>({} as AuthState)
	const [loading, setLoading] = useState(false)
	
	useEffect(() => {

		async function loadStoragedData(): Promise<void> {
			setLoading(true)

			const options = await AsyncStorage.getItem('@GameLand:options')
			
			if (options) {
				const { rememberUser } = JSON.parse(options) as OptionsProps

				if (rememberUser) {
					const [token, user] = await AsyncStorage.multiGet(['@GameLand:token', '@GameLand:user'])
		
					if (token[1] && user[1]) {
						api.defaults.headers.authorization = `Bearer ${token[1]}`
		
						setData({ token: token[1], user: JSON.parse(user[1]) })
					}
				}
			}

			setLoading(false)
			
		}

		loadStoragedData()

	}, [])

	const signIn = useCallback(async ({ email, password, rememberUser = false }: SignInCredentials) => {
		const response = await api.post('sessions', {
			email,
			password
		})

		const { token, user } = response.data
		
		await AsyncStorage.setItem('@GameLand:options', JSON.stringify({
			rememberUser
		}))

		if (rememberUser) {
			await AsyncStorage.multiSet([
				['@GameLand:token', token],
				['@GameLand:user', JSON.stringify(user)],
			])
		}

		api.defaults.headers.authorization = `Bearer ${token}`

		setData({ token, user })
	}, [])

	const signOut = useCallback(async () => {
		await AsyncStorage.multiRemove(['@GameLand:token', '@GameLand:user', '@GameLand:options'])
		api.defaults.headers.authorization = ''

		setData({} as AuthState)
	}, [])

	const updateUser = useCallback(async (user: User) => {
		await AsyncStorage.setItem('@GameLand:user', JSON.stringify(user))

		setData({
			token: data.token,
			user
		})
	}, [setData, data.token])

	return (
		<AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser, loading }}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth(): AuthContextData {
	return useContext(AuthContext)
}

export { AuthProvider, useAuth }