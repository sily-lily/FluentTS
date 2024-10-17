/*

    Includes: .AddTab
              .SelectTab
              .Dialog
              .Destroy
              .Minimize

*/

interface DialogButton {
    Title: string;
    Callback?: () => void;      // Optional callback,
                                // --> runs code after being pressed.
}

interface DialogOptions {
    Title: string;              // The title (header) of your dialog.
    Content: string;            // The description of your dialog.
    Buttons?: DialogButton[];   // Optional array of buttons.
}

interface Window {
    /**
     * Adds a new tab to the current Window object.
     * @param args - Array with two arguments: Title and Icon
     */
    AddTab(args: [Title: string, Icon: string]): void;

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