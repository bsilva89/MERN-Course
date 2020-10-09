import classes from '../../../styles/Avatar.module.css';

const Avatar = props => {
  const inputClasses = [classes.avatar];

  if (props.className) {
    inputClasses.push(props.className);
  }

  return (
    <div className={inputClasses.join(' ')}
      style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
