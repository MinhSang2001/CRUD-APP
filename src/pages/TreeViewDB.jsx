import Products from 'Products';
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Tree, TreeNode } from 'react-organizational-chart';

const TreeViewDB = () => {
  // Gán biến id bằng useParams để lấy giá trị của id hiện tại
  const { id } = useParams();
  // Dùng hàm find để tìm kiếm dữ liệu theo id được lấy ra
  const product = Products.find((prod) => prod.id === id)
  // Khai báo các kiểu dữ liệu có trong data
  const { name, ditrict, ward } = product

  return (
    <div className='container text-dark fw-bold mt-5 '>
      <Tree  
        lineWidth={'4px'}
        lineColor={'red'}
        lineBorderRadius={'10px'} 
        label={<div className='tree'>{name}</div>}
      >
        <TreeNode label={<div className='tree'>{ditrict}</div>}>
          <TreeNode label={<div className='tree'>{ward}</div>} />
        </TreeNode>
      </Tree>
      <Link to="/" className='btn btn-danger mt-5'>Back</Link> 
    </div>
  )
}

export default TreeViewDB