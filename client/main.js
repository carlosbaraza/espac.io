import './main.html';
import { initCanvas } from '/imports/client/startup/canvas';

Meteor.startup(() => {
  initCanvas();
});
