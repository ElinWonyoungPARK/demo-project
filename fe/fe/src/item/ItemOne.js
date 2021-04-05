import axios from 'axios'
import React, { useEffect, useState } from 'react' 
const btnStyle={width:150, margin: '0 auto'}
const blackBorder = {border: "1px solid black"}
const ItemOne = (props) => {
    const [ item, setItem ] = useState('')
    const itemOne = () => {
        
        axios.get(`http://localhost:8080/items/${props.match.params.id}`)
        .then(res => {
            setItem(res.data)
        }).catch(err => { console.log(err)})
    } 
    const itemDelete = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/items/${props.match.params.id}`,
            method: 'delete',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {}
        }).then(res => {
            props.history.push('/item-all')
        }).catch(err => {
            alert(err.response)
        })
    }
    const editor = e =>{
        e.preventDefault()
        localStorage.setItem("item", JSON.stringify(item))
        props.history.push(`/item-edit/${item.itemNum}`)
    }
    useEffect(()=>itemOne(), [])
    return (<>
    <div style={{width:500, margin: "0 auto"}}>
        <h3>Item One</h3>
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
                <td style={blackBorder}>{item.itemDesc}</td>
                <td style={blackBorder}>{item.itemPrice}</td>
                </tr> 
            <tr>
            <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={editor} >수 정</button></td>
                <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={itemDelete}>삭 제</button></td>
                </tr>
        </table>
        </div>
        </>)
}

export default ItemOne