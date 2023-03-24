'use client';

import { useRecoilState } from 'recoil';
import { modalState } from 'atom/modalAtom';
import Modal from 'react-modal';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {open && (
        <Modal
          className='absolute max-w-lg w-[90%] h-[300px] top-56 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-md shadow-md'
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <h1>Modal</h1>
        </Modal>
      )}
    </div>
  );
}
