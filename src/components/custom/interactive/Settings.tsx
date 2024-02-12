import { CogIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { Button } from '@/src/components/ui/button';
import { PrimitiveDiv as Div } from '@/src/components/templates/index';

const Settings = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={`ghost`}
            size={`sm`}
            children={
              <>
                <CogIcon className="h-4 w-4" />
              </>
            }
          />
        </PopoverTrigger>

        <PopoverContent
          align={`end`}
          className="w-44 pt-3 mt-4 mr-2"
          side={`bottom`}
          sideOffset={0}
        >
          <Div className="grid gap-4">
            <Div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
            </Div>
            <Div className="grid gap-2">
              <Div className="grid grid-cols-3 items-center gap-4">
                <SettingsContent />
              </Div>
            </Div>
          </Div>
        </PopoverContent>
      </Popover>
    </>
  )
}

import { Language } from './Language';
import { ModeToggle } from '@/src/components/providers/index';

const settingContent = [
  {
    component: Language,
  },
  {
    component: ModeToggle,
  }
]

const SettingsContent = () => {
  return (
    <>
      {settingContent.map((content, index) => {
        const { component: Component } = content;
        return (
          <Component key={index} />
        )
      })}
    </>
  )
}

export default Settings
