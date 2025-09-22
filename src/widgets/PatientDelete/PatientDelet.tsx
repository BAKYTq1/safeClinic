import { useState } from "react";
import { MdDelete } from "react-icons/md"; 
import styles from './PatientDelet.module.scss';
import DeleteModal from "../../shared/ui/DeleteModal";
import { useDeletePatient } from "../../app/store/deletePatient/DeletePatient";
import { usePatientStore, Patient } from "../../app/store/PatientList/PatientList";

interface PatientDeletProps {
  patientId: number;
}

const PatientDelet = ({ patientId }: PatientDeletProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deletePatient, loading } = useDeletePatient();
  const { getPatientById } = usePatientStore();

  const patient: Patient | undefined = getPatientById(patientId);

  const handleDelete = async () => {
    await deletePatient(patientId);
    setIsModalOpen(false);
  };

  if (!patient) return null;

  return (
    <div className={styles.container}>
      <button 
        className={`${styles['icon-button']} ${styles['delete']}`} 
        title="Удалить"
        onClick={() => setIsModalOpen(true)}
        disabled={loading}
      >
        <MdDelete size={18} />
      </button> 

      {isModalOpen && (
        <DeleteModal 
          onClose={() => setIsModalOpen(false)} 
          onConfirm={handleDelete} 
          loading={loading} 
        />
      )}
    </div>
  );
};

export default PatientDelet;
