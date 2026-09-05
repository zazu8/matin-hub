"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Zap,
  Home,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Clock3,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const services = [
  {
    id: "plumbing",
    title: "سباكة",
    icon: Wrench,
    problems: ["تسريب مياه", "انسداد", "خلاط", "سخان", "مضخة", "أخرى"],
  },
  {
    id: "electricity",
    title: "كهرباء",
    icon: Zap,
    problems: [
      "عطل كهربائي",
      "فيش / مفتاح",
      "إنارة",
      "قاطع كهرباء",
      "تمديد",
      "أخرى",
    ],
  },
  {
    id: "general",
    title: "صيانة منزلية عامة",
    icon: Home,
    problems: [
      "تركيب",
      "إصلاح باب",
      "إصلاح أثاث",
      "تعليق / تثبيت",
      "صيانة عامة",
      "أخرى",
    ],
  },
];

export default function HomePage() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const activeService = services.find(
    (service) => service.id === selectedService
  );

  const goToServices = () => {
    router.push("/services");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f8f7f2] text-[#111214]"
    >
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111214] text-[#dca900]">
              <Wrench size={20} />
            </div>

            <div>
              <p className="text-lg font-black">متين هب</p>
              <p className="text-[10px] font-bold text-black/40">
                MATIN HUB
              </p>
            </div>
          </div>

          <button
            onClick={goToServices}
            className="rounded-xl bg-[#111214] px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
          >
            اختيار خدمة
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dca900]/20 bg-[#dca900]/10 px-4 py-2 text-sm font-bold text-[#8f6b00]">
              <CheckCircle2 size={16} />
              خدمة صيانة منزلية بسهولة
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              صيانة بيتك
              <br />
              <span className="text-[#b58a00]">
                أسهل مما تتوقع
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              اختر الخدمة، اكتب مشكلتك، وحدد الوقت المناسب لك.
              <br />
              ونحن نكمل معك باقي خطوات الطلب.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={goToServices}
                className="flex items-center gap-2 rounded-2xl bg-[#111214] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                اختيار خدمة
                <ArrowLeft size={18} />
              </button>

              <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-5 py-4">
                <ShieldCheck
                  className="text-[#b58a00]"
                  size={20}
                />
                <span className="text-sm font-bold">
                  خدمة موثوقة
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-black/50">
              <div className="flex items-center gap-2">
                <Clock3 size={17} />
                مواعيد مرنة
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={17} />
                خدمة داخل المنزل
              </div>

              <div className="flex items-center gap-2">
                <Star size={17} />
                تقييمات عالية
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-xl shadow-black/5"
          >
            <div className="rounded-3xl bg-[#111214] p-6 text-white">
              <p className="text-sm font-bold text-white/50">
                ابدأ طلبك الآن
              </p>

              <h2 className="mt-2 text-3xl font-black">
                وش تحتاج نصلح؟
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/50">
                اختر نوع الخدمة المناسبة لك، وبعدها نكمل معك
                التفاصيل.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <button
                    key={service.id}
                    onClick={() =>
                      router.push(`/request?service=${service.id}`)
                    }
                    className="flex w-full items-center justify-between rounded-2xl border border-black/5 bg-white p-4 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f3ea] text-[#b58a00]">
                        <Icon size={20} />
                      </div>

                      <span className="font-bold">
                        {service.title}
                      </span>
                    </div>

                    <ArrowLeft
                      size={18}
                      className="text-black/30"
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#111214] p-4 text-white">
              <MapPin
                className="text-[#dca900]"
                size={20}
              />

              <div>
                <p className="text-xs text-white/40">
                  موقعك
                </p>

                <p className="font-bold">
                  نحدده عند إكمال الطلب
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="font-bold text-[#b58a00]">
          الخطوة الأولى
        </p>

        <h2 className="mt-2 text-4xl font-black md:text-5xl">
          وش تحتاج نصلح؟
        </h2>

        <p className="mt-4 max-w-xl text-black/50">
          اختر الخدمة المناسبة، وبعدها ندخلك مباشرة في خطوات
          الطلب.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -7 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  router.push(`/request?service=${service.id}`)
                }
                className="group rounded-3xl border border-black/5 bg-white p-6 text-right transition-all hover:border-[#dca900]/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f3ea] text-[#b58a00] transition group-hover:bg-[#dca900] group-hover:text-[#111214]">
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  اختر الخدمة وابدأ بتسجيل تفاصيل طلبك.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#b58a00]">
                  اختيار الخدمة
                  <ArrowLeft size={16} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {selectedService && activeService && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-5 pb-24">
              <div className="rounded-[2rem] bg-[#111214] p-6 text-white md:p-10">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-bold text-[#dca900]">
                      اختر نوع المشكلة
                    </p>

                    <h2 className="mt-2 text-3xl font-black">
                      {activeService.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setSelectedProblem(null);
                    }}
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/5"
                  >
                    تغيير الخدمة
                  </button>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {activeService.problems.map((problem) => (
                    <button
                      key={problem}
                      onClick={() =>
                        setSelectedProblem(problem)
                      }
                      className={`rounded-2xl border p-4 text-right font-bold transition ${
                        selectedProblem === problem
                          ? "border-[#dca900] bg-[#dca900] text-[#111214]"
                          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {problem}
                    </button>
                  ))}
                </div>

                {selectedProblem && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    <button
                      onClick={() =>
                        router.push(
                          `/request?service=${activeService.id}&problem=${encodeURIComponent(
                            selectedProblem
                          )}`
                        )
                      }
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#dca900] px-6 py-4 font-black text-[#111214] transition hover:bg-[#edbd16]"
                    >
                      متابعة الطلب
                      <ArrowLeft size={18} />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <p className="font-bold text-[#b58a00]">
            كيف نشتغل؟
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            ثلاث خطوات بسيطة
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "اختر الخدمة",
                text: "حدد نوع الصيانة التي تحتاجها.",
              },
              {
                number: "02",
                title: "سجل بياناتك",
                text: "اكتب بيانات التواصل ووصف المشكلة.",
              },
              {
                number: "03",
                title: "حدد الموعد",
                text: "اختر اليوم والوقت المناسب لك.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-black/5 bg-[#f8f7f2] p-7"
              >
                <span className="text-4xl font-black text-[#dca900]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-black">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-black/50">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#111214] p-7 text-white">
            <ShieldCheck
              className="text-[#dca900]"
              size={30}
            />

            <h3 className="mt-5 text-xl font-black">
              خدمة موثوقة
            </h3>

            <p className="mt-3 leading-7 text-white/50">
              نهتم بجودة الخدمة وتجربة العميل من البداية
              للنهاية.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-7">
            <Clock3
              className="text-[#b58a00]"
              size={30}
            />

            <h3 className="mt-5 text-xl font-black">
              مواعيد مرنة
            </h3>

            <p className="mt-3 leading-7 text-black/50">
              اختر الوقت المناسب لك أثناء إكمال الطلب.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-7">
            <Star
              className="text-[#b58a00]"
              size={30}
            />

            <h3 className="mt-5 text-xl font-black">
              تجربة سهلة
            </h3>

            <p className="mt-3 leading-7 text-black/50">
              خطوات واضحة وبسيطة بدون تعقيد.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#111214] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black">
              متين هب
            </p>

            <p className="mt-1 text-sm text-white/40">
              MATIN HUB
            </p>
          </div>

          <p className="text-sm text-white/40">
            خدمات صيانة منزلية بطريقة أسهل.
          </p>
        </div>
      </footer>
    </main>
  );
}