'use client'

import {Space, Typography} from 'antd'

export const UploadContainer = () => {
  return (
    <>
      <Space>
        <Typography.Title level={2}>Upload Images</Typography.Title>
        <Typography.Title level={5}>(Minimum 5 Clear Face Images)</Typography.Title>
      </Space>
    </>
  )
}