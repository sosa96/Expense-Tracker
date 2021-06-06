import './Card.css';

const Card = props => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>; // built in property with value of content between opening and closing tags of custom components
};

export default Card;
