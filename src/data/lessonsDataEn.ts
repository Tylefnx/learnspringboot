import { LessonModule } from '../types';

export const LESSONS_DATA_EN: LessonModule[] = [
  {
    id: 'module-1-spring-boot-basics',
    number: 1,
    title: 'Spring Boot Fundamentals & Core Architecture',
    subtitle: 'Differences from Spring Framework, Auto-Configuration internals, Starter ecosystem, and Classpath analysis',
    icon: 'Layers',
    category: 'Core Architecture',
    difficulty: 'Beginner',
    durationMinutes: 35,
    overview: 'Spring Boot is the leading framework for building modern, production-ready enterprise Java applications. In this module, we dissect the philosophy of "Convention over Configuration", how Auto-Configuration evaluates conditions under the hood, and how to configure Jakarta EE 10 and Java 21 LTS standards.',
    sections: [
      {
        id: 'spring-vs-spring-boot',
        title: '1. Traditional Spring Framework vs Spring Boot',
        content: `Traditional Spring Framework (Spring 2.x - 4.x) revolutionized Inversion of Control (IoC) and Aspect-Oriented Programming (AOP), but bootstrapping a production-ready application required writing dozens of complex XML files or verbose \`@Configuration\` classes (Boilerplate Configuration Hell).

Furthermore, managing standalone application servers (Tomcat, WebLogic, WildFly), producing \`.war\` archives, and handling deployment overhead severely slowed down developer productivity.

### 4 Core Problems Solved by Spring Boot:
1. **Dependency Hell**: Replaced by **BOM (Bill of Materials)** and curated \`spring-boot-starter-*\` dependency descriptors.
2. **Boilerplate Configuration**: Replaced by **Intelligent Auto-Configuration**.
3. **Deployment Friction**: Replaced by single-command (\`java -jar\`) execution via **Embedded Web Servers** (Tomcat, Jetty, Undertow).
4. **Lack of Observability**: Addressed by production-ready **Spring Boot Actuator** health checks, metrics, and tracing.`,
        codeSnippets: [
          {
            title: 'Spring Boot 3.3+ pom.xml Standard Configuration',
            language: 'xml',
            filename: 'pom.xml',
            description: 'spring-boot-starter-parent manages compatible dependency versions from a single source of truth.',
            code: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Spring Boot Parent BOM: Curates 200+ compatible libraries -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>enterprise-api</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    
    <properties>
        <java.version>21</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <!-- REST API, MVC & Embedded Tomcat (Port 8080) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Production Health & Metrics -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <!-- JUnit 5, Mockito & AssertJ test suite -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Builds Executable Fat JAR -->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`
          }
        ],
        notes: [
          'Spring Boot 3.0+ requires Java 17 as baseline. Java 21 LTS is strongly recommended for Virtual Threads (Project Loom).',
          'Following Jakarta EE 10 standards, package namespaces shifted from `javax.servlet` / `javax.persistence` to `jakarta.servlet` / `jakarta.persistence`.'
        ]
      },
      {
        id: 'auto-configuration-internals',
        title: '2. How Auto-Configuration Works Internally',
        content: `The \`@SpringBootApplication\` annotation is a meta-annotation composed of:
\`\`\`
@SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan
\`\`\`

### Auto-Configuration Loading Sequence:
1. Spring Boot scans classpath imports registered in \`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\`.
2. Over 150+ registered **Auto-Configuration Classes** are evaluated sequentially.
3. Each class checks **Conditional Annotations (@Conditional...)**.

### Common Conditional Annotations:
| Annotation | Condition |
|---|---|
| \`@ConditionalOnClass(DataSource.class)\` | Activates when DataSource class is on classpath |
| \`@ConditionalOnMissingBean(ObjectMapper.class)\` | Activates only if developer has not declared a custom ObjectMapper |
| \`@ConditionalOnProperty(name="feature.x", havingValue="true")\` | Activates when matching application.yml property is true |
| \`@ConditionalOnWebApplication\` | Activates when running as web application |`,
        codeSnippets: [
          {
            title: 'Anatomy of an Auto-Configuration Class',
            language: 'java',
            filename: 'JacksonAutoConfiguration.java (Simplified)',
            description: 'How Spring Boot conditionally instantiates a default Jackson ObjectMapper.',
            code: `package org.springframework.boot.autoconfigure.jackson;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(ObjectMapper.class)
public class JacksonAutoConfiguration {

    @Bean
    @Primary
    @ConditionalOnMissingBean // Executes only if user has not defined their own @Bean ObjectMapper
    public ObjectMapper jacksonObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        return mapper;
    }
}`
          }
        ],
        tips: [
          'Add `debug: true` to `application.yml` to inspect the "CONDITIONS EVALUATION REPORT" in console logs.'
        ]
      }
    ],
    bestPractices: [
      'Place main Application class at the root package (e.g. `com.company.project.Application`) so `@ComponentScan` scans all sub-packages automatically.',
      'Never run embedded Tomcat as root user inside Docker containers.'
    ],
    commonPitfalls: [
      'Accidentally overriding essential auto-configurations by declaring beans with conflicting names.',
      'Importing legacy `javax.*` packages in Spring Boot 3.x resulting in ClassNotFoundException.'
    ],
    keyTakeaways: [
      'Starters provide curated, conflict-free dependency sets (BOM).',
      'Auto-Configuration uses conditional evaluation (@ConditionalOnMissingBean, @ConditionalOnClass) to configure sensible defaults.'
    ]
  },
  {
    id: 'module-2-ioc-di-beans',
    number: 2,
    title: 'IoC, Dependency Injection & Bean Lifecycle',
    subtitle: 'ApplicationContext, Constructor Injection, Bean Scopes, and @Configuration',
    icon: 'Boxes',
    category: 'Dependency Injection',
    difficulty: 'Beginner',
    durationMinutes: 40,
    overview: 'Inversion of Control (IoC) transfers object creation and wiring to the Spring ApplicationContext. In this module, we explore Bean lifecycles, Singleton thread safety, and why Constructor Injection is the industry gold standard.',
    sections: [
      {
        id: 'constructor-vs-field',
        title: '1. Why Constructor Injection Trumps Field Injection',
        content: `Field injection using \`@Autowired private MyService service;\` was common in legacy Spring, but is considered an antipattern in modern engineering.

### 3 Major Flaws of Field Injection:
1. **Hidden NullPointerExceptions**: Dependencies can remain uninitialized during pure unit tests.
2. **Violation of Immutability**: Fields cannot be marked \`final\`.
3. **Hidden Circular Dependencies**: Framework masks circular references at startup until runtime crashes.`,
        codeSnippets: [
          {
            title: 'Clean Constructor Injection with Final Fields',
            language: 'java',
            filename: 'OrderService.java',
            description: 'Explicit dependency declaration enabling pure Mockito unit testing.',
            code: `package com.example.mastery.service;

import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final PaymentService paymentService;
    private final NotificationService notificationService;

    // In Spring 4.3+, @Autowired on single constructors is optional
    public OrderService(PaymentService paymentService, NotificationService notificationService) {
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }

    public void processOrder(Long orderId) {
        paymentService.charge(orderId);
        notificationService.sendReceipt(orderId);
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Always use Constructor Injection with `final` fields.',
      'Keep Singleton beans stateless to avoid multithreading race conditions.'
    ],
    commonPitfalls: [
      'Storing mutable user state inside Singleton bean instance variables.',
      'Using `@Autowired` directly on private fields in production code.'
    ],
    keyTakeaways: [
      'Constructor injection ensures immutability, testability, and fail-fast startup.',
      'Singleton scope beans are shared across all HTTP threads simultaneously.'
    ]
  },
  {
    id: 'module-3-data-jpa-hibernate',
    number: 3,
    title: 'Spring Data JPA, Hibernate 6 & Database Optimization',
    subtitle: 'Entity mappings, Persistence Context, Dirty Checking, N+1 Query Fixes with EntityGraph',
    icon: 'Database',
    category: 'Database & ORM',
    difficulty: 'Intermediate',
    durationMinutes: 45,
    overview: 'Master Spring Data JPA and Hibernate 6 internals. Learn how the Persistence Context manages entity state, how Dirty Checking eliminates manual UPDATE queries, and how to eliminate N+1 query bottlenecks.',
    sections: [
      {
        id: 'n-plus-one-problem',
        title: '1. Eliminating the N+1 Query Problem with EntityGraph & JOIN FETCH',
        content: `When fetching collections across OneToMany relationships, lazy loading triggers 1 initial query + N additional sub-queries for each child item.

### The Fix:
Use **JOIN FETCH** in JPQL or declare an **@EntityGraph** to load parent and child associations in a single optimized SQL JOIN statement.`,
        codeSnippets: [
          {
            title: 'EntityGraph Optimization in Spring Data JPA',
            language: 'java',
            filename: 'UserRepository.java',
            description: 'Single query eager fetch avoiding N+1 roundtrips.',
            code: `package com.example.mastery.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = {"orders", "orders.items"})
    List<User> findAllWithOrders();
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Use `@EntityGraph` or `JOIN FETCH` for collection queries.',
      'Always configure connection pool settings (`maximum-pool-size`) in production.'
    ],
    commonPitfalls: [
      'Leaving `spring.jpa.hibernate.ddl-auto=update` in production environments.',
      'Calling `repository.save()` inside `@Transactional` methods when modifying managed entities.'
    ],
    keyTakeaways: [
      'Hibernate Dirty Checking automatically persists modified managed entities upon transaction commit.',
      'N+1 query problems must be solved using batch joins or entity graphs.'
    ]
  },
  {
    id: 'module-4-rest-apis',
    number: 4,
    title: 'RESTful API Design, RFC 7807 & Global Exception Handling',
    subtitle: '@RestController, @Valid validation, ProblemDetails, and ResponseEntity',
    icon: 'Globe',
    category: 'Web & REST',
    difficulty: 'Intermediate',
    durationMinutes: 40,
    overview: 'Design production-grade REST APIs compliant with HTTP standards and RFC 7807 ProblemDetails specification in Spring Boot 3.',
    sections: [
      {
        id: 'rfc-7807-handler',
        title: '1. Standardized Error Handling with ProblemDetail',
        content: `Spring Boot 3 natively implements RFC 7807 ProblemDetails, standardizing error payloads across microservices.`,
        codeSnippets: [
          {
            title: 'Centralized GlobalExceptionHandler',
            language: 'java',
            filename: 'GlobalExceptionHandler.java',
            description: 'Standardized RFC 7807 error payload generation.',
            code: `package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Resource Not Found");
        return problem;
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Return RFC 7807 ProblemDetail format for all client and server errors.',
      'Use DTOs instead of exposing JPA Entities directly in REST endpoints.'
    ],
    commonPitfalls: [
      'Returning raw stack traces to API clients in production.',
      'Using HTTP 200 OK for error responses.'
    ],
    keyTakeaways: [
      'RFC 7807 standardizes error payload structure across clients.',
      '@RestControllerAdvice centralizes exception handling.'
    ]
  },
  {
    id: 'module-5-security-jwt',
    number: 5,
    title: 'Spring Security 6 & Modern JWT Authentication',
    subtitle: 'SecurityFilterChain, Stateless Architecture, JJWT 0.12, and Method Security',
    icon: 'ShieldCheck',
    category: 'Security & Auth',
    difficulty: 'Advanced',
    durationMinutes: 50,
    overview: 'Secure enterprise applications with Spring Security 6, custom SecurityFilterChain, and HMAC-SHA256 JWT tokens.',
    sections: [
      {
        id: 'security-filter-chain',
        title: '1. Spring Security 6 Functional Configuration',
        content: `Spring Security 6 mandates the component-based \`SecurityFilterChain\` bean DSL, eliminating legacy adapters.`,
        codeSnippets: [
          {
            title: 'Modern SecurityFilterChain Bean',
            language: 'java',
            filename: 'SecurityConfig.java',
            description: 'Stateless session management and JWT filter registration.',
            code: `package com.example.mastery.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Store JWT secrets securely via environment variables.',
      'Use BCrypt or Argon2 password encoders with appropriate work factors.'
    ],
    commonPitfalls: [
      'Storing sensitive credentials inside client-side JWT payload claims.',
      'Disabling CSRF in session-based cookie authentication.'
    ],
    keyTakeaways: [
      'Spring Security 6 enforces stateless SecurityFilterChain configuration.',
      'JWT filters populate SecurityContextHolder per request.'
    ]
  },
  {
    id: 'module-6-architecture-best-practices',
    number: 6,
    title: 'Clean Architecture, Hexagonal & Domain-Driven Design',
    subtitle: 'Separation of concerns, Ports & Adapters, and Rich Domain Models in Spring Boot',
    icon: 'Cpu',
    category: 'Software Architecture',
    difficulty: 'Advanced',
    durationMinutes: 45,
    overview: 'Apply Clean Architecture with pure Java domain models decoupled from framework dependencies.',
    sections: [
      {
        id: 'ports-adapters',
        title: '1. Ports and Adapters in Pure Java',
        content: `Domain logic remains isolated in pure Java, interacting with persistence and APIs solely via Inbound and Outbound Ports.`
      }
    ],
    bestPractices: [
      'Keep Domain entities pure Java with zero framework annotations.',
      'Depend on abstractions (Ports) rather than concrete database adapters.'
    ],
    commonPitfalls: [
      'Coupling domain business rules directly with JPA annotations and database drivers.'
    ],
    keyTakeaways: [
      'Hexagonal architecture guarantees that changing databases or web protocols does not affect core business rules.'
    ]
  },
  {
    id: 'module-7-performance-virtual-threads',
    number: 7,
    title: 'Java 21 Virtual Threads, Async & Performance Tuning',
    subtitle: 'Project Loom, HikariCP pool optimization, and @Async thread pools',
    icon: 'Zap',
    category: 'Performance & Concurrency',
    difficulty: 'Advanced',
    durationMinutes: 35,
    overview: 'Scale I/O bound workloads effortlessly with Java 21 Virtual Threads and thread pool tuning.',
    sections: [
      {
        id: 'virtual-threads-setup',
        title: '1. Enabling Virtual Threads in Spring Boot 3.2+',
        content: `Enable Project Loom Virtual Threads globally with a single configuration flag:
\`\`\`yaml
spring:
  threads:
    virtual:
      enabled: true
\`\`\``
      }
    ],
    bestPractices: [
      'Enable Virtual Threads for high-concurrency I/O bound web services.',
      'Avoid pinning virtual threads with `synchronized` blocks around blocking I/O (use `ReentrantLock`).'
    ],
    commonPitfalls: [
      'Creating custom thread pools for virtual threads (virtual threads should not be pooled).'
    ],
    keyTakeaways: [
      'Virtual threads scale throughput drastically for blocking database and HTTP operations.'
    ]
  },
  {
    id: 'module-8-testing-quality',
    number: 8,
    title: 'Unit & Integration Testing (Mockito & Testcontainers)',
    subtitle: '@SpringBootTest, MockMvc, DataJpaTest, and isolated PostgreSQL containers',
    icon: 'CheckCircle2',
    category: 'Testing & QA',
    difficulty: 'Intermediate',
    durationMinutes: 40,
    overview: 'Write fast unit tests and robust integration tests using MockMvc and Testcontainers.',
    sections: [
      {
        id: 'testcontainers-integration',
        title: '1. Integration Testing with Real Database Containers',
        content: `Use Testcontainers to spin up ephemeral PostgreSQL instances for authentic integration testing.`
      }
    ],
    bestPractices: [
      'Prefer isolated unit tests for business logic and Testcontainers for persistence validation.'
    ],
    commonPitfalls: [
      'Relying on H2 in-memory databases for tests when production uses PostgreSQL (dialect mismatch).'
    ],
    keyTakeaways: [
      'Testcontainers ensures parity between test environments and production databases.'
    ]
  },
  {
    id: 'module-9-devops-docker-production',
    number: 9,
    title: 'Docker Orchestration, Multi-Stage Builds & Actuator',
    subtitle: 'Multi-stage Dockerfile, JVM container limits, and Spring Boot Actuator health checks',
    icon: 'Terminal',
    category: 'DevOps & Cloud',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    overview: 'Containerize and orchestrate Spring Boot with multi-stage Docker builds and production readiness checks.',
    sections: [
      {
        id: 'docker-multistage',
        title: '1. Optimized Multi-Stage Dockerfile',
        content: `Multi-stage builds produce ultra-light, secure container images running Eclipse Temurin Java 21 JRE.`
      }
    ],
    bestPractices: [
      'Always use multi-stage builds and non-root runtime users.'
    ],
    commonPitfalls: [
      'Shipping full JDK compilers and build tools inside production container images.'
    ],
    keyTakeaways: [
      'Multi-stage Docker builds reduce image size and attack surfaces drastically.'
    ]
  }
];
