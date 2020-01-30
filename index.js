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
let dropdown = document.querySelector('.dropdown'),
	label = document.querySelector('.dropdown__label'),
	menu = document.querySelector('.dropdown__menu');


label.addEventListener('click', function () {
	dropdown.classList.toggle('open');
});

class Dropdown {
	constructor(name, obj) {
		this.name = name;
		this.obj = obj;
	}
	create() {
		for (let i = 0; i < this.obj.items.length; i++) {
			if (i == 0) {
				label.textContent = this.obj.items[i].label;
			} else {
				let li = document.createElement('li');
				li.innerHTML = this.obj.items[i].label;
				menu.insertAdjacentElement('afterbegin', li);
			}
		}
		return this;
	}
	getActive() {
		menu.addEventListener('click', function (event) {
			if (event.target && event.target.tagName == 'LI') {
				//текущий город кидаем в конец выпадабщего списка
				let activeToNot = document.createElement('li');
				activeToNot.textContent = label.textContent;
				menu.insertAdjacentElement('beforeend', activeToNot);

				//выбранный город кидаем в текущий
				label.textContent = event.target.textContent;
				event.target.remove();

				dropdown.classList.toggle('open');
			}
		});
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

const dropDown = new Dropdown('dropdown', obj).create().getActive();