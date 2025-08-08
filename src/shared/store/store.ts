import { create } from 'zustand';

type CreateRoadmapModal = {
  type: 'create-roadmap';
};

type TypeModalState = CreateRoadmapModal | null;

type ModalState = {
  type: TypeModalState;
  isOpen: boolean;
  onOpen: (type: TypeModalState) => void;
  onClose: () => void;
};

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  onOpen: (type: TypeModalState) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false }),
}));
