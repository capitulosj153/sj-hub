'use strict';

const DATA_URL = 'js/gestoes.json';
const MCS_DIR = 'images/mcs/';
const PLACEHOLDER = 'images/placeholder.png';

const grid = document.querySelector('#grid');

/* ---------- Utilidades ---------- */

function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    Object.assign(node, props);
    node.append(...children.filter(Boolean));
    return node;
}

function srcDaImagem(gestao) {
    return gestao.imagem ? MCS_DIR + gestao.imagem : PLACEHOLDER;
}

function criarImagem(gestao, className) {
    const img = el('img', {
        className,
        src: srcDaImagem(gestao),
        alt: gestao.mestreConselheiro
            ? `Foto de ${gestao.mestreConselheiro}`
            : 'Mestre Conselheiro sem foto registrada',
        loading: 'lazy',
        decoding: 'async',
    });
    // Se a foto não existir, cai no placeholder (sem loop infinito)
    img.addEventListener('error', () => {
        img.src = PLACEHOLDER;
    }, { once: true });
    return img;
}

/* ---------- Cards ---------- */

function criarCard(gestao) {
    const nome = gestao.mestreConselheiro ?? 'sem Mestre Conselheiro registrado';
    const card = el('button', {
        className: 'card',
        type: 'button',
        ariaLabel: `Gestão ${gestao.id}, ${nome}`,
    });

    card.append(
        criarImagem(gestao, 'card-image'),
        el('h4', { textContent: gestao.id })
    );

    card.addEventListener('click', () => abrirModal(gestao, card));
    return card;
}

/* ---------- Modal ---------- */

let modalAberto = null;

function abrirModal(gestao, gatilho) {
    fecharModal();

    const tituloId = 'popup-title';
    const overlay = el('div', { className: 'popup-overlay' });
    const modal = el('div', { className: 'popup-modal' });
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', tituloId);

    const fechar = el('button', {
        className: 'popup-close',
        type: 'button',
        ariaLabel: 'Fechar',
        textContent: '×',
    });

    const cabecalho = el('div', { className: 'popup-header' },
        criarImagem(gestao, 'popup-image'),
        el('h3', { className: 'popup-title', id: tituloId, textContent: `Gestão ${gestao.id}` })
    );

    const conteudo = el('div', { className: 'popup-content' });

    conteudo.append(
        linhaComRotulo('Mestre Conselheiro', gestao.mestreConselheiro ?? 'Não registrado'),
        linhaComRotulo('Idade ao assumir', gestao.idade ?? 'Não informada')
    );

    if (gestao.frase) {
        conteudo.append(el('p', { className: 'popup-frase' }, el('em', { textContent: gestao.frase })));
    }
    if (gestao.texto) {
        conteudo.append(el('p', { className: 'popup-texto', textContent: gestao.texto }));
    }
    if (!gestao.frase && !gestao.texto) {
        conteudo.append(el('p', {
            className: 'popup-vazio',
            textContent: 'Ainda não há relato registrado para esta gestão.',
        }));
    }

    modal.append(fechar, cabecalho, conteudo);
    overlay.append(modal);
    document.body.append(overlay);
    document.body.classList.add('modal-aberto');

    const onKeydown = (e) => {
        if (e.key === 'Escape') fecharModal();
        if (e.key === 'Tab') prenderFoco(e, modal);
    };

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) fecharModal();
    });
    fechar.addEventListener('click', fecharModal);
    document.addEventListener('keydown', onKeydown);

    modalAberto = { overlay, gatilho, onKeydown };
    fechar.focus();
}

function linhaComRotulo(rotulo, valor) {
    return el('p', {}, el('strong', { textContent: `${rotulo}: ` }), valor);
}

function fecharModal() {
    if (!modalAberto) return;
    const { overlay, gatilho, onKeydown } = modalAberto;
    overlay.remove();
    document.removeEventListener('keydown', onKeydown);
    document.body.classList.remove('modal-aberto');
    gatilho?.focus();
    modalAberto = null;
}

// Mantém o Tab dentro do modal enquanto ele estiver aberto
function prenderFoco(e, modal) {
    const focaveis = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    if (!focaveis.length) return;
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
    }
}

/* ---------- Inicialização ---------- */

async function init() {
    try {
        const resposta = await fetch(DATA_URL);
        if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
        const gestoes = await resposta.json();

        const fragmento = document.createDocumentFragment();
        gestoes.forEach((g) => fragmento.append(criarCard(g)));
        grid.replaceChildren(fragmento);
    } catch (erro) {
        console.error('Não foi possível carregar as gestões:', erro);
        grid.replaceChildren(el('p', {
            className: 'erro',
            textContent: 'Não foi possível carregar a galeria. Se você abriu o arquivo direto do disco, rode um servidor local (por exemplo, a extensão Live Server do VS Code).',
        }));
    }
}

init();
