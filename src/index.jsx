import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApps from './components/pages/NotesApps';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApps />);

// Izin bertanya
// pada project ini telah menggunakna dependensi react versi 18, bukankah react versi 17 ke atas tidak perlu lagi untuk mengimport module pada setiap file jsx nya, namun ketika react tidak saya importkan, pada console muncul error. mohon penjelasnnya?
