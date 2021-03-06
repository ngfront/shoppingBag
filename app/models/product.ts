export class Product {
	img_url: string;
	id: number;
	name: string;
	variation: string;
	style: string;
	selected_color: Object;
	selected_size: Object;
	available_options: Object;
	quantity: number;
	org_price: number;
	price: number;
	currency: string;

	constructor(obj?: any) {
		this.img_url = obj && obj.img_url || null;
		this.id = obj && obj.p_id || null;
		this.name = obj && obj.p_name || null; 
		this.variation = obj && obj.p_variation || null;
		this.style = obj && obj.p_style || null;
		this.selected_color = obj && obj.p_selected_color || null;
		this.selected_size = obj && obj.p_selected_size || null;
		this.available_options = obj && obj.p_available_options || null;
		
		this.quantity = obj && obj.p_quantity || null;
		this.org_price = obj && obj.p_originalprice || null;
		this.price = obj && obj.p_price || null;
		this.currency = obj && obj.c_currency || null;
	}
}




