import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Alert: React.FC = () => {
  return (
    <div>
      <ToastContainer theme='dark' />
    </div>
  );
}