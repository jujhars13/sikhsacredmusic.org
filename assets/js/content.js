/**
 * Retrieves content from a specified page using a Google Apps Script API.
 * @param {string} [pageName='faq'] - The name of the page to retrieve content from.
 * @returns {Promise<any>} - A promise that resolves to the retrieved content.
 */
function getContent(pageName='faq'){
  // const url=`https://script.google.com/macros/s/AKfycbzUYSHhmuejPw-cGlUTGQp89ihsGH9fX9u6ji4WdEhFXNBsOjm16aiZYMhYiwcSs25H/exec?page=${pageName}`
  const url=`/data/${pageName}.json}`
    return fetch(url)
    .then(response => response.json())
    .then(out => out.data)
    .catch(error => console.error('Error:', error));
}

module.exports = getContent;
