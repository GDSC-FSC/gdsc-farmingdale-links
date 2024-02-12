import { useState } from "react";
import { constructMetadata } from '@/src/utils/metadata';
import { usePageEffect } from '../core/page';
import { appName, appOrigin, appEmail } from '@/src/constants/app';
import { Link } from "@/src/components/custom";

export const Component = function ForgotPassword(): JSX.Element {
  usePageEffect({
      title: `Forgot Password`
  });
  constructMetadata({
    title: `Forgot Password`,
    description: `Forgot Password`,
    url: import.meta.url,
    image: `${import.meta.url}/assets/images/og.png`
  });
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await passwordReset(email);
      setEmailMessage(true);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found, try again!')
        setEmail('')
      }
    }
  };
  return (
    <>

    </>
  )
}
