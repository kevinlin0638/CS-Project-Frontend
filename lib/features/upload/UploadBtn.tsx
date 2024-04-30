'use client'
import {Button} from 'antd'
import {useState} from 'react'
import {
  selectCompleted,
  selectLoading,
  selectPrompt,
  selectShape,
  selectUploadList,
  setCompleted,
  setLoading
} from '@/lib/features/upload/uploadSlice'
import {useAppDispatch, useAppSelector} from '@/lib/store/hooks'
import * as process from 'process'

export const UploadBtn = () => {
  const prompt = useAppSelector(selectPrompt)
  const shape = useAppSelector(selectShape)
  const fileList = useAppSelector(selectUploadList)
  const loading = useAppSelector(selectLoading)
  const completed = useAppSelector(selectCompleted)
  const dispatch = useAppDispatch()

  const upload = () => {
    const currentTime = new Date().getTime()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt, shape: shape, fileList: fileList, uid: currentTime })
    };
    dispatch(setCompleted(currentTime))
    dispatch(setLoading(true))
    fetch(`http://192.168.194.34:5000/generate`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .finally(() => dispatch(setLoading(false)))
  }

  return (
    <Button loading={loading} onClick={() => {
      upload()
    }}>
      Upload
    </Button>
  )
}