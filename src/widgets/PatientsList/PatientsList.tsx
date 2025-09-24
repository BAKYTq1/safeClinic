import React, { useEffect, useState } from "react";
import styles from "./PatientsList.module.scss";
import { usePatientStore, Patient as PatientType } from "../../app/store/PatientList/PatientList";
import PatientInformation from "../../pages/patientinformation/Patientinformation";
import PatientDelet from "../PatientDelete/PatientDelet";
import { MdEdit } from "react-icons/md"; 
import PatientVisits from "../PatientVisits/PatientVisits";
import Modal from "../../widgets/Modal/Modal";
import PatientForm from "../PatientForm/PatientForm";
import { usePatientEditStore } from "../../app/store/patientEdit/PatientEdit";

const PatientsList: React.FC = () => {
  const patients = usePatientStore((state) => state.patients);
  const fetchPatients = usePatientStore((state) => state.fetchPatients);

  const { updatePatient } = usePatientEditStore();

  const [infoOpen, setInfoOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [visitsOpen, setVisitsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<PatientType | null>(null);

  // Загружаем пациентов при монтировании
  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  return (
    <div className={styles["patients-list-wrapper"]}>
      <div className={styles["patients-list-container"]}>
        <table>
          <thead>
            <tr>
              <th className={styles["patient-name"]}>Имя</th>
              <th className={styles["patient-number"]}>Телефон</th>
              <th className={styles["p-addres"]}>Адрес</th>
              <th className={styles["p-date"]}>Дата посещения</th>
              <th className={styles["p-icon"]}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td onClick={() => { setSelectedPatient(patient); setInfoOpen(true); }}>
                  {patient.full_name}
                </td>
                <td>
                  <a href={`tel:${patient.phone}`}>{patient.phone}</a>
                </td>
                <td className={styles["patient-address"]}>{patient.address}</td>
                <td
                  className={styles["patient-date"]}
                  onClick={() => {
                    setSelectedPatient(patient);
                    setVisitsOpen(true);
                  }}
                >
                  {patient.birth_date}
                </td>
                <td className={`${styles['icon-button']}`}>
                  <PatientDelet patientId={patient.id} />
                  <button 
                  className={`${styles['edit']}`} 
                  onClick={() => { setSelectedPatient(patient); setEditOpen(true); }}>
                    <MdEdit/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Инфо о пациенте */}
      {infoOpen && selectedPatient && (
        <Modal onClose={() => setInfoOpen(false)}>
          <PatientInformation patient={selectedPatient} onClose={() => setInfoOpen(false)} />
        </Modal>
      )}

      {/* Редактирование пациента */}
      {editOpen && selectedPatient && (
        <Modal onClose={() => setEditOpen(false)}>
          <PatientForm
            initialData={selectedPatient}
            onCancel={() => setEditOpen(false)}
            onSave={(updated) => {
              updatePatient(updated);
              setEditOpen(false);
            }}
          />
        </Modal>
      )}

      {/* Изменение даты визита */}
      {visitsOpen && selectedPatient && (
        <PatientVisits
          isOpen={visitsOpen}
          onClose={() => setVisitsOpen(false)}
          currentDate={selectedPatient.birth_date}
          onSelectDate={(date) => {
            updatePatient({ ...selectedPatient, birth_date: date });
            setVisitsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default PatientsList;
