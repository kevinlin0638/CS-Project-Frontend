import UploadImage from '@/lib/features/upload/UploadImage'
import {Button, Flex, Typography} from 'antd'
import {UploadContainer} from '@/lib/features/upload/UploadContainer'
import {PromptInput} from '@/lib/features/prompt/PromptInput'
import {OutputGroup} from '@/lib/features/output/OutputGroup'
import {UploadBtn} from '@/lib/features/upload/UploadBtn'

export default function Home() {
  return (
    <Flex gap={24} vertical style={{margin: 48}} justify='center' align='center'>
      <UploadContainer />
      <UploadImage />
      <PromptInput />
      <UploadBtn />
      <OutputGroup />
    </Flex>
  );
}
