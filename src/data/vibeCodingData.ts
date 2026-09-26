export interface VibeCodingPattern {
  id: string;
  category: 'aop' | 'jpa' | 'singleton' | 'security';
  categoryLabel: string;
  title: string;
  summary: string;
  dangerBadge: string;
  badCode: {
    filename: string;
    code: string;
    flawExplanation: string;
  };
  goodCode: {
    filename: string;
    code: string;
    fixExplanation: string;
  };
  guardrailCode: {
    tool: 'ArchUnit' | 'Semgrep' | 'MockMvc Negative Test' | 'Config Guard';
    filename: string;
    code: string;
    explanation: string;
  };
  impact: string;
  deepDiveMarkdown: string;
}

export interface ArchUnitRuleItem {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  purpose: string;
}

export interface AiPromptGuardrail {
  id: string;
  title: string;
  targetRole: string;
  description: string;
  systemPrompt: string;
  exampleFinding: string;
}

export interface AuditMatrixRow {
  area: string;
  badPattern: string;
  impact: string;
  tool: string;
  aiVerification: string;
}

export interface ResearchSource {
  title: string;
  url: string;
  publisher: string;
  note: string;
}

export const RESEARCH_SOURCES: ResearchSource[] = [
  {
    title: 'Spring Framework Pitfalls',
    url: 'https://www.sonarsource.com/blog/spring-framework-pitfalls/',
    publisher: 'SonarSource Blog',
    note: 'İşlem yönetimi ve dinamik proxy atlama analizleri.'
  },
  {
    title: 'The 7 Most Common Mistakes When Using @Transactional in Spring Boot',
    url: 'https://medium.com/spring-boot-world/the-7-most-common-mistakes-when-using-transactional-in-spring-boot-5fb15f6522e1',
    publisher: 'Medium, Spring Boot World',
    note: 'Self-invocation, private method ve rollback tuzakları.'
  },
  {
    title: 'Exploring Spring Boot Actuator Misconfigurations',
    url: 'https://www.wiz.io/blog/spring-boot-actuator-misconfigurations',
    publisher: 'Wiz Security Blog',
    note: 'Actuator endpoint ifşaları ve heapdump sızıntıları.'
  },
  {
    title: 'Broken Object Level Authorization (BOLA): API Attack & Prevention',
    url: 'https://www.stackhawk.com/blog/understanding-and-protecting-against-api1-broken-object-level-authorization/',
    publisher: 'StackHawk Guide',
    note: 'OWASP API Top 1 BOLA yetkilendirme açıkları.'
  },
  {
    title: 'State of API Exposure 2024',
    url: 'https://26857953.fs1.hubspotusercontent-eu1.net/hubfs/26857953/State%20of%20API%20Exposure%202024%20-%20Escape.pdf',
    publisher: 'Escape Security Research',
    note: 'Açıkta bırakılan Actuator uç noktalarının risk analizi.'
  },
  {
    title: 'Vibe Coding Security Risks: 53% of AI Code Has Holes',
    url: 'https://getautonoma.com/blog/vibe-coding-security-risks',
    publisher: 'Autonoma Blog',
    note: 'Yapay zekâ üretimi backend kodlarındaki yapısal güvenlik gedikleri.'
  },
  {
    title: 'Introduction to ArchUnit',
    url: 'https://www.baeldung.com/java-archunit-intro',
    publisher: 'Baeldung',
    note: 'Java mimari kurallarının birim testlerle denetlenmesi.'
  },
  {
    title: 'Semgrep App Security Platform & AI Code Review',
    url: 'https://semgrep.dev/',
    publisher: 'Semgrep Documentation',
    note: 'Spring Boot SAST kuralları ve anlamsal güvenlik taramaları.'
  }
];

export const VIBE_CODING_PATTERNS_TR: VibeCodingPattern[] = [
  {
    id: 'aop-self-invocation',
    category: 'aop',
    categoryLabel: 'AOP Proxy & Transaction',
    title: 'AOP Self-Invocation (Kendi Kendini Çağırma) Tuzağı',
    summary: 'Aynı sınıf içindeki bir metodun diğer @Transactional metodu "this." ile çağırması Spring Proxy\'sini baypas eder.',
    dangerBadge: 'Kritik: İşlem Yok / Sessiz Veri Bozulması',
    badCode: {
      filename: 'OrderService.java (Kusurlu LLM Kodu)',
      code: `@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // Dışarıdan çağrılan public metot (Transaction yok!)
    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // TUZAK: Aynı sınıf içinden doğrudan çağrı (this.saveSingleOrder)
            // Spring Proxy baypas edilir; @Transactional ASLA ÇALIŞMAZ!
            this.saveSingleOrder(req);
        }
    }

    @Transactional
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            // Hata olsa dahi işlem geri alınamaz (Rollback çalışmaz)!
            throw new IllegalArgumentException("Geçersiz tutar");
        }
    }
}`,
      flawExplanation: 'Spring @Transactional, ilgili bean etrafına dinamik bir CGLIB proxy örer. Ancak aynı sınıf içinden yapılan "this.metot()" çağrıları bu proxy katmanına uğramaz. Metot düz Java nesnesi gibi çalışır; transaction başlatılmaz ve hata anında rollback yapılamaz.'
    },
    goodCode: {
      filename: 'OrderService.java & OrderProcessor.java (Production Çözümü)',
      code: `// ÇÖZÜM 1: Sorumluluğu ayrı bir servise/bean'e ayırma (Tavsiye Edilen)
@Service
@RequiredArgsConstructor
public class OrderBatchService {
    private final SingleOrderProcessor singleOrderProcessor;

    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // Dış bean çağrısı -> Spring CGLIB Proxy devreye girer -> Transaction başlar!
            singleOrderProcessor.saveSingleOrder(req);
        }
    }
}

@Service
@RequiredArgsConstructor
public class SingleOrderProcessor {
    private final OrderRepository orderRepository;

    @Transactional(rollbackFor = Exception.class)
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            throw new IllegalArgumentException("Geçersiz tutar");
        }
    }
}`,
      fixExplanation: 'İşlem yönetimi gerektiren metot ayrı bir Spring Bean\'e taşınır veya TransactionTemplate kullanılır. Böylece çağrı daima AOP Proxy nesnesi üzerinden geçer.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'ArchitectureTest.java (CI/CD Kapısı)',
      code: `@AnalyzeClasses(packages = "com.mastery.springboot")
public class TransactionRulesTest {

    // Servis içi transactional metotların çağrılmasını ve proxy baypasını denetler
    @ArchTest
    public static final ArchRule transactional_methods_must_be_public =
        methods().that().areAnnotatedWith(Transactional.class)
        .should().bePublic()
        .because("AOP Proxy'leri yalnızca public metotlara transaction uygulayabilir.");
}`,
      explanation: 'ArchUnit kuralı, @Transactional metotların private/final olmasını ve mimari katmanlar arası izole edilmesini build aşamasında garanti altına alır.'
    },
    impact: 'Veritabanına yarım kalan veriler kaydedilir. Hata fırlatıldığında rollback gerçekleşmez; bakiye düşüp sipariş oluşmaması gibi ölümcül veri tutarsızlıkları doğar.',
    deepDiveMarkdown: `### AOP Proxy Mekanizması Nasıl Çalışır?
Spring'de bir sınıfın üzerine veya metoduna \`@Transactional\`, \`@Async\` veya \`@Cacheable\` yazdığınızda, Spring uygulama ayağa kalkarken o sınıfın yerine **CGLIB Dynamic Proxy** nesnesi enjekte eder.

\`\`\`
İstek -> [ Spring Proxy (Transaction Interceptor: BEGIN TX) ] -> [ Gerçek Service Hedefi ] -> [ COMMIT / ROLLBACK ]
\`\`\`

Eğer servis kendi içindeki metodu doğrudan \`this.saveSingleOrder()\` şeklinde çağırırsa, Java çalışma zamanı doğrudan hedef nesnenin metodunu çalıştırır. **Proxy katmanı tamamen devre dışı kalır!**`
  },
  {
    id: 'checked-exception-rollback',
    category: 'aop',
    categoryLabel: 'AOP Proxy & Transaction',
    title: 'Denetimli İstisnalarda (Checked Exceptions) Geri Alma İhmali',
    summary: 'Spring varsayılan olarak yalnızca RuntimeException ve Error durumlarında işlemi geri alır; Checked Exception fırlatıldığında commit edilir.',
    dangerBadge: 'Yüksek: Sessiz Commit & Veri Kaybı',
    badCode: {
      filename: 'PaymentService.java (Kusurlu LLM Kodu)',
      code: `@Service
public class PaymentService {
    @Autowired
    private AccountRepository accountRepo;

    // TUZAK: rollbackFor tanımlanmamış!
    @Transactional
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException, SQLException {
        accountRepo.decreaseBalance(fromId, amount);
        
        // Harici banka API çağrısı veya dosya yazımı Checked Exception fırlatıyor:
        if (externalBankFailed()) {
            throw new IOException("Banka servisi yanıt vermedi!"); 
            // SONUÇ: IOException bir Checked Exception olduğu için
            // Spring bu işlemi GERİ ALMAZ (Rollback yapmaz)! Bakiye kalıcı olarak eksilir!
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,
      flawExplanation: 'Spring Framework EJB spesifikasyonundan gelen miras nedeniyle varsayılan olarak sadece RuntimeException (Unchecked) fırlatıldığında rollback tetikler. LLM\'ler genellikle checked exception fırlatılan metotlarda rollbackFor belirtmez.'
    },
    goodCode: {
      filename: 'PaymentService.java (Production Çözümü)',
      code: `@Service
@RequiredArgsConstructor
public class PaymentService {
    private final AccountRepository accountRepo;

    // ÇÖZÜM: rollbackFor = Exception.class ile tüm istisnalarda geri alma garantisi
    @Transactional(rollbackFor = Exception.class)
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException {
        accountRepo.decreaseBalance(fromId, amount);
        
        if (externalBankFailed()) {
            throw new IOException("Banka servisi yanıt vermedi!"); 
            // ARTIK GÜVENLİ: Spring tüm Exception türevlerinde rollback uygular.
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,
      fixExplanation: '@Transactional(rollbackFor = Exception.class) ifadesi eklenerek checked/unchecked fark etmeksizin tüm fırlatılan hatalarda transaction güvenle geri alınır.'
    },
    guardrailCode: {
      tool: 'Semgrep',
      filename: 'semgrep-spring-rules.yml',
      code: `rules:
  - id: spring-transactional-missing-rollback-for
    languages: [java]
    message: "@Transactional anotasyonu rollbackFor = Exception.class içermelidir."
    severity: WARNING
    pattern: |
      @Transactional
      $RET $FUNC(...) throws $EX { ... }`,
      explanation: 'Semgrep kuralı, checked exception fırlatan metodun @Transactional(rollbackFor = ...) kuralına uyup uymadığını CI/CD pipeline\'ında milisaniyeler içinde denetler.'
    },
    impact: 'Para transferi, stok düşümü veya sipariş onayında harici API hatası oluşmasına rağmen veritabanı geri alınmaz ve para havaya uçar.',
    deepDiveMarkdown: `### Spring Transaction Geri Alma Varsayılanları
* \`RuntimeException\` -> Rollback tetiklenir ✅
* \`Error\` -> Rollback tetiklenir ✅
* \`IOException\`, \`SQLException\`, Özel \`Exception\` -> **COMMIT EDİLİR (Ters Köşe!) ❌**

Bu nedenle kurumsal projelerde her zaman \`@Transactional(rollbackFor = Exception.class)\` kullanılması en iyi uygulamadır.`
  },
  {
    id: 'bola-idor-vulnerability',
    category: 'security',
    categoryLabel: 'API Güvenliği & BOLA',
    title: 'Kırık Nesne Düzeyinde Yetkilendirme (BOLA / IDOR)',
    summary: 'LLM\'ler findById(id) ile sorgu çekerken kimliği doğrulanmış kullanıcının o verinin sahibi olup olmadığını kontrol etmeyi unutur.',
    dangerBadge: 'Kritik Güvenlik Açığı (OWASP API #1)',
    badCode: {
      filename: 'InvoiceController.java (Kusurlu LLM Kodu)',
      code: `@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceRepository invoiceRepo;
    @Autowired
    private InvoiceMapper mapper;

    // TUZAK: Kullanıcı giriş yapmış (authenticated) olsa dahi
    // Başkasının fatura ID'sini göndererek (örn: /api/invoices/999) 
    // tüm faturayı ve hassas kişisel verileri indirebilir!
    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponse> getInvoice(@PathVariable Long id) {
        return invoiceRepo.findById(id)
                .map(mapper::toDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}`,
      flawExplanation: 'Model, kullanıcının oturum açtığını varsayar ancak kullanıcının o spesifik fatura kaydına sahip olup olmadığını (Sahiplik Kontrolü) denetlemez.'
    },
    goodCode: {
      filename: 'InvoiceController.java (Production Çözümü)',
      code: `@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {
    private final InvoiceService invoiceService;

    @GetMapping("/{id}")
    @PreAuthorize("@securityService.isInvoiceOwner(#id, authentication)")
    public ResponseEntity<InvoiceResponse> getInvoice(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        
        InvoiceResponse response = invoiceService.getInvoiceForUser(id, userDetails.getUsername());
        return ResponseEntity.ok(response);
    }
}

// Servis katmanında ilave SQL kiracı filtresi:
// invoiceRepository.findByIdAndOwnerEmail(id, currentUserEmail);`,
      fixExplanation: 'Spring Security SpEL (@PreAuthorize) ve veritabanı sorgusunda doğrudan kullanıcı/kiracı filtresi kullanılarak yetkisiz erişim 403 Forbidden ile engellenir.'
    },
    guardrailCode: {
      tool: 'MockMvc Negative Test',
      filename: 'InvoiceSecurityNegativeTest.java',
      code: `@SpringBootTest
@AutoConfigureMockMvc
public class InvoiceSecurityNegativeTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "attacker_bob", roles = "USER")
    void getInvoice_WhenAccessingOtherUserInvoice_ShouldReturnForbidden() throws Exception {
        // Alice'e ait fatura ID'si: 101L
        mockMvc.perform(get("/api/invoices/101"))
               .andExpect(status().isForbidden()); // 200 dönerse CI derlemesi kırılır!
    }
}`,
      explanation: 'Saldırgan perspektifinden yazılan negatif MockMvc entegrasyon testi, BOLA açıklarını CI/CD ortamında otomatik tespit eder.'
    },
    impact: 'Saldırganlar sıralı ID taraması (IDEnumeration) yaparak sistemdeki tüm kullanıcıların fatura, bakiye, sağlık ve kimlik kayıtlarını sızdırabilir.',
    deepDiveMarkdown: `### BOLA (IDOR) Neden LLM'lerin En Büyük Kör Noktasıdır?
LLM'ler istek parametrelerini doğrudan repository metoduna bağlama eğilimindedir (\`findById(id)\`). Güvenlik bağlamındaki \`SecurityContextHolder\` veya \`Principal\` nesnesini veri tabanı sorgusuna eklemek için ek iş mantığı gerekir.

Kurumsal savunma hattı:
1. URL'den gelen ID tek başına asla güvenilir veri kabul edilmemelidir.
2. Sorgu: \`select i from Invoice i where i.id = :id and i.tenantId = :tenantId\` şeklinde olmalıdır.`
  },
  {
    id: 'actuator-exposure',
    category: 'security',
    categoryLabel: 'Konfigürasyon & Bilgi Sızıntısı',
    title: 'Spring Boot Actuator ve Hassas Uç Nokta İfşaları',
    summary: 'LLM\'ler test kolaylığı için management.endpoints.web.exposure.include=* yazar; bu da şifre, heapdump ve RCE zafiyeti yaratır.',
    dangerBadge: 'Kritik: RCE & Parola Sızıntısı',
    badCode: {
      filename: 'application.yml (Kusurlu LLM Yapılandırması)',
      code: `management:
  endpoints:
    web:
      exposure:
        # ÖLÜMCÜL HATA: Tüm actuator uç noktaları dış dünyaya açıldı!
        include: "*"
  endpoint:
    health:
      show-details: always
    env:
      enabled: true
    heapdump:
      enabled: true`,
      flawExplanation: 'Yıldız (*) kullanımı; /actuator/env, /actuator/heapdump, /actuator/beans gibi kritik iç yapıları kimlik doğrulamasız internete açar. Heapdump indirilerek bellekteki tüm API secret\'ları ve veritabanı şifreleri elde edilebilir.'
    },
    goodCode: {
      filename: 'application.yml (Production Standartı)',
      code: `management:
  server:
    port: 8081 # Actuator'ı iç ağda ayrı bir porta alma
  endpoints:
    web:
      exposure:
        # Sadece liveness ve readiness açık!
        include: "health,info,prometheus"
      base-path: /internal-metrics
  endpoint:
    health:
      show-details: when_authorized
      probes:
        enabled: true
    env:
      enabled: false
    heapdump:
      enabled: false`,
      fixExplanation: 'Yalnızca operasyonel olarak gerekli sağlık uç noktaları beyaz listeye (whitelist) alınır ve Actuator portu dış internet trafiğinden izole edilir.'
    },
    guardrailCode: {
      tool: 'Config Guard',
      filename: 'ActuatorConfigTest.java',
      code: `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ActuatorSecurityTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void sensitiveEndpoints_MustBeClosed() {
        ResponseEntity<String> envResp = restTemplate.getForEntity("/actuator/env", String.class);
        assertThat(envResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN, HttpStatus.UNAUTHORIZED);

        ResponseEntity<String> heapResp = restTemplate.getForEntity("/actuator/heapdump", String.class);
        assertThat(heapResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN);
    }
}`,
      explanation: 'Entegrasyon testi ile /actuator/env ve /actuator/heapdump yollarının dışarıdan erişilemediği doğrulanır.'
    },
    impact: 'Saldırganlar /actuator/heapdump indirip strings ile grepleyip AWS anahtarlarını, JWT secretlarını ve veritabanı parolalarını çalar.',
    deepDiveMarkdown: `### 2024 State of API Exposure Raporu Bulgusu
Araştırmalar, açıkta bırakılan Spring Boot Actuator uç noktalarının kurumsal veri sızıntılarının ve Cloud hesap ele geçirmelerinin en yaygın 3 nedeninden biri olduğunu göstermektedir.`
  },
  {
    id: 'n-plus-one-and-osiv',
    category: 'jpa',
    categoryLabel: 'JPA / Hibernate & Performans',
    title: 'N+1 Sorgu Problemi ve Open-Session-In-View (OSIV) Tuzağı',
    summary: 'LLM\'ler ilişkili verileri çekerken JOIN FETCH yerine türetilmiş sorgular kullanır; döngüde yüzlerce SQL tetiklenir ve HikariCP havuzu tükenir.',
    dangerBadge: 'Yüksek: DB Çökmesi & Havuz Tükenmesi',
    badCode: {
      filename: 'CustomerOrderService.java (Kusurlu LLM Kodu)',
      code: `@Service
public class CustomerOrderService {
    @Autowired
    private CustomerRepository customerRepo;

    public List<CustomerSummaryDto> getAllCustomerOrders() {
        // 1. Sorgu: select * from customers (100 müşteri döner)
        List<Customer> customers = customerRepo.findAll();

        return customers.stream().map(c -> {
            // N SORGU: Her müşteri için ayrı bir "select * from orders where customer_id = ?"
            // Toplam 1 + 100 = 101 SQL sorgusu tetiklenir!
            int orderCount = c.getOrders().size(); 
            return new CustomerSummaryDto(c.getName(), orderCount);
        }).toList();
    }
}`,
      flawExplanation: 'Lazy ilişkiler döngü içinde getter ile tetiklendiğinde N+1 adet SQL sorgusu çalışır. LLM ayrıca LazyInitializationException hatasını çözmek için "spring.jpa.open-in-view=true" bırakarak DB bağlantısını HTTP yanıtı bitene kadar bloke eder.'
    },
    goodCode: {
      filename: 'CustomerRepository.java (Production Çözümü)',
      code: `public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // ÇÖZÜM 1: JOIN FETCH ile tek sorguda ilişkili veriyi çekme
    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.orders")
    List<Customer> findAllWithOrders();

    // ÇÖZÜM 2 (Daha Performanslı): Doğrudan DTO Projection
    @Query("SELECT new com.mastery.dto.CustomerSummaryDto(c.name, COUNT(o)) " +
           "FROM Customer c LEFT JOIN c.orders o GROUP BY c.id, c.name")
    List<CustomerSummaryDto> fetchCustomerSummaries();
}

// application.yml içinde:
// spring.jpa.open-in-view: false`,
      fixExplanation: 'JOIN FETCH veya JPQL Constructor Expression ile N+1 sorgusu tek bir optimize edilmiş SQL sorgusuna indirgenir ve OSIV kapatılır.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'JpaPerformanceRulesTest.java',
      code: `// QuickPerf veya SQL log sayacı ile maksimum sorgu kısıtı
@Test
@ExpectQueries(max = 1) // QuickPerf kuralı: 1'den fazla sorgu çıkarsa test fail olur!
void getAllCustomerOrders_ShouldExecuteSingleQuery() {
    customerOrderService.getAllCustomerOrders();
}`,
      explanation: 'QuickPerf entegrasyonu ile servis metodunun tek bir HTTP isteğinde kaç SQL sorgusu ürettiği CI aşamasında test edilir.'
    },
    impact: 'Veritabanı CPU\'su %100\'e fırlar, HikariCP bağlantı havuzu kilitlenir ve tüm sistem zaman aşımına (Timeout) uğrayarak çöker.',
    deepDiveMarkdown: `### Open-Session-In-View (OSIV) Neden Tehlikelidir?
OSIV açık olduğunda, Hibernate Session\'ı Controller katmanından View/JSON serileştirme bitene kadar açık tutulur. JSON kütüphanesi (Jackson) getter\'ları çağırırken arkada sessizce SQL sorguları ateşlenir ve DB bağlantısı gereksiz yere dakikalarca meşgul edilir.`
  },
  {
    id: 'entity-exposure-mass-assignment',
    category: 'jpa',
    categoryLabel: 'JPA & Mimari İzolasyon',
    title: 'Varlıkların (Entity) Dış Dünyaya Doğrudan Açılması (Mass Assignment)',
    summary: '@RestController metodundan doğrudan JPA @Entity dönülmesi; döngüsel StackOverflow ve Mass Assignment güvenlik açıklarına yol açar.',
    dangerBadge: 'Yüksek: Veri İfşası & StackOverflow',
    badCode: {
      filename: 'UserController.java (Kusurlu LLM Kodu)',
      code: `@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepo;

    // TUZAK 1: Entity doğrudan döndürülüyor -> Şifre hash'i, secret'lar istemciye sızar!
    // TUZAK 2: Çift yönlü ilişkilerde Jackson JSON sonsuz döngüye girip StackOverflow fırlatır!
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepo.findById(id).orElseThrow();
    }

    // TUZAK 3: Mass Assignment -> İstemci JSON içinde "role: ADMIN" gönderirse yetki yükseltir!
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userUpdate) {
        userUpdate.setId(id);
        return userRepo.save(userUpdate);
    }
}`,
      flawExplanation: 'JPA Varlığı veritabanı modelidir, API kontratı değildir. Doğrudan maruz bırakıldığında istemci güncellenmemesi gereken alanları (role, balance, id) manipüle edebilir.'
    },
    goodCode: {
      filename: 'UserController.java & UserDto.java (Production Çözümü)',
      code: `@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable Long id) {
        UserResponseDto dto = userService.getUserById(id);
        return ResponseEntity.ok(dto); // Sadece güvenli alanlar döner!
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDto> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserUpdateRequestDto request) {
        UserResponseDto updated = userService.updateUser(id, request);
        return ResponseEntity.ok(updated);
    }
}`,
      fixExplanation: 'Strict DTO (Data Transfer Object) ve MapStruct/Record sınıfları kullanılarak API kontratı ile veritabanı şeması kesin sınırlarla birbirinden ayrılır.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'LayeringArchTest.java',
      code: `@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity sınıfları doğrudan dışarıya açılamaz; DTO kullanılmalıdır.");`,
      explanation: 'ArchUnit kuralı, herhangi bir Controller metodunun dönüş tipinde @Entity paketi bulunmasını derleme anında reddeder.'
    },
    impact: 'Kullanıcı kendi profilini güncellerken JSON payload\'ına "isAdmin: true" ekleyerek sistem yöneticisi yetkisi kazanabilir (Mass Assignment).',
    deepDiveMarkdown: `### DTO Katmanının Zorunluluğu
1. **Güvenlik:** Şifre, parola sıfırlama token'ları ve iç denetim alanları API yanıtından gizlenir.
2. **Performans:** İhtiyaç duyulmayan devasa ilişkili tablolar çekilmez.
3. **Sürdürülebilirlik:** Veritabanı sütun isimleri değiştiğinde API sözleşmesi bozulmaz.`
  },
  {
    id: 'stateful-singleton-concurrency',
    category: 'singleton',
    categoryLabel: 'Singleton & Eşzamanlılık',
    title: 'Spring Singleton Kapsamında Değişken Durum (Mutable State) İhmali',
    summary: 'Spring Bean\'leri varsayılan olarak Singlepondur; sınıf içine sayaç veya List koymak eşzamanlı isteklerde veri bozulmasına yol açar.',
    dangerBadge: 'Kritik: Race Condition & Veri Ezilmesi',
    badCode: {
      filename: 'CalculationService.java (Kusurlu LLM Kodu)',
      code: `@Service
public class CalculationService {
    // ÖLÜMCÜL TUZAK: Singleton serviste mutable (değişken) sınıf alanı!
    // Tüm kullanıcıların eşzamanlı istekleri aynı List ve Formatter üzerinde çalışır!
    private List<String> auditLogs = new ArrayList<>();
    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); // Thread-unsafe!

    public void processTransaction(String user, Date date) {
        // Eşzamanlı gelen istekler birbirlerinin loglarını ezer veya ConcurrentModificationException fırlatır!
        auditLogs.add(user + " - " + sdf.format(date));
    }
}`,
      flawExplanation: 'Spring servisleri uygulama boyunca tek bir örneğe (Singleton) sahiptir. Sınıf düzeyinde değişken durum (mutable field) tutulması, çoklu iş parçacıklarında (multi-threading) veri ezilmelerine (Race Condition) yol açar.'
    },
    goodCode: {
      filename: 'CalculationService.java (Production Çözümü)',
      code: `@Service
public class CalculationService {
    // ÇÖZÜM 1: Thread-safe DateTimeFormatter (Java 8+) kullanımı
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE;

    // ÇÖZÜM 2: Durumsuz (Stateless) servis mimarisi. Veriler metot içinde veya veritabanında tutulur.
    public void processTransaction(String user, LocalDate date) {
        String logEntry = user + " - " + date.format(FORMATTER);
        // Durum sınıf alanında tutulmaz, parametre olarak aktarılır veya DB'ye kaydedilir.
    }
}`,
      fixExplanation: 'Servisler tamamen durumsuz (stateless) tasarlanır; tüm sınıf alanları final olarak tanımlanır ve thread-safe sınıflar (java.time) kullanılır.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'ThreadSafetyArchTest.java',
      code: `@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring servisleri singleton'dır; değişken durum (mutable state) barındıramaz.");`,
      explanation: 'ArchUnit kuralı, servis sınıflarındaki tüm alanların final olmasını zorunlu kılarak sonradan değiştirilebilir durumları engeller.'
    },
    impact: 'Kullanıcı A\'nın faturası Kullanıcı B\'nin oturumuna yazılır; banka hesap bakiyeleri eşzamanlı isteklerde sıfırlanır veya şişer.',
    deepDiveMarkdown: `### Singleton ve Multi-Threading
Tomcat her gelen HTTP isteği için thread havuzundan (Worker Thread) ayrı bir iş parçacığı tahsis eder. Ancak bu 200 iş parçacığının tamamı aynı \`CalculationService\` nesnesini paylaşır. Bellek senkronizasyonu olmayan paylaşımlı alanlar veri felaketine davetiyedir.`
  },
  {
    id: 'sql-spel-injection',
    category: 'security',
    categoryLabel: 'Enjeksiyon Saldırıları',
    title: 'Native Query Dize Birleştirme & SpEL Enjeksiyonu',
    summary: 'LLM\'ler JPA yerel sorgularında ve dinamik sıralamalarda dize birleştirme (+) kullanarak SQLi ve SpEL açığı üretir.',
    dangerBadge: 'Kritik: Veritabanı Ele Geçirme & RCE',
    badCode: {
      filename: 'ProductRepository.java (Kusurlu LLM Kodu)',
      code: `@Repository
public class ProductRepository {
    @PersistenceContext
    private EntityManager em;

    // TUZAK 1: SQL Injection! Parametre bağlama yerine dize birleştirme (+) yapılmış!
    public List<Product> searchProducts(String category) {
        String sql = "SELECT * FROM products WHERE category = '" + category + "'";
        return em.createNativeQuery(sql, Product.class).getResultList();
    }

    // TUZAK 2: SpEL Enjeksiyonu -> Kullanıcı girdisi doğrudan SpelExpressionParser ile çalıştırılıyor!
    public Object evaluateExpression(String userInput) {
        ExpressionParser parser = new SpelExpressionParser();
        return parser.parseExpression(userInput).getValue(); // Uzaktan Kod Çalıştırma (RCE)!
    }
}`,
      flawExplanation: 'Girdi temizliği ve parametreli sorgu (:param) kullanılmadığında saldırgan SQL payload\'ları veya T(java.lang.Runtime).getRuntime().exec() komutları enjekte edebilir.'
    },
    goodCode: {
      filename: 'ProductRepository.java (Production Çözümü)',
      code: `public interface ProductRepository extends JpaRepository<Product, Long> {
    // ÇÖZÜM 1: Parametreli JPQL / Native Query (SQL Injection İmkansız)
    @Query("SELECT p FROM Product p WHERE p.category = :category")
    List<Product> searchProducts(@Param("category") String category);

    // ÇÖZÜM 2: Beyaz Liste (Whitelist) Doğrulaması ile Dinamik Sıralama
    default Pageable createSafePageable(int page, int size, String sortProperty) {
        Set<String> ALLOWED_SORT_FIELDS = Set.of("name", "price", "createdAt");
        if (!ALLOWED_SORT_FIELDS.contains(sortProperty)) {
            throw new IllegalArgumentException("Geçersiz sıralama alanı!");
        }
        return PageRequest.of(page, size, Sort.by(sortProperty));
    }
}`,
      fixExplanation: 'Adlandırılmış parametreler (@Param) ve sıralama alanları için katı beyaz liste (whitelist) kontrolü uygulanır.'
    },
    guardrailCode: {
      tool: 'Semgrep',
      filename: 'semgrep-sqli-rules.yml',
      code: `rules:
  - id: spring-jpa-native-query-concatenation
    languages: [java]
    message: "JPA native sorgularında dize birleştirme (+) SQL Injection'a yol açar!"
    severity: ERROR
    pattern-either:
      - pattern: $EM.createNativeQuery("..." + $VAR + "...", ...)
      - pattern: @Query(value = "..." + $VAR + "...", nativeQuery = true)`,
      explanation: 'Semgrep kuralı, createNativeQuery veya @Query içinde dize birleştirme tespit ettiğinde derlemeyi durdurur.'
    },
    impact: 'Saldırgan veritabanındaki tüm tabloları silebilir (DROP TABLE) veya SpEL ile sunucu işletim sisteminde komut çalıştırabilir.',
    deepDiveMarkdown: `### SpEL (Spring Expression Language) Zafiyeti
SpEL, Java çalışma zamanında tam yansıma (reflection) yeteneğine sahiptir. Eğer bir REST uç noktası kullanıcıdan gelen bir şablonu veya kuralı SpEL ile çözümlerse, saldırgan \`T(java.lang.Runtime).getRuntime().exec("rm -rf /")\` gibi komutları tek satırda tetikleyebilir.`
  }
];

export const VIBE_CODING_PATTERNS_EN: VibeCodingPattern[] = [
  {
    id: 'aop-self-invocation',
    category: 'aop',
    categoryLabel: 'AOP Proxy & Transactions',
    title: 'AOP Self-Invocation Bypass Trap',
    summary: 'Calling an internal @Transactional method using "this." within the same class bypasses the Spring CGLIB Dynamic Proxy.',
    dangerBadge: 'Critical: Zero Transaction / Silent Data Corruption',
    badCode: {
      filename: 'OrderService.java (Flawed AI Code)',
      code: `@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // Public entrypoint without @Transactional
    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // PITFALL: Direct internal method call (this.saveSingleOrder)
            // Bypasses the Spring CGLIB Proxy; @Transactional NEVER TRIGGERS!
            this.saveSingleOrder(req);
        }
    }

    @Transactional
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            // Even when an exception is thrown, no rollback occurs!
            throw new IllegalArgumentException("Invalid amount");
        }
    }
}`,
      flawExplanation: 'Spring applies declarative annotations via dynamic AOP proxy wrappers around beans. Direct "this.method()" calls execute directly on the raw POJO target instance, completely bypassing proxy interceptors.'
    },
    goodCode: {
      filename: 'OrderService.java & OrderProcessor.java (Production Fix)',
      code: `// SOLUTION: Delegate transactional execution to a dedicated bean
@Service
@RequiredArgsConstructor
public class OrderBatchService {
    private final SingleOrderProcessor singleOrderProcessor;

    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // External bean call -> Spring CGLIB Proxy intercepts -> Starts Transaction!
            singleOrderProcessor.saveSingleOrder(req);
        }
    }
}

@Service
@RequiredArgsConstructor
public class SingleOrderProcessor {
    private final OrderRepository orderRepository;

    @Transactional(rollbackFor = Exception.class)
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            throw new IllegalArgumentException("Invalid amount");
        }
    }
}`,
      fixExplanation: 'Extracting transactional operations into a separate Spring bean guarantees that all invocations pass through Spring\'s AOP transaction interceptor.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'ArchitectureTest.java (CI/CD Quality Gate)',
      code: `@AnalyzeClasses(packages = "com.mastery.springboot")
public class TransactionRulesTest {

    @ArchTest
    public static final ArchRule transactional_methods_must_be_public =
        methods().that().areAnnotatedWith(Transactional.class)
        .should().bePublic()
        .because("AOP proxies can only intercept public method invocations.");
}`,
      explanation: 'ArchUnit statically verifies that @Transactional annotations adhere to architectural boundaries and proxy accessibility rules during CI.'
    },
    impact: 'Partial database writes are permanently committed. When downstream failures occur, transactions fail to roll back, resulting in corrupted financial/inventory state.',
    deepDiveMarkdown: `### How AOP Dynamic Proxies Work
When you annotate a Spring bean with \`@Transactional\`, Spring swaps the raw POJO with a **CGLIB Dynamic Proxy**.

\`\`\`
Client -> [ Spring Proxy (Transaction Interceptor: BEGIN TX) ] -> [ Raw Service Bean ] -> [ COMMIT / ROLLBACK ]
\`\`\`

If a method calls another method on \`this\`, Java bypasses the proxy container entirely. **No transaction is ever created!**`
  },
  {
    id: 'checked-exception-rollback',
    category: 'aop',
    categoryLabel: 'AOP Proxy & Transactions',
    title: 'Checked Exception Rollback Omission',
    summary: 'Spring by default only rolls back on RuntimeException and Error. When checked exceptions are thrown, transactions silently commit.',
    dangerBadge: 'High: Silent Commit & Data Inconsistency',
    badCode: {
      filename: 'PaymentService.java (Flawed AI Code)',
      code: `@Service
public class PaymentService {
    @Autowired
    private AccountRepository accountRepo;

    // PITFALL: Missing rollbackFor attribute!
    @Transactional
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException, SQLException {
        accountRepo.decreaseBalance(fromId, amount);
        
        // External banking gateway or filesystem operation throws checked exception:
        if (externalBankFailed()) {
            throw new IOException("Banking provider unreachable!"); 
            // CAVEAT: Because IOException is a Checked Exception,
            // Spring DOES NOT ROLL BACK! The balance deduction is permanently committed!
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,
      flawExplanation: 'Due to legacy EJB compliance, Spring TransactionManager only rolls back unchecked exceptions by default. LLMs rarely include rollbackFor = Exception.class on methods throwing checked exceptions.'
    },
    goodCode: {
      filename: 'PaymentService.java (Production Fix)',
      code: `@Service
@RequiredArgsConstructor
public class PaymentService {
    private final AccountRepository accountRepo;

    // SOLUTION: Explicitly declare rollbackFor = Exception.class
    @Transactional(rollbackFor = Exception.class)
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException {
        accountRepo.decreaseBalance(fromId, amount);
        
        if (externalBankFailed()) {
            throw new IOException("Banking provider unreachable!"); 
            // SAFE: Spring triggers rollback across all Exception subclasses.
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,
      fixExplanation: 'Configuring @Transactional(rollbackFor = Exception.class) ensures consistent atomicity across both checked and unchecked exceptions.'
    },
    guardrailCode: {
      tool: 'Semgrep',
      filename: 'semgrep-spring-rules.yml',
      code: `rules:
  - id: spring-transactional-missing-rollback-for
    languages: [java]
    message: "@Transactional must specify rollbackFor = Exception.class when throwing checked exceptions."
    severity: WARNING
    pattern: |
      @Transactional
      $RET $FUNC(...) throws $EX { ... }`,
      explanation: 'Semgrep catches methods throwing checked exceptions with unadorned @Transactional annotations in CI/CD.'
    },
    impact: 'Funds are debited without corresponding credits when third-party network or IO failures occur, causing catastrophic ledger discrepancies.',
    deepDiveMarkdown: `### Spring Rollback Defaults
* \`RuntimeException\` -> Rollback triggered ✅
* \`Error\` -> Rollback triggered ✅
* \`IOException\`, \`SQLException\`, custom \`Exception\` -> **SILENTLY COMMITTED (Unexpected Default!) ❌**`
  },
  {
    id: 'bola-idor-vulnerability',
    category: 'security',
    categoryLabel: 'API Security & BOLA',
    title: 'Broken Object Level Authorization (BOLA / IDOR)',
    summary: 'AI models query database entities with findById(id) without validating whether the authenticated user is the legitimate resource owner.',
    dangerBadge: 'Critical Security Risk (OWASP API #1)',
    badCode: {
      filename: 'InvoiceController.java (Flawed AI Code)',
      code: `@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceRepository invoiceRepo;
    @Autowired
    private InvoiceMapper mapper;

    // PITFALL: Even with authentication enabled, any authenticated user
    // can request /api/invoices/999 to download another tenant's confidential invoice!
    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponse> getInvoice(@PathVariable Long id) {
        return invoiceRepo.findById(id)
                .map(mapper::toDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}`,
      flawExplanation: 'The model assumes general endpoint authentication is sufficient, omitting object-level tenant or user ownership checks.'
    },
    goodCode: {
      filename: 'InvoiceController.java (Production Fix)',
      code: `@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {
    private final InvoiceService invoiceService;

    @GetMapping("/{id}")
    @PreAuthorize("@securityService.isInvoiceOwner(#id, authentication)")
    public ResponseEntity<InvoiceResponse> getInvoice(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        
        InvoiceResponse response = invoiceService.getInvoiceForUser(id, userDetails.getUsername());
        return ResponseEntity.ok(response);
    }
}

// In repository: findByIdAndTenantId(id, currentTenantId);`,
      fixExplanation: 'Enforcing SpEL method security (@PreAuthorize) alongside multi-tenant repository query filters blocks unauthorized horizontal privilege escalation with 403 Forbidden.'
    },
    guardrailCode: {
      tool: 'MockMvc Negative Test',
      filename: 'InvoiceSecurityNegativeTest.java',
      code: `@SpringBootTest
@AutoConfigureMockMvc
public class InvoiceSecurityNegativeTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "attacker_bob", roles = "USER")
    void getInvoice_WhenAccessingOtherUserInvoice_ShouldReturnForbidden() throws Exception {
        // Alice's invoice ID: 101L
        mockMvc.perform(get("/api/invoices/101"))
               .andExpect(status().isForbidden()); // If HTTP 200 is returned, CI build fails!
    }
}`,
      explanation: 'Automated negative MockMvc integration tests simulate adversary behavior to verify that cross-tenant requests are denied.'
    },
    impact: 'Attackers perform horizontal enumeration across sequential IDs to exfiltrate private customer invoices, PII, and financial records.',
    deepDiveMarkdown: `### Why BOLA is the #1 Vulnerability in AI-Generated Code
LLMs naturally map path variables directly to repository finders. Verifying resource ownership requires integrating contextual identity tokens (\`Principal\`) with query filters, which models omit unless explicitly instructed.`
  },
  {
    id: 'actuator-exposure',
    category: 'security',
    categoryLabel: 'Configuration & Exposure',
    title: 'Spring Boot Actuator Endpoint Overexposure',
    summary: 'AI configs frequently include management.endpoints.web.exposure.include=* which leaks credentials, heapdumps, and enables remote code execution.',
    dangerBadge: 'Critical: RCE & Credential Leakage',
    badCode: {
      filename: 'application.yml (Flawed AI Config)',
      code: `management:
  endpoints:
    web:
      exposure:
        # CATASTROPHIC FLAW: Exposes all actuator endpoints to the public internet!
        include: "*"
  endpoint:
    health:
      show-details: always
    env:
      enabled: true
    heapdump:
      enabled: true`,
      flawExplanation: 'Using the asterisk wildcard opens /actuator/env, /actuator/heapdump, and /actuator/beans without authentication, allowing unauthenticated memory extraction.'
    },
    goodCode: {
      filename: 'application.yml (Production Standard)',
      code: `management:
  server:
    port: 8081 # Bind Actuator to an isolated internal management port
  endpoints:
    web:
      exposure:
        # Strict minimal whitelist for liveness & Prometheus scraping
        include: "health,info,prometheus"
      base-path: /internal-metrics
  endpoint:
    health:
      show-details: when_authorized
      probes:
        enabled: true
    env:
      enabled: false
    heapdump:
      enabled: false`,
      fixExplanation: 'Only operational health probes are whitelisted, and management traffic is bound to an isolated port.'
    },
    guardrailCode: {
      tool: 'Config Guard',
      filename: 'ActuatorConfigTest.java',
      code: `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ActuatorSecurityTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void sensitiveEndpoints_MustBeClosed() {
        ResponseEntity<String> envResp = restTemplate.getForEntity("/actuator/env", String.class);
        assertThat(envResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN, HttpStatus.UNAUTHORIZED);

        ResponseEntity<String> heapResp = restTemplate.getForEntity("/actuator/heapdump", String.class);
        assertThat(heapResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN);
    }
}`,
      explanation: 'Automated integration tests ensure sensitive operational endpoints are completely inaccessible to external callers.'
    },
    impact: 'Attackers download JVM heap dumps, extract plain-text database passwords, JWT secrets, and AWS access keys within minutes.',
    deepDiveMarkdown: `### 2024 State of API Exposure Finding
Overexposed Spring Boot Actuator endpoints remain one of the top 3 root causes for automated enterprise cloud credential compromises.`
  },
  {
    id: 'n-plus-one-and-osiv',
    category: 'jpa',
    categoryLabel: 'JPA / Hibernate & Performance',
    title: 'N+1 Query Explosion & Open-Session-In-View (OSIV) Exhaustion',
    summary: 'AI code relies on derived queries with lazy relationships, triggering hundreds of subqueries in loops and exhausting HikariCP connection pools.',
    dangerBadge: 'High: DB Connection Pool Starvation',
    badCode: {
      filename: 'CustomerOrderService.java (Flawed AI Code)',
      code: `@Service
public class CustomerOrderService {
    @Autowired
    private CustomerRepository customerRepo;

    public List<CustomerSummaryDto> getAllCustomerOrders() {
        // Query 1: select * from customers (returns 100 rows)
        List<Customer> customers = customerRepo.findAll();

        return customers.stream().map(c -> {
            // N QUERIES: Triggers separate "select * from orders where customer_id = ?" for each row!
            // Total: 1 + 100 = 101 SQL queries executed!
            int orderCount = c.getOrders().size(); 
            return new CustomerSummaryDto(c.getName(), orderCount);
        }).toList();
    }
}`,
      flawExplanation: 'Invoking lazy collection getters inside streams triggers separate SQL statements for every parent record. Leaving OSIV enabled locks DB connections until JSON rendering concludes.'
    },
    goodCode: {
      filename: 'CustomerRepository.java (Production Fix)',
      code: `public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // FIX 1: Explicit JOIN FETCH reduces queries to a single roundtrip
    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.orders")
    List<Customer> findAllWithOrders();

    // FIX 2 (Highest Performance): Direct DTO Constructor Projection
    @Query("SELECT new com.mastery.dto.CustomerSummaryDto(c.name, COUNT(o)) " +
           "FROM Customer c LEFT JOIN c.orders o GROUP BY c.id, c.name")
    List<CustomerSummaryDto> fetchCustomerSummaries();
}

// In application.yml:
// spring.jpa.open-in-view: false`,
      fixExplanation: 'JOIN FETCH or direct JPQL constructor expressions collapse N+1 roundtrips into a single query while disabling OSIV.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'JpaPerformanceRulesTest.java',
      code: `// QuickPerf SQL query assertion
@Test
@ExpectQueries(max = 1) // Fails build if more than 1 query is executed
void getAllCustomerOrders_ShouldExecuteSingleQuery() {
    customerOrderService.getAllCustomerOrders();
}`,
      explanation: 'QuickPerf assertions enforce strict SQL query count budgets during CI integration testing.'
    },
    impact: 'Database CPU spikes to 100%, HikariCP pools exhaust all worker connections, and application endpoints fail with HTTP 504 Gateway Timeouts.',
    deepDiveMarkdown: `### Why OSIV Must Be Disabled
With Open-Session-In-View active, database connections are held open through Controller execution and Jackson serialization, causing massive connection starvation under concurrent load.`
  },
  {
    id: 'entity-exposure-mass-assignment',
    category: 'jpa',
    categoryLabel: 'JPA & Clean Architecture',
    title: 'Direct Entity Exposure & Mass Assignment Vulnerabilities',
    summary: 'Returning @Entity models directly from @RestController methods leaks sensitive fields, causes cyclical Jackson recursion, and enables privilege escalation.',
    dangerBadge: 'High: Information Disclosure & Mass Assignment',
    badCode: {
      filename: 'UserController.java (Flawed AI Code)',
      code: `@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepo;

    // PITFALL 1: Direct entity exposure leaks password hashes & internal metadata
    // PITFALL 2: Bidirectional relationships cause Jackson infinite serialization loops!
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepo.findById(id).orElseThrow();
    }

    // PITFALL 3: Mass Assignment -> Client can inject "role: ADMIN" in JSON body!
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userUpdate) {
        userUpdate.setId(id);
        return userRepo.save(userUpdate);
    }
}`,
      flawExplanation: 'JPA Entities represent internal persistence models, not API contracts. Binding request bodies directly to entities enables unauthorized property modification.'
    },
    goodCode: {
      filename: 'UserController.java & UserDto.java (Production Fix)',
      code: `@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable Long id) {
        UserResponseDto dto = userService.getUserById(id);
        return ResponseEntity.ok(dto); // Sanitized DTO response
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDto> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserUpdateRequestDto request) {
        UserResponseDto updated = userService.updateUser(id, request);
        return ResponseEntity.ok(updated);
    }
}`,
      fixExplanation: 'Decoupling API contracts with strict DTO records and validation ensures clean schema isolation and prevents mass assignment.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'LayeringArchTest.java',
      code: `@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity classes must not be exposed outside controller endpoints; use DTOs.");`,
      explanation: 'ArchUnit statically prohibits controller methods from returning raw JPA Entity types.'
    },
    impact: 'Attackers escalate privileges by submitting JSON payloads containing unauthorized administrative flags or internal tenant IDs.',
    deepDiveMarkdown: `### Enterprise DTO Best Practices
1. **Security:** Omit credential hashes, MFA secrets, and audit metadata.
2. **Performance:** Eliminate cyclic object graphs and unnecessary relationship fetching.
3. **Contract Stability:** Isolate public API contracts from underlying database schema refactors.`
  },
  {
    id: 'stateful-singleton-concurrency',
    category: 'singleton',
    categoryLabel: 'Singleton & Concurrency',
    title: 'Mutable State in Spring Singletons',
    summary: 'Spring beans are singletons by default. Defining mutable fields or thread-unsafe utilities like SimpleDateFormat causes severe race conditions.',
    dangerBadge: 'Critical: Race Condition & Data Corruption',
    badCode: {
      filename: 'CalculationService.java (Flawed AI Code)',
      code: `@Service
public class CalculationService {
    // DEADLY PITFALL: Mutable instance fields inside a Singleton bean!
    // Concurrent client threads mutate shared state without synchronization!
    private List<String> auditLogs = new ArrayList<>();
    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); // Thread-unsafe!

    public void processTransaction(String user, Date date) {
        // Concurrent requests corrupt list pointers and throw ConcurrentModificationException!
        auditLogs.add(user + " - " + sdf.format(date));
    }
}`,
      flawExplanation: 'Spring services are singletons shared across hundreds of worker threads. Mutable instance variables lead to race conditions and cross-request data leaks.'
    },
    goodCode: {
      filename: 'CalculationService.java (Production Fix)',
      code: `@Service
public class CalculationService {
    // FIX 1: Immutable and Thread-safe Java 8+ DateTimeFormatter
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE;

    // FIX 2: Completely stateless service design. State belongs in local scope or database.
    public void processTransaction(String user, LocalDate date) {
        String logEntry = user + " - " + date.format(FORMATTER);
        // State is passed via method parameters or written to persistence
    }
}`,
      fixExplanation: 'Services must remain completely stateless with final dependencies, utilizing thread-safe java.time utilities.'
    },
    guardrailCode: {
      tool: 'ArchUnit',
      filename: 'ThreadSafetyArchTest.java',
      code: `@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring service beans are singletons and must remain completely stateless.");`,
      explanation: 'ArchUnit verifies that non-static service fields are immutable (final) to prevent concurrency defects.'
    },
    impact: 'User A\'s financial data is written to User B\'s ledger, or server threads crash with unhandled ConcurrentModificationExceptions.',
    deepDiveMarkdown: `### Singleton Lifecycle & Tomcat Worker Threads
Tomcat dispatches requests across separate worker threads. However, all threads access the exact same singleton instance. Mutable state without explicit thread synchronization causes non-deterministic race conditions.`
  },
  {
    id: 'sql-spel-injection',
    category: 'security',
    categoryLabel: 'Injection Attacks',
    title: 'Native Query Concatenation & SpEL Injection',
    summary: 'AI models construct dynamic JPA native queries and SpEL evaluations using string concatenation, enabling SQLi and Remote Code Execution (RCE).',
    dangerBadge: 'Critical: Full Database Takeover & RCE',
    badCode: {
      filename: 'ProductRepository.java (Flawed AI Code)',
      code: `@Repository
public class ProductRepository {
    @PersistenceContext
    private EntityManager em;

    // PITFALL 1: SQL Injection via raw string concatenation (+)
    public List<Product> searchProducts(String category) {
        String sql = "SELECT * FROM products WHERE category = '" + category + "'";
        return em.createNativeQuery(sql, Product.class).getResultList();
    }

    // PITFALL 2: SpEL Expression Injection -> Directly evaluating raw user input!
    public Object evaluateExpression(String userInput) {
        ExpressionParser parser = new SpelExpressionParser();
        return parser.parseExpression(userInput).getValue(); // Remote Code Execution (RCE)!
    }
}`,
      flawExplanation: 'Concatenating unsanitized input into native queries or evaluating untrusted strings via SpelExpressionParser enables arbitrary SQL execution and JVM command injection.'
    },
    goodCode: {
      filename: 'ProductRepository.java (Production Fix)',
      code: `public interface ProductRepository extends JpaRepository<Product, Long> {
    // FIX 1: Named query parameters neutralize SQL Injection
    @Query("SELECT p FROM Product p WHERE p.category = :category")
    List<Product> searchProducts(@Param("category") String category);

    // FIX 2: Whitelist validation for dynamic sorting
    default Pageable createSafePageable(int page, int size, String sortProperty) {
        Set<String> ALLOWED_SORT_FIELDS = Set.of("name", "price", "createdAt");
        if (!ALLOWED_SORT_FIELDS.contains(sortProperty)) {
            throw new IllegalArgumentException("Invalid sort field!");
        }
        return PageRequest.of(page, size, Sort.by(sortProperty));
    }
}`,
      fixExplanation: 'Utilizing named parameters (@Param) and strict field whitelisting prevents injection vulnerabilities.'
    },
    guardrailCode: {
      tool: 'Semgrep',
      filename: 'semgrep-sqli-rules.yml',
      code: `rules:
  - id: spring-jpa-native-query-concatenation
    languages: [java]
    message: "String concatenation inside JPA native queries leads to SQL Injection!"
    severity: ERROR
    pattern-either:
      - pattern: $EM.createNativeQuery("..." + $VAR + "...", ...)
      - pattern: @Query(value = "..." + $VAR + "...", nativeQuery = true)`,
      explanation: 'Semgrep halts builds upon detecting string concatenation within native queries.'
    },
    impact: 'Attackers drop database schemas or execute shell commands on the host OS via Java reflection within SpEL.',
    deepDiveMarkdown: `### SpEL Reflection Capabilities
Spring Expression Language has unrestricted access to Java reflection. Evaluating unvetted user expressions enables payload injection like \`T(java.lang.Runtime).getRuntime().exec("rm -rf /")\`.`
  }
];

export const ARCHUNIT_RULES_TR: ArchUnitRuleItem[] = [
  {
    id: 'rule-no-entities-in-controllers',
    title: 'Controller Katmanı Entity Döndüremez',
    category: 'Mimari İzolasyon',
    description: 'JPA Entity sınıflarının doğrudan REST Controller metotlarından dönmesini engelleyerek DTO kullanımını zorunlu kılar.',
    code: `@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity sınıfları doğrudan dışarıya açılamaz; DTO kullanılmalıdır.");`,
    purpose: 'Mass Assignment ve döngüsel serileştirme (StackOverflow) risklerini CI aşamasında önler.'
  },
  {
    id: 'rule-services-stateless',
    title: 'Servisler Durumsuz (Stateless & Final) Olmalıdır',
    category: 'Thread Safety',
    description: 'Spring @Service sınıflarındaki tüm statik olmayan alanların "final" olmasını zorunlu tutarak Singleton thread safety sağlar.',
    code: `@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring servisleri singleton'dır; değişken durum (mutable state) barındıramaz.");`,
    purpose: 'Çoklu iş parçacığı (multi-threading) altında veri ezilmesi ve race condition risklerini sıfırlar.'
  },
  {
    id: 'rule-layered-architecture',
    title: 'Katı Katman Bağımlılık Hiyerarşisi',
    category: 'Clean Architecture',
    description: 'Controller sadece Service\'e erişebilir; Controller doğrudan Repository katmanına erişemez.',
    code: `@ArchTest
public static final ArchRule layered_architecture_must_be_respected =
    layeredArchitecture()
    .consideringAllDependencies()
    .layer("Controller").definedBy("..controller..")
    .layer("Service").definedBy("..service..")
    .layer("Persistence").definedBy("..repository..")
    .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
    .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller")
    .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service");`,
    purpose: 'İş kurallarının Controller içine sızmasını engeller, gevşek kuplaj sağlar.'
  },
  {
    id: 'rule-transactional-public',
    title: '@Transactional Metotlar Public Olmalıdır',
    category: 'AOP Proxy Bütünlüğü',
    description: 'CGLIB Proxy sınıflarının private/final metotları override edememe zaafını yakalar.',
    code: `@ArchTest
public static final ArchRule transactional_methods_must_be_public =
    methods().that().areAnnotatedWith(Transactional.class)
    .should().bePublic()
    .because("Spring AOP Proxy'leri yalnızca public metotlara transaction uygulayabilir.");`,
    purpose: 'Sessizce çalışmayan etkisiz @Transactional metotlarını derleme anında engeller.'
  }
];

export const ARCHUNIT_RULES_EN: ArchUnitRuleItem[] = [
  {
    id: 'rule-no-entities-in-controllers',
    title: 'Controllers Must Not Return Entities',
    category: 'Architectural Isolation',
    description: 'Prohibits JPA Entity classes from being returned directly by REST Controller methods, enforcing strict DTO usage.',
    code: `@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity classes must not be exposed outside controller endpoints; use DTOs.");`,
    purpose: 'Eliminates Mass Assignment and cyclical JSON serialization errors during CI builds.'
  },
  {
    id: 'rule-services-stateless',
    title: 'Services Must Be Stateless (Immutable Fields)',
    category: 'Thread Safety',
    description: 'Requires all non-static fields within @Service beans to be marked "final", enforcing thread-safe singleton design.',
    code: `@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring service beans are singletons and must remain completely stateless.");`,
    purpose: 'Guarantees thread-safety and prevents race conditions under high concurrent traffic.'
  },
  {
    id: 'rule-layered-architecture',
    title: 'Strict Layered Architectural Boundaries',
    category: 'Clean Architecture',
    description: 'Ensures controllers only communicate with services, preventing direct repository access from presentation layers.',
    code: `@ArchTest
public static final ArchRule layered_architecture_must_be_respected =
    layeredArchitecture()
    .consideringAllDependencies()
    .layer("Controller").definedBy("..controller..")
    .layer("Service").definedBy("..service..")
    .layer("Persistence").definedBy("..repository..")
    .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
    .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller")
    .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service");`,
    purpose: 'Prevents business logic leakage into controllers and ensures maintainable decoupling.'
  },
  {
    id: 'rule-transactional-public',
    title: '@Transactional Methods Must Be Public',
    category: 'AOP Proxy Integrity',
    description: 'Verifies that transactional methods can be intercepted by CGLIB dynamic subclassing proxies.',
    code: `@ArchTest
public static final ArchRule transactional_methods_must_be_public =
    methods().that().areAnnotatedWith(Transactional.class)
    .should().bePublic()
    .because("Spring AOP proxies can only intercept public method invocations.");`,
    purpose: 'Catches silent runtime transaction failures caused by private/final annotations.'
  }
];

export const AI_PROMPT_GUARDRAILS_TR: AiPromptGuardrail[] = [
  {
    id: 'ai-pr-reviewer',
    title: 'Spring Boot Güvenlik & AOP PR Denetçi İstemi (AI Code Reviewer)',
    targetRole: 'GitHub Actions / GitLab CI LLM Botu',
    description: 'Yapay zekâ tarafından üretilen PR\'ları AOP proxy baypası, BOLA yetkilendirme açığı ve N+1 sorgu yönünden tarayan uzman denetçi istemi.',
    systemPrompt: `Sen kıdemli bir Kurumsal Spring Boot ve Uygulama Güvenliği (AppSec) Denetçisisin.
Sana iletilen Java / Spring Boot kod diff'lerini aşağıdaki 5 tavizsiz kurala göre incele:

1. [AOP PROXY KONTROLÜ]: Aynı sınıf içinde "this.metot()" şeklinde @Transactional, @Async veya @Cacheable metot çağrısı var mı? (Varsa CRITICAL bildir).
2. [ROLLBACK KONTROLÜ]: @Transactional anotasyonlarında "rollbackFor = Exception.class" eksik bırakılmış ve metot Checked Exception fırlatıyor mu?
3. [BOLA / IDOR]: Veritabanından findById(id) ile nesne çeken uç noktalarda kimlik doğrulaması yapılmış kullanıcının (Principal/Tenant) sahiplik denetimi eksik mi?
4. [PERFORMANS & JPA]: Döngü içinde lazy getter çağrısı veya N+1 sorgu riski var mı? JOIN FETCH veya DTO projection öner.
5. [SINGLETON GÜVENLİĞİ]: @Service veya @RestController sınıflarında "final" olmayan değişken alan (mutable state) var mı?

Bulduğun her kusur için:
- 🔴 Kusurlu Satır & Açıklama
- 🛡️ Güvenlik/Mimari Etkisi
- 🟢 Düzeltilmiş Güvenli Kod Bloğu formatında yanıt üret.`,
    exampleFinding: 'OrderService.java:24 satırında this.saveSingleOrder(req) çağrısı tespit edildi. Spring AOP proxy\'si baypas edildiği için işlem rollback yapmayacaktır.'
  },
  {
    id: 'threat-model-extractor',
    title: 'Otomatik Tehdit Modellemesi & Yetkilendirme Matrisi Çıkarıcı',
    targetRole: 'API Güvenlik & Swagger Denetçisi',
    description: 'REST Controller ve OpenAPI şemalarından anonim, rol bazlı ve nesne düzeyinde sahiplik gerektiren uç noktaları ayrıştıran tehdit modelleyici.',
    systemPrompt: `Aşağıdaki Spring Boot Controller ve SecurityFilterChain kodlarını analiz ederek bir Yetkilendirme ve Tehdit Matrisi çıkar:

Tablo Sütunları:
- HTTP Yöntemi & Uç Nokta Yolu
- Erişim Seviyesi (permitAll / hasRole / Object-Level Ownership)
- BOLA Riski (Yüksek / Orta / Düşük)
- Gerekli Güvenlik Anotasyonu (@PreAuthorize)

Özellikle ID parametresi alan GET/PUT/DELETE uç noktalarında kullanıcı sahiplik filtresinin bulunup bulunmadığını vurgula.`,
    exampleFinding: 'GET /api/invoices/{id} uç noktası sadece @PreAuthorize("hasRole(\'USER\')") içeriyor; ancak BOLA koruması eksik. Kullanıcı başkasının fatura ID\'sine erişebilir.'
  }
];

export const AI_PROMPT_GUARDRAILS_EN: AiPromptGuardrail[] = [
  {
    id: 'ai-pr-reviewer',
    title: 'Spring Boot Security & AOP PR Reviewer Prompt',
    targetRole: 'GitHub Actions / GitLab CI LLM Bot',
    description: 'Specialized system prompt to audit Spring Boot PRs for AOP bypasses, BOLA vulnerabilities, and N+1 query patterns.',
    systemPrompt: `You are a Principal Spring Boot and Application Security (AppSec) Auditor.
Audit the provided Java/Spring Boot code diff against these 5 strict architectural rules:

1. [AOP PROXY CHECK]: Does the code contain self-invocation (this.method()) calling @Transactional, @Async, or @Cacheable? (Flag as CRITICAL).
2. [ROLLBACK CHECK]: Does @Transactional lack "rollbackFor = Exception.class" on methods throwing checked exceptions?
3. [BOLA / IDOR]: Does findById(id) lack resource ownership/tenant verification against the authenticated Principal?
4. [PERFORMANCE & JPA]: Are lazy collections accessed within loops without JOIN FETCH or DTO projections?
5. [SINGLETON SAFETY]: Are there mutable, non-final fields inside @Service or @RestController singleton beans?

For every finding provide:
- 🔴 Flawed Line & Vulnerability
- 🛡️ Architectural/Security Impact
- 🟢 Hardened Production Code Fix.`,
    exampleFinding: 'OrderService.java:24 invokes this.saveSingleOrder(req). AOP dynamic proxy is bypassed, completely disabling transaction rollback.'
  },
  {
    id: 'threat-model-extractor',
    title: 'Automated Threat Modeling & Authorization Matrix Generator',
    targetRole: 'API Security & OpenAPI Auditor',
    description: 'Extracts comprehensive endpoint permission matrices from Controller definitions to identify missing object-level authorization checks.',
    systemPrompt: `Analyze the provided Spring Boot Controllers and SecurityFilterChain configuration to construct an Authorization Threat Matrix:

Table Columns:
- HTTP Method & Path
- Access Level (permitAll / hasRole / Object-Level Ownership)
- BOLA Risk Rating (High / Medium / Low)
- Required Security Guardrail (@PreAuthorize)

Highlight any parameterized GET/PUT/DELETE endpoints missing user/tenant ownership filters.`,
    exampleFinding: 'GET /api/invoices/{id} is protected only by role-based access; object-level tenant ownership is missing, exposing horizontal IDOR.'
  }
];

export const AUDIT_MATRIX_TR: AuditMatrixRow[] = [
  {
    area: 'BOLA / IDOR',
    badPattern: 'findById(id) çağrısında sahiplik veya kiracı kontrolü yapmamak.',
    impact: 'Yetkisiz veri erişimi, veri sızıntısı ve veri tahrifatı.',
    tool: 'DAST (StackHawk, OWASP ZAP), Semgrep',
    aiVerification: 'OpenAPI analizi ile yetkilendirme matrisi çıkarma; Negatif MockMvc testleri.'
  },
  {
    area: 'AOP Self-Invocation',
    badPattern: 'Servis içi this.transactionalMethod() çağrısı.',
    impact: 'İşlemin başlatılamaması, sessiz veri tutarsızlığı.',
    tool: 'ArchUnit, SonarQube',
    aiVerification: 'Soyut sözdizim ağacı (AST) analiziyle sınıf içi çağrı taraması.'
  },
  {
    area: 'Checked Exception Rollback',
    badPattern: '@Transactional yazıp rollbackFor parametresini atlamak.',
    impact: 'Hata anında veri tabanı geri almasının çalışmaması.',
    tool: 'Semgrep özel kuralı, SonarQube',
    aiVerification: 'Kod inceleme promptuyla istisna yönetimi denetimi.'
  },
  {
    area: 'Actuator İfşası',
    badPattern: 'exposure.include=* ile tüm portları dışarı açmak.',
    impact: 'Çevre değişkenleri, parola ve bellek dökümü sızıntısı.',
    tool: 'Checkov, Trivy, Kube-bench',
    aiVerification: 'application.yml yapılandırma doğrulama istemi.'
  },
  {
    area: 'N+1 Sorgu Problemi',
    badPattern: 'İlişkili varlıkları döngüde lazy getter ile çağırmak.',
    impact: 'Veri tabanı darboğazı, yüksek gecikme (latency).',
    tool: 'Hibernate sorgu logları, QuickPerf',
    aiVerification: 'JPA repository çağrılarında JOIN FETCH varlık kontrolü.'
  },
  {
    area: 'Entity İfşası',
    badPattern: '@RestController metodundan doğrudan JPA Entity dönmek.',
    impact: 'Aşırı veri ifşası (Mass Assignment), döngüsel çökme.',
    tool: 'ArchUnit',
    aiVerification: 'Metot dönüş tiplerinde paket kontrolü (Entity vs DTO).'
  },
  {
    area: 'Stateful Singleton',
    badPattern: '@Service içine private List<Data> tanımlamak.',
    impact: 'Çoklu iş parçacığında veri ezilmesi (race condition).',
    tool: 'ArchUnit, SpotBugs',
    aiVerification: 'Değişken alanların final olup olmadığının denetimi.'
  },
  {
    area: 'SQL Enjeksiyonu',
    badPattern: '@Query(nativeQuery = true) içine + input eklemek.',
    impact: 'Veri tabanının tamamen ele geçirilmesi.',
    tool: 'CodeQL, Semgrep, Snyk Code',
    aiVerification: 'Taint analizi ve parametreli sorgu kontrolü.'
  }
];

export const AUDIT_MATRIX_EN: AuditMatrixRow[] = [
  {
    area: 'BOLA / IDOR',
    badPattern: 'Missing user/tenant ownership filters in findById(id) queries.',
    impact: 'Unauthorized cross-tenant data access and tampering.',
    tool: 'DAST (StackHawk, OWASP ZAP), Semgrep',
    aiVerification: 'OpenAPI authorization matrix synthesis; Negative MockMvc integration tests.'
  },
  {
    area: 'AOP Self-Invocation',
    badPattern: 'Invoking this.transactionalMethod() within the same service bean.',
    impact: 'Transaction proxy bypass, silent data inconsistency.',
    tool: 'ArchUnit, SonarQube',
    aiVerification: 'AST analysis scanning for internal method invocations.'
  },
  {
    area: 'Checked Exception Rollback',
    badPattern: 'Omitting rollbackFor attribute on checked exception methods.',
    impact: 'Transactions commit despite thrown checked exceptions.',
    tool: 'Semgrep custom rules, SonarQube',
    aiVerification: 'AI Code Review prompt verifying exception hierarchy handling.'
  },
  {
    area: 'Actuator Exposure',
    badPattern: 'Opening all endpoints via exposure.include=* in configuration.',
    impact: 'Plain-text environment secret and heap memory extraction.',
    tool: 'Checkov, Trivy, Kube-bench',
    aiVerification: 'application.yml static inspection and container probe testing.'
  },
  {
    area: 'N+1 Query Explosion',
    badPattern: 'Iterating through lazy entity getters in application loops.',
    impact: 'Database connection pool starvation and high request latency.',
    tool: 'Hibernate query logging, QuickPerf',
    aiVerification: 'JPA repository scan enforcing JOIN FETCH and DTO constructors.'
  },
  {
    area: 'Entity Exposure',
    badPattern: 'Returning JPA @Entity models directly from @RestController methods.',
    impact: 'Mass Assignment privilege escalation and JSON recursion crashes.',
    tool: 'ArchUnit',
    aiVerification: 'Controller return type package boundary verification (Entity vs DTO).'
  },
  {
    area: 'Stateful Singleton',
    badPattern: 'Declaring mutable instance collections inside singleton @Service beans.',
    impact: 'Non-deterministic race conditions across concurrent HTTP worker threads.',
    tool: 'ArchUnit, SpotBugs',
    aiVerification: 'Static validation ensuring all non-static service fields are final.'
  },
  {
    area: 'SQL Injection',
    badPattern: 'String concatenation (+) in @Query(nativeQuery = true) statements.',
    impact: 'Arbitrary database execution and full schema compromise.',
    tool: 'CodeQL, Semgrep, Snyk Code',
    aiVerification: 'Taint tracking and parameter binding enforcement (:param).'
  }
];

export function getVibeCodingData(lang: 'tr' | 'en') {
  return {
    patterns: lang === 'tr' ? VIBE_CODING_PATTERNS_TR : VIBE_CODING_PATTERNS_EN,
    archUnitRules: lang === 'tr' ? ARCHUNIT_RULES_TR : ARCHUNIT_RULES_EN,
    promptGuardrails: lang === 'tr' ? AI_PROMPT_GUARDRAILS_TR : AI_PROMPT_GUARDRAILS_EN,
    auditMatrix: lang === 'tr' ? AUDIT_MATRIX_TR : AUDIT_MATRIX_EN,
    sources: RESEARCH_SOURCES
  };
}
