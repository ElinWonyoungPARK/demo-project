import axios from 'axios'
import React, { useEffect, useState } from 'react' 
const btnStyle={width:150, margin: '0 auto'}
const blackBorder = {border: "1px solid black"}
const ReviewOne = (props) => {
    const [ review, setReview ] = useState('')
    const reviewOne = () => {
        
        axios.get(`http://localhost:8080/reviews/${props.match.params.id}`)
        .then(res => {
            setReview(res.data)
        }).catch(err => { console.log(err)})
    } 
    const reviewDelete = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/reviews/${props.match.params.id}`,
            method: 'delete',
            headers: {'Content-Type':'application/json','Authorization': 'JWT fefege...'},
            data: {}
        }).then(res => {
            props.history.push('/review-all')
        }).catch(err => {
            alert(err.response)
        })
    }
    const editor = e =>{
        e.preventDefault()
        localStorage.setItem("review", JSON.stringify(review))
        props.history.push(`/review-edit/${review.reviewNum}`)
    }
    useEffect(()=>reviewOne(), [])
    return (<>
    <div style={{width:500, margin: "0 auto"}}>
        <h3>Review One</h3>
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
                <td style={blackBorder}>{review.reviewTitle}</td>
                <td style={blackBorder}>{review.reviewContent}</td>
                <td style={blackBorder}>{review.regDate}</td>
                <td style={blackBorder}>{review.score}</td>
                </tr> 
            <tr>
            <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={editor} >수 정</button></td>
                <td style={blackBorder} colSpan={2}><button style={btnStyle} onClick={reviewDelete}>삭 제</button></td>
                </tr>
        </table>
        </div>
        </>)
}

export default ReviewOne