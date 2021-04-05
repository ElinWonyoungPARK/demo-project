package org.cart.api.item.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QItem is a Querydsl query type for Item
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QItem extends EntityPathBase<Item> {

    private static final long serialVersionUID = -1846256486L;

    public static final QItem item = new QItem("item");

    public final StringPath itemDesc = createString("itemDesc");

    public final StringPath itemName = createString("itemName");

    public final NumberPath<Long> itemNum = createNumber("itemNum", Long.class);

    public final StringPath itemPrice = createString("itemPrice");

    public final ListPath<org.cart.api.review.domain.Review, org.cart.api.review.domain.QReview> reviews = this.<org.cart.api.review.domain.Review, org.cart.api.review.domain.QReview>createList("reviews", org.cart.api.review.domain.Review.class, org.cart.api.review.domain.QReview.class, PathInits.DIRECT2);

    public QItem(String variable) {
        super(Item.class, forVariable(variable));
    }

    public QItem(Path<? extends Item> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItem(PathMetadata metadata) {
        super(Item.class, metadata);
    }

}

