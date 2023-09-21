"use strict";
var MyJSFramework;
(function (MyJSFramework) {
    var BottomSheet;
    (function (BottomSheet) {
        OutSystems.OSUI.Patterns.BottomSheetAPI.Initialize = CustomInitialize;
        function CustomInitialize(bottomSheetId) {
            const _bottomSheet = OutSystems.OSUI.Patterns.BottomSheetAPI.GetBottomSheetItemById(bottomSheetId);
            const _myBottomSheet = new MyBottomSheet(_bottomSheet);
            _myBottomSheet.build();
            return _myBottomSheet;
        }
        BottomSheet.CustomInitialize = CustomInitialize;
        class MyBottomSheet {
            constructor(bottomSheet) {
                this._osuiBottomSheet = bottomSheet;
            }
            _onOverlayClickHandler() {
                this._osuiBottomSheet.close();
            }
            build() {
                this._osuiBottomSheet.build();
                this._onOverlayClickCallback = this._onOverlayClickHandler.bind(this);
                this._bottomSheetBlockElement = OSFramework.OSUI.Helper.Dom.GetElementById(this._osuiBottomSheet.widgetId);
                this._bottomSheetOverlayElem = OSFramework.OSUI.Helper.Dom.ClassSelector(this._bottomSheetBlockElement, OSFramework.OSUI.Patterns.BottomSheet.Enum.CssClass.PatternOverlay);
                this._bottomSheetOverlayElem.addEventListener(OSFramework.OSUI.GlobalEnum.HTMLEvent.Click, this._onOverlayClickCallback);
            }
        }
        BottomSheet.MyBottomSheet = MyBottomSheet;
    })(BottomSheet = MyJSFramework.BottomSheet || (MyJSFramework.BottomSheet = {}));
})(MyJSFramework || (MyJSFramework = {}));
