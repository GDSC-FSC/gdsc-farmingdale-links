import React from 'react'
import { ConstructMetadata } from '@/src/components/templates/metadata';
import { usePageEffect } from '@/src/core/page';
import { appName, appOrigin, appEmail } from '@/src/constants/app';
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { CustomButton as Button } from '@/src/components/custom';
import { ContactForm, contactFormSchema } from '@/src/schema/contact';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/src/components/ui/input"
import ContactContainer from '@/src/components/custom/core/ContactContainer';
import { Textarea } from '@/src/components/ui/textarea'
export const Component: React.FC = function Contact() {
  usePageEffect({ title: `Contact | ${appName}` });
  ConstructMetadata({
    title: `Contact | ${appName}`,
    description: `Contact ${appName} for any inquiries`,
    url: `${appOrigin}/contact`,
    image: `${appOrigin}/logo.png`,
  })
  const onSubmit: SubmitHandler<ContactFormProps> = (formData) => { window.location.href = `mailto:${appEmail}?subject=${formData.subject}&body=${formData.message}` };
  const [charactersLeft, setCharactersLeft] = useState(500);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentLength = event.target.value.length;
    const remaining = 1000 - currentLength;
    setCharactersLeft(remaining);
  };
  return (
    <>
      <ContactContainer
        title={`Contact form`}
        cardContent={
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-8 select-none w-[80vw]">
            <div className="flex space-x-2">
              <Input {...form.register('name')} placeholder="Name" className="input-style" type="text" required maxLength={255} />
              <Input {...form.register('email')} placeholder="Email" className="input-style" type="email" required maxLength={255} />
            </div>
            <Input {...form.register('subject')} placeholder="Subject" className="input-style" type="text" required maxLength={255} />
            <Textarea
              autoCapitalize="sentences"
              autoCorrect="on"
              spellCheck="true"
              {...form.register('message')}
              placeholder="Message"
              maxLength={1000}
              required
              onChange={handleTextareaChange}
              className="input-style max-h-[500px] min-h-[100px]"
            />
            <p className="text-sm text-gray-500">Characters left: {charactersLeft}</p>
            <Button type="submit" className="submit-button">
              Submit
            </Button>
          </form>
        }
      />
    </>
  )
}
