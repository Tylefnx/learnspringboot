import { LESSONS_DATA_EN } from './lessonsDataEn';
import { LessonModule } from '../types';

export const LESSONS_DATA: LessonModule[] = [
  {
    id: 'module-1-spring-boot-basics',
    number: 1,
    title: 'Spring Boot Giriş & Mimari Temeller',
    subtitle: 'Spring Framework farkı, Auto-Configuration mekanizması, Starter ekosistemi ve Classpath analizi',
    icon: 'Layers',
    category: 'Temel Mimari',
    difficulty: 'Başlangıç',
    durationMinutes: 35,
    overview: 'Spring Boot, kurumsal Java uygulamaları geliştirmeyi basitleştiren ve standartlaştıran en popüler framework\'tür. Bu bölümde geleneksel Spring Framework ile farkları, "Convention over Configuration" felsefesini, Auto-Configuration\'ın arka planda nasıl çalıştığını ve Jakarta EE 10 / Java 21 geçişini en ince ayrıntısına kadar inceleyeceğiz.',
    sections: [
      {
        id: 'spring-vs-spring-boot',
        title: '1. Geleneksel Spring vs Spring Boot',
        content: `Geleneksel Spring Framework (Spring 2.x - 4.x), IoC (Inversion of Control) ve AOP (Aspect-Oriented Programming) alanında devrim yapmış olsa da, production-ready bir uygulama ayağa kaldırmak için onlarca karmaşık XML dosyası veya \`@Configuration\` sınıfları yazmayı gerektiriyordu (Boilerplate Configuration Hell).

Ayrıca harici bir uygulama sunucusu (Standalone Tomcat, WebLogic, WildFly) kurmak, \`.war\` paketi oluşturmak ve dağıtım süreçlerini yönetmek geliştirici verimliliğini ciddi ölçüde düşürüyordu.

### Spring Boot'un Çözüm Getirdiği 4 Temel Problem:
1. **Karmaşık Bağımlılık Yönetimi**: Birbiriyle uyumsuz versiyonlar (Jar Hell) yerine **BOM (Bill of Materials)** ve \`spring-boot-starter-*\` paketleri.
2. **Boilerplate Konfigürasyon**: Elle yüzlerce satır Bean tanımlamak yerine **Akıllı Auto-Configuration**.
3. **Dağıtım Zahmeti**: Harici sunucu yerine tek komutla (\`java -jar\`) çalışan **Gömülü (Embedded) Web Sunucusu** (Tomcat, Jetty, Undertow).
4. **Gözlemlenebilirlik Eksikliği**: Sistem sağlık kontrolü ve metrikler için yerleşik **Spring Boot Actuator**.`,
        codeSnippets: [
          {
            title: 'Spring Boot 3.3+ pom.xml Standart Yapılandırması',
            language: 'xml',
            filename: 'pom.xml',
            description: 'spring-boot-starter-parent sayesinde versiyonlar tek merkezden güvenle yönetilir.',
            code: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Spring Boot Parent BOM: 200+ kütüphanenin uyumlu versiyonlarını sağlar -->
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
        <!-- REST API, MVC ve Gömülü Tomcat (Port 8080) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Üretim ortamı sağlık izleme ve metrikleri -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <!-- JUnit 5, Mockito ve AssertJ test kütüphaneleri -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Çalıştırılabilir (Executable / Fat JAR) oluşturan Maven Plugini -->
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
          'Spring Boot 3.0+ ile birlikte minimum Java sürümü Java 17 olmuştur. Java 21 LTS, Virtual Threads desteği için şiddetle tavsiye edilir.',
          'Jakarta EE 10 standartlarına geçildiğinden dolayı `javax.servlet` ve `javax.persistence` gibi paketler `jakarta.servlet` ve `jakarta.persistence` olarak değiştirilmiştir.'
        ]
      },
      {
        id: 'auto-configuration-internals',
        title: '2. Auto-Configuration Mekanizması Nasıl Çalışır?',
        content: `Spring Boot uygulamasını başlatan \`@SpringBootApplication\` anotasyonu aslında şu 3 anotasyonun birleşimidir:
\`\`\`
@SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan
\`\`\`

### Auto-Configuration Yüklenme Süreci:
1. Spring Boot başlatıldığında classpath altındaki \`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports\` dosyalarını tarar.
2. Bu dosyada kayıtlı 150+ konfigürasyon sınıfı (**Auto-Configuration Classes**) sırayla değerlendirilir.
3. Her konfigürasyon sınıfı üzerinde **Koşullu Anotasyonlar (@Conditional...)** bulunur.

### En Çok Kullanılan Koşullu Anotasyonlar (Conditional Annotations):
| Anotasyon | Çalışma Kuralı |
|---|---|
| \`@ConditionalOnClass(DataSource.class)\` | Classpath'te DataSource sınıfı varsa devreye girer |
| \`@ConditionalOnMissingBean(ObjectMapper.class)\` | Geliştirici kendi ObjectMapper bean'ini tanımlamadıysa varsayılanı üretir |
| \`@ConditionalOnProperty(name="feature.x", havingValue="true")\` | application.yml dosyasında ilgili ayar "true" ise çalışır |
| \`@ConditionalOnWebApplication\` | Uygulama bir web uygulaması olarak ayağa kalkıyorsa devreye girer |`,
        codeSnippets: [
          {
            title: 'Örnek Bir Auto-Configuration Sınıfı Anatomisi',
            language: 'java',
            filename: 'JacksonAutoConfiguration.java (Basitleştirilmiş)',
            description: 'Spring Boot\'un Jackson ObjectMapper\'ı otomatik olarak nasıl oluşturduğunun gerçek mantığı.',
            code: `package org.springframework.boot.autoconfigure.jackson;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(ObjectMapper.class) // Classpath'te Jackson kütüphanesi var mı?
public class JacksonAutoConfiguration {

    @Bean
    @Primary
    @ConditionalOnMissingBean // Eğer siz kendiniz @Bean ObjectMapper tanımlamadıysanız bu çalışır!
    public ObjectMapper jacksonObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        // Varsayılan ISO-8601 tarih formatları ve JavaTimeModule ayarlanır
        return mapper;
    }
}`
          }
        ],
        tips: [
          'Hangi bean\'lerin neden ayağa kalktığını veya neden elendiğini görmek için `application.yml` dosyasına `debug: true` ekleyin. Konsolda "CONDITIONS EVALUATION REPORT" çıktısı listelenecektir.'
        ]
      }
    ],
    bestPractices: [
      'Ana Application sınıfını projenin en kök paketine koyun (örn: `com.company.project.Application`). Bu sayede `@ComponentScan` altındaki tüm `@Service`, `@Repository`, `@Controller` sınıflarını otomatik bulur.',
      'Kendi özel Bean\'lerinizi oluştururken `@ConditionalOnMissingBean` kullanarak esnek mimariler tasarlayın.',
      'Gereksiz starter bağımlılıkları eklemekten kaçının; her starter classpath\'e ek kütüphane ekler ve başlangıç süresini uzatabilir.'
    ],
    commonPitfalls: [
      'Application sınıfını bir alt pakete yerleştirip üst veya yan paketlerdeki Bean\'lerin Spring tarafından bulunamaması (NoSuchBeanDefinitionException).',
      'Spring Boot 3.x projelerinde eski `javax.*` paketlerini import etmeye çalışarak derleme hatası almak.'
    ],
    keyTakeaways: [
      'Spring Boot = Spring Framework + Gömülü Sunucu + Auto-Configuration + Starters.',
      'Convention over Configuration: Ayarları sadece varsayılanı değiştirmek istediğinizde yaparsınız.',
      'Java 21 ve Jakarta EE 10 güncel kurumsal standardıdır.'
    ]
  },
  {
    id: 'module-2-ioc-di-beans',
    number: 2,
    title: 'IoC, Dependency Injection & Bean Yaşam Döngüsü',
    subtitle: 'Inversion of Control, Constructor Injection standardı, Bean Kapsamları (Scopes) ve AOP Proxy mekanizması',
    icon: 'Cpu',
    category: 'Çekirdek Kavramlar',
    difficulty: 'Başlangıç',
    durationMinutes: 40,
    overview: 'Spring\'in kalbi olan IoC Container (ApplicationContext), nesnelerin yaşam döngüsünü ve bağımlılıklarını yönetir. Bu bölümde tight coupling probleminden kurtulmayı, neden Field Injection\'ın terk edildiğini, Constructor Injection\'ın neden altın kural olduğunu ve Bean yaşam döngüsünün aşamalarını öğreneceksiniz.',
    sections: [
      {
        id: 'tight-coupling-vs-di',
        title: '1. Sıkı Bağımlılık (Tight Coupling) vs Dependency Injection',
        content: `Geleneksel nesne yönelimli programlamada bir sınıf, ihtiyaç duyduğu nesneleri \`new\` anahtar kelimesi ile üretir:
\`\`\`java
public class OrderService {
    private EmailNotificationService notificationService = new EmailNotificationService();
}
\`\`\`
Bu tasarımda \`OrderService\` doğrudan \`EmailNotificationService\` sınıfının somut implementasyonuna bağımlıdır. SMS veya Push bildirimine geçmek istediğinizde veya birim test yazarken \`notificationService\`'i mocklamak imkansız hale gelir.

### Inversion of Control (IoC) ve Dependency Injection (DI):
- **Inversion of Control (Kontrolün Tersine Çevrilmesi)**: Nesne oluşturma, yapılandırma ve yaşam döngüsü sorumluluğunun geliştiriciden alınıp Spring IoC Container'a (\`ApplicationContext\`) verilmesidir.
- **Dependency Injection (Bağımlılık Enjeksiyonu)**: Bir nesnenin bağımlılıklarının dışarıdan (container tarafından) sağlanmasıdır.`,
        codeSnippets: [
          {
            title: 'Constructor Injection ile Temiz ve Güvenli Tasarım',
            language: 'java',
            filename: 'OrderService.java',
            description: 'Lombok @RequiredArgsConstructor ile veya açık constructor ile immutable bağımlılık enjeksiyonu.',
            code: `package com.example.mastery.service;

import com.example.mastery.repository.OrderRepository;
import com.example.mastery.service.notification.NotificationService;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    // Bağımlılıklar final olarak tanımlanır (Thread-safe & Immutable)
    private final OrderRepository orderRepository;
    private final NotificationService notificationService;

    // Spring 4.3+ ile sınıfta tek constructor varsa @Autowired yazmaya gerek yoktur!
    public OrderService(OrderRepository orderRepository, NotificationService notificationService) {
        this.orderRepository = orderRepository;
        this.notificationService = notificationService;
    }

    public void processOrder(Long orderId) {
        // İş mantığı işletilir...
    }
}`
          }
        ]
      },
      {
        id: 'why-field-injection-is-evil',
        title: '2. Neden Field Injection (@Autowired private ...) Kullanılmamalıdır?',
        content: `\`@Autowired private UserRepository repo;\` (Field Injection) ilk bakışta pratik görünse de kurumsal projelerde yasaklanmış bir anti-pattern'dır.

### Field Injection'ın 4 Büyük Tehlikesi:
1. **Birim Testleri (Unit Testing) İmkansızlaştırır**: Spring Context olmadan saf Java ile (\`new OrderService()\`) nesne oluşturduğunuzda field'lar \`null\` kalır; mecburen yavaş çalışan Spring runner'lar veya kirli Java Reflection kullanmak zorunda kalırsınız.
2. **Immutability (Değişmezlik) İhlali**: Field'lar \`final\` yapılamaz. Nesne oluştuktan sonra referansları değiştirilebilir.
3. **Gizli Bağımlılıklar (Hidden Dependencies)**: Bir sınıfa 15 tane field injection yapıldığında "Single Responsibility" ilkesinin çiğnendiği constructor'daki gibi göze çarpmaz.
4. **Dairesel Bağımlılıkları (Circular Dependencies) Maskeler**: Field injection çalışma anına kadar dairesel bağımlılık hatalarını gizler.`,
        notes: [
          'Constructor Injection kullandığınızda eksik bağımlılıkla nesne oluşturulması derleme anında (Compile Time) engellenir ve NullPointerException riski sıfıra iner.'
        ]
      },
      {
        id: 'bean-scopes-and-lifecycle',
        title: '3. Bean Kapsamları (Scopes) ve Yaşam Döngüsü',
        content: `### Spring Bean Kapsamları:
1. **Singleton (Varsayılan)**: ApplicationContext içinde tek bir instance bulunur. Tüm istekler bu instance'ı paylaşır. (Stateless olmalıdır!).
2. **Prototype**: Her enjeksiyonda veya \`getBean()\` çağrısında yepyeni bir instance üretilir.
3. **Request (Web)**: Her HTTP isteği için bir nesne üretilir ve istek bittiğinde yok edilir.
4. **Session (Web)**: Kullanıcının HTTP Session süresi boyunca yaşar.

### Bean Yaşam Döngüsü (Lifecycle Hook'lar):
\`\`\`
[Instantiation] -> [Populate Properties] -> [BeanNameAware / BeanFactoryAware]
       -> [BeanPostProcessor: postProcessBeforeInitialization]
       -> [@PostConstruct Metodu]
       -> [InitializingBean: afterPropertiesSet]
       -> [Custom init-method]
       -> [BeanPostProcessor: postProcessAfterInitialization] (AOP Proxy burada üretilir!)
       -> [BEAN KULLANIMA HAZIR]
       -> [@PreDestroy Metodu] -> [DisposableBean: destroy]
\`\`\``,
        codeSnippets: [
          {
            title: '@PostConstruct ve @PreDestroy Kullanımı',
            language: 'java',
            filename: 'DatabaseWarmupService.java',
            description: 'Bean oluştuğunda önbelleği ısıtma ve kapanırken kaynakları serbest bırakma.',
            code: `package com.example.mastery.service;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class DatabaseWarmupService {

    private static final Logger log = LoggerFactory.getLogger(DatabaseWarmupService.class);

    @PostConstruct
    public void onInit() {
        log.info(">> Spring Bean hazırlandı. Kritik veritabanı önbellekleri ısıtılıyor...");
    }

    @PreDestroy
    public void onDestroy() {
        log.info(">> Uygulama sonlandırılıyor. Açık socket ve dosya kilitleri temizleniyor...");
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Tüm bağımlılıkları Constructor Injection ile ve `final` olarak tanımlayın.',
      'Spring Bean\'lerini Stateless (durumsuz) tasarlayın; Singleton bir servise kullanıcıya özel değişkenler koymayın.',
      'Birden fazla implementasyon olan durumlarda `@Qualifier("specificBeanName")` veya `@Primary` kullanın.'
    ],
    commonPitfalls: [
      'Aynı sınıf içindeki `@Async` veya `@Transactional` metotları çağırmak (Self-invocation): Spring dinamik proxy mekanizması aynı sınıf içi çağrılarda devreye girmez!',
      'Singleton bir bean içine Prototype bir bean inject edip, her metot çağrısında Prototype nesnenin yeniden oluşacağını varsaymak.'
    ],
    keyTakeaways: [
      'IoC Container nesneleri oluşturur, birbirine bağlar ve yönetir.',
      'Constructor Injection kurumsal Java\'da tek kabul gören standarttır.',
      'AOP Proxy nesneleri Bean yaşam döngüsünün sonunda üretilir.'
    ]
  },
  {
    id: 'module-3-spring-mvc-rest',
    number: 3,
    title: 'Spring MVC & Modern REST API Tasarımı',
    subtitle: 'HTTP Metotları, DTO Pattern, Jakarta Validation, @RestControllerAdvice ve RFC 7807',
    icon: 'Globe',
    category: 'Web & API',
    difficulty: 'Orta',
    durationMinutes: 45,
    overview: 'Kurumsal seviyede, yüksek performanslı ve güvenli RESTful API\'ler tasarlayın. DTO pattern ile veri soyutlama, Jakarta Bean Validation kuralları, RFC 7807 standartlarına uygun merkezi hata yönetimi ve Content Negotiation.',
    sections: [
      {
        id: 'rest-fundamentals',
        title: '1. RESTful API Prensipleri & HTTP Durum Kodları',
        content: `REST (Representational State Transfer), istemci ile sunucu arasında durumsuz (stateless) iletişim kuran standart bir mimari stildir.

### Doğru HTTP Metotları ve Anlamları:
- **GET /api/v1/customers**: Müşterileri listele (\`200 OK\`)
- **GET /api/v1/customers/{id}**: Tekil müşteri getir (\`200 OK\` veya \`404 Not Found\`)
- **POST /api/v1/customers**: Yeni müşteri oluştur (\`201 Created\` + \`Location\` Header)
- **PUT /api/v1/customers/{id}**: Müşteriyi bütünüyle güncelle (\`200 OK\` veya \`204 No Content\`)
- **PATCH /api/v1/customers/{id}**: Müşterinin belirli alanlarını kısmi güncelle (\`200 OK\`)
- **DELETE /api/v1/customers/{id}**: Müşteriyi sil (\`204 No Content\`)`,
        codeSnippets: [
          {
            title: 'Modern REST Controller Mimarisi',
            language: 'java',
            filename: 'CustomerController.java',
            description: 'Pageable, @Valid, ResponseEntity ve Location header ile tam uyumlu controller.',
            code: `package com.example.mastery.controller;

import com.example.mastery.dto.CreateCustomerRequest;
import com.example.mastery.dto.CustomerResponse;
import com.example.mastery.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<Page<CustomerResponse>> getCustomers(
            @PageableDefault(size = 20, sort = "createdAt") Pageable pageable) {
        return ResponseEntity.ok(customerService.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable Long id) {
        return ResponseEntity.ok(customerService.findById(id));
    }

    @PostMapping
    public ResponseEntity<CustomerResponse> createCustomer(@Valid @RequestBody CreateCustomerRequest request) {
        CustomerResponse created = customerService.create(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.id())
                .toUri();
        return ResponseEntity.created(location).body(created);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`
          }
        ]
      },
      {
        id: 'dto-and-validation-deep',
        title: '2. DTO Pattern & Jakarta Bean Validation (@Valid)',
        content: `JPA Entity sınıflarını (Database Entities) doğrudan Controller'a parametre vermek veya dışarı JSON olarak döndürmek **Anti-Pattern**'dir.

### Neden DTO Kullanılmalıdır?
1. **Güvenlik (Over-Posting Attack)**: Kötü niyetli kullanıcı JSON içinde \`isAdmin=true\` veya \`balance=99999\` göndererek veritabanını manipüle edebilir.
2. **Serileştirme Sorunları**: Hibernate Lazy ilişkileri döngüye girip (\`JsonBackReference\` yoksa) \`StackOverflowError\` fırlatır.
3. **Şema Ayrımı**: Veritabanı sütun isimleri API kontratını bozmadan değiştirilebilir.`,
        codeSnippets: [
          {
            title: 'Java 21 Record ile Tip Güvenli Validasyonlu DTO',
            language: 'java',
            filename: 'CreateCustomerRequest.java',
            description: 'Jakarta Bean Validation anotasyonları ile kapsamlı girdi denetimi.',
            code: `package com.example.mastery.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public record CreateCustomerRequest(
    @NotBlank(message = "İsim alanı boş bırakılamaz")
    @Size(min = 2, max = 50, message = "İsim 2 ile 50 karakter arasında olmalıdır")
    String firstName,

    @NotBlank(message = "Soyisim alanı zorunludur")
    String lastName,

    @NotBlank(message = "E-posta adresi zorunludur")
    @Email(message = "Geçerli bir e-posta formatı giriniz")
    String email,

    @NotNull(message = "Kredi limiti belirtilmelidir")
    @PositiveOrZero(message = "Kredi limiti negatif olamaz")
    BigDecimal creditLimit
) {}`
          }
        ]
      },
      {
        id: 'centralized-exception-handling',
        title: '3. Merkezi Hata Yönetimi & RFC 7807 ProblemDetails',
        content: `Spring Boot 3, HTTP API hata yanıtları için uluslararası IETF standardı olan **RFC 7807 (Problem Details for HTTP APIs)** yapısını yerleşik olarak destekler. 

\`@RestControllerAdvice\` sınıfı, tüm controller'lardan fırlatılan hataları yakalar ve standartlaştırılmış JSON formatına dönüştürür.`,
        codeSnippets: [
          {
            title: 'GlobalExceptionHandler & ProblemDetail Standardı',
            language: 'java',
            filename: 'GlobalExceptionHandler.java',
            description: 'Tüm sistem hatalarını RFC 7807 uyumlu JSON olarak döndüren merkezi sınıf.',
            code: `package com.example.mastery.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.net.URI;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Kayıt Bulunamadı");
        problem.setType(URI.create("https://api.example.com/errors/not-found"));
        problem.setProperty("timestamp", Instant.now());
        return problem;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidationErrors(MethodArgumentNotValidException ex) {
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, "Girdi doğrulama başarısız");
        problem.setTitle("Geçersiz İstek Verisi");
        
        Map<String, String> invalidFields = new HashMap<>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            invalidFields.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        problem.setProperty("invalidParams", invalidFields);
        problem.setProperty("timestamp", Instant.now());
        return problem;
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'URL\'lerde fiil yerine çoğul isim kullanın: `/api/v1/customers` DOĞRU, `/api/v1/getCustomers` YANLIŞTIR.',
      'API sürümlemesini (Versioning) URL yoluyla yapın: `/api/v1/...`, `/api/v2/...`.',
      'Entity sınıflarını doğrudan dış dünyaya açmayın; Java 21 Record DTO\'lar kullanın.'
    ],
    commonPitfalls: [
      '`@RequestBody` önüne `@Valid` koymayı unutarak validation denetimlerinin çalışmaması.',
      'Her hata için HTTP 200 dönüp JSON body içerisine `status: "error"` yazmak (REST standartlarını ihlal eder!).'
    ],
    keyTakeaways: [
      'Spring MVC HTTP isteklerini JSON/DTO nesnelerine dönüştürür.',
      'RFC 7807 ProblemDetails endüstri standardı hata formatıdır.',
      '@RestControllerAdvice ile temiz, ayrık hata mimarisi kurulur.'
    ]
  },
  {
    id: 'module-4-spring-data-jpa',
    number: 4,
    title: 'Spring Data JPA & Hibernate Veritabanı Yönetimi',
    subtitle: 'Entity İlişkileri, N+1 Problemi ve JOIN FETCH Çözümü, Persistence Context, Sayfalama ve Auditing',
    icon: 'Database',
    category: 'Veritabanı & ORM',
    difficulty: 'Orta',
    durationMinutes: 50,
    overview: 'Hibernate ORM ve Spring Data JPA mimarisinin derinliklerine inin. Entity ilişkileri (@OneToMany, @ManyToOne), FetchType stratejileri, First-level Cache (Persistence Context), N+1 sorgu problemi ve çözümleri, dinamik sorgular ve JPA Auditing.',
    sections: [
      {
        id: 'orm-and-persistence-context',
        title: '1. JPA, Hibernate ve Persistence Context (First-Level Cache)',
        content: `JPA (Jakarta Persistence API) sadece bir arayüz/spesifikasyondur; Hibernate ise bunun en popüler somut implementasyonudur.

### Persistence Context Nedir?
Bir veritabanı transaction'ı başladığında Hibernate bir **Persistence Context** (Birinci Seviye Önbellek) açar.
- \`entityManager.find(User.class, 1L)\` çağrıldığında Hibernate önce Persistence Context'e bakar; varsa veritabanına sorgu atmaz.
- **Dirty Checking (Otomatik Güncelleme)**: Bir entity nesnesinin setter metodunu çağırdığınızda, transaction bittiğinde (Commit anında) Hibernate entity'nin değiştiğini anlar ve otomatik \`UPDATE\` SQL'i fırlatır! (\`repository.save()\` çağırmak bile gerekmez!).`,
        codeSnippets: [
          {
            title: 'Dirty Checking Mekanizması',
            language: 'java',
            filename: 'UserService.java',
            description: '@Transactional metot içinde nesne güncellendiğinde save() çağırmaya gerek yoktur.',
            code: `@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void updateUserEmail(Long userId, String newEmail) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("Kullanıcı bulunamadı"));
        
        // Sadece alan güncellenir; Hibernate Transaction sonunda değişikliği fark edip UPDATE sorgusu atar!
        user.setEmail(newEmail);
        // userRepository.save(user); // GEREKSIZDIR!
    }
}`
          }
        ]
      },
      {
        id: 'jpa-relationships-best-practices',
        title: '2. Entity İlişkileri (@OneToMany, @ManyToOne) ve Lazy Loading',
        content: `### İlişki Kuralları:
1. **@ManyToOne**: En yaygın ve performanslı ilişkidir. Varsayılanı \`EAGER\`'dır ancak MUTLAKA \`fetch = FetchType.LAZY\` olarak ezilmelidir!
2. **@OneToMany**: Çift yönlü ilişkide \`mappedBy\` ile yabancı anahtarın (Foreign Key) sahibi belirtilmelidir.
3. **Yardımcı Metotlar (Helper Methods)**: Çift yönlü ilişkilerde Java tarafındaki tutarlılığı korumak için \`addItem()\` ve \`removeItem()\` yazılmalıdır.`,
        codeSnippets: [
          {
            title: 'Doğru Yapılandırılmış Çift Yönlü JPA İlişkisi',
            language: 'java',
            filename: 'Invoice.java & InvoiceItem.java',
            description: 'Lazy fetch, CascadeType.ALL, orphanRemoval ve Helper metotları.',
            code: `package com.example.mastery.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String invoiceNumber;

    @OneToMany(
        mappedBy = "invoice",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private List<InvoiceItem> items = new ArrayList<>();

    // Yardımcı Metot (Helper Method)
    public void addItem(InvoiceItem item) {
        items.add(item);
        item.setInvoice(this);
    }

    public void removeItem(InvoiceItem item) {
        items.remove(item);
        item.setInvoice(null);
    }
}`
          }
        ]
      },
      {
        id: 'n-plus-one-deep-dive',
        title: '3. N+1 Sorgu Problemi ve Kesin Çözüm Yolları',
        content: `### N+1 Problemi Nedir?
100 adet Faturayı (\`Invoice\`) listelemek istediğinizde:
- 1 adet \`SELECT * FROM invoices\` sorgusu çalışır.
- Eğer her faturanın \`items\` listesine erişirseniz ve ilişki \`LAZY\` ise, Hibernate her fatura için ayrı ayrı \`SELECT * FROM invoice_items WHERE invoice_id = ?\` sorgusu atar (\`100 sorgu\`).
- Toplam: **1 + 100 = 101 sorgu!** Sistem çöker.

### Çözüm Yolları:
1. **JOIN FETCH**: JPQL ile tek seferde SQL \`INNER/LEFT JOIN\` atarak ana ve ilişkili nesneleri tek sorguda getirmek.
2. **@EntityGraph**: Metot üzerinde yüklenecek ilişkileri declarative belirtmek.
3. **Batch Fetching**: \`spring.jpa.properties.hibernate.default_batch_fetch_size: 30\` ile IN (?, ?, ...) kullanarak sorgu sayısını 100'den 4'e düşürmek.`,
        codeSnippets: [
          {
            title: 'N+1 Problemini Çözen Repository Sorguları',
            language: 'java',
            filename: 'InvoiceRepository.java',
            description: 'JOIN FETCH ve @EntityGraph ile tek sorguda ilişkili nesneleri çekme.',
            code: `package com.example.mastery.repository;

import com.example.mastery.entity.Invoice;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    // Çözüm 1: JPQL JOIN FETCH ile tek SQL sorgusu
    @Query("SELECT DISTINCT inv FROM Invoice inv LEFT JOIN FETCH inv.items WHERE inv.id = :id")
    Optional<Invoice> findByIdWithItems(@Param("id") Long id);

    // Çözüm 2: @EntityGraph ile EAGER çekme talimatı
    @EntityGraph(attributePaths = {"items"})
    @Query("SELECT inv FROM Invoice inv")
    List<Invoice> findAllWithItemsGraph();
}`
          }
        ]
      }
    ],
    bestPractices: [
      'İstisnasız tüm ilişkilerde (@OneToMany, @ManyToOne, @OneToOne, @ManyToMany) `fetch = FetchType.LAZY` kullanın.',
      'JPA Entity sınıflarında Lombok `@Data` ve `@ToString` kullanmayın; dairesel çağrı (Circular Reference) ile `StackOverflowError` oluşturur.',
      '`application.yml` içinde `spring.jpa.open-in-view: false` yapın (OSIV anti-pattern\'ını kapatın).'
    ],
    commonPitfalls: [
      'Sayfalama (`Pageable`) yaparken `JOIN FETCH` kullanarak bellek uyarısı ("applying in memory") almak.',
      '`@Transactional` anotasyonunu yanlış paketten (`jakarta.transaction` yerine `org.springframework.transaction.annotation.Transactional`) import etmemek veya private metotta kullanmak.'
    ],
    keyTakeaways: [
      'Hibernate Persistence Context nesnelerin durumunu izler ve otomatik günceller.',
      'N+1 sorgu problemi kurumsal uygulamalarda en sık rastlanan performans felaketidir; JOIN FETCH ile çözülür.',
      'Open Session in View (OSIV) üretim ortamlarında kapatılmalıdır.'
    ]
  },
  {
    id: 'module-5-spring-security-jwt',
    number: 5,
    title: 'Spring Security 6 & JWT ile Güvenlik Mimarisi',
    subtitle: 'SecurityFilterChain, Stateless Authentication, Rol/Yetki Yönetimi, BCrypt ve JJWT',
    icon: 'ShieldCheck',
    category: 'Güvenlik',
    difficulty: 'İleri',
    durationMinutes: 55,
    overview: 'Spring Boot 3.x ve Spring Security 6 ile modern, güvenli ve stateless REST API kimlik doğrulama mimarisi kurun. Kaldırılan WebSecurityConfigurerAdapter yerine gelen SecurityFilterChain, OncePerRequestFilter JWT token filtresi, BCrypt şifreleme ve metot düzeyinde yetkilendirme (@PreAuthorize).',
    sections: [
      {
        id: 'spring-security-6-architecture',
        title: '1. Spring Security 6 & SecurityFilterChain Mimarisi',
        content: `Spring Security, gelen HTTP isteklerini karşılayan bir **Servlet Filtre Zinciri (FilterChain)** üzerinden çalışır.

Spring Security 6 ile birlikte eski konfigürasyon yöntemleri tamamen kaldırılmış, **Fonksiyonel Lambda DSL** tabanlı \`SecurityFilterChain\` bean tanımı zorunlu kılınmıştır.

### İstek Doğrulama Akışı:
\`\`\`
HTTP Request -> [CorsFilter] -> [CsrfFilter] -> [JwtAuthenticationFilter] 
     -> [UsernamePasswordAuthenticationFilter] -> [SecurityContextHolder] 
     -> [DispatcherServlet] -> [Controller]
\`\`\``,
        codeSnippets: [
          {
            title: 'Spring Security 6 Güvenlik Konfigürasyonu',
            language: 'java',
            filename: 'SecurityConfig.java',
            description: 'Stateless session, CORS, CSRF devre dışı bırakma ve JWT filtresi entegrasyonu.',
            code: `package com.example.mastery.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity // @PreAuthorize("hasRole('ADMIN')") için zorunludur
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter, UserDetailsService userDetailsService) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable) // REST API stateless olduğu için CSRF kapatılır
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/v3/api-docs/**", "/swagger-ui/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/v1/products/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // Log rounds = 12 (Güçlü şifreleme)
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}`
          }
        ]
      },
      {
        id: 'jwt-service-and-filter',
        title: '2. JWT (JSON Web Token) Filtresi ve Yetkilendirme',
        content: `JWT filtresi (\`OncePerRequestFilter\`), gelen her HTTP isteğindeki \`Authorization: Bearer <token>\` başlığını okur. Token'ın imzasını ve geçerlilik süresini doğrular. Doğrulama başarılıysa kullanıcıyı \`SecurityContextHolder\` içine yerleştirir.`,
        codeSnippets: [
          {
            title: 'JwtAuthenticationFilter Uygulaması',
            language: 'java',
            filename: 'JwtAuthenticationFilter.java',
            description: 'Gelen HTTP isteklerini filtreleyip geçerli token varsa SecurityContextHolder oturumunu kurar.',
            code: `package com.example.mastery.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
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
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String jwt = authHeader.substring(7);
        final String userEmail = jwtService.extractUsername(jwt);

        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Şifreleri veritabanına kaydederken ASLA düz metin veya MD5 kullanmayın; `BCryptPasswordEncoder` kullanın.',
      'REST API mimarisinde session yönetimini `SessionCreationPolicy.STATELESS` yapın.',
      'JWT Secret anahtarını kaynak koda gömmeyin; ortam değişkeni (`${JWT_SECRET}`) kullanın.'
    ],
    commonPitfalls: [
      'Spring Security 6\'da rol kontrollerinde `hasRole("ROLE_ADMIN")` yazmak yerine `hasRole("ADMIN")` veya `hasAuthority("ROLE_ADMIN")` yazılmalıdır.',
      '`@EnableMethodSecurity` eklemeyi unutarak controller metotlarındaki `@PreAuthorize` kontrollerinin atlanması.'
    ],
    keyTakeaways: [
      'Spring Security FilterChain üzerinde çalışır.',
      'SecurityFilterChain bean\'i modern Spring Boot 3 standardıdır.',
      'Stateless JWT mimarisi yüksek ölçeklenebilirlik sağlar.'
    ]
  },
  {
    id: 'module-6-config-profiles-actuator',
    number: 6,
    title: 'Konfigürasyon, Profiller & Spring Boot Actuator',
    subtitle: 'application.yml, @ConfigurationProperties, Ortam Profilleri ve Gözlemlenebilirlik',
    icon: 'Sliders',
    category: 'Konfigürasyon & DevOps',
    difficulty: 'Orta',
    durationMinutes: 35,
    overview: 'Farklı çalışma ortamları (dev, test, prod) için profil yönetimi, tip güvenli @ConfigurationProperties sınıf kullanımı ve üretimde sistem sağlığını izlemek için Spring Boot Actuator.',
    sections: [
      {
        id: 'type-safe-config',
        title: '1. Tip Güvenli Konfigürasyon: @ConfigurationProperties',
        content: `Uygulama ayarlarını tek tek \`@Value("\${app.jwt.secret}")\` ile almak yerine, ilgili ayarları gruplayan tip güvenli (Type-safe) Java Record veya sınıfları kullanmak en iyi pratiktir.`,
        codeSnippets: [
          {
            title: 'Tip Güvenli Properties Sınıfı (Java Record)',
            language: 'java',
            filename: 'AppProperties.java & application.yml',
            description: 'Doğrulama (Validation) destekli tip güvenli konfigürasyon kaydı.',
            code: `// AppProperties.java
package com.example.mastery.config;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

@Validated
@ConfigurationProperties(prefix = "app")
public record AppProperties(
    @NotBlank String name,
    JwtConfig jwt,
    MailConfig mail
) {
    public record JwtConfig(
        @NotBlank String secret,
        @Positive long expirationMs
    ) {}

    public record MailConfig(
        String host,
        int port,
        boolean enableTls
    ) {}
}`
          }
        ]
      },
      {
        id: 'actuator-and-monitoring',
        title: '2. Spring Boot Actuator ile Gözlemlenebilirlik',
        content: `\`spring-boot-starter-actuator\` bağımlılığı; uygulamanın canlılık (liveness), hazırlık (readiness), bellek kullanımı, CPU durumu, HTTP trace ve log seviyelerini çalışma anında yönetme imkanı tanır.`,
        codeSnippets: [
          {
            title: 'Actuator Endpoint Yapılandırması',
            language: 'yaml',
            filename: 'application.yml',
            description: 'Health, info ve prometheus metriklerini güvenli şekilde dışa açma.',
            code: `management:
  endpoints:
    web:
      exposure:
        include: health, info, metrics, prometheus
      base-path: /actuator
  endpoint:
    health:
      show-details: when_authorized
      probes:
        enabled: true # Kubernetes Liveness ve Readiness probları için`
          }
        ]
      }
    ],
    bestPractices: [
      '`application.properties` yerine hiyerarşik `application.yml` tercih edin.',
      'Prod ortamında hassas actuator uçlarını (`env`, `heapdump`, `beans`) halka açık internete asla açmayın.',
      'Ortam bazlı ayarları `application-dev.yml`, `application-prod.yml` olarak ayırın ve `SPRING_PROFILES_ACTIVE=prod` ile tetikleyin.'
    ],
    commonPitfalls: [
      'Konfigürasyon dosyalarına şifre ve API key\'leri düz metin olarak yazıp GitHub\'a pushlamak.'
    ],
    keyTakeaways: [
      '@ConfigurationProperties tip güvenliği ve validasyon sağlar.',
      'Spring Profiles ile çoklu ortam yönetimi kusursuz çalışır.',
      'Actuator üretim ortamının olmazsa olmaz izleme aracıdır.'
    ]
  },
  {
    id: 'module-7-async-scheduling-events',
    number: 7,
    title: 'Asenkron İşlemler, Scheduling & Event Mimarisi',
    subtitle: '@Async, TaskExecutor, @Scheduled Cron İşleri ve ApplicationEvent Yapısı',
    icon: 'Zap',
    category: 'İleri Seviye Özellikler',
    difficulty: 'Orta',
    durationMinutes: 35,
    overview: 'HTTP isteklerini bloklamadan arka planda e-posta göndermek veya ağır hesaplamalar yapmak için @Async, periyodik görevler için @Scheduled ve gevşek bağlı (loosely coupled) mimariler için Spring Application Events.',
    sections: [
      {
        id: 'async-processing',
        title: '1. @Async ve Özel ThreadPoolTaskExecutor',
        content: `İstemciye hızlı yanıt dönmek ve uzun süren işlemleri arka planda yürütmek için \`@Async\` anotasyonu kullanılır. Özel bir **ThreadPoolTaskExecutor** tanımlanmalıdır.`,
        codeSnippets: [
          {
            title: 'Asenkron Yapılandırma ve Servis',
            language: 'java',
            filename: 'AsyncConfig.java',
            description: 'Özel thread havuzu tanımlaması.',
            code: `package com.example.mastery.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class AsyncConfig {

    @Bean(name = "customTaskExecutor")
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("AsyncThread-");
        executor.initialize();
        return executor;
    }
}`
          }
        ]
      },
      {
        id: 'application-events',
        title: '2. Spring Application Events ile Gevşek Bağlı Mimari',
        content: `Event mimarisinde \`UserRegisteredEvent\` fırlatılır ve ilgilenen dinleyiciler (\`@EventListener\` veya \`@TransactionalEventListener\`) bu olayı asenkron veya senkron işler.`,
        codeSnippets: [
          {
            title: 'Event Yayınlama ve Dinleme',
            language: 'java',
            filename: 'UserRegisteredEvent.java & Listener.java',
            description: 'Spring Event Publisher ve dinleyicisi.',
            code: `// 1. Immutable Event Kaydı
public record UserRegisteredEvent(Long userId, String email) {}

// 2. Dinleyici (Listener)
@Component
public class UserNotificationListener {

    @Async
    @EventListener
    public void onUserRegistered(UserRegisteredEvent event) {
        System.out.println("Kullanıcıya bildirim gönderiliyor: " + event.email());
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      '@Async metotların çalışabilmesi için metot mutlaka `public` olmalı ve sınıf dışından çağrılmalıdır.',
      'Periyodik görevlerde (@Scheduled) çoklu sunucu varsa ShedLock kullanın.'
    ],
    commonPitfalls: [
      'Aynı sınıf içindeki bir metodun diğer @Async metodu doğrudan çağırması (Proxy atlandığı için senkron çalışır!).'
    ],
    keyTakeaways: [
      '@EnableAsync ve ThreadPoolTaskExecutor ile arka plan işlemleri yapılır.',
      'Spring Events sistem bileşenleri arasındaki bağımlılığı minimuma indirir.'
    ]
  },
  {
    id: 'module-8-microservices-intro',
    number: 8,
    title: 'Microservices Mimarisi & Servisler Arası İletişim',
    subtitle: 'Spring Cloud Gateway, Eureka Service Discovery, OpenFeign ve Resilience4j Circuit Breaker',
    icon: 'Network',
    category: 'Microservices',
    difficulty: 'İleri',
    durationMinutes: 45,
    overview: 'Monolitik yapıdan mikroservis mimarisine geçiş, Spring Cloud ekosistemi, dinamik yönlendirme, servis keşfi ve hata toleransı sağlayan Circuit Breaker desenleri.',
    sections: [
      {
        id: 'microservices-ecosystem',
        title: '1. Spring Cloud Bileşenleri',
        content: `Mikroservis mimarisinde bağımsız servislerin yönetimi için Spring Cloud şu çözümleri sunar:
- **API Gateway (Spring Cloud Gateway)**: Tek giriş noktası, routing, authentication ve rate limiting.
- **Service Discovery (Netflix Eureka)**: Servislerin dinamik IP/portlarını kaydetmesi.
- **Declarative REST Client (OpenFeign)**: Interface tabanlı HTTP istemcisi.
- **Circuit Breaker (Resilience4j)**: Bir servis çöktüğünde tüm sistemin kilitlenmesini engelleyen sigorta mekanizması.`,
        codeSnippets: [
          {
            title: 'OpenFeign ve Resilience4j Circuit Breaker Örneği',
            language: 'java',
            filename: 'PaymentClient.java',
            description: 'Ödeme servisine istek atan ve hata durumunda Fallback çalıştıran Feign Client.',
            code: `package com.example.mastery.client;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "payment-service")
public interface PaymentClient {

    @PostMapping("/api/v1/payments/process")
    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    PaymentResponse processPayment(@RequestBody PaymentRequest request);

    default PaymentResponse paymentFallback(PaymentRequest request, Throwable ex) {
        return new PaymentResponse("FAILED", "Ödeme servisi geçici olarak kullanım dışı. Lütfen tekrar deneyin.");
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Mikroservisler arası senkron HTTP çağrılarını minimumda tutun; asenkron iletişim için Kafka veya RabbitMQ tercih edin.',
      'Her mikroservisin kendi veritabanı olmalıdır (Database per Service pattern).'
    ],
    commonPitfalls: [
      'Gereksiz yere mikroservis mimarisine geçerek "Distributed Monolith" yaratmak.'
    ],
    keyTakeaways: [
      'Spring Cloud mikroservis altyapısını kurumsal düzeyde basitleştirir.',
      'Resilience4j sigorta mekanizması ile sistemin çökmesini engeller.'
    ]
  },
  {
    id: 'module-9-testing-strategies',
    number: 9,
    title: 'Test Stratejileri: JUnit 5, Mockito & MockMvc',
    subtitle: 'Unit Test, Slice Testing (@WebMvcTest, @DataJpaTest) ve Entegrasyon Testleri',
    icon: 'CheckCircle2',
    category: 'Test & Kalite',
    difficulty: 'Orta',
    durationMinutes: 40,
    overview: 'Yazılım kalitesinin ve sürdürülebilirliğinin temeli olan test piramidini uygulayın. Mockito ile birim testleri, @WebMvcTest ile hızlı Controller testleri ve @SpringBootTest ile tam entegrasyon testleri.',
    sections: [
      {
        id: 'unit-testing-service-layer',
        title: '1. Servis Katmanında Unit Test & Mockito',
        content: `Birim testlerinde veritabanı veya ağ bağlantısı açılmaz. Test edilen sınıfın iş mantığı izole edilir, bağımlılıklar Mockito ile mocklanır.`,
        codeSnippets: [
          {
            title: 'JUnit 5 & Mockito ile Servis Birim Testi',
            language: 'java',
            filename: 'UserServiceTest.java',
            description: 'Given-When-Then yaklaşımı ile birim test.',
            code: `package com.example.mastery.service;

import com.example.mastery.dto.UserResponse;
import com.example.mastery.entity.User;
import com.example.mastery.exception.ResourceNotFoundException;
import com.example.mastery.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    @DisplayName("Var olan bir ID ile kullanıcı başarıyla getirilmelidir")
    void shouldReturnUserWhenUserExists() {
        Long userId = 1L;
        User mockUser = new User(userId, "Ahmet", "ahmet@example.com");
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

        UserResponse response = userService.getUserById(userId);

        assertThat(response).isNotNull();
        assertThat(response.id()).isEqualTo(userId);
        assertThat(response.email()).isEqualTo("ahmet@example.com");
        verify(userRepository, times(1)).findById(userId);
    }
}`
          }
        ]
      },
      {
        id: 'slice-testing-webmvc',
        title: '2. Controller Katmanı için @WebMvcTest',
        content: `\`@WebMvcTest\` tüm Spring Context\'i ayağa kaldırmaz; sadece Spring MVC altyapısını yükler. Bu sayede testler milisaniyeler içinde tamamlanır.`,
        codeSnippets: [
          {
            title: 'MockMvc ile API Uç Noktası Testi',
            language: 'java',
            filename: 'ProductControllerTest.java',
            description: 'HTTP Status ve JSON yanıtı doğrulaması.',
            code: `package com.example.mastery.controller;

import com.example.mastery.dto.ProductResponse;
import com.example.mastery.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    @Test
    void shouldReturnProductById() throws Exception {
        ProductResponse mockProduct = new ProductResponse(1L, "Laptop", new BigDecimal("15000.00"), "SKU-100");
        when(productService.findById(1L)).thenReturn(mockProduct);

        mockMvc.perform(get("/api/v1/products/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Laptop"))
                .andExpect(jsonPath("$.price").value(15000.00));
    }
}`
          }
        ]
      }
    ],
    bestPractices: [
      'Birim testlerinde `@SpringBootTest` kullanmayın; MockitoExtension tercih edin.',
      'Test metot isimlerinde BDD yaklaşımını (`shouldReturn...When...`) kullanın.'
    ],
    commonPitfalls: [
      'Test yazarken gerçek veritabanını çağırmak.'
    ],
    keyTakeaways: [
      'Test Piramidi: Çok sayıda Unit Test, orta sayıda Slice Test, az sayıda Tam Entegrasyon Testi.',
      'MockMvc ile HTTP katmanı hızlıca test edilir.'
    ]
  },
  {
    id: 'module-10-production-docker-checklist',
    number: 10,
    title: 'Production Checklist, Docker & Deploy Stratejileri',
    subtitle: 'Multi-stage Dockerfile, JVM Bellek Ayarları, Connection Pool ve Netlify/GitHub Pages Dağıtımı',
    icon: 'Server',
    category: 'DevOps & Deploy',
    difficulty: 'İleri',
    durationMinutes: 35,
    overview: 'Spring Boot uygulamanızı buluta ve üretim ortamına taşırken dikkat etmeniz gereken güvenlik, performans ve Docker paketleme adımları.',
    sections: [
      {
        id: 'multi-stage-docker',
        title: '1. Modern Multi-Stage Dockerfile (Java 21)',
        content: `Multi-stage build ile önce Maven ile proje derlenir, ardından sadece JRE ve oluşan JAR dosyası minimum boyutlu bir Linux imajına (Alpine / Eclipse Temurin) aktarılır. İmaj boyutu 800MB'dan 150MB'a düşer.`,
        codeSnippets: [
          {
            title: 'Üretim Seviyesi Multi-Stage Dockerfile',
            language: 'dockerfile',
            filename: 'Dockerfile',
            description: 'Root olmayan kullanıcı ile güvenli Docker imajı.',
            code: `# Aşama 1: Derleme
FROM maven:3.9.6-eclipse-temurin-21-alpine AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests

# Aşama 2: Çalıştırma İmajı
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Root olmayan kullanıcı
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=builder /app/target/*.jar app.jar

ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]`
          }
        ]
      },
      {
        id: 'production-checklist',
        title: '2. Üretime Çıkış (Production) Kontrol Listesi',
        content: `### Canlıya Çıkmadan Önce Kontrol Edin:
1. **HikariCP Pool Boyutu**: \`maximum-pool-size: 10-20\` aralığında optimize edilmeli.
2. **Graceful Shutdown**: \`server.shutdown: graceful\` ile gelen isteklerin yarım kalmadan bitmesi sağlanmalı.
3. **Log Formatı**: Üretimde Logstash JSON formatı veya structured logging kullanılmalı.
4. **Hata Maskeleme**: \`server.error.include-stacktrace: never\` ile hassas kod detayları client'a kapatılmalı.
5. **CORS Yapılandırması**: Sadece güvenilir domain'lere izin verilmeli (\`*\` yasaklanmalı).`
      }
    ],
    bestPractices: [
      'Docker konteynerleri içinde uygulamayı asla root kullanıcısı olarak çalıştırmayın.',
      'JVM parametrelerinde `-XX:MaxRAMPercentage=75.0` kullanarak konteyner OOM kill sorunlarının önüne geçin.'
    ],
    commonPitfalls: [
      'Geliştirme ortamındaki `ddl-auto: update` ayarını üretimde açık bırakarak veri kaybına sebep olmak.'
    ],
    keyTakeaways: [
      'Multi-stage Dockerfile hafif, hızlı ve güvenli imajlar üretir.',
      'Graceful shutdown ve doğru pool boyutları kesintisiz hizmet sağlar.'
    ]
  }
];

export const getLessonsData = (lang: string = 'tr'): LessonModule[] => {
  return lang === 'en' ? LESSONS_DATA_EN : LESSONS_DATA;
};
