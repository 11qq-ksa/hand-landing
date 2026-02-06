"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewOnce } from "./useInViewOnce";

const cases = [
  {
    title: "Запуск digital-продукта в нише EdTech",
    tags: ["Запуск", "Performance", "Креатив"],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Полный ребрендинг коммерческого бренда",
    tags: ["Брендинг", "Айдентика"],
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "col-span-1"
  },
  {
    title: "Контент-экосистема для lifestyle-марки",
    tags: ["SMM", "Продакшн"],
    image:
      "https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "col-span-1"
  },
  {
    title: "Серии лендингов под регулярные запуски",
    tags: ["Web-дизайн", "UI/UX"],
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "col-span-1 md:col-span-2"
  }
];

export const CaseStudiesSection = () => {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  return (
    <section
      id="cases"
      ref={ref}
      aria-labelledby="cases-title"
      className="section-padding py-20 md:py-28 section-flow"
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
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-hand-red/15 ${item.span}`}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
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
    </section>
  );
};
