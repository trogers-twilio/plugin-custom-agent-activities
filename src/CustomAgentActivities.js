import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import CustomizeFlexComponents from './flex-hooks/components';
import ConfigureFlexStrings from './flex-hooks/strings';
import RegisterFlexNotifications from './flex-hooks/notifications';
import CustomizeGlobalStyles from './styles';

import reducers, { namespace } from './states';

const PLUGIN_NAME = 'CustomAgentActivities';

export default class CustomAgentActivities extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);
    ConfigureFlexStrings(flex, manager);
    RegisterFlexNotifications(flex, manager);
    CustomizeFlexComponents(flex, manager);
    CustomizeGlobalStyles();
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
