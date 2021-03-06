var room = function() {
    body = document.getElementById('my_body');
    article03 = document.createElement('article');
    body.appendChild(article03);
    article03.setAttribute('class', 'article03');
    article03.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Luxurious & Convenient</h2></div></div>';

    var jason04 = [{
        photo: 'images/rooms/room01.jpg',
        name: 'Luxurious Suite Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <p>Single - 1799/-</p><p>Double - 1999/-</p>',
        link: 'booking.html'

    }, {
        photo: 'images/rooms/room02.jpg',
        name: 'AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <p>Single - 1299/-</p><p>Double - 1499/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/rooms/hotel03.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }]

    for (var i = 0; i < jason04.length; i++) {
        document.querySelector('.article03>.container>.row').innerHTML += `
            <div class="col-md-4">
                <div class="my_room">
                    <img src="${jason04[i].photo}" class="img-responsive">
                    <p>${jason04[i].name}</p>
					<hr>
                    <p>${jason04[i].price}</p>
                    <a href="${jason04[i].link}" class="my_btn_1">Book Now</a>
                </div>
            </div>
        `;
    }

}
room();

var btn = function() {
    body = document.getElementById('my_body');
    article001 = document.createElement('article');

    body.appendChild(article001);
    article001.setAttribute('class', 'article001');


    document.querySelector('.article001').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-12">
			      <div class="my_video text-center">
				     <a href="rooms.html" class="my_btn_1">More Rooms</a>
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
btn();

