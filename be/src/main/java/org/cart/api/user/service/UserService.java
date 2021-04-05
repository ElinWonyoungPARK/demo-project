package org.cart.api.user.service;

import org.cart.api.user.domain.UserVo;

import java.util.List;
import java.util.Optional;

public interface UserService {
    String save(UserVo userVo);
    List<UserVo> all();
    Optional<UserVo> one(long id);
    String edit(UserVo userVo);
    String delete(long id);

}
