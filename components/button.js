import React from "react";
import cn from "classnames";
import Link from "next/link";

import styles from "../components/button.module.css";

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href} legacyBehavior>
      <a {...props}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;

  return (
    <Comp
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;

//passHref: Link bileşeni, a etiketi için href değerini geçer.
// legacyBehavior: Next.js'in eski Link davranışını kullanır.
