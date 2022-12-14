import React from 'react';
import classes from './Section.module.scss';

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {}

const Section = (props: SectionProps) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
