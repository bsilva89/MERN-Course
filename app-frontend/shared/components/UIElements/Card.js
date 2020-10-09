import classes from '../../../styles/Card.module.css';

const Card = props => {
  const inputClasses = [classes.card];

  if (props.className) {
      inputClasses.push(props.className);
  }
  
  return (
    <div className={inputClasses.join(' ')} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
