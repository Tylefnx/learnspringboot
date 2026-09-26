package com.mastery.springboot.domain.port;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import java.util.Optional;

/**
 * Outbound Port (Arayüz):
 * Domain katmanı veritabanının JPA mi, MongoDB mi olduğunu bilmez.
 * Sadece bu arayüzü tanımlar (Dependency Inversion).
 */
public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByEmail(Email email);
    boolean existsByEmail(Email email);
}
