// ===== DADOS =====
const petsData = [
    { nome: "Max", idade: "2 anos", descricao: "Cachorro brincalhão, adora crianças. Vacinado.", fotoIcon: "🐕", whatsapp: "595981111111" },
    { nome: "Luna", idade: "1 ano", descricao: "Gata carinhosa, castrada, convive bem com outros pets.", fotoIcon: "🐈", whatsapp: "595981222222" },
    { nome: "Thor", idade: "3 anos", descricao: "Cachorro porte médio, leal e energético, ótimo para quintal.", fotoIcon: "🐶", whatsapp: "595981333333" },
    { nome: "Bella", idade: "8 meses", descricao: "Filhote muito ativa, adora brincar e correr.", fotoIcon: "🐕‍🦺", whatsapp: "595981444444" }
];

const servicosData = [
    { nome: "SecureTrip Segurança", descricao: "Escolta e monitoramento para turistas em Ciudad del Este.", contato: "595981444444", icone: "🛡️" },
    { nome: "Transporte Rápido", descricao: "Traslados para Ponte da Amizade, aeroporto e shoppings.", contato: "595981555555", icone: "🚐" },
    { nome: "Hotel Itaipu Plaza", descricao: "Hospedagem confortável, próxima às principais lojas.", contato: "595981666666", icone: "🏨" },
    { nome: "Clínica Santa Elena", descricao: "Atendimento 24h, emergências e pronto atendimento.", contato: "595981777777", icone: "🏥" },
    { nome: "Guarda Costas PY", descricao: "Segurança particular para compras e traslados.", contato: "595981888888", icone: "👮" }
];

const blogArticles = [
    { titulo: "Onde comprar barato no Paraguai", resumo: "Ruas e shoppings com os menores preços: guia completo." },
    { titulo: "Cotação do dólar hoje Paraguai", resumo: "Acompanhe a flutuação e economize na hora do câmbio." },
    { titulo: "Vale a pena comprar no Paraguai 2026", resumo: "Análise de impostos e limites aduaneiros." },
    { titulo: "Produtos mais baratos no Paraguai", resumo: "Lista de 20 itens com diferença de preço de até 60%." },
    { titulo: "Dicas para economizar no Paraguai", resumo: "Negociação, melhores horários e evitar golpes." },
    { titulo: "Melhores lojas de Ciudad del Este", resumo: "Ranking dos shoppings e lojas de rua mais confiáveis." },
    { titulo: "Segurança no Paraguai para turistas", resumo: "Regiões seguras, como evitar furtos e documentação." },
    { titulo: "Como funciona o limite de compras no Paraguai", resumo: "Limite de US$ 500 via terrestre, saiba tudo." },
    { titulo: "Guia completo de compras no Paraguai", resumo: "Roteiro de 3 dias para comprar com eficiência." },
    { titulo: "Vale a pena comprar celular no Paraguai", resumo: "iPhone, Samsung, Xiaomi: preços e garantia." }
];

const supermercadosData = [
    { nome: "Supermercado Real", descricao: "Maior rede de CDE, preços baixos e variedade em produtos brasileiros.", contato: "595981111111", icone: "🏪" },
    { nome: "Stock Center", descricao: "Atacado e varejo, ótimo para compras em grande quantidade.", contato: "595982222222", icone: "🏬" },
    { nome: "Super Seis", descricao: "Promoções diárias, carnes e frios de qualidade.", contato: "595983333333", icone: "🥩" },
    { nome: "La Merca", descricao: "Especializado em produtos importados e bebidas.", contato: "595984444444", icone: "🍺" }
];

// ===== FUNÇÕES GLOBAIS =====
window.gerarLead = function(assunto) {
    const numero = "595981234567";
    const msg = `Olá! Tenho interesse em "${assunto}" - Gostaria de mais informações e dicas exclusivas.`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
};

window.compartilharSite = function() {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent('Confira o Bra-PY 24/7: ' + url)}`, '_blank');
};

// ===== RENDERIZAÇÕES =====
function renderPets() {
    const container = document.getElementById('petsContainer');
    if (!container) return;
    container.innerHTML = '';
    petsData.forEach(pet => {
        container.innerHTML += `
            <div class="pet-card">
                <div class="pet-photo">${pet.fotoIcon}</div>
                <h3>${pet.nome}</h3>
                <p><strong>Idade:</strong> ${pet.idade}</p>
                <p>${pet.descricao}</p>
                <a href="https://wa.me/${pet.whatsapp}" class="btn-whatsapp" target="_blank">Falar sobre adoção</a>
            </div>
        `;
    });
}

function renderServicos() {
    const container = document.getElementById('servicosContainer');
    if (!container) return;
    container.innerHTML = '';
    servicosData.forEach(serv => {
        container.innerHTML += `
            <div class="servico-card">
                <h3>${serv.icone} ${serv.nome}</h3>
                <p>${serv.descricao}</p>
                <a href="https://wa.me/${serv.contato}" class="btn-whatsapp" target="_blank">Contato via WhatsApp</a>
            </div>
        `;
    });
}

function renderBlog() {
    const container = document.getElementById('blogContainer');
    if (!container) return;
    container.innerHTML = '';
    blogArticles.forEach(art => {
        container.innerHTML += `
            <div class="blog-post">
                <h3>📌 ${art.titulo}</h3>
                <p>${art.resumo}</p>
                <button class="btn-lead" onclick="gerarLead('${art.titulo}')">Receber guia completo</button>
            </div>
        `;
    });
}

function renderSupermercados() {
    const container = document.getElementById('supermercadosContainer');
    if (!container) return;
    container.innerHTML = '';
    supermercadosData.forEach(supermercado => {
        container.innerHTML += `
            <div class="servico-card">
                <h3>${supermercado.icone} ${supermercado.nome}</h3>
                <p>${supermercado.descricao}</p>
                <a href="https://wa.me/${supermercado.contato}" class="btn-whatsapp" target="_blank">Falar com o mercado</a>
            </div>
        `;
    });
}

// ===== MENU HAMBÚRGUER =====
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (!hamburgerBtn || !mobileMenu) return;
    
    hamburgerBtn.onclick = function() {
        mobileMenu.classList.add('open');
        if (menuOverlay) menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = function() {
        mobileMenu.classList.remove('open');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (closeMenuBtn) closeMenuBtn.onclick = closeMenu;
    if (menuOverlay) menuOverlay.onclick = closeMenu;
}

// ===== BARRA DE PESQUISA (DENTRO DO MENU) =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;
    
    const pages = [
        { name: "Início", url: "index.html", icon: "🏠" },
        { name: "Câmbio", url: "cambio.html", icon: "💰" },
        { name: "Compras", url: "compras.html", icon: "🛍️" },
        { name: "Pets / Adoção", url: "pets.html", icon: "🐾" },
        { name: "Serviços", url: "servicos.html", icon: "🔧" },
        { name: "Supermercados", url: "supermercado.html", icon: "🛒" },
        { name: "Preços", url: "precos.html", icon: "📊" },
        { name: "VIP", url: "vip.html", icon: "👑" },
        { name: "Blog", url: "blog/index.html", icon: "📝" },
        { name: "Cotação do dólar", url: "cambio.html", icon: "💵" },
        { name: "iPhone no Paraguai", url: "compras.html", icon: "📱" },
        { name: "Lojas de eletrônicos", url: "compras.html", icon: "💻" },
        { name: "Transporte em CDE", url: "servicos.html", icon: "🚗" },
        { name: "Hospedagem", url: "servicos.html", icon: "🏨" },
        { name: "Clínicas", url: "servicos.html", icon: "🏥" }
    ];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query === '') {
            searchResults.innerHTML = '';
            return;
        }
        
        const filtered = pages.filter(page => 
            page.name.toLowerCase().includes(query)
        );
        
        if (filtered.length > 0) {
            searchResults.innerHTML = filtered.map(page => 
                `<a href="${page.url}">${page.icon} ${page.name}</a>`
            ).join('');
        } else {
            searchResults.innerHTML = '<div style="padding: 8px; color: #666;">Nenhum resultado encontrado</div>';
        }
    });
}

// ===== BARRA DE PESQUISA EXTERNA =====
function initSearchExterno() {
    const searchInput = document.getElementById('searchInputExterno');
    const searchResults = document.getElementById('searchResultsExterno');
    
    if (!searchInput) return;
    
    const pages = [
        { name: "🏠 Início", url: "index.html" },
        { name: "💰 Câmbio", url: "cambio.html" },
        { name: "🛍️ Compras", url: "compras.html" },
        { name: "🛒 Supermercados", url: "supermercado.html" },
        { name: "📊 Preços", url: "precos.html" },
        { name: "👑 Grupo VIP", url: "vip.html" },
        { name: "📝 Blog", url: "blog/index.html" },
        { name: "💵 Cotação do dólar", url: "cambio.html" },
        { name: "📱 iPhone no Paraguai", url: "compras.html" },
        { name: "💻 Lojas de eletrônicos", url: "compras.html" },
        { name: "🚗 Transporte em CDE", url: "servicos.html" },
        { name: "🏨 Hospedagem", url: "servicos.html" },
        { name: "🏥 Clínicas", url: "servicos.html" },
        { name: "🛡️ Segurança", url: "servicos.html" }
    ];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query === '') {
            searchResults.innerHTML = '';
            return;
        }
        
        const filtered = pages.filter(page => 
            page.name.toLowerCase().includes(query)
        );
        
        if (filtered.length > 0) {
            searchResults.innerHTML = filtered.map(page => 
                `<a href="${page.url}">${page.name}</a>`
            ).join('');
        } else {
            searchResults.innerHTML = '<div style="padding: 10px; color: #666;">Nenhum resultado encontrado</div>';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.innerHTML = '';
        }
    });
}

// ===== CONVERSOR ESTILO WISE =====
let taxasWise = {};
let moedaOrigemWise = 'BRL';
let moedaDestinoWise = 'PYG';

async function buscarTaxasWise() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/BRL');
        const data = await response.json();
        
        taxasWise = {
            BRL: 1,
            USD: data.rates.USD,
            EUR: data.rates.EUR,
            ARS: data.rates.ARS,
            PYG: data.rates.PYG
        };
        
        const updateElement = document.getElementById('wiseUpdate');
        if (updateElement) updateElement.innerHTML = 'Atualizado agora';
        
        converterWise();
        setTimeout(buscarTaxasWise, 300000);
        
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        taxasWise = { BRL: 1, USD: 0.176, EUR: 0.162, ARS: 180, PYG: 1220 };
        const updateElement = document.getElementById('wiseUpdate');
        if (updateElement) updateElement.innerHTML = 'Taxas estimadas';
        converterWise();
    }
}

function converterWise() {
    const valorInput = document.getElementById('valorWise');
    if (!valorInput) return;
    
    const valor = parseFloat(valorInput.value);
    moedaOrigemWise = document.getElementById('moedaOrigemWise').value;
    moedaDestinoWise = document.getElementById('moedaDestinoWise').value;
    
    if (isNaN(valor) || valor <= 0) {
        document.getElementById('resultadoWise').value = '0';
        return;
    }
    
    const valorEmBRL = valor / taxasWise[moedaOrigemWise];
    const valorConvertido = valorEmBRL * taxasWise[moedaDestinoWise];
    
    const formatado = valorConvertido.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    document.getElementById('resultadoWise').value = formatado;
    
    const taxa = (taxasWise[moedaDestinoWise] / taxasWise[moedaOrigemWise]).toFixed(2);
    const taxaElement = document.getElementById('taxaWise');
    if (taxaElement) taxaElement.innerHTML = taxa;
}

function swapMoedasWise() {
    const origemSelect = document.getElementById('moedaOrigemWise');
    const destinoSelect = document.getElementById('moedaDestinoWise');
    const valorInput = document.getElementById('valorWise');
    const resultadoInput = document.getElementById('resultadoWise');
    
    const tempMoeda = origemSelect.value;
    const tempValor = valorInput.value;
    
    origemSelect.value = destinoSelect.value;
    destinoSelect.value = tempMoeda;
    
    valorInput.value = resultadoInput.value;
    
    converterWise();
}

function initConversorWise() {
    const valorInput = document.getElementById('valorWise');
    const moedaOrigem = document.getElementById('moedaOrigemWise');
    const moedaDestino = document.getElementById('moedaDestinoWise');
    
    if (valorInput) {
        valorInput.addEventListener('input', converterWise);
        moedaOrigem.addEventListener('change', converterWise);
        moedaDestino.addEventListener('change', converterWise);
    }
}

// ===== INICIALIZAÇÃO PRINCIPAL =====
document.addEventListener('DOMContentLoaded', function() {
    renderPets();
    renderServicos();
    renderBlog();
    renderSupermercados();
    initMobileMenu();
    initSearch();
    initSearchExterno();
    initConversorWise();
    buscarTaxasWise();
});