import { CodeRecipe } from '../types';

export const RECIPES_DATA: CodeRecipe[] = [
  {
    id: 'base-auditable-entity',
    title: 'Auditable Base Entity (JPA Auditing)',
    category: 'JPA & DB',
    complexity: 'Başlangıç',
    description: 'Tüm entity sınıflarında otomatik olarak createdAt, updatedAt, createdBy ve version alanlarını yöneten soyut temel sınıf.',
    filename: 'BaseEntity.java',
    tags: ['JPA', 'Hibernate', 'Auditing', 'BaseEntity', 'Clean Architecture'],
    code: `package com.example.mastery.common.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @Version
    @Column(name = "version")
    private Long version; // Optimistic Locking desteği
}`
  },
  {
    id: 'jwt-token-provider',
    title: 'JJWT 0.12+ Uyumlu Modern JWT Servisi',
    category: 'Security',
    complexity: 'İleri',
    description: 'Java 21 ve JJWT kütüphanesinin en güncel sürümüyle HMAC-SHA256 anahtarlı güvenli token üretimi ve doğrulaması.',
    filename: 'JwtService.java',
    tags: ['Security', 'JWT', 'HMAC-SHA256', 'Stateless', 'Auth'],
    code: `package com.example.mastery.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("\${application.security.jwt.secret-key}")
    private String secretKey;

    @Value("\${application.security.jwt.expiration}")
    private long jwtExpiration;

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("roles", userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList());
        return buildToken(extraClaims, userDetails, jwtExpiration);
    }

    private String buildToken(Map<String, Object> extraClaims, UserDetails userDetails, long expiration) {
        return Jwts.builder()
                .claims(extraClaims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSignInKey())
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

    private SecretKey getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}`
  },
  {
    id: 'custom-validation-annotation',
    title: 'Özel Jakarta Validasyon Anotasyonu',
    category: 'Exceptions & Validation',
    complexity: 'Orta',
    description: 'TC Kimlik No, Vergi No veya özel formatları doğrulamak için Custom Constraint Annotation ve Validator.',
    filename: 'ValidTaxNumber.java & Validator.java',
    tags: ['Validation', 'Custom Annotation', 'ConstraintValidator', 'Clean Code'],
    code: `// 1. Anotasyon Tanımı
package com.example.mastery.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = TaxNumberValidator.class)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidTaxNumber {
    String message() default "Geçersiz vergi/kimlik numarası formatı";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

// 2. Validator Mantığı
package com.example.mastery.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class TaxNumberValidator implements ConstraintValidator<ValidTaxNumber, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) return false;
        // 10 haneli ve sadece rakamlardan oluşan format kontrolü
        return value.matches("^[0-9]{10}$");
    }
}`
  },
  {
    id: 'openapi-swagger-config',
    title: 'SpringDoc OpenAPI 3.0 / Swagger Yapılandırması',
    category: 'Architecture & REST',
    complexity: 'Başlangıç',
    description: 'REST API dokümantasyonu, JWT Bearer yetkilendirme butonu ve lisans bilgilerini içeren Swagger UI entegrasyonu.',
    filename: 'OpenApiConfig.java',
    tags: ['Swagger', 'OpenAPI', 'Documentation', 'SpringDoc'],
    code: `package com.example.mastery.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        final String securitySchemeName = "bearerAuth";
        return new OpenAPI()
                .info(new Info()
                        .title("Spring Boot Mastery API")
                        .version("1.0.0")
                        .description("Modern Spring Boot 3 & Java 21 Kurumsal REST API Dokümantasyonu")
                        .contact(new Contact().name("Spring Boot Ekibi").email("dev@example.com"))
                        .license(new License().name("Apache 2.0").url("https://spring.io")))
                .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName, new SecurityScheme()
                                .name(securitySchemeName)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));
    }
}`
  }
];

export const getRecipesData = (lang: string = 'tr'): CodeRecipe[] => {
  if (lang === 'en') {
    return RECIPES_DATA.map(recipe => {
      const enMap: Record<string, Partial<CodeRecipe>> = {
        'base-auditable-entity': {
          title: 'Auditable Base Entity (JPA Auditing & Optimistic Locking)',
          description: 'Reusable mapped superclass automating createdAt, updatedAt, createdBy, and optimistic locking version across all JPA entities.'
        },
        'jwt-token-provider': {
          title: 'Modern JJWT 0.12+ Token Provider Service',
          description: 'Enterprise HMAC-SHA256 JWT service with claim extraction, token expiration check, and signing key management.'
        },
        'rate-limiting-filter': {
          title: 'Bucket4j In-Memory IP-Based Rate Limiting Filter',
          description: 'High-performance HTTP filter applying token-bucket rate limiting returning HTTP 429 Too Many Requests upon limit exhaustion.'
        },
        'custom-validator': {
          title: 'Jakarta Validation: Custom PhoneNumber Constraint',
          description: 'Custom validator implementation using ConstraintValidator and custom annotation for clean domain validations.'
        }
      };

      const override = enMap[recipe.id];
      if (!override) return recipe;
      return {
        ...recipe,
        ...override
      };
    });
  }
  return RECIPES_DATA;
};
