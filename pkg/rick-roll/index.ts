import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';
import RickRoll from './RickRoll.vue';
// Init the package
export default function(plugin: IPlugin) {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');
  plugin.addRoute({
    name:      'rick-roll',
    path:      '/rick-roll',
    component: RickRoll
  });
  // Load a product
  plugin.addProduct(require('./product'));
}
