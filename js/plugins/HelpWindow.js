// Credit Ossra and Helladen

var Helladen = Helladen || {};

Helladen.Window_EventItem_updatePlacement = Window_EventItem.prototype.updatePlacement;

Window_EventItem.prototype.updatePlacement = function() {
    Helladen.Window_EventItem_updatePlacement.call(this);

    if (this._helpWindow) {
      this._helpWindow.y = this.y + this.height;
    }
};

Window_EventItem.prototype.setHelpWindow = function(helpWindow) {
    Window_ItemList.prototype.setHelpWindow.call(this, helpWindow);
    if (this._helpWindow) {
      this._helpWindow.hide();
      this._helpWindow.close();
    }
};

Window_EventItem.prototype.open = function() {
    Window_ItemList.prototype.open.call(this);
    if (this._helpWindow) {
      this._helpWindow.show();
      this._helpWindow.open();
    }
};

Window_EventItem.prototype.close = function() {
    Window_ItemList.prototype.close.call(this);
    if (this._helpWindow) {
      this._helpWindow.hide();
      this._helpWindow.close();
    }
};

Helladen.Window_Message_subWindows = Window_Message.prototype.subWindows;

Window_Message.prototype.subWindows = function() {
  var tmpWindows = Helladen.Window_Message_subWindows.call(this);
  tmpWindows.push(this._helpWindow)
  return tmpWindows;
};

Helladen.Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;

Window_Message.prototype.createSubWindows = function() {
  Helladen.Window_Message_createSubWindows.call(this);
  this._helpWindow = new Window_Help();
  this._itemWindow.setHelpWindow(this._helpWindow);
};