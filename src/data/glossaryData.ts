export interface GlossaryTerm {
  id: string;
  term: string;
  englishTerm: string;
  category: 'Core & IoC' | 'JPA & Hibernate' | 'Security' | 'REST & Web' | 'Mimari & Patterns' | 'Performans & DevOps';
  definition: string;
  inSpringContext: string;
  codeExample?: string;
  relatedKeywords: string[];
}

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    id: 'ioc',
    term: 'IoC (Inversion of Control)',
    englishTerm: 'Inversion of Control',
    category: 'Core & IoC',
    definition: 'Nesnelerin oluşturulması, yaşam döngüsünün yönetilmesi ve birbirine bağlanması kontrolünün geliştiriciden alınıp bir framework container\'ına (Spring ApplicationContext) devredilmesi prensibidir.',
    inSpringContext: 'Spring Boot\'ta IoC Container, `@Component`, `@Service`, `@Repository` gibi anotasyonları tarayarak nesneleri ayağa kaldırır ve yönetir.',
    codeExample: '// Geliştirici new demez; container inject eder\n@Service\npublic class OrderService {\n    private final PaymentService paymentService;\n    public OrderService(PaymentService paymentService) {\n        this.paymentService = paymentService;\n    }\n}',
    relatedKeywords: ['ApplicationContext', 'BeanFactory', 'Dependency Injection', '@Component']
  },
  {
    id: 'di',
    term: 'DI (Dependency Injection)',
    englishTerm: 'Dependency Injection',
    category: 'Core & IoC',
    definition: 'Bir sınıfın ihtiyaç duyduğu bağımlılıkları kendisi üretmek yerine, dışarıdan (constructor, setter veya field yoluyla) alması tasarım desenidir.',
    inSpringContext: 'Spring Boot\'ta en güvenli ve önerilen yöntem Constructor Injection\'dır (Immutability ve test edilebilirlik sağlar).',
    codeExample: 'public UserService(UserRepository userRepository) {\n    this.userRepository = userRepository;\n}',
    relatedKeywords: ['Constructor Injection', '@Autowired', 'Field Injection', 'Inversion of Control']
  },
  {
    id: 'aop',
    term: 'AOP (Aspect-Oriented Programming)',
    englishTerm: 'Aspect-Oriented Programming',
    category: 'Core & IoC',
    definition: 'Uygulamanın ana iş mantığını kirletmeden; loglama, güvenlik, transaction yönetimi ve performans ölçümü gibi kesişen endişeleri (Cross-Cutting Concerns) modüler hale getirme paradigmasıdır.',
    inSpringContext: '`@Transactional`, `@Async`, `@PreAuthorize` gibi anotasyonların arkasında Spring AOP dinamik proxy mekanizması çalışır.',
    codeExample: '@Aspect\n@Component\npublic class LoggingAspect {\n    @Around("@annotation(LogExecutionTime)")\n    public Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {\n        long start = System.currentTimeMillis();\n        Object proceed = joinPoint.proceed();\n        System.out.println("Süre: " + (System.currentTimeMillis() - start) + "ms");\n        return proceed;\n    }\n}',
    relatedKeywords: ['Pointcut', 'Advice', 'JoinPoint', 'Proxy', '@Transactional']
  },
  {
    id: 'proxy',
    term: 'Dynamic Proxy (CGLIB / JDK)',
    englishTerm: 'Dynamic Proxy',
    category: 'Core & IoC',
    definition: 'Orijinal sınıfın etrafını saran ve metot çağrılarını araya girerek (interception) kontrol eden sahte nesnedir.',
    inSpringContext: 'Spring Boot 2.x/3.x varsayılan olarak CGLIB subclassing proxy kullanır. Sınıf içi metot çağrılarında (Self-invocation) proxy atlandığı için `@Transactional` veya `@Async` çalışmaz.',
    codeExample: '// Proxy çalışma mantığı\npublic void methodA() {\n    // Proxy Transaction başlatır (BEGIN TX)\n    target.methodA();\n    // Proxy Transaction commit eder (COMMIT)\n}',
    relatedKeywords: ['AOP', 'CGLIB', 'JDK Dynamic Proxy', 'Self-Invocation']
  },
  {
    id: 'dirty-checking',
    term: 'Dirty Checking (Kirli Alan Denetimi)',
    englishTerm: 'Hibernate Dirty Checking',
    category: 'JPA & Hibernate',
    definition: 'Hibernate Persistence Context\'in, bir Entity üzerinde yapılan değişiklikleri transaction commit anında otomatik olarak tespit edip SQL UPDATE sorgusunu kendiliğinden fırlatması mekanizmasıdır.',
    inSpringContext: '`@Transactional` metot içinde entity\'nin setter metodu çağrıldığında `repository.save()` yazmaya gerek kalmadan veritabanı güncellenir.',
    codeExample: '@Transactional\npublic void updateEmail(Long id, String email) {\n    User user = userRepository.findById(id).orElseThrow();\n    user.setEmail(email); // Hibernate commit anında UPDATE fırlatır!\n}',
    relatedKeywords: ['Persistence Context', 'First-Level Cache', '@Transactional', 'Hibernate']
  },
  {
    id: 'first-level-cache',
    term: 'First-Level Cache (Persistence Context)',
    englishTerm: 'First-Level Cache',
    category: 'JPA & Hibernate',
    definition: 'Mevcut Hibernate Session / EntityManager (Transaction) boyunca yaşayan, aynı ID\'li entity sorgularını veritabanına gitmeden bellekten getiren birinci seviye önbellektir.',
    inSpringContext: 'Aynı transaction içinde 5 kez `findById(1L)` çağırsanız bile veritabanına sadece 1 kez SELECT SQL\'i atılır.',
    codeExample: '// Sadece 1 SQL çalışır; ikincisi Persistence Context\'ten döner\nUser u1 = entityManager.find(User.class, 1L);\nUser u2 = entityManager.find(User.class, 1L);',
    relatedKeywords: ['EntityManager', 'Persistence Context', 'Second-Level Cache', 'Transaction']
  },
  {
    id: 'second-level-cache',
    term: 'Second-Level Cache (L2 Cache)',
    englishTerm: 'Second-Level Cache',
    category: 'JPA & Hibernate',
    definition: 'SessionFactory (tüm uygulama) düzeyinde paylaşılan, transaction sınırlarını aşan ve genellikle Redis veya Hazelcast/Ehcache ile yönetilen ikinci seviye önbellektir.',
    inSpringContext: 'Sık okunan ve nadir değişen lookup/referans tabloları için `@Cacheable` veya Hibernate L2 Cache yapılandırılır.',
    codeExample: '@Entity\n@Cacheable\n@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)\npublic class City { ... }',
    relatedKeywords: ['Redis', 'Hazelcast', '@Cacheable', 'Ehcache']
  },
  {
    id: 'n-plus-one',
    term: 'N+1 Query Problemi',
    englishTerm: 'N+1 Query Problem',
    category: 'JPA & Hibernate',
    definition: 'Ana tablo için atılan 1 sorgunun ardından, ilişkili LAZY koleksiyonlar her döngüde çağrıldığında N adet ek sorgu fırlatılması sonucu oluşan performans krizidir.',
    inSpringContext: 'Spring Data JPA\'da `JOIN FETCH` (JPQL) veya `@EntityGraph` kullanılarak tek sorguda veriler çekilerek çözülür.',
    codeExample: '// N+1 Çözümü\n@Query("SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items WHERE o.id = :id")\nOptional<Order> findByIdWithItems(@Param("id") Long id);',
    relatedKeywords: ['JOIN FETCH', '@EntityGraph', 'BatchSize', 'Lazy Loading']
  },
  {
    id: 'idempotency',
    term: 'Idempotency (Eşgüçlülük)',
    englishTerm: 'Idempotency',
    category: 'REST & Web',
    definition: 'Bir HTTP isteğinin arka arkaya 1 kez veya 100 kez çalıştırıldığında sunucuda aynı nihai durumu (state) üretmesi özelliğidir.',
    inSpringContext: '`GET`, `PUT`, `DELETE` metotları idempotent olmalıdır. `POST` ise her çağrıda yeni kayıt oluşturduğu için idempotent değildir.',
    codeExample: 'DELETE /api/v1/users/42 -> İlk çağrıda 204 No Content, sonraki çağrılarda durum değişmez (idempotent).',
    relatedKeywords: ['HTTP Methods', 'REST', 'PUT', 'DELETE', 'POST']
  },
  {
    id: 'rfc-7807',
    term: 'RFC 7807 (ProblemDetails)',
    englishTerm: 'Problem Details for HTTP APIs',
    category: 'REST & Web',
    definition: 'HTTP API hata yanıtlarını uluslararası standartta tek bir JSON şemasında (type, title, status, detail, instance) döndüren IETF spesifikasyonudur.',
    inSpringContext: 'Spring Boot 3.x yerleşik `ProblemDetail` sınıfını ve `@RestControllerAdvice` desteğini getirmiştir.',
    codeExample: '@ExceptionHandler(ResourceNotFoundException.class)\npublic ProblemDetail handleNotFound(ResourceNotFoundException ex) {\n    return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());\n}',
    relatedKeywords: ['@RestControllerAdvice', 'ProblemDetail', 'GlobalExceptionHandler', 'HTTP 404']
  },
  {
    id: 'circuit-breaker',
    term: 'Circuit Breaker (Devre Kesici)',
    englishTerm: 'Circuit Breaker Pattern',
    category: 'Mimari & Patterns',
    definition: 'Bir dış servise yapılan çağrılar sürekli hata verdiğinde veya zaman aşımına uğradığında, servisi geçici olarak devreden çıkarıp fallback yanıt dönerek sistemin kilitlenmesini engelleyen sigorta mekanizmasıdır.',
    inSpringContext: 'Spring Cloud ekosisteminde **Resilience4j** kütüphanesi `@CircuitBreaker(name="serviceName", fallbackMethod="fallback")` ile uygulanır.',
    codeExample: '@CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")\npublic PaymentResponse process(PaymentRequest req) {\n    return paymentClient.charge(req);\n}',
    relatedKeywords: ['Resilience4j', 'Fallback', 'Microservices', 'Spring Cloud']
  },
  {
    id: 'virtual-threads',
    term: 'Virtual Threads (Project Loom)',
    englishTerm: 'Java 21 Virtual Threads',
    category: 'Performans & DevOps',
    definition: 'İşletim sistemi thread\'lerine (OS Threads) birebir bağlanmayan, JVM tarafından yönetilen ultra hafif (Lightweight) iş parçacıklarıdır.',
    inSpringContext: 'Spring Boot 3.2+ ve Java 21 ile `spring.threads.virtual.enabled=true` yapılarak Tomcat\'in her HTTP isteğini bir Virtual Thread üzerinde bloklamadan milyarlarca eşzamanlı istekle işlemesi sağlanır.',
    codeExample: '# application.yml\nspring:\n  threads:\n    virtual:\n      enabled: true',
    relatedKeywords: ['Java 21', 'Project Loom', 'Tomcat', 'Non-blocking']
  },
  {
    id: 'stateless-auth',
    term: 'Stateless Authentication (Durumsuz Kimlik Doğrulama)',
    englishTerm: 'Stateless Authentication',
    category: 'Security',
    definition: 'Sunucunun kullanıcı oturum bilgilerini RAM veya Session\'da tutmadığı; her isteğin imzalanmış bir JWT token ile kendini doğruladığı güvenlik mimarisidir.',
    inSpringContext: 'Spring Security 6\'da `sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))` ile ayarlanır.',
    codeExample: 'http.sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS));',
    relatedKeywords: ['JWT', 'Spring Security 6', 'Bearer Token', 'SecurityFilterChain']
  }
];

export const getGlossaryData = (lang: string = 'tr'): GlossaryTerm[] => {
  if (lang === 'en') {
    return GLOSSARY_DATA.map(term => {
      const enMap: Record<string, Partial<GlossaryTerm>> = {
        'ioc': {
          definition: 'A design principle in which the control of object creation, lifecycle management, and dependency wiring is transferred from the application code to a framework container (Spring ApplicationContext).',
          inSpringContext: 'In Spring Boot, the IoC Container automatically detects `@Component`, `@Service`, `@Repository` annotations and instantiates managed beans.'
        },
        'di': {
          definition: 'A specialized pattern of Inversion of Control where dependencies are provided to an object (via constructor, setter, or field) rather than the object creating them internally.',
          inSpringContext: 'Constructor Injection is the strongly recommended approach in modern Spring Boot, ensuring immutability and testability.'
        },
        'aop': {
          definition: 'A programming paradigm that encapsulates cross-cutting concerns (logging, security, transaction management, metrics) without cluttering business logic.',
          inSpringContext: 'Annotations like `@Transactional`, `@Async`, and `@PreAuthorize` are powered under the hood by Spring AOP dynamic proxies.'
        },
        'proxy': {
          definition: 'A surrogate or wrapper object that intercepts method calls to target beans to apply cross-cutting behavior like transaction boundaries or caching.',
          inSpringContext: 'Spring Boot uses CGLIB class proxies by default. Direct internal method calls (self-invocation) bypass proxies and will not trigger `@Transactional`.'
        },
        'dirty-checking': {
          definition: 'Hibernate Persistence Context mechanism that automatically detects entity property mutations at commit time and issues appropriate SQL UPDATE statements.',
          inSpringContext: 'Inside `@Transactional` methods, calling `repository.save()` is redundant when modifying managed entities.'
        },
        'first-level-cache': {
          definition: 'A mandatory, transaction-scoped Hibernate Session cache that deduplicates database queries for the same entity identity within a single transaction.',
          inSpringContext: 'Guarantees repeatable reads and entity identity equality within a transaction boundary.'
        },
        'rfc-7807': {
          definition: 'An IETF standard defining a standardized JSON structure (Problem Details) for HTTP API error reporting.',
          inSpringContext: 'Native support in Spring Boot 3 via `ProblemDetail` and `ErrorResponseException` classes.'
        },
        'virtual-threads': {
          definition: 'Lightweight, JVM-managed user-mode threads introduced in Java 21 (Project Loom) enabling massive scalability for I/O bound workloads.',
          inSpringContext: 'Enabled globally in Spring Boot 3.2+ with a single configuration property: `spring.threads.virtual.enabled=true`.'
        }
      };

      const override = enMap[term.id];
      if (!override) return term;
      return {
        ...term,
        ...override
      };
    });
  }
  return GLOSSARY_DATA;
};
