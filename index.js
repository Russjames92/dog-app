function getDogImage() {
    $('form').submit(event => {
      event.preventDefault();
      let breed = $('.breed').val();
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          render(json);
        })
        .catch(error => alert('Something exploded'))
    })
  }
  function render(json) {
    $('.results').html(`
      <h2>Look at this dog!</h2>
      <img class="results-img" src="${json.message}" alt="placeholder">`);
    $('.results').removeClass('hidden');
  }
  function main() {
    getDogImage();
  }
  $(main);