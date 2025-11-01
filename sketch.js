/*
  Presente: Ampulheta interativa
  Clique sobre cada detalhe para ver a explicação.
*/

let img;
let tooltip;        // div HTML que mostra o texto
let areas = [       // retângulos clicáveis
  {x:353, y:198, w:330, h:130, texto:"Este sol representa o início de um novo dia.."},
  {x:480, y:630, w:79,  h:79,  texto:"músicas."},
  {x:365, y:675, w:90,  h:113, texto:"signo."},
  {x:563, y:667, w:84,  h:91,  texto:"Mensagens."},
  {x:470, y:768, w:74,  h:79,  texto:"Strava."},
  {x:570, y:754, w:69,  h:101, texto:"Flor."}
];

function preload() {
  img = loadImage('ampulheta.png');
}

function setup() {
  // cria a tela exatamente no tamanho da imagem
  createCanvas(img.width, img.height);

  // cria a “tooltip” (um <div> HTML sobre o canvas)
  tooltip = createDiv('');
  tooltip.style('position', 'absolute');
  tooltip.style('padding', '12px 16px');
  tooltip.style('background', '#ffffffdd');
  tooltip.style('border', '2px solid #444');
  tooltip.style('border-radius', '8px');
  tooltip.style('font-family', 'Arial, sans-serif');
  tooltip.style('font-size', '16px');
  tooltip.style('color', '#000');
  tooltip.style('max-width', '240px');
  tooltip.style('display', 'none'); // começa invisível
}

function draw() {
  image(img, 0, 0);
  // (opcional) — para ver as áreas, ative o bloco abaixo
  /*
  noFill();
  stroke('red');
  areas.forEach(a => rect(a.x, a.y, a.w, a.h));
  */
}

function mousePressed() {
  // verifica se o clique caiu em alguma área
  let achou = false;
  areas.forEach(a => {
    if (
      mouseX >= a.x && mouseX <= a.x + a.w &&
      mouseY >= a.y && mouseY <= a.y + a.h
    ) {
      mostrarTooltip(a.texto);
      achou = true;
    }
  });
  if (!achou) { esconderTooltip(); }
}

function mostrarTooltip(txt) {
  tooltip.html(txt);
  tooltip.position(mouseX + 15, mouseY + 15); // desloca um pouco do cursor
  tooltip.style('display', 'block');

  // Esconde automaticamente após 3 s
  clearTimeout(tooltip.timer);
  tooltip.timer = setTimeout(esconderTooltip, 3000);
}

function esconderTooltip() {
  tooltip.style('display', 'none');
}

