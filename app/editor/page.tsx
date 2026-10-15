import Link from "next/link";

const factions = [
  { name: "Королівство Гааполь", color: "accent-emerald-800", checked: true },
  { name: "Франтовілія", color: "accent-rose-700", checked: false },
  { name: "Орден Картографів", color: "accent-sky-700", checked: true },
  { name: "Срібна Рада", color: "accent-violet-700", checked: false },
];

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-sm bg-emerald-900 font-semibold text-amber-200">А</span><span className="text-sm font-bold">Атлас Межиріччя</span></Link>
          <nav aria-label="Навігація редактора" className="flex gap-3 text-sm font-medium sm:gap-6"><Link href="/" className="text-stone-600 hover:text-emerald-900">Головна</Link><Link href="/articles/1" className="hidden text-stone-600 hover:text-emerald-900 sm:inline">Перегляд статті</Link><Link href="/moderation" className="text-stone-600 hover:text-emerald-900">Модерація</Link></nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-11">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Робочий стіл співавтора</p><h1 className="mt-1 text-3xl font-semibold">Редактор чернетки</h1><p className="mt-2 text-sm text-stone-600">Чернетка без назви <span className="text-stone-400">·</span> збережено локально о 14:32</p></div>
          <span className="rounded-sm bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900">Чернетка</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <section className="space-y-6">
            <div className="border border-stone-200 bg-white p-5 sm:p-7">
              <label htmlFor="title" className="block text-sm font-semibold">Заголовок статті</label>
              <input id="title" defaultValue="Таємний сад при міській обсерваторії" className="mt-2 h-12 w-full border-b-2 border-stone-300 px-1 text-xl font-semibold outline-none focus:border-emerald-800" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="category" className="block text-sm font-semibold">Категорія</label><select id="category" defaultValue="Локація" className="mt-2 h-11 w-full rounded-sm border border-stone-300 bg-white px-3 text-sm"><option>Локація</option><option>Персонаж</option><option>Подія</option></select></div>
                <div><label htmlFor="summary" className="block text-sm font-semibold">Короткий опис</label><input id="summary" defaultValue="Місце, де астрономи вирощують рослини з інших земель." className="mt-2 h-11 w-full rounded-sm border border-stone-300 px-3 text-sm" /></div>
              </div>
              <label htmlFor="body" className="mt-6 block text-sm font-semibold">Текст статті</label>
              <textarea id="body" rows={12} defaultValue={`Сад займає внутрішній двір старої обсерваторії на пагорбі над столицею. Його заклали перші астрономи Гааполю, щоб спостерігати, як змінюються рослини під світлом різних сузір’їв.\n\nУ центрі саду стоїть кам’яний басейн, у воді якого відбиваються не ті зорі, що над містом. Доглядачі стверджують: якщо побачити там три місяці, незабаром до міста прибуде мандрівник із Франтовілії.\n\nПотрібно додати джерела та уточнити, коли саме сад був відкритий для відвідувачів.`} className="mt-2 w-full resize-y rounded-sm border border-stone-300 p-4 text-sm leading-7 text-stone-700 outline-none focus:border-emerald-800" />
              <p className="mt-2 text-xs text-stone-500">Орієнтовно 83 слова <span className="px-1">·</span> останнє редагування о 14:32</p>
            </div>

            <section className="border border-stone-200 bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="font-semibold">Ілюстрація або мапа</h2><p className="mt-1 text-sm text-stone-500">Додайте візуальний матеріал до статті</p></div><span className="text-xs text-stone-500">PNG, JPG · до 10 МБ</span></div>
              <div className="mt-5 grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <div className="relative grid aspect-square place-items-center overflow-hidden bg-emerald-950" aria-label="Попередній перегляд схематичної мапи">
                  <div className="absolute left-4 top-5 h-16 w-20 rotate-[-14deg] rounded-[45%] bg-emerald-700"/><div className="absolute right-3 top-8 h-20 w-14 rotate-12 rounded-[42%] bg-emerald-600"/><span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-amber-200">сад обсерваторії</span>
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="illustration" className="inline-flex w-fit cursor-pointer rounded-sm border border-stone-300 px-4 py-2.5 text-sm font-semibold hover:border-emerald-800">Обрати файл</label>
                  <input id="illustration" type="file" accept="image/png,image/jpeg" className="sr-only" />
                  <p className="mt-3 text-sm text-stone-600">map-garden-draft.png <span className="text-stone-400">· 1,8 МБ</span></p>
                  <label htmlFor="caption" className="mt-4 text-xs font-semibold text-stone-700">Підпис</label><input id="caption" defaultValue="План саду за нотатками астрономки Ели" className="mt-1 h-10 rounded-sm border border-stone-300 px-3 text-sm" />
                  <p className="mt-3 max-w-md text-xs leading-5 text-stone-500">Завантажуйте лише власні зображення або матеріали з дозволом на використання. У цьому макеті файл не передається до сховища.</p>
                </div>
              </div>
            </section>
          </section>

          <aside className="space-y-5">
            <section className="border border-stone-200 bg-white p-5">
              <h2 className="font-semibold">Прив’язати до фракцій</h2><p className="mt-1 text-sm text-stone-500">Оберіть усі пов’язані сторони</p>
              <div className="mt-4 space-y-3">{factions.map((faction) => <label key={faction.name} className="flex cursor-pointer items-center gap-3 text-sm"><input type="checkbox" defaultChecked={faction.checked} className={`size-4 rounded-sm ${faction.color}`} /><span>{faction.name}</span></label>)}</div>
              <Link href="/factions" className="mt-4 inline-flex text-xs font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">Переглянути довідник</Link>
            </section>
            <section className="border-l-4 border-sky-600 bg-white p-5">
              <h2 className="text-sm font-semibold">Перед надсиланням</h2><ul className="mt-3 space-y-2 text-xs leading-5 text-stone-600"><li>✓ Опис узгоджений із каноном</li><li>✓ Фракції позначені</li><li className="text-amber-800">○ Джерела ще не додані</li></ul>
            </section>
            <div className="space-y-2 border border-stone-200 bg-white p-4">
              <button type="button" className="w-full rounded-sm border border-stone-300 px-4 py-2.5 text-sm font-semibold hover:bg-stone-50">Зберегти чернетку</button>
              <button type="button" className="w-full rounded-sm bg-emerald-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">Надіслати на перевірку</button>
              <button type="button" className="w-full px-4 py-2 text-sm font-medium text-stone-600 hover:text-emerald-900">Повернути в чернетки</button>
              <p className="px-1 pt-1 text-center text-xs leading-5 text-stone-500">Кнопки показують макет редактора й не зберігають зміни.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}