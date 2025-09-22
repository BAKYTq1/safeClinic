import React from "react";
import "./style.scss";

interface DeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onClose, onConfirm, loading = false }) => {
  return (
    <div className="delete-modal-backdrop" onClick={onClose}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <div className="item-delete-modal">
          <p>Вы действительно хотите удалить?</p>
          <div className="delete-modal-buttons">
            <button onClick={onClose} disabled={loading}>Нет</button>
            <button onClick={onConfirm} disabled={loading}>
              {loading ? "Удаление..." : "Да"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
