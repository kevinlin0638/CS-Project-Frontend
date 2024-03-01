'use client'
import {Button} from 'antd'
import {useAppDispatch, useAppSelector} from '@/lib/store/hooks'
import {selectIsLoading, setIsLoading} from '@/lib/features/login/loginSlice'
import React, {useEffect, useState} from 'react'
import socketClient from '@/lib/socket/socketClient'
import {signIn, useSession} from 'next-auth/react'
import {AuthError} from 'next-auth'

export const LoginBtn = () => {
    const isLoginLoading = useAppSelector(selectIsLoading)
    const dispatch = useAppDispatch()
    const [data, setData] = useState('Hello')


    useEffect(() => {
        socketClient.on('hello', (data) => {
            dispatch(setIsLoading(false))
        })

        return () => {
            socketClient.off('hello')
        }
    }, [])

    return (
        <>

            <Button onClick={async ()=>{
                try {
                    await signIn("discord")
                } catch (error) {
                    if (error instanceof AuthError) // Handle auth errors
                        throw error // Rethrow all other errors
                }
            }}>
                LLLLL
            </Button>
            <Button type='primary' onClick={async () => {
                socketClient.emit('hello', data)
                await signIn('discord')
            }}>{isLoginLoading? 'Login' : 'Logout'}</Button>
            {data}
        </>
    )
}