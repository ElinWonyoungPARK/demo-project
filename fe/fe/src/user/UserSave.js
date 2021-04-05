import React, { useState } from 'react'
import axios from 'axios'
const blackBorder = {border: "1px solid black"}
const btnStyle = {width:150, margin: '0 auto'}
const UserSave = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [admin, setAdmin] = useState('')
    const [preferGenre, setPreferGenre] = useState('')
    const save = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/users`,
            method: 'post',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {username, password, name, email, gender, birthday, phoneNumber, admin, preferGenre}
        }).then(res => {
            document.getElementsByClassName("box").value = ""
        }).catch(err => {
            alert(err.response)
        })
    }
    return (<>
    <div style={{width: 500, margin: "0 auto", textAlign: 'center'}}>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>아이디</td>
                <td style={blackBorder}>비밀번호</td>
                <td style={blackBorder}>이름</td>
                <td style={blackBorder}>이메일</td>
                <td style={blackBorder}>성별</td>
                <td style={blackBorder}>생년월일</td>
                <td style={blackBorder}>전화번호</td>
                <td style={blackBorder}>관리자</td>
                <td style={blackBorder}>선호장르</td>
            </tr>
            <tr style={blackBorder}>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setUsername(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setPassword(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setName(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setEmail(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setGender(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setBirthday(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setPhoneNumber(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setAdmin(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setPreferGenre(e.target.value)}/></td>
                </tr> 
                <tr><td style={blackBorder} colSpan={3}><button style={btnStyle} onClick={save}>회원가입</button></td></tr>
        </table>
    </div>
    </>)
}
export default UserSave