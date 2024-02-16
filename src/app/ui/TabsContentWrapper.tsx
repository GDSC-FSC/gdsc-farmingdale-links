import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card'
import { ScrollBar, ScrollArea } from '@/src/components/ui/scroll-area'
import { TabsContent } from '@/src/components/ui/tabs'

const MatchValueToTitle = (value: string) => {
  switch (value) {
    case 'upcoming':
      return 'Upcoming Events'
    case 'past':
      return 'Past Events'
    default:
      return 'Links'
  }
}

export const TabsContentWrapper: React.FC<{
  readonly children: React.ReactNode,
  value: string
}> = ({ children, value }) => {
  return (
    <>
      <TabsContent
        value={value}
        className={`
          flex flex-col items-center justify-start w-full h-full bg-transparent top-0 mt-0
        `}
      >
        <Card
          className={`
            w-full flex flex-col items-center justify-start h-full rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] relative shadow-md transition-all ease-in-out duration-[85ms] border-none
          `}
        >
          <CardHeader
            className={`
              w-full flex flex-col items-center justify-start h-fit 2 p-2 rounded-t-sm bg-black bg-opacity-20 relative shadow-lg transition-all ease-in-out duration-[85ms]
            `}
            role={`article`}
          >
            <CardTitle
              className={`text-white text-md font-bold`}
            >
              {MatchValueToTitle(value)}
            </CardTitle>
          </CardHeader>
          <CardContent
            className={`w-full flex flex-col items-center h-full pt-0 rounded-b-sm p-2`}
          >
            <ScrollArea
              className={`
                      w-full h-fit max-h-[400px] min-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start gap-1
                    `}
            >
              {children}
              <ScrollBar />
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  )
}
