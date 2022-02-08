import "./Task.css";

const Task = (props) => {
  const { id, body, checked, onChange, onClick } = props;
  return (
    <div key={id} className="task">
      <span>
        <input
          checked={checked ? true : false}
          onChange={() => onChange(id)}
          type="checkbox"
        />
      </span>
      <span className="task__title">{" "}{checked ? <del>{body}</del> : body}{" "}</span>
      {checked ? <button onClick={() => onClick(id)}>&#10006;</button> : "" }
    </div>
  );
};

export default Task;
