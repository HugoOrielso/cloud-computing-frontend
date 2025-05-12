import Layout from '../../../../components/Layout'
import MenuUser from '../../Dashboard/MenuUser'
import SingleProject from './SingleProject'

const SingleProjectMain = () => {
  return (
    <Layout>
      <div className="h-full w-full">
        <MenuUser />
      </div>
      <div className="h-full w-full overflow-y-auto">
        <SingleProject/>
      </div>
    </Layout>
  )
}

export default SingleProjectMain