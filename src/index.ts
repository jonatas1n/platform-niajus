import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the teaching extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'teaching:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension teaching is activated!');
  }
};

export default plugin;
