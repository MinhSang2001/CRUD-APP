import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Products from 'Products'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {

    // Tạo ra các biến dùng useState để thay đổi dữ liệu trong data
    const [ name, setName ] = useState('')
    const [ ditrict, setDitrict ] = useState('')
    const [ ward, setWard ] = useState('')
    const [ population, setPopulation ] = useState('')
    const [ area, setArea ] = useState('')
    const [ dateEnded, setDateEnded ] = useState('')
    // Khai báo biến history bằng với hooks useNavigate
    let history = useNavigate()
    // Xử lý hàm khi ấn vào butto thêm
    const handleSubmit = (e) => {
        e.preventDefault()
        // tạo ra biến ids được tạo ra từ thư viên uuid thư viện dùng để tạo ngẫu nhiên 1 chuỗi id  
        const ids = uuid()
        // Khai báo biến id chỉ được lấy 8 kí tự đầu tiên
        let uniqueId = ids.slice(0,8)

        // Khai báo các biến để thêm vào
        let a = name,
        b = ditrict,
        c = ward,
        d = population,
        f = area,
        g = dateEnded

        // Push dữ liệu vào data 
        Products.push({id: uniqueId, name: a, ditrict: b, ward: c, population: d, area: f, dateEnded: g})
        history('/')
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '12rem' }}>
                <Form.Group className="mb-3" controlId='formDitrict'>
                    <Form.Control type='text' placeholder="Tỉnh/ Thành Phố..." required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formDitrict'>
                    <Form.Control type='text' placeholder="Quận..." required onChange={(e) => setDitrict(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formWard'>
                    <Form.Control type='text' placeholder="Phường..." required onChange={(e) => setWard(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formPopulation'>
                    <Form.Control type='text' placeholder="Dân Số..." required onChange={(e) => setPopulation(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formArea'>
                    <Form.Control type='text' placeholder="Diện tích..." required onChange={(e) => setArea(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formDateEnded'>
                    <Form.Control type='date' required onChange={(e) => setDateEnded(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Thêm</Button>
            </Form>
        </div>
    )
}

export default Add