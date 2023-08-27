/// <reference path="../../node_modules/outsystems-ui/dist/OutSystemsUI.d.ts" />

namespace OverridePattern.BottomSheet {
    // Override OSUI Initialize method
    OutSystems.OSUI.Patterns.BottomSheetAPI.Initialize = CustomInitialize;

    // My custom Initialize BottomSheet method
    export function CustomInitialize(bottomSheetId: string): any {
        const bottomSheet = OutSystems.OSUI.Patterns.BottomSheetAPI.GetBottomSheetItemById(bottomSheetId);

        const myBottomSheet = new MyBottomSheet(bottomSheet);

        myBottomSheet.build();

        return myBottomSheet;
    }

    // My custom Sidebar Class
    export class MyBottomSheet {
        // OutSystems Submenu instance
        private _osuiBottomSheet: OSFramework.OSUI.Patterns.BottomSheet.IBottomSheet;
        private _bottomSheetOverlayElement: HTMLElement;

        constructor(bottomSheet: OSFramework.OSUI.Patterns.BottomSheet.IBottomSheet) {
            this._osuiBottomSheet = bottomSheet;
        }

        public build() {
            this._osuiBottomSheet.build();

            this._bottomSheetOverlayElement = OSFramework.OSUI.Helper.Dom.ClassSelector(this._osuiBottomSheet.selfElement.parentElement, OSFramework.OSUI.Patterns.BottomSheet.Enum.CssClass.PatternOverlay);

            this._bottomSheetOverlayElement.addEventListener('click', () => {
                this._osuiBottomSheet.close();
            })
        }
    }
}
