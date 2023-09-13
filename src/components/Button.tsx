import {CustomButtonProps} from '../utils';
import {ShareIcon} from './icons';

const Button = ({title, containerStyles, link, textStyles, isDisabled, share}: CustomButtonProps) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <button disabled={isDisabled} type="button" className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            <span className={`button-text ${textStyles}`}>
                {title}
            </span>
            {share ? <ShareIcon/> : null}
        </button>
    );
};

export default Button;