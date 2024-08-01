import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import { SiSpeedtest } from 'react-icons/si'
import { useLocation, useNavigate } from 'react-router-dom'

const ProxyCard: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const match = location.pathname.includes('/proxies')
  return (
    <Card
      fullWidth
      className={`mb-2 ${match ? 'bg-primary' : ''}`}
      isPressable
      onPress={() => navigate('/proxies')}
    >
      <CardBody>
        <div className="flex justify-between h-[32px]">
          <h3 className="select-none text-md font-bold leading-[32px]">节点名称</h3>
          <Button isIconOnly size="sm" variant="light" color="default">
            <SiSpeedtest color="default" className="text-[20px]" />
          </Button>
        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <small>二级节点</small>
      </CardFooter>
    </Card>
  )
}

export default ProxyCard
