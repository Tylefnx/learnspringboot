package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.time.Instant;

/**
 * Domain Entity: User
 * - İş kuralları (Business Rules) burada kapsüllenir (Encapsulation).
 * - Framework (Spring/JPA) anotasyonu içermez.
 */
public class User {
    private final Long id;
    private String fullName;
    private Email email;
    private boolean active;
    private final Instant createdAt;

    public User(Long id, String fullName, Email email, boolean active, Instant createdAt) {
        if (fullName == null || fullName.trim().length() < 2) {
            throw new DomainValidationException("Kullanıcı adı en az 2 karakter olmalıdır.");
        }
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.active = active;
        this.createdAt = createdAt != null ? createdAt : Instant.now();
    }

    public void deactivate() {
        this.active = false;
    }

    public void updateFullName(String newName) {
        if (newName == null || newName.trim().length() < 2) {
            throw new DomainValidationException("Yeni isim geçerli değildir.");
        }
        this.fullName = newName;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public Email getEmail() { return email; }
    public boolean isActive() { return active; }
    public Instant getCreatedAt() { return createdAt; }
}
