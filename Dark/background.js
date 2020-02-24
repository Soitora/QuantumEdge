browser.windows.onCreated.addListener(themeWindow);

// Theme all currently open windows
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

function themeWindow(window) {
    // Check if the window is in private browsing
    if (window.incognito) {
        browser.theme.update(window.id, {
            colors: {
                frame: "#25003e",
                toolbar: "#2a2a2e",
                toolbar_text: "#d7d7db",
                toolbar_field: "#2a2a2e",
                toolbar_field_text: "#d7d7db",
                toolbar_field_text_focus: "#d7d7db",
                toolbar_field_focus: "#38383d",
                toolbar_field_border: "#2a2a2e",
                toolbar_field_border_focus: "#2a2a2e",
                toolbar_bottom_separator: "#2a2a2e",
                toolbar_top_separator: "#2a2a2e",
                toolbar_field_separator: "#38383d",
                toolbar_vertical_separator: "#38383d",
                button_background_active: "#38383d",
                button_background_hover: "#38383d",
                popup: "#38383d",
                popup_border: "#2a2a2e",
                popup_text: "#d7d7db",
                popup_highlight: "#2a2a2e",
                icons: "#d7d7db",
                icons_attention: "#8000D7",
                frame_inactive: "#38383d",
                tab_background_text: "#d7d7db",
                tab_loading: "#8000D7",
                tab_selected: "#2a2a2e",
                tab_line: "#8000D7",
                tab_background_separator: "#737373",
                ntp_background: "#2a2a2e",
                ntp_text: "#d7d7db"
            }
        });
    }
    // Reset to the default theme otherwise
    else {
        browser.theme.update(window.id, {
            colors: {
                frame: "#38383d",
                tab_background_text: "#d7d7db",
                toolbar: "#2a2a2e",
                toolbar_text: "#d7d7db",
                toolbar_field: "#2a2a2e",
                toolbar_field_text: "#d7d7db",
                toolbar_field_text_focus: "#d7d7db",
                toolbar_field_focus: "#38383d",
                toolbar_field_border: "#2a2a2e",
                toolbar_field_border_focus: "#2a2a2e",
                toolbar_bottom_separator: "#2a2a2e",
                toolbar_top_separator: "#2a2a2e",
                toolbar_field_separator: "#38383d",
                toolbar_vertical_separator: "#38383d",
                button_background_active: "#38383d",
                button_background_hover: "#38383d",
                popup: "#38383d",
                popup_border: "#2a2a2e",
                popup_text: "#d7d7db",
                popup_highlight: "#2a2a2e",
                icons: "#d7d7db",
                icons_attention: "#0060df",
                frame_inactive: "#38383d",
                tab_loading: "#0060df",
                tab_selected: "#2a2a2e",
                tab_line: "#737373",
                tab_background_separator: "#737373",
                ntp_background: "#2a2a2e",
                ntp_text: "#d7d7db"
            }
        });
    }
}