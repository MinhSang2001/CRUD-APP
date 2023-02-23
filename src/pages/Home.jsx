import React, { useState } from 'react'
import Navbar from 'pages/Navbar'
import { Button, Table } from'react-bootstrap'
import Products from 'Products'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [ filteredList, setFilteredList ] = useState(Products) // Khai báo state cho hàm Search

  const filterBySearch = (event) => {
    // Khai báo biến query nhận dữ liệu mình nhập trong input search
    const query = event.target.value
    // Tạo ra biến chứa data của Products
    var updatedList = [...Products]
    // Dùng filter để tìm ra những Products chứa kí tự được nhập
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    })
    // Render ra bản Products cần tìm
    setFilteredList(updatedList)
  };

  // Khai báo biến history bằng hooks useNavigate
  let history = useNavigate()

  // Logic hàm update, cập nhật dữ liệu vào localStorage
  const handleUpdate = (id, name, ditrict, ward, population, area, dateEnded) => {
    localStorage.setItem('name', name)
    localStorage.setItem('ditrict', ditrict)
    localStorage.setItem('ward', ward)
    localStorage.setItem('population', population)
    localStorage.setItem('area', area)
    localStorage.setItem('dateEnded', dateEnded)
    localStorage.setItem('id', id)

  }

  // Logic hàm xóa item
  const handleDelete = (id) => {

    // Khai báo biến index bằng id, dùng indexOf để biết vị trí của Products
    var index = Products.map((e) => {
      return e.id
    }).indexOf(id);

    // Dùng splice để xóa Products theo id
    Products.splice(index, 1);

    // Quay trở lại components Home bằng biến history được gán ở trên
    history('/')
  }

  // Logic hàm sáp nhập phường
  const handleMerge = () => { 
    // Lấy 1 phường đầu tiên của Hà Nội 
    const wardMerge = Products[0].ward.splice(0,1)
    // Push phường đầu tiên của Hà Nội vào sau phường cuối cùng của Nam Định
    const wardCombine = Products[1].ward.push(wardMerge)
  }

  return (
      <div className="container">
        <Navbar />
        <div style={{ margin: "3rem" }}>
        <Button className='btn btn-primary px-4 py-2 mb-2' onClick={(e) => handleMerge(e)}><i className="fa-solid fa-code-merge me-2"></i>Sáp Nhập</Button>
        <form className="d-flex" role="search">
          <input 
            className="form-control me-2 mb-3" 
            type="search" 
            placeholder="Search"
            aria-label="Search"
            onChange={filterBySearch}
          />
        </form>
          <Table bordered hover size="sm" className="text-dark table-danger table-striped">
            <thead>
              <tr className="text-center">
                <th>Mã Địa Bàn</th>
                <th>Tên Địa Bàn</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {
                // Nếu Products > 0 thì mới thực hiện render ra chuỗi td, còn không thì để "Không có địa bàn nào cả"
                Products && Products.length > 0 
                ? 
                // Render theo kí tự được tìm kiếm
                filteredList.map((prod, index) => {
                  return (
                    <tr key={index} className="fw-bold">
                      <td className="text-center">{prod.id}</td>
                      <td >{prod.name}</td>
                      <td className="text-center">
                      <Link to={`/read/${prod.id}`}>
                      <Button className="btn btn-success"><i className="fa-solid fa-eye"></i></Button>
                      </Link>
                      &nbsp;
                      <Link to={`/treeviewdb/${prod.id}`}>
                        <Button className="btn btn-success"><i className="fa-solid fa-tree"></i></Button>
                      </Link>
                      &nbsp;
                      <Link to={`/update/${prod.id}`}>
                      <Button className="btn btn-warning" onClick={() => handleUpdate(prod.id, prod.name, prod.ditrict, prod.ward, prod.population, prod.area, prod.dateEnded)}><i className="fa-solid fa-circle-arrow-up"></i></Button>
                      </Link>
                      &nbsp;
                      <Button className="btn btn-danger"  onClick={() => handleDelete(prod.id)}><i className="fa-solid fa-trash"></i></Button>
                      </td>
                    </tr>
                  )
                })
                :
                "Không có địa bàn nào cả"
              }
            </tbody>
          </Table>
          <br/>
          <Link className="d-grid gap-2" to="/add">
            <Button className="btn btn-success" size="lg">Thêm Địa Bàn</Button>
          </Link>
        </div>
      </div>
  )
}

export default Home