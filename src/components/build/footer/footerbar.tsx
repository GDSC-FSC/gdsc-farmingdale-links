import { Footer as FooterContainer } from '@/src/components/templates/index'

interface FooterProps {

}

export const Footer = () => {
  return (
    <FooterContainer>
        <a href="#top">Top</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
    </FooterContainer>
  )
}
