import { Tab } from './tab'; // Import Tab from the tab.d.ts

/*

    Includes: .AddTab
              .SelectTab
              .Dialog
              .Destroy
              .Minimize

*/

export interface DialogButton {
    Title: string;
    Callback?: () => void;      // Optional callback,
                                // --> runs code after being pressed.
}

export interface DialogOptions {
    Title: string;              // The title (header) of your dialog.
    Content: string;            // The description of your dialog.
    Buttons?: DialogButton[];   // Optional array of buttons.
}

export interface Window {
    /**
     * Adds a new tab to the current Window object.
     * @param args - Object with two properties: Title and Icon
     * @returns A Tab object, allowing further actions on the tab.
     */
    AddTab(args: { Title: string; Icon: string }): Tab;

    /**
     * Make the library focus on a certain tab.
     * @param tabIndex - Index of which tab you want to focus on. (Start index is 1)
     */
    SelectTab(tabIndex: number): void;

    /**
     * Opens a new dialog window with customizable options.
     * @param options - Options to customize the title, message, and buttons of your dialog window.
     */
    Dialog(options: DialogOptions): void;

    /**
     * Destroys the current Window object.
     */
    Destroy(): void;

    /**
     * Closes the Window object, re-openable by keybind.
     */
    Minimize(): void;
}
