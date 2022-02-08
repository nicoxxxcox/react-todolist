import "./Task.css";

const Task = (props) => {
  const { id, body, checked, onChange, onClick } = props;
  return (
    <div key={id} className="task">
<<<<<<< HEAD
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
=======
      <span>
        <input
          checked={checked ? true : false}
          onChange={() => onChange(id)}
          type="checkbox"
        />
      </span>
      <span className="task__title">{" "}{checked ? <del>{body}</del> : body}{" "}</span>
      {checked ? <button onClick={() => onClick(id)}>&#10006;</button> : "" }
>>>>>>> 0cdb635fb98f8da0bb8f05ec627e584d8720adad
    </div>
  );
};

export default Task;
