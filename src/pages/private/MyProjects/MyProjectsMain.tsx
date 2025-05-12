import MyProjects from "./MyProjects"
import Layout from "../../../components/Layout"
import MenuUser from "../Dashboard/MenuUser"

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