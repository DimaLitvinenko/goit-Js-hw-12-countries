import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/Angeler.css';
import 'material-design-icons/iconfont/material-icons.css'
import  '@pnotify/mobile/dist/PNotifyMobile.css'; 

import { error, defaultModules, Stack } from '@pnotify/core'
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});

export default function showError(errorMessage) {
  error({
    text: errorMessage,
    hide: true,
    delay: 800,
    sticker: true,
    mode: 'light',
    shadow: true,
    width: '100%',
    mouseReset: true,
    maxTextHeight: null,
    styling: 'angeler',
    icons: 'angeler',
    addClass : 'angeler-extended', 
    closer: true,
    closerHover: false,
    stack : new Stack ({ 
      dir1: 'down',  
      dir2: 'right',  // Позиция от верхнего левого угла. 
      firstpos1: 90,  
      firstpos2: 90  // 90 пикселей сверху, 90 пикселей слева. 
    }) 
  });
}
