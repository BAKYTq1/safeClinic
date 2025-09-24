import React, { useEffect, useState } from "react";
import styles from "./ServiceList.module.scss";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import DeleteModal from "../../shared/ui/DeleteModal";
import { ServiceModal } from "../ServiceModal/ServiseModal";
import { useServiceStore, Service } from "../../app/store/serviceStore/GetService"; // store

export const ServiceList: React.FC = () => {
  const { services, getServices, deleteService } = useServiceStore();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    getServices();
  }, [getServices]);

  const handleDelete = async () => {
    if (deleteId !== null) {
      await deleteService(deleteId);
      setOpenDelete(false);
      setDeleteId(null);
    }
  };

  return (
    <div className={styles["service-list"]}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className={styles["name-service"]}>Название услуги</th>
            <th className={styles["description-service"]}>Описание</th>
            <th className={styles["price-service"]}>Стоимость</th>
            <th className={styles["action-service"]}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>
                {service.photo && (
                  <img
                    src={service.photo}
                    alt={service.name}
                    className={styles["service-image"]}
                  />
                )}
              </td>
              <td
                className={styles["service-name"]}
                onClick={() => setSelectedService(service)}
              >
                <span className={styles["link-style"]}>{service.name}</span>
              </td>
              <td className={styles["service-description"]}>{service.description}</td>
              <td className={styles["service-price"]}>{service.price}</td>
              <td className={styles["service-actions"]}>
                <MdDelete
                  className={`${styles.icon} ${styles.delete}`}
                  onClick={() => {
                    setDeleteId(service.id);
                    setOpenDelete(true);
                  }}
                />
                <FiEdit3 className={`${styles.icon} ${styles.edit}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openDelete && (
        <div className="modal-backdrop" onClick={() => setOpenDelete(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteModal
              onConfirm={handleDelete}
              onCancel={() => setOpenDelete(false)}
            />
          </div>
        </div>
      )}

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};
