import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const blackBorder = {border: "1px solid black"}
const ReviewAll = () => {
    const [reviews, setReviews] = useState([])
    const reviewAll = () => {
        axios.get(`http://localhost:8080/reviews/join`)
        .then(res => {
            setReviews(res.data)
        }).catch(err => {
            alert(err.response)
        })
    }
    useEffect(()=>reviewAll(), [])
    return (<>
   <div style={{width: 500, margin: "0 auto", textAlign: 'center'}}>
    <h3>Review All</h3>
        <table style={blackBorder}>
            <tr style={blackBorder}>
                <td style={blackBorder}>리뷰번호</td>
                <td style={blackBorder}>제목</td>
                <td style={blackBorder}>본문</td>
                <td style={blackBorder}>날짜</td>
                <td style={blackBorder}>평점</td>
                <td style={blackBorder}>예약자명</td>
                <td style={blackBorder}>예약상품</td>
                </tr>
               { reviews ? reviews.map((review, id) => {
                   return (
                        <tr style={blackBorder} key={id}>
                        <td style={blackBorder}>{review.reviewNum}</td>
                        <td style={blackBorder}><Link to={`/review-one/${review.reviewNum}`}>{review.reviewTitle}</Link></td>
                        <td style={blackBorder}>{review.reviewContent}</td>
                        <td style={blackBorder}>{review.regDate}</td>
                        <td style={blackBorder}>{review.score}</td>
                        <td style={blackBorder}>{review.username}</td>
                        <td style={blackBorder}>{review.itemName}</td>
                        </tr> 
                    )    
                   }): <tr><td colSpan="4">등록된 리뷰가 없습니다</td></tr>
              } 
        </table>
    </div>
    </>)
}

export default ReviewAll