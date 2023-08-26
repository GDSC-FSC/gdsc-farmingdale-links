import { CustomButtonProps } from '../utils'
import { ShareIcon } from './icons'
const Button = ({title, containerStyles, handleClick, textStyles, isDisabled, share }: CustomButtonProps) => {
  return (
    <button disabled={isDisabled} type={`button`} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`button-text ${textStyles}`}>
        {title}
      </span>
      {share ? 
        <ShareIcon/>
      : null}
    </button>
  )
}  
export default Button