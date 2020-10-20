import Link from 'next/link';

import classes from '../../../styles/Button.module.css';

const Button = props => {
    const inputClasses = [classes.button];

    if (props.inverse || props.danger || props.size) {
        inputClasses.push(props.size && (props.size === 'big' ? classes.button__big : classes.button__small));
        inputClasses.push(props.inverse && classes.button__inverse);
        inputClasses.push(props.danger && classes.button__danger);
    }

    if (props.href) {
        return (
            <a href={props.href} className={inputClasses.join(' ')}>
                {props.children}
            </a>
        );
    }
    if (props.to) {
        return (
            <Link href={props.to}>
                <button 
                exact={props.exact}
                className={inputClasses.join(' ')}>
                    <a>
                        {props.children}
                    </a>
                </button>
            </Link>
        );
    }
    return (
        <button
            className={inputClasses.join(' ')}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}>
                {props.children}
        </button>
    );
};

export default Button;
