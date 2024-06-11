import Modal from "react-modal";
function Detail({ modal1IsOpen, closeModal1, task }) {
  return (
    <Modal
      isOpen={modal1IsOpen}
      onRequestClose={closeModal1}
      contentLabel="Modal 1"
    >
      <div className="descriptionPopup">
        <p>Title: {task.title}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Description: {task.description}</p>
        <p>Assigned to: {task.assignedTo}</p>
        <div className="buttonSmall" onClick={closeModal1}>
          OK
        </div>
      </div>
    </Modal>
  );
}
export default Detail;
