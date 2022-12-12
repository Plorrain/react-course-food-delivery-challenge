import classes from './Input.module.css';

const Input = (props) => {
return (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input id={props.input.id} {...props.input} />
    {/*{...props.input} = means whatever type onf input is decided will be rendered */}
  </div>

)
};

export default Input;
