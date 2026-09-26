import { QuizQuestion, Language } from '../types';

export const QUIZ_QUESTIONS_TR: QuizQuestion[] = [
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
      'Request kapsamıdır; sadece HTTP isteklerinde yaşar.',
      'Session kapsamıdır; kullanıcı oturumu kapanana kadar bellekte tutulur.'
    ],
    correctIndex: 1,
    springConcept: 'Bean Scopes & Thread Safety',
    explanation: 'Spring varsayılan olarak Singleton scope kullanır. Tüm thread\'ler aynı nesne örneğini paylaştığı için sınıf seviyesinde mutable durum (örneğin private String currentUserName;) tutulursa concurrency / race condition hataları meydana gelir.'
  },
  {
    id: 'q3-1',
    moduleId: 'module-3-data-jpa-hibernate',
    moduleTitle: 'Spring Data JPA & Hibernate',
    difficulty: 'İleri',
    question: 'Hibernate ve JPA\'da meşhur "N+1 Sorgu Problemi" tam olarak neden kaynaklanır ve kurumsal bir projede en etkili çözüm yöntemi nedir?',
    options: [
      'Veritabanı tablosunda birincil anahtar (Primary Key) tanımlanmadığında oluşur.',
      'OneToMany veya ManyToOne ilişkilerde ana kayıt çekildikten sonra ilişkili alt kayıtların (Lazy/Eager) her bir satır için ayrı SQL sorgusuyla çekilmesinden kaynaklanır; çözüm @EntityGraph veya JOIN FETCH kullanmaktır.',
      'Spring Boot\'ta @Transactional anotasyonu unutulduğunda meydana gelir.',
      'PostgreSQL veritabanı sürücüsü eski olduğunda oluşur.'
    ],
    correctIndex: 1,
    springConcept: 'N+1 Query Problem & JOIN FETCH',
    explanation: '100 adet sipariş çekildiğinde her siparişin müşterisi için 100 ayrı SQL çalışması 1+N=101 sorguya yol açar. `JOIN FETCH` veya `@EntityGraph(attributePaths = {"customer"})` tek bir SQL JOIN ile tüm veriyi tek seferde çeker.'
  },
  {
    id: 'q3-2',
    moduleId: 'module-3-data-jpa-hibernate',
    moduleTitle: 'Spring Data JPA & Hibernate',
    difficulty: 'Orta',
    question: 'JPA\'da @Transactional bir metot içinde veritabanından çekilen bir Entity\'nin bir alanı güncellendiğinde (ör: user.setActive(false);) neden açıkça userRepository.save(user); çağrısı yapmaya gerek YOKTUR?',
    options: [
      'Çünkü Hibernate nesneleri JSON olarak tarayıcıya kaydeder.',
      'Hibernate\'in "Dirty Checking" (Kirli Kontrol) mekanizması Persistence Context içindeki Managed entity değişikliklerini Transaction commit anında otomatik tespit edip UPDATE SQL fırlatır.',
      'save() metodu JPA 3 ile birlikte deprecated olmuştur.',
      'Çünkü Spring Boot veritabanını sürekli sıfırlar.'
    ],
    correctIndex: 1,
    springConcept: 'Persistence Context & Dirty Checking',
    explanation: 'Transaction içinde veritabanından okunan nesneler "Managed" durumdadır. Transaction tamamlanırken (commit) Hibernate nesnenin ilk snapshot\'ı ile son halini karşılaştırır ve değişen alanlar için otomatik UPDATE SQL sorgusu çalıştırır.'
  },
  {
    id: 'q4-1',
    moduleId: 'module-4-rest-apis',
    moduleTitle: 'REST API & Exception Handling',
    difficulty: 'Orta',
    question: 'Spring Boot 3 ile gelen RFC 7807 ProblemDetails spesifikasyonu kurumsal REST API\'lerde hangi sorunu çözer?',
    options: [
      'Veritabanı bağlantı havuzu hatalarını otomatik düzeltir.',
      'İstemcilere (frontend/mobil) dönülen HTTP hata yanıtlarını standartlaştırılmış bir JSON şeması (type, title, status, detail, instance) ile sunar.',
      'Tüm controller sınıflarını otomatik olarak HTTPS protokolüne taşır.',
      'REST API\'leri GraphQL\'e dönüştürür.'
    ],
    correctIndex: 1,
    springConcept: 'RFC 7807 ProblemDetails',
    explanation: 'RFC 7807 ProblemDetails standardı, tüm mikroservis ve API ekosisteminde hata yanıtlarının rastgele formatlar yerine dünya standardı olan tutarlı bir formatla dönmesini sağlar.'
  },
  {
    id: 'q5-1',
    moduleId: 'module-5-security-jwt',
    moduleTitle: 'Spring Security 6 & JWT',
    difficulty: 'İleri',
    question: 'Spring Security 6 ile birlikte güvenlik yapılandırmasında hangi büyük mimari değişiklik zorunlu hale gelmiştir?',
    options: [
      'WebSecurityConfigurerAdapter sınıfı tamamen kaldırılmış, bunun yerine @Bean SecurityFilterChain fonksiyonel yaklaşımı zorunlu kılınmıştır.',
      'Şifrelerin düz metin (plain text) olarak tutulması zorunlu hale gelmiştir.',
      'JWT kullanımı yasaklanmış, yalnızca Basic Auth kullanılabilir olmuştur.',
      'Spring Security artık XML dosyası olmadan çalışmaz.'
    ],
    correctIndex: 0,
    springConcept: 'Spring Security 6 SecurityFilterChain',
    explanation: 'Eski WebSecurityConfigurerAdapter sınıfından miras alma (inheritance) yöntemi kaldırılmış; yerine bağımsız `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` fonksiyonel DSL yaklaşımı getirilmiştir.'
  }
];

export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  {
    id: 'q1-1',
    moduleId: 'module-1-spring-boot-basics',
    moduleTitle: 'Spring Boot Basics & Architecture',
    difficulty: 'Beginner',
    question: 'Which of the following is NOT one of the 3 core annotations bundled within @SpringBootApplication?',
    options: [
      '@EnableAutoConfiguration',
      '@SpringBootConfiguration',
      '@ComponentScan',
      '@EnableWebSecurity'
    ],
    correctIndex: 3,
    springConcept: '@SpringBootApplication Components',
    explanation: '@SpringBootApplication is a meta-annotation composed of @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan. @EnableWebSecurity is a separate security configuration annotation.'
  },
  {
    id: 'q1-2',
    moduleId: 'module-1-spring-boot-basics',
    moduleTitle: 'Spring Boot Basics & Architecture',
    difficulty: 'Beginner',
    question: 'What is the major Java baseline and enterprise specification shift introduced in Spring Boot 3.x?',
    options: [
      'Java 8 became the minimum requirement and javax.* namespace was preserved.',
      'Java 17 became the baseline requirement and javax.* packages were migrated to jakarta.*.',
      'Embedded Tomcat support was completely removed.',
      'Maven support was deprecated in favor of mandatory Gradle.'
    ],
    correctIndex: 1,
    springConcept: 'Spring Boot 3 & Jakarta EE Standard',
    explanation: 'Spring Boot 3.0+ (built on Spring Framework 6) mandates Java 17 as baseline (with full Java 21 LTS support) and migrated enterprise packages (persistence, servlet, etc.) from `javax.*` to `jakarta.*`.'
  },
  {
    id: 'q2-1',
    moduleId: 'module-2-ioc-di-beans',
    moduleTitle: 'IoC, DI & Bean Lifecycle',
    difficulty: 'Beginner',
    question: 'What is the MOST IMPORTANT advantage of using Constructor Injection over Field Injection (@Autowired private MyService service;)?',
    options: [
      'Constructor Injection consumes less RAM memory.',
      'Enabling immutability with final fields, preventing NullPointerExceptions, and facilitating pure unit testing with mock objects.',
      'Constructor Injection enables faster Spring Boot compilation.',
      'Only Constructor Injection allows database connectivity.'
    ],
    correctIndex: 1,
    springConcept: 'Advantages of Constructor Injection',
    explanation: 'Constructor Injection guarantees that required dependencies are never null, enforces immutability via `final` modifiers, and allows writing pure Java unit tests without booting the heavy Spring container.'
  },
  {
    id: 'q2-2',
    moduleId: 'module-2-ioc-di-beans',
    moduleTitle: 'IoC, DI & Bean Lifecycle',
    difficulty: 'Intermediate',
    question: 'What is the default Spring Bean scope, and what is the primary concurrency consideration when designing such beans?',
    options: [
      'Prototype scope; a new object instance is created per request.',
      'Singleton scope; because a single instance is shared across threads, beans MUST be stateless.',
      'Request scope; beans only live during an HTTP request.',
      'Session scope; beans persist in memory until user session invalidation.'
    ],
    correctIndex: 1,
    springConcept: 'Bean Scopes & Thread Safety',
    explanation: 'Spring beans default to Singleton scope. Since multiple worker threads access the exact same instance concurrently, storing mutable state at the class level will cause race conditions and data corruption.'
  },
  {
    id: 'q3-1',
    moduleId: 'module-3-data-jpa-hibernate',
    moduleTitle: 'Spring Data JPA & Hibernate',
    difficulty: 'Advanced',
    question: 'What causes the notorious "N+1 Query Problem" in Hibernate/JPA, and what is the standard enterprise solution?',
    options: [
      'It occurs when a database table lacks a primary key.',
      'Fetching parent records followed by individual sub-queries for each associated child collection; resolved using JOIN FETCH or @EntityGraph.',
      'It happens whenever @Transactional annotation is omitted in Spring Boot.',
      'It is caused by an outdated PostgreSQL JDBC driver.'
    ],
    correctIndex: 1,
    springConcept: 'N+1 Query Problem & JOIN FETCH',
    explanation: 'Querying 100 orders results in 1 initial query + 100 sub-queries for each order\'s customer. Using `JOIN FETCH` or `@EntityGraph(attributePaths = {"customer"})` executes a single optimized SQL JOIN query.'
  },
  {
    id: 'q3-2',
    moduleId: 'module-3-data-jpa-hibernate',
    moduleTitle: 'Spring Data JPA & Hibernate',
    difficulty: 'Intermediate',
    question: 'Inside a @Transactional method, why is calling userRepository.save(user) NOT required after modifying an entity field (e.g. user.setActive(false))?',
    options: [
      'Because Hibernate saves objects as JSON in the browser.',
      'Hibernate\'s "Dirty Checking" mechanism automatically detects modifications to managed entities and flushes UPDATE SQL upon transaction commit.',
      'The save() method was deprecated in JPA 3.',
      'Because Spring Boot resets the database continuously.'
    ],
    correctIndex: 1,
    springConcept: 'Persistence Context & Dirty Checking',
    explanation: 'Entities loaded within an active transaction are "Managed" by the Persistence Context. On commit, Hibernate compares the entity against its loaded snapshot and automatically triggers an UPDATE statement for modified fields.'
  },
  {
    id: 'q4-1',
    moduleId: 'module-4-rest-apis',
    moduleTitle: 'REST API & Exception Handling',
    difficulty: 'Intermediate',
    question: 'What key problem does the RFC 7807 ProblemDetails specification solve in Spring Boot 3 enterprise REST APIs?',
    options: [
      'It automatically repairs database connection pool failures.',
      'It standardizes HTTP error payloads across clients using a structured JSON schema (type, title, status, detail, instance).',
      'It automatically forces all controllers to use HTTPS.',
      'It converts REST APIs into GraphQL schemas.'
    ],
    correctIndex: 1,
    springConcept: 'RFC 7807 ProblemDetails',
    explanation: 'RFC 7807 ProblemDetails standardizes error representations across microservices, eliminating inconsistent custom error formats.'
  },
  {
    id: 'q5-1',
    moduleId: 'module-5-security-jwt',
    moduleTitle: 'Spring Security 6 & JWT',
    difficulty: 'Advanced',
    question: 'What major architectural change became mandatory in Spring Security 6 configurations?',
    options: [
      'WebSecurityConfigurerAdapter was completely removed in favor of the component-based @Bean SecurityFilterChain approach.',
      'Storing passwords in plain text became mandatory.',
      'JWT authentication was prohibited, allowing only Basic Auth.',
      'Spring Security can no longer run without XML configuration.'
    ],
    correctIndex: 0,
    springConcept: 'Spring Security 6 SecurityFilterChain',
    explanation: 'Inheritance-based WebSecurityConfigurerAdapter was deprecated and deleted; configurations now rely on functional `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` DSLs.'
  }
];

export const getQuizData = (lang: Language = 'tr'): QuizQuestion[] => {
  return lang === 'en' ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS_TR;
};

export const QUIZ_QUESTIONS = QUIZ_QUESTIONS_TR;
