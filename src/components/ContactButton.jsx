import { ArrowRight } from 'lucide-react';
import { GlowEffect } from './ui/glow-effect';
import Link from 'next/link';

export function ContactBtn() {
  return (
    <div className='relative'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      <Link href="/contact">
      <button className='relative cursor-pointer inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f]'>
        Contact Us <ArrowRight className='h4 w-4' />
      </button>
      </Link>
    </div>
  );
}
