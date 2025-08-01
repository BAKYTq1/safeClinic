import React, { useState } from 'react';
import InformationModal from '../Information/Information'; // туура жол

const InfoPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Записаться</h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Записаться
      </button>

      {showModal && <InformationModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default InfoPage;
