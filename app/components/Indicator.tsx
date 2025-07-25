export function Indicator({ Text }: { Text: string }) {
  return (
    <div className="flex items-center gap-2 py-1 px-3 rounded-full border border-purple-500/10 bg-purple-500/20">
      <span className="relative flex size-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-700 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-purple-700"></span>
      </span>
      <div className="text-[11px] font-semibold tracking-wider font-sans text-purple-600">
        {Text}
      </div>
    </div>
  );
}
