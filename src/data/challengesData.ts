export interface CodingChallenge {
  id: string;
  title: string;
  difficulty: 'Başlangıç' | 'Orta' | 'İleri';
  category: string;
  description: string;
  instructions: string[];
  initialCode: string;
  solutionCode: string;
  filename: string;
  testCheckers: {
    description: string;
    validate: (cleanCode: string, rawCode: string) => { passed: boolean; error: string };
  }[];
  simulatedEndpoint: {
    method: 'GET' | 'POST';
    path: string;
    successBody: any;
  };
}

// Helper to remove comments
export const stripComments = (code: string): string => {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove /* ... */
    .replace(/\/\/.*$/gm, '')         // Remove // ...
    .trim();
};

export const CODING_CHALLENGES: CodingChallenge[] = [
  {
    id: 'challenge-1-rest-controller',
    title: '1. Görev: İlk @RestController ve @GetMapping Metodunu Yaz',
    difficulty: 'Başlangıç',
    category: 'Spring MVC & REST',
    description: 'Bir selamlama servisi için Spring Boot REST Controller sınıfı oluşturun. İstemciden gelen "name" parametresini karşılayarak JSON formatında selamlama mesajı döndürün.',
    instructions: [
      'GreetingController sınıfının üzerine `@RestController` anotasyonunu ekleyin.',
      'Sınıf seviyesinde kök yol olarak `@RequestMapping("/api/v1")` tanımlayın.',
      'Metodun üzerine `@GetMapping("/greet")` anotasyonu koyun.',
      'Metot parametresine `@RequestParam` anotasyonu ekleyin (örn: `@RequestParam(defaultValue = "Dünya") String name`).',
      'Metot gövdesinde `return ResponseEntity.ok(Map.of("message", "Merhaba " + name));` döndürün.'
    ],
    filename: 'GreetingController.java',
    initialCode: `package com.example.mastery.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

// 1. Buraya sınıf anotasyonlarını ekleyin
public class GreetingController {

    // 2. Buraya metot anotasyonunu ve parametre anotasyonunu ekleyin
    public ResponseEntity<Map<String, String>> greet(String name) {
        // 3. Buraya geri dönüş kodunu yazın
        return null;
    }
}`,
    solutionCode: `package com.example.mastery.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class GreetingController {

    @GetMapping("/greet")
    public ResponseEntity<Map<String, String>> greet(@RequestParam(defaultValue = "Dünya") String name) {
        return ResponseEntity.ok(Map.of("message", "Merhaba " + name));
    }
}`,
    testCheckers: [
      {
        description: '@RestController sınıf anotasyonu yazılmış mı?',
        validate: (code) => {
          const has = /@RestController\s+(?:@\w+(?:\([^)]*\))?\s+)*public\s+class\s+GreetingController/i.test(code) ||
                      /@RestController[\s\S]*?class\s+GreetingController/.test(code);
          return {
            passed: has,
            error: 'GreetingController sınıfının hemen üzerinde @RestController anotasyonu bulunamadı!'
          };
        }
      },
      {
        description: '@RequestMapping("/api/v1") sınıf yolu tanımlanmış mı?',
        validate: (code) => {
          const has = /@RequestMapping\s*\(\s*["']\/api\/v1["']\s*\)[\s\S]*?class\s+GreetingController/.test(code);
          return {
            passed: has,
            error: 'Sınıf seviyesinde @RequestMapping("/api/v1") anotasyonu eksik!'
          };
        }
      },
      {
        description: '@GetMapping("/greet") metot eşlemesi yapılmış mı?',
        validate: (code) => {
          const has = /@GetMapping\s*\(\s*["']\/greet["']\s*\)\s*(?:public\s+)?ResponseEntity/.test(code) ||
                      /@GetMapping\s*\(\s*["']\/greet["']\s*\)/.test(code);
          return {
            passed: has,
            error: 'greet(...) metodunun üzerinde @GetMapping("/greet") anotasyonu eksik!'
          };
        }
      },
      {
        description: '@RequestParam parametresi doğru tanımlanmış mı?',
        validate: (code) => {
          const has = /@RequestParam(?:\s*\([^)]*\))?\s+String\s+name/.test(code);
          return {
            passed: has,
            error: 'greet metodu parametresinde `@RequestParam String name` tanımı eksik!'
          };
        }
      },
      {
        description: 'Metot geçerli ResponseEntity veya Map cevabı döndürüyor mu?',
        validate: (code) => {
          const returnsValid = /return\s+ResponseEntity\.ok\s*\(|return\s+Map\.of\s*\(/i.test(code);
          return {
            passed: returnsValid,
            error: 'Metot `return ResponseEntity.ok(Map.of("message", "Merhaba " + name));` şeklinde geçerli bir yanıt döndürmelidir!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'GET',
      path: '/api/v1/greet?name=SpringGeliştirici',
      successBody: {
        message: 'Merhaba SpringGeliştirici',
        timestamp: '2026-09-27T00:20:00Z',
        status: 200
      }
    }
  },
  {
    id: 'challenge-2-constructor-injection',
    title: '2. Görev: Constructor Injection ile Service Katmanı',
    difficulty: 'Başlangıç',
    category: 'IoC & Dependency Injection',
    description: 'Spring Boot standartlarına uygun olarak field injection yerine immutable constructor injection kullanarak UserRepository bağımlılığını UserService sınıfına bağlayın.',
    instructions: [
      'UserService sınıfının üzerine `@Service` anotasyonunu ekleyin.',
      'Sınıf içine `private final UserRepository userRepository;` alanını ekleyin.',
      'Sınıfın kurucu metodunu (Constructor) yazın: `public UserService(UserRepository userRepository) { this.userRepository = userRepository; }`',
      '`getAllUsers()` metodu içinde `return userRepository.findAll();` çağrısı yapın.'
    ],
    filename: 'UserService.java',
    initialCode: `package com.example.mastery.service;

import com.example.mastery.model.User;
import com.example.mastery.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

// 1. Sınıf seviyesine servis anotasyonunu ekleyin
public class UserService {

    // 2. private final UserRepository alanını tanımlayın

    // 3. Constructor Injection kurucusunu yazın

    public List<User> getAllUsers() {
        // 4. repository üzerinden tüm kullanıcıları çekip döndürün
        return null;
    }
}`,
    solutionCode: `package com.example.mastery.service;

import com.example.mastery.model.User;
import com.example.mastery.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}`,
    testCheckers: [
      {
        description: '@Service anotasyonu sınıfa eklenmiş mi?',
        validate: (code) => {
          const has = /@Service[\s\S]*?class\s+UserService/.test(code);
          return {
            passed: has,
            error: 'UserService sınıfı üzerinde @Service anotasyonu eksik!'
          };
        }
      },
      {
        description: 'Bağımlılık "private final UserRepository" olarak tanımlanmış mı?',
        validate: (code) => {
          const has = /private\s+final\s+UserRepository\s+userRepository\s*;/.test(code);
          return {
            passed: has,
            error: '`private final UserRepository userRepository;` alanı eksik veya final olarak tanımlanmamış!'
          };
        }
      },
      {
        description: 'Constructor Injection kurucu metodu doğru yazılmış mı?',
        validate: (code) => {
          const has = /public\s+UserService\s*\(\s*UserRepository\s+userRepository\s*\)\s*\{[\s\S]*?this\.userRepository\s*=\s*userRepository\s*;/.test(code);
          return {
            passed: has,
            error: 'UserService(UserRepository userRepository) constructor\'ı ve `this.userRepository = userRepository;` ataması eksik!'
          };
        }
      },
      {
        description: 'getAllUsers() içinde userRepository.findAll() çağrılmış mı?',
        validate: (code) => {
          const has = /return\s+userRepository\.findAll\(\)\s*;/.test(code);
          return {
            passed: has,
            error: 'getAllUsers() metodunda `return userRepository.findAll();` çağrısı yapılmalıdır!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'GET',
      path: '/api/v1/users',
      successBody: [
        { id: 1, name: 'Ali Veli', email: 'ali@example.com' },
        { id: 2, name: 'Ayşe Yılmaz', email: 'ayse@example.com' }
      ]
    }
  },
  {
    id: 'challenge-3-dto-validation',
    title: '3. Görev: DTO Validasyonu & Java 21 Record',
    difficulty: 'Orta',
    category: 'Validation & DTO',
    description: 'Jakarta Bean Validation kurallarını kullanarak kullanıcı kayıt DTO\'sunu Java 21 Record formatında güvenli hale getirin.',
    instructions: [
      '`username` alanı için `@NotBlank` ve `@Size(min = 3, max = 50)` ekleyin.',
      '`email` alanı için `@NotBlank` ve `@Email` ekleyin.',
      '`age` alanı için `@NotNull` ve `@Min(18)` veya `@Min(value = 18)` ekleyin.'
    ],
    filename: 'RegisterUserDto.java',
    initialCode: `package com.example.mastery.dto;

import jakarta.validation.constraints.*;

// Record parametrelerine Jakarta Validation kurallarını ekleyin
public record RegisterUserDto(
    String username,
    String email,
    Integer age
) {}`,
    solutionCode: `package com.example.mastery.dto;

import jakarta.validation.constraints.*;

public record RegisterUserDto(
    @NotBlank(message = "Kullanıcı adı boş olamaz")
    @Size(min = 3, max = 50, message = "Kullanıcı adı en az 3 karakter olmalıdır")
    String username,

    @NotBlank(message = "E-posta alanı zorunludur")
    @Email(message = "Geçerli bir e-posta formatı giriniz")
    String email,

    @NotNull(message = "Yaş alanı zorunludur")
    @Min(value = 18, message = "Kayıt için yaş en az 18 olmalıdır")
    Integer age
) {}`,
    testCheckers: [
      {
        description: 'username alanı için @NotBlank ve @Size(min = 3) tanımlanmış mı?',
        validate: (code) => {
          const hasNotBlank = /@NotBlank[\s\S]*?String\s+username/.test(code);
          const hasSize = /@Size\s*\([\s\S]*?min\s*=\s*3[\s\S]*?\)[\s\S]*?String\s+username/.test(code);
          return {
            passed: hasNotBlank && hasSize,
            error: 'username alanı önünde @NotBlank ve @Size(min = 3) kuralları eksik!'
          };
        }
      },
      {
        description: 'email alanı için @NotBlank ve @Email eklenmiş mi?',
        validate: (code) => {
          const hasEmail = /@Email[\s\S]*?String\s+email/.test(code);
          const hasNotBlank = /@NotBlank[\s\S]*?String\s+email/.test(code);
          return {
            passed: hasEmail && hasNotBlank,
            error: 'email alanı önünde @NotBlank ve @Email anotasyonları eksik!'
          };
        }
      },
      {
        description: 'age alanı için @NotNull ve @Min(18) kuralı konulmuş mu?',
        validate: (code) => {
          const hasMin = /@Min\s*\(\s*(?:value\s*=\s*)?18[\s\S]*?\)[\s\S]*?Integer\s+age/.test(code);
          return {
            passed: hasMin,
            error: 'age alanı için @Min(18) yaş sınırlaması eksik!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'POST',
      path: '/api/v1/auth/register',
      successBody: {
        status: 201,
        message: 'Kullanıcı doğrulandı ve başarıyla kaydedildi.',
        user: { username: 'springmaster', email: 'dev@spring.io', age: 24 }
      }
    }
  },
  {
    id: 'challenge-4-jpa-repository',
    title: '4. Görev: Spring Data JPA @Query & Dynamic Finder',
    difficulty: 'Orta',
    category: 'Spring Data JPA & JPQL',
    description: 'JpaRepository interface\'i üzerinde hem türetilmiş metot (Derived Query) hem de özel JPQL @Query yazarak aktif kullanıcıları arayın.',
    instructions: [
      '`ProductRepository` arayüzünün `extends JpaRepository<Product, Long>` yapmasını sağlayın.',
      '`List<Product> findByPriceGreaterThan(BigDecimal price);` metodunu ekleyin.',
      '`@Query("SELECT p FROM Product p WHERE p.category = :category AND p.active = true")` ve `List<Product> findActiveByCategory(@Param("category") String category);` metodunu ekleyin.'
    ],
    filename: 'ProductRepository.java',
    initialCode: `package com.example.mastery.repository;

import com.example.mastery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.List;

// 1. JpaRepository<Product, Long> extend edin
public interface ProductRepository {

    // 2. findByPriceGreaterThan metodunu yazın

    // 3. @Query ile JPQL sorgu metodunu yazın
}`,
    solutionCode: `package com.example.mastery.repository;

import com.example.mastery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByPriceGreaterThan(BigDecimal price);

    @Query("SELECT p FROM Product p WHERE p.category = :category AND p.active = true")
    List<Product> findActiveByCategory(@Param("category") String category);
}`,
    testCheckers: [
      {
        description: 'Interface `extends JpaRepository<Product, Long>` yapmış mı?',
        validate: (code) => {
          const has = /public\s+interface\s+ProductRepository\s+extends\s+JpaRepository\s*<\s*Product\s*,\s*Long\s*>/.test(code);
          return {
            passed: has,
            error: 'Interface `extends JpaRepository<Product, Long>` şeklinde kalıtım almalıdır!'
          };
        }
      },
      {
        description: 'findByPriceGreaterThan(BigDecimal price) metodu tanımlanmış mı?',
        validate: (code) => {
          const has = /List\s*<\s*Product\s*>\s+findByPriceGreaterThan\s*\(\s*BigDecimal\s+\w+\s*\)\s*;/.test(code);
          return {
            passed: has,
            error: '`List<Product> findByPriceGreaterThan(BigDecimal price);` metot imzası eksik!'
          };
        }
      },
      {
        description: '@Query JPQL sorgusu ve @Param anotasyonu tanımlanmış mı?',
        validate: (code) => {
          const hasQuery = /@Query\s*\(\s*["']SELECT\s+p\s+FROM\s+Product\s+p/i.test(code);
          const hasMethod = /findActiveByCategory\s*\(\s*@Param\s*\(\s*["']category["']\s*\)\s*String\s+\w+\s*\)/.test(code);
          return {
            passed: hasQuery && hasMethod,
            error: '`@Query("SELECT p FROM Product p...")` ve `findActiveByCategory(@Param("category") String category)` tanımlaması eksik!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'GET',
      path: '/api/v1/products/search?category=Elektronik',
      successBody: [
        { id: 101, name: 'Ultra HD Monitör', category: 'Elektronik', price: 8500.00, active: true },
        { id: 102, name: 'Mekanik Klavye', category: 'Elektronik', price: 1800.00, active: true }
      ]
    }
  },
  {
    id: 'challenge-5-jpa-specification',
    title: '5. Görev: JPA Specification ile Dinamik Arama Filtresi',
    difficulty: 'İleri',
    category: 'Spring Data JPA & Criteria',
    description: 'Kullanıcının opsiyonel filtrelerine göre (isim ve minimum tutar) dinamik SQL oluşturan bir JPA Specification sınıfı yazın.',
    instructions: [
      '`hasName(String name)` metodu içinde `name != null` ise `cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%")` predicate\'i dönün.',
      '`hasMinAmount(BigDecimal minAmount)` metodu içinde `minAmount != null` ise `cb.greaterThanOrEqualTo(root.get("amount"), minAmount)` predicate\'i dönün.'
    ],
    filename: 'OrderSpecifications.java',
    initialCode: `package com.example.mastery.specification;

import com.example.mastery.entity.Order;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class OrderSpecifications {

    public static Specification<Order> hasName(String name) {
        return (root, query, cb) -> {
            // TODO: name null değilse LIKE predicate'i dönün
            return cb.conjunction();
        };
    }

    public static Specification<Order> hasMinAmount(BigDecimal minAmount) {
        return (root, query, cb) -> {
            // TODO: minAmount null değilse greaterThanOrEqualTo predicate'i dönün
            return cb.conjunction();
        };
    }
}`,
    solutionCode: `package com.example.mastery.specification;

import com.example.mastery.entity.Order;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class OrderSpecifications {

    public static Specification<Order> hasName(String name) {
        return (root, query, cb) -> {
            if (name == null || name.isBlank()) return cb.conjunction();
            return cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%");
        };
    }

    public static Specification<Order> hasMinAmount(BigDecimal minAmount) {
        return (root, query, cb) -> {
            if (minAmount == null) return cb.conjunction();
            return cb.greaterThanOrEqualTo(root.get("amount"), minAmount);
        };
    }
}`,
    testCheckers: [
      {
        description: 'cb.like veya lower filtreleme kontrolü yapılmış mı?',
        validate: (code) => {
          const hasLike = /cb\.like\s*\(/i.test(code) && /root\.get\s*\(\s*["']name["']\s*\)/i.test(code);
          return {
            passed: hasLike,
            error: 'hasName içinde `cb.like(cb.lower(root.get("name")), ...)` predicate\'i eksik!'
          };
        }
      },
      {
        description: 'cb.greaterThanOrEqualTo tutar denetimi yapılmış mı?',
        validate: (code) => {
          const hasGte = /cb\.greaterThanOrEqualTo\s*\(|cb\.ge\s*\(/i.test(code) && /root\.get\s*\(\s*["']amount["']\s*\)/i.test(code);
          return {
            passed: hasGte,
            error: 'hasMinAmount içinde `cb.greaterThanOrEqualTo(root.get("amount"), minAmount)` predicate\'i eksik!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'GET',
      path: '/api/v1/orders/filter?name=pro&minAmount=500',
      successBody: [
        { id: 401, name: 'MacBook Pro Siparişi', amount: 48000.00, status: 'DELIVERED' }
      ]
    }
  },
  {
    id: 'challenge-6-security-jwt-filter',
    title: '6. Görev: Spring Security 6 OncePerRequestFilter & JWT',
    difficulty: 'İleri',
    category: 'Security & FilterChain',
    description: 'Gelen HTTP isteklerindeki Authorization başlığını parse eden, token\'ı doğrulayıp SecurityContextHolder içine yerleştiren bir filtre yazın.',
    instructions: [
      'Sınıfın `extends OncePerRequestFilter` yapmasını sağlayın ve `@Component` ekleyin.',
      '`authHeader == null || !authHeader.startsWith("Bearer ")` kontrolü ile erken çıkış (early return) yapın.',
      '`jwtService.isTokenValid(jwt, userDetails)` geçerli ise `SecurityContextHolder.getContext().setAuthentication(authToken)` ile oturumu kurun.',
      '`filterChain.doFilter(request, response)` çağrısını unutmayın.'
    ],
    filename: 'JwtAuthenticationFilter.java',
    initialCode: `package com.example.mastery.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

// 1. @Component ve OncePerRequestFilter tanımlayın
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // TODO: Authorization başlığını alıp JWT doğrulaması yapın
        
        filterChain.doFilter(request, response);
    }
}`,
    solutionCode: `package com.example.mastery.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        filterChain.doFilter(request, response);
    }
}`,
    testCheckers: [
      {
        description: '@Component anotasyonu ve OncePerRequestFilter kalıtımı var mı?',
        validate: (code) => {
          const hasComp = /@Component[\s\S]*?class\s+JwtAuthenticationFilter\s+extends\s+OncePerRequestFilter/.test(code);
          return {
            passed: hasComp,
            error: '`@Component` anotasyonu veya `extends OncePerRequestFilter` kalıtımı eksik!'
          };
        }
      },
      {
        description: 'Bearer token kontrolü ve substring(7) ile token çekme yapılmış mı?',
        validate: (code) => {
          const hasBearer = /startsWith\s*\(\s*["']Bearer ["']\s*\)/.test(code);
          const hasSub = /substring\s*\(\s*7\s*\)/.test(code);
          return {
            passed: hasBearer && hasSub,
            error: 'Authorization başlığındaki `Bearer ` kontrolü ve `authHeader.substring(7)` ayrıştırması eksik!'
          };
        }
      },
      {
        description: 'SecurityContextHolder.getContext().setAuthentication(...) ile oturum kurulmuş mu?',
        validate: (code) => {
          const hasAuth = /SecurityContextHolder\.getContext\(\)\.setAuthentication\s*\(/.test(code);
          return {
            passed: hasAuth,
            error: '`SecurityContextHolder.getContext().setAuthentication(auth);` çağrısı eksik!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'GET',
      path: '/api/v1/admin/dashboard',
      successBody: {
        authenticatedUser: 'admin@mastery.io',
        roles: ['ROLE_ADMIN'],
        accessGranted: true
      }
    }
  },
  {
    id: 'challenge-7-global-exception',
    title: '7. Görev: RFC 7807 Global Exception Handler (@RestControllerAdvice)',
    difficulty: 'Orta',
    category: 'Spring MVC & Exceptions',
    description: 'Spring Boot 3 ProblemDetail standardına uygun merkezi hata yakalama sınıfı oluşturun.',
    instructions: [
      'Sınıfın başına `@RestControllerAdvice` ekleyin.',
      '`@ExceptionHandler(ResourceNotFoundException.class)` ile bulunamadı hatasını yakalayın.',
      '`ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage())` döndürün.'
    ],
    filename: 'GlobalExceptionHandler.java',
    initialCode: `package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

// 1. @RestControllerAdvice anotasyonunu ekleyin
public class GlobalExceptionHandler {

    // 2. @ExceptionHandler ile ResourceNotFoundException metodunu yazın
}`,
    solutionCode: `package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
    }
}`,
    testCheckers: [
      {
        description: '@RestControllerAdvice sınıf anotasyonu tanımlanmış mı?',
        validate: (code) => {
          const has = /@RestControllerAdvice[\s\S]*?class\s+GlobalExceptionHandler/.test(code);
          return {
            passed: has,
            error: 'Sınıf üzerinde `@RestControllerAdvice` anotasyonu eksik!'
          };
        }
      },
      {
        description: '@ExceptionHandler ve ProblemDetail.forStatusAndDetail kullanılmış mı?',
        validate: (code) => {
          const hasHandler = /@ExceptionHandler\s*\(\s*ResourceNotFoundException\.class\s*\)/.test(code);
          const hasProblem = /ProblemDetail\.forStatusAndDetail\s*\(\s*HttpStatus\.NOT_FOUND/.test(code);
          return {
            passed: hasHandler && hasProblem,
            error: '`@ExceptionHandler(ResourceNotFoundException.class)` ve `ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ...)` tanımı eksik!'
          };
        }
      }
    ],
    simulatedEndpoint: {
      method: 'GET',
      path: '/api/v1/users/99999',
      successBody: {
        type: 'about:blank',
        title: 'Not Found',
        status: 404,
        detail: 'Kullanıcı bulunamadı (ID: 99999)',
        instance: '/api/v1/users/99999'
      }
    }
  }
];

export const getChallengesData = (lang: string = 'tr'): CodingChallenge[] => {
  if (lang === 'en') {
    return CODING_CHALLENGES.map(ch => {
      const enMap: Record<string, Partial<CodingChallenge>> = {
        'challenge-1-rest-controller': {
          title: '1. Task: Create First @RestController and @GetMapping Method',
          difficulty: 'Başlangıç' as any,
          category: 'Spring MVC & REST',
          description: 'Create a Spring Boot REST Controller for a greeting service. Return a greeting message in JSON format receiving the "name" query parameter.',
          instructions: [
            'Add `@RestController` annotation to GreetingController class.',
            'Define root path `@RequestMapping("/api/v1")` at class level.',
            'Annotate method with `@GetMapping("/greet")`.',
            'Add `@RequestParam` annotation to method parameter (e.g. `@RequestParam(defaultValue = "World") String name`).',
            'Return `ResponseEntity.ok(Map.of("message", "Hello " + name));` in method body.'
          ]
        },
        'challenge-2-constructor-injection': {
          title: '2. Task: Clean Service & Constructor Dependency Injection',
          difficulty: 'Başlangıç' as any,
          category: 'IoC & Dependency Injection',
          description: 'Refactor UserService to use Constructor Injection with final fields instead of legacy @Autowired field injection.',
          instructions: [
            'Add `@Service` annotation to UserService class.',
            'Define `private final UserRepository userRepository;` and `private final NotificationService notificationService;`.',
            'Create explicit constructor injecting both dependencies.'
          ]
        },
        'challenge-3-jpa-entity-repo': {
          title: '3. Task: JPA Entity & Spring Data Repository Design',
          difficulty: 'Orta' as any,
          category: 'Spring Data JPA',
          description: 'Design a Product entity and custom Spring Data JPA repository query methods.',
          instructions: [
            'Add `@Entity` and `@Table(name = "products")` to Product class.',
            'Define `@Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;`.',
            'Create ProductRepository extending `JpaRepository<Product, Long>`.',
            'Declare `List<Product> findByCategoryAndPriceLessThan(String category, BigDecimal price);` query method.'
          ]
        },
        'challenge-4-bean-configuration': {
          title: '4. Task: Custom @Configuration & @Bean Definition',
          difficulty: 'Orta' as any,
          category: 'Spring Core & Beans',
          description: 'Configure custom third-party beans with @Configuration and conditional loading.',
          instructions: [
            'Annotate AppConfig with `@Configuration`.',
            'Define `@Bean` method returning configured `RestClient` or `ObjectMapper` instance.'
          ]
        },
        'challenge-5-global-exception-handler': {
          title: '5. Task: RFC 7807 Global Exception Handler (@RestControllerAdvice)',
          difficulty: 'Orta' as any,
          category: 'Spring MVC & Exceptions',
          description: 'Create a centralized exception handler using Spring Boot 3 ProblemDetail standards.',
          instructions: [
            'Annotate class with `@RestControllerAdvice`.',
            'Handle `ResourceNotFoundException.class` using `@ExceptionHandler`.',
            'Return `ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage())`.'
          ]
        }
      };

      const override = enMap[ch.id];
      if (!override) return ch;
      return {
        ...ch,
        ...override
      };
    });
  }
  return CODING_CHALLENGES;
};
