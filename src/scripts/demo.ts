/// <reference path="../../node_modules/outsystems-ui/dist/OutSystemsUI.d.ts" />

namespace MyJSFramework.BottomSheet {
    // Override OSUI Initialize method
    OutSystems.OSUI.Patterns.BottomSheetAPI.Initialize = CustomInitialize;

    // My custom Initialize BottomSheet method
    export function CustomInitialize(bottomSheetId: string): any {
        const bottomSheet = OutSystems.OSUI.Patterns.BottomSheetAPI.GetBottomSheetItemById(bottomSheetId);

        const myBottomSheet = new MyBottomSheet(bottomSheet);

        myBottomSheet.build();

        return myBottomSheet;
    }

    // My custom BottomSheet Class 
    export class MyBottomSheet {
        // OutSystems BottomSheet instance
        private _osuiBottomSheet: OSFramework.OSUI.Patterns.BottomSheet.IBottomSheet;
        // BottomSheet Block Element
        private _bottomSheetBlockElement: HTMLElement;
        // BottomSheet Overlay Element
        private _bottomSheetOverlayElem: HTMLElement;

        constructor(bottomSheet: OSFramework.OSUI.Patterns.BottomSheet.IBottomSheet) {
            this._osuiBottomSheet = bottomSheet;
            this._bottomSheetBlockElement = OSFramework.OSUI.Helper.Dom.GetElementById(this._osuiBottomSheet.widgetId);
        }

        public build() {
            this._osuiBottomSheet.build();

            this._bottomSheetOverlayElem = OSFramework.OSUI.Helper.Dom.ClassSelector(this._bottomSheetBlockElement, 'osui-bottom-sheet-overlay');

            this._bottomSheetOverlayElem.addEventListener('click', () => {
                //
            })
        }
    }
}