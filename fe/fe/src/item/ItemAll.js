import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const blackBorder = {border: "1px solid black"}
const ItemAll = () => {
    const [items, setItems] = useState([])
    const itemAll = () => {
        axios.get( `http://localhost:8080/items`)
        .then(res => {
            setItems(res.data)
        }).catch(err => {
            alert(err.response)
        })
    }
    useEffect(()=>itemAll(), [])
    return (<>
   <div style={{width: 500, margin: "0 auto", textAlign: 'center'}}>
    <h3>Item All</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>상품번호</td>
                <td style={blackBorder}>상품명</td>
                <td style={blackBorder}>상세설명</td>
                <td style={blackBorder}>가격</td>
                </tr>
               { items ? items.map((item, id) => {
                   return (
                        <tr style={blackBorder} key={id}>
                        <td style={blackBorder}>{item.itemNum}</td>
                        <td style={blackBorder}><Link to={`/item-one/${item.itemNo}`}>{item.itemName}</Link></td>
                        <td style={blackBorder}>{item.itemDesc}</td>
                        <td style={blackBorder}>{item.itemPrice}</td>
                        </tr> 
                    )    
                   }): <tr><td colSpan="4">등록된 상품이 없습니다</td></tr>
              } 
        </table>
    </div>
    </>)
}

export default ItemAll