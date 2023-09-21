/// <reference path="../../node_modules/outsystems-ui/dist/OutSystemsUI.d.ts" />

namespace MyJSFramework.BottomSheet {
    // Override OSUI Initialize method
    OutSystems.OSUI.Patterns.BottomSheetAPI.Initialize = CustomInitialize;

    // My custom Initialize BottomSheet method
    export function CustomInitialize(bottomSheetId: string): any {
        const _bottomSheet = OutSystems.OSUI.Patterns.BottomSheetAPI.GetBottomSheetItemById(bottomSheetId);

        const _myBottomSheet = new MyBottomSheet(_bottomSheet);

        _myBottomSheet.build();

        return _myBottomSheet;
    }

    // My custom BottomSheet Class 
    export class MyBottomSheet {
        // OutSystems BottomSheet instance
        private _osuiBottomSheet: OSFramework.OSUI.Patterns.BottomSheet.IBottomSheet;
        // BottomSheet Block Element
        private _bottomSheetBlockElement: HTMLElement;
        // BottomSheet Overlay Element
        private _bottomSheetOverlayElem: HTMLElement;
        // Store the click callback
        private _onOverlayClickCallback: OSFramework.OSUI.GlobalCallbacks.Generic;

        constructor(bottomSheet: OSFramework.OSUI.Patterns.BottomSheet.IBottomSheet) {
            this._osuiBottomSheet = bottomSheet;
        }

        // Method to handle the Click overlay
        private _onOverlayClickHandler(): void {
            this._osuiBottomSheet.close();
        }

        /**
         * Method to build the MyBottomSheet
         *
         * @memberof MyBottomSheet
         */
        public build() {
            // Build the OutSystems UI BottomSheet
            this._osuiBottomSheet.build();

            // Set the overlay callback
            this._onOverlayClickCallback = this._onOverlayClickHandler.bind(this);

            // Get the BottomSheet block element
            this._bottomSheetBlockElement = OSFramework.OSUI.Helper.Dom.GetElementById(this._osuiBottomSheet.widgetId);

            // Get the BottomSheet Overlay element
            this._bottomSheetOverlayElem = OSFramework.OSUI.Helper.Dom.ClassSelector(this._bottomSheetBlockElement, OSFramework.OSUI.Patterns.BottomSheet.Enum.CssClass.PatternOverlay);

            // Add the click event on the Overlay element
            this._bottomSheetOverlayElem.addEventListener(OSFramework.OSUI.GlobalEnum.HTMLEvent.Click, this._onOverlayClickCallback);
        }
    }
}