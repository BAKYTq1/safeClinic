import React, { useEffect, useState } from "react";
import "./Doctors.scss";
import img13 from "../../assets/svg/13.svg";
import img14 from "../../assets/svg/14.svg";
import DoctorEditing from "../realize/DoctorEditing";
import DeleteModal from "../../shared/ui/DeleteModal";
import AboutDoctor from "../aboutdoctor/Aboutdoctor";
import { useGetDoctors } from "../../app/store/doctors/Getdoctors";

const Doctors: React.FC = () => {
  const { doctors, fetchDoctors, loading } = useGetDoctors();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any | null>(null);
  const [deletemodal, setdeletemodal] = useState(false);
  const [openinfo, setopeninfo] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const openEditModal = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setSelectedDoctor(null);
  };

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className="doctors">
      <div className="table">
        <div>
          <span>Имя</span>
          <span>Email</span>
          <span>Теги</span>
          <span>Клиенты</span>
          <span>Действия</span>
        </div>
        <div style={{ borderBottom: "1px solid rgb(187, 187, 187)", marginTop: "12px" }}></div>
      </div>

     {isEditing && selectedDoctor && selectedDoctor.id && (
  <DoctorEditing patient={selectedDoctor} onClose={closeEditModal} />
)}

      <div className="pagination-wrapper">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="pagination">
            <div className="circle">
              <div className="avatar">{doctor.name.charAt(0)}</div>
              <div className="text">
                <h6 onClick={() => setopeninfo(true)}>{doctor.name}</h6>
                <p>{doctor.email}</p>
              </div>
            </div>

            <h4>{doctor.email}</h4>
            <h4>{doctor.tags}</h4>
            <h4>{doctor.clients}</h4>

            <div className="imgs">
              <img src={img13} alt="delete" onClick={() => setdeletemodal(true)} />
              <img
                src={img14}
                alt="edit"
                style={{ cursor: "pointer" }}
                onClick={() => openEditModal(doctor)}
              />
            </div>
          </div>
        ))}
      </div>

      {deletemodal && (
        <div className="modal-backdrop" onClick={() => setdeletemodal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteModal />
          </div>
        </div>
      )}

      {openinfo && (
        <div>
          <AboutDoctor onClose={() => setopeninfo(false)} />
        </div>
      )}
    </div>
  );
};

export default Doctors;
