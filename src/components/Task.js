import "./Task.css";

const Task = (props) => {
  const { id, body, checked, onChange } = props;
  return (
    <li key={id}>
      {checked ? <s>{body}</s> : body}{" "}
      <span>
        <input
          checked={checked ? true : false}
          onChange={() => onChange(id)}
          type="checkbox"
        />
      </span>
    </li>
  );
};

export default Task;
