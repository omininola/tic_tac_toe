jogador=true;

jogadas = 0;

player1 = 0;
player2 = 0;
velha = 0;

foi1 = 0;
foi2 = 0;
foi3 = 0;
foi4 = 0;
foi5 = 0;
foi6 = 0;
foi7 = 0;
foi8 = 0;
foi9 = 0;

function qualJogador(a){
    (jogador)? clicar('x', a) : clicar('o', a);
    jogadas++;
}

function clicar(letra, a){
    quadrado = document.getElementById(a);
    botao = document.getElementById('boto'+a);
    quem = document.getElementById('quem');
    corDoX = document.getElementById("corX").value;
    corDoO = document.getElementById("corO").value;
    if(letra=='x'){
        quadrado.innerHTML='X';
        quadrado.style.color='white';
        botao.disabled = true;
        botao.style.cursor="default";
        botao.style.backgroundColor=corDoX;
        quem.innerHTML="Vez de: O";
        jogador=false;
        verificar('x', a);
    }
    if(letra=='o'){
        quadrado.innerHTML='O';
        quadrado.style.color='white';
        botao.disabled = true;
        botao.style.cursor="default";
        botao.style.backgroundColor=corDoO;
        quem.innerHTML="Vez de: X";
        jogador=true;
        verificar('o', a);
    }
}

function verificar(player, onde){
    if(player=='x'){
        switch(onde){
            case 1: foi1=1; break;
            case 2: foi2=1; break;
            case 3: foi3=1; break;
            case 4: foi4=1; break;
            case 5: foi5=1; break;
            case 6: foi6=1; break;
            case 7: foi7=1; break;
            case 8: foi8=1; break;
            case 9: foi9=1; break;
        }
    }
    if(player=='o'){
        switch(onde){
            case 1: foi1=2; break;
            case 2: foi2=2; break;
            case 3: foi3=2; break;
            case 4: foi4=2; break;
            case 5: foi5=2; break;
            case 6: foi6=2; break;
            case 7: foi7=2; break;
            case 8: foi8=2; break;
            case 9: foi9=2; break;
        }
    }
    if(foi1==1 && foi2==1 && foi3==1 || foi4==1 && foi5==1 && foi6==1 || foi7==1 && foi8==1 && foi9==1 || 
        foi1==1 && foi4==1 && foi7==1 || foi2==1 && foi5==1 && foi8==1 || foi3==1 && foi6==1 && foi9==1 ||
        foi1==1 && foi5==1 && foi9==1 || foi3==1 && foi5==1 && foi7==1){
            document.getElementById('quemUltimo').innerHTML="Ganhador(a) da última foi: X";
            player1++;
            alterarPlacar();
            reset();
    }
    else if(foi1==2 && foi2==2 && foi3==2 || foi4==2 && foi5==2 && foi6==2 || foi7==2 && foi8==2 && foi9==2 || 
        foi1==2 && foi4==2 && foi7==2 || foi2==2 && foi5==2 && foi8==2 || foi3==2 && foi6==2 && foi9==2 ||
        foi1==2 && foi5==2 && foi9==2 || foi3==2 && foi5==2 && foi7==2){
            document.getElementById('quemUltimo').innerHTML="Ganhador(a) última foi: O";
            player2++;
            alterarPlacar();
            reset();
    }
    else if(jogadas==8){
        document.getElementById('quemUltimo').innerHTML="Ganhadora da última foi: velha";
        velha++;
        alterarPlacar();
        reset();
    }
}

function reset(){
    for(e = 1; e < 10; e++){
        quadrado = document.getElementById(e);
        botao = document.getElementById('boto'+e);
        botao.style.cursor="pointer";
        quadrado.innerHTML="+";
        quadrado.style.color="black";
        botao.disabled=false;
        botao.style.backgroundColor="rgb(239, 239, 239)";
    }
    document.getElementById('quem').innerHTML="Vez de: X";
    jogador=true;
    jogadas = 0;
    foi1 = 0;
    foi2 = 0;
    foi3 = 0;
    foi4 = 0;
    foi5 = 0;
    foi6 = 0;
    foi7 = 0;
    foi8 = 0;
    foi9 = 0;
}

function mudarCorFundo(){
    corDoX = document.getElementById('corX').value;
    corDoO = document.getElementById('corO').value;
    cabecalho = document.getElementById('cabeca');
    cabecalho.style.backgroundImage="linear-gradient(45deg, "+corDoX+", "+corDoO+")";
}

function alterarPlacar(){
    document.getElementById('cabecalho-div').style.height="80px";
    x = document.getElementById('placarX');
    o = document.getElementById('placarO');
    v = document.getElementById('placarV');
    x.innerHTML=player1;
    o.innerHTML=player2;
    v.innerHTML=velha;
}

function resetPlacar(){
    document.getElementById('quemUltimo').innerHTML="";
    player1 = 0;
    player2 = 0;
    velha = 0;
    alterarPlacar();
    reset();
}