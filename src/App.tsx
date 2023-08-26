import React, {useEffect, useState} from 'react'
import { buttonLinks, navLinks } from './utils'
import { GDSCIcon } from './components/icons'
import { Button } from './components/index'
const name = "GDSC Farmingdale"
export default function App() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    document.documentElement.classList.add(theme)
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light')
  }, [theme])
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(theme) setTheme(theme)
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      if (card instanceof HTMLElement) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      }
    }
  };
  const NavigationContainer = () => {
    const Buttons = () => {
      return (
        <div className='flex flex-col w-full gap-4 overflow-y-auto'>
          {buttonLinks.map((item) => {
            return (
              <Button key={item.name} title={item.name} link={item.path} containerStyles='h-[30px]' share={true} textStyles='font-bold text-[14px]'/>
            )})}
        </div>
      )
    }
    return(
      <div className='flex flex-col items-center justify-center w-[90%]'>
        <h3 className='mb-3'>Events</h3>
        <Buttons/>
      </div>
    )
  }
  const Header = () => {
    const Links = () => {
      return (
        <div className='flex items-center justify-center gap-2'>
          {navLinks.map((item) => {
            return (
              <a key={item.name} className="rounded-lg " href={item.path} target='_blank'>
                {item.icon && <item.icon/>}
              </a>
          )})}
        </div>
      )
    }
    return (
      <header className='flex flex-col items-center justify-center gap-2'>
        <GDSCIcon width={100} height={100}/>
        <h1 className='text-sm font-bold'>{name}</h1>
        <Links/>
      </header>
    )
  }
  return (
    <React.Fragment>
      <section 
      id={`card`}
      onMouseMove={handleMouseMove}
      className='rounded-md shadow-md w-[300px] mt-[50px] mb-[50px] h-[80vh] justify-around items-center flex flex-col light:glass-card border-2'>
        <Header/>
        <NavigationContainer/>
      </section>
    </React.Fragment>
  )
}