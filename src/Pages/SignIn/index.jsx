import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import ButtonBackToHome from "../../Components/ButtonUtils/ButtonBackToHome"
import Form from "../../Components/Form"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../Context/useLocalStorage"

function SignIn() {
  const navigate = useNavigate();
  const { updateSignInStatus} = useContext(ShoppingCartContext)
  const {parsedAccounts}=useLocalStorage()
  const [signInData, setSignInData] = useState(
    {
      email: "",
      password: ""
    })

  const changeSignInData = (e) => {

    setSignInData({ ...signInData, [e.target.name]: e.target.value })
  }
  const handleSignIn = (event) => {
    event.preventDefault()
    const thisAccount = parsedAccounts.filter(accounts => accounts.email === signInData.email)
    const itIsRegistered = thisAccount?.length > 0
    const passwordIsOk = thisAccount[0]?.password === signInData.password;

    if (itIsRegistered && passwordIsOk) {
      updateSignInStatus ("sign-in")
      localStorage.setItem("user-session",JSON.stringify(thisAccount[0]) )
      navigate("/")
    }
    if (itIsRegistered && !passwordIsOk) {
      alert("The password is incorrect")
    }
    if (!itIsRegistered) {
      alert("You don't have a registered account, please sign up")
    }
  }
  return (
    <Layout>
      <div className="flex justify-between w-72">
        <ButtonBackToHome />
        <div className="flex items-center justify-center w-80 mb-4">
          <h1 className="font-medium text-xl">Sign In</h1>
        </div>
      </div>

      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      <div className='flex flex-col w-80'>
        <Form type="sign-in" handleSign={handleSignIn} dataState={signInData} changeState={changeSignInData} />
      </div>
    </Layout>
  )
}

export default SignIn