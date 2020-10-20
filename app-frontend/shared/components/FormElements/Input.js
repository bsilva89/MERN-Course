import classes from '../../../styles/Input.module.css';
import { useReducer } from 'react';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: true
            }
        default:
            return state
    }
}

const Input = (props) => {
    const inputClasses = [classes.formcontrol];

    if (props.className) {
        inputClasses.push(props.className);
    }

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false});
    
    const onChangeHandler = event => {
        dispatch({type: 'CHANGE', val: event.target.value})
    }

    const element = props.element === 'input' 
    ? <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={inputState.value}
        />
    : <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={onChangeHandler}
        value={inputState.value}
        />

    if (!inputState.isValid) {
        inputClasses.push(classes.formcontrol_invalid);
    }
    
    return(
        <div className={inputClasses.join(' ')}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>{props.errorText}</p>}
        </div>
    )
};

export default Input;