import React from 'react';
import styles from './CardGrid.module.css';

type CardGridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardGrid({ children, className }: CardGridProps) {
  return <div className={`${styles.grid} ${className ?? ''}`.trim()}>{children}</div>;
}
