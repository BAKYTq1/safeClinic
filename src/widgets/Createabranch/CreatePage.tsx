import React, { useState } from 'react';
import CreateABranch from '../Createabranch/Createabranch';

const CreatePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Филиалы</h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Добавить
      </button>

      {showModal && <CreateABranch onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CreatePage;
