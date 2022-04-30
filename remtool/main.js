document.getElementById('height').addEventListener('keyup',() => {
  let height = document.getElementById('height').value;
  let totalheight = document.getElementById('th').value;
  document.getElementById('heightrem').textContent = `${(height * 100 / totalheight).toFixed(2)} rem`;
});


document.getElementById('width').addEventListener('keyup',() => {
  let width = document.getElementById('width').value;
  let totalwidth = document.getElementById('tw').value;
  document.getElementById('widthrem').textContent = `${(width * 100 / totalwidth).toFixed(2)} rem`;
})

function copyTexth() {
            /* Copy text into clipboard */
            navigator.clipboard.writeText(document.getElementById('heightrem').textContent);
        }
function copyTextw() {
            /* Copy text into clipboard */
            navigator.clipboard.writeText(document.getElementById('widthrem').textContent);
        }
