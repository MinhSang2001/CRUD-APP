
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Products from 'Products'


const Read = () => {
    const { id } = useParams()
    const product = Products.find((prod) => prod.id === id)
    const { name, ditrict, ward, population, area, dateEnded } = product

    return (
        <div className='container text-dark fw-bold'>
            <h1>{name}</h1>
            <p>Quận: {ditrict}</p>
            <p>Phường: {ward}</p>
            <p>Dân Số: {population}</p>
            <p>Diện Tích: {area}</p>
            <p>Ngày Kết Thúc: {dateEnded}</p>
            <Link to="/" className='btn btn-danger'>Back</Link> 
        </div>
    )
}

export default Read