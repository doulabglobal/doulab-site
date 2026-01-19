import React from 'react';

type CardGridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardGrid({ children, className }: CardGridProps) {
  return <div className={`components-cardgrid-cardgrid__grid ${className ?? ''}`.trim()}>{children}</div>;
}
