export const NAME = 'rick-roll';

export function init(plugin, store) {
  const { product } = plugin.DSL(store, NAME);

  product({
    inStore:             'management',
    icon:                'globe',
    label:               'Rick Roll',
    removable:           false,
    showClusterSwitcher: false,
    category:            'global',
    to:                  { name: 'rick-roll' }
  });
}
