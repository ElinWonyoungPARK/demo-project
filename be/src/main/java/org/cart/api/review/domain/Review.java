package org.cart.api.review.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import org.cart.api.item.domain.Item;
import org.cart.api.user.domain.UserVo;

import javax.persistence.*;

@Entity @Table(name = "reviews") @Data @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Review {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_num") long reviewNum;
    @Column(name = "review_title") String reviewTitle;
    @Column(name = "review_content") String reviewContent;
    @Column(name = "reg_date") String regDate;
    @Column String score;
    @ManyToOne
    @JoinColumn(name="user_num")
    private UserVo user;
    @ManyToOne
    @JoinColumn(name = "item_num")
    private Item item;

    @Builder
    public Review(long reviewNum, String reviewTitle, String reviewContent, String regDate,
                  String score, Item item) {
        super();
        this.reviewNum = reviewNum;
        this.reviewTitle = reviewTitle;
        this.reviewContent = reviewContent;
        this.regDate = regDate;
        this.score = score;
        this.item = item;
    }
}
