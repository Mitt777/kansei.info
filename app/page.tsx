export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1f1f1f]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-sm tracking-[0.35em] text-neutral-500">
          KANSEI.INFO
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          AI時代に、<br />
          人はどこへ帰るのか。
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-700">
          Kansei.info は、感性・世界観・場所体験・AI時代の人間空間を研究する
          Independent Kansei Knowledge Platform です。
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {["Research", "Fieldwork", "Books", "Frameworks"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-300 bg-white/60 p-5 shadow-sm"
            >
              <h2 className="text-lg font-medium">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Coming soon
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-sm leading-7 text-neutral-500">
          Editor-in-Chief: Mitsuhiko Fujii / 感性WEB編集長
        </p>
      </section>
    </main>
  );
}