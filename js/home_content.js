


var facility = function() {
    var body, article02;
    body = document.getElementById('my_body');
    article02 = document.createElement('article');
    body.appendChild(article02);
    article02.setAttribute('class', 'article02');
    article02.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Our Facility</h2></div></div>';

    var jason03 = [{
        img: "<i class='fa fa-wifi font-icn color-blue pad-10' aria-hidden='true'></i>",
        text: 'Wifi Internet',
    }, {
        img: "<i class='fas fa-utensils'></i>",
        text: 'Restaurent'

    }, {
        img: "<i class='fas fa-tshirt'></i>",
        text: 'Laundry',
    }, {
        img: "<i class='fas fa-car'></i>",
        text: 'Parking'
    }, {
        img: "<i class='fas fa-coffee' ></i>",
        text: 'Room Service',
    }, {
        img: "<i class='fas fa-tty'></i>",
        text: 'Telephone Service'
    }, {
        img: "<i class='fas fa-car-side'></i>",
        text: 'PickUp & Drop '
    }, {
        img: "<i class='fas fa-shield-alt'></i>",
        text: '24 hours Security '
    }]


    for (var i = 0; i < jason03.length; i++) {
        document.querySelector('.article02>.container>.row').innerHTML += `
          <div class="col-md-3">
              <div class="facility text-center">
                  ${jason03[i].img}
                  <p>${jason03[i].text}</p>
              </div>
          </div>
       `;
    }
}
facility();


var reception = function() {
    body = document.getElementById('my_body');
    article10= document.createElement('article');
    1
    body.appendChild(article10);
    article10.setAttribute('class', 'article10');

    var jason10 = [{
        img_1: 'images/hotel_view/reception_hotel_jagdamba_palace_in_bilaspur.png',
		
		head:'Reception',
		para:'We will delighted to welcome you at reception. Hotel Maa Jagdamba Palace is situated at the prime location of bilaspur, Mangla Road, Beside Holy Cross School, Bilaspur. '
    }]
    document.querySelector('.article10').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-6">
			      <div class="my_blog">
				      <h2>${jason10[0].head}</h2>
					  <hr>
					  <p>${jason10[0].para}</p>
					  
					 <ul class="nav">
						<li><a><i class="fa fa-check"></i> Wifi Internet</a></li>

						<li><a><i class="fa fa-check"></i> Luxurious & Convenient Rooms</a></li>
						<li><a><i class="fa fa-check"></i> Luxurious & Convenient Rooms</a></li>
						<li><a><i class="fa fa-check"></i> Banquet Hall</a></li>
						<li><a><i class="fa fa-check"></i> PickUp & Drop From Uslapur Railway Station</a></li>
						   
					</ul>
					  <br>
                      <a href="#tel:07752357487" class="my_btn_1">Call Now</a>					   
					  
				  </div>
			  </div>
			  <div class="col-md-6">
			      <div class="my_blog">
				      <img src="${jason10[0].img_1}" class="img-responsive">
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
reception();






var restaurent = function() {
    body = document.getElementById('my_body');
    article04 = document.createElement('article');
    body.appendChild(article04);
    article04.setAttribute('class', 'article04');
    article04.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Restaurent Food</h2></div></div>';

    var jason06 = [{
        class: 'food_1',
        name: 'Indian Food',
    }, {
        class: 'food_2',
        name: 'Chinese Food',
    }, {
        class: 'food_3',
        name: 'South Indian'
    }]

    for (var i = 0; i < jason06.length; i++) {
        document.querySelector('.article04>.container>.row').innerHTML += `
		  <div class="col-md-4">
		       <div class="${jason06[i].class} text-center">
			      <div class="blur">
			         <p class="color_white text_back">${jason06[i].name}</p>
				   </div>
			   </div>
		  </div>
		`;
    }
}
restaurent();






var video = function() {
    body = document.getElementById('my_body');
    article09 = document.createElement('article');
    1
    body.appendChild(article09);
    article09.setAttribute('class', 'article09');

    var jason08 = [{
        video_link: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/NhjhKgjhG3o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }]
    document.querySelector('.article09').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-12">
			      <div class="my_video text-center">
				   <h4>Our Video </h4>
				      ${jason08[0].video_link}
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
video();


