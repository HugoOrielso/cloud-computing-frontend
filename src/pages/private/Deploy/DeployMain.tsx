import Layout from '../../../components/Layout'
import MenuUser from '../Dashboard/MenuUser'

import Deploy from './Deploy'

const DeployMain = () => {
  return (
    <Layout>
      <div className="h-full w-full">
        <MenuUser />
      </div>
      <div className="h-full w-full overflow-y-auto">
        <Deploy/>
      </div>
    </Layout>
  )
}

export default DeployMain