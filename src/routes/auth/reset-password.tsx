import { confirmThePasswordReset } from "@/src/core/auth"
import { useState, FormEvent, ChangeEvent } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const Component = function ResetPassword(): JSX.Element {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [successMessage, setSuccessMessage] = useState(false)
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { password, confirmPassword } = formFields

  const oobCode: string | null = searchParams.get('oobCode')

  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    )
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords did not match.")
      return;
    }

    try {
      if (oobCode) {
        await confirmThePasswordReset(oobCode, confirmPassword)
        resetFormFields()
        setSuccessMessage(true)
      } else {
        alert('Something is wrong; try again later!')
        console.log('missing oobCode')
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-action-code') {
        alert('Something is wrong; try again later.')
      }
      console.log(error.message)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <>

    </>
  )
}
