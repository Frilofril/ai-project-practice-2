import Link from "next/link";

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-900 hover:text-indigo-600 flex items-center gap-2">
            ← Назад до каталогу
          </Link>
          <div className="flex gap-3 text-sm">
            <Link href="/editor" className="text-slate-600 hover:text-slate-900">Редактор</Link>
            <Link href="/factions" className="text-slate-600 hover:text-slate-900">Фракції</Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <article className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md">
                Опубліковано (Ф1)
              </span>
              <span className="text-xs text-slate-400">ID статті: #{id}</span>
            </div>
            <span className="text-xs text-slate-500">Автор: Хранитель архіву</span>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Хроніки Першої Епохи</h1>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100">
                Північні Землі
              </span>
              <span className="text-xs font-medium px-2.5 py-1 bg-purple-50 text-purple-700 rounded-md border border-purple-100">
                Південний Союз
              </span>
            </div>
          </div>

          <div className="bg-slate-100 border border-dashed border-slate-300 rounded-lg p-10 text-center">
            <p className="text-sm font-medium text-slate-700">Ілюстрація статті зі сховища Supabase Storage (Ф4)</p>
            <p className="text-xs text-slate-500 mt-1">Опублікований файл доступний для всіх відвідувачів</p>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              Це опис історичної події вигаданого світу. Матеріал упорядковано авторами енциклопедії
              та затверджено Головним редактором після проходження перевірки.
            </p>
          </div>
        </article>

        <section className="bg-white border border-red-200 rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-red-900">Поскаржитися на статтю (Ф7)</h2>
          <textarea
            placeholder="Вкажіть причину звернення..."
            className="w-full border border-slate-300 rounded-lg p-3 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={2}
          />
          <button type="button" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition shadow-sm">
            Надіслати скаргу
          </button>
        </section>
      </main>
    </div>
  );
}