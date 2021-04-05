package org.cart.api.user.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserVo is a Querydsl query type for UserVo
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserVo extends EntityPathBase<UserVo> {

    private static final long serialVersionUID = -1573807517L;

    public static final QUserVo userVo = new QUserVo("userVo");

    public final StringPath admin = createString("admin");

    public final StringPath birthday = createString("birthday");

    public final StringPath email = createString("email");

    public final StringPath gender = createString("gender");

    public final StringPath name = createString("name");

    public final StringPath password = createString("password");

    public final StringPath phoneNumber = createString("phoneNumber");

    public final StringPath preferGenre = createString("preferGenre");

    public final ListPath<org.cart.api.review.domain.Review, org.cart.api.review.domain.QReview> review = this.<org.cart.api.review.domain.Review, org.cart.api.review.domain.QReview>createList("review", org.cart.api.review.domain.Review.class, org.cart.api.review.domain.QReview.class, PathInits.DIRECT2);

    public final StringPath username = createString("username");

    public final NumberPath<Long> userNum = createNumber("userNum", Long.class);

    public QUserVo(String variable) {
        super(UserVo.class, forVariable(variable));
    }

    public QUserVo(Path<? extends UserVo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserVo(PathMetadata metadata) {
        super(UserVo.class, metadata);
    }

}

