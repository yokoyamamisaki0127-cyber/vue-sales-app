export const cartStore = {
  items: [] as any[],
  
  addItem(item: any) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  },
  
  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  },
};