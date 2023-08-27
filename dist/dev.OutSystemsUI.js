"use strict";
var OverridePattern;
(function (OverridePattern) {
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
                this._bottomSheetOverlayElement = OSFramework.OSUI.Helper.Dom.ClassSelector(this._osuiBottomSheet.selfElement.parentElement, OSFramework.OSUI.Patterns.BottomSheet.Enum.CssClass.PatternOverlay);
                this._bottomSheetOverlayElement.addEventListener('click', () => {
                    this._osuiBottomSheet.close();
                });
            }
        }
        BottomSheet.MyBottomSheet = MyBottomSheet;
    })(BottomSheet = OverridePattern.BottomSheet || (OverridePattern.BottomSheet = {}));
})(OverridePattern || (OverridePattern = {}));

//# sourceMappingURL=dev.OutSystemsUI.js.map
