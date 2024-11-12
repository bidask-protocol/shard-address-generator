import ReactGA from "react-ga4";

export const initGA = () => {
  const trackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  if (trackingId) {
    ReactGA.initialize(trackingId);
  } else {
    console.error("Google Analytics tracking ID not found.");
  }
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
