// ============================================================
// PROJECT B — Shopping Cart
// Block 7: The Final Boss
// ============================================================

// ============================================================
// PRODUCT DATA
// ============================================================
const products = [
  { id: 1, name: "Notebook",     emoji: "📓", price: 45  },
  { id: 2, name: "Pen Set",      emoji: "✒️",  price: 120 },
  { id: 3, name: "Backpack",     emoji: "🎒", price: 850 },
  { id: 4, name: "Water Bottle", emoji: "🍶", price: 350 },
  { id: 5, name: "Headphones",   emoji: "🎧", price: 1299 },
  { id: 6, name: "Sticky Notes", emoji: "📌", price: 60  },
];

const PROMO_CODES = {
  SAVE10:  10,  // 10% off
  QUEST20: 20,  // 20% off
  NEWUSER: 15,  // 15% off
};

// ============================================================
// STATE
// ============================================================
let cart = [];         // Array of { product, quantity }
let discountPercent = 0;

// ============================================================
// DOM REFERENCES
// ============================================================
const productsGrid     = document.querySelector("#productsGrid");
const cartItemsList    = document.querySelector("#cartItems");
const cartBadge        = document.querySelector("#cartBadge");
const subtotalDisplay  = document.querySelector("#subtotalDisplay");
const discountRow      = document.querySelector("#discountRow");
const discountDisplay  = document.querySelector("#discountDisplay");
const totalDisplay     = document.querySelector("#totalDisplay");
const promoInput       = document.querySelector("#promoInput");
const promoBtn         = document.querySelector("#promoBtn");
const promoMsg         = document.querySelector("#promoMsg");
const checkoutBtn      = document.querySelector("#checkoutBtn");

// ============================================================
// RENDER PRODUCTS
// ============================================================
const renderProducts = () => {
  productsGrid.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="product-emoji">${product.emoji}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">₹${product.price}</div>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart 🛒</button>
    `;
    card.querySelector(".add-to-cart-btn").addEventListener("click", () => addToCart(product.id));
    productsGrid.appendChild(card);
  });
};

// ============================================================
// CART LOGIC
// ============================================================
const addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.product.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }

  renderCart();
};

const removeFromCart = (productId) => {
  cart = cart.filter(item => item.product.id !== productId);
  renderCart();
};

const changeQuantity = (productId, delta) => {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    renderCart();
  }
};

// ============================================================
// RENDER CART
// ============================================================
const renderCart = () => {
  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    cartItemsList.innerHTML = `<p class="empty-cart">Your cart is empty 🛒<br>Add some items!</p>`;
    cartBadge.textContent = "0";
    updateTotals(0);
    return;
  }

  let subtotal = 0;

  cart.forEach(item => {
    const lineTotal = item.product.price * item.quantity;
    subtotal += lineTotal;

    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.innerHTML = `
      <span class="cart-item-emoji">${item.product.emoji}</span>
      <span class="cart-item-name">${item.product.name}</span>
      <div class="qty-controls">
        <button class="qty-btn minus-btn" data-id="${item.product.id}">−</button>
        <span class="qty-val">${item.quantity}</span>
        <button class="qty-btn plus-btn" data-id="${item.product.id}">+</button>
      </div>
      <span class="cart-item-price">₹${lineTotal}</span>
      <button class="remove-btn" data-id="${item.product.id}" title="Remove">✕</button>
    `;

    li.querySelector(".minus-btn").addEventListener("click", () => changeQuantity(item.product.id, -1));
    li.querySelector(".plus-btn").addEventListener("click",  () => changeQuantity(item.product.id, +1));
    li.querySelector(".remove-btn").addEventListener("click", () => removeFromCart(item.product.id));

    cartItemsList.appendChild(li);
  });

  // Total badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;

  updateTotals(subtotal);
};

const updateTotals = (subtotal) => {
  const discount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discount;

  subtotalDisplay.textContent = `₹${subtotal}`;
  totalDisplay.textContent    = `₹${total}`;

  if (discount > 0) {
    discountRow.style.display = "flex";
    discountDisplay.textContent = `-₹${discount} (${discountPercent}% off)`;
  } else {
    discountRow.style.display = "none";
  }
};

// ============================================================
// PROMO CODE
// ============================================================
promoBtn.addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();
  promoMsg.className = "promo-msg";

  if (PROMO_CODES[code]) {
    discountPercent = PROMO_CODES[code];
    promoMsg.textContent = `✅ "${code}" applied — ${discountPercent}% off!`;
    promoMsg.classList.add("success");
    promoInput.disabled = true;
    promoBtn.disabled = true;
    renderCart(); // Recalculate totals
  } else {
    promoMsg.textContent = `❌ Invalid code. Try SAVE10 or QUEST20!`;
    promoMsg.classList.add("error");
  }
});

// ============================================================
// CHECKOUT
// ============================================================
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty! Add some items first. 🛒");
    return;
  }
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discount;

  alert(`🎉 Order Placed!\n\n${totalItems} item(s)\nTotal: ₹${total}\n\nThank you for shopping at JS Shop!`);
  cart = [];
  discountPercent = 0;
  promoInput.value = "";
  promoInput.disabled = false;
  promoBtn.disabled = false;
  promoMsg.textContent = "";
  renderCart();
});

// ============================================================
// INITIALISE
// ============================================================
renderProducts();
renderCart();
