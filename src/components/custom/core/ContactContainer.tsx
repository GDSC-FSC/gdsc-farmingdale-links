/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Card } from ".";
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/src/components/ui/card'
const ContactContainer: React.FC<
  Record<
    string,
    React.ReactNode
  >
> = ({ cardContent, cardTitle, cardDescription }) => {
  return (
    <>
      <Card
        className={``}
        children={
          <>
            <CardHeader
              className={``}
            >
              <CardTitle
                className={``}
              >

              </CardTitle>
              <CardDescription
                className={``}
              >

              </CardDescription>
            </CardHeader>
            <CardContent
              className={``}
            >
              {cardContent}
            </CardContent>
          </>
        }
      />
    </>
  )
}

export default ContactContainer
