import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">Головна сторінка проєкту</h1>
          <p className="text-sm text-gray-600">Каталог матеріалів та налаштування</p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium">
          <Link href="/editor" className="px-3 py-2 bg-blue-600 text-white rounded">Редактор</Link>
          <Link href="/factions" className="px-3 py-2 bg-gray-200 text-gray-900 rounded">Довідник</Link>
          <Link href="/moderation" className="px-3 py-2 bg-amber-600 text-white rounded">Модерація</Link>
        </nav>
      </header>
      <section className="p-4 bg-gray-50 border rounded">
        <p className="text-sm text-gray-700">Вітаю! Це базовий каркас застосунку для роботи зі списками, категоріями та медіафайлами.</p>
        <Link href="/articles/1" className="inline-block mt-3 text-blue-600 underline">Переглянути зразок запису →</Link>
      </section>
    </main>
  );
}
