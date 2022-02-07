const Form = (props) => {
  const { taskInput, onSubmit, onChange } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={taskInput} onChange={onChange} />
      <button type="submit">+ Element de liste</button>
    </form>
  );
};

export default Form;
