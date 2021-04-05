import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const blackBorder = {border: "1px solid black"}
const UserAll = () => {
    const [users, setUsers] = useState([])
    const userAll = () => {
        axios.get( `http://localhost:8080/users`)
        .then(res => {
            setUsers(res.data)
        }).catch(err => {
            alert(err.response)
        })
    }
    useEffect(()=>userAll(), [])
    return (<>
    <div style={{width: 2000, margin: "0 auto", textAlign: 'center'}}>
    <h3>User All</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>회원번호</td>
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
            { users ? users.map((user, id) => {
                return (
                    <tr style={blackBorder} key={id}>
                    <td style={blackBorder}>{user.userNum}</td>
                    <td style={blackBorder}><Link to={`/user-one/${user.userNum}`}>{user.username}</Link></td>
                    <td style={blackBorder}>{user.password}</td>
                    <td style={blackBorder}>{user.name}</td>
                    <td style={blackBorder}>{user.email}</td>
                    <td style={blackBorder}>{user.gender}</td>
                    <td style={blackBorder}>{user.birthday}</td>
                    <td style={blackBorder}>{user.phoneNumber}</td>
                    <td style={blackBorder}>{user.admin}</td>
                    <td style={blackBorder}>{user.preferGenre}</td>
                    </tr>
                )
            }): <tr><td colSpan="4">등록된 사용자가 없습니다</td></tr>
}
            </table>
            </div>
    </>)
}
export default UserAll