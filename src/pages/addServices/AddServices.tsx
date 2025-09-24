import React, { useState, useEffect } from "react";
import "./AddServices.scss";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";
import img9 from "../../assets/svg/9.svg";
import { useCreateServiceStore } from "../../app/store/serviceStore/PostService";

interface Props {
  onClick?: () => void; 
}

const AddServices: React.FC<Props> = ({ onClick }) => {
  const { createService, loading, error, success } = useCreateServiceStore();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<number | "">("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null); 

  useEffect(() => {
    if (success) {
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setPhoto(null);
      setPreview(null);
      onClick?.(); 
    }
  }, [success, onClick]);

  useEffect(() => {
    if (!photo) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(photo);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category) {
      alert("Категорияны тандаңыз!");
      return;
    }

    await createService({
      name,
      price,
      description,
      category: Number(category),
      photo,
      branch_id: 1,
      is_active: true,
      duration_minutes: 15,
    });
  };

  return (
    <div className="services">
      <div className="services__header">
        <h2>Создать новые услуги</h2>
      </div>

      <div className="img">
        <label>
          <img src={preview || img9} alt="аватар врача" />
          <p>Добавить фото*</p>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />
        </label>
      </div>

      <form className="services-form" onSubmit={handleSubmit}>
        <div className="services-form__row">
          <div className="services-form__group">
            <label>Название услуги*</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="services-form__group">
            <label>Цена*</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="services-form__row">
          <div className="services-form__group">
            <label>Категория*</label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(Number(e.target.value))}
            >
              <option value="">Выберите категорию</option>
              <option value={1}>Стоматология</option>
              <option value={2}>Хирургия</option>
              <option value={3}>Ортодонтия</option>
            </select>
          </div>
        </div>

        <div className="services-form__group">
          <label>Описание услуги*</label>
          <textarea
            placeholder="Опишите услугу"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="form-actions">
          <button type="button" className="btn_cancel" onClick={onClick}>
            <img src={img10} alt="отмена" />
            <p>Отмена</p>
          </button>

          <button type="submit" className="btn_save" disabled={loading}>
            <img src={img11} alt="сохранить" />
            <p>{loading ? "Сохранение..." : "Сохранить"}</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
