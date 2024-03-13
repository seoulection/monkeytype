import * as ShareCustomThemeModal from "../modals/share-custom-theme";
import * as CookiesModal from "../modals/cookies";

const settingsPage = document.querySelector("#pageSettings");

settingsPage
  ?.querySelector("#shareCustomThemeButton")
  ?.addEventListener("click", () => {
    ShareCustomThemeModal.show();
  });

settingsPage
  ?.querySelector(".section.updateCookiePreferences button")
  ?.addEventListener("click", () => {
    CookiesModal.show(true);
  });