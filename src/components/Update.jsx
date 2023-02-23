import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
import Products from 'Products'

const Update = () => {
    // Tạo ra các biến dùng useState để thay đổi dữ liệu trong data
    const [ name, setName ] = useState("")
    const [ ditrict, setDitrict ] = useState("")
    const [ ward, setWard ] = useState("")
    const [ population, setPopulation ] = useState("")
    const [ area, setArea ] = useState("")
    const [ dateEnded, setDateEnded ] = useState("")
    const [ id, setId ] = useState("") 

    useEffect(() => {
        // Lấy data được lưu vào localStorage
        setName(localStorage.getItem('name'))
        setDitrict(localStorage.getItem('ditrict'))
        setWard(localStorage.getItem('ward'))
        setPopulation(localStorage.getItem('population'))
        setArea(localStorage.getItem('area'))
        setDateEnded(localStorage.getItem('dateEnded'))
        setId(localStorage.getItem('id'))
    },[])

    // Khai báo biến history bằng với hooks useNavigate
    let history = useNavigate()
    
    // Khai báo biến index bằng id, dùng indexOf để biết vị trí của Products
    var index = Products.map((e) => {
        return e.id
    }).indexOf(id)

    // Xử lí logic khi ấn vào button Sửa
    const handleSubmit = (e) => {
        e.preventDefault()

        // Khai báo a lấy dữ liệu trong data theo id 
        let a = Products[index]
        // Khai báo các biến để chỉnh sửa
        a.name = name
        a.ditrict = ditrict
        a.ward = ward
        a.population = population
        a.area = area
        a.dateEnded = dateEnded

        history('/')
    }

  return (
    <div>
        <Form className="d-grid gap-2" style={{ margin: '12rem' }}>
                <Form.Group className="mb-3" controlId='formNameUpdate'>
                    <Form.Control type='text' placeholder="Tỉnh/TP..." value={name}  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formDitrictUpdate'>
                    <Form.Control type='text' placeholder="Quận..." value={ditrict}  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formWardUpdate'>
                    <Form.Control type='text' placeholder="Phường..." value={ward}  onChange={(e) => setWard(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formPopulationUpdate'>
                    <Form.Control type='text' placeholder="Dân Số..." value={population}  onChange={(e) => setPopulation(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formNameUpdate'>
                    <Form.Control type='text' placeholder="Diện Tích..." value={area}  onChange={(e) => setArea(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formDateEndedUpdate'>
                    <Form.Control type='date' value={dateEnded}  onChange={(e) => setDateEnded(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Sửa</Button>
            </Form>
    </div>
  )
}

export default Update