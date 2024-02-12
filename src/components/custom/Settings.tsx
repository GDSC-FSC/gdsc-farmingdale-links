import { CogIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { Button } from '@/src/components/ui/button';
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
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <SettingsContent />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
import { Language } from './Language';
const settingContent = [
  {
    component: Language,
    
  }
]

const SettingsContent = () => {
  return (
    <>

    </>
  )
}

export default Settings
