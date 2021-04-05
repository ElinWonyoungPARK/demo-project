import axios from 'axios'
import React, { useEffect, useState } from 'react' 
const btnStyle={width:150, margin: '0 auto'}
const blackBorder = {border: "1px solid black"}
const UserOne = (props) => {
    const [ user, setUser ] = useState('')
    const userOne = () => {
        
        axios.get(`http://localhost:8080/users/${props.match.params.id}`)
        .then(res => {
            setUser(res.data)
        }).catch(err => { console.log(err)})
    } 
    const userDelete = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/users/${props.match.params.id}`,
            method: 'delete',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {}
        }).then(res => {
            props.history.push('/user-all')
        }).catch(err => {
            alert(err.response)
        })
    }
    const editor = e =>{
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(user))
        props.history.push(`/user-edit/${user.userNum}`)
    }
    useEffect(()=>userOne(), [])
    return (<>
    <div style={{width:2000, margin: "0 auto"}}>
        <h3>User One</h3>
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
            <tr style={blackBorder}>
                    <td style={blackBorder}>{user.userNum}</td>
                    <td style={blackBorder}>{user.username}</td>
                    <td style={blackBorder}>{user.password}</td>
                    <td style={blackBorder}>{user.name}</td>
                    <td style={blackBorder}>{user.email}</td>
                    <td style={blackBorder}>{user.gender}</td>
                    <td style={blackBorder}>{user.birthday}</td>
                    <td style={blackBorder}>{user.phoneNumber}</td>
                    <td style={blackBorder}>{user.admin}</td>
                    <td style={blackBorder}>{user.preferGenre}</td>
                </tr> 
            <tr>
            <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={editor} >수 정</button></td>
                <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={userDelete}>삭 제</button></td>
                </tr>
        </table>
        </div>
        </>)
}

export default UserOne