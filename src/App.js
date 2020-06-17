import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import AdminLayout from './containers/AdminLayout';

const title = '株式会社ショクリュー'; 
const gitUrl = 'https://github.com/a-nakajima-at-shokuryu'; 

function App() {
  return (
    <AdminLayout
      title={title}
      gitUrl={gitUrl}
    >
      <Counter />
    </AdminLayout>
  );
}

export default App;
