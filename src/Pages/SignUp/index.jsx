import { useContext, useState } from "react"
// import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import ButtonBackToHome from "../../Components/ButtonUtils/ButtonBackToHome"
import Form from "../../Components/Form"
import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate();
  const { parsedAccounts} = useContext(ShoppingCartContext)

    const [signUpData,setSignUpData]= useState(
        { email:"",
            password:""
        })

    const changeSignUpData=(e)=>{
        setSignUpData({...signUpData,[e.target.name]: e.target.value}) 
    }
    
const handleSignUp = (event)=>{
  event.preventDefault()
    const existingAccount = parsedAccounts.some(account => account.email === signUpData.email)
    if(!existingAccount){
        const newAccounts= parsedAccounts
        newAccounts.push(signUpData)
        localStorage.setItem("account",JSON.stringify(newAccounts))
        setSignUpData({ email:"",password:""})
        alert("Successful sign up, please log in")
        navigate("/sign-in")
    }else{
        alert("this account is already, please try another email")
    }
    }

  return (
    <Layout>
            <div className="flex justify-between w-72">
        <ButtonBackToHome />
        <div className="flex items-center justify-center w-80 mb-4">
          <h1 className="font-medium text-xl">Sign Up</h1>
        </div>

      </div>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Create you account</h1>
      <div className='flex flex-col w-80'>
      <Form type="sign-up" handleSign={handleSignUp} dataState={signUpData} changeState={changeSignUpData} />

        </div>
        
    </Layout>
  )
}

export default SignUp