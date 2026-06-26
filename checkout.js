let pendingPurchase = null;

function openCheckout(itemName, price) {
  document.getElementById('checkout-item-name').textContent = itemName;
  document.getElementById('checkout-item-price').textContent = `$${price}`;
  document.getElementById('checkout-total').textContent = `$${price}`;
  document.getElementById('checkout-card').value = '';
  document.getElementById('checkout-expiry').value = '';
  document.getElementById('checkout-cvv').value = '';
  document.getElementById('checkout-pay-btn').disabled = false;
  document.getElementById('checkout-pay-btn').innerHTML = '🔒 Pay Securely';
  document.getElementById('checkout-overlay').classList.remove('hidden');
  closeShop();
  closeUnlock();
}

function closeCheckout() {
  document.getElementById('checkout-overlay').classList.add('hidden');
  pendingPurchase = null;
}

function processFakePayment() {
  const btn = document.getElementById('checkout-pay-btn');
  btn.disabled = true;
  btn.innerHTML = 'Processing...';

  playClick();

  setTimeout(() => {
    if (!pendingPurchase) return;

    if (pendingPurchase.type === 'coins') {
      coins += pendingPurchase.amount;
    } else if (pendingPurchase.type === 'world') {
      worlds[pendingPurchase.worldIndex].unlocked = true;
      renderWorlds();
    }

    updateAllCoinDisplays();
    saveProgress();
    playWin();
    closeCheckout();

    setTimeout(() => {
      alert('✅ Payment successful! Thank you for your purchase.');
    }, 200);

  }, 1800);
}