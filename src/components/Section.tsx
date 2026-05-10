import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
