import { CreateRoadmapModal } from '@/features/roadmap-list/ui/create-roadmap.modal';
import { useModal } from '../store/store';

export const ModalProvider = () => {
  const { type, isOpen, onClose } = useModal();

  switch (type?.type) {
    case 'create-roadmap':
      return (
        <CreateRoadmapModal
          close={onClose}
          open={isOpen}
        />
      );
    default:
      return null;
  }
};
