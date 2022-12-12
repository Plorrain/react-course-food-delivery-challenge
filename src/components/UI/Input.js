import classes from './Input.module.css';

const Input = (props) => {
return (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input} />
    {/*{...props.input} = means it's configurable from oustide the component whatever type onf input is decided will be rendered */}
  </div>

)
};

export default Input;
