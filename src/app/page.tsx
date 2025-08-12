import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <div className="max-w-2xl">
        <Image
          src="/logo.jpg"
          alt="Smile F LAOS Logo"
          width={300}
          height={300}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">Smile F LAOS</h1>
        <p className="text-lg text-gray-700 mb-6">
          ラオスと日本をつなぐ活動を広げ、笑顔あふれる未来を共に作ります。
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://instagram.com/eflao_official"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://x.com/eflao_official"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            X（Twitter）
          </a>
          <a
            href="https://note.com/eflao"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Note
          </a>
        </div>
      </div>
    </main>
  );
}
