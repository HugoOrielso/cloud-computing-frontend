import MenuUser from '../dashboard/MenuUser'
import Layout from '../../../components/Layout'
import Deploy from './Deploy'

const DeployMain = () => {
  return (
    <Layout>
      <div className="h-full w-full">
        <MenuUser />
      </div>
      <div className="h-full w-full overflow-y-auto">
        <Deploy />
      </div>
    </Layout>
  )
}

export default DeployMain