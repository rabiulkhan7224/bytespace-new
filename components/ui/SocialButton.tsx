import Image from "next/image";

type SocialButtonProps = {
  label: string;
  icon: string;
};

export function SocialButton({ label, icon }: SocialButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid size-14 place-items-center rounded-2xl border border-neutral-200 bg-white transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2"
    >
      <Image src={icon} alt="" width={24} height={24} className="size-6" />
    </button>
  );
}
