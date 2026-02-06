"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInViewOnce } from "./useInViewOnce";

const cases = [
  {
    title: "Запуск digital-продукта в нише EdTech",
    excerpt: "Гипотезы, прогрев и креативы, которые попали в ядро аудитории.",
    description:
      "Собрали единый запуск: позиционирование, визуальную систему, сценарии и рекламную воронку. Упор сделали на демонстрацию ценности продукта через короткие форматы и UGC-образы.",
    highlights: [
      "перепаковали оффер и сформировали внятную драматургию лендинга",
      "запустили 12 форматов креатива под разные сегменты",
      "синхронизировали контент и performance-кампании"
    ],
    tags: ["Запуск", "Performance", "Креатив"],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Полный ребрендинг коммерческого бренда",
    excerpt: "Смена позиционирования и визуального кода без потери узнаваемости.",
    description:
      "Провели аудит, нашли сильное ядро и собрали новую айдентику, которая легче считывается в digital и офлайн-среде. Систему сразу адаптировали под ключевые носители.",
    highlights: [
      "обновили айдентику и бренд-коммуникации",
      "собрали модульную дизайн-систему",
      "подготовили мастер-шаблоны для команды клиента"
    ],
    tags: ["Брендинг", "Айдентика"],
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    span: "col-span-1"
  },
  {
    title: "Контент-экосистема для lifestyle-марки",
    excerpt: "Сделали контент-ритм и визуальную систему для регулярных продаж.",
    description:
      "Собрали контент-план, рубрики и визуальные шаблоны. Сделали фокус на истории людей и продукте в реальном контексте, чтобы усилить доверие и повторные покупки.",
    highlights: [
      "создали 6 рубрик и серию форматов для коротких видео",
      "выстроили модульную сетку контента",
      "снизили нагрузку на команду клиента"
    ],
    tags: ["SMM", "Продакшн"],
    image:
      "https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3785981/pexels-photo-3785981.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    span: "col-span-1"
  },
  {
    title: "Серии лендингов под регулярные запуски",
    excerpt: "Конверсионные лендинги для разных сегментов и сценариев.",
    description:
      "Проработали несколько воронок и визуальных подач, чтобы каждый сегмент получал своё ценностное сообщение. Система масштабируется без участия дизайнера.",
    highlights: [
      "создали библиотеку блоков и UI-компонентов",
      "настроили гибкие сценарии A/B",
      "связали визуал с аналитикой"
    ],
    tags: ["Web-дизайн", "UI/UX"],
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Локальный бренд еды: контент + упаковка",
    excerpt: "Сделали аппетитный визуал и выстроили регулярный контент.",
    description:
      "Сняли контент-серию, обновили визуальный язык и структуру меню. Итог — узнаваемый стиль и связанный путь от соцсетей к заказу.",
    highlights: [
      "собрали контент-день и адаптировали под 3 канала",
      "упаковали меню и прайсы",
      "создали набор продающих офферов"
    ],
    tags: ["Контент", "Фото", "Дизайн"],
    image:
      "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    span: "col-span-1"
  },
  {
    title: "Промо-кампания для нишевого сервиса",
    excerpt: "Короткие ролики, которые быстро объясняют ценность.",
    description:
      "Построили кампанию вокруг простого сюжета и узнаваемых визуальных приёмов. Под каждый сегмент — собственная подача и CTA.",
    highlights: [
      "собрали серию 15–30 сек роликов",
      "сделали адаптации под вертикальные форматы",
      "согласовали сообщения с отделом продаж"
    ],
    tags: ["Видео", "Креатив", "Запуск"],
    image:
      "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3831186/pexels-photo-3831186.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    span: "col-span-1"
  }
];

export const CaseStudiesSection = () => {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();
  const [activeCase, setActiveCase] = useState<(typeof cases)[number] | null>(null);

  useEffect(() => {
    if (!activeCase) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCase(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeCase]);

  return (
    <section
      id="cases"
      ref={ref}
      aria-labelledby="cases-title"
      className="section-padding py-20 md:py-28"
    >
      <div className="max-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-hand-blueLight/80 mb-3">
              case studies
            </p>
            <h2
              id="cases-title"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight"
            >
              Кейсы и{" "}
              <span className="bg-gradient-to-r from-hand-red via-hand-blueLight to-hand-blueDeep bg-clip-text text-transparent">
                запуски
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70">
            Контент раздела обновляется — структура уже готова для добавления подробных кейсов, цифр и
            креативов. Мы оставили пространство под визуальные истории вашего бренда.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px]"
        >
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              layoutId={`case-card-${item.title}`}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-hand-red/15 ${item.span}`}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCase(item)}
              onKeyDown={event => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCase(item);
                }
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-70 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-hand-red/25 via-transparent to-hand-blueLight/25 mix-blend-screen" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2">
                      проект {index + 1}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug">{item.title}</h3>
                  </div>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/30 text-[10px] font-medium">
                    view
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white/80 border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-white/60">
                  Контент будет обновлён — сюда можно добавить результаты, охваты, ROI и креативные
                  решения.
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCase && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCase(null)}
          >
            <motion.article
              layoutId={`case-card-${activeCase.title}`}
              className="relative mx-4 w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0f1e]"
              initial={{ scale: 0.96, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={event => event.stopPropagation()}
            >
              <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="relative min-h-[280px]">
                  <Image
                    src={activeCase.gallery[0]}
                    alt={activeCase.title}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1e] via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/70">
                    кейс
                    <span className="h-1.5 w-1.5 rounded-full bg-hand-blueLight" />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold">
                      {activeCase.title}
                    </h3>
                    <p className="mt-3 text-sm text-hand-blueLight/90">{activeCase.excerpt}</p>
                    <p className="mt-4 text-sm text-white/70 leading-relaxed">
                      {activeCase.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-3">
                      Что сделали
                    </p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {activeCase.highlights.map(point => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-hand-blueLight" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeCase.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 border-t border-white/10 bg-black/20 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                {activeCase.gallery.slice(1).map(image => (
                  <div key={image} className="relative h-40 overflow-hidden rounded-2xl border border-white/10">
                    <Image src={image} alt="Дополнительный кадр кейса" fill className="object-cover" />
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveCase(null)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white/80 hover:bg-white/10"
                aria-label="Закрыть кейс"
              >
                ×
              </button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
