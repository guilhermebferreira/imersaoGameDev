class Personagem extends Animacao{

  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

    this.gravidade = 10
    this.velocidadePulo = 10
    this.yBase = height - altura
    this.y = this.yBase

  }

  exibe(){
    image(this.imagem,mouseX,this.y, this.largura, this.altura, this.matriz[this.frameAtual][0],this.matriz[this.frameAtual][1], this.larguraSprite,this.alturaSprite);
    this.anima();
  }

  pula(){
    this.velocidadePulo = - 50
  }

  aplicaGravidade(){
    this.y = this.y + this.velocidadePulo
    this.velocidadePulo = this.velocidadePulo + this.gravidade

    if(this.y > this.yBase){
      this.y = this.yBase
    }

  }

  estaColidindo(inimigo){

    const colisao = collideRectRect(
        this.x,
        this.y,
        this.largura,
        this.altura,
        inimigo.x,
        inimigo.y,
        inimigo.largura,
        inimigo.altura
    );

    return colisao;

  }

}