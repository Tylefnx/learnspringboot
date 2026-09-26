import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1-1',
    moduleId: 'module-1-spring-boot-basics',
    moduleTitle: 'Spring Boot Giriş & Mimari',
    difficulty: 'Başlangıç',
    question: 'Aşağıdakilerden hangisi @SpringBootApplication anotasyonunun kapsadığı 3 temel anotasyondan biri DEĞİLDİR?',
    options: [
      '@EnableAutoConfiguration',
      '@SpringBootConfiguration',
      '@ComponentScan',
      '@EnableWebSecurity'
    ],
    correctIndex: 3,
    springConcept: '@SpringBootApplication Bileşenleri',
    explanation: '@SpringBootApplication anotasyonu; @SpringBootConfiguration, @EnableAutoConfiguration ve @ComponentScan anotasyonlarının birleşimidir. @EnableWebSecurity ise Spring Security yapılandırmalarında manuel veya ayrı olarak eklenen güvenlik anotasyonudur.'
  },
  {
    id: 'q1-2',
    moduleId: 'module-1-spring-boot-basics',
    moduleTitle: 'Spring Boot Giriş & Mimari',
    difficulty: 'Başlangıç',
    question: 'Spring Boot 3.x sürümü ile birlikte Java ve Enterprise spesifikasyonu açısından hangi önemli değişiklik gerçekleşmiştir?',
    options: [
      'Java 8 minimum gereksinim haline gelmiş ve javax.* paketleri korunmuştur.',
      'Java 17 minimum gereksinim olmuş ve javax.* paketleri jakarta.* paketlerine taşınmıştır.',
      'Tomcat desteği tamamen kaldırılmıştır.',
      'Maven desteği bitirilip yalnızca Gradle zorunlu kılınmıştır.'
    ],
    correctIndex: 1,
    springConcept: 'Spring Boot 3 & Jakarta EE Standardı',
    explanation: 'Spring Boot 3.0+ (ve Spring Framework 6) ile minimum Java sürümü 17 (ve 21 desteği) olmuş; EE 9/10 geçişiyle `javax.persistence`, `javax.servlet` vb. paketler `jakarta.*` olarak güncellenmiştir.'
  },
  {
    id: 'q2-1',
    moduleId: 'module-2-ioc-di-beans',
    moduleTitle: 'IoC, DI & Bean Yaşam Döngüsü',
    difficulty: 'Başlangıç',
    question: 'Spring Boot projelerinde Field Injection (@Autowired private MyService service;) yerine Constructor Injection kullanılmasının EN ÖNEMLİ avantajı nedir?',
    options: [
      'Constructor Injection daha az RAM tüketir.',
      'Bağımlılıkların final yapılarak immutability sağlanması, NPE riskinin önlenmesi ve mock nesnelerle kolay unit test yazılabilmesi.',
      'Constructor Injection kullanıldığında Spring Boot daha hızlı derlenir.',
      'Sadece Constructor Injection ile veritabanına bağlanılabilir.'
    ],
    correctIndex: 1,
    springConcept: 'Constructor Injection Avantajları',
    explanation: 'Constructor Injection; nesnelerin bağımlılıkları eksik başlatılmasını engeller, bağımlılıkların `final` olmasını sağlar, Spring Container\'a ihtiyaç duymadan saf Java birim testi yazmayı (Mockito ile) çok kolaylaştırır.'
  },
  {
    id: 'q2-2',
    moduleId: 'module-2-ioc-di-beans',
    moduleTitle: 'IoC, DI & Bean Yaşam Döngüsü',
    difficulty: 'Orta',
    question: 'Spring\'de varsayılan Bean kapsamı (Scope) nedir ve bu kapsamda çalışan bir Bean tasarlanırken nelere dikkat edilmelidir?',
    options: [
      'Prototype kapsamıdır; her istekte yeni nesne üretilir.',
      'Singleton kapsamıdır; tek bir instance paylaşıldığı için nesne "Stateless" (durumsuz) olmalı, kullanıcıya özel state tutulmamalıdır.',
      'Request kapsamıdır; sadece web isteklerinde çalışır.',
      'Session kapsamıdır; tarayıcı kapandığında yok edilir.'
    ],
    correctIndex: 1,
    springConcept: 'Singleton Scope & Thread-Safety',
    explanation: 'Spring Context\'teki varsayılan kapsam Singleton\'dur. Tüm thread\'ler aynı nesneyi paylaşır. Bu nedenle Singleton bean\'ler içinde kullanıcıya özel durum (state) tutulmamalı, stateless tasarlanmalıdır.'
  },
  {
    id: 'q3-1',
    moduleId: 'module-3-spring-mvc-rest',
    moduleTitle: 'Spring MVC & REST API Tasarımı',
    difficulty: 'Orta',
    codeSnippet: `@PostMapping("/users")
public ResponseEntity<UserResponse> createUser(@RequestBody CreateUserRequest req) { ... }`,
    question: 'Yukarıdaki Controller metodunda `@Valid` anotasyonu unutulursa ne gibi bir sorun yaşanır?',
    options: [
      'Kod derlenmez (Compile Error verir).',
      'CreateUserRequest sınıfındaki @NotBlank, @Size gibi Jakarta validation kuralları devreye girmez ve geçersiz veriler servise geçer.',
      'Spring Boot otomatik olarak 500 Internal Server Error döner.',
      'Veriler otomatik olarak veritabanından silinir.'
    ],
    correctIndex: 1,
    springConcept: 'Jakarta Validation & @Valid Tetikleyicisi',
    explanation: 'DTO nesneleri üzerinde @NotNull, @Size gibi validasyon anotasyonları olsa bile, Controller parametresi önünde `@Valid` veya `@Validated` yazılmazsa Spring bu kuralları çalıştırmaz.'
  },
  {
    id: 'q3-2',
    moduleId: 'module-3-spring-mvc-rest',
    moduleTitle: 'Spring MVC & REST API Tasarımı',
    difficulty: 'Orta',
    question: 'REST API standartlarına göre yeni bir kaynak başarıyla oluşturulduğunda (POST) dönülmesi gereken en doğru HTTP Status Kodu ve yanıt başlığı hangisidir?',
    options: [
      '200 OK + Content-Type',
      '201 Created + Location (oluşan kaynağın URL\'i)',
      '204 No Content',
      '202 Accepted'
    ],
    correctIndex: 1,
    springConcept: 'RESTful API Standartları (201 Created)',
    explanation: 'Yeni bir varlık yaratıldığında HTTP 201 Created durumu ve `Location: /api/v1/resources/{id}` başlığı dönmek REST spesifikasyonunun en iyi pratiğidir.'
  },
  {
    id: 'q4-1',
    moduleId: 'module-4-spring-data-jpa',
    moduleTitle: 'Spring Data JPA & Hibernate',
    difficulty: 'Orta',
    question: 'Hibernate\'de N+1 sorgu problemi nedir ve bunu engellemek için hangi yöntem kullanılır?',
    options: [
      'Veritabanında N adet tablonun silinmesidir; CASCADE ile engellenir.',
      'Ana tablo için 1 sorgu, ardından her ilişkili kayıt için N adet ek sorgu atılmasıdır; JOIN FETCH veya @EntityGraph ile tek sorguda çekilerek çözülür.',
      'Veritabanı bağlantı havuzunun dolmasıdır; HikariCP boyutu artırılarak çözülür.',
      'Primary key değerinin 1 artması sorunudur.'
    ],
    correctIndex: 1,
    springConcept: 'N+1 Problemi ve JOIN FETCH Çözümü',
    explanation: 'N+1 problemi, ilişkili LAZY koleksiyonlar döngüde çağrıldığında ortaya çıkan ve 1 sorgu yerine N+1 adet sorgu atılmasına yol açan performans krizidir. Çözüm JPQL `JOIN FETCH` veya `@EntityGraph` kullanmaktır.'
  },
  {
    id: 'q4-2',
    moduleId: 'module-4-spring-data-jpa',
    moduleTitle: 'Spring Data JPA & Hibernate',
    difficulty: 'İleri',
    question: 'JPA Entity sınıflarında Lombok `@Data` veya `@ToString` kullanılmasının YARATACAĞI TEHLİKE nedir?',
    options: [
      'Entity sınıfları JSON formatına çevrilemez.',
      'Çift yönlü ilişkilerde (Bidirectional relationships) `toString()` veya `equals()/hashCode()` metodları sonsuz döngüye girip StackOverflowError fırlatır.',
      'Veritabanı tabloları otomatik olarak silinir.',
      'H2 veritabanında çalışırken hata vermez fakat PostgreSQL\'de hata verir.'
    ],
    correctIndex: 1,
    springConcept: 'JPA Entity & Lombok Tuzakları',
    explanation: 'Lombok @Data, tüm alanları içeren toString(), equals() ve hashCode() üretir. Çift yönlü ilişkide Parent Child\'ı, Child Parent\'ı çağırdığı için sonsuz döngü ve `StackOverflowError` meydana gelir.'
  },
  {
    id: 'q5-1',
    moduleId: 'module-5-spring-security-jwt',
    moduleTitle: 'Spring Security 6 & JWT',
    difficulty: 'İleri',
    question: 'Spring Security 6 ile birlikte WebSecurityConfigurerAdapter sınıfının yerini hangi yapı almıştır?',
    options: [
      'GlobalSecurityManager',
      'SecurityFilterChain bean tanımı ve Lambda DSL',
      'WebSecurityProvider arayüzü',
      'SecurityConfigurationXML dosyası'
    ],
    correctIndex: 1,
    springConcept: 'SecurityFilterChain Mimarisi',
    explanation: 'Spring Security 5.7+ ve Spring Security 6 ile `WebSecurityConfigurerAdapter` tamamen kaldırılmış, yerine `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` yaklaşımı getirilmiştir.'
  },
  {
    id: 'q5-2',
    moduleId: 'module-5-spring-security-jwt',
    moduleTitle: 'Spring Security 6 & JWT',
    difficulty: 'İleri',
    question: 'Stateless bir JWT kimlik doğrulama mimarisinde SessionCreationPolicy ne olarak ayarlanmalıdır?',
    options: [
      'SessionCreationPolicy.ALWAYS',
      'SessionCreationPolicy.STATELESS',
      'SessionCreationPolicy.IF_REQUIRED',
      'SessionCreationPolicy.NEVER'
    ],
    correctIndex: 1,
    springConcept: 'Stateless Security Yapılandırması',
    explanation: 'JWT tabanlı REST API\'lerde sunucuda HttpSession tutulmaz; her istek kendi token\'ı ile doğrulanır. Bu yüzden `SessionCreationPolicy.STATELESS` seçilir.'
  },
  {
    id: 'q6-1',
    moduleId: 'module-6-config-profiles-actuator',
    moduleTitle: 'Konfigürasyon & Actuator',
    difficulty: 'Orta',
    question: 'Spring Boot Actuator\'ın üretim ortamında canlılık ve hazırlık durumunu Kubernetes gibi orkestrasyon araçlarına bildirmesini sağlayan problar hangileridir?',
    options: [
      'health.ping ve health.disk',
      'livenessState ve readinessState probları (/actuator/health/liveness & /readiness)',
      'cpuUsage ve ramUsage probları',
      'database.alive probu'
    ],
    correctIndex: 1,
    springConcept: 'Kubernetes Liveness & Readiness Probları',
    explanation: 'Spring Boot Actuator, Kubernetes için `Liveness` (uygulama yaşıyor mu, restart gerektirir mi?) ve `Readiness` (uygulama trafik almaya hazır mı?) problarını hazır sunar.'
  },
  {
    id: 'q7-1',
    moduleId: 'module-7-async-scheduling-events',
    moduleTitle: 'Asenkron İşlemler & Events',
    difficulty: 'Orta',
    question: 'Bir sınıftaki bir metodun `@Async` olarak gerçekten farklı bir thread üzerinde çalışabilmesi için aşağıdaki koşullardan hangisi SAĞLANMALIDIR?',
    options: [
      'Metot mutlaka `private` olmalıdır.',
      'Konfigürasyonda `@EnableAsync` olmalı, metot `public` olmalı ve çağrı aynı sınıf içinden doğrudan (self-invocation) yapılmamalıdır.',
      'Sınıfın implements Runnable yapması zorunludur.',
      'Sadece void dönen metotlar asenkron olabilir.'
    ],
    correctIndex: 1,
    springConcept: 'Spring AOP Proxy ve @Async Kuralları',
    explanation: 'Spring @Async anotasyonunu Spring AOP dinamik proxy mekanizması ile yönetir. Bu yüzden metot public olmalı ve Spring IoC container dışından/bean üzerinden çağrılmalıdır.'
  },
  {
    id: 'q9-1',
    moduleId: 'module-9-testing-strategies',
    moduleTitle: 'Test Stratejileri',
    difficulty: 'Orta',
    question: 'Spring Boot\'ta sadece Controller katmanını hafif ve hızlı bir şekilde test etmek için hangi test anotasyonu kullanılır?',
    options: [
      '@SpringBootTest',
      '@WebMvcTest',
      '@DataJpaTest',
      '@RestClientTest'
    ],
    correctIndex: 1,
    springConcept: 'Slice Testing (@WebMvcTest)',
    explanation: '@WebMvcTest, veritabanı veya servis katmanını yüklemeden sadece Web katmanını (Controller, Filter, Converter) yükleyerek MockMvc ile çok hızlı test imkanı tanır.'
  }
];
