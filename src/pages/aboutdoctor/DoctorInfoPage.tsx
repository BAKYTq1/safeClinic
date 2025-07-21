// pages/DoctorInfoPage.tsx
import React, { useState } from 'react';
import AboutDoctor from '../aboutdoctor/Aboutdoctor';

const DoctorInfoPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Врач тууралуу маалымат</h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Врач жөнүндө маалымат
      </button>

      {showModal && <AboutDoctor onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DoctorInfoPage;
