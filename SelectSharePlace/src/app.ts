import axious from 'axios';

const form = document.querySelector('form')!;
const addressInput: HTMLInputElement = <HTMLInputElement>document.getElementById("address")!;

const GOOGLE_API_KEY = 'AIzaSyD2uOosm4FjD4KuT_KHpopKX568e5U9S1k';

// declare var google: any;

type GoogleGeocodingResponse = {
	results: {
		geometry: {
			location: {
				lat: number,
				lng: number
			}
		}
	}[];
	status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event) {
	event.preventDefault();
	console.log('form');
	const enteredAddress = addressInput.value;

	axious.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI
		(enteredAddress)}&key=${GOOGLE_API_KEY}`).then((response) => {
			if (response.data.status !== 'OK') {
				throw new Error('Could not fetch localtion');
			}
			const coordinates = response.data.results[0].geometry.location;

			console.log(coordinates);
			console.log(response);

			const map = new google.maps.Map(
				document.getElementById("map") as HTMLElement,
				{
					zoom: 4,
					center: coordinates,
				}
			);
			new google.maps.Marker({ position: coordinates, map: map });

		}).catch(err => {
			console.log(err.message);
		});


}

form.addEventListener('submit', searchAddressHandler);