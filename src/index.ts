import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';

import { Widget } from '@lumino/widgets';
/**
 * Initialization data for the teaching extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-apod',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension teaching is activated!');
    
    const newWidget = () => {
      const content = new Widget();
      const widget = new MainAreaWidget({ content });
      widget.id = 'apod-jupyterlab';
      widget.title.label = 'Astronomy Picture';
      widget.title.closable = true;
      return widget;
    }

    let widget = newWidget();

    const command: string = 'apod:open';
    app.commands.addCommand(command, {
      label: 'Random Astronomy Picture',
      execute: () => {
        if (widget.isDisposed) {
          widget = newWidget();
        }
        if (!widget.isAttached) {
          app.shell.add(widget, 'main');
        }

        app.shell.activateById(widget.id);
      }
    });

    palette.addItem({ command, category: 'Tutorial' });
  }
};

export default plugin;
