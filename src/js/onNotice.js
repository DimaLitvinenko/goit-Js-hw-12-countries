import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
import 'material-design-icons/iconfont/material-icons.css'

import { error, defaultModules } from '@pnotify/core'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'

defaultModules.set(PNotifyMobile, {});

export default function showError(errorMessage) {
  error({
    text: errorMessage,
    hide: true,
    delay: 700,
    sticker: true,
    mode: 'light',
    width: '100%',
    icons: 'brighttheme',
    closer: true,
    closerHover: false,
  });
}
