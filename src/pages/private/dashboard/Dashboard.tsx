import Layout from "../../../components/Layout"
import MenuUser from "./MenuUser"
  import Main from "./Main"

const Dashboard = () => {
  return (
    <Layout>
      <div className="h-full w-full">
      <MenuUser />

      </div>
      <div className="h-full w-full overflow-y-auto p-4">

      <Main/>
      </div>
    </Layout>
  )
}

export default Dashboard