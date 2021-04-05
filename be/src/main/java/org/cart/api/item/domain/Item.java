package org.cart.api.item.domain;

import lombok.Data;
import org.cart.api.review.domain.Review;

import javax.persistence.*;
import java.util.List;

@Entity @Table(name="items") @Data
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="item_num") long itemNum;
    @Column(name="item_name") String itemName;
    @Column(name="item_desc") String itemDesc;
    @Column(name="item_price") String itemPrice;
    @OneToMany(mappedBy = "item")
    private List<Review> reviews;


}