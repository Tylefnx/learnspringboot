package com.mastery.springboot.infrastructure.adapter.jpa;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.UserRepositoryPort;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * Infrastructure Outbound Adapter:
 * Domain'in UserRepositoryPort arayüzünü Spring Data JPA ile implemente eder.
 */
@Component
public class UserJpaAdapter implements UserRepositoryPort {

    private final SpringDataUserRepository springDataRepo;

    public UserJpaAdapter(SpringDataUserRepository springDataRepo) {
        this.springDataRepo = springDataRepo;
    }

    @Override
    public User save(User user) {
        UserEntity entity = UserEntity.fromDomain(user);
        UserEntity saved = springDataRepo.save(entity);
        return saved.toDomain();
    }

    @Override
    public Optional<User> findById(Long id) {
        return springDataRepo.findById(id).map(UserEntity::toDomain);
    }

    @Override
    public Optional<User> findByEmail(Email email) {
        return springDataRepo.findByEmail(email.value()).map(UserEntity::toDomain);
    }

    @Override
    public boolean existsByEmail(Email email) {
        return springDataRepo.existsByEmail(email.value());
    }
}
