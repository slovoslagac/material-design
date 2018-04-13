type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    checkScrollForTransparentNavbar: debounce(function () {
        $navbar = $('.navbar[color-on-scroll]');
        scroll_distance = $navbar.attr('color-on-scroll') || 500;

        if ($(document).scrollTop() > scroll_distance) {
            if (transparent) {
                transparent = false;
                $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
                $('.navbar[color-on-scroll]').addClass('navbar-default');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar[color-on-scroll]').addClass('navbar-transparent');
                $('.navbar[color-on-scroll]').removeClass('navbar-default');
            }
        }
    }, 17),

    initDocChartist: function () {
        var dataSales = {
            labels: ['1', '2', '3', '4', '5'],
            series: [
                [6,18,16,19,3],
                [7,26,27,8,1],
                [13,19,27,12,4],
                [11,48,42,6,13]
            ]
        };

        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 800,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };

        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
            labels: ['Administracija', 'HR', 'INK', 'IT', 'Mreža', 'Poslovni Procesi', 'UI', 'Marketing', 'STRA', 'UP'],
            series: [
                [44, 52, 28, 18, 61, 93, 3, 7, 6, 5],
                [18, 17, 10, 25, 14, 27, 0, 0, 5 ,1]
            ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Bar('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
            labels: ['52%', '32%', '10%', '6%'],
            series: [52, 32, 10, 6]
        });
    },

    initChartist: function () {

        var dataSales = {
            labels: ['1', '2', '3', '4', '5'],
            series: [
                [11,48,42,6,13],
                [6,18,16,19,3],
                [7,26,27,8,1]

            ]
        };

        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 80,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };

        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
            labels: ['Administracija', 'HR', 'INK', 'IT', 'Mreža', 'Poslovni Procesi', 'UI', 'Marketing', 'STRA', 'UP'],
            series: [
                [44, 52, 28, 18, 61, 93, 3, 7, 6, 5],
                [18, 17, 10, 25, 14, 27, 0, 0, 5 ,1]
            ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Bar('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
            labels: ['41%', '37%', '19%', '3%'],
            series: [49, 44, 23, 4]
        });
    },

    initGoogleMaps: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{"featureType": "water", "stylers": [{"saturation": 43}, {"lightness": -11}, {"hue": "#0088ff"}]}, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"hue": "#ff0000"}, {"saturation": -100}, {"lightness": 99}]
            }, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"color": "#808080"}, {"lightness": 54}]}, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ece2d9"}]
            }, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#ccdca1"}]}, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#767676"}]
            }, {"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}, {"featureType": "poi", "stylers": [{"visibility": "off"}]}, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#b8cb93"}]
            }, {"featureType": "poi.park", "stylers": [{"visibility": "on"}]}, {"featureType": "poi.sports_complex", "stylers": [{"visibility": "on"}]}, {
                "featureType": "poi.medical",
                "stylers": [{"visibility": "on"}]
            }, {"featureType": "poi.business", "stylers": [{"visibility": "simplified"}]}]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function (from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }


}
