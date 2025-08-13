"use client";

import Image from "next/image";
import Link from "next/link";
import { brand, copy, links } from "@/content/site";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <nav className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Smile F LAOS"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-semibold">Smile F LAOS</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#mission" className="hover:underline">ミッション</a>
            <a href="#projects" className="hover:underline">活動</a>
            <a href="#coffee" className="hover:underline">コーヒー</a>
            <a href="#tour" className="hover:underline">スタディツアー</a>
            <a href="#contact" className="hover:underline">お問い合わせ</a>
          </div>
          <a
            href="#contact"
            className="px-3 py-2 rounded-xl text-white text-sm shadow"
            style={{ backgroundColor: brand.red }}
          >
            参加する
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{copy.heroTitle}</h1>
          <p className="text-lg text-gray-700 mb-8">{copy.heroLead}</p>
          <a
            href="#mission"
            className="px-6 py-3 rounded-xl text-white text-lg shadow"
            style={{ backgroundColor: brand.green }}
          >
            私たちの活動を見る
          </a>
        </div>
        <div className="flex-1">
          <Image
            src="/laostour1.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* 画像3枚ギャラリー */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">活動の様子</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image
            src="/laostour1.jpg"
            alt="Gallery Image 1"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
          <Image
            src="/laostour2.jpg"
            alt="Gallery Image 2"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
          <Image
            src="/laostour3.jpg"
            alt="Gallery Image 3"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
