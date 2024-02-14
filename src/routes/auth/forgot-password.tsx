/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ConstructMetadata } from '@/src/components/templates/metadata';
import { appName, appOrigin, appEmail } from '@/src/constants/app';
import { Link } from "@/src/components/custom";

export const Component = function ForgotPassword(): JSX.Element {
  // usePageEffect({
  //   title: `Forgot Password`
  // });
  // ConstructMetadata({
  //   title: `Forgot Password`,
  //   description: `Forgot Password`,
  //   url: import.meta.url,
  //   image: `${import.meta.url}/assets/images/og.png`
  // });
  // const [email, setEmail] = useState('')
  // const [emailMessage, setEmailMessage] = useState(false)

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     await passwordReset(email);
  //     setEmailMessage(true);
  //   } catch (error: any) {
  //     if (error.code === 'auth/user-not-found') {
  //       alert('User not found, try again!')
  //       setEmail('')
  //     }
  //   }
  // };
  return (
    <>

    </>
  )
}
