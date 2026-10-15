import Link from "next/link";

export default function FactionsPage() {
  const factions = [
    { name: "Північні Землі", color: "#3b82f6", desc: "Держава гірських фортець і торгових міст.", count: 18 },
    { name: "Південний Союз", color: "#10b981", desc: "Конфедерація приморських поселень і ремісників.", count: 24 },
    { name: "Орден Хранителів", color: "#8b5cf6", desc: "Спільнота вчених, які оберігають старовинні архіви.", count: 14 },
    { name: "Гільдія Дослідників", color: "#f59e0b", desc: "Мандрівники, що складають географічні карти.", count: 9 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-900 hover:text-indigo-600">
            ← Назад до каталогу
          </Link>
          <div className="flex gap-3 text-sm">
            <Link href="/editor" className="text-slate-600 hover:text-slate-900">Редактор</Link>
            <Link href="/moderation" className="text-slate-600 hover:text-slate-900">Модерація</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Довідник фракцій світу (Ф5)</h1>
          <p className="text-sm text-slate-500">Організації та союзи, до яких прив&apos;язуються матеріали</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {factions.map((f) => (
            <div key={f.name} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
                  {f.name}
                </span>
                <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-700 rounded-md">
                  Статей: {f.count}
                </span>
              </div>
              <p className="text-sm text-slate-600">{f.desc}</p>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                <Link href="/" className="text-indigo-600 font-medium hover:underline">Пов&apos;язані статті</Link>
                <button type="button" className="text-red-600 hover:underline">Видалити (Редактор)</button>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-base">Додати нову фракцію (Головний редактор)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input type="text" placeholder="Назва фракції" className="border border-slate-300 rounded-lg p-2 text-sm bg-white text-slate-900" />
            <input type="text" placeholder="Колір мітки (#3b82f6)" className="border border-slate-300 rounded-lg p-2 text-sm bg-white text-slate-900" />
            <input type="text" placeholder="Короткий опис" className="border border-slate-300 rounded-lg p-2 text-sm bg-white text-slate-900" />
          </div>
          <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium shadow-sm transition">
            Створити фракцію
          </button>
        </section>
      </main>
    </div>
  );
}