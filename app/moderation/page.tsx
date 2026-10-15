import Link from "next/link";

const queue = [
  { title: "Таємний сад при міській обсерваторії", category: "Локація", author: "Назар Лев", date: "14 жовтня, 13:48", note: "Додані мапа та зв’язок із Орденом Картографів", id: "1" },
  { title: "Зимова рада на перевалі", category: "Подія", author: "Соломія Ткач", date: "14 жовтня, 11:20", note: "Потребує перевірки хронології", id: "2" },
  { title: "Капітан Вежі припливів", category: "Персонаж", author: "Данило Мох", date: "13 жовтня, 18:05", note: "Перевірити позначку фракції", id: "1" },
];

const reports = [
  { title: "Маяк на краю Тихого моря", reason: "Суперечність у датах спорудження", from: "Мандрівник_17", date: "Сьогодні, 09:12", id: "1" },
  { title: "Іларія з Франтовілії", reason: "Зображення без зазначення авторства", from: "КленоваГілка", date: "Учора, 21:36", id: "2" },
];

export default function ModerationPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-sm bg-emerald-900 font-semibold text-amber-200">А</span><span className="text-sm font-bold">Атлас Межиріччя</span></Link>
          <nav aria-label="Навігація модерації" className="flex gap-3 text-sm font-medium sm:gap-6"><Link href="/" className="text-stone-600 hover:text-emerald-900">Головна</Link><Link href="/articles/1" className="hidden text-stone-600 hover:text-emerald-900 sm:inline">Статті</Link><Link href="/editor" className="text-stone-600 hover:text-emerald-900">Редактор</Link></nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-11">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Головний редактор</p><h1 className="mt-1 text-3xl font-semibold">Панель модерації</h1><p className="mt-2 text-sm text-stone-600">Перевірка нових матеріалів і звернень спільноти.</p></div><span className="rounded-sm bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900">5 завдань очікують</span></div>

        <section className="mt-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-xl font-semibold">На перевірці</h2><p className="mt-1 text-sm text-stone-500">Статті, надіслані співавторами</p></div><span className="text-sm font-medium text-stone-600">3 матеріали</span></div>
          <div className="overflow-hidden border border-stone-200 bg-white">
            <div className="hidden grid-cols-[minmax(0,1.5fr)_minmax(9rem,.8fr)_minmax(11rem,1fr)_auto] gap-4 border-b border-stone-200 bg-stone-100 px-5 py-3 text-xs font-bold uppercase tracking-wide text-stone-500 md:grid"><span>Стаття</span><span>Автор</span><span>Надіслано</span><span>Дії</span></div>
            {queue.map((item) => <article key={item.title} className="grid gap-3 border-b border-stone-200 p-4 last:border-b-0 sm:p-5 md:grid-cols-[minmax(0,1.5fr)_minmax(9rem,.8fr)_minmax(11rem,1fr)_auto] md:items-center md:gap-4">
              <div><p className="text-[11px] font-bold uppercase tracking-wide text-emerald-800">{item.category}</p><h3 className="mt-1 font-semibold"><Link href={`/articles/${item.id}`} className="hover:text-emerald-900">{item.title}</Link></h3><p className="mt-1 text-xs text-stone-500">{item.note}</p></div>
              <div className="text-sm text-stone-700"><span className="text-xs text-stone-400 md:hidden">Автор · </span>{item.author}</div>
              <div className="text-sm text-stone-500"><span className="text-xs text-stone-400 md:hidden">Надіслано · </span>{item.date}</div>
              <div className="flex flex-wrap gap-2"><button type="button" className="rounded-sm bg-emerald-900 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-800">Опублікувати</button><button type="button" className="rounded-sm border border-stone-300 px-3 py-2 text-xs font-semibold text-stone-700 hover:border-amber-700 hover:text-amber-900">Повернути в чернетки</button></div>
            </article>)}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-xl font-semibold">Відкриті скарги</h2><p className="mt-1 text-sm text-stone-500">Звернення читачів щодо опублікованих статей</p></div><span className="text-sm font-medium text-stone-600">2 відкриті</span></div>
          <div className="grid gap-3 lg:grid-cols-2">
            {reports.map((report) => <article key={report.title} className="border border-stone-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wide text-rose-800">Скарга на статтю</p><h3 className="mt-1 font-semibold"><Link href={`/articles/${report.id}`} className="hover:text-emerald-900">{report.title}</Link></h3></div><span className="shrink-0 rounded-sm bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-900">Відкрита</span></div>
              <p className="mt-3 border-l-2 border-amber-400 pl-3 text-sm text-stone-700">{report.reason}</p>
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-stone-500"><span>Від: {report.from}</span><span>{report.date}</span></div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-stone-100 pt-4"><button type="button" className="rounded-sm bg-rose-800 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-700">Прийняти скаргу</button><button type="button" className="rounded-sm border border-stone-300 px-3 py-2 text-xs font-semibold text-stone-700 hover:border-stone-500">Відхилити</button></div>
            </article>)}
          </div>
        </section>
        <p className="mt-6 text-xs text-stone-500">Керування рішеннями показане як статичний макет без збереження змін.</p>
      </main>
    </div>
  );
}