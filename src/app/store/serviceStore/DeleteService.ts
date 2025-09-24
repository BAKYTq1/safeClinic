import { useServiceStore } from "../../store/serviceStore/GetService"

export const DeleteService = async (id: number) => {
  const { deleteService } = useServiceStore.getState();
  await deleteService(id);
};