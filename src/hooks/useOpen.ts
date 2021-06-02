import { useState } from 'react';

type TUseOpen = {
  handleOpen: () => void;
  handleClose: () => void;
  isOpen: boolean;
  toggle: () => void;
};

export default function useOpen(): TUseOpen {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);
  const toggle = () => setisOpen((prev) => !prev);

  return { handleOpen, handleClose, toggle, isOpen };
}
