import Link from "next/link";

export default function HomePage() {
  const articles = [
    {
      id: "1",
      title: "Хроніки Першої Епохи",
      category: "Подія",
      factions: ["Північні Землі", "Південний Союз"],
      summary: "Стародавній літопис про укладання хартії миру між провінціями.",
      author: "Архіваріус",
    },
    {
      id: "2",
      title: "Цитадель Хранителів",
      category: "Локація",
      factions: ["Орден Хранителів"],
      summary: "Фортеця у гірському перевалі, де зберігаються історичні рукописи.",
      author: "Картограф",
    },
    {
      id: "3",
      title: "Майстер Елдар",
      category: "Персонаж",
      factions: ["Гільдія Дослідників"],
      summary: "Засновник відкритої бібліотеки та дослідник стародавніх ремесел.",
      author: "Дослідник",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center shadow">
              В
            </div>
            <div>
              <span className="font-bold text-lg leading-tight block">Вікі всесвіту</span>
              <span className="text-xs text-slate-500">Спільна енциклопедія</span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <Link href="/" className="px-3 py-1.5 rounded-md bg-indigo-50 text-indigo-700">Каталог</Link>
            <Link href="/factions" className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">Довідник фракцій</Link>
            <Link href="/moderation" className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">Модерація</Link>
            <Link href="/editor" className="ml-2 px-3.5 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm">
              + Нова чернетка
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-2">Каталог статей (Ф1, Ф2)</h1>
          <p className="text-sm text-slate-600 mb-6">
            База матеріалів. Обирайте категорію або фільтруйте статті за фракціями.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Пошук за назвою або текстом (Ф2)..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Усі категорії (Ф1)</option>
              <option>Персонаж</option>
              <option>Локація</option>
              <option>Подія</option>
            </select>
            <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Усі фракції (Ф1)</option>
              <option>Північні Землі</option>
              <option>Південний Союз</option>
              <option>Орден Хранителів</option>
              <option>Гільдія Дослідників</option>
            </select>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <article key={item.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow transition flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">Автор: {item.author}</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition">
                  <Link href={`/articles/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="text-sm text-slate-600 line-clamp-3">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.factions.map((f) => (
                    <span key={f} className="text-xs font-medium px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-100">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-medium">Опубліковано</span>
                <Link href={`/articles/${item.id}`} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  Читати статтю →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}