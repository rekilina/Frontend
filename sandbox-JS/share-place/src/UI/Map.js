export class Map {
	constructor(coords) {
		this.coords = coords;
		this.render();
	}
	render() {
		if (!google) {
			alert("Can't access google variable");
			return;
		}
		const map = new google.maps.Map(document.getElementById('map',
			{
				center: this.coords,
				zoom: 4
			}));
		new google.maps.Marker({
			position: this.coords,
			map: map
		});
	}
}