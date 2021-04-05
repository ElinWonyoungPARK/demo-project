import React , {useState} from 'react'
import axios from 'axios'

const blackBorder = {border: "1px solid black"}
const btnStyle={width:150, margin: '0 auto'}
const ItemSave = () => {
    const [itemName, setItemName] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const save = e => {// 
        e.preventDefault()
        axios({
            url: `http://localhost:8080/items`,
            method: 'post',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {itemName, itemDesc, itemPrice}
        }).then(res => {
            document.getElementsByClassName("box").value = ""
        }).catch(err => {
            alert(err.response)
        })
    }
    return (<>
    <div style={{width: 500, margin: "0 auto", textAlign: 'center'}}>
        <h3>Item Save</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>상품명</td>
                <td style={blackBorder}>상세설명</td>
                <td style={blackBorder}>가격</td>
                </tr>
            <tr style={blackBorder}>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setItemName(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setItemDesc(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setItemPrice(e.target.value)}/></td>
                </tr> 
            <tr><td style={blackBorder} colSpan={3}><button style={btnStyle} onClick={save}>등 록</button></td></tr>
           
        </table>
        </div>
        </>)
}

export default ItemSave