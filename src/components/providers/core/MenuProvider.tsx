import { useEffect } from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/src/components/ui/context-menu"
import { useCarousel } from "."
import { useLocation, useNavigate } from "react-router-dom"
import { getBrowser } from "@/src/utils/platform"
import { useOnlineStatus } from '../../../hooks/index'
const getShortcutSymbol = (): string => {
  const browser = getBrowser();
  switch (browser) {
    case 'safari':
    case 'ios':
      return '⌘';
    case 'firefox':
      return 'Ctrl';
    default:
      return 'Ctrl';
  }
}

export function ContextMenuProvider({
  children
}: {
  children: React.ReactNode
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const { setMediaType } = useCarousel();
  useEffect(() => {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
  }, [])

  const handleSwitchToImageCarousel = () => {
    setMediaType('image');
  };

  const handleSwitchToVideoCarousel = () => {
    setMediaType(`video`);
  };

  const hideCarouselOptions = location.pathname.startsWith('/auth');

  const isOnline = useOnlineStatus();
  return (
    <ContextMenu
    >
      <ContextMenuTrigger
        className="flex items-center justify-center w-screen h-screen text-sm absolute z-10 top-0 left-0"/>
      <ContextMenuContent
        className={`w-64 `}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '1rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          color: 'var(--color-card-foreground)',
        }}
      >
        <ContextMenuItem
          inset
          onClick={() => {
            navigate(-1)
          }}
          className={` font-normal text-white`}

        >
          Back
          <ContextMenuShortcut
            className={`
              text-xs tracking-widest text-background-50
            `}
          >Alt + ⇦</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => {
            window.location.reload()
          }}
          className={` font-normal text-white`}
        >
          Reload
          <ContextMenuShortcut
            className={`
              text-xs tracking-widest text-background-50
            `}
          >{getShortcutSymbol()}+R</ContextMenuShortcut>
        </ContextMenuItem>
        {!hideCarouselOptions && (
          <>
            <ContextMenuItem inset onClick={handleSwitchToImageCarousel}
              className={` font-normal text-white`}
            >
              Image Carousel
            </ContextMenuItem>
            {isOnline && (
            <ContextMenuItem inset onClick={handleSwitchToVideoCarousel}
              className={` font-normal text-white `}
            >
              Video Carousel
            </ContextMenuItem>
            )}
          </>
        )}
      </ContextMenuContent>
      {children}
    </ContextMenu>
  )
}
