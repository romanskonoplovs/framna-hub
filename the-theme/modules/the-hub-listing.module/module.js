document.addEventListener('DOMContentLoaded', function() {
  const formatsBtn = document.querySelector('.hub-listing-header-area__formats-btn');
  const formatsContainer = document.querySelector('.hub-listing-formats');
  const contentCardContainer = document.querySelector('.hub-listing-content-cards');
  const formatsButtonContainer = document.querySelector('.hub-listing-formats');
  
  let itemsToload = 4;
  let filterArray = [];
  
  // Loading initial four cards
  loadCards(queryCollectionDataSet.items.slice(0, itemsToload));
  // Event listener on the 'Formats' button toggles the active for the 'Formats' button and hide class for the Formats filters.
  formatsBtn.addEventListener('click', () => {
    formatsBtn.classList.toggle('active');
    formatsContainer.classList.toggle('hide');
  });
  
  // Event Listener on a container with every the Format filters button.
  formatsButtonContainer.addEventListener('click', event => {
    // Checking if the clicked object has the data-value property.
    if(event.target.dataset.value){
      // If yes, it toggles the 'active' class (adds it if not present, removes it if it is).
      event.target.classList.toggle('active');
      // Selecting all Format filter buttons.
      let formatButtons = document.querySelectorAll('.hub-listing-formats__tag-button');
      // Looping through buttons with forEach, assigning the value of the data-value property to a variable.
      formatButtons.forEach(button => {
        let buttonValue = button.dataset.value;
        // If the button has the 'active' class, we push its data-value into the Filter Array; if not, we remove the data-value from the Filter Array (if it exists).
        if(button.classList.contains('active')) {
          if(!filterArray.includes(buttonValue)) {
            filterArray.push(buttonValue);
          }
        } else {
          filterArray = filterArray.filter(item => item !== buttonValue);
        }
      });
      // After new values are pushed to the array, we reset itemsToLoad to the original 4 cards.
      itemsToload = 4;
      // Remove old cards from the parent container.
      contentCardContainer.replaceChildren();
      // Load new cards based on the filter. (The Filter Array is checked each time the function is called.)
      loadCards(queryCollectionDataSet.items.slice(0, itemsToload));
    }
  });
  
  // Event listener for the scroll event
  window.addEventListener('scroll', handleScroll);
  
  // The function loads cards based on the contents of the Filter Array. If the array has items, it will load only those cards whose data-value property matches an item in the Filter Array.
  function loadCards(dataSet) {
    dataSet.forEach(dataSet => {
      if(filterArray.length === 0) {
        // If the array is empty, it appends the first 4 cards.
        contentCardContainer.appendChild(createHubListingContentCard(dataSet));
      } else {
        // Otherwise, it checks whether the dataSets' tags are included in the Filter Array.
        let hasCommonElement = dataSet.tags.some(tag => filterArray.includes(tag.value));
        // If they are, it appends them to the parent container.
        if (hasCommonElement) {
          contentCardContainer.appendChild(createHubListingContentCard(dataSet));
        }
      }
    });                                     
  }
  
  // Function to check if an element is visible in the viewport. (Should be straight forward)
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const elementWidth = rect.width;
    // Returns true or false depending on whether the element is halfway in the viewport.
    return (
      rect.top >= -elementHeight / 2 &&
      rect.left >= -elementWidth / 2 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight / 2 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth / 2
    );
  }
  
  // Function to handle elements as they enter the viewport.
  function handleScroll() {
    const elements = document.querySelectorAll('.hub-listing-content-card');
    // If the last visible element is halfway into the viewport,
    if (isInViewport(elements[elements.length - 1])) {
      // Then we save the previous position and add 2 to the items to load,
      let prevousPosition = itemsToload;
      itemsToload += 2;
      // And we render the next 2 items inline by passing the previous position and current position.
      loadCards(queryCollectionDataSet.items.slice(prevousPosition, itemsToload));
    }
  }

  // Function that creates card elements (Very straight forward I think.)
  function createHubListingContentCard(dataSet) {
    // Create the main card div
    const card = document.createElement('div');
    card.classList.add('hub-listing-content-card');

    // Create the image and label container
    const imageAndLabelContainer = document.createElement('div');
    imageAndLabelContainer.classList.add('hub-listing-content-card__image-and-label');

    // Create the image element
    const image = document.createElement('img');
    image.classList.add('hub-listing-content-card__image');
    image.src = dataSet.feature_image.url;

    // Create the label span
    const label = document.createElement('span');
    label.classList.add('label', 'hub-listing-content-card__label');
    label.textContent = dataSet.label;

    // Append image and label to their container
    imageAndLabelContainer.appendChild(image);
    imageAndLabelContainer.appendChild(label);

    // Create the text content container
    const textContentContainer = document.createElement('div');
    textContentContainer.classList.add('hub-listing-content-card__text-content');

    // Create the h2 heading
    const heading = document.createElement('h2');
    heading.classList.add('hub-listing-content-card__h2-heading');
    heading.textContent = dataSet.title;

    // Create the description paragraph
    const description = document.createElement('p');
    description.classList.add('hub-listing-content-card__descriptions');
    description.textContent = dataSet.description;

    // Append heading and description to the text content container
    textContentContainer.appendChild(heading);
    textContentContainer.appendChild(description);

    // Create the tags container
    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('hub-listing-content-card__tags');

    // Create and append each tag
    dataSet.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('tag', 'hub-listing-content-card__tag');
      tagElement.textContent = tag.label;
      tagsContainer.appendChild(tagElement);
    });

    // Append all main parts to the card
    card.appendChild(imageAndLabelContainer);
    card.appendChild(textContentContainer);
    card.appendChild(tagsContainer);

    return card;
  }
});