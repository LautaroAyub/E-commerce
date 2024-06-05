import Layout from "../../Components/Layout"
import ButtonBackToHome from "../../Components/ButtonUtils/ButtonBackToHome"

function SignIn() {

  return (
    <Layout>
            <div className="flex justify-between w-72">
        <ButtonBackToHome />
        <div className="flex items-center justify-center w-80 mb-4">
          <h1 className="font-medium text-xl">Sign In</h1>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn