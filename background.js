chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ 
    url: "https://www.renfe.com/es/es/cercanias/cercanias-madrid/horarios" 
  }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fillAndSubmitForm
    });
  });
});

function fillAndSubmitForm() {
  const iframe = document.querySelector("iframe#horariosCercanias");
  if (iframe) {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const origin = iframeDocument.querySelector("#IdOrigen");
    const destination = iframeDocument.querySelector("#IdDestino");
    const searchButton = iframeDocument.querySelector("#btnBusqueda");

    if (origin && destination && searchButton) {
      origin.value = "Cantoblanco Universidad";
      destination.value = "Coslada";
      searchButton.click();
    }
  }
}
