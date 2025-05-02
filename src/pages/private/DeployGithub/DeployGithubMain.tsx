import Layout from '../../../components/Layout'
import MenuUser from '../dashboard/MenuUser'
import DeployGithub from './DeployGithub'

const DeployGithubMain = () => {
  return (
    <Layout>
      <div className="h-full w-full">
        <MenuUser />
      </div>
      <div className="h-full w-full overflow-y-auto">
        <DeployGithub />
      </div>
    </Layout>
  )
}

export default DeployGithubMain