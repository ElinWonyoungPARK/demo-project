package org.cart.api.user.service;


import lombok.RequiredArgsConstructor;
import org.cart.api.user.domain.UserVo;
import org.cart.api.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepo;

    @Override
    public String save(UserVo userVo) {
        System.out.println(("===2===:"+userVo.toString()));
        UserVo user = userRepo.save(userVo);
        return (user != null) ? "SUCCESS" : "FAILURE";
    }

    @Override
    public List<UserVo> all() {
        return userRepo.findAll();
    }

    @Override
    public Optional<UserVo> one(long id) {
        return userRepo.findById(id);
    }

    @Override
    public String edit(UserVo userVo) {
        UserVo user = userRepo.save(userVo);
        return (user != null) ? "SUCCESS" : "FAILURE";
    }

    @Override
    public String delete(long id) {
        userRepo.deleteById(id);
        return "SUCCESS";
    }
}
