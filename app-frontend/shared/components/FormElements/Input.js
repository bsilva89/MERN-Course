import classes from '../../../styles/Input.module.css';
import { useReducer, useEffect } from 'react';
import { validate } from '../../util/validator'

const inputReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: true//validate(action.val, action.validators)
        };
      case 'TOUCH': {
        return {
          ...state,
          isTouched: true
        }
      }
      default:
        return state;
    }
  };
  
  const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
      value: props.initialValue || '',
      isTouched: false,
      isValid: props.initialValid || false
    });
  
    const { id, onInput } = props;
    const { value, isValid } = inputState;
  
    useEffect(() => {
      onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);
  
    const changeHandler = event => {
      dispatch({
        type: 'CHANGE',
        val: event.target.value,
        validators: props.validators
      });
    };
  
    const touchHandler = () => {
      dispatch({
        type: 'TOUCH'
      });
    };
  
    const element =
      props.element === 'input' ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      ) : (
        <textarea
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
  
    const inputClasses = [classes.formcontrol];

    if (props.className) {
        inputClasses.push(props.className);
    }
    
    if (!inputState.isValid && inputState.isTouched) {
        inputClasses.push(classes.formcontrol_invalid);
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
};

export default Input;