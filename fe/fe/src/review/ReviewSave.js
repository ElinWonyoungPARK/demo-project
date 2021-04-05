import React , {useState} from 'react'
import axios from 'axios'

const blackBorder = {border: "1px solid black"}
const btnStyle={width:150, margin: '0 auto'}
const ReviewSave = () => {
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewContent, setReviewContent] = useState('')
    const [regDate, setRegDate] = useState('')
    const [score, setScore] = useState('')
    const save = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/reviews`,
            method: 'post',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {reviewTitle, reviewContent, regDate, score}
        }).then(res => {
            document.getElementsByClassName("box").value = ""
        }).catch(err => {
            alert(err.response)
        })
    }
    return(<>
     <div style={{width: 500, margin: "0 auto", textAlign: 'center'}}>
        <h3>Review Save</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>제목</td>
                <td style={blackBorder}>본문</td>
                <td style={blackBorder}>날짜</td>
                <td style={blackBorder}>평점</td>
                </tr>
            <tr style={blackBorder}>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setReviewTitle(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setReviewContent(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setRegDate(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setScore(e.target.value)}/></td>
                </tr> 
            <tr><td style={blackBorder} colSpan={3}><button style={btnStyle} onClick={save}>등 록</button></td></tr>
           
        </table>
        </div>
    </>)
}
export default ReviewSave