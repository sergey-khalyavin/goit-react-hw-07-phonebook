import { CSSTransition } from 'react-transition-group';
import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import styles from './Notification.module.css';

defaultModules.set(PNotifyMobile, {});

export default function errorMessage(name) {
  <CSSTransition in={true} key={name} appear timeout={250} classNames={styles}>
    {error({
      text: `${name} is already in contacts!`,
      animation: 'fade',
      animateSpeed: '5000ms',
    })}
  </CSSTransition>;
}
