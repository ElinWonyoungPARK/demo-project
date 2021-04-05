package org.cart.api.user.domain;

import lombok.Data;
import org.cart.api.item.domain.Item;
import org.cart.api.review.domain.Review;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Table(name = "users") @Data
public class UserVo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_num") long userNum;
    @Column String username;
    @Column String password;
    @Column String name;
    @Column String email;
    @Column String gender;
    @Column String birthday;
    @Column(name = "phone_number") String phoneNumber;
    @Column String admin;
    @Column(name = "prefer_genre") String preferGenre;
    @OneToMany(mappedBy = "user")
    private List<Review> review = new ArrayList<>();
}
