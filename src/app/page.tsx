"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Users, Globe2, HeartHandshake, Mail, Instagram, MapPin, BookOpen, Leaf, Store } from "lucide-react";
import { brand, copy, links } from "@/content/site";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/70 ring-1 ring-black/5 p-6 shadow-sm">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="mt-1 text-sm text-zinc-500">{label}</div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,40,104,0.06) 0%, rgba(255,255,255,1) 40%, rgba(206,17,38,0.06) 100%)",
      }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-black/5 bg-white/70 dark:bg-zinc-950/60">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Smile F LAOS Logo" width={40} height={40} className="rounded-full shadow" />
            <span className="font-semibold">エフラオ / Smile F LAOS</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#mission" className="hover:underline">ミッション</a>
            <a href="#projects" className="hover:underline">プロジェクト</a>
            <a href="#coffee" className="hover:underline">ラオスコーヒー</a>
            <a href="#tour" className="hover:underline">スタディツアー</a>
            <a href="#join" className="hover:underline">参加・寄付</a>
            <a href="#contact" className="hover:underline">お問い合わせ</a>
          </div>
          <a href="#join" className="text-sm px-3 py-2 rounded-xl text-white shadow hover:shadow-md" style={{ backgroundColor: brand.red }}>参加する</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] blur-3xl rounded-full" style={{ backgroundColor: brand.blue, opacity: 0.12 }} />
          <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] blur-3xl rounded-full" style={{ backgroundColor: brand.red, opacity: 0.12 }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight">
            {copy.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="mt-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {copy.heroLead}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl text-white text-sm shadow hover:shadow-md inline-flex items-center gap-2" style={{ backgroundColor: brand.blue }}>
              活動を見る <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#coffee" className="px-5 py-3 rounded-xl ring-1 ring-black/10 text-sm bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
              ラオスコーヒーを知る
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {copy.stats.map((s, i) => (<Stat key={i} {...s} />))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">ミッション</h2>
        <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
          上から与える支援ではなく、現地の声に基づいた“下からの支援”へ。
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {copy.mission.map((m, i) => (
            <div key={i} className="group rounded-2xl bg-white/70 dark:bg-zinc-900/70 ring-1 ring-black/5 p-6 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-full ring-1"
                  style={{ backgroundColor: `${brand.green}1A`, color: brand.green, borderColor: `${brand.green}40` }}>重点</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-6">{m.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: brand.blue }}>
                もっと見る <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">主要プロジェクト</h2>
        <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400">実行と学びを往復しながら“続く仕組み”を育てています。</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["フェアトレードコーヒー販売", "勉強会・研究", "企業・団体との協働"].map((t, i) => (
            <div key={i} className="rounded-2xl p-6 ring-1 ring-black/5 bg-white/70 dark:bg-zinc-900/70">
              <div className="text-xs tracking-wider font-medium" style={{ color: brand.blue }}>PROJECT</div>
              <div className="mt-1 font-semibold">{t}</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {i === 0
                  ? "大学祭・ポップアップでの対面販売。キャッシュレス、顧客管理、リピーター施策。"
                  : i === 1
                  ? "国際協力・サステナビリティの勉強会、ゼミ連携の研究発表、アーカイブ整備。"
                  : "リユース衣料・物流・機材協賛など、実務連携を推進。"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coffee */}
      <section id="coffee" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">ラオスコーヒー</h2>
        <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400">“ボラベンの香り”をそのままに。適正価格で、正しいストーリーで。</p>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div className="aspect-[4/3] rounded-2xl ring-1 ring-black/5 shadow-sm overflow-hidden">
            <Image src="/coffee.jpg" alt="Coffee" width={1400} height={1050} className="w-full h-full object-cover" />
          </div>
          <div>
            <ul className="space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.coffeeBullets.map((b, i) => (<li key={i}>・{b}</li>))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.green }}>豆の仕入れ相談</a>
              <a href="#contact" className="px-4 py-2 rounded-xl ring-1 ring-black/10 text-sm bg-white/70 dark:bg-zinc-900/60">ドリップの卸について</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour */}
      <section id="tour" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">スタディツアー</h2>
        <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400">“見る・聞く・関わる”。現場で学ぶ7日間（例）</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {copy.tour.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 ring-1 ring-black/5 bg-white/70 dark:bg-zinc-900/70">
              <div className="text-xs tracking-wider font-medium" style={{ color: brand.red }}>{s.day}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.point}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl text-white shadow" style={{ backgroundColor: brand.blue }}>
            ツアー相談をする <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Join / Donate */}
      <section id="join" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">参加・寄付</h2>
        <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400">“できること”から、いっしょに。</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-black/5 bg-white/70 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2"><Users className="w-5 h-5" /><div className="font-semibold">メンバーとして参加</div></div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">運営/広報/販売/プロジェクト。週1〜OK。役割設計と伴走あり。</p>
            <a href="#contact" className="mt-3 inline-block text-sm underline" style={{ color: brand.blue }}>参加相談</a>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-black/5 bg-white/70 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2"><Coffee className="w-5 h-5" /><div className="font-semibold">コーヒーで応援</div></div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">豆/粉/ドリップ/サブスク。学内/イベント/法人卸も。</p>
            <a href="#contact" className="mt-3 inline-block text-sm underline" style={{ color: brand.green }}>購入・卸の相談</a>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-black/5 bg-white/70 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2"><HeartHandshake className="w-5 h-5" /><div className="font-semibold">寄付・パートナー</div></div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">現地支援・物流・機材協賛など、長期的な協働を歓迎。</p>
            <a href="#contact" className="mt-3 inline-block text-sm underline" style={{ color: brand.red }}>連携の相談</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">お問い合わせ</h2>
        <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400">ご相談や取材依頼はこちらから（仮フォーム）</p>
        <form className="grid md:grid-cols-2 gap-6 mt-8">
          <input className="w-full rounded-xl border border-black/10 bg-white/70 dark:bg-zinc-900/70 p-3" placeholder="お名前" />
          <input className="w-full rounded-xl border border-black/10 bg-white/70 dark:bg-zinc-900/70 p-3" type="email" placeholder="メールアドレス" />
          <input className="md:col-span-2 rounded-xl border border-black/10 bg-white/70 dark:bg-zinc-900/70 p-3" placeholder="件名" />
          <textarea className="md:col-span-2 rounded-xl border border-black/10 bg-white/70 dark:bg-zinc-900/70 p-3 min-h-[120px]" placeholder="お問い合わせ内容" />
          <button type="button" className="md:col-span-2 px-5 py-3 rounded-xl text-white text-sm shadow w-fit" style={{ backgroundColor: brand.red }}>
            送信（ダミー）
          </button>
        </form>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" />{links.email}</div>
          <a className="flex items-center gap-2 hover:underline" href={links.instagram} target="_blank" rel="noreferrer"><Instagram className="w-4 h-4" />Instagram</a>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />白山・本郷（拠点予定）</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full shadow" />
            <div className="font-semibold">エフラオ / Smile F LAOS</div>
          </div>
          <div>
            <div className="font-medium">メニュー</div>
            <a href="#mission" className="block hover:underline">ミッション</a>
            <a href="#projects" className="block hover:underline">プロジェクト</a>
            <a href="#coffee" className="block hover:underline">ラオスコーヒー</a>
            <a href="#tour" className="block hover:underline">スタディツアー</a>
          </div>
          <div>
            <div className="font-medium">参加する</div>
            <a href="#join" className="block hover:underline">メンバー</a>
            <a href="#join" className="block hover:underline">購入・卸</a>
            <a href="#join" className="block hover:underline">寄付・連携</a>
          </div>
          <div>
            <div className="font-medium">外部リンク</div>
            <a className="text-sm hover:underline" href={links.instagram} target="_blank" rel="noreferrer" style={{ color: brand.blue }}>Instagram</a>
            <a className="text-sm hover:underline" href={links.x} target="_blank" rel="noreferrer" style={{ color: brand.blue }}>X (Twitter)</a>
            <a className="text-sm hover:underline" href={links.note} target="_blank" rel="noreferrer" style={{ color: brand.blue }}>note</a>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Smile F LAOS / Eflao. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
