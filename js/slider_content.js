(function() {
    var body = document.getElementById('my_body');
    var article = document.createElement('article');
    body.appendChild(article);
    //create SOme Bascic Elements
    document.querySelector('article').innerHTML += '<div class="container"><div class="row"><h1 class="text-center">Welcome To  Hotel Maa Jagdamba Palace  </h1></div></div>';

    var jason = [{
        img: 'images/icon/birthday-celebration-in_maa_jagdamba_hotel_palace_in_bilaspur.png',
        name: 'Birthday Party',
        link: 'hall.html'
    }, {
        img: 'images/icon/kitty_party_in_maa_jagadamba_hotel_palace.png',
        name: 'Kitty Party',
        link: 'hall.html',
    }, {
        img: 'images/icon/resturent_in_maa_jagdamba_hotel_bilaspur.png',
        name: 'Restaurent',
        link: 'resturant.html',
    }, {
        img: 'images/icon/conference_hall_in_maa_jagdamba_hotel_palace_i_bilaspur_chhatoshgarh.png',
        name: 'Conference Hall',
        link: 'hall.html',
    }]

    for (var i = 0; i < jason.length; i++) {
        document.querySelector('article>.container>.row').innerHTML += `
             <div class="col-md-3">
                 <div class="my_facility text-center">
                     <a href="${jason[i].link}">
                         <img src="${jason[i].img}">
                         <p>${jason[i].name}</p>
                     </a>
                 </div>
             </div>
        `;
    }



})()


var my_Content = function() {
    var body = document.getElementById('my_body');
    var article01 = document.createElement('article');
    body.appendChild(article01);
    article01.setAttribute('class', 'article01');
    //create SOme Bascic Elements
    document.querySelector('.article01').innerHTML += '<div class="container"><div class="row"></div></div>';

    // Craeting Jason Data 
    var myContent = [{

        image: 'images/hotel_view/jagdamba_palace_bilaspur_slider0.jpg',
        image01: 'images/hotel_view/jagdamba_palace_in_bilaspur_slider01.jpg',
        image02: 'images/hotel_view/jagdamba_palace+in_bilaspur_reception.jpg',
        image03: 'images/hotel_view/ac_rooms_in_bilaspur_jagdamba_palace.jpg',
        image04: 'images/hall/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh.jpg',
        image05: 'images/hall/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh_12.jpg',
        image06: 'images/hall/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh02.jpg', 
		image07: 'images/restaurent/resturent_hotel_jagdamba_palace_in_bilaspur.jpg',
		image08: 'images/restaurent/chines_restaurent_in_bilaspur_hotel_jagadamba_palace.jpg',

    }, {
        poster01: 'images/room01.png'
    }]

    document.querySelector('.article01').innerHTML += `
                  <div class="container">
                        <div class="row">
                             <div class="col-md-6">
                              
                                <div class="my_slider">
                                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                        <!-- Indicators -->
                                        <ol class="carousel-indicators">
											<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
											<li data-target="#myCarousel" data-slide-to="1"></li>
											<li data-target="#myCarousel" data-slide-to="2"></li>
											<li data-target="#myCarousel" data-slide-to="3"></li>
											<li data-target="#myCarousel" data-slide-to="4"></li>
											<li data-target="#myCarousel" data-slide-to="5"></li>
											<li data-target="#myCarousel" data-slide-to="6"></li>
											<li data-target="#myCarousel" data-slide-to="7"></li>
											<li data-target="#myCarousel" data-slide-to="8"></li>
                                        </ol>
                                        
                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner">
                                        
                                        <div class="item active">
                                           <img src="${myContent[0].image}" alt="" style="width:100%;">
                                        
                                        </div>
                                        <div class="item ">
                                           <img src="${myContent[0].image01}" alt="" style="width:100%;">
                                        
                                        </div> 
										<div class="item ">
                                           <img src="${myContent[0].image02}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image03}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image04}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image05}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image06}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image07}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image08}" alt="" style="width:100%;">
                                        
                                        </div>
										
                                        
                                        </div>
                                        
                                        <!-- Left and right controls -->
                                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
											<span class="glyphicon glyphicon-chevron-left"></span>
											<span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
											<span class="glyphicon glyphicon-chevron-right"></span>
											<span class="sr-only">Next</span>
                                        </a>
                                        </div>
                                    
                                </div>
                             </div>
                             <div class="col-md-6">
                                 <div class="content_jagdamba_hotel">
                                     <h1>About Us</h1>
                                     <p>Hotel Hotel Maa Jagdamba Palace Palace Palace in Bilaspur-chhattisgarh. The hotel is strategically located in Mangla Road, Beside Holy Cross School, Bilaspur. Many have also reviewed the hotel to be among the sought after Hotels in Bilaspur-chhattisgarh. The hotel functions rom 10:00 - 22:00 all through the week. Catering to the convenience of its guests, the hotel makes available various.

                                     payment methods to ease out the payment process like,Net Banking & Cash.</p>
                                 </div>
                             </div>
                             
                        </div>
                  </div>`;

}
my_Content();
