import React, { useState } from "react";
import { usePatchPatient, Patient } from "../../app/store/PATCH/PatchD";

interface Props {
  patient: Patient;
  onClose: () => void;
}

const DoctorEditing: React.FC<Props> = ({ patient, onClose }) => {
  const { patchPatient, loading } = usePatchPatient();
  const [form, setForm] = useState({
    full_name: patient.full_name,
    gender: patient.gender,
    phone: patient.phone,
    birth_date: patient.birth_date,
    address: patient.address,
    complaints: patient.complaints || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const updated = await patchPatient(patient.id, form);
    if (updated) {
      alert("Маалымат жаңыртылды!");
      onClose();
    }
  };

  return (
    <div className="modal">
      <h3>Пациентти өзгөртүү</h3>
      <input name="full_name" value={form.full_name} onChange={handleChange} />
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input name="phone" value={form.phone} onChange={handleChange} />
      <input name="birth_date" type="date" value={form.birth_date} onChange={handleChange} />
      <input name="address" value={form.address} onChange={handleChange} />
      <input name="complaints" value={form.complaints} onChange={handleChange} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Жаңыртылып жатат..." : "Сактоо"}
      </button>
      <button onClick={onClose}>Жабуу</button>
    </div>
  );
};

export default DoctorEditing;
