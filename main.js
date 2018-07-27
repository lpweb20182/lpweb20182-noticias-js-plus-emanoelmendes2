var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    var noticia_data = new Date(Date.parse(noticia.datah));
    var data_atual = new Date().getTime();

    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    if (noticia_data <= data_atual){
        li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
        + noticia.titulo
        + '</p>'
        + '<p class="conteudo">'
        + '<br>'
        + '<span>Nome:</span>'
        + '<br>'
        + noticia.nome
        + '<br>'
        + '<span>Email:</span>'
        + '<br>'
        + noticia.email
        + '<br>'
        + '<span>Data e Hora:</span>'
        + '<br>'
        + noticia.datah
        + '<br>'
        + '<span>Conteudo:</span>'
        + '<br>'
        + noticia.conteudo
        + '<br>'
        + '<span>------------------</span>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
        + '</p>';
    lista.appendChild(li);
}
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var nome = document.getElementById('frm-nome').value;
    var email = document.getElementById('frm-email').value;
    var datah = document.getElementById('frm-datah').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        nome: nome,
        email: email,
        datah: datah,
        conteudo: conteudo
        
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}