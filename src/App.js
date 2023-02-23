import React from 'react'
import 'assets/css/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import Add from 'components/Add';
import Update from 'components/Update';
import Read from 'components/Read';
import TreeViewDB from 'pages/TreeViewDB';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>  {/* Tạo ra 1 liên kết đến components Home */}
            <Route path="add" element={<Add />}/> {/* Tạo ra 1 liên kết đến components Add */}
            <Route path="update/:id" element={<Update />}/> {/* Tạo ra 1 liên kết đến components Update */}
            <Route path="read/:id" element={<Read />} />  {/* Tạo ra 1 liên kết đến components Read */}
            <Route path="treeviewdb/:id" element={<TreeViewDB />} />  {/* Tạo ra 1 liên kết đến components TTreeViewDB */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App