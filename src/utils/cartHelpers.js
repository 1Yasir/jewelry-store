export function formatPrice(amount) {
  // Agar amount undefined ya null ho to 0 show kare
  const secureAmount = amount || 0;
  return `Rs. ${secureAmount.toLocaleString("en-PK")}`;
}

export function formatQuantity(item) {
  const qty =
    item.unitType === "kg" && item.quantity % 1 !== 0
      ? item.quantity.toFixed(1)
      : item.quantity;
  return `${qty} ${item.unit || ""}`;
}

export function buildWhatsAppMessage(items, totalBill, checkout) {
  // Safe extraction taake agar fullName ya name mein se koi bhi ho, code crash na kare
  const customerName = checkout.fullName || checkout.name || "";
  const customerPhone = checkout.phone || "";
  const customerAddress = checkout.address || "";

  const lines = [
    "*💎 New Order — HSM JEWELLERS*", // 👈 Aap ke brand ka naam
    "",
    "*Customer Details*",
    `👤 Name: ${customerName}`,
    `📞 Phone: ${customerPhone}`,
    `📍 Address: ${customerAddress}`,
    "",
    "*Order Items*",
  ];

  items.forEach((item, index) => {
    // 🟢 Price logic: Agar discount lagana ho to unitPrice check karein
    const unitPrice = item.unitPrice || 0;
    const lineTotal = unitPrice * item.quantity;
    
    lines.push(
      `${index + 1}. ${item.name} — ${formatQuantity(item)} × ${formatPrice(unitPrice)} = *${formatPrice(lineTotal)}*`
    );
  });

  lines.push("");
  lines.push(`*💰 Total Bill: ${formatPrice(totalBill)}*`);
  lines.push("");
  lines.push("Please confirm my order. Thank you!");

  return lines.join("\n");
}