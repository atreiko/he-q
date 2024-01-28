export function TypographyH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{children}</h1>
  );
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
  return <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{children}</h1>;
}

export function TypographyP({ children }: { children: React.ReactNode }) {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
}

export function TypographySmall({ children }: { children: React.ReactNode }) {
  return <small className='text-sm font-medium leading-none'>{children}</small>;
}
