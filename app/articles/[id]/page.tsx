import Link from "next/link";

const articles: Record<string, { title: string; category: string; author: string; updated: string; factions: string[]; intro: string; paragraphs: string[]; initials: string; color: string }> = {
  "1": {
    title: "Маяк на краю Тихого моря",
    category: "Локація",
    author: "Марта Вовк",
    updated: "14 жовтня 2026",
    factions: ["Королівство Гааполь", "Орден Картографів"],
    intro: "На базальтовому мисі, де закінчуються карти Гааполю, стоїть вежа, вогонь якої видно навіть крізь туман між світами.",
    paragraphs: [
      "Маяк збудували після Великого відпливу, коли море відступило на три дні й оголило стару кам’яну дорогу. Його нижні поверхи складені з чорного базальту, а ліхтарна кімната має вікна з зеленого скла, привезеного з Франтовілії.",
      "Щовечора доглядач запалює три вогні: білий для кораблів, бурштиновий для мандрівників суходолом і синій для тих, хто повертається з-за Тихого моря. Останній вогонь не гасне навіть удень.",
      "Картографи сперечаються, чи є маяк звичайною навігаційною спорудою. На старих мапах він позначений там, де берегова лінія змінюється залежно від припливу, а компаси показують на північ лише вночі.",
    ],
    initials: "М",
    color: "bg-amber-300",
  },
  "2": {
    title: "Іларія з Франтовілії",
    category: "Персонаж",
    author: "Остап Рудий",
    updated: "13 жовтня 2026",
    factions: ["Франтовілія", "Срібна Рада"],
    intro: "Посолка, яка вміє домовлятися з королями та слухати старі дерева. Її щоденник зник перед підписанням перемир’я.",
    paragraphs: [
      "Іларія народилася у виноградному краї на півдні Франтовілії, у родині, що зберігала листи ще з часів першої ради. Вона вивчала мови прикордонних міст і мала рідкісний дар запам’ятовувати не лише слова, а й обіцянки.",
      "Її дипломатична місія до Гааполю тривала одинадцять років. Саме Іларія запропонувала обмін архівами, який поклав край суперечці про кордон біля Тихого моря.",
      "Після зникнення щоденника Іларію востаннє бачили біля старого мосту. Срібна Рада вважає, що вона продовжує працювати над миром, хоча жодного листа від неї не отримували.",
    ],
    initials: "І",
    color: "bg-rose-300",
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles[id] ?? articles["1"];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-sm bg-emerald-900 font-semibold text-amber-200">А</span><span className="text-sm font-bold">Атлас Межиріччя</span></Link>
          <nav aria-label="Навігація сторінки" className="flex gap-3 text-sm font-medium sm:gap-6"><Link href="/" className="text-stone-600 hover:text-emerald-900">Бібліотека</Link><Link href="/factions" className="hidden text-stone-600 hover:text-emerald-900 sm:inline">Фракції</Link><Link href="/editor" className="rounded-sm bg-emerald-900 px-3 py-2 text-white hover:bg-emerald-800">Редактор</Link></nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-stone-500"><Link href="/" className="hover:text-emerald-900">Головна</Link><span>/</span><span>{article.category}</span></div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <article>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-800"><span>{article.category}</span><span className="text-stone-400">·</span><span>Опубліковано</span></div>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">{article.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">{article.intro}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-stone-200 py-4 text-sm">
              <span className={`grid size-9 place-items-center rounded-full font-semibold text-stone-900 ${article.color}`}>{article.initials}</span>
              <span className="font-medium">{article.author}</span><span className="text-stone-400">·</span><span className="text-stone-500">Остання редакція: {article.updated}</span>
            </div>

            <figure className="mt-7 overflow-hidden border border-stone-200 bg-emerald-950">
              <div className="relative h-64 overflow-hidden bg-emerald-950 sm:h-80" role="img" aria-label={`Ілюстрація: ${article.title}`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute left-[12%] top-[25%] h-36 w-52 rotate-[-12deg] rounded-[45%] bg-emerald-700 sm:left-[22%] sm:h-44 sm:w-64" />
                <div className="absolute left-[43%] top-[18%] h-40 w-36 rotate-[18deg] rounded-[42%] bg-emerald-600 sm:left-[49%] sm:h-48 sm:w-44" />
                <div className="absolute left-[34%] top-[48%] size-4 rounded-full bg-amber-300 ring-8 ring-amber-300/20 sm:left-[43%]" />
                <div className="absolute bottom-5 left-5 border-l-2 border-amber-300 pl-3 text-xs uppercase tracking-[0.18em] text-white">Мапа прикордоння · 7-й атлас</div>
                <div className="absolute right-5 top-5 grid size-12 place-items-center rounded-full border border-amber-300/70 text-xs text-amber-200">N<br/>↑</div>
              </div>
              <figcaption className="bg-white px-4 py-3 text-xs text-stone-500">Схематична мапа земель Гааполю та узбережжя Тихого моря · Архів Картографів</figcaption>
            </figure>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-stone-700">
              {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 border-t border-stone-200 pt-5">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-500">Пов’язані фракції</h2>
              <div className="mt-3 flex flex-wrap gap-2">{article.factions.map((faction, index) => <Link key={faction} href="/factions" className={`rounded-sm px-3 py-2 text-sm font-medium ${index === 0 ? "bg-emerald-100 text-emerald-900" : "bg-sky-100 text-sky-900"}`}>{faction}</Link>)}</div>
            </div>
          </article>

          <aside className="space-y-5">
            <section className="border border-stone-200 bg-white p-5">
              <h2 className="font-semibold">Поскаржитися на статтю</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">Помітили помилку, порушення правил або проблему з авторством? Редакція розгляне звернення.</p>
              <label className="mt-4 block text-xs font-semibold text-stone-700" htmlFor="report-reason">Причина звернення</label>
              <select id="report-reason" defaultValue="Оберіть причину" className="mt-2 h-10 w-full rounded-sm border border-stone-300 bg-white px-2 text-sm text-stone-600"><option>Оберіть причину</option><option>Фактична помилка</option><option>Порушення правил</option><option>Проблема з авторством</option></select>
              <button type="button" className="mt-3 w-full rounded-sm border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-700 hover:border-emerald-800 hover:text-emerald-900">Надіслати скаргу</button>
              <p className="mt-3 text-xs leading-5 text-stone-500">Демонстраційний інтерфейс: звернення не надсилається.</p>
            </section>
            <section className="border-l-4 border-amber-400 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Внесок у канон</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">Маєте доповнення до цієї історії? Створіть чернетку для редакційної перевірки.</p>
              <Link href="/editor" className="mt-3 inline-flex text-sm font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">Відкрити редактор</Link>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}