import './Form.css'
const Form = (props) => {
  const { taskInput, onSubmit, onChange } = props;

  return (
    <form className="taskForm" onSubmit={onSubmit}>
      <input className="taskForm__input" type="text" placeholder='Element de liste' value={taskInput} onChange={onChange} />
      <button className="taskForm__btn" type="submit">+</button>
    </form>
  );
};

export default Form;
