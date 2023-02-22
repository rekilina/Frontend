import { Modal } from './UI/modal';
// import { Map } from './UI/Map';

class PlaceFinder {
	constructor() {
		const addressForm = document.querySelector('form');
		const locateUserBtn = document.getElementById('locate-btn');

		locateUserBtn.addEventListener('click', this.locateUserHandler);
		addressForm.addEventListener('submit', this.findAddressHandler);
	}

	selectPlace(coords) {
		//this.map = new Map(coords);
	}

	locateUserHandler() {
		const modalWindow = new Modal('loading-modal-content', 'Some fallback text');
		modalWindow.show();
		if (!navigator.geolocation) {
			alert('AutoLocation is not available in your brawser');
			return;
		}
		navigator.geolocation.getCurrentPosition(success => {
			const coordinates = {
				lat: success.coords.latitude,
				lng: success.coords.longitude,
			};
			// console.log(coordinates);
			modalWindow.hide();
			//this.map = new Map(coordinates);
		},
			error => {
				modalWindow.hide();
				alert("Couldn't locate you. Enter address manualy");
			});
	}

	findAddressHandler() {

	}
}

const placeFinder = new PlaceFinder();

