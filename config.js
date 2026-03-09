// Central place for URLs and on-chain identifiers used by the landing.
// Update this file when mirrors, socials, swap routes, or token addresses change.

window.FPOM_CONFIG = Object.freeze({
  // Main FPOM contract on Massa.
  contractAddress: "AS12GDtiLRQELN8e6cYsCiAGLqdogk59Z9HdhHRsMSueDA8qYyhib",

  // Public-facing links grouped by purpose.
  links: Object.freeze({
    // Hero and game entry routes.
    buyFpomAnchor: "#buy-fpom",
    pacFpomDeweb: "https://pac-fpom.deweb.half-red.net",
    pacFpomMns: "http://pac-fpom.massa",
    pacFpomMirror: "https://pac-fpom.deweb.node-master.fr",
    pacFpomGithub: "https://massivedev0.github.io/pac-fpom/",

    // Social and repo links.
    xMain: "https://x.com/PepeOnMassaFake",
    xIntro: "https://x.com/PepeOnMassaFake/status/1935283435217592782",
    xSummary: "https://x.com/PepeOnMassaFake/status/1935284341887684740",
    pacFpomRepo: "https://github.com/massivedev0/pac-fpom",

    // Swap and market routes.
    dusaWidgetMasToFpom:
      "https://app.dusa.io/widget?fixIn=true&fixOut=true&tokenOut=AS12GDtiLRQELN8e6cYsCiAGLqdogk59Z9HdhHRsMSueDA8qYyhib",
    dusaPool:
      "https://app.dusa.io/pools/AS12GDtiLRQELN8e6cYsCiAGLqdogk59Z9HdhHRsMSueDA8qYyhib/AS12U4TZfNK7qoLyEERBBRDMu8nm5MKoRzPXDXans4v9wdATZedz9/100/V2",
    eagleFiToken: "https://www.eaglefi.io/token/AS12GDtiLRQELN8e6cYsCiAGLqdogk59Z9HdhHRsMSueDA8qYyhib",
    duserPumpTrade: "https://duser-pump.netlify.app/trade/AS12GDtiLRQELN8e6cYsCiAGLqdogk59Z9HdhHRsMSueDA8qYyhib"
  })
});
