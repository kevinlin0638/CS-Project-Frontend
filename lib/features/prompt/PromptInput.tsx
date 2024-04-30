'use client'
import {Flex, Input, Segmented, Space, Typography} from 'antd'
import React from 'react'
import {selectPrompt, selectShape, setPrompt, setShape} from '@/lib/features/upload/uploadSlice'
import {useAppDispatch, useAppSelector } from '@/lib/store/hooks'

export const PromptInput = () => {
  const prompt = useAppSelector(selectPrompt)
  const shape = useAppSelector(selectShape)
  const dispatch = useAppDispatch()

  return (
    <>
      <Flex justify='space-around' align='center' gap={24}>
        <Space direction='vertical' align='center'>
          <Typography.Title level={2}>Dress Prompt</Typography.Title>
          <Input value={prompt} onChange={(e) => {
            dispatch(setPrompt(e.target.value))
          }} style={{width: 250}}/>
        </Space>
        <Space direction='vertical' align='center'>
          <Typography.Title level={2}>Shape</Typography.Title>
          <Segmented value={shape} options={['Plump', 'Strong', 'Lean']} onChange={(e) => {
            dispatch(setShape(e))
          }}/>
        </Space>
      </Flex>
    </>
  )
}