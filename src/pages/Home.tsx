// import { text } from '@/api/common.ts'
import { Button } from 'antd'
import Child from './Child.tsx'
const Home: React.FC = () => {
  const [number, setNumber] = useState<number>(1)

  useEffect(() => {
    const render = async () => {
      // const res = await text()
      // console.log(res)
    }
    render()
  }, []) // 依赖项数组

  const add = () => {
    setNumber(number + 1)
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <Button type='primary' onClick={add} className='mb-100px'>
        父组件:{number}
      </Button>
      <Child number={number} add={add} />
    </div>
  )
}

export default Home
