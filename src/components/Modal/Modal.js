import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  showModal = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    var { show, isEdit, isModalWorld, handleClose, children, onSubmit, onDelete } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h3 style={{ textAlign: "center", margin: "20px" }}>
            {!isEdit ? `Thêm bệnh nhân` : `Chỉnh sửa thông tin`}
          </h3>
          <hr />
          <div className="container">
            <form onSubmit={onSubmit}>
              {children}
              <hr />
              <div className="btn-group-modal">
                <button type="submit" className="btn btn-success">
                  Lưu
                </button>
                <button
                  type="button"
                  className={
                    (isEdit && !isModalWorld) ? "btn btn-danger" : "display-none btn btn-danger"
                  }
                  onClick={onDelete}
                >
                  Xóa
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
