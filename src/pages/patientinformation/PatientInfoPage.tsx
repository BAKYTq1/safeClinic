import React, { useState } from 'react';
import PatientInformation from '../patientinformation/Patientinformation'; 


const PatientInfoPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Пациент тууралуу маалымат</h1>

      <button onClick={() => setShowModal(true)}>
        Пациент жөнүндө маалымат
      </button>
      {showModal && (
        <PatientInformation onClose={() => setShowModal(false)} />
      )}

    </div>
  );
};

export default PatientInfoPage;
