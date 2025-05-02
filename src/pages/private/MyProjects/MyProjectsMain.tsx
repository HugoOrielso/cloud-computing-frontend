import MyProjects from "./MyProjects"
import MenuUser from "../dashboard/MenuUser"
import Layout from "../../../components/Layout"

const MyProjectsMain = () => {
  return (
    <Layout>
      <div className="h-full w-full">
        <MenuUser />
      </div>
      <div className="h-full w-full overflow-y-auto">
        <MyProjects />
      </div>
    </Layout>
  )
}

export default MyProjectsMain