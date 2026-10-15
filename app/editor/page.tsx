import Link from "next/link";

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-900 hover:text-indigo-600">
            ← Повернутися до каталогу
          </Link>
          <div className="flex gap-3 text-sm">
            <Link href="/factions" className="text-slate-600 hover:text-slate-900">Фракції</Link>
            <Link href="/moderation" className="text-slate-600 hover:text-slate-900">Модерація</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Редактор чернетки статті (Ф3, Ф4, Ф5)</h1>
            <p className="text-sm text-slate-500">Створіть або оновіть матеріал перед перевіркою</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Заголовок статті (Ф3)</label>
              <input
                type="text"
                defaultValue="Літопис Прикордонної Фортеці"
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Категорія матеріалу</label>
              <select className="w-full border border-slate-300 rounded-lg p-2.5 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500">
                <option>Локація</option>
                <option>Персонаж</option>
                <option>Подія</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Прив&apos;язка до фракцій (Ф5)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <label className="flex items-center gap-2 p-2 border rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" /> Північні Землі
                </label>
                <label className="flex items-center gap-2 p-2 border rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600" /> Південний Союз
                </label>
                <label className="flex items-center gap-2 p-2 border rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" className="rounded text-indigo-600" /> Орден Хранителів
                </label>
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 p-6 rounded-xl bg-slate-50 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-800">Завантаження файлу у Supabase Storage (Ф4)</p>
              <p className="text-xs text-slate-500">
                Формати: PNG, JPG, WEBP до 5 МБ. Файли чернеток захищені від стороннього доступу.
              </p>
              <button type="button" className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded-lg transition shadow-sm">
                Обрати файл на диску
              </button>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Текст опису</label>
              <textarea
                className="w-full border border-slate-300 rounded-lg p-3 text-sm bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500"
                rows={5}
                defaultValue="Опис споруди, збудованої для захисту караванних шляхів..."
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
            <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition shadow-sm">
              Зберегти чернетку
            </button>
            <button type="button" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition shadow-sm">
              Надіслати на перевірку
            </button>
            <button type="button" className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm font-medium transition">
              Повернути в чернетки
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}