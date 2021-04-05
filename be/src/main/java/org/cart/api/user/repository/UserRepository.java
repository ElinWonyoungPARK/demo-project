package org.cart.api.user.repository;

import org.cart.api.user.domain.UserVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

interface UserCustomRepository {

}
@Repository
public interface UserRepository extends JpaRepository<UserVo, Long>, UserCustomRepository {

}
