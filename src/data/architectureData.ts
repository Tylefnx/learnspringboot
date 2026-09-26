export interface ArchitectureFileNode {
  id: string;
  name: string;
  path: string;
  layer: 'Domain (Çekirdek)' | 'Application (Kullanım Senaryoları)' | 'Infrastructure (Dış Dünya & DB)' | 'Presentation (REST API & UI)';
  pattern: string;
  description: string;
  code: string;
  keyTakeaway: string;
}

export const ARCHITECTURE_FILES: ArchitectureFileNode[] = [
  {
    id: 'user-entity',
    name: 'User.java',
    path: 'domain/model/User.java',
    layer: 'Domain (Çekirdek)',
    pattern: 'Rich Domain Entity & Encapsulation',
    description: 'Saf Java ile yazılmış, iş kurallarını (Business Logic) kendi içinde barındıran çekirdek varlık. Kesinlikle Spring veya JPA (@Entity) bağımlılığı içermez!',
    keyTakeaway: 'Domain katmanı hiçbir framework veya veritabanı kütüphanesine bağımlı olmamalıdır (Pure Java).',
    code: `package com.mastery.springboot.domain.model;

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
}`
  },
  {
    id: 'email-vo',
    name: 'Email.java',
    path: 'domain/model/Email.java',
    layer: 'Domain (Çekirdek)',
    pattern: 'Value Object (Java 21 Record)',
    description: 'Değiştirilemez (Immutable) ve kendi geçerliliğini kurucu metodunda denetleyen Value Object.',
    keyTakeaway: 'İlkel saplantısından (Primitive Obsession) kurtulmak için String yerine tip güvenli Value Object\'ler kullanılır.',
    code: `package com.mastery.springboot.domain.model;

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
}`
  },
  {
    id: 'user-repo-port',
    name: 'UserRepositoryPort.java',
    path: 'domain/port/UserRepositoryPort.java',
    layer: 'Domain (Çekirdek)',
    pattern: 'Outbound Port (Hexagonal / Dependency Inversion)',
    description: 'Domain katmanının veritabanı ihtiyacını tanımlayan arayüz. Veritabanının PostgreSQL mi, JPA mi, Redis mi olduğunu bilmez.',
    keyTakeaway: 'DIP (Dependency Inversion Principle): Yüksek seviyeli modüller düşük seviyeli detaylara bağımlı olmamalıdır.',
    code: `package com.mastery.springboot.domain.port;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import java.util.Optional;

public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByEmail(Email email);
    boolean existsByEmail(Email email);
}`
  },
  {
    id: 'user-service-app',
    name: 'UserService.java',
    path: 'application/service/UserService.java',
    layer: 'Application (Kullanım Senaryoları)',
    pattern: 'Use Case Orchestrator & Domain Events',
    description: 'Kullanım senaryolarını (Use Cases) koordine eden, transaction sınırlarını yöneten ve Domain Event fırlatan servis.',
    keyTakeaway: 'Application katmanı iş mantığını kendisi üretmez; Domain nesnelerini ve portları orkestre eder.',
    code: `package com.mastery.springboot.application.service;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import com.mastery.springboot.domain.event.UserCreatedEvent;
import com.mastery.springboot.domain.exception.DomainValidationException;
import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.UserRepositoryPort;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class UserService implements CreateUserUseCase {

    private final UserRepositoryPort userRepositoryPort;
    private final ApplicationEventPublisher eventPublisher;

    public UserService(UserRepositoryPort userRepositoryPort, ApplicationEventPublisher eventPublisher) {
        this.userRepositoryPort = userRepositoryPort;
        this.eventPublisher = eventPublisher;
    }

    @Override
    @Transactional
    public UserDto execute(CreateUserCommand command) {
        Email email = new Email(command.email());

        if (userRepositoryPort.existsByEmail(email)) {
            throw new DomainValidationException("Bu e-posta adresi zaten kayıtlı: " + command.email());
        }

        User newUser = new User(null, command.fullName(), email, true, Instant.now());
        User savedUser = userRepositoryPort.save(newUser);

        // Domain Event fırlatılır (Gevşek bağlı mimari)
        eventPublisher.publishEvent(new UserCreatedEvent(savedUser.getId(), savedUser.getEmail().value()));

        return new UserDto(savedUser.getId(), savedUser.getFullName(), savedUser.getEmail().value(), savedUser.isActive());
    }
}`
  },
  {
    id: 'user-jpa-adapter',
    name: 'UserJpaAdapter.java',
    path: 'infrastructure/adapter/jpa/UserJpaAdapter.java',
    layer: 'Infrastructure (Dış Dünya & DB)',
    pattern: 'Outbound Adapter (JPA Implementation)',
    description: 'Domain portunu (UserRepositoryPort) Spring Data JPA ve Hibernate Entity nesneleri ile implemente eden adaptör.',
    keyTakeaway: 'Veritabanı teknolojisi (Postgres, MongoDB, DynamoDB) değişse bile Domain ve Application katmanına tek satır dokunulmaz!',
    code: `package com.mastery.springboot.infrastructure.adapter.jpa;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.UserRepositoryPort;
import org.springframework.stereotype.Component;

import java.util.Optional;

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
}`
  },
  {
    id: 'user-controller-pres',
    name: 'UserController.java',
    path: 'presentation/controller/UserController.java',
    layer: 'Presentation (REST API & UI)',
    pattern: 'Inbound Adapter (REST Web Layer)',
    description: 'HTTP isteklerini karşılayan, girdi validasyonunu tetikleyen ve Inbound Port (CreateUserUseCase) üzerinden sonucu 201 Created ile dönen uç nokta.',
    keyTakeaway: 'Controller doğrudan servise veya entity\'ye değil; sadece Use Case arayüzüne (Inbound Port) bağımlıdır.',
    code: `package com.mastery.springboot.presentation.controller;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final CreateUserUseCase createUserUseCase;

    public UserController(CreateUserUseCase createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserCommand command) {
        UserDto result = createUserUseCase.execute(command);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(result.id())
                .toUri();
    }
}`
  }
];

export const ARCHITECTURE_FILES_EN: ArchitectureFileNode[] = [
  {
    id: 'user-entity',
    name: 'User.java',
    path: 'domain/model/User.java',
    layer: 'Domain (Core)' as any,
    pattern: 'Rich Domain Entity & Encapsulation',
    description: 'Pure Java domain model encapsulating core business invariants. Zero dependencies on Spring, Hibernate or JPA (@Entity)!',
    keyTakeaway: 'The domain layer must remain completely independent of frameworks, databases, or UI concerns (Pure Java).',
    code: `package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.time.Instant;

/**
 * Domain Entity: User
 * - Core business rules are encapsulated here.
 * - Free of Spring / JPA annotations.
 */
public class User {
    private final Long id;
    private String fullName;
    private Email email;
    private boolean active;
    private final Instant createdAt;

    public User(Long id, String fullName, Email email, boolean active, Instant createdAt) {
        if (fullName == null || fullName.trim().length() < 2) {
            throw new DomainValidationException("Full name must have at least 2 characters.");
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
            throw new DomainValidationException("New name is invalid.");
        }
        this.fullName = newName;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public Email getEmail() { return email; }
    public boolean isActive() { return active; }
    public Instant getCreatedAt() { return createdAt; }
}`
  },
  {
    id: 'email-vo',
    name: 'Email.java',
    path: 'domain/model/Email.java',
    layer: 'Domain (Core)' as any,
    pattern: 'Value Object (Immutable Record)',
    description: 'Immutable Value Object representing an email address with validation on instantiation. Equality is defined by value.',
    keyTakeaway: 'Primitive Obsession is eliminated by modeling domain concepts with strongly-typed Value Objects.',
    code: `package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.util.regex.Pattern;

public record Email(String value) {
    private static final Pattern EMAIL_REGEX = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    public Email {
        if (value == null || !EMAIL_REGEX.matcher(value).matches()) {
            throw new DomainValidationException("Invalid email format: " + value);
        }
    }
}`
  },
  {
    id: 'user-repository-port',
    name: 'UserRepositoryPort.java',
    path: 'domain/port/out/UserRepositoryPort.java',
    layer: 'Domain (Core)' as any,
    pattern: 'Outbound Port (SPI Interface)',
    description: 'Output port interface defined by the domain. Infrastructure adapters implement this port to fulfill persistence operations.',
    keyTakeaway: 'Dependency Inversion Principle: High-level core domain defines the interface; low-level infrastructure implements it.',
    code: `package com.mastery.springboot.domain.port.out;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import java.util.Optional;

public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByEmail(Email email);
    boolean existsByEmail(Email email);
}`
  },
  {
    id: 'create-user-usecase',
    name: 'CreateUserUseCase.java',
    path: 'application/usecase/CreateUserUseCase.java',
    layer: 'Application (Use Cases)' as any,
    pattern: 'Inbound Port (API Interface)',
    description: 'Use Case boundary contract defining what the application can execute for clients.',
    keyTakeaway: 'The application layer exposes clean task-oriented Use Case interfaces rather than generic CRUD services.',
    code: `package com.mastery.springboot.application.usecase;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;

public interface CreateUserUseCase {
    UserDto execute(CreateUserCommand command);
}`
  },
  {
    id: 'create-user-service',
    name: 'CreateUserService.java',
    path: 'application/service/CreateUserService.java',
    layer: 'Application (Use Cases)' as any,
    pattern: 'Use Case Orchestrator (@Service)',
    description: 'Orchestrates business logic and transactional flows. Communicates only with Domain Ports.',
    keyTakeaway: 'Application services handle orchestration and transactions; core domain logic lives within entities.',
    code: `package com.mastery.springboot.application.service;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.mapper.UserMapper;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import com.mastery.springboot.domain.exception.UserAlreadyExistsException;
import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.out.UserRepositoryPort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class CreateUserService implements CreateUserUseCase {

    private final UserRepositoryPort userRepositoryPort;
    private final UserMapper userMapper;

    public CreateUserService(UserRepositoryPort userRepositoryPort, UserMapper userMapper) {
        this.userRepositoryPort = userRepositoryPort;
        this.userMapper = userMapper;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public UserDto execute(CreateUserCommand command) {
        Email email = new Email(command.email());

        if (userRepositoryPort.existsByEmail(email)) {
            throw new UserAlreadyExistsException("A user with email " + command.email() + " already exists.");
        }

        User user = new User(null, command.fullName(), email, true, Instant.now());
        User savedUser = userRepositoryPort.save(user);

        return userMapper.toDto(savedUser);
    }
}`
  },
  {
    id: 'user-jpa-adapter',
    name: 'UserJpaAdapter.java',
    path: 'infrastructure/persistence/adapter/UserJpaAdapter.java',
    layer: 'Infrastructure (External & DB)' as any,
    pattern: 'Outbound Adapter (JPA / PostgreSQL)',
    description: 'Implements the domain UserRepositoryPort and maps between Domain Entities and Spring Data JPA Entity classes.',
    keyTakeaway: 'Infrastructure details (Hibernate, SQL, JPA) are encapsulated entirely inside outbound adapters.',
    code: `package com.mastery.springboot.infrastructure.persistence.adapter;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.out.UserRepositoryPort;
import com.mastery.springboot.infrastructure.persistence.entity.UserJpaEntity;
import com.mastery.springboot.infrastructure.persistence.mapper.UserPersistenceMapper;
import com.mastery.springboot.infrastructure.persistence.repository.SpringDataUserJpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserJpaAdapter implements UserRepositoryPort {

    private final SpringDataUserJpaRepository repository;
    private final UserPersistenceMapper mapper;

    public UserJpaAdapter(SpringDataUserJpaRepository repository, UserPersistenceMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public User save(User user) {
        UserJpaEntity entity = mapper.toEntity(user);
        UserJpaEntity saved = repository.save(entity);
        return mapper.toDomain(saved);
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id).map(mapper::toDomain);
    }

    @Override
    public Optional<User> findByEmail(Email email) {
        return repository.findByEmail(email.value()).map(mapper::toDomain);
    }

    @Override
    public boolean existsByEmail(Email email) {
        return repository.existsByEmail(email.value());
    }
}`
  },
  {
    id: 'user-controller-pres',
    name: 'UserController.java',
    path: 'presentation/controller/UserController.java',
    layer: 'Presentation (REST API & UI)' as any,
    pattern: 'Inbound Adapter (REST Web Layer)',
    description: 'Handles incoming HTTP POST requests, triggers Jakarta Bean Validation, and executes the Inbound Port.',
    keyTakeaway: 'Controllers depend on Use Case ports, maintaining decoupling from database and service implementations.',
    code: `package com.mastery.springboot.presentation.controller;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final CreateUserUseCase createUserUseCase;

    public UserController(CreateUserUseCase createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserCommand command) {
        UserDto result = createUserUseCase.execute(command);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(result.id())
                .toUri();
        return ResponseEntity.created(location).body(result);
    }
}`
  }
];

export function getArchitectureData(lang: string = 'tr'): ArchitectureFileNode[] {
  return lang === 'en' ? ARCHITECTURE_FILES_EN : ARCHITECTURE_FILES;
}

