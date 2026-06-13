import { partners } from "@/lib/site";

/**
 * Trusted-by logo grid. Logos carried over from the existing site,
 * normalized to a consistent height and shown grayscale → color on hover.
 */
export default function PartnerWall() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 lg:grid-cols-7">
      {partners.map((p) => (
        <li
          key={p.file}
          className="group flex min-h-[132px] items-center justify-center bg-bg px-4 py-5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/logos/${p.file}`}
            alt={p.alt}
            loading="lazy"
            className="max-h-20 w-auto max-w-[88%] object-contain opacity-90 grayscale transition duration-300 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}
