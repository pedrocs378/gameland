import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
	loading: boolean
	signIn(credentials: SignInCredentials): Promise<void>
	signOut(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>({} as AuthState)
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		let isSubscribed = true

		async function loadStoragedData(): Promise<void> {
			const [token, user] = await AsyncStorage.multiGet(['@GameLand:token', '@GameLand:user'])

			if (token[1] && user[1]) {
				api.defaults.headers.authorization = `Bearer ${token[1]}`

				setData({ token: token[1], user: JSON.parse(user[1]) })
			}

			setLoading(false)
		}

		if (isSubscribed) {
			loadStoragedData()
		}

		return () => {
			setData({} as AuthState)
			setLoading(false)
			isSubscribed = false
		}
	}, [])

	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('sessions', {
			email,
			password
		})

		const { token, user } = response.data

		await AsyncStorage.multiSet([
			['@GameLand:token', token],
			['@GameLand:user', JSON.stringify(user)],
		])

		api.defaults.headers.authorization = `Bearer ${token[1]}`

		setData({ token, user })
	}, [])

	const signOut = useCallback(async () => {
		await AsyncStorage.multiRemove(['@GameLand:token', '@GameLand:user'])

		setData({} as AuthState)
	}, [])

	return (
		<AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth(): AuthContextData {
	return useContext(AuthContext)
}

export { AuthProvider, useAuth }