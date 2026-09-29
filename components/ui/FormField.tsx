import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormField({
  id,
  label,
  error,
  className,
  ...inputProps
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="text-body-s mb-2 block text-neutral-950">
        {label}
      </label>

      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "text-body-m h-14 w-full rounded-2xl border bg-white px-5 text-neutral-900 placeholder:text-neutral-400",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-0",
          error ? "border-red-400" : "border-neutral-200",
          className,
        )}
        {...inputProps}
      />

      {error && (
        <p id={errorId} className="text-body-xs mt-1.5 text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
