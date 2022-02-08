const TaskCount = (props) => {
  const {count} = props

  return (
    <div className="taskCount">Vous avez {count} tâches en cours</div>
  )
}

export default TaskCount
