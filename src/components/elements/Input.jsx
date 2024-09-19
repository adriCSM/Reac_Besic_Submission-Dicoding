import React from 'react';
export default function Input({ value, type, placeholder, onChange }) {
  return <input value={value} type={type} placeholder={placeholder} onChange={onChange} />;
}
