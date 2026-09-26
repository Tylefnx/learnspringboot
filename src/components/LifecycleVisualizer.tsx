import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  FileCode, 
  Database, 
  ArrowRight,
  Server,
  Sparkles,
  Info
} from 'lucide-react';

interface FlowStep {
  id: string;
  name: string;
  category: string;
  icon: any;
  title: string;
  description: string;
  technicalDetails: string;
  codeSnippet: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    id: 'client',
    name: 'HTTP Client',
    category: 'İstemci',
    icon: Server,
    title: '1. İstemci İstek Gönderir (Client Request)',
    description: 'Tarayıcı, mobil uygulama veya Postman, Spring Boot uygulamasına bir HTTP isteği (GET, POST, vb.) gönderir.',
    technicalDetails: 'Örnek: `POST /api/v1/orders HTTP/1.1` başlığı ile JSON body ve Authorization: Bearer JWT token gönderilir.',
    codeSnippet: `POST /api/v1/orders HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
Content-Type: application/json

{ "productId": 42, "quantity": 2 }`
  },
  {
    id: 'filter-chain',
    name: 'Security Filter Chain',
    category: 'Filtre Katmanı',
    icon: ShieldCheck,
    title: '2. Servlet Filtreleri & Spring Security',
    description: 'İstek DispatcherServlet\'e ulaşmadan önce Servlet Filter zincirinden (OncePerRequestFilter, CORS, CSRF, JWT Filter) geçer.',
    technicalDetails: 'JwtAuthenticationFilter token\'ı çözer, doğrular ve SecurityContextHolder.getContext().setAuthentication(authToken) ile kullanıcı oturumunu kurar.',
    codeSnippet: `// JwtAuthenticationFilter.java
if (jwtService.isTokenValid(jwt, userDetails)) {
    UsernamePasswordAuthenticationToken auth = 
        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    SecurityContextHolder.getContext().setAuthentication(auth);
}
filterChain.doFilter(request, response);`
  },
  {
    id: 'dispatcher-servlet',
    name: 'DispatcherServlet',
    category: 'MVC Çekirdeği',
    icon: Layers,
    title: '3. DispatcherServlet & HandlerMapping',
    description: 'Spring MVC\'nin kalbi olan DispatcherServlet (Front Controller deseni), isteği karşılar ve hangi Controller metodunun çağrılacağını HandlerMapping ile bulur.',
    technicalDetails: 'RequestMappingHandlerMapping tablosunu tarar, URL yolu ve HTTP metoduna uyan `@PostMapping("/api/v1/orders")` metodunu tespit eder.',
    codeSnippet: `// DispatcherServlet.doDispatch(request, response)
HandlerExecutionChain mappedHandler = getHandler(processedRequest);
HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());
ModelAndView mv = ha.handle(processedRequest, response, mappedHandler.getHandler());`
  },
  {
    id: 'controller',
    name: 'RestController',
    category: 'Web Katmanı',
    icon: FileCode,
    title: '4. @RestController & Validasyon (@Valid)',
    description: 'Controller isteği karşılar. Jackson kütüphanesi JSON verisini DTO nesnesine dönüştürür (Deserialization). Jakarta Bean Validation kuralları denetlenir.',
    technicalDetails: 'Eğer validation hatası varsa @RestControllerAdvice devreye girer. Hata yoksa istek iş mantığı için Service katmanına iletilir.',
    codeSnippet: `@PostMapping("/orders")
public ResponseEntity<OrderResponse> createOrder(@Valid @RequestBody CreateOrderRequest req) {
    OrderResponse res = orderService.createOrder(req);
    return ResponseEntity.status(HttpStatus.CREATED).body(res);
}`
  },
  {
    id: 'service',
    name: 'Service Layer (@Transactional)',
    category: 'İş Mantığı',
    icon: Cpu,
    title: '5. İş Mantığı & Transaction Yönetimi (@Service)',
    description: 'Tüm iş kuralları, hesaplamalar, yetki kontrolleri ve veritabanı Transaction sınırları (@Transactional) bu katmanda işletilir.',
    technicalDetails: 'Spring AOP Proxy mekanizması veritabanı transaction\'ını başlatır (BEGIN TRANSACTION). Hata çıkarsa otomatik ROLLBACK yapılır.',
    codeSnippet: `@Service
public class OrderService {
    @Transactional
    public OrderResponse createOrder(CreateOrderRequest req) {
        Product product = productRepository.findById(req.productId())
            .orElseThrow(() -> new NotFoundException("Ürün bulunamadı"));
        product.decreaseStock(req.quantity());
        Order saved = orderRepository.save(new Order(product, req.quantity()));
        return orderMapper.toDto(saved);
    }
}`
  },
  {
    id: 'repository',
    name: 'Spring Data JPA & Hibernate',
    category: 'Veri Katmanı',
    icon: Database,
    title: '6. JpaRepository & Hibernate ORM',
    description: 'Entity nesneleri Hibernate Persistence Context (First-level Cache) üzerinde yönetilir ve veritabanı sorguları (SQL) üretilir.',
    technicalDetails: 'Hibernate, Java Entity nesnelerini ilişkisel veritabanı (RDBMS) tablolarına haritalar ve SQL INSERT/UPDATE komutlarını hazırlar.',
    codeSnippet: `public interface OrderRepository extends JpaRepository<Order, Long> {
    // Spring Data JPA dinamik SQL oluşturur
    List<Order> findByCustomerIdOrderByCreatedAtDesc(Long customerId);
}`
  },
  {
    id: 'database',
    name: 'Database (RDBMS)',
    category: 'Kalıcılık',
    icon: Database,
    title: '7. Veritabanı İşlemi & Yanıt Dönüşü (Commit & Response)',
    description: 'HikariCP bağlantı havuzu üzerinden SQL çalıştırılır, transaction COMMIT edilir ve oluşturulan DTO nesnesi JSON olarak istemciye 201 Created ile geri döner.',
    technicalDetails: 'HTTP 201 Created + Response Body JSON serileştirilerek TCP soketi üzerinden Client\'a aktarılır.',
    codeSnippet: `HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/v1/orders/108

{
  "orderId": 108,
  "status": "APPROVED",
  "total": 599.90,
  "createdAt": "2026-09-26T23:05:00Z"
}`
  }
];

export const LifecycleVisualizer: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const step = FLOW_STEPS[currentStepIndex];

  const handleNext = () => {
    setCurrentStepIndex((prev) => (prev < FLOW_STEPS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : FLOW_STEPS.length - 1));
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const toggleAutoPlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      let stepIdx = currentStepIndex;
      const interval = setInterval(() => {
        stepIdx = (stepIdx + 1) % FLOW_STEPS.length;
        setCurrentStepIndex(stepIdx);
        if (stepIdx === FLOW_STEPS.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 2500);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
            </span>
            <h3 className="text-lg font-bold text-white">Spring Boot İstek Yaşam Döngüsü Simülatörü</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Bir HTTP isteğinin istemciden veritabanına ve geri dönüşüne kadar Spring Boot içindeki tüm katman akışı
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAutoPlay}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isPlaying
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isPlaying ? 'fill-slate-950' : ''}`} />
            <span>{isPlaying ? 'Durdur' : 'Otomatik Oynat'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Nodes Timeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
        {FLOW_STEPS.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === currentStepIndex;
          const isPassed = idx < currentStepIndex;

          return (
            <button
              key={s.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30 shadow-lg'
                  : isPassed
                  ? 'bg-slate-800/80 border-slate-700/80 text-slate-300'
                  : 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-[10px] font-mono font-bold opacity-70">0{idx + 1}</span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
              </div>
              <div className="text-xs font-semibold truncate">{s.name}</div>
            </button>
          );
        })}
      </div>

      {/* Detail Active Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/70 border border-slate-800 rounded-xl p-5">
        {/* Left: Explanation */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-2">
              <Info className="w-3 h-3" />
              <span>{step.category}</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">{step.description}</p>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs text-slate-400">
              <span className="font-semibold text-emerald-400 block mb-1">Teknik Detay:</span>
              {step.technicalDetails}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <button
              onClick={handlePrev}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Önceki Adım
            </button>
            <span className="text-xs text-slate-500 font-mono">
              Adım {currentStepIndex + 1} / {FLOW_STEPS.length}
            </span>
            <button
              onClick={handleNext}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors flex items-center gap-1"
            >
              <span>Sonraki</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Code Sample */}
        <div className="lg:col-span-6 bg-slate-900/90 rounded-xl border border-slate-800/90 p-4 font-mono text-xs overflow-x-auto">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-slate-500">
            <span className="text-emerald-400 font-medium">Spring Boot İç Yapısı / Kod</span>
            <span>Katman {currentStepIndex + 1}</span>
          </div>
          <pre className="text-emerald-300 whitespace-pre leading-relaxed">{step.codeSnippet}</pre>
        </div>
      </div>
    </div>
  );
};
