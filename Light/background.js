browser.windows.onCreated.addListener(themeWindow);

// Theme all currently open windows
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

function themeWindow(window) {
    // Check if the window is in private browsing
    if (window.incognito) {
        browser.theme.update(window.id, {
            colors: {
                frame: "#ededf0",
                tab_background_text: "#0c0c0d",
                toolbar: "#f9f9fa",
                toolbar_text: "#0c0c0d",
                toolbar_field: "#f9f9fa",
                toolbar_field_text: "#0c0c0d",
                toolbar_field_text_focus: "#0c0c0d",
                toolbar_field_focus: "#ededf0",
                toolbar_field_border: "#f9f9fa",
                toolbar_field_border_focus: "#ededf0",
                toolbar_bottom_separator: "#f9f9fa",
                toolbar_top_separator: "#f9f9fa",
                toolbar_field_separator: "#ededf0",
                toolbar_vertical_separator: "#ededf0",
                button_background_active: "#ededf0",
                button_background_hover: "#ededf0",
                popup: "#f9f9fa",
                popup_border: "#ededf0",
                popup_text: "#0c0c0d",
                popup_highlight: "#f9f9fa",
	            popup_highlight_text: "#0c0c0d",
                icons: "#8000d7",
                icons_attention: "#8000d7",
                frame_inactive: "#d7d7db",
                tab_loading: "#8000d7",
                tab_selected: "#f9f9fa",
                tab_line: "#8000d7",
                tab_background_separator: "#b1b1b3",
                ntp_background: "#f9f9fa",
                ntp_text: "#0c0c0d"
            }
        });
    }
    // Reset to the default theme otherwise
    else {
        browser.theme.update(window.id, {
            colors: {
                frame: "#ededf0",
                tab_background_text: "#0c0c0d",
                toolbar: "#f9f9fa",
                toolbar_text: "#0c0c0d",
                toolbar_field: "#f9f9fa",
                toolbar_field_text: "#0c0c0d",
                toolbar_field_text_focus: "#0c0c0d",
                toolbar_field_focus: "#ededf0",
                toolbar_field_border: "#f9f9fa",
                toolbar_field_border_focus: "#f9f9fa",
                toolbar_bottom_separator: "#f9f9fa",
                toolbar_top_separator: "#f9f9fa",
                toolbar_field_separator: "#ededf0",
                toolbar_vertical_separator: "#ededf0",
                button_background_active: "#ededf0",
                button_background_hover: "#ededf0",
                popup: "#f9f9fa",
                popup_border: "#ededf0",
                popup_text: "#0c0c0d",
                popup_highlight: "#ededf0",
	            popup_highlight_text: "#0c0c0d",
                icons: "#0c0c0d",
                icons_attention: "#0060df",
                frame_inactive: "#d7d7db",
                tab_loading: "#0060df",
                tab_selected: "#f9f9fa",
                tab_line: "#0060df",
                tab_background_separator: "#b1b1b3",
                ntp_background: "#f9f9fa",
                ntp_text: "#0c0c0d"
            }
        });
    }
}