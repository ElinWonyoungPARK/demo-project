package org.cart.api.review.repository;

import org.cart.api.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

interface ReviewCustomRepository{

}
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>, ReviewCustomRepository {

}
