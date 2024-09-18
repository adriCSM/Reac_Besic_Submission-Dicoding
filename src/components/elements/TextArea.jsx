import React from 'react';
export default function TextArea({ value, type, placeholder, onChange, className }) {
  return (
    <textarea value={value} type={type} placeholder={placeholder} onChange={onChange} rows="10" />
  );
}
