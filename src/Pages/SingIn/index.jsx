import Layout from "../../Components/Layout"
import ButtonBackToHome from "../../Components/ButtonUtils/ButtonBackToHome"

function SingIn() {

  return (
    <Layout>
            <div className="flex justify-between w-72">
        <ButtonBackToHome />
        <div className="flex items-center justify-center w-80 mb-4">
          <h1 className="font-medium text-xl">SingIn</h1>
        </div>
      </div>
    </Layout>
  )
}

export default SingIn