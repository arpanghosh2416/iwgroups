import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Section.module.css";

const Section = (props) => {
  const { title, label, description, children, className, ...rest } = props;

  return (
    <section className={classNames(css.section, className)} {...rest}>
      <div data-aos="fade-up" className={css.sectionTitle}>
        {title ? <h2>{title}</h2> : null}
        {label ? <p className={css.label}>{label}</p> : null}
        <i className="fa-solid fa-building-columns text-xl text-primary-light"></i>
        {description ? <p className={css.description}>{description}</p> : null}
      </div>

      {children}
    </section>
  );
};

const { node, string } = PropTypes;

Section.propTypes = {
  children: node,
  className: string,
  description: string,
  title: string.isRequired,
  label: string.isRequired,
};

export default Section;
