import { SimulatedEndpoint } from '../types';

export const SIMULATED_ENDPOINTS: SimulatedEndpoint[] = [
  {
    id: 'get-users',
    method: 'GET',
    path: '/api/v1/users?page=0&size=10',
    title: 'Kullanıcıları Sayfalı Listele',
    description: 'Spring Data JPA Pageable ile sayfalanmış kullanıcı listesini ve toplam kayıt sayısını döner.',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    },
    expectedStatus: 200,
    responseBody: {
      content: [
        { id: 1, name: 'Zeynep Kaya', email: 'zeynep@example.com', role: 'ROLE_ADMIN', active: true, createdAt: '2026-09-20T10:15:30Z' },
        { id: 2, name: 'Emre Demir', email: 'emre@example.com', role: 'ROLE_USER', active: true, createdAt: '2026-09-21T14:22:10Z' },
        { id: 3, name: 'Selin Yıldız', email: 'selin@example.com', role: 'ROLE_USER', active: false, createdAt: '2026-09-22T08:05:00Z' }
      ],
      pageable: { pageNumber: 0, pageSize: 10, offset: 0 },
      totalElements: 3,
      totalPages: 1,
      last: true
    },
    sqlQueries: [
      'Hibernate: select u1_0.id,u1_0.active,u1_0.created_at,u1_0.email,u1_0.name,u1_0.role from users u1_0 limit ? offset ?',
      'Hibernate: select count(u1_0.id) from users u1_0'
    ],
    springControllerCode: `@GetMapping("/api/v1/users")
public ResponseEntity<Page<UserResponse>> getUsers(
        @PageableDefault(size = 10, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) {
    Page<UserResponse> users = userService.getUsers(pageable);
    return ResponseEntity.ok(users);
}`,
    springServiceCode: `@Transactional(readOnly = true)
public Page<UserResponse> getUsers(Pageable pageable) {
    return userRepository.findAll(pageable)
            .map(userMapper::toResponse);
}`
  },
  {
    id: 'post-user',
    method: 'POST',
    path: '/api/v1/users',
    title: 'Yeni Kullanıcı Kaydı (Register)',
    description: 'DTO validasyonu (@Valid), şifre hashleme (BCrypt) ve 201 Created yanıtı üretir.',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    requestBody: JSON.stringify({
      name: 'Can Yılmaz',
      email: 'can.yilmaz@example.com',
      password: 'StrongPassword123!',
      role: 'ROLE_USER'
    }, null, 2),
    expectedStatus: 201,
    responseBody: {
      id: 4,
      name: 'Can Yılmaz',
      email: 'can.yilmaz@example.com',
      role: 'ROLE_USER',
      active: true,
      createdAt: '2026-09-26T23:05:00Z'
    },
    sqlQueries: [
      'Hibernate: select count(*) from users u1_0 where u1_0.email=?',
      'Hibernate: insert into users (active,created_at,email,name,password,role,updated_at) values (?,?,?,?,?,?,?)'
    ],
    springControllerCode: `@PostMapping("/api/v1/users")
public ResponseEntity<UserResponse> createUser(@Valid @RequestBody CreateUserRequest request) {
    UserResponse createdUser = userService.createUser(request);
    URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdUser.id())
            .toUri();
    return ResponseEntity.created(location).body(createdUser);
}`,
    springServiceCode: `@Transactional
public UserResponse createUser(CreateUserRequest request) {
    if (userRepository.existsByEmail(request.email())) {
        throw new DuplicateEmailException("Bu e-posta adresi zaten kullanımda: " + request.email());
    }
    User user = userMapper.toEntity(request);
    user.setPassword(passwordEncoder.encode(request.password()));
    User saved = userRepository.save(user);
    eventPublisher.publishEvent(new UserRegisteredEvent(saved.getId(), saved.getEmail()));
    return userMapper.toResponse(saved);
}`
  },
  {
    id: 'auth-login',
    method: 'POST',
    path: '/api/v1/auth/login',
    title: 'Kullanıcı Girişi (JWT Login)',
    description: 'Kullanıcı adı ve şifreyi doğrular, geçerli bir JWT Access Token ve Refresh Token üretir.',
    headers: {
      'Content-Type': 'application/json'
    },
    requestBody: JSON.stringify({
      email: 'zeynep@example.com',
      password: 'AdminPassword123!'
    }, null, 2),
    expectedStatus: 200,
    responseBody: {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6ZXluZXBAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTcyNzM4NDAwMCwiZXhwIjoxNzI3NDcwNDAwfQ.s8Fk9...',
      tokenType: 'Bearer',
      expiresIn: 86400000,
      user: {
        id: 1,
        name: 'Zeynep Kaya',
        email: 'zeynep@example.com',
        role: 'ROLE_ADMIN'
      }
    },
    sqlQueries: [
      'Hibernate: select u1_0.id,u1_0.email,u1_0.password,u1_0.role,u1_0.active from users u1_0 where u1_0.email=?'
    ],
    springControllerCode: `@PostMapping("/api/v1/auth/login")
public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
    return ResponseEntity.ok(authService.login(request));
}`,
    springServiceCode: `public AuthResponse login(LoginRequest request) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.email(), request.password())
    );
    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    String token = jwtService.generateToken(userDetails);
    return new AuthResponse(token, "Bearer", 86400000L, userMapper.toDto(userDetails));
}`
  },
  {
    id: 'get-actuator-health',
    method: 'GET',
    path: '/actuator/health',
    title: 'Spring Boot Actuator Sağlık Durumu',
    description: 'Veritabanı bağlantısı, disk alanı ve sistem canlılığını denetleyen Actuator çıktısı.',
    headers: {
      'Accept': 'application/vnd.spring-boot.actuator.v3+json'
    },
    expectedStatus: 200,
    responseBody: {
      status: 'UP',
      components: {
        db: {
          status: 'UP',
          details: { database: 'PostgreSQL', validationQuery: 'isValid()' }
        },
        diskSpace: {
          status: 'UP',
          details: { total: 499963174912, free: 215438991360, threshold: 10485760, exists: true }
        },
        livenessState: { status: 'UP' },
        readinessState: { status: 'UP' }
      }
    },
    sqlQueries: [
      '/* Actuator Health Check */ select 1'
    ],
    springControllerCode: `// Spring Boot Actuator tarafından otomatik sağlanır
// application.yml: management.endpoints.web.exposure.include=health,info,metrics`,
    springServiceCode: `// DataSourceHealthIndicator arka planda periyodik olarak connection pool kontrolü yapar.`
  }
];
