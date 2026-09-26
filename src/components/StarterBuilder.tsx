import React, { useState } from 'react';
import { Settings, Copy, Check, Sparkles, Layers, Box, CheckSquare, Square } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { useLanguage } from '../i18n/LanguageContext';

interface DependencyOption {
  id: string;
  name: string;
  descriptionTr: string;
  descriptionEn: string;
  categoryTr: string;
  categoryEn: string;
  groupId: string;
  artifactId: string;
  scope?: string;
  defaultSelected?: boolean;
}

const DEPENDENCIES: DependencyOption[] = [
  {
    id: 'web',
    name: 'Spring Web',
    descriptionTr: 'RESTful API\'ler, Spring MVC ve gömülü Apache Tomcat sunucusu içerir.',
    descriptionEn: 'Build RESTful APIs with Spring MVC and embedded Apache Tomcat.',
    categoryTr: 'Web & API',
    categoryEn: 'Web & API',
    groupId: 'org.springframework.boot',
    artifactId: 'spring-boot-starter-web',
    defaultSelected: true
  },
  {
    id: 'jpa',
    name: 'Spring Data JPA',
    descriptionTr: 'Hibernate, EntityManager ve Repository desenleriyle veritabanı yönetimi.',
    descriptionEn: 'Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.',
    categoryTr: 'SQL & Veritabanı',
    categoryEn: 'SQL & Database',
    groupId: 'org.springframework.boot',
    artifactId: 'spring-boot-starter-data-jpa',
    defaultSelected: true
  },
  {
    id: 'postgres',
    name: 'PostgreSQL Driver',
    descriptionTr: 'PostgreSQL ilişkisel veritabanı JDBC sürücüsü.',
    descriptionEn: 'A JDBC and R2DBC driver that allows Java programs to connect to PostgreSQL.',
    categoryTr: 'SQL & Veritabanı',
    categoryEn: 'SQL & Database',
    groupId: 'org.postgresql',
    artifactId: 'postgresql',
    scope: 'runtime',
    defaultSelected: true
  },
  {
    id: 'security',
    name: 'Spring Security',
    descriptionTr: 'Kimlik doğrulama, yetkilendirme, CORS ve CSRF koruması.',
    descriptionEn: 'Highly customizable authentication and access-control framework for Spring applications.',
    categoryTr: 'Güvenlik',
    categoryEn: 'Security',
    groupId: 'org.springframework.boot',
    artifactId: 'spring-boot-starter-security',
    defaultSelected: true
  },
  {
    id: 'validation',
    name: 'Jakarta Validation',
    descriptionTr: 'Hibernate Validator ile @NotNull, @Size, @Email girdi denetimleri.',
    descriptionEn: 'Bean Validation with Hibernate Validator supporting @NotNull, @Size, @Email.',
    categoryTr: 'Doğrulama & Model',
    categoryEn: 'Validation & Model',
    groupId: 'org.springframework.boot',
    artifactId: 'spring-boot-starter-validation',
    defaultSelected: true
  },
  {
    id: 'actuator',
    name: 'Spring Boot Actuator',
    descriptionTr: 'Üretim ortamı için sağlık (Health), metrikler ve izleme uçları.',
    descriptionEn: 'Supports built-in operational endpoints for monitoring, health checks, and metrics.',
    categoryTr: 'DevOps & İzleme',
    categoryEn: 'DevOps & Monitoring',
    groupId: 'org.springframework.boot',
    artifactId: 'spring-boot-starter-actuator',
    defaultSelected: false
  },
  {
    id: 'lombok',
    name: 'Lombok',
    descriptionTr: 'Getter, Setter, Constructor ve Builder kodlarını otomatik üreten kütüphane.',
    descriptionEn: 'Java annotation library which helps to reduce boilerplate code (getters, builders, constructors).',
    categoryTr: 'Geliştirici Araçları',
    categoryEn: 'Developer Tools',
    groupId: 'org.projectlombok',
    artifactId: 'lombok',
    scope: 'provided',
    defaultSelected: true
  },
  {
    id: 'jjwt',
    name: 'JJWT (Java JWT)',
    descriptionTr: 'Stateless REST API\'ler için JSON Web Token oluşturma ve imzalama.',
    descriptionEn: 'Java JWT library for signing, parsing, and verifying HMAC and RSA JWT tokens.',
    categoryTr: 'Güvenlik',
    categoryEn: 'Security',
    groupId: 'io.jsonwebtoken',
    artifactId: 'jjwt-api',
    defaultSelected: false
  }
];

export const StarterBuilder: React.FC = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  const [javaVersion, setJavaVersion] = useState<'21' | '17'>('21');
  const [bootVersion, setBootVersion] = useState<'3.3.4' | '3.2.10'>('3.3.4');
  const [selectedDeps, setSelectedDeps] = useState<string[]>(
    DEPENDENCIES.filter((d) => d.defaultSelected).map((d) => d.id)
  );
  const [activeOutputTab, setActiveOutputTab] = useState<'pom' | 'yml'>('pom');

  const toggleDependency = (id: string) => {
    setSelectedDeps((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  // Generate dynamic pom.xml
  const generatePomXml = () => {
    const depsList = DEPENDENCIES.filter((d) => selectedDeps.includes(d.id));
    return `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>${bootVersion}</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>mastery-project</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>mastery-project</name>
    <description>Spring Boot Mastery Demo Project</description>
    
    <properties>
        <java.version>${javaVersion}</java.version>
    </properties>
    
    <dependencies>
${depsList
  .map(
    (d) => `        <dependency>
            <groupId>${d.groupId}</groupId>
            <artifactId>${d.artifactId}</artifactId>${d.scope ? `\n            <scope>${d.scope}</scope>` : ''}
        </dependency>`
  )
  .join('\n')}
        
        <!-- Test Dependencies -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`;
  };

  // Generate dynamic application.yml
  const generateAppYml = () => {
    const hasJpa = selectedDeps.includes('jpa');
    const hasPostgres = selectedDeps.includes('postgres');
    const hasActuator = selectedDeps.includes('actuator');
    const hasSecurity = selectedDeps.includes('security');

    let yml = `server:
  port: 8080
  shutdown: graceful

spring:
  application:
    name: mastery-service
  threads:
    virtual:
      enabled: true # Java 21 Virtual Threads
`;

    if (hasPostgres && hasJpa) {
      yml += `
  datasource:
    url: \${DB_URL:jdbc:postgresql://localhost:5432/masterydb}
    username: \${DB_USER:postgres}
    password: \${DB_PASS:postgres}
    driver-class-name: org.postgresql.Driver
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 20000

  jpa:
    hibernate:
      ddl-auto: validate
    open-in-view: false # Prevents DB pool exhaustion
    show-sql: false
    properties:
      hibernate:
        format_sql: true
        jdbc:
          batch_size: 25
`;
    }

    if (hasActuator) {
      yml += `
management:
  endpoints:
    web:
      exposure:
        include: "health,info,prometheus" # Security Best Practice: Whitelist only
  endpoint:
    health:
      probes:
        enabled: true
`;
    }

    if (hasSecurity) {
      yml += `
app:
  jwt:
    secret-key: \${JWT_SECRET:secretKey123456789012345678901234567890}
    expiration: 86400000 # 24h
`;
    }

    return yml.trim();
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Box className="w-4 h-4" />
          </span>
          <h3 className="text-lg font-bold text-white">
            {isTr ? 'İnteraktif Spring Initializr & Yapılandırma Oluşturucu' : 'Interactive Spring Initializr & Config Generator'}
          </h3>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {isTr
            ? 'Java sürümünüzü ve ihtiyacınız olan Spring Boot bağımlılıklarını seçin; dinamik pom.xml ve application.yml anında üretilsin.'
            : 'Select your target Java runtime and Spring Boot starters to dynamically generate production-ready pom.xml and application.yml files.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Configuration Form */}
        <div className="lg:col-span-5 space-y-5">
          {/* Base Environment */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isTr ? 'Çalışma Ortamı Ayarları' : 'Runtime Environment'}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">{isTr ? 'Java Sürümü' : 'Java Version'}</label>
                <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                  <button
                    onClick={() => setJavaVersion('21')}
                    className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${
                      javaVersion === '21' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Java 21 (LTS)
                  </button>
                  <button
                    onClick={() => setJavaVersion('17')}
                    className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${
                      javaVersion === '17' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Java 17 (LTS)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">{isTr ? 'Spring Boot Sürümü' : 'Boot Version'}</label>
                <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                  <button
                    onClick={() => setBootVersion('3.3.4')}
                    className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${
                      bootVersion === '3.3.4' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3.3.4 {isTr ? '(Güncel)' : '(Latest)'}
                  </button>
                  <button
                    onClick={() => setBootVersion('3.2.10')}
                    className={`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${
                      bootVersion === '3.2.10' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3.2.10
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dependencies Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                {isTr ? 'Bağımlılıklar (Starters)' : 'Dependencies (Starters)'}
              </label>
              <span className="text-[11px] text-emerald-400 font-mono">
                {selectedDeps.length} {isTr ? 'Seçili' : 'Selected'}
              </span>
            </div>

            <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
              {DEPENDENCIES.map((dep) => {
                const isChecked = selectedDeps.includes(dep.id);
                return (
                  <button
                    key={dep.id}
                    onClick={() => toggleDependency(dep.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-950/30 border-emerald-500/50 text-slate-200'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="mt-0.5 text-emerald-400 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 fill-emerald-500 text-slate-950" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{dep.name}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                          {isTr ? dep.categoryTr : dep.categoryEn}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {isTr ? dep.descriptionTr : dep.descriptionEn}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Dynamic Code Preview */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveOutputTab('pom')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeOutputTab === 'pom'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                pom.xml (Maven)
              </button>
              <button
                onClick={() => setActiveOutputTab('yml')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeOutputTab === 'yml'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                application.yml
              </button>
            </div>
            <span className="text-xs text-slate-500 font-mono">{isTr ? 'Dinamik Çıktı' : 'Dynamic Output'}</span>
          </div>

          <div className="flex-1">
            {activeOutputTab === 'pom' ? (
              <CodeBlock
                code={generatePomXml()}
                language="xml"
                filename="pom.xml"
                showLineNumbers={true}
              />
            ) : (
              <CodeBlock
                code={generateAppYml()}
                language="yaml"
                filename="src/main/resources/application.yml"
                showLineNumbers={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
