// import { CogIcon } from 'lucide-react'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/src/components/ui/popover";
// import { Button } from '@/src/components/ui/button';
import { PrimitiveDiv as Div } from '@/src/components/templates/index';
import React from 'react';
const Settings = () => {
  return (
    <>
      <Div className="grid gap-4">
        <Div className="grid gap-2">
          <Div className="grid grid-cols-2 items-center gap-4 mx-auto ">
            <SettingsContent />
          </Div>
        </Div>
      </Div>
    </>
  )
}

import { Language } from '../core/Language';
import { ModeToggle } from '@/src/components/providers/index';

const settingContent = [
  <Language />,
  <ModeToggle align={`center`} className={` w-[310px]`} />

]

const SettingsContent = () => {
  return (
    <>
      {settingContent.map((content, index) => {
        return (
          <React.Fragment key={index}>
            {content}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Settings
