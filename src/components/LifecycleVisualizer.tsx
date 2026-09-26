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
  Server,
  Info
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

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

const FLOW_STEPS_TR: FlowStep[] = [
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
    category: 'Spring MVC Çekirdeği',
    icon: Cpu,
    title: '3. DispatcherServlet & HandlerMapping',
    description: 'Spring MVC\'nin "Front Controller" bileşenidir. Gelen isteği karşılar ve HandlerMapping üzerinden uygun Controller metodunu bulur.',
    technicalDetails: 'RequestMappingHandlerMapping tablosunda `/api/v1/orders` URL\'ini ve `POST` metodunu eşleştiren OrderController.createOrder() metodunu tespit eder.',
    codeSnippet: `// DispatcherServlet.java (Spring Framework Core)
HandlerExecutionChain mappedHandler = getHandler(processedRequest);
HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());
ModelAndView mv = ha.handle(processedRequest, response, mappedHandler.getHandler());`
  },
  {
    id: 'controller',
    name: 'RestController & AOP',
    category: 'Web Katmanı',
    icon: FileCode,
    title: '4. RestController, @Valid & AOP Proxies',
    description: 'HTTP JSON gövdesi nesneye dönüştürülür (HttpMessageConverter), `@Valid` ile doğrulanır ve AOP Aspect (@Transactional, @Around) devreye girer.',
    technicalDetails: 'Eğer validasyon hatası varsa MethodArgumentNotValidException fırlatılır; aksi halde CGLIB dinamik proxy üzerinden Service katmanına geçilir.',
    codeSnippet: `@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.create(req));
    }
}`
  },
  {
    id: 'service-tx',
    name: 'Service & @Transactional',
    category: 'İş Mantığı & TX',
    icon: Layers,
    title: '5. Service Katmanı & Transaction Yönetimi',
    description: 'İş kuralları işletilir. `@Transactional` proxy\'si EntityManager ile veritabanı transaction\'ı başlatır (BEGIN TRANSACTION).',
    technicalDetails: 'Spring TransactionInterceptor devreye girer; metot başarılı biterse COMMIT, Unchecked Exception fırlarsa ROLLBACK uygulanır.',
    codeSnippet: `@Service
public class OrderService {
    @Transactional
    public OrderDto create(CreateOrderRequest req) {
        // 1. Stok kontrolü
        // 2. Sipariş Entity oluşturma
        // 3. repository.save() & Domain Event
        return orderMapper.toDto(saved);
    }
}`
  },
  {
    id: 'jpa-db',
    name: 'JPA, Hibernate & DB',
    category: 'Veritabanı Katmanı',
    icon: Database,
    title: '6. Hibernate Persistence Context & Veritabanı',
    description: 'Hibernate nesneyi First-Level Cache\'e alır, Dirty Checking yapar ve HikariCP bağlantı havuzu üzerinden SQL çalıştırır.',
    technicalDetails: 'HikariDataSource -> PostgreSQL TCP bağlantısı üzerinden `INSERT INTO orders (...) VALUES (...)` SQL sorgusu commit edilir.',
    codeSnippet: `// Hibernate Generated SQL
INSERT INTO orders (id, product_id, quantity, created_at) 
VALUES (nextval('orders_seq'), 42, 2, '2026-09-27 00:00:00+03');
-- COMMIT TRANSACTION;`
  }
];

const FLOW_STEPS_EN: FlowStep[] = [
  {
    id: 'client',
    name: 'HTTP Client',
    category: 'Client Layer',
    icon: Server,
    title: '1. Client Issues Request',
    description: 'A browser, mobile app, or API client sends an HTTP request (GET, POST, etc.) to the Spring Boot server.',
    technicalDetails: 'Example: `POST /api/v1/orders HTTP/1.1` carrying JSON body and Authorization: Bearer JWT header.',
    codeSnippet: `POST /api/v1/orders HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
Content-Type: application/json

{ "productId": 42, "quantity": 2 }`
  },
  {
    id: 'filter-chain',
    name: 'Security Filter Chain',
    category: 'Filter Layer',
    icon: ShieldCheck,
    title: '2. Servlet Filters & Spring Security',
    description: 'Before reaching the DispatcherServlet, the request traverses the filter chain (CORS, CSRF, JWT Filter).',
    technicalDetails: 'JwtAuthenticationFilter decodes and verifies the token, populating SecurityContextHolder.',
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
    category: 'Spring MVC Core',
    icon: Cpu,
    title: '3. DispatcherServlet & HandlerMapping',
    description: 'Spring MVC front controller dispatches the request to the matching controller method found in HandlerMapping.',
    technicalDetails: 'RequestMappingHandlerMapping routes `/api/v1/orders` POST to OrderController.createOrder().',
    codeSnippet: `// DispatcherServlet.java (Spring Framework Core)
HandlerExecutionChain mappedHandler = getHandler(processedRequest);
HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());
ModelAndView mv = ha.handle(processedRequest, response, mappedHandler.getHandler());`
  },
  {
    id: 'controller',
    name: 'RestController & AOP',
    category: 'Web Layer',
    icon: FileCode,
    title: '4. RestController, @Valid & AOP Proxies',
    description: 'JSON is deserialized into Java objects, validated with `@Valid`, and wrapped with AOP aspect interception.',
    technicalDetails: 'Validation failures throw MethodArgumentNotValidException; otherwise execution delegates to the Service layer.',
    codeSnippet: `@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.create(req));
    }
}`
  },
  {
    id: 'service-tx',
    name: 'Service & @Transactional',
    category: 'Business & TX',
    icon: Layers,
    title: '5. Service Layer & Transaction Boundary',
    description: 'Business rules execute within an active transaction boundary managed by EntityManager.',
    technicalDetails: 'TransactionInterceptor executes COMMIT on normal return or ROLLBACK upon uncaught exception.',
    codeSnippet: `@Service
public class OrderService {
    @Transactional
    public OrderDto create(CreateOrderRequest req) {
        return orderMapper.toDto(saved);
    }
}`
  },
  {
    id: 'jpa-db',
    name: 'JPA, Hibernate & DB',
    category: 'Persistence Layer',
    icon: Database,
    title: '6. Hibernate Persistence Context & Database',
    description: 'Hibernate tracks entity in First-Level Cache, executes Dirty Checking, and flushes SQL via HikariCP pool.',
    technicalDetails: 'PostgreSQL connection receives `INSERT INTO orders (...) VALUES (...)` and commits the transaction.',
    codeSnippet: `// Hibernate Generated SQL
INSERT INTO orders (id, product_id, quantity, created_at) 
VALUES (nextval('orders_seq'), 42, 2, '2026-09-27 00:00:00+03');
-- COMMIT TRANSACTION;`
  }
];

export const LifecycleVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const flowSteps = language === 'en' ? FLOW_STEPS_EN : FLOW_STEPS_TR;

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const activeStep = flowSteps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < flowSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === 'en' ? 'Spring MVC HTTP Request Lifecycle Simulator' : 'Spring MVC HTTP İstek Yaşam Döngüsü Simülatörü'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'en' 
                  ? 'Step-by-step interactive trace from HTTP client to Security Filter, DispatcherServlet, Service, and Hibernate.'
                  : 'İstemciden veritabanına bir HTTP isteğinin Filter, DispatcherServlet, AOP, Service ve Hibernate adımlarını interaktif inceleyin.'}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs text-white font-semibold transition-colors"
          >
            {language === 'en' ? 'Previous' : 'Önceki'}
          </button>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === flowSteps.length - 1}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
          >
            <span>{language === 'en' ? 'Next Step' : 'Sonraki Adım'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title={language === 'en' ? 'Reset' : 'Sıfırla'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress Stepper Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {flowSteps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === currentStepIndex;
          const isPassed = idx < currentStepIndex;

          return (
            <button
              key={step.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                  : isPassed
                    ? 'bg-slate-900 border-emerald-500/30 text-slate-300'
                    : 'bg-slate-950/70 border-slate-800 text-slate-500 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : isPassed ? 'text-emerald-400/70' : 'text-slate-600'}`} />
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>
              </div>
              <div className="font-semibold text-xs truncate text-white">{step.name}</div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">{step.category}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Container */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 animate-in fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
              {language === 'en' ? `Phase 0${currentStepIndex + 1}` : `Aşama 0${currentStepIndex + 1}`} • {activeStep.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {activeStep.title}
            </h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 self-start">
            {activeStep.name}
          </span>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed">
          {activeStep.description}
        </p>

        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-emerald-400 font-bold mb-0.5">
              {language === 'en' ? 'Spring Architecture Deep-Dive:' : 'Spring Mimari Derinliği:'}
            </strong>
            <span>{activeStep.technicalDetails}</span>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {language === 'en' ? 'Code & Protocol Artifact:' : 'Kod & Protokol Örneği:'}
          </span>
          <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
            {activeStep.codeSnippet}
          </pre>
        </div>
      </div>
    </div>
  );
};
