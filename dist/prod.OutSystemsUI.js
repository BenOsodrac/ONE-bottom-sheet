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
                this._bottomSheetOverlayElem = OSFramework.OSUI.Helper.Dom.ClassSelector(this._osuiBottomSheet.selfElement.parentElement, 'osui-bottom-sheet-overlay');
                this._bottomSheetOverlayElem.addEventListener(OSFramework.OSUI.GlobalEnum.HTMLEvent.Click, () => {
                });
            }
        }
        BottomSheet.MyBottomSheet = MyBottomSheet;
    })(BottomSheet = MyJSFramework.BottomSheet || (MyJSFramework.BottomSheet = {}));
})(MyJSFramework || (MyJSFramework = {}));
