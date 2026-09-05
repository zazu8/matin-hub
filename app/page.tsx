```tsx
"use client";

import { motion } from "framer-motion";
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

const services = [
  {
    id: "plumbing",
    title: "سباكة",
    description: "تسريبات، انسدادات، خلاطات وسخانات",
    icon: Wrench,
  },
  {
    id: "electricity",
    title: "كهرباء",
    description: "أعطال، أفياش، مفاتيح وتمديدات",
    icon: Zap,
  },
  {
    id: "general",
    title: "صيانة منزلية عامة",
    description: "أي مشكلة منزلية تحتاج فني مختص",
    icon: Home,
  },
];

export default function HomePage() {
  const router = useRouter();

  const goToServices = () => {
    router.push("/services");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f7f7f5] text-[#151515]"
    >
      {/* Header */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#111214]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dca900] text-[#111214]">
              <Wrench size={23} strokeWidth={2.5} />
            </div>

            <div>
              <h1 className="text-lg font-black text-white">متين هب</h1>
              <p className="text-xs text-white/50">الصيانة المنزلية</p>
            </div>
          </div>

          <button
            onClick={goToServices}
            className="rounded-xl bg-[#dca900] px-5 py-2.5 text-sm font-bold text-[#111214] transition hover:-translate-y-0.5 hover:bg-[#edbd16] active:scale-95"
          >
            اختيار خدمة
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111214] pt-32">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#dca900]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#dca900]/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dca900]/30 bg-[#dca900]/10 px-4 py-2 text-sm font-semibold text-[#f1c536]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#dca900]" />
              فنيين جاهزين لخدمتك
            </div>

            <h2 className="max-w-2xl text-5xl font-black leading-[1.15] tracking-tight text-white md:text-7xl">
              متين بدقيقة
              <span className="block text-[#dca900]">جاهزين.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              خلك جالس.. واطلب متين.
              <br />
              نوصلك بالفني المختص ونساعدك تحل مشكلة بيتك بكل سهولة.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={goToServices}
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#dca900] px-7 py-4 font-black text-[#111214] shadow-xl shadow-[#dca900]/10"
              >
                اختيار خدمة
                <ArrowLeft size={20} />
              </motion.button>

              <button className="rounded-2xl border border-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/5">
                كيف تعمل متين؟
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#dca900]" />
                فنيون مختصون
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} className="text-[#dca900]" />
                طلب سريع
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} className="text-[#dca900]" />
                خدمة موثوقة
              </div>
            </div>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#f7f7f5] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-black/40">
                      طلب صيانة جديد
                    </p>
                    <h3 className="mt-1 text-xl font-black">
                      اختر الخدمة
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dca900]">
                    <Wrench size={24} />
                  </div>
                </div>

                <div className="space-y-3">
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
                  <MapPin className="text-[#dca900]" size={20} />
                  <div>
                    <p className="text-xs text-white/40">موقعك</p>
                    <p className="font-bold">
                      نحدده عند إكمال الطلب
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="font-bold text-[#b58a00]">الخطوة الأولى</p>

        <h2 className="mt-2 text-4xl font-black md:text-5xl">
          وش تحتاج نصلح؟
        </h2>

        <p className="mt-4 max-w-xl text-black/50">
          اختر الخدمة المناسبة، وبعدها ندخلك مباشرة في خطوات الطلب.
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

                <p className="mt-2 leading-7 text-black/45">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-bold">
                  اختيار الخدمة
                  <ArrowLeft size={17} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#111214] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-[#dca900]">بكل بساطة</p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            من الطلب إلى الفني
            <span className="text-[#dca900]"> بخطوات واضحة.</span>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["01", "اختر الخدمة", "حدد نوع الصيانة اللي تحتاجها."],
              ["02", "بيانات العميل", "أدخل بيانات التواصل ووصف المشكلة."],
              ["03", "حدد الموقع والوقت", "نعرف وين ومتى نجيك."],
              ["04", "تابع طلبك", "تابع حالة الفني خطوة بخطوة."],
            ].map(([number, title, description]) => (
              <motion.div
                key={number}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="text-4xl font-black text-[#dca900]/40">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-white/45">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "فنيون مختصون",
              "نوصل طلبك للفني المناسب حسب نوع المشكلة.",
            ],
            [
              "متابعة الطلب",
              "تعرف حالة طلبك بدون ما تضيع بين الاتصالات.",
            ],
            [
              "تجربة واضحة",
              "من أول طلبك إلى انتهاء الخدمة كل شيء مرتب.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-3xl border border-black/5 bg-white p-7"
            >
              <CheckCircle2
                className="text-[#c19300]"
                size={28}
              />

              <h3 className="mt-5 text-xl font-black">
                {title}
              </h3>

              <p className="mt-2 leading-7 text-black/45">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#f0f0ec] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-black/40 md:flex-row">
          <p>© 2026 متين هب — الصيانة المنزلية</p>
          <p>متين بدقيقة.. جاهزين.</p>
        </div>
      </footer>
    </main>
  );
}
```
