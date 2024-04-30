'use client'
import React from 'react'
import {Flex, Image } from 'antd'
import {useAppSelector} from '@/lib/store/hooks'
import {selectCompleted, selectLoading} from '@/lib/features/upload/uploadSlice'

export const OutputGroup = () => {
  const completed = useAppSelector(selectCompleted)
  const loading = useAppSelector(selectLoading)
  return (
    <>
      {
        completed && !loading &&
        <Flex>
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Image width={153} height={306} src={`http://192.168.194.34:5000/img/${completed}_output_0.png`} alt=''/>
            <Image width={153} height={306} src={`http://192.168.194.34:5000/img/${completed}_output_1.png`} alt=''/>
            <Image width={153} height={306} src={`http://192.168.194.34:5000/img/${completed}_output_2.png`} alt=''/>
            <Image width={153} height={306} src={`http://192.168.194.34:5000/img/${completed}_output_3.png`} alt=''/>
          </Image.PreviewGroup>
        </Flex>
      }
    </>
  )
}