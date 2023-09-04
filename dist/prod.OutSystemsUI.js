"use strict";
var MyJSFramework;
(function (MyJSFramework) {
    var BottomSheet;
    (function (BottomSheet) {
        OutSystems.OSUI.Patterns.BottomSheetAPI.Initialize = CustomInitialize;
        function CustomInitialize(bottomSheetId) {
            const bottomSheet = OutSystems.OSUI.Patterns.BottomSheetAPI.GetBottomSheetItemById(bottomSheetId);
            const myBottomSheet = new MyBottomSheet(bottomSheet);
            myBottomSheet.build();
            return myBottomSheet;
        }
        BottomSheet.CustomInitialize = CustomInitialize;
        class MyBottomSheet {
            constructor(bottomSheet) {
                this._osuiBottomSheet = bottomSheet;
            }
            build() {
                this._osuiBottomSheet.build();
                this._bottomSheetBlockElement = OSFramework.OSUI.Helper.Dom.GetElementById(this._osuiBottomSheet.widgetId);
                this._bottomSheetOverlayElem = OSFramework.OSUI.Helper.Dom.ClassSelector(this._bottomSheetBlockElement, 'osui-bottom-sheet-overlay');
                this._bottomSheetOverlayElem.addEventListener('click', () => {
                    this._osuiBottomSheet.close();
                });
            }
        }
        BottomSheet.MyBottomSheet = MyBottomSheet;
    })(BottomSheet = MyJSFramework.BottomSheet || (MyJSFramework.BottomSheet = {}));
})(MyJSFramework || (MyJSFramework = {}));
