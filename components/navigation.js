import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { MENU } from "../constants";
import styles from "./navigation.module.css";

import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";

function Navigation({ flat = false }) {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0; //showTitle değişkeni, flat prop'una bağlı olarak başlıkların gösterilip gösterilmeyeceğini belirler.
        const selected = router.pathname === menu.path; //selected değişkeni, mevcut yolun menü öğesinin yolu ile eşleşip eşleşmediğini kontrol eder.

        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navButton, menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
