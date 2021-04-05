import axios from 'axios'
import React, { useEffect, useState } from 'react' 
const btnStyle={width:150, margin: '0 auto'}
const blackBorder = {border: "1px solid black"}
const ReviewEdit = (props) => {
    const [ review, setReview ] = useState({})
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewContent, setReviewContent] = useState('')
    const [score, setScore] = useState('')
    const editReview = () => {
        setReview(JSON.parse(localStorage.getItem("review")))
    } 
    const reviewEdit = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/reviews/${review.reviewNum}`,
            method: 'put',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {reviewNum: review.reviewNum, reviewTitle, reviewContent, regDate: review.regDate, score}
        }).then(res => {
            props.history.push('/review-all')
        }).catch(err => {
            alert(err.response)
        })
    }
    useEffect(()=>editReview(), [])
    return (<>
    <div style={{width:500, margin: "0 auto"}}>
        <h3>Review Edit</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>리뷰번호</td>
                <td style={blackBorder}>제목</td>
                <td style={blackBorder}>본문</td>
                <td style={blackBorder}>날짜</td>
                <td style={blackBorder}>평점</td>
                </tr>
            <tr style={blackBorder}>
                <td style={blackBorder}>{review.reviewNum}</td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setReviewTitle(e.target.value)}/></td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setReviewContent(e.target.value)}/></td>
                <td style={blackBorder}>{review.regDate}</td>
                <td style={blackBorder}><input className="box" type="text" onChange={e => setScore(e.target.value)}/></td>
                </tr> 
            <tr>
            <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={reviewEdit} >수 정</button></td>
                <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={()=>{props.history.push(`/review-all`)}}>취 소</button></td>
                </tr>
        </table>
        </div>
        </>)
}

export default ReviewEdit