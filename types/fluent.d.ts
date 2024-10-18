import { Window } from './window';

/*

*/
    Includes: .Notify,
              .CreateWindow
/**
 * Fluent interface that provides methods to interact with the Fluent UI system.
 */
export interface Fluent {
    /**
     * Notifies the user with a custom notification.
     * @param data - Data for the notification.
     */
    Notify(data: {}): void;

    /**
     * Creates a new window.
     * @param data - Options for creating the window.
     * @returns - A window instance.
     */
    CreateWindow(data: {
        Title: string;
        SubTitle: string;
        TabWidth: number;
        Size: UDim2;
        Acrylic: boolean;
        Theme: string;
        MinimizeKey: Enum.KeyCode;
    }): Window;
}

// Global declaration for the Fluent object
declare global {
    const fluent: Fluent;
}
