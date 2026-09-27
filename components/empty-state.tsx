import Image from "next/image";

export function EmptyState({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      <Image
        src={src}
        alt=""
        width={420}
        height={480}
        unoptimized
        className="h-auto w-40 object-contain md:w-48"
      />
      <h2 className="mt-6 font-sans text-lg font-bold text-[#2D2B30]">{title}</h2>
      <p className="mt-1 max-w-xs font-sans text-sm leading-relaxed text-[#737373]">
        {text}
      </p>
    </div>
  );
}
