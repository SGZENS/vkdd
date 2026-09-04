
const CATEGORY_MENU = {
  nina: {label:'Niña', subcats:[
    {name:'Vestidos'}, {name:'Conjuntos'},
    {name:'Bolsos', children:['Carteras',"Crossbody's"]},
    {name:'Calzado'}, {name:'Accesorios'}
  ]},
  nino: {label:'Niño', subcats:[
    {name:'Pantalones', children:['Jeans','Casual','Deportivo']},
    {name:'Camisas'}, {name:'Calzado'}, {name:'Conjuntos'}
  ]},
  hombre: {label:'Hombre', subcats:[
    {name:'Boxers'},
    {name:'Camisas', children:['Playeras','Camisetas','Polos']},
    {name:'Pantalones', children:['Jeans','Casual']},
    {name:'Chumpas'}, {name:'Calzado'}
  ]},
  mujer: {label:'Mujer', subcats:[
    {name:'Vestidos', children:['Casual','Fiesta','Noche']},
    {name:'Blusas'},
    {name:'Jeans', children:['Skinny','Recto']},
    {name:'Bolsos', children:['Carteras',"Crossbody's"]},
    {name:'Calzado'}, {name:'Accesorios'}, {name:'Ropa interior'}
  ]}
};

function categoryProductCount(catKey, subcatName){
  return PRODUCTS.filter(p=>p.cat===catKey && (!subcatName || p.subcat===subcatName)).length;
}

const PRODUCTS = [
  {id:'p23', name:'Cadena oro 10K cubana 55cm', code:'ML082634', price:5290, oldPrice:5350, cat:'mujer', subcat:'Accesorios', brand:'KD', colors:[{name:'Dorado',hex:'#d4a84f'}], image:'chain-gold.png'}
  ,{id:'p24', name:'Boxer Hugo Boss 3 pack', code:'704348103705', price:325, oldPrice:350, cat:'hombre', subcat:'Boxers', brand:'Hugo Boss', colors:[{name:'Multicolor',hex:'#4e5149'}], sizes:{'M':3,'L':5,'XL':4}, image:'boxers-hugo.png'}
  ,{id:'p25', name:'Jeans Levi’s azul Ribcage Bell', code:'A75030002', price:725, oldPrice:750, cat:'mujer', subcat:'Jeans', brand:'Levi’s', colors:[{name:'Azul',hex:'#36577b'}], sizes:{'26':2,'28':3,'30':2}, image:'jeans-levis-wide.png'}
  ,{id:'p27', name:'Conjunto Guess rosado', code:'G6M13H5', price:325, cat:'nina', subcat:'Conjuntos', brand:'Guess', colors:[{name:'Rosa',hex:'#e8b5bd'}], sizes:{'6':2,'8':3,'10':2}, image:'tracksuit-girl.png'}
  ,{id:'p28', name:'Chumpa Guess negra Manchester', code:'JBLK1J5', price:325, cat:'nino', subcat:'Chumpas', brand:'Guess', colors:[{name:'Negro',hex:'#25252a'}], sizes:{'6':2,'8':4,'10':3}, image:'jacket-boy-camo.png'}
  ,{id:'p29', name:'Playera Guess negra estampada', code:'JBLK2L5DAVION', price:325, cat:'nino', subcat:'Camisas', brand:'Guess', colors:[{name:'Negro',hex:'#25252a'}], sizes:{'6':3,'8':4,'10':2}, image:'shirt-boy-guess.png'}
  ,{id:'p30', name:'Vestido Guess celeste rayado', code:'SBOE2B6', price:395, oldPrice:425, cat:'nina', subcat:'Vestidos', brand:'Guess', colors:[{name:'Celeste',hex:'#adc4d6'}], sizes:{'6':2,'8':3,'10':2}, image:'dress-girl-blue.png'}
  ,{id:'p31', name:'Sandalias Puma negras', code:'789451', price:425, oldPrice:495, cat:'hombre', subcat:'Calzado', brand:'Puma', colors:[{name:'Negro',hex:'#252525'}], sizes:{'8':2,'9':3,'10':2}, image:'sandals-puma-black.png'}
  ,{id:'p32', name:'Tenis Guess blancos', code:'ML58670B', price:625, oldPrice:650, cat:'hombre', subcat:'Calzado', brand:'Guess', colors:[{name:'Blanco',hex:'#f6f2ec'}], sizes:{'8':2,'9':4,'10':3}, image:'sneaker-guess-beige.png'}
  ,{id:'p33', name:'Vestido Guess rosa', code:'G6M13H5', price:395, oldPrice:425, cat:'nina', subcat:'Vestidos', brand:'Guess', colors:[{name:'Rosa',hex:'#e8b5bd'}], sizes:{'6':2,'8':3,'10':2}, image:'dress-guess-pink-real.png', featured:true, isNew:true}
  ,{id:'p34', name:'Vestido denim Guess', code:'SBOE2B6', price:425, cat:'nina', subcat:'Vestidos', brand:'Guess', colors:[{name:'Azul denim',hex:'#7694a9'}], sizes:{'6':2,'8':3,'10':2}, image:'dress-girl-denim.png', isNew:true}
  ,{id:'p35', name:'Blusa rosa Guess niña', code:'JBLK2L5DAVION', price:275, oldPrice:325, cat:'nina', subcat:'Camisas', brand:'Guess', colors:[{name:'Rosa',hex:'#e6a9b9'}], sizes:{'6':2,'8':3,'10':2}, image:'shirt-girl-pink.png', featured:true}
  ,{id:'p36', name:'Sudadera blanca Guess niña', code:'JBLK1J5', price:325, cat:'nina', subcat:'Conjuntos', brand:'Guess', colors:[{name:'Blanco',hex:'#f7f3ef'}], sizes:{'6':2,'8':3,'10':2}, image:'hoodie-girl-white.png', isNew:true}
  ,{id:'p37', name:'Polo Tommy Hilfiger rojo', code:'MW0MW25031', price:425, oldPrice:475, cat:'nino', subcat:'Camisas', brand:'Tommy Hilfiger', colors:[{name:'Rojo',hex:'#b93d4d'}], sizes:{'6':2,'8':3,'10':2}, image:'polo-boy-red.png', featured:true}
  ,{id:'p38', name:'Polo Tommy Hilfiger azul', code:'MW0MW25032', price:425, cat:'nino', subcat:'Camisas', brand:'Tommy Hilfiger', colors:[{name:'Azul',hex:'#315a86'}], sizes:{'6':2,'8':3,'10':2}, image:'polo-boy-tommy.png', isNew:true}
  ,{id:'p39', name:'Sandalias Puma verde menta', code:'389897', price:425, oldPrice:495, cat:'mujer', subcat:'Calzado', brand:'Puma', colors:[{name:'Menta',hex:'#a9d3c6'}], sizes:{'6':2,'7':3,'8':2}, image:'sandals-puma-mint.png', featured:true}
  ,{id:'p40', name:'Tenis Guess negros', code:'ML58670B', price:625, oldPrice:650, cat:'mujer', subcat:'Calzado', brand:'Guess', colors:[{name:'Negro',hex:'#24252a'}], sizes:{'6':2,'7':3,'8':2}, image:'sneaker-guess-black.png', isNew:true}
  ,{id:'p41', name:'Tenis Guess negro con blanco', code:'ML58670C', price:625, cat:'mujer', subcat:'Calzado', brand:'Guess', colors:[{name:'Negro/blanco',hex:'#454349'}], sizes:{'6':2,'7':3,'8':2}, image:'sneaker-guess-blackwhite.png', featured:true}
  ,{id:'p42', name:'Tenis Guess café', code:'ML58670D', price:625, oldPrice:675, cat:'mujer', subcat:'Calzado', brand:'Guess', colors:[{name:'Café',hex:'#9b806c'}], sizes:{'6':2,'7':3,'8':2}, image:'sneaker-guess-brown.png', isNew:true}
  ,{id:'p43', name:'Tenis Nike negros', code:'FD9922', price:725, oldPrice:795, cat:'hombre', subcat:'Calzado', brand:'Nike', colors:[{name:'Negro',hex:'#24252a'}], sizes:{'8':2,'9':3,'10':2}, image:'sneaker-nike-black.png', featured:true}
  ,{id:'p44', name:'Tenis Tommy Hilfiger blancos', code:'FM0FM04528', price:725, cat:'hombre', subcat:'Calzado', brand:'Tommy Hilfiger', colors:[{name:'Blanco',hex:'#f6f2ec'}], sizes:{'8':2,'9':3,'10':2}, image:'sneaker-tommy-white.png', isNew:true}
  ,{id:'p45', name:'Tenis Guess blancos clásicos', code:'ML58670E', price:625, oldPrice:675, cat:'mujer', subcat:'Calzado', brand:'Guess', colors:[{name:'Blanco',hex:'#f6f2ec'}], sizes:{'6':2,'7':3,'8':2}, image:'sneaker-guess-white.png', featured:true}
  ,{id:'p46', name:'Ropa interior femenina rosa', code:'KD-RI-001', price:145, cat:'mujer', subcat:'Ropa interior', brand:'KD', colors:[{name:'Rosa',hex:'#e5a6b8'}], sizes:{'S':3,'M':5,'L':3}, image:'underwear-pink.png', isNew:true}
  ,{id:'p47', name:'Vestido Guess azul', code:'G6M13H6', price:395, oldPrice:425, cat:'nina', subcat:'Vestidos', brand:'Guess', colors:[{name:'Azul',hex:'#9eabc5'}], sizes:{'6':2,'8':3,'10':2}, image:'dress-guess-blue-real.png', featured:true, isNew:true}
];

const SUBCATEGORY_IMAGES = {
  'mujer|Jeans':'mujer-jeans.png',
  'mujer|Calzado':'mujer-calzado.png',
  'mujer|Accesorios':'mujer-accesorios.png',
  'mujer|Ropa interior':'mujer-ropa-interior.png',
  'hombre|Boxers':'hombre-boxers.png',
  'hombre|Calzado':'hombre-calzado.png',
  'nina|Vestidos':'nina-vestidos.png',
  'nina|Conjuntos':'nina-conjuntos.png',
  'nino|Camisas':'nino-camisas.png'
};

const state = { cat:null, subcat:null, subsub:null, showAll:false };
const filters = { min:null, max:null, ofertas:false, colors:[], sizes:[], brands:[] };
const cart = {};
const cartVariant = {};
const USERS_DB = {
  'qasoporte@vixen.com': {
    name: 'QA Soporte',
    email: 'qasoporte@vixen.com',
    password: 'pruebas123'
  }
}; // mini base de datos en memoria: correo -> {name,email,password}
const SAVED_USERS_KEY = 'kd_users_v1';
try {
  const savedUsers = JSON.parse(localStorage.getItem(SAVED_USERS_KEY) || '{}');
  Object.assign(USERS_DB, savedUsers);
} catch (err) {
  console.warn('No se pudieron cargar las cuentas guardadas.', err);
}
function saveUsers(){
  localStorage.setItem(SAVED_USERS_KEY, JSON.stringify(USERS_DB));
}
let loggedIn = false;
let currentUser = null;
let checkoutStep = 1;
let modalProduct = null;
let appliedCoupon = null;
let completedOrder = null;

const SAMPLE_ORDERS = [
  {no:214, fecha:'2026-08-20', pago:'Confirmado', entrega:'PAGADO Y EN BODEGA', ok:true, total:980, contact:{email:'cliente@ejemplo.com',phone:'5025555214'}},
  {no:213, fecha:'2026-08-14', pago:'Confirmado', entrega:'ENTREGADO', ok:true, total:650, contact:{email:'ana@ejemplo.com',phone:'5025555213'}},
  {no:210, fecha:'2026-07-30', pago:'Procesado', entrega:'ANULADO', ok:false, total:410, contact:{email:'maria@ejemplo.com',phone:'5025555210'}},
  {no:198, fecha:'2026-07-02', pago:'Confirmado', entrega:'PAGADO Y EN BODEGA', ok:true, total:295, contact:{email:'luis@ejemplo.com',phone:'5025555198'}}
];
const ORDERS_STORAGE_KEY = 'kd_orders_v1';
let orderHistory = loadOrderHistory();
let authReturnTab = 'login';
function loadOrderHistory(){
  try {
    const saved = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (err) {
    console.warn('No se pudieron cargar las órdenes guardadas.', err);
    return [];
  }
}
function saveOrderHistory(){
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orderHistory));
}
function getAllOrders(){
  return SAMPLE_ORDERS.concat(orderHistory);
}

function $(id){ return document.getElementById(id); }

function showToast(msg){
  const t = $('toast');
  t.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg><span>'+msg+'</span>';
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

function nav(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  $('view-'+view).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  closeMobileMenu();
  closeAccountMenu();
  if(view==='cart') renderCart();
  if(view==='profile') renderProfile();
  if(view==='orders') renderOrders();
  if(view==='checkout') openCheckout();
  if(view==='track'){ $('track-result').style.display='none'; }
}
function goToStories(){
  nav('home');
  setTimeout(()=>document.getElementById('hero-carousel').scrollIntoView({behavior:'smooth', block:'start'}), 40);
}

function toggleMobileMenu(){ $('mobile-menu').classList.toggle('open'); }
function closeMobileMenu(){ $('mobile-menu').classList.remove('open'); }

/* ---------- Mega menu (desktop) + accordion (mobile) ---------- */
function buildMegaRow(){
  let html = '';
  Object.keys(CATEGORY_MENU).forEach(key=>{
    const c = CATEGORY_MENU[key];
    html += '<div class="mega-trigger-wrap">';
    html += '<button class="mega-trigger" onclick="goCategory(\''+key+'\',null,null,true)">'+c.label+'</button>';
    html += '<div class="mega-panel">';
    html += '<div class="mega-item"><button class="view-all" onclick="goCategory(\''+key+'\',null,null,true)">Ver todo en '+c.label+'</button></div>';
    c.subcats.filter(sc=>categoryProductCount(key, sc.name)>0).forEach(sc=>{
      const children = (sc.children || []).filter(child=>PRODUCTS.some(p=>p.cat===key && p.subcat===sc.name && p.subsub===child));
      if(children.length){
        html += '<div class="mega-item"><button onclick="goCategory(\''+key+'\',\''+sc.name+'\')">'+sc.name+' <span>›</span></button>';
        html += '<div class="mega-flyout">';
        html += '<div class="mega-item"><button class="view-all" onclick="goCategory(\''+key+'\',\''+sc.name+'\')">Ver todo en '+sc.name+'</button></div>';
        children.forEach(ch=>{
          html += '<div class="mega-item"><button onclick="goCategory(\''+key+'\',\''+sc.name+'\',\''+ch+'\')">'+ch+'</button></div>';
        });
        html += '</div></div>';
      } else {
        html += '<div class="mega-item"><a href="#" onclick="event.preventDefault();goCategory(\''+key+'\',\''+sc.name+'\')">'+sc.name+'</a></div>';
      }
    });
    html += '</div></div>';
  });
  $('mega-row').innerHTML = html;
}

const DEPARTMENTS = {
  'Guatemala': ['Guatemala City', 'Mixco', 'Villa Nueva', 'San Miguel Petapa'],
  'Izabal': ['Puerto Barrios', 'Livingston', 'Morales', 'Los Amates'],
  'Alta Verapaz': ['Cobán', 'San Cristóbal Verapaz', 'Tactic'],
  'Petén': ['Flores', 'San Benito', 'Melchor de Mencos'],
  'Quetzaltenango': ['Quetzaltenango', 'Coatepeque', 'Salcajá'],
  'Escuintla': ['Escuintla', 'Santa Lucía Cotzumalguapa', 'La Gomera']
};
const ADDRESS_STORAGE_KEY = 'kd_customer_addresses_v1';
let savedAddresses = loadSavedAddresses();
let mobileMenuState = { screen: 'root', categoryKey: null, subcatName: null };

function loadSavedAddresses(){
  try {
    const raw = localStorage.getItem(ADDRESS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}
function saveSavedAddresses(){
  localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(savedAddresses));
}

function toggleMobileMenu(){
  const menu = $('mobile-menu');
  if(!menu) return;
  const isOpen = menu.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menu.style.background = '#ffffff';
  menu.style.backgroundColor = '#ffffff';
  menu.style.opacity = '1';
  menu.style.backdropFilter = 'none';
  if(isOpen){
    mobileMenuState = { screen: 'root', categoryKey: null, subcatName: null };
    renderMobileMenu();
  }
}
function closeMobileMenu(){
  const menu = $('mobile-menu');
  if(!menu) return;
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  menu.style.background = '#ffffff';
  menu.style.backgroundColor = '#ffffff';
  menu.style.opacity = '1';
  menu.style.backdropFilter = 'none';
  mobileMenuState = { screen: 'root', categoryKey: null, subcatName: null };
  renderMobileMenu();
}

function buildMobileMenu(){
  renderMobileMenu();
}

function goMobileMenuBack(){
  if(mobileMenuState.screen === 'subcat'){
    mobileMenuState = { screen: 'category', categoryKey: mobileMenuState.categoryKey, subcatName: null };
  } else if(mobileMenuState.screen === 'category'){
    mobileMenuState = { screen: 'root', categoryKey: null, subcatName: null };
  }
  renderMobileMenu();
}

function renderMobileMenu(){
  const menu = $('mobile-menu');
  if(!menu) return;
  menu.style.background = '#ffffff';
  menu.style.backgroundColor = '#ffffff';
  menu.style.opacity = '1';
  menu.style.backdropFilter = 'none';
  const state = mobileMenuState;
  let html = '<div class="mobile-menu-panel">';
  html += '<div class="mobile-menu-header">';
  if(state.screen === 'root'){
    html += '<button class="mobile-menu-back" style="visibility:hidden;">←</button>';
    html += '<div class="mobile-menu-title">Categorías</div>';
  } else {
    html += '<button class="mobile-menu-back" onclick="goMobileMenuBack()">←</button>';
    if(state.screen === 'category'){
      html += '<div class="mobile-menu-title">'+CATEGORY_MENU[state.categoryKey].label+'</div>';
    } else {
      const current = (CATEGORY_MENU[state.categoryKey].subcats || []).find(item => item.name === state.subcatName) || { name: state.subcatName };
      html += '<div class="mobile-menu-title">'+current.name+'</div>';
    }
  }
  html += '<button class="mobile-menu-close" onclick="closeMobileMenu()">×</button>';
  html += '</div>';

  html += '<div class="mobile-menu-list">';

  if(state.screen === 'root'){
    ['nino','nina','hombre','mujer'].forEach(key => {
      const label = CATEGORY_MENU[key].label;
      html += '<button class="mobile-menu-item" onclick="mobileMenuState={screen:\'category\', categoryKey:\''+key+'\', subcatName:null}; renderMobileMenu();">';
      html += '<span>'+label+'</span>';
      html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg>';
      html += '</button>';
    });
  } else if(state.screen === 'category'){
    const category = CATEGORY_MENU[state.categoryKey];
    html += '<button class="mobile-menu-item highlight" onclick="goCategory(\''+state.categoryKey+'\'); closeMobileMenu();"><span>Ver todo en '+category.label+'</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg></button>';
    (category.subcats || []).filter(sub=>categoryProductCount(state.categoryKey, sub.name)>0).forEach(sub => {
      const children = (sub.children || []).filter(child=>PRODUCTS.some(p=>p.cat===state.categoryKey && p.subcat===sub.name && p.subsub===child));
      const hasChildren = children.length > 0;
      html += '<button class="mobile-menu-item" onclick="'+(hasChildren ? 'mobileMenuState={screen:\'subcat\', categoryKey:\''+state.categoryKey+'\', subcatName:\''+sub.name+'\'}; renderMobileMenu();' : 'goCategory(\''+state.categoryKey+'\',\''+sub.name+'\'); closeMobileMenu();')+'">';
      html += '<span>'+sub.name+'</span>';
      if(hasChildren) html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg>';
      html += '</button>';
    });
  } else if(state.screen === 'subcat'){
    const category = CATEGORY_MENU[state.categoryKey];
    const sub = (category.subcats || []).find(item => item.name === state.subcatName) || {name: state.subcatName, children: []};
    html += '<button class="mobile-menu-item highlight" onclick="goCategory(\''+state.categoryKey+'\',\''+state.subcatName+'\'); closeMobileMenu();"><span>Ver todo en '+sub.name+'</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg></button>';
    (sub.children || []).filter(child=>PRODUCTS.some(p=>p.cat===state.categoryKey && p.subcat===sub.name && p.subsub===child)).forEach(child => {
      html += '<button class="mobile-menu-item" onclick="goCategory(\''+state.categoryKey+'\',\''+state.subcatName+'\',\''+child+'\'); closeMobileMenu();">';
      html += '<span>'+child+'</span>';
      html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg>';
      html += '</button>';
    });
  }

  html += '</div>';
  html += '</div>';
  menu.innerHTML = html;
}

function toggleAcc(btn){
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

/* ---------- Account header dropdown ---------- */
function toggleAccountMenu(){
  if(!loggedIn){ nav('account'); return; }
  $('account-dropdown').classList.toggle('open');
}
function closeAccountMenu(){ $('account-dropdown').classList.remove('open'); }

function updateAccountHeader(){
  if(loggedIn){
    $('account-trigger-label').textContent = 'Hola, ' + currentUser.name;
    $('account-panel').innerHTML =
      '<button onclick="nav(\'profile\')">Cuenta</button>'+
      '<button onclick="nav(\'orders\')">Pedidos</button>'+
      '<button onclick="nav(\'track\')">Consultar pedido</button>'+
      '<button onclick="logout()">Cerrar sesión</button>';
  } else {
    $('account-trigger-label').textContent = 'Iniciar sesión';
    $('account-panel').innerHTML = '<button onclick="nav(\'account\')">Iniciar sesión</button><button onclick="nav(\'track\')">Consultar pedido</button>';
  }
}

/* ---------- product card + modal ---------- */
const wishlist = {};

function starsHtml(){ return '☆☆☆☆☆'; }

function productCard(p){
  let badge = '';
  if(p.featured) badge = '<div class="product-flag">Nuevo</div>';
  else if(p.oldPrice) badge = '<div class="product-flag">-'+Math.round(100-(p.price/p.oldPrice*100))+'%</div>';
  const priceHtml = p.oldPrice ? '<s>Q. '+p.oldPrice+'</s>Q. '+p.price : 'Q. '+p.price;
  const wl = wishlist[p.id] ? 'active' : '';
  return '<div class="product-card">'+
    '<div class="product-photo" onclick="openProductModal(\''+p.id+'\')">'+badge+
      '<button class="wishlist-btn '+wl+'" onclick="event.stopPropagation();toggleWishlist(\''+p.id+'\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="'+(wishlist[p.id]?'currentColor':'none')+'" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></button>'+
      '<button class="nav-arrow left" onclick="event.stopPropagation()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<button class="nav-arrow right" onclick="event.stopPropagation()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg></button>'+
      (p.image ? '<img src="assets/images/products/'+p.image+'" alt="'+p.name+'">' : '<span>Foto producto<br>4:5</span>')+'</div>'+
    '<div class="product-info">'+
      '<div class="product-top">'+
        '<div class="product-brand">'+(p.brand||'')+'</div>'+
        '<span class="product-badge">'+(p.oldPrice ? 'Oferta' : 'Nuevo')+'</span>'+
      '</div>'+
      '<div class="product-name" onclick="openProductModal(\''+p.id+'\')">'+p.name+'</div>'+
      '<div class="product-meta"><div class="stars">'+starsHtml()+'</div><span class="no-reviews">18</span></div>'+
      '<div class="product-price-row"><div class="product-price">'+priceHtml+'</div></div>'+
      '<button class="btn-add compact" onclick="openProductModal(\''+p.id+'\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/></svg>Agregar</button>'+
    '</div>'+
  '</div>';
}

function toggleWishlist(id){
  wishlist[id] = !wishlist[id];
  showToast(wishlist[id] ? 'Agregado a favoritos' : 'Quitado de favoritos');
  refreshVisibleGrids();
}

function refreshVisibleGrids(){
  if($('view-home').classList.contains('active')) renderHomeProducts();
  if($('view-category').classList.contains('active')) applyFilters();
}

function openProductModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  modalProduct = { id:id, color: p.colors ? p.colors[0].name : null, size:null, qty:1 };
  renderProductModal();
  $('product-modal-overlay').classList.add('open');
}
function closeProductModal(){ $('product-modal-overlay').classList.remove('open'); }

function renderProductModal(){
  const p = PRODUCTS.find(x=>x.id===modalProduct.id);
  if(!p) return;
  let html = '<div class="modal-photo">'+(p.image ? '<img src="assets/images/products/'+p.image+'" alt="'+p.name+'">' : '<span>Foto — '+p.name+'<br>fondo neutro, 3:4</span>')+'</div>';
  html += '<div>';
  html += '<div class="modal-name">'+p.name+'</div>';
  html += '<div class="modal-code">'+(p.code ? 'Código: '+p.code : 'Código: KD-'+p.id.toUpperCase())+'</div>';
  html += '<div class="modal-price">'+(p.oldPrice?'<s style="font-size:14px;color:var(--charcoal);margin-right:8px;">Q. '+p.oldPrice+'</s>':'')+'Q. '+p.price+'</div>';
  html += '<div class="modal-desc">'+p.name.toUpperCase()+'</div>';
  if(p.colors){
    html += '<div class="modal-label">Colores</div><div class="color-row">';
    p.colors.forEach(c=>{
      html += '<button class="color-swatch '+(modalProduct.color===c.name?'active':'')+'" style="background:'+c.hex+'" onclick="setModalColor(\''+c.name+'\')" title="'+c.name+'"></button>';
    });
    html += '</div>';
  }
  if(p.sizes){
    const totalUnits = Object.values(p.sizes).reduce((a,b)=>a+b,0);
    html += '<div class="avail-box"><div class="avail-head"><span>Disponibilidad por comercio</span><span class="avail-badge">'+totalUnits+' unidades</span></div>';
    html += '<div class="avail-store">Tienda KD · Puerto Barrios, Izabal</div>';
    html += '<div class="size-avail-row">';
    Object.keys(p.sizes).forEach(sz=>{
      html += '<button class="size-avail-chip '+(modalProduct.size===sz?'active':'')+'" onclick="setModalSize(\''+sz+'\')">'+sz+' · '+p.sizes[sz]+'</button>';
    });
    html += '</div></div>';
  }
  html += '<div class="modal-add-error" id="modal-add-error">Selecciona una talla antes de continuar.</div>';
  html += '<div class="modal-footer"><div class="qty-control"><button onclick="modalQty(-1)">−</button><span id="modal-qty">1</span><button onclick="modalQty(1)">+</button></div>';
  html += '<button class="btn-primary" style="flex:1;justify-content:center;" onclick="addToCartFromModal()">Agregar al carrito</button></div>';
  html += '</div>';
  $('modal-body').innerHTML = html;
}
function setModalColor(name){ modalProduct.color = name; renderProductModal(); }
function setModalSize(sz){ modalProduct.size = sz; $('modal-add-error').style.display='none'; renderProductModal(); }
function modalQty(d){
  modalProduct.qty = Math.max(1, modalProduct.qty + d);
  $('modal-qty').textContent = modalProduct.qty;
}
function addToCartFromModal(){
  const p = PRODUCTS.find(x=>x.id===modalProduct.id);
  if(!p) return;
  if(p.sizes && !modalProduct.size){ $('modal-add-error').style.display='block'; return; }
  cart[p.id] = (cart[p.id]||0) + modalProduct.qty;
  cartVariant[p.id] = { color: modalProduct.color, size: modalProduct.size };
  updateCartBadge();
  showToast(p.name + ' agregado al carrito');
  closeProductModal();
}

/* ---------- home ---------- */
function renderHomeCategories(){
  const order = ['mujer','hombre','nina','nino'];
  const categoryImages = { mujer:'mujer.png', hombre:'hombre.png', nina:'nina.png', nino:'nino.png' };
  const counts = {};
  PRODUCTS.forEach(p=>{ counts[p.cat] = (counts[p.cat]||0)+1; });
  $('home-categories').innerHTML = order.map(key=>{
    const c = CATEGORY_MENU[key];
    return '<button class="cat-card" onclick="goCategory(\''+key+'\')"><div class="cat-hole"></div>'+
      '<div class="cat-photo"><img src="assets/images/categories/'+categoryImages[key]+'" alt="'+c.label+'"></div>'+
      '<div class="cat-name">'+c.label+'</div><div class="cat-count">'+(counts[key]||0)+' productos</div>'+
    '</button>';
  }).join('');
}
function renderHomeCarousel(containerId, products, carouselKey){
  $(containerId).innerHTML =
    '<button class="home-carousel-arrow left" aria-label="Productos anteriores" onclick="moveHomeCarousel(\''+carouselKey+'\',-1)">‹</button>'+
    '<div class="home-products-viewport" id="'+carouselKey+'-viewport"><div class="home-product-track">'+products.map(productCard).join('')+'</div></div>'+
    '<button class="home-carousel-arrow right" aria-label="Más productos" onclick="moveHomeCarousel(\''+carouselKey+'\',1)">›</button>';
}
function moveHomeCarousel(carouselKey, direction){
  const viewport = $(carouselKey+'-viewport');
  if(viewport) viewport.scrollBy({left: direction * viewport.clientWidth, behavior:'smooth'});
}
function renderHomeProducts(){
  renderHomeCarousel('home-trending-carousel', PRODUCTS.filter(p=>p.featured), 'trending');
  renderHomeCarousel('home-new-carousel', PRODUCTS.filter(p=>p.isNew), 'newArrivals');
}

/* ---------- category page + filters ---------- */
function goCategory(catKey, subcatName, subsubName, showAll){
  state.cat = catKey; state.subcat = subcatName || null; state.subsub = subsubName || null; state.showAll = !!showAll;
  filters.min=null; filters.max=null; filters.ofertas=false; filters.colors=[]; filters.sizes=[]; filters.brands=[];
  renderFilterBox();
  applyFilters();
  nav('category');
}

function renderSubcategoryLanding(){
  const category = CATEGORY_MENU[state.cat];
  $('view-category').classList.add('category-landing');
  const items = category.subcats.filter(sc=>categoryProductCount(state.cat, sc.name)>0).map(sc=>{
    const count = categoryProductCount(state.cat, sc.name);
    const image = SUBCATEGORY_IMAGES[state.cat+'|'+sc.name];
    const photo = image ? '<img src="assets/images/subcategories/'+image+'" alt="'+sc.name+'">' : 'Explorar';
    return '<button class="subcategory-card" onclick="goCategory(\''+state.cat+'\',\''+sc.name+'\')">'+
      '<span class="subcategory-photo">'+photo+'</span><strong>'+sc.name+'</strong><small>'+count+' productos</small><span class="subcategory-arrow">→</span></button>';
  }).join('');
  $('cat-page-header').innerHTML = '<h2>'+category.label+'</h2><p class="category-intro">Elige una categoría para ver sus productos.</p>';
  $('result-count').textContent = '';
  $('cat-products').innerHTML = '<div class="subcategory-grid">'+items+'</div>';
}

function getCategoryProducts(){
  if(state.cat==='ofertas') return PRODUCTS.filter(p=>p.oldPrice);
  if(state.cat==='nuevo') return PRODUCTS.filter(p=>p.isNew);
  if(state.cat==='busqueda'){
    const q = (window.__searchQuery||'').toLowerCase();
    return PRODUCTS.filter(p=>p.name.toLowerCase().includes(q));
  }
  let list = PRODUCTS.filter(p=>p.cat===state.cat);
  if(state.subcat) list = list.filter(p=>p.subcat===state.subcat);
  if(state.subsub) list = list.filter(p=>p.subsub===state.subsub);
  return list;
}

function renderBreadcrumb(){
  const isSpecial = state.cat==='ofertas' || state.cat==='nuevo' || state.cat==='busqueda';
  let crumbs = '<button onclick="nav(\'home\')">Inicio</button><span>/</span>';
  if(isSpecial){
    const label = state.cat==='ofertas' ? 'Ofertas' : (state.cat==='nuevo' ? 'Lo más nuevo' : 'Resultados de búsqueda');
    crumbs += '<span class="current">'+label+'</span>';
    $('cat-breadcrumb').innerHTML = crumbs;
    return;
  }
  const c = CATEGORY_MENU[state.cat];
  if(state.subcat || state.subsub){
    crumbs += '<button onclick="goCategory(\''+state.cat+'\')">'+c.label+'</button><span>/</span>';
  } else {
    crumbs += '<span class="current">'+c.label+'</span>';
  }
  if(state.subcat){
    if(state.subsub){
      crumbs += '<button onclick="goCategory(\''+state.cat+'\',\''+state.subcat+'\')">'+state.subcat+'</button><span>/</span><span class="current">'+state.subsub+'</span>';
    } else {
      crumbs += '<span class="current">'+state.subcat+'</span>';
    }
  }
  $('cat-breadcrumb').innerHTML = crumbs;
}

function renderFilterBox(){
  const base = getCategoryProducts();
  const colorSet = {}; const brandSet = {}; const sizeSet = {};
  base.forEach(p=>{
    if(p.colors) p.colors.forEach(c=>colorSet[c.name]=c.hex);
    if(p.brand) brandSet[p.brand]=true;
    if(p.sizes) Object.keys(p.sizes).forEach(s=>sizeSet[s]=true);
  });
  let html = '';
  html += '<div class="filter-group"><h5>Precio</h5><div class="price-inputs">'+
    '<input type="number" placeholder="Mín" oninput="filters.min=this.value?Number(this.value):null;applyFilters()">'+
    '<span>—</span>'+
    '<input type="number" placeholder="Máx" oninput="filters.max=this.value?Number(this.value):null;applyFilters()">'+
  '</div></div>';
  html += '<div class="filter-group"><label class="check-row"><input type="checkbox" onchange="filters.ofertas=this.checked;applyFilters()"> Solo productos en oferta</label></div>';
  if(Object.keys(colorSet).length){
    html += '<div class="filter-group"><h5>Colores</h5>';
    Object.keys(colorSet).forEach(name=>{
      html += '<label class="check-row"><input type="checkbox" onchange="toggleArrFilter(filters.colors,\''+name+'\');applyFilters()"><span class="swatch" style="background:'+colorSet[name]+'"></span>'+name+'</label>';
    });
    html += '</div>';
  }
  if(Object.keys(sizeSet).length){
    html += '<div class="filter-group"><h5>Tallas</h5><div class="size-grid">';
    Object.keys(sizeSet).forEach(sz=>{
      html += '<button class="size-chip" data-size="'+sz+'" onclick="toggleSizeChip(this,\''+sz+'\')">'+sz+'</button>';
    });
    html += '</div></div>';
  }
  if(Object.keys(brandSet).length){
    html += '<div class="filter-group"><h5>Marcas</h5>';
    Object.keys(brandSet).forEach(b=>{
      html += '<label class="check-row"><input type="checkbox" onchange="toggleArrFilter(filters.brands,\''+b+'\');applyFilters()">'+b+'</label>';
    });
    html += '</div>';
  }
  html += '<button class="btn-clear" onclick="clearFilters()">Limpiar filtros</button>';
  $('filter-box').innerHTML = html;
  $('filter-box-mobile').innerHTML = html;
}

function toggleArrFilter(arr, val){
  const i = arr.indexOf(val);
  if(i===-1) arr.push(val); else arr.splice(i,1);
}
function toggleSizeChip(btn, sz){
  btn.classList.toggle('active');
  toggleArrFilter(filters.sizes, sz);
  applyFilters();
}
function clearFilters(){
  filters.min=null; filters.max=null; filters.ofertas=false; filters.colors=[]; filters.sizes=[]; filters.brands=[];
  $('search-input').value=''; $('sort-select').value='';
  renderFilterBox();
  applyFilters();
}
function openFilterModal(){ $('filter-modal-overlay').classList.add('open'); }
function closeFilterModal(){ $('filter-modal-overlay').classList.remove('open'); }

function applyFilters(){
  renderBreadcrumb();
  if(state.cat && !state.subcat && !state.subsub && !state.showAll && !['ofertas','nuevo','busqueda'].includes(state.cat)){
    renderSubcategoryLanding();
    return;
  }
  $('view-category').classList.remove('category-landing');
  let list = getCategoryProducts();
  const search = ($('search-input').value||'').toLowerCase().trim();
  if(search) list = list.filter(p=>p.name.toLowerCase().includes(search));
  if(filters.min!=null) list = list.filter(p=>p.price>=filters.min);
  if(filters.max!=null) list = list.filter(p=>p.price<=filters.max);
  if(filters.ofertas) list = list.filter(p=>p.oldPrice);
  if(filters.colors.length) list = list.filter(p=>p.colors && p.colors.some(c=>filters.colors.includes(c.name)));
  if(filters.sizes.length) list = list.filter(p=>p.sizes && Object.keys(p.sizes).some(s=>filters.sizes.includes(s)));
  if(filters.brands.length) list = list.filter(p=>filters.brands.includes(p.brand));
  const sort = $('sort-select').value;
  if(sort==='price-asc') list = list.slice().sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') list = list.slice().sort((a,b)=>b.price-a.price);
  if(sort==='name-asc') list = list.slice().sort((a,b)=>a.name.localeCompare(b.name));

  const isSpecial = state.cat==='ofertas' || state.cat==='nuevo' || state.cat==='busqueda';
  let title;
  if(state.cat==='ofertas') title='Ofertas';
  else if(state.cat==='nuevo') title='Lo más nuevo';
  else if(state.cat==='busqueda') title='Resultados para "'+(window.__searchQuery||'')+'"';
  else title = state.subsub || state.subcat || CATEGORY_MENU[state.cat].label;
  $('cat-page-header').innerHTML = '<h2>'+title+'</h2>';
  $('result-count').textContent = list.length + ' producto' + (list.length===1?'':'s');
  $('cat-products').innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty-products">No hay productos que coincidan con estos filtros.</div>';
}

/* ---------- cart ---------- */
function addToCart(id){
  cart[id] = (cart[id]||0) + 1;
  updateCartBadge();
  const p = PRODUCTS.find(x=>x.id===id);
  showToast(p.name + ' agregado al carrito');
  if($('view-cart').classList.contains('active')) renderCart();
}
function updateCartBadge(){
  const total = Object.values(cart).reduce((a,b)=>a+b,0);
  document.querySelectorAll('.cart-count').forEach(el=>el.textContent=total);
}
function changeQty(id, delta){
  cart[id] = (cart[id]||0) + delta;
  if(cart[id] <= 0){ delete cart[id]; delete cartVariant[id]; }
  updateCartBadge();
  renderCart();
}
function removeFromCart(id){ delete cart[id]; delete cartVariant[id]; updateCartBadge(); renderCart(); }

function renderCart(){
  const ids = Object.keys(cart);
  if(ids.length===0){ $('cart-empty').style.display='block'; $('cart-layout').style.display='none'; return; }
  $('cart-empty').style.display='none'; $('cart-layout').style.display='grid';
  let subtotal = 0;
  $('cart-items').innerHTML = ids.map(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    const qty = cart[id];
    const lineTotal = p.price*qty;
    subtotal += lineTotal;
    const v = cartVariant[id];
    const variantText = v && (v.color||v.size) ? [v.color, v.size?('Talla '+v.size):null].filter(Boolean).join(' · ') : '';
    return '<div class="cart-row">'+
      '<div class="cart-thumb">'+(p.image ? '<img src="assets/images/products/'+p.image+'" alt="'+p.name+'">' : p.name.split(' ')[0])+'</div>'+
      '<div class="cart-row-info"><div class="cart-row-name">'+p.name+'</div>'+(variantText?'<div class="cart-row-variant">'+variantText+'</div>':'')+'<div class="cart-row-price">Q. '+p.price+' c/u</div></div>'+
      '<div class="qty-control"><button onclick="changeQty(\''+id+'\',-1)">−</button><span>'+qty+'</span><button onclick="changeQty(\''+id+'\',1)">+</button></div>'+
      '<div class="cart-row-total">Q. '+lineTotal+'</div>'+
      '<button class="cart-remove" onclick="removeFromCart(\''+id+'\')" aria-label="Quitar">×</button>'+
    '</div>';
  }).join('');
  $('cart-subtotal').textContent = 'Q. ' + subtotal;
  $('cart-total').textContent = 'Q. ' + subtotal;
}
/* ---------- checkout wizard ---------- */
function openCheckout(){
  checkoutStep = 1;
  document.querySelectorAll('.checkout-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.checkout-panel[data-step="1"]').classList.add('active');
  renderCheckoutSteps();
  const subtotal = Object.keys(cart).reduce((sum,id)=>sum + PRODUCTS.find(x=>x.id===id).price*cart[id], 0);
  $('checkout-total').textContent = 'Q. ' + subtotal;
  appliedCoupon = null;
  const coupon = $('coupon-code');
  const message = $('coupon-message');
  if(coupon) coupon.value = '';
  if(message) message.textContent = '';
  toggleDeliveryFields();
}
function applyCoupon(){
  const input = $('coupon-code');
  const message = $('coupon-message');
  const code = input.value.trim().toUpperCase();
  const subtotal = Object.keys(cart).reduce((sum,id)=>sum + PRODUCTS.find(x=>x.id===id).price*cart[id], 0);
  if(code === 'KD10'){
    appliedCoupon = { code:'KD10', discount:Math.round(subtotal * 0.10) };
    $('checkout-total').textContent = 'Q. ' + (subtotal - appliedCoupon.discount);
    message.textContent = 'Cupón aplicado: 10% de descuento.';
    message.className = 'coupon-message success';
    return;
  }
  appliedCoupon = null;
  $('checkout-total').textContent = 'Q. ' + subtotal;
  message.textContent = 'Cupón no válido. Prueba KD10.';
  message.className = 'coupon-message error';
}
function renderCheckoutSteps(){
  const labels = ['Entrega','Dirección','Facturación','Pago','Listo'];
  let html = '';
  labels.forEach((lab,i)=>{
    const n = i+1;
    const cls = n < checkoutStep ? 'done' : (n===checkoutStep ? 'active' : '');
    html += '<div class="checkout-step '+cls+'"><div class="step-circle">'+(n<checkoutStep?'✓':n)+'</div><div class="step-label">'+lab+'</div></div>';
    if(n<4) html += '<div class="step-connector"></div>';
  });
  $('checkout-steps').innerHTML = html;
}
function goCheckoutStep(n){
  checkoutStep = n;
  document.querySelectorAll('.checkout-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.checkout-panel[data-step="'+n+'"]').classList.add('active');
  renderCheckoutSteps();
}
function validateStep(step){
  let ok = true;
  if(step===2){
    ok = validateField('addr-name', $('addr-name').value.trim().length>=3, 'Ingresa tu nombre completo') && ok;
    ok = validateField('addr-phone', /^[0-9\-\s]{8,}$/.test($('addr-phone').value.trim()), 'Ingresa un teléfono válido') && ok;
    if(document.querySelector('input[name="delivery-method"]:checked')?.value !== 'pickup'){
      ok = validateField('addr-city', $('addr-city').value.trim().length>=2, 'Campo requerido') && ok;
      ok = validateField('addr-line', $('addr-line').value.trim().length>=5, 'Ingresa la dirección exacta') && ok;
      ok = validateField('addr-ref', $('addr-ref').value.trim().length>=2, 'Agrega un punto de referencia') && ok;
    }
  }
  if(step===3){
    ok = validateField('bill-nit', $('bill-nit').value.trim().length>=2, 'Ingresa NIT o escribe "CF"') && ok;
    ok = validateField('bill-name', $('bill-name').value.trim().length>=3, 'Ingresa el nombre de facturación') && ok;
  }
  if(step===4){
    ok = validateField('card-name', $('card-name').value.trim().length>=3, 'Ingresa el nombre en la tarjeta') && ok;
    ok = validateField('card-number', /^[0-9\s]{13,19}$/.test($('card-number').value.trim()), 'Número de tarjeta inválido') && ok;
    ok = validateField('card-exp', /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test($('card-exp').value.trim()), 'Formato MM/AA') && ok;
    ok = validateField('card-cvv', /^[0-9]{3,4}$/.test($('card-cvv').value.trim()), 'CVV inválido') && ok;
  }
  if(!ok) return;
  if(step===4){ finalizeCheckout(); } else { goCheckoutStep(step+1); }
}
function toggleDeliveryFields(){
  const pickup = document.querySelector('input[name="delivery-method"]:checked')?.value === 'pickup';
  const panel = document.querySelector('.checkout-panel[data-step="2"]');
  if(!panel) return;
  panel.querySelector('h3').textContent = pickup ? '2. Datos de contacto para recoger en tienda' : '2. Dirección de envío';
  ['addr-city','addr-line','addr-ref'].forEach(id=>{
    const field = $(id)?.closest('.field');
    if(field) field.style.display = pickup ? 'none' : '';
  });
  const storeAddress = $('pickup-store-address');
  if(storeAddress) storeAddress.style.display = pickup ? 'grid' : 'none';
}
function toggleCF(){
  const cf = $('bill-cf').checked;
  $('bill-nit').value = cf ? 'CF' : '';
  $('bill-name').value = cf ? 'Consumidor Final' : '';
  $('bill-nit').readOnly = cf;
  $('bill-name').readOnly = cf;
}
function finalizeCheckout(){
  const orderNum = Math.floor(1000 + Math.random()*9000);
  const pickup = document.querySelector('input[name="delivery-method"]:checked')?.value === 'pickup';
  const items = Object.keys(cart).map(id=>{
    const product = PRODUCTS.find(item=>item.id===id);
    const variant = cartVariant[id] || {};
    return { product:product, qty:cart[id], color:variant.color || 'Único', size:variant.size || 'Única' };
  }).filter(item=>item.product);
  completedOrder = { no:orderNum, fecha:new Date().toISOString().slice(0,10), pago:'Confirmado', entrega:'PAGADO Y EN BODEGA', ok:true, items:items, contact:{email:currentUser ? currentUser.email : '', phone:$('addr-phone').value.trim()}, delivery:pickup ? 'Recoger en tienda' : 'Entrega a domicilio', address:pickup ? '6ta Avenida entre 14 y 15 Calle, Puerto Barrios' : [$('addr-city').value.trim(), $('addr-line').value.trim(), $('addr-ref').value.trim()].filter(Boolean).join(' · '), total:appliedCoupon ? Math.max(0, items.reduce((sum,item)=>sum + item.product.price*item.qty, 0) - appliedCoupon.discount) : items.reduce((sum,item)=>sum + item.product.price*item.qty, 0) };
  orderHistory.unshift(completedOrder);
  saveOrderHistory();
  $('co-order-number').textContent = orderNum;
  renderCompletedOrder();
  Object.keys(cart).forEach(k=>{ delete cart[k]; delete cartVariant[k]; });
  updateCartBadge();
  checkoutStep = 5;
  document.querySelectorAll('.checkout-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.checkout-panel[data-step="5"]').classList.add('active');
  renderCheckoutSteps();
}
function renderCompletedOrder(){
  const order = completedOrder;
  if(!order) return;
  $('completed-order-details').innerHTML = '<div class="completed-order-head"><b>Detalle del pedido</b><span>#'+order.no+'</span></div>'+
    '<div class="completed-order-delivery"><strong>'+order.delivery+'</strong><span>'+order.address+'</span></div>'+
    order.items.map(item=>'<div class="completed-order-item">'+
      '<div class="completed-order-image">'+(item.product.image ? '<img src="assets/images/products/'+item.product.image+'" alt="'+item.product.name+'">' : '')+'</div>'+
      '<div><strong>'+item.product.name+'</strong><small>Cantidad: '+item.qty+' · '+item.color+' · '+item.size+'</small><small>Q. '+item.product.price+' c/u</small></div>'+
    '</div>').join('')+
    '<div class="completed-order-total">Total pagado <b>Q. '+order.total+'</b></div>';
}

/* ---------- rastrear pedido (público, sin sesión) ---------- */
function trackOrder(){
  const no = parseInt($('track-order-no').value.trim(), 10);
  const contact = $('track-contact').value.trim();
  const result = $('track-result');
  result.style.display = 'block';
  if(!no || !contact){
    result.innerHTML = '<div class="track-not-found">Ingresa el número de pedido y tu correo o teléfono.</div>';
    return;
  }
  const normalizedContact = contact.toLowerCase().replace(/[\s-]/g,'');
  const order = getAllOrders().find(o=>o.no===no && (!o.contact || [o.contact.email, o.contact.phone].some(value=>value && value.toLowerCase().replace(/[\s-]/g,'')===normalizedContact)));
  if(!order){
    result.innerHTML = '<div class="track-not-found">No encontramos un pedido con ese número. Verifica e intenta de nuevo.</div>';
    return;
  }
  const stages = ['Confirmado','Procesando','En bodega','Entregado'];
  let currentIndex;
  if(order.entrega==='ENTREGADO') currentIndex = 3;
  else if(order.entrega==='PAGADO Y EN BODEGA') currentIndex = 2;
  else if(order.entrega==='ANULADO') currentIndex = -1;
  else currentIndex = 1;
  const trackedProduct = PRODUCTS.find(item=>item.image) || PRODUCTS[0];
  let html = '<div style="font-size:14px;font-weight:600;margin-bottom:4px;">Pedido #'+order.no+'</div><div style="font-size:12.5px;color:var(--charcoal);margin-bottom:6px;">Fecha: '+order.fecha+' · Total: Q. '+order.total+'</div>';
  if(trackedProduct){
    html += '<div class="tracked-product"><div class="tracked-product-image">'+(trackedProduct.image?'<img src="assets/images/products/'+trackedProduct.image+'" alt="'+trackedProduct.name+'">':'')+'</div><div><h3>'+trackedProduct.name+'</h3><p><b>Código:</b> '+(trackedProduct.code || 'KD-'+trackedProduct.id.toUpperCase())+'</p><p><b>Precio:</b> Q. '+trackedProduct.price+'</p><p><b>Cantidad:</b> 1</p><p><b>Color:</b> '+(trackedProduct.colors ? trackedProduct.colors[0].name : 'Único')+'</p></div></div>';
  }
  if(currentIndex===-1){
    html += '<div class="track-not-found">Este pedido fue anulado.</div>';
  } else {
    html += '<div class="track-current-status"><b>Estado actual:</b> '+order.entrega+'</div>';
    html += '<div class="track-progress">';
    stages.forEach((s,i)=>{
      const cls = i<currentIndex ? 'done' : (i===currentIndex ? 'current' : '');
      html += '<div class="track-node '+cls+'"><div class="track-dot">'+(i<currentIndex?'✓':(i+1))+'</div><span>'+s+'</span></div>';
    });
    html += '</div>';
  }
  result.innerHTML = html;
}

/* ---------- auth ---------- */
function switchAuthTab(tab){
  authReturnTab = tab;
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  const activeTab = document.querySelector('.auth-tab[data-tab="'+tab+'"]');
  if(activeTab) activeTab.classList.add('active');
  $('form-login').style.display = tab==='login' ? 'block' : 'none';
  $('form-register').style.display = tab==='register' ? 'block' : 'none';
  $('auth-title').textContent = tab==='login' ? 'Iniciar sesión' : 'Crear cuenta';
  $('auth-subtitle').textContent = tab==='login' ? 'Ingresa tus credenciales para continuar' : 'Completa el formulario para registrarte';
}
function showPurchaseLookup(){
  nav('account-lookup');
  $('purchase-email').focus();
}
function handlePurchaseLookup(e){
  e.preventDefault();
  const email = $('purchase-email').value.trim().toLowerCase();
  if(!validateField('purchase-email', /^\S+@\S+\.\S+$/.test(email), 'Ingresa un correo válido')) return;
  const message = $('purchase-lookup-message');
  if(USERS_DB[email]){
    message.textContent = 'Este correo ya tiene una cuenta en nuestro sistema.';
    message.style.color = 'var(--danger)';
    nav('account');
    switchAuthTab(authReturnTab);
    $(authReturnTab === 'register' ? 'reg-email' : 'login-email').value = email;
    return;
  }
  const hasPurchase = getAllOrders().some(order=>order.contact && typeof order.contact.email==='string' && order.contact.email.toLowerCase()===email);
  message.textContent = hasPurchase
    ? 'Encontramos una compra con este correo. Está disponible para crear una cuenta.'
    : 'Este correo está disponible para crear una cuenta.';
  message.style.color = 'var(--success)';
  nav('account');
  switchAuthTab(authReturnTab);
  $(authReturnTab === 'register' ? 'reg-email' : 'login-email').value = email;
}
function validateField(id, condition, msg){
  const errEl = $(id+'-error'); const inputEl = $(id);
  if(!condition){ errEl.textContent = msg; errEl.style.display = 'block'; inputEl.style.borderColor = 'var(--danger)'; return false; }
  errEl.style.display = 'none'; inputEl.style.borderColor = ''; return true;
}
function handleLogin(e){
  e.preventDefault();
  const email = $('login-email').value.trim().toLowerCase();
  const pass = $('login-password').value;
  let ok = true;
  if(!validateField('login-email', /^\S+@\S+\.\S+$/.test(email), 'Ingresa un correo válido')) ok=false;
  if(!validateField('login-password', pass.length>=4, 'Mínimo 4 caracteres')) ok=false;
  if(!ok) return;
  const user = USERS_DB[email] || (
    email === 'qasoporte@vixen.com' && pass === 'pruebas123'
      ? { name:'QA Soporte', email:'qasoporte@vixen.com', password:'pruebas123' }
      : null
  );
  if(!user || user.password !== pass){
    validateField('login-password', false, 'Correo o contraseña incorrectos. ¿Ya creaste tu cuenta?');
    return;
  }
  loggedIn = true;
  currentUser = { name: user.name, email: user.email };
  updateAccountHeader();
  showToast('Sesión iniciada');
  nav('profile');
}
function handleRegister(e){
  e.preventDefault();
  const name = $('reg-name').value.trim();
  const email = $('reg-email').value.trim().toLowerCase();
  const pass = $('reg-password').value;
  const confirmation = $('reg-password-confirm').value;
  let ok = true;
  if(!validateField('reg-name', name.length>=2, 'Ingresa tu nombre')) ok=false;
  if(!validateField('reg-email', /^\S+@\S+\.\S+$/.test(email), 'Ingresa un correo válido')) ok=false;
  if(ok && USERS_DB[email]){ validateField('reg-email', false, 'Ese correo ya está registrado'); ok=false; }
  if(!validateField('reg-password', pass.length>=4, 'Mínimo 4 caracteres')) ok=false;
  if(!validateField('reg-password-confirm', confirmation===pass && confirmation.length>=4, 'Las contraseñas no coinciden')) ok=false;
  if(!ok) return;
  USERS_DB[email] = { name: name, email: email, password: pass };
  saveUsers();
  showToast('Cuenta creada. Ahora inicia sesión');
  $('form-register').reset();
  switchAuthTab('login');
  $('login-email').value = email;
}
function logout(){
  loggedIn = false; currentUser = null;
  updateAccountHeader();
  switchAuthTab('login');
  $('form-login').reset();
  nav('home');
}

function renderProfile(){
  if(!loggedIn){ nav('account'); return; }
  $('profile-name').textContent = currentUser.name;
  $('profile-email').textContent = currentUser.email;
}
function switchOrdersTab(tab){
  document.querySelectorAll('.orders-tab').forEach(t=>t.classList.remove('active'));
  const activeTab = document.querySelector('.orders-tab[data-otab="'+tab+'"]');
  if(activeTab) activeTab.classList.add('active');
  $('panel-ordenes').style.display = tab==='ordenes' ? 'block' : 'none';
  $('panel-direcciones').style.display = tab==='direcciones' ? 'block' : 'none';
  $('panel-facturacion').style.display = tab==='facturacion' ? 'block' : 'none';
  if(tab==='direcciones') renderAddressList();
}

function renderAddressList(){
  const list = $('addresses-list');
  if(!list) return;
  if(!savedAddresses.length){
    list.innerHTML = '<div class="empty-generic">No tienes direcciones guardadas.</div>';
    return;
  }
  list.innerHTML = savedAddresses.map((addr, index)=>
    '<div class="address-item">'+
      '<div class="address-top"><strong>'+addr.name+'</strong><span>'+addr.phone+'</span></div>'+
      '<div class="address-body">'+addr.address+'</div>'+
      '<div class="address-meta">'+addr.department+' · '+addr.municipality+'</div>'+
      '<div class="address-actions"><button class="address-action" onclick="showToast(\'Dirección marcada como principal\')">Principal</button><button class="address-action" onclick="openAddressModal('+index+')">Editar</button><button class="address-action danger" onclick="deleteAddress('+index+')">Eliminar</button></div>'+
    '</div>'
  ).join('');
}

function openAddressModal(editIndex){
  const modal = $('address-modal-overlay');
  if(!modal) return;
  const deptSelect = $('address-departamento');
  deptSelect.innerHTML = '<option value="">Departamento</option>' + Object.keys(DEPARTMENTS).map(d => '<option value="'+d+'">'+d+'</option>').join('');
  $('address-municipio').innerHTML = '<option value="">Municipio</option>';
  $('address-form').reset();
  $('address-form').dataset.editIndex = editIndex === undefined ? '' : editIndex;
  if(editIndex !== undefined){
    const addr = savedAddresses[editIndex];
    if(addr){
      $('address-form').elements.name.value = addr.name;
      $('address-form').elements.phone.value = addr.phone;
      $('address-departamento').value = addr.department;
      updateMunicipalityOptions();
      $('address-municipio').value = addr.municipality;
      $('address-form').elements.address.value = addr.address;
      $('address-form').elements.reference.value = addr.reference;
      modal.querySelector('.modal-head').textContent = 'Editar dirección';
    }
  } else {
    modal.querySelector('.modal-head').textContent = 'Agregar dirección';
  }
  modal.classList.add('open');
}

function closeAddressModal(){
  $('address-modal-overlay').classList.remove('open');
}

function updateMunicipalityOptions(){
  const dept = $('address-departamento').value;
  const muni = $('address-municipio');
  muni.innerHTML = '<option value="">Municipio</option>' + (DEPARTMENTS[dept] || []).map(m => '<option value="'+m+'">'+m+'</option>').join('');
}

function handleAddressSubmit(event){
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = (data.get('name') || '').toString().trim();
  const phone = (data.get('phone') || '').toString().trim();
  const department = (data.get('department') || '').toString().trim();
  const municipality = (data.get('municipality') || '').toString().trim();
  const address = (data.get('address') || '').toString().trim();
  const reference = (data.get('reference') || '').toString().trim();
  if(!name || !phone || !department || !municipality || !address || !reference){
    showToast('Completa todos los campos de la dirección');
    return;
  }
  const addressRecord = {
    id: Date.now(),
    name,
    phone,
    department,
    municipality,
    address,
    reference
  };
  const editIndex = event.currentTarget.dataset.editIndex;
  if(editIndex === '') savedAddresses.push(addressRecord);
  else savedAddresses[Number(editIndex)] = { ...savedAddresses[Number(editIndex)], ...addressRecord };
  saveSavedAddresses();
  renderAddressList();
  closeAddressModal();
  showToast(editIndex === '' ? 'Dirección agregada' : 'Dirección actualizada');
}

function deleteAddress(index){
  savedAddresses.splice(index, 1);
  saveSavedAddresses();
  renderAddressList();
  showToast('Dirección eliminada');
}

function renderOrders(){
  if(!loggedIn){ nav('account'); return; }
  $('orders-username').textContent = currentUser.name;
  const today = new Date().toISOString().slice(0,10);
  const visibleOrders = getAllOrders().filter(o=>o.fecha >= today);
  $('orders-tbody').innerHTML = visibleOrders.length ? visibleOrders.map(o=>
    '<tr><td>#'+o.no+'</td><td>'+o.fecha+'</td><td>'+o.pago+'</td>'+
    '<td><span class="'+(o.ok?'estado-ok':'estado-bad')+'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"/></svg>'+o.entrega+'</span></td>'+
    '<td>Q. '+o.total+'</td>'+
    '<td class="order-actions"><button onclick="showOrderDetails('+o.no+')" aria-label="Ver detalle"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg></button>'+
    '<button onclick="showToast(\'Descarga de factura (demo)\')"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg></button></td></tr>'
  ).join('') : '<tr><td colspan="6"><div class="empty-generic">Las órdenes realizadas desde hoy aparecerán aquí.</div></td></tr>';
  renderAddressList();
}

function showOrderDetails(orderNo){
  const order = getAllOrders().find(item => item.no === orderNo);
  const product = PRODUCTS.find(item => item.featured) || PRODUCTS[0];
  if(!order || !product) return;
  const discount = product.oldPrice ? product.oldPrice - product.price : 0;
  $('order-detail-content').innerHTML =
    '<div class="order-detail-meta"><span>Pedido #'+order.no+'</span><span>'+order.fecha+'</span></div>'+
    '<div class="order-product-detail">'+
      '<div class="order-product-image">'+(product.image ? '<img src="assets/images/products/'+product.image+'" alt="'+product.name+'">' : 'Imagen<br>del producto')+'</div>'+
      '<div class="order-product-info"><h3>'+product.name+'</h3>'+
      '<p><b>Código:</b> '+(product.code || 'KD-'+product.id.toUpperCase())+'</p>'+
      '<p><b>Color:</b> '+(product.colors ? product.colors[0].name : 'Único')+'</p>'+
      '<p><b>Talla:</b> '+(product.sizes ? Object.keys(product.sizes)[0] : 'Única')+'</p>'+
      '<p class="order-product-price">'+(discount ? '<s>Q. '+product.oldPrice+'</s> ' : '')+'Q. '+product.price+(discount ? ' <em>Oferta</em>' : '')+'</p></div>'+
    '</div>'+
    '<div class="order-detail-total"><span>Estado: '+order.entrega+'</span><strong>Total: Q. '+order.total+'</strong></div>';
  $('order-detail-overlay').classList.add('open');
}
function closeOrderDetail(){
  $('order-detail-overlay').classList.remove('open');
}

/* ---------- buscador del header ---------- */
function toggleSearchBox(){
  $('search-popover').classList.toggle('open');
  if($('search-popover').classList.contains('open')) $('header-search-input').focus();
}
function closeSearchBox(){ $('search-popover').classList.remove('open'); }
function runHeaderSearch(){
  const q = $('header-search-input').value.trim();
  if(!q) return;
  state.cat = 'busqueda'; state.subcat = null; state.subsub = null;
  window.__searchQuery = q;
  filters.min=null; filters.max=null; filters.ofertas=false; filters.colors=[]; filters.sizes=[]; filters.brands=[];
  renderFilterBox();
  applyFilters();
  nav('category');
  closeSearchBox();
}
document.addEventListener('click', function(e){
  const wrap = $('search-wrap');
  if(wrap && !wrap.contains(e.target)) closeSearchBox();
});

/* ---------- carrusel del hero ---------- */
const HERO_SLIDES = [
  {label:'Siempre bella', sub:'Descubre nuestra colección', image:'siempre-bella.png'},
  {label:'Variedades Karen Daniela', sub:'#siemprebella', image:'kd-brand.png'}
];
let heroIndex = 0;
let heroTimer = null;
function renderHeroSlides(){
  $('hero-slides').innerHTML = HERO_SLIDES.map(s=>
    '<div class="hero-slide"><img src="assets/images/carousel/'+s.image+'" alt="'+s.label+'"></div>'
  ).join('');
  $('hero-dots').innerHTML = HERO_SLIDES.map((s,i)=>'<button class="hero-dot" onclick="heroGoTo('+i+')"></button>').join('');
  updateHeroPosition();
}
function updateHeroPosition(){
  $('hero-slides').style.transform = 'translateX(-'+(heroIndex*100)+'%)';
  document.querySelectorAll('.hero-dot').forEach((d,i)=>d.classList.toggle('active', i===heroIndex));
}
function heroNext(){ heroIndex = (heroIndex+1) % HERO_SLIDES.length; updateHeroPosition(); resetHeroTimer(); }
function heroPrev(){ heroIndex = (heroIndex-1+HERO_SLIDES.length) % HERO_SLIDES.length; updateHeroPosition(); resetHeroTimer(); }
function heroGoTo(i){ heroIndex = i; updateHeroPosition(); resetHeroTimer(); }
function resetHeroTimer(){ clearInterval(heroTimer); heroTimer = setInterval(heroNext, 4500); }

/* ---------- init ---------- */
buildMegaRow();
buildMobileMenu();
updateAccountHeader();
renderHomeCategories();
renderHomeProducts();
renderHeroSlides();
resetHeroTimer();
updateCartBadge();
