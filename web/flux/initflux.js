import createMapActions from 'actions/map_actions.js';
import createExampleActions from 'actions/example_actions.js';

import MapStore from 'stores/map_store.js';
import ExampleStore from 'stores/example_store.js';

export default function initFlux(flux) {
  const mapActions = flux.createActions('map', createMapActions());
  flux.createStore('map', MapStore, { mapActions });

  const exampleActions = flux.createActions('example', createExampleActions());
  flux.createStore('example', ExampleStore, { exampleActions });
  // you nedd to return actions to pass them into create_routes
  return {mapActions, exampleActions};
}
