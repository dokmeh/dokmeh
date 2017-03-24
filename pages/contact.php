<section class="contact-global-h">
    <div class="contact-handler">
        <div class="contact-info-h">
            <h3 class="h31">Hi Dokmeh, we want to work with you, and we have a budget and a professional briefing.</h3>
            <a href="mailto:bussiness@dokmeh-studio.com" class="button"><p class="hide-opacity"> Lets talk about it... </p></a>
        </div>
        <div class="contact-info-h">
            <h3>Contact Information's </h3>
            <a href="tel:+982122945087"><p class="hide-opacity">+98 21 22945087</p></a>
            <a href="mailto:business@info-dokmeh-studio.com"><p class="hide-opacity">business@info-dokmeh-studio.com</p></a>
            <a href="#"><p class="hide-opacity">TEHRAN,IRAN</p></a>
            <a href="/faq"><p class="hide-opacity">FAQ</p></a>
            <a href="/suport"><p class="hide-opacity">Suport</p></a>
        </div>
        <div class="contact-info-h">
            <h3>How much do you charge for a website</h3>
            <p class="find-out-jok"><span class="hide-opacity">Find Out</span></p>
        </div>
        <div class="contact-info-h">
            <h3>Lets see what we are doing.</h3>
            <div class="contact-all-social">
                <a class="socials" href="https://www.instagram.com/dokmeh_studio/"><img src="img/socials/instagram-logo.svg"></a>
                <a class="socials" href="https://dribbble.com/dokmeh/"><img src="img/socials/dribbble-logo.svg"></a>
                <a class="socials" href="https://www.behance.net/dokmehs"><img src="img/socials/behance-logo.svg"></a>
                <!--<a href="https://twitter.com/dokmeh_studio/"></a>-->
            </div>
        </div>
    </div>
    <div class="contact-handler">
        <div class="contact-img-h">
            <img src="img/contact-img.jpg">
        </div>
    </div>
    <div class="video-for-jok">
        <video width="320" height="240" >
            <source src="video/c-(1).mp4" type="video/mp4">
        </video>
        <video width="320" height="240" >
            <source src="video/c-(5).mp4" type="video/mp4">
        </video>
        <video width="320" height="240" >
            <source src="video/c-(3).mp4" type="video/mp4">
        </video>
        <video width="320" height="240" >
            <source src="video/c-(4).mp4" type="video/mp4">
        </video>

        <video width="320" height="240" >
            <source src="video/c-(2).mp4" type="video/mp4">
        </video>
    </div>



    <script type="text/javascript">
        console.log('map');
        // When the window has finished loading create our google map below


        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,
                disableDefaultUI: true,
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(35.7257248,51.4624216), // New York

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#edd30b"
                            },
                            {
                                "weight": "0.30"
                            },
                            {
                                "saturation": "-75"
                            },
                            {
                                "lightness": "5"
                            },
                            {
                                "gamma": "1"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#edd30b"
                            },
                            {
                                "saturation": "-75"
                            },
                            {
                                "lightness": "5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffde00"
                            },
                            {
                                "visibility": "off"
                            },
                            {
                                "weight": "6"
                            },
                            {
                                "saturation": "-28"
                            },
                            {
                                "lightness": "0"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#e6007e"
                            },
                            {
                                "weight": "1"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#ffde00"
                            },
                            {
                                "saturation": "-28"
                            },
                            {
                                "lightness": "0"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#edd30b"
                            },
                            {
                                "visibility": "simplified"
                            },
                            {
                                "saturation": "-75"
                            },
                            {
                                "lightness": "5"
                            },
                            {
                                "gamma": "1"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#ffde00"
                            },
                            {
                                "weight": 8
                            },
                            {
                                "saturation": "-28"
                            },
                            {
                                "lightness": "0"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#edd30b"
                            },
                            {
                                "weight": 8
                            },
                            {
                                "lightness": "5"
                            },
                            {
                                "gamma": "1"
                            },
                            {
                                "saturation": "-75"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#edd30b"
                            },
                            {
                                "saturation": "-75"
                            },
                            {
                                "lightness": "5"
                            },
                            {
                                "gamma": "1"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#edd30b"
                            },
                            {
                                "saturation": "-75"
                            },
                            {
                                "lightness": "5"
                            },
                            {
                                "gamma": "1"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "color": "#ffde00"
                            },
                            {
                                "saturation": "-28"
                            },
                            {
                                "lightness": "0"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    </script>
    <div id="map"></div>
</section>