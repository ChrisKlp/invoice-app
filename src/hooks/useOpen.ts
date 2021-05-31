import { useState } from 'react';

type TUseOpen = {
  handleOpen: () => void;
  handleClose: () => void;
  isOpen: boolean;
  trigger: () => void;
};

export default function useOpen(): TUseOpen {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);
  const trigger = () => setisOpen((prev) => !prev);

  return { handleOpen, handleClose, trigger, isOpen };
}
