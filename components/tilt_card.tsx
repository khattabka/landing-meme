import { Spotlight } from '@/components/ui/spotlight';
import { Tilt } from '@/components/ui/tilt';
import React, { ReactNode } from 'react';

interface TiltCardProps {
  children?: ReactNode;
  className?: string;
  key?: string;
}


export function TiltCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className='max-w-sm'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-lg'
      >
        <Spotlight
          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <img
          src={image}
          alt={title}
          className='h-72 sm:h-full w-full  object-cover grayscale duration-200 group-hover:grayscale-0'
        />
      </Tilt>
      <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
        <h3 className='font-mono text-xl font-medium text-zinc-500 dark:text-zinc-400'>
          {title}
        </h3>
        <p className='text-sm text-black dark:text-white'>{description}</p>
      </div>
    </div>
  );
}
