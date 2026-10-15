import Link from "next/link";

const factions = [
  { name: "Королівство Гааполь", region: "Північні долини", color: "bg-emerald-700", soft: "bg-emerald-100 text-emerald-950", mark: "Г", description: "Держава гірських фортець і річкових міст. Її хранителі ведуть літочислення за розливами трьох великих рік.", count: 42, leader: "Королева Аделаїда II" },
  { name: "Франтовілія", region: "Південні рівнини", color: "bg-rose-700", soft: "bg-rose-100 text-rose-950", mark: "Ф", description: "Союз вільних міст, виноградних долин і старих лісів. Франтовілійські посли славляться терпінням та довгою пам’яттю.", count: 36, leader: "Срібна Рада" },
  { name: "Орден Картографів", region: "Усі відомі землі", color: "bg-sky-700", soft: "bg-sky-100 text-sky-950", mark: "К", description: "Мандрівники, які наносять на мапи мінливі береги й дороги, що з’являються лише в певні ночі.", count: 18, leader: "Перший кресляр Терен" },
  { name: "Срібна Рада", region: "Франтовілія", color: "bg-violet-700", soft: "bg-violet-100 text-violet-950", mark: "Р", description: "Дорадчий союз хранителів архівів, дипломатів та астрономів. Рада опікується договорами між державами.", count: 12, leader: "Семеро обраних" },
];

export default function FactionsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-sm bg-emerald-900 font-semibold text-amber-200">А</span><span className="text-sm font-bold">Атлас Межиріччя</span></Link>
          <nav aria-label="Навігація довідника" className="flex gap-3 text-sm font-medium sm:gap-6"><Link href="/" className="text-stone-600 hover:text-emerald-900">Головна</Link><Link href="/articles/1" className="hidden text-stone-600 hover:text-emerald-900 sm:inline">Стаття</Link><Link href="/editor" className="rounded-sm border border-stone-300 px-3 py-2 text-stone-700 hover:border-emerald-800">Редактор</Link></nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-11">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Люди та союзи</p><h1 className="mt-1 text-3xl font-semibold">Довідник фракцій</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">Держави, ордени й ради, чиї рішення змінюють хід історії Межиріччя.</p></div>
          <div className="flex items-center gap-3"><span className="text-sm text-stone-500">12 фракцій у світі</span><button type="button" className="rounded-sm bg-emerald-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"><span aria-hidden="true">+</span> Додати фракцію</button></div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {factions.map((faction) => (
            <article key={faction.name} className="border border-stone-200 bg-white">
              <div className={`h-1.5 ${faction.color}`} />
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className={`grid size-12 shrink-0 place-items-center rounded-sm text-xl font-semibold ${faction.soft}`}>{faction.mark}</span>
                  <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-semibold">{faction.name}</h2><span className="rounded-sm bg-stone-100 px-2 py-1 text-[11px] font-medium text-stone-600">{faction.region}</span></div><p className="mt-3 text-sm leading-6 text-stone-600">{faction.description}</p></div>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4">
                  <div className="flex gap-5 text-xs text-stone-500"><span><strong className="text-stone-900">{faction.count}</strong> статей</span><span>Провід: <strong className="font-medium text-stone-700">{faction.leader}</strong></span></div>
                  <Link href="/articles/1" className="text-xs font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-800">Пов’язані статті</Link>
                </div>
                <div className="mt-4 flex justify-end"><button type="button" className="text-xs font-medium text-stone-500 underline decoration-stone-300 underline-offset-4 hover:text-rose-800">Видалити фракцію</button></div>
              </div>
            </article>
          ))}
        </div>
        <section className="mt-8 flex flex-col justify-between gap-4 border-l-4 border-amber-400 bg-white p-5 sm:flex-row sm:items-center sm:px-6">
          <div><h2 className="font-semibold">Керуйте картою союзів</h2><p className="mt-1 text-sm text-stone-600">Створення й видалення фракцій доступне головному редактору.</p></div>
          <span className="w-fit rounded-sm bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900">Інтерфейс керування · макет</span>
        </section>
      </main>
    </div>
  );
}