import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    loadGoogleTranslate();
  }, []);

  const loadGoogleTranslate = () => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  };

  return <div id="google_translate_element" className="hidden" />;
};

export default GoogleTranslate;
