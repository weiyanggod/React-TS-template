// Child.tsx
import styled from 'styled-components'
import { Button } from 'antd'

// 使用 styled-components 创建样式
const DivStyle = styled.div<{ color: string | null }>`
  color: ${(props) => props.color || 'red'};
  font-size: 25px;
`

interface ChildProps {
  number: number
  add: () => void
}

const Child: React.FC<ChildProps> = ({ number, add }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <DivStyle color='blue'>
        {number > 10 && <div className='mt-20px'>styled-components测试</div>}
        {[0, 1, 2].map((item, index) => (
          <Button type='primary' onClick={add} className='ml-1' key={index}>
            子组件: {number}
            item:{item}
          </Button>
        ))}
      </DivStyle>
    </div>
  )
}

export default Child
