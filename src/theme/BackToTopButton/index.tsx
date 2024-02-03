/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useBackToTopButton} from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

export default function BackToTopButton(): JSX.Element {
  const {_, scrollToTop} = useBackToTopButton({threshold: 0});
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShown(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("keyup", handleScroll);
  }, []);

  return (
    <button
      aria-label={translate({
        id: 'theme.BackToTopButton.buttonAriaLabel',
        message: 'Scroll back to top',
        description: 'The ARIA label for the back to top button',
      })}
      className={clsx(
        'clean-btn',
        ThemeClassNames.common.backToTopButton,
        styles.backToTopButton,
        shown && styles.backToTopButtonShow,
      )}
      type="button"
      onClick={scrollToTop}
    />
  );
}
