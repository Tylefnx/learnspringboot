package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.util.regex.Pattern;

/**
 * Value Object: Email
 * - Değiştirilemez (Immutable)
 * - Kendini doğrular (Self-validating)
 * - Hiçbir framework bağımlılığı içermez (Pure Java)
 */
public record Email(String value) {
    private static final Pattern EMAIL_PATTERN = 
        Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    public Email {
        if (value == null || !EMAIL_PATTERN.matcher(value).matches()) {
            throw new DomainValidationException("Geçersiz e-posta formatı: " + value);
        }
        value = value.toLowerCase().trim();
    }
}
