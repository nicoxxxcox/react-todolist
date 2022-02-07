import "./Task.css";

const Task = (props) => {
  const { id, body, checked, onChange, onClick } = props;
  return (
    <li key={id}>
      <span>
        <input
          checked={checked ? true : false}
          onChange={() => onChange(id)}
          type="checkbox"
        />
      </span>
      {" "}{checked ? <s>{body}</s> : body}{" "}
      {checked ? <button onClick={() => onClick(id)}>&#10006;</button> : "" }
    </li>
  );
};

export default Task;
