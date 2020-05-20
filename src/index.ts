import { IRegistry, IContainer, IResolver } from 'aurelia';
import { MaterialUIConfig } from './config';
import { Button } from '@material/mwc-button';
import { Checkbox } from '@material/mwc-checkbox';
import { Dialog } from '@material/mwc-dialog';
import { Drawer } from '@material/mwc-drawer';
import { Fab } from '@material/mwc-fab';
import { Formfield } from '@material/mwc-formfield';
import { Icon } from '@material/mwc-icon';
import { IconButton } from '@material/mwc-icon-button';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import { lineRipple, LineRipple } from '@material/mwc-line-ripple';
import { List } from '@material/mwc-list';
import { LinearProgress } from '@material/mwc-linear-progress';
import { Menu } from '@material/mwc-menu';
import { NotchedOutline } from '@material/mwc-notched-outline';
import { Radio } from '@material/mwc-radio';
import { Ripple } from '@material/mwc-ripple';
import { Select } from '@material/mwc-select';
import { Slider } from '@material/mwc-slider';
import { floatingLabel } from '@material/mwc-floating-label'
import { Snackbar } from '@material/mwc-snackbar';
import { Switch } from '@material/mwc-switch';
import { Tab } from '@material/mwc-tab';
import { TabBar } from '@material/mwc-tab-bar';
import { TabIndicator } from '@material/mwc-tab-indicator';
import { TabScroller } from '@material/mwc-tab-scroller';
import { TopAppBar } from '@material/mwc-top-app-bar';
import { TopAppBarFixed } from '@material/mwc-top-app-bar-fixed';


export class MaterialUI implements IRegistry, MaterialUIConfig {
    register(container: IContainer, ...params: unknown[]): void | IContainer | IResolver<any> {
    }
    static config(config?: (config: MaterialUIConfig) => void): MaterialUI {
        const instance = new MaterialUI();
        config && config(instance);
        return instance;
    }

}


export { MaterialUIConfig };
export { Button };
export { Checkbox };
export { Dialog };
export { Drawer };
export { Fab };
export { Formfield };
export { Icon };
export { IconButton };
export { IconButtonToggle };
export { lineRipple, LineRipple };
export { List };
export { LinearProgress };
export { Menu };
export { NotchedOutline };
export { Radio };
export { Ripple };
export { Select };
export { Slider };
export { floatingLabel };
export { Snackbar };
export { Switch };
export { Tab };
export { TabBar };
export { TabIndicator };
export { TabScroller };
export { TopAppBar };
export { TopAppBarFixed };