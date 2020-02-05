// Реализуйте класс Dropdown, который будет инициализировать компонент выбора элементов по функционалу похожий на обычный HTML элемент select, но полностью реализованный вашим кодом без select тега.

// Пример использования:
// const dropdown = new Dropdown('dropdown', {
//   items: [
//     {label: 'Москва', id: 'msk'},
//     {label: 'Санкт-Петербург', id: 'spb'},
//     {label: 'Новосибирск', id: 'nsk'},
//     {label: 'Краснодар', id: 'krdr'}
//   ]
// })
/* ------------------------------- */
//select tag

// class Dropdown {
//   constructor (name, obj) {
//     this.name = name;
//     this.obj = obj;
//     this.$el = document.createElement('select');
//   }
  
//   create() {
//     this.obj.items.forEach(element => {
//       let option = document.createElement('option');
//       option.innerHTML = element.label;
//       this.$el.insertAdjacentElement('afterbegin', option);      
//     });    
//     return this;    
//   }
// }

// let obj = {
//     items: [
//       {label: 'Москва', id: 'msk'},
//       {label: 'Санкт-Петербург', id: 'spb'},
//       {label: 'Новосибирск', id: 'nsk'},
//       {label: 'Краснодар', id: 'krdr'}
//     ]
//   };
// const dropDown = new Dropdown('dropdown', obj).create();
// document.querySelector('.wrapper').insertAdjacentElement('afterbegin', dropDown.$el);
/* ------------------------------- */
//no select tag
class Dropdown {
	constructor(selector, obj) {
		this.items = obj.items;
		this.$el = document.querySelector(`.${selector}`);
		this.$label = document.querySelector(`.${selector}__label`);
		this.$menu = document.querySelector(`.${selector}__menu`);

		this.$label.textContent = this.items[0].label;

		Array.from(this.items).forEach(element => {
			let li = document.createElement('li');
			li.textContent = element.label;
			this.$menu.insertAdjacentElement('beforeend', li);
		});

		this.$label.addEventListener('click', () => this.toggle());

		this.$menu.addEventListener('click', event => {			
			if (event.target && event.target.tagName == 'LI') {
				this.$label.textContent = event.target.textContent;
				this.toggle();
			}
		});
	}
		
	toggle() {
		if (this.$el.classList.contains('open')){
			this.$el.classList.remove('open');
		} else {
			this.$el.classList.add('open');
		}
	}
}

let obj = {
	items: [
		{label: 'Москва', id: 'msk'},
		{label: 'Санкт-Петербург', id: 'spb'},
		{label: 'Новосибирск', id: 'nsk'},
		{label: 'Краснодар', id: 'krdr'},
		{label: 'Павлодар', id: 'pvl'},
		{label: 'Семипалатинск', id: 'smsk'},
		{label: 'Караганда', id: 'krg'},
		{label: 'Уссурийск', id: 'uss'},
		{label: 'Пермь', id: 'prm'},
		{label: 'Чикаго', id: 'chkg'},
	]
};

const dropDown = new Dropdown('dropdown', obj);