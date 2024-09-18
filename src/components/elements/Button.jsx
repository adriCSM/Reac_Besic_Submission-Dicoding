import React from 'react';
export default function Button({ className, name, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
}
// jika ini terbaca, izin bertabya
// Saya mencoba menggunakan prinsip atomic design dalam membuat component dari bagian kecil hingga terbesar. izin koreksinya apabila dalam penerapannya masih keliru, dan bagaimana cara penerapan terbaiknya?
