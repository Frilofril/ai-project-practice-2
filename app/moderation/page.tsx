import Link from "next/link";

export default function ModerationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-900 hover:text-indigo-600">
            ← Назад до каталогу
          </Link>
          <div className="flex gap-3 text-sm">
            <Link href="/editor" className="text-slate-600 hover:text-slate-900">Редактор</Link>
            <Link href="/factions" className="text-slate-600 hover:text-slate-900">Фракції</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Панель модерації (Ф6, Ф7)</h1>
          <p className="text-sm text-slate-500">Затвердження матеріалів та розгляд звернень</p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Черга матеріалів на перевірці (Ф6)</h2>
          <div className="border border-slate-200 rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-sm">Хроніки Західного Долу (автор: Співавтор)</p>
              <p className="text-xs text-slate-500 mt-0.5">Категорія: Локація · Фракція: Південний Союз · Статус: на перевірці</p>
            </div>
            <div className="flex gap-2">
              <button type="button" className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg shadow-sm">
                Опублікувати
              </button>
              <button type="button" className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium rounded-lg shadow-sm">
                Повернути в чернетки
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Відкриті скарги користувачів (Ф7)</h2>
          <div className="border border-slate-200 rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-sm">Скарга на статтю #1: Хроніки Першої Епохи</p>
              <p className="text-xs text-slate-500 mt-0.5">Причина: Неточність у назві гірського перевалу · Статус: відкрита</p>
            </div>
            <div className="flex gap-2">
              <button type="button" className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg shadow-sm">
                Прийняти (зняти в чернетки)
              </button>
              <button type="button" className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium rounded-lg">
                Відхилити
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}