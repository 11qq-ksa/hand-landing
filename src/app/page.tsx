"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { useInViewOnce } from "@/components/useInViewOnce";

const CaseStudiesSection = dynamic(
  () => import("@/components/CaseStudiesSection").then(mod => mod.CaseStudiesSection),
  { ssr: false }
);

const stats = [
  { label: "запусков", value: "50+" },
  { label: "ниши", value: "15+" },
  { label: "креативов", value: "500+" }
];

const services = [
  {
    title: "Запуски и Digital-маркетинг",
    short: "От гипотезы до масштабирования.",
    description:
      "Стратегия запуска, медиаплан, аналитика, performance-маркетинг, таргетированная и контекстная реклама. Работаем на результат, а не на клики.",
    icon: "▶"
  },
  {
    title: "Брендинг",
    short: "Айдентика, которая живёт в головах.",
    description:
      "Фирменный стиль с нуля, ребрендинг, брендбук, визуальные коды и нейминг, который легко считывается вашей аудиторией.",
    icon: "◎"
  },
  {
    title: "Дизайн",
    short: "Графика, которая усиливает смысл.",
    description:
      "Графический дизайн, визуальные концепции для кампаний, адаптация и редизайн с опорой на брендбуки и ваши задачи.",
    icon: "✶"
  },
  {
    title: "Web-дизайн",
    short: "Лендинги и сайты под запуски.",
    description:
      "Продуманный UI/UX, лендинги под конкретные офферы, корпоративные сайты и интерфейсы, которые не мешают конверсиям.",
    icon: "▣"
  },
  {
    title: "SMM",
    short: "Контент, который хочется смотреть.",
    description:
      "Контент-концепция, сценарии, продакшен фото/видео, монтаж, упаковка аккаунтов и постоянная работа с вовлечением.",
    icon: "✦"
  }
];

const team = [
  {
    name: "Александр",
    role: "Маркетолог",
    description:
      "Стратегия, аналитика, performance и понятные цифры. Превращает хаотичные гипотезы в систему.",
    initials: "MKT"
  },
  {
    name: "Иван",
    role: "Дизайнер",
    description:
      "Создаёт визуальные миры вокруг брендов. От обложки креатива до полноценной айдентики.",
    initials: "DSN"
  },
  {
    name: "Сергей",
    role: "Контент-директор",
    description:
      "Отвечает за голос бренда, драматургию контента и то, как бизнес разговаривает с аудиторией.",
    initials: "CNT"
  },
  {
    name: "Сергей",
    role: "Видеограф / Монтажер",
    description:
      "Снимает и собирает истории, которые хочется досматривать до конца. Умеет упаковывать смысл в кадр.",
    initials: "VDG"
  }
];

const inputBase =
  "w-full rounded-full border px-4 py-3.5 text-sm bg-black/60 border-white/15 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hand-red focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export default function Page() {
  const heroCircleVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.06,
      rotate: 8,
      transition: { type: "spring", stiffness: 260, damping: 18 }
    },
    tap: {
      scale: 0.94,
      rotate: -4,
      transition: { type: "spring", stiffness: 500, damping: 22 }
    }
  };

  const { ref: aboutRef, visible: aboutVisible } = useInViewOnce<HTMLDivElement>();
  const { ref: servicesRef, visible: servicesVisible } = useInViewOnce<HTMLDivElement>();
  const { ref: teamRef, visible: teamVisible } = useInViewOnce<HTMLDivElement>();
  const { ref: pricingRef, visible: pricingVisible } = useInViewOnce<HTMLDivElement>();
  const { ref: contactRef, visible: contactVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <>
      <Header />
      <main className="bg-black text-white">
        {/* HERO */}
        <section
          id="hero"
          className="relative min-h-screen section-padding pt-28 pb-16 flex items-center bg-[#2350D2] text-[#F7F2EB] overflow-hidden"
        >
          <div className="pointer-events-none absolute -inset-40 opacity-30 mix-blend-multiply">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(130,170,255,0.5),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.4),_transparent_60%)]" />
          </div>

          <div className="max-width relative z-10 flex flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center gap-3 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#F7F2EB]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F7F2EB]" />
                мыслим креативно, делаем красиво
              </p>

              <div className="space-y-3">
                <h1 className="text-[56px] leading-[0.82] sm:text-[82px] md:text-[104px] font-display font-black uppercase tracking-tighter text-[#F7F2EB]">
                  {"Привет".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
                  className="max-w-md text-sm sm:text-base font-medium text-[#F7F2EB]/90"
                >
                  мы приходим с{" "}
                  <span className="underline decoration-[#F7F2EB] decoration-2 underline-offset-4">
                    художественными идеями
                  </span>{" "}
                  и прикладным маркетингом, чтобы ваш бренд ощущали, запоминали и выбирали.
                </motion.p>
              </div>

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group inline-flex items-center justify-between rounded-full bg-[#F7F2EB] text-[#0B1020] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] shadow-lg hover:bg-[#e9e2d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F2EB]/60"
                >
                  <span>отправить бриф</span>
                  <span className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-hand-blueLight text-[#0B1020] text-[11px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </button>
                <p className="max-w-xs text-[11px] text-[#F7F2EB]/75">
                  Полный цикл: от стратегии и визуала до продакшена и внятных KPI. Мы рядом на каждом
                  этапе запуска.
                </p>
              </motion.div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <motion.button
                className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-white/5 border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center"
                variants={heroCircleVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                aria-label="Главная интерактивная кнопка"
              >
                <div className="absolute inset-[22%] rounded-full border border-black/25" />
                <div className="absolute inset-[40%] rounded-full border border-black/35" />

                <div className="absolute inset-[12%] -skew-y-6 bg-[repeating-linear-gradient(135deg,_rgba(0,0,0,0.94)_0,_rgba(0,0,0,0.94)_6px,_rgba(255,255,255,0.15)_6px,_rgba(255,255,255,0.15)_9px)] mix-blend-multiply opacity-80" />

                <motion.div
                  className="relative z-10 flex flex-col items-center gap-3"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                >
                  <span className="rounded-full bg-white px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-black">
                    press to start
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-black/80">
                    full cycle agency
                  </span>
                </motion.div>

                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-black/25"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                />
              </motion.button>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-black/80">
            <span>scroll</span>
            <div className="h-9 w-5 rounded-full border border-black/35 flex items-start justify-center p-1">
              <motion.div
                className="h-2 w-1 rounded-full bg-black"
                animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          ref={aboutRef}
          aria-labelledby="about-title"
          className="section-padding py-16 md:py-24 bg-black bg-radial-hand"
        >
          <div className="max-width grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-hand-blueLight/80 mb-4">
                about
              </p>
              <h2
                id="about-title"
                className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight mb-5"
              >
                Мы — креативное агентство полного цикла
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Наша главная задача — стать близким товарищем вашему бизнесу. Не просто закрыть задачу,
                а построить сильные взаимоотношения с взаимным ростом и поддержкой. Мы включаемся в
                контекст, говорим на языке вашей аудитории и собираем вокруг бренда живое внимание.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="glass-panel rounded-4xl p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/60 mb-1">
                      мы рядом
                    </p>
                    <p className="text-sm font-medium text-white/90">
                      Стратегия, креатив, продакшен и аналитика — в одном месте.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-hand-red text-[#F7F2EB] flex items-center justify-center text-xs font-semibold">
                    HAND
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {stats.map(stat => (
                    <div key={stat.label} className="flex flex-col rounded-3xl bg-white/5 px-3 py-3">
                      <span className="text-lg sm:text-xl font-semibold">{stat.value}</span>
                      <span className="text-[11px] text-white/60">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          ref={servicesRef}
          aria-labelledby="services-title"
          className="section-padding py-18 md:py-24 bg-black"
        >
          <div className="max-width">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-hand-blueLight/80 mb-3">
                  services
                </p>
                <h2
                  id="services-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight"
                >
                  Услуги, с которыми{" "}
                  <span className="bg-gradient-to-r from-hand-red via-hand-blueLight to-hand-blueDeep bg-clip-text text-transparent">
                    вырастают бренды
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm text-white/70">
                Каждое направление можно масштабировать и комбинировать. Мы собираем индивидуальные
                связки инструментов под задачи вашего запуска или долгосрочного присутствия.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-2"
            >
              {services.map(service => (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-hand-red/10 p-[1px]"
                >
                  <div className="glass-panel rounded-4xl p-5 sm:p-6 md:p-7 group">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-hand-red text-[#F7F2EB] text-sm font-semibold shadow-lg">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold">{service.title}</h3>
                          <p className="text-xs text-hand-blueLight/80 mt-1">{service.short}</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[11px] font-medium text-white/70 group-hover:bg-hand-blueLight group-hover:text-black transition-colors">
                        +
                      </div>
                    </div>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-white/60">
                      <span>навигируйте: наведите, чтобы раскрыть</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-hand-blueLight" />
                        hover to expand
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TEAM */}
        <section
          id="team"
          ref={teamRef}
          aria-labelledby="team-title"
          className="section-padding py-18 md:py-24 bg-black"
        >
          <div className="max-width">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-hand-blueLight/80 mb-3">
                  team
                </p>
                <h2
                  id="team-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight"
                >
                  Команда, которая{" "}
                  <span className="bg-gradient-to-r from-hand-red to-hand-blueLight bg-clip-text text-transparent">
                    держит руку на пульсе
                  </span>
                </h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={teamVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-4"
            >
              {team.map(member => (
                <motion.article
                  key={member.role}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px]"
                >
                  <div className="glass-panel rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-full">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/50 mb-1">
                          {member.role}
                        </p>
                        <h3 className="text-sm sm:text-base font-semibold">{member.name}</h3>
                      </div>
                      <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-hand-red to-hand-blueLight text-[10px] font-semibold flex items-center justify-center text-[#F7F2EB] shadow-lg">
                        {member.initials}
                      </div>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-white/55">
                      <span>hover: подробнее о роли</span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/15 group-hover:bg-hand-blueLight group-hover:text-black transition-colors">
                        ?
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CASES - dynamically loaded component */}
        <CaseStudiesSection />

        {/* PRICING */}
        <section
          id="pricing"
          ref={pricingRef}
          aria-labelledby="pricing-title"
          className="section-padding py-18 md:py-24 bg-black"
        >
          <div className="max-width">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={pricingVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-hand-blueLight/80 mb-3">
                  pricing
                </p>
                <h2
                  id="pricing-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4"
                >
                  Цены, которые{" "}
                  <span className="bg-gradient-to-r from-hand-red to-hand-blueDeep bg-clip-text text-transparent">
                    собираются под задачу
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-white/75 max-w-xl">
                  Индивидуальные расценки под каждый проект — мы смотрим на объём, дедлайны, степень
                  вовлечения команды, количество каналов и сложность продакшена.
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass-panel rounded-3xl p-5 sm:p-6">
                  <p className="text-sm sm:text-base font-medium text-white/90 mb-2">
                    Индивидуальные расценки под каждый проект
                  </p>
                  <p className="text-sm text-white/70">
                    Свяжитесь с нами для уточнения стоимости — мы подготовим прозрачную структуру бюджета
                    и предложим несколько вариантов по уровню вовлечения.
                  </p>
                </div>
                <div className="glass-panel rounded-3xl p-5 sm:p-6 flex flex-col gap-3 text-[11px] text-white/65">
                  <div className="flex items-center justify-between">
                    <span>готовы к пилотным проектам и долгим дистанциям</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-hand-red/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-hand-red">
                      launch mode
                    </span>
                  </div>
                  <span>структура готова для добавления пакетов: старт, рост, масштаб.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactRef}
          aria-labelledby="contact-title"
          className="section-padding py-18 md:py-24 bg-black"
        >
          <div className="max-width">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] items-start"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-hand-blueLight/80 mb-3">
                  contact
                </p>
                <h2
                  id="contact-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4"
                >
                  Отправляйте нам свой бриф — давайте сотрудничать!
                </h2>
                <p className="text-sm sm:text-base text-white/75 max-w-xl mb-6">
                  Расскажите про задачу, сроки и формат. Мы вернёмся с вопросами, идеями и первыми
                  шагами по запуску.
                </p>

                <form className="space-y-4" aria-label="Форма контакта HAND Agency">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-xs text-white/70">
                        Имя
                      </label>
                      <input id="name" name="name" className={inputBase} placeholder="Как к вам обращаться" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-xs text-white/70">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={inputBase}
                        placeholder="name@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="telegram" className="mb-1 block text-xs text-white/70">
                        Telegram
                      </label>
                      <input
                        id="telegram"
                        name="telegram"
                        className={inputBase}
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="mb-1 block text-xs text-white/70">
                        Тип проекта
                      </label>
                      <input
                        id="projectType"
                        name="projectType"
                        className={inputBase}
                        placeholder="Запуск, брендинг, SMM..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs text-white/70">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-3xl border px-4 py-3.5 text-sm bg-black/60 border-white/15 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hand-red focus-visible:ring-offset-2 focus-visible:ring-offset-black resize-none"
                      placeholder="Кратко опишите задачу, нишу и цель запуска"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <button
                      type="submit"
                    className="group inline-flex items-center justify-between rounded-full bg-hand-red text-[#F7F2EB] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] shadow-lg hover:bg-hand-blueLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hand-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <span>отправить запрос</span>
                    <span className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-hand-red text-[11px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        →
                      </span>
                    </button>
                    <p className="text-[11px] text-white/55 max-w-xs">
                      Нажимая на кнопку, вы подтверждаете согласие с обработкой данных. Здесь можно
                      добавить ссылку на политику.
                    </p>
                  </div>
                </form>
              </div>

              <div className="space-y-4">
                <div className="glass-panel rounded-3xl p-5 sm:p-6 space-y-4">
                  <h3 className="text-sm sm:text-base font-semibold">Прямые контакты</h3>
                  <div className="space-y-2 text-sm text-white/80">
                    <p>
                      Telegram:{" "}
                      <span className="text-hand-blueLight font-medium">@hand_agency (placeholder)</span>
                    </p>
                    <p>
                      Email:{" "}
                      <span className="text-hand-blueLight font-medium">
                        hello@hand-agency.com (placeholder)
                      </span>
                    </p>
                    <p>
                      Phone:{" "}
                      <span className="text-hand-blueLight font-medium">+7 (000) 000-00-00 (placeholder)</span>
                    </p>
                  </div>
                </div>

                <div className="glass-panel rounded-3xl p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/60 mb-3">
                    social
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Instagram", "Behance", "Telegram", "TikTok"].map(social => (
                      <button
                        key={social}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:bg-hand-blueLight hover:text-black hover:border-transparent transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-hand-red" />
                        {social}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-white/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <span>© {new Date().getFullYear()} HAND Agency. Все права защищены.</span>
              <span>Сайт собран на Next.js, React, TypeScript и Tailwind.</span>
            </motion.footer>
          </div>
        </section>
      </main>
    </>
  );
}

