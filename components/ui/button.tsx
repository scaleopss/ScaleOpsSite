import * as React from 'react';
import { cn } from '@/lib/utils';

export function Button({
  className,
  variant = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost' }) {
  const styles = {
    default: 'bg-[#111111] text-white hover:scale-[1.02] shadow-sm',
    outline: 'border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-white',
    ghost: 'bg-transparent text-[#111111] hover:bg-[#F5F5F5]',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98]',
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
