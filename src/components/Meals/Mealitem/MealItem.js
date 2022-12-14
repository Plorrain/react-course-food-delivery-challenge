import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  // the ? was necessary because react considers to.Fixed to be
  // attached to an undefined function
  // will probably not be useful when it won't be undefinded ??
  const price = `$${props.price?.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
       <MealItemForm id={props.id} />
      </div>
    </li>
  )
}

export default MealItem;
