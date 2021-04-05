import axios from 'axios'
import React, { useEffect, useState } from 'react' 
const btnStyle={width:150, margin: '0 auto'}
const blackBorder = {border: "1px solid black"}
const ItemEdit = (props) => {
    const [ item, setItem ] = useState({})
    const [itemDesc, setItemDesc] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const editItem = () => {
        setItem(JSON.parse(localStorage.getItem("item")))
    } 
    const itemEdit = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/items/${item.itemNum}`,
            method: 'put',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {itemNum: item.itemNum, itemName: item.itemName, itemDesc, itemPrice}
        }).then(res => {
            props.history.push('/item-all')
        }).catch(err => {
            alert(err.response)
        })
    }
    useEffect(()=>editItem(), [])
    return (<>
    <div style={{width:500, margin: "0 auto"}}>
        <h3>Item Edit</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>상품번호</td>
                <td style={blackBorder}>상품명</td>
                <td style={blackBorder}>상세설명</td>
                <td style={blackBorder}>가격</td>
                </tr>
            <tr style={blackBorder}>
                <td style={blackBorder}>{item.itemNum}</td>
                <td style={blackBorder}>{item.itemName}</td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setItemDesc(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setItemPrice(e.target.value)}/></td>
                </tr> 
            <tr>
            <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={itemEdit} >수 정</button></td>
                <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={()=>{props.history.push(`/item-all`)}}>취 소</button></td>
                </tr>
        </table>
        </div>
        </>)
}

export default ItemEdit