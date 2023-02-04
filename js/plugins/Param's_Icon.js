/*:
* @plugindesc Change Parameter's Name to icon
* Read help
* @author mrcopra
*
* @help
* Change parameters names in Database-->Terms to number of icon's ID
*/
Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
        var paramId = i + 2;
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
       // this.drawText(TextManager.param(paramId), x, y2, 160);
       this.drawIcon(Number($dataSystem.terms.params[paramId-2]),x,y2,160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x +30, y2, 60, 'right');
    }
};

Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
    //this.changeTextColor(this.systemColor());
   // this.drawText(TextManager.param(paramId), x, y, 120);
    this.drawIcon(Number($dataSystem.terms.params[paramId-2]),x,y,120);
};
