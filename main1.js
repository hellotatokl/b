document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('pane-form');
  const urlInput = document.getElementById('pane-url');
  const loadingElement = document.getElementById('pane-loading');
  const logoElement = document.querySelector('.pane-header-image.logo');
  const resultsElement = document.getElementById('pane-results');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const hubspotForm = document.querySelector('.hbspt-form form');
    document.querySelector('.hs-email label:first-child').innerText = "Want to save this summary?";
    document.querySelector('.hs-input').placeholder = "Enter Email Address";

    // Hide the form and show the loading element
    form.style.display = 'none';
    fadeOut(logoElement);
    fadeIn(loadingElement);

    const urlValue = urlInput.value;

    fetch('https://ai.theysaid.io/survey/companyInfo', {
      method: 'POST',
      body: JSON.stringify({ url: urlValue }),
      headers: {
        "content-type": 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Hide the loading element and show the results
        fadeOut(loadingElement, function() {
          resultsElement.innerHTML = createResultsHTML(data);
          fadeIn(hubspotForm);
          fadeIn(resultsElement, function() {});
        });
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  });

  function fadeIn(element, callback) {
    if (window.getComputedStyle(element).display === 'none') {
      element.style.display = 'block';
    }
    element.style.opacity = 0;

    let opacity = 0;
    const fadeInInterval = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(fadeInInterval);
        if (callback) callback();
      } else {
        opacity += 0.1;
        element.style.opacity = opacity;
      }
    }, 50);
  }

  function fadeOut(element, callback) {
    let opacity = 1;
    const fadeOutInterval = setInterval(function() {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval);
        element.style.display = 'none';
        if (callback) callback();
      } else {
        opacity -= 0.1;
        element.style.opacity = opacity;
      }
    }, 50);
  }

  function createResultsHTML(data) {
    return `
      <h2>${data.companyName}</h2>
      <p>${data.summary}</p>
      <h3>Category ${data.category}</h3>
      <h4>Products & Services</h4>
      ${data.productsServices.map(service => 
        `<div class="service">
          <h5>${service.name}</h5>
          <p><strong>Features:</strong> ${service.features.join(', ')}</p>
          <p><strong>Benefits:</strong> ${service.benefits.join(', ')}</p>
          <p><strong>Unique Selling Points:</strong> ${service.uniqueSellingPoints.join(', ')}</p>
        </div>`
      ).join('')}
    `;
  }
});
