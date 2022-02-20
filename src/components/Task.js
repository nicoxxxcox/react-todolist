import "./Task.css";

const Task = (props) => {
  const { id, body, checked, onChange, onClick, className } = props;
  return (
    <div key={id} className={`task ${className}`}>
      <input
        className="task__checkbox"
        checked={checked ? true : false}
        onChange={() => onChange(id)}
        type="checkbox"
      />
      <span className="task__title">
        {" "}
        {checked ? <del>{body}</del> : body}{" "}
      </span>
      {checked ? <button className="task__delBtn" title="Supprimer" onClick={() => onClick(id)}>&#10006;</button> : ""}
    </div>
  );
};

export default Task;
