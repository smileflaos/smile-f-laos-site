"use client";

import Image from "next/image";
import Link from "next/link";
import { brand, copy, links } from "@/content/site";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900">
      {/* ====== Nav（ロゴ左／メニュー右、スクロールで白背景） ====== */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
        <nav className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Smile F LAOS" width={36} height={36} className="rounded-full" />
            <span className="font-semibold">Smile F LAOS</span>
          </a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#mission" className="hover:underline">ミッション</a>
            <a href="#projects" className="hover:underline">活動</a>
            <a href="#coffee" className="hover:underline">コーヒー</a>
            <a href="#tour" className="hover:underline">スタディツアー</a>
            <a href="#news" className="hover:underline">お知らせ</a>
            <a href="#contact" className="hover:underline">お問い合わせ</a>
          </div>
          <a href="#contact" className="px-3 py-2 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.red }}>
            相談する
          </a>
        </nav>
      </header>

      {/* ====== Hero（フルブリード画像＋中央テキスト＋下に矢印） ====== */}
      <section className="relative h-[72vh] min-h-[520px] w-full">
        <Image
          src="/laostour1.jpg" // 無ければグレー背景を表示
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-start justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
            {copy.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            {copy.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.blue }}>
              活動を見る
            </a>
            <a href="#coffee" className="px-5 py-3 rounded-xl bg-white/90 text-zinc-900 text-sm shadow">
              ラオスコーヒーを知る
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-wide">
          SCROLL
        </div>
      </section>

      {/* ====== 3カラム・バリュー（軽い影＋余白広め） ====== */}
      <section id="mission" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {copy.mission.map((m, i) => (
            <div key={i} className="rounded-2xl bg-white ring-1 ring-black/5 p-6 shadow-sm">
              <div className="text-xs font-medium tracking-widest" style={{ color: brand.blue }}>
                MISSION
              </div>
              <h3 className="mt-2 text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ワイド画像＋テキスト（交互） ====== */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-12">
        {[0,1].map((row) => (
          <div key={row} className={`grid md:grid-cols-2 gap-8 items-center ${row % 2 ? "md:grid-flow-dense" : ""}`}>
            {/* 画像 */}
            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm ${row % 2 ? "md:order-2" : ""}`}>
              <Image
                src={row % 2 ? "/laostuor2.jpg" : "/laostour3.jpg"}
                alt="Section"
                fill
                className="object-cover"
              />
            </div>
            {/* テキスト */}
            <div className={`${row % 2 ? "md:order-1" : ""}`}>
              <div className="text-xs font-medium tracking-widest" style={{ color: brand.green }}>
                PROJECT
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                {row === 0 ? "フェアトレードコーヒー販売" : "勉強会・スタツア・協働"}
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-600 leading-7">
                {row === 0
                  ? "大学祭やポップアップでの対面販売。香りが届く体験づくり、適正価格での流通、リピーター施策に取り組んでいます。"
                  : "国際協力の勉強会やスタディツアー、企業・団体との協働を通じて、現場の学びを社会に循環させます。"}
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-4 py-2 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.red }}>
                  相談する
                </a>
                <a href="#coffee" className="px-4 py-2 rounded-xl bg-white ring-1 ring-black/10 text-sm">
                  コーヒーを見る
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ====== コーヒー（箇条書き＆問い合わせCTA） ====== */}
      <section id="coffee" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-xs font-medium tracking-widest" style={{ color: brand.blue }}>LAOS COFFEE</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">ボラベンの香りを、正しいストーリーで。</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
          <ul className="space-y-3 text-sm leading-7 text-zinc-700">
            {copy.coffeeBullets.map((b, i) => (<li key={i}>・{b}</li>))}
          </ul>
          <div className="rounded-2xl bg-zinc-50 ring-1 ring-black/5 p-6">
            <p className="text-sm text-zinc-700">卸・仕入れ・イベント出店などのご相談はこちらから。</p>
            <div className="mt-4 flex gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.green }}>
                仕入れの相談
              </a>
              <a href="#contact" className="px-4 py-2 rounded-xl bg-white ring-1 ring-black/10 text-sm">
                イベント出店相談
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== スタディツアー（カードグリッド） ====== */}
      <section id="tour" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-xs font-medium tracking-widest" style={{ color: brand.blue }}>STUDY TOUR</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">現場で学ぶ7日間（例）</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {copy.tour.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 ring-1 ring-black/5 bg-white shadow-sm">
              <div className="text-xs tracking-widest font-medium" style={{ color: brand.red }}>{s.day}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{s.point}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== お知らせ（ニュース3件想定・手打ちでもOK） ====== */}
      <section id="news" className="bg-zinc-50/80 border-y border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-xs font-medium tracking-widest" style={{ color: brand.blue }}>NEWS</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">お知らせ</h2>
          <div className="mt-6 space-y-4">
            {/* ここは必要に応じて増やしたり、CMS化も可 */}
            <NewsItem date="2025-08-10" title="学園祭ポップアップ出店が決定" href="#" />
            <NewsItem date="2025-07-28" title="スタディツアー2025 募集開始" href="#" />
            <NewsItem date="2025-07-01" title="サイトをリニューアルしました" href="#" />
          </div>
        </div>
      </section>

      {/* ====== お問い合わせ & SNS ====== */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="rounded-2xl ring-1 ring-black/5 p-8 md:p-10 bg-white shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold">お問い合わせ</h2>
          <p className="mt-2 text-sm md:text-base text-zinc-600">ご相談や取材依頼はメールまたはSNSから。</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5">{links.email}</span>
            <a className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5 hover:underline" href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5 hover:underline" href={links.x} target="_blank" rel="noreferrer">X (Twitter)</a>
            <a className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5 hover:underline" href={links.note} target="_blank" rel="noreferrer">note</a>
          </div>
        </div>
      </section>

      {/* ====== Footer（シンプル） ====== */}
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="rounded-full" />
            <div className="font-semibold">エフラオ / Smile F LAOS</div>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="font-medium">メニュー</div>
              <a href="#mission" className="block hover:underline">ミッション</a>
              <a href="#projects" className="block hover:underline">活動</a>
              <a href="#coffee" className="block hover:underline">コーヒー</a>
              <a href="#tour" className="block hover:underline">スタディツアー</a>
            </div>
            <div>
              <div className="font-medium">外部リンク</div>
              <a className="block hover:underline" href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="block hover:underline" href={links.x} target="_blank" rel="noreferrer">X</a>
              <a className="block hover:underline" href={links.note} target="_blank" rel="noreferrer">note</a>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Smile F LAOS / Eflao
        </div>
      </footer>
    </div>
  );
}

/* ---------- 小さな表示用コンポーネント ---------- */
function NewsItem({ date, title, href }: { date: string; title: string; href: string }) {
  return (
    <Link href={href} className="flex items-start justify-between gap-4 py-3 px-3 rounded-xl hover:bg-zinc-50 ring-1 ring-transparent hover:ring-black/5">
      <span className="text-zinc-500 text-sm w-28 shrink-0">{formatDate(date)}</span>
      <span className="font-medium">{title}</span>
      <span className="text-zinc-400 text-xs">→</span>
    </Link>
  );
}
function formatDate(s: string) {
  try {
    const d = new Date(s);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}.${m}.${dd}`;
  } catch {
    return s;
  }
}
