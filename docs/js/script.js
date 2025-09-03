// Cart functionality
let cartCount = 0;
const cartElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add to cart buttons functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        cartCount++;
        cartElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount);

        // Show a quick confirmation
        const originalText = button.textContent;
        button.textContent = 'Added!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 1500);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;

        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showModal('Message sent', 'Thanks! Your message has been sent. We will reply by email.');
        contactForm.reset();
    });
}

// Product dictionary
const products = {
    1: {
        title: "Hovercraft",
        type: "Freeride",
        price: "$769.99",
        desc: "Hovercraft Backcountry Snowboard",
        fullDesc: "Carve lines that feel like they’ve been waiting for you all season. This ride thrives in deep days, eats up choppy runouts, and still threads tree lines with skate-deck agility. Its tapered directional shape and 3D contour base give you effortless float when the snow stacks, while the camber underfoot locks in control and response when you’re charging harder lines. The tail stays loose enough for smooth turn initiations but keeps the pop and drive to blast out of landings.",
        icon: "fa-person-snowboarding",
        img: "img/Hovercraft.jpg"
    },
    2: {
        title: "Mind Expander",
        type: "Freeride",
        price: "$449.99",
        desc: "Mind Expander Backcountry Snowboard",
        fullDesc: "The blunted nose, full size tail, tight sidecut, and 3D Contour Base 3.0 offer the nimble maneuverability of a directional board matched with the all-mountain performance of a directional twin. New for 22/23, the Mind Expander now features a Surf Camber profile for better edge hold in variable conditions and the stance was moved forward 20mm for improved carving performance. To keep the playful board feel, the Bamboo Surf Core has V-core profiling that gives the board a softer flex between the feet for easy turn initiation and a stiffer flex in the tips so you won’t fold the nose. The Mind Expander is also built with Basalt Power Stringers for edge response, Rounded Recycled ABS Sidewalls for topsheet durability, and a super fast Sintered 8000 base.",
        icon: "fa-person-snowboarding",
        img: "img/Mind-expander.jpg"
    },
    3: {
        title: "Rocket Fish",
        type: "Snowsurf",
        price: "$1,455.99",
        desc: "Rocket Fish Backcountry Snowboard",
        fullDesc: "The Rocket Fish Mid Fish Outline Core Snowboard combines a new hybrid sidewall with a bamboo-enhanced core for optimal balance, durability, and performance. An updated acceleration camber system ensures effortless maneuverability, while the fine-tuned width, sidecut, and tail design offer adaptability for various riding styles. Designed for versatility, this board glides smoothly through every line, delivering precise control and freedom for all rider preferences.",
        icon: "fa-person-snowboarding",
        img: "img/Rocket-fish.png"
    },
    4: {
        title: "Stratos",
        type: "Freeride",
        price: "$799.99",
        desc: "Stratos Backcountry Snowboard",
        fullDesc: "The Jones Stratos Snowboard is a high-energy, all-terrain freerider built to carve, float, and charge with style. Its tapered directional shape and short sidecut make it ultra-nimble, perfect for quick turns and effortless float in deep snow. Whether you're laying trenches on hardpack or slashing through trees, the Stratos delivers a lively, surf-inspired ride that thrives everywhere on the mountain.",
        icon: "fa-person-snowboarding",
        img: "img/Stratos.jpg"
    },
    5: {
        title: "Tweaker",
        type: "Freestyle",
        price: "$389.99",
        desc: "Tweaker Freestyle Snowboard",
        fullDesc: "The Tweaker Snowboard is a freestyle-oriented, true twin snowboard designed for ollies, tricks, and creative carving. With a full camber profile and a wood core that's softer between the feet for maneuverability and stiffer in the tips for stability, it offers a playful yet stable riding experience. Featuring a 3D Contour Base 3.0 for freeride performance, a traditional full camber for excellent edge response, a sintered 8000 base for durability and speed, and eco-friendly elements like Wend Natural Wax and Bio Resin, this board is a high-performance choice for riders of all skill levels.",
        icon: "fa-person-snowboarding",
        img: "img/Tweaker.jpg"
    },
    6: {
        title: "Mountain Surfer",
        type: "Snowsurf",
        price: "$349.99",
        desc: "Mountain Surfer Backcountry Snowboard",
        fullDesc: "The new Mountain Surfer delivers a fresh perspective on shredding winter waves. The all-wood, surf-inspired snowboard does not use traditional bindings, it features removable foot hooks that you push your boots into, this improves board control and helps keep the board locked to your feet as you slash and ollie. It also features a foam traction pad, and a leash with a carabiner clip. If you want to surf hook-less, simply remove the hooks and shred those big mountain barrels.",
        icon: "fa-person-snowboarding",
        img: "img/mountain-surfer.jpg"
    }
};

// Reviews dictionary
const reviews = {
    1: [
        {
        name: "Alex K.",
        rating: 5,
        date: "2025-02-14",
        text: "Floats great in powder and carves well on groomers. Very stable board."
        },
        {
        name: "Marina S.",
        rating: 4,
        date: "2025-01-22",
        text: "Agile and fast. A bit stiff in chopped snow, but overall excellent."
        }
    ],
    2: [
        {
        name: "Dmitry L.",
        rating: 5,
        date: "2025-03-03",
        text: "Mind Expander is super nimble. Amazing for tree runs and carving."
        }
    ],
    3: [
        {
        name: "Kenji",
        rating: 4,
        date: "2025-02-01",
        text: "Stable and responsive, but requires focus at high speeds. Excellent in powder."
        },
        {
        name: "Ilya",
        rating: 5,
        date: "2025-04-18",
        text: "Smooth glide and great edge control."
        }
    ],
    4: [
        {
        name: "Sora",
        rating: 5,
        date: "2025-05-29",
        text: "Stratos is versatile. Carving and freeride both feel amazing. Float is excellent."
        }
    ],
    5: [
        {
        name: "Artem",
        rating: 4,
        date: "2025-03-20",
        text: "Perfect for the park: good pop, stable on landings. Handles groomers well."
        },
        {
        name: "Nana",
        rating: 5,
        date: "2025-06-11",
        text: "Fun, light, and inspires creativity."
        }
    ],
    6: [
        {
        name: "Yuki",
        rating: 4,
        date: "2025-02-27",
        text: "Surf-like feeling without bindings. Amazing in soft snow, not ideal on ice."
        }
    ]
    };

// Update product details page based on URL parameters
function updateProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && products[productId]) {
        const product = products[productId];

        document.getElementById('detail-product-title').textContent = product.title;
        document.getElementById('detail-product-price').textContent = product.price;
        document.getElementById('detail-product-desc').textContent = product.desc;
        document.getElementById('detail-product-full').textContent = product.fullDesc;

        // Replace icons with images
        const iconBox = document.getElementById('detail-product-icon');
        if (iconBox) {
            // Showing image
            iconBox.innerHTML = `<img src="${product.img}" alt="${product.title}">`;

            // Showing icon if no image loads
            const imgEl = iconBox.querySelector('img');
            imgEl.onerror = () => {
                iconBox.innerHTML = `<i class="fas ${product.icon}"></i>`;
            };

            // render reviews for this product
            renderReviews(productId);
        }
    }
}

// Replace icons with images on home page
document.querySelectorAll('.product-card').forEach(card => {
    const id = card.getAttribute('data-id');
    const p = products[id];
    if (!p) return;

    const holder = card.querySelector('.product-img');
    if (holder) {
        // Showing image
        holder.innerHTML = `<img src="${p.img}" alt="${p.title}">`;

        // Showing icon if no image loads
        const imgEl = holder.querySelector('img');
        imgEl.onerror = () => {
            holder.innerHTML = `<i class="fas ${p.icon}"></i>`;
        };
    }
});

// Redirect to product details page when a product card is clicked
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        window.location.href = `product-details.html?id=${productId}`;
    });
});

// Returns string with star icons
function formatStars(n) {
    const full = "★".repeat(Math.max(0, Math.min(5, n)));
    const empty = "☆".repeat(5 - full.length);
    return full + empty;
}

// Calculates average rating for a given review array
function calcAverageRating(arr) {
    if (!arr?.length) return null;
    const sum = arr.reduce((s, r) => s + (r.rating || 0), 0);
    return Math.round((sum / arr.length) * 10) / 10;
}

// Renders review section for a given productId
function renderReviews(productId) {
    const listEl = document.getElementById('reviews-list');
    const summaryEl = document.getElementById('reviews-summary');
    if (!listEl || !summaryEl) return;

    const items = reviews[productId] || [];
    listEl.innerHTML = '';

    if (!items.length) {
        summaryEl.textContent = "No reviews yet.";
        return;
    }

    const avg = calcAverageRating(items);
    summaryEl.textContent = `Average rating: ${avg} / 5 • ${items.length} review${items.length > 1 ? 's' : ''}`;

    items.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <span class="review-name">${r.name ?? 'Anonymous'}</span>
                <span class="review-stars">${formatStars(r.rating ?? 0)}</span>
                <span class="review-date">${r.date ?? ''}</span>
            </div>
            <div class="review-text"></div>
        `;
        card.querySelector('.review-text').textContent = r.text ?? '';
        listEl.appendChild(card);
    });
}

/* Storage keys */
const CART_STORAGE_KEY = "cart_v1";

/* Read cart: { [id]: qty } */
function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || {}; }
    catch(e) { return {}; }
}

/* Write cart and update header badge */
function writeCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
}

/* Sum qty */
function cartItemsTotal(cart = readCart()) {
    return Object.values(cart).reduce((a,b)=>a + (parseInt(b)||0), 0);
}

/* Update header bubble (.cart-count) */
function updateCartBadge() {
    const el = document.querySelector('.cart-count');
    if (!el) return;
    el.textContent = String(cartItemsTotal());
    try {
        const n = cartItemsTotal();
        localStorage.setItem('cartCount', String(n));
    } catch {}
}

/* Cart operations */
function addToCart(id, qty = 1) {
    const cart = readCart();
    cart[id] = (parseInt(cart[id]) || 0) + (qty|0);
    writeCart(cart);
}

function setQty(id, qty) {
    const cart = readCart();
    if ((qty|0) <= 0) delete cart[id];
    else cart[id] = (qty|0);
    writeCart(cart);
    renderCart();
}

/* Render cart drawer UI */
function ensureCartUI() {
    if (document.getElementById('cart-overlay')) return;

    // overlay
    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cart-overlay';

    // drawer
    const drawer = document.createElement('aside');
    drawer.className = 'cart-modal';
    drawer.id = 'cart-drawer';
    drawer.innerHTML = `
        <div class="cart-modal-header">
            <div class="cart-title">Cart</div>
            <button class="cart-close" id="cart-close" aria-label="Close">✕</button>
        </div>
        <div class="cart-items" id="cart-items"></div>
        <div class="cart-footer">
            <div class="cart-summary">
                <span>Subtotal</span><span id="cart-total">$0.00</span>
            </div>
            <div class="cart-actions">
                <button class="btn-secondary" id="cart-clear">Clear</button>
                <button class="btn-primary" id="cart-checkout">Checkout</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    // events
    overlay.addEventListener('click', closeCart);
    drawer.querySelector('#cart-close').addEventListener('click', closeCart);
    drawer.querySelector('#cart-clear').addEventListener('click', () => { writeCart({}); renderCart(); });
    drawer.querySelector('#cart-checkout').addEventListener('click', () => {
        const cart = readCart();
        const itemsCount = cartItemsTotal(cart);
        // if cart empty
        if (!itemsCount) {
            showModal('Cart', 'Your cart is empty.');
            return;
        }
        // compute sum
        let sum = 0;
        Object.entries(cart).forEach(([id, q]) => {
            const p = products[id];
            if (!p) return;
            // price calc
            const num = parseFloat(String(p.price).replace(/[^0-9.]/g,''));
            sum += num * (q|0);
        });
        const orderNo = Math.floor(100000 + Math.random()*900000);
        showModal(
            'Order placed',
            `Thanks for your order!<br>Order No: #${orderNo}<br>Items: ${itemsCount}<br>Total: $${sum.toFixed(2)}`
        );
        writeCart({});
        renderCart();
        closeCart();
    });
}

function openCart() {
    ensureCartUI();
    document.getElementById('cart-overlay').style.display = 'block';
    document.getElementById('cart-drawer').style.transform = 'translateX(0)';
    renderCart();
}
function closeCart() {
    const ov = document.getElementById('cart-overlay');
    const dr = document.getElementById('cart-drawer');
    if (ov) ov.style.display = 'none';
    if (dr) dr.style.transform = 'translateX(100%)';
}

/* Render cart list */
function renderCart() {
    const wrap = document.getElementById('cart-items');
    if (!wrap) return;
    const cart = readCart();
    const entries = Object.entries(cart).map(([id, qty]) => ({ id: Number(id), qty: (qty|0), p: products[id] })).filter(x => x.p);
    if (!entries.length) {
        wrap.innerHTML = '<p>Your cart is currently empty.</p>';
        document.getElementById('cart-total').textContent = '$0.00';
        return;
    }
    wrap.innerHTML = entries.map(({ id, qty, p }) => {
        const priceNum = parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 0;
        const line = (priceNum * qty).toFixed(2);
        return `
        <div class="cart-item" data-id="${id}">
            <div class="cart-item-row">
                <div>
                    <div class="cart-item-title">${p.title}</div>
                    <div class="cart-item-price">${p.price}</div>
                </div>
                <div class="cart-item-total">$${line}</div>
            </div>
            <div class="cart-item-actions">
                <div class="qty-control">
                    <button type="button" class="qty-btn" data-action="dec" aria-label="Decrease">−</button>
                    <input type="number" class="qty-input" min="0" step="1" value="${qty}" inputmode="numeric"/>
                    <button type="button" class="qty-btn" data-action="inc" aria-label="Increase">+</button>
                </div>
                <button class="btn-secondary" data-remove>Remove</button>
            </div>
        </div>
    `;
        }).join('');

    // bind line controls
    wrap.querySelectorAll('.cart-item').forEach(card => {
        const id = Number(card.dataset.id);
        const input = card.querySelector('.qty-input');
        card.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const act = btn.dataset.action;
                let v = parseInt(input.value || '0', 10);
                v = isNaN(v) ? 0 : v;
                v = act === 'inc' ? v+1 : Math.max(0, v-1);
                input.value = String(v);
                setQty(id, v);
            });
        });
        input.addEventListener('change', () => {
            let v = parseInt(input.value || '0', 10);
            v = isNaN(v) ? 0 : Math.max(0, v);
            setQty(id, v);
            input.value = String(v);
        });
        card.querySelector('[data-remove]').addEventListener('click', () => setQty(id, 0));
    });

    // total
    const total = entries.reduce((sum, {qty,p}) => {
        const priceNum = parseFloat(String(p.price).replace(/[^0-9.]/g,'')) || 0;
        return sum + priceNum * qty;
    }, 0);
    document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
}

/* Render product cars */
function renderProductsGridFromDict() {
    const grid = document.querySelector('.products-grid');
    if (!grid || !window.products) return;

    let html = '';
    Object.keys(products).forEach(id => {
        const p = products[id];
        html += `
        <div class="product-card" data-id="${id}">
            <div class="product-img">
                <img src="${p.img}" alt="${p.title}" onerror="this.onerror=null;this.closest('.product-img').innerHTML='<i class=\\'fas ${p.icon}\\'></i>'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <div class="product-stars"></div>
                <p class="product-price">${p.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>`;
    });
    grid.innerHTML = html;
}

/* Bind index events */
function bindIndexGridHandlers() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    grid.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add-to-cart');
        const card = e.target.closest('.product-card');
        if (addBtn && card) {
            e.stopPropagation();
            const id = Number(card.getAttribute('data-id'));
            addToCart(id, 1);
            return;
        }
        if (card) {
            const id = card.getAttribute('data-id');
            window.location.href = `product-details.html?id=${id}`;
        }
    });}

/* Details page qty controls */
function ensureDetailsQtyControls() {
    const btn = document.getElementById('detail-add-to-cart');
    if (!btn) return; // not on details page

    if (!document.getElementById('detail-qty')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'qty-row';
        wrapper.innerHTML = `
            <div class="qty-control">
                <button type="button" class="qty-btn" data-action="dec" aria-label="Decrease">-</button>
                <input id="detail-qty" type="number" min="1" step="1" value="1" inputmode="numeric" class="qty-input" />
                <button type="button" class="qty-btn" data-action="inc" aria-label="Increase">+</button>
            </div>`;
        btn.parentNode.insertBefore(wrapper, btn);
        const input = wrapper.querySelector('#detail-qty');
        wrapper.querySelectorAll('.qty-btn').forEach(b => b.addEventListener('click', () => {
            const act = b.dataset.action;
            let v = parseInt(input.value || '1', 10);
            v = isNaN(v) ? 1 : v;
            input.value = String(act === 'inc' ? v+1 : Math.max(1, v-1));
        }));
        input.addEventListener('change', () => {
            let v = parseInt(input.value || '1', 10);
            input.value = String(isNaN(v) ? 1 : Math.max(1, v));
        });
    }

    // Add to Cart on details
    btn.addEventListener('click', () => {
        // Current product id from URL
        const params = new URLSearchParams(location.search);
        const id = Number(params.get('id'));
        const qtyEl = document.getElementById('detail-qty');
        const qty = parseInt(qtyEl?.value || '1', 10) || 1;
        addToCart(id, qty);
    }, { once: false });
}

/* Header cart icon */
function bindHeaderCartOpen() {
    const icon = document.querySelector('.cart-icon');
    if (!icon) return;
    icon.addEventListener('click', openCart);
}

/* Parse price without $ */
function parsePrice(val) {
    if (val == null) return NaN;
    const num = parseFloat(String(val).replace(/[^0-9.]/g, ''));
    return isNaN(num) ? NaN : num;
}

/* Collect unique product types from dictionary */
function collectTypes() {
    if (!window.products) return [];
    const set = new Set();
    Object.keys(products).forEach(id => {
        const p = products[id];
        if (p && p.type) set.add(String(p.type));
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
}

/* Render index product grid with filter */
function renderProductsGridWithFilter(opts) {
    const grid = document.querySelector('.products-grid');
    if (!grid || !window.products) return;

    const type = (opts && opts.type) ? String(opts.type).trim() : '';
    const min = (opts && typeof opts.min === 'number') ? opts.min : NaN;
    const max = (opts && typeof opts.max === 'number') ? opts.max : NaN;

    const items = Object.keys(products).map(id => ({ id, p: products[id] }))
        .filter(({ p }) => !!p)
        .filter(({ p }) => {
            // by type
            if (type && String(p.type) !== type) return false;
            // by price
            const priceNum = parsePrice(p.price);
            if (!isNaN(min) && priceNum < min) return false;
            if (!isNaN(max) && priceNum > max) return false;
            return true;
        });

    // identical HTML to original card render
    grid.innerHTML = items.map(({ id, p }) => `
    <div class="product-card" data-id="${id}">
        <div class="product-img">
            <img src="${p.img}" alt="${p.title}" onerror="this.onerror=null;this.closest('.product-img')
            .innerHTML='<i class=\\'fas ${p.icon}\\'></i>'">
        </div>
        <div class="product-info">
            <h3 class="product-title">${p.title}</h3>
            <div class="product-stars"></div>
            <p class="product-price">${p.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    </div>
    `).join('');

    const meta = document.getElementById('filter-meta');
    if (meta) {
        const total = Object.keys(products).length;
        const shown = items.length;
        meta.textContent = (type || !isNaN(min) || !isNaN(max))
            ? `Showing ${shown} of ${total}`
            : '';
    }
}

/* Modals for confirmation UI's */
function showModal(title, html, buttons) {

    let overlay = document.getElementById('ui-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'ui-overlay';
        overlay.className = 'ui-overlay';
        document.body.appendChild(overlay);
    }

    const modal = document.createElement('div');
    modal.className = 'ui-modal';
    modal.innerHTML = `
        <div class="ui-modal-header">
            <div class="ui-modal-title">${title || 'Message'}</div>
                <button class="ui-modal-close" aria-label="Close">✕</button>
            </div>
            <div class="ui-modal-body">${html || ''}</div>
        <div class="ui-modal-footer"></div>
    `;

    const footer = modal.querySelector('.ui-modal-footer');
    const close = () => {
        overlay.classList.remove('open');
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 180);
    };

    const btns = Array.isArray(buttons) && buttons.length ? buttons : [{
        text: 'OK', className: 'btn-primary', action: close
    }];

    btns.forEach((b) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = (b.className || 'btn-primary') + ' btn-small';
        btn.textContent = b.text || 'OK';
        btn.addEventListener('click', () => {
            try { if (typeof b.action === 'function') b.action(); } catch { }
            if (!b.keepOpen) close();
        });
        footer.appendChild(btn);
    });

    modal.querySelector('.ui-modal-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

    document.body.appendChild(modal);
    overlay.classList.add('open');
    requestAnimationFrame(() => modal.classList.add('open'));
}

/* Filters UI */
function setupFiltersUI() {
    const select = document.getElementById('filter-type');
    const minI = document.getElementById('filter-min');
    const maxI = document.getElementById('filter-max');
    const apply = document.getElementById('filter-apply');
    const reset = document.getElementById('filter-reset');

    if (!select || !apply || !reset) return;

    // Fill type options from dict
    const types = collectTypes();
    if (types.length && select.options.length <= 1) {
        types.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            select.appendChild(opt);
        });
    }

    function currentFilter() {
        const type = select.value || '';
        const min = minI.value ? parseFloat(minI.value) : NaN;
        const max = maxI.value ? parseFloat(maxI.value) : NaN;
        return { type, min, max };
    }

    function applyNow() {
        renderProductsGridWithFilter(currentFilter());
    }

    apply.addEventListener('click', applyNow);
    reset.addEventListener('click', () => {
        select.value = '';
        minI.value = '';
        maxI.value = '';
        renderProductsGridWithFilter({});
    });

    // Enter key in number inputs triggers "Apply"
    [minI, maxI].forEach(inp => {
        if (!inp) return;
        inp.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') applyNow();
        });
    });
}

/* Init */
document.addEventListener('DOMContentLoaded', function() {
    try {
        setupFiltersUI();                       // render filter UI
        
        renderProductsGridFromDict();           // render index cards from dict
        if (window.location.pathname.includes('product-details.html')) {
            updateProductDetails();             // Check if we're on the product details page and update product info
        }
        if (document.querySelector('.products-grid')) {
            renderProductsGridWithFilter({});   // initial render with no filter
        }
        bindIndexGridHandlers();                // events on index
        ensureCartUI();                         // inject cart UI once
        bindHeaderCartOpen();                   // header icon opens cart
        ensureDetailsQtyControls();             // add qty controls on details
        updateCartBadge();                      // sync bubble from saved cart
        renderCart();                           // render cart
    } catch (e) {
        console.warn('Init add-on failed:', e);
    }
});