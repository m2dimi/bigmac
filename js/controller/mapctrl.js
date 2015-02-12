//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
//controller carte
        app.controller('carteCtrl', function($scope, $log , $routeParams, dataFactory, $filter) {
        $scope.countotale = 0;
            var actived = false;

        //Display the name of the selected countries   
        $scope.model = {
            dataurl1: $routeParams.countryA,
            dataurl2 : $routeParams.countryB
        }
        $scope.countryA = $routeParams.countryA;
        $scope.countryB = $routeParams.countryB;

        //Display the thumb image of selected country on the start lightbox
        dataFactory.GetDataCountry(function(data){
            var countrySelect = $routeParams.countryA;
            $scope.countryselection = $filter('filter')(data, countrySelect, true)[0].perso;
            $scope.prenomselection = $filter('filter')(data, countrySelect, true)[0].prenom;
        })

        //Code for the map game
        $scope.colourAll = '#9DD3CA';


        $scope.countryreveal = function(number, event){
            // if (number==1) {
                // var idcurrent = event.target.id;
                 // $scope.colour = $scope.colour === "green" ? "blue" : "green";
            var id = $(event.target.parentElement.parentElement).data('id');

            // var col = "colour"+id;
                // console.log(id);
                switch(id) {

                    case "other_country":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "south_asia":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "iran":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "indonesia":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "north_pole":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "caraibaan_ship":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "south_wale":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "north-wale":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "arabia2":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;
                    
                    case "arabia":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "russia":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "europe_west":
                        var count = 0;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        // alert('perdu');
                        break;

                    case "italia":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break

                    case "UK":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "france":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "west_africa":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "marocco":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "egypte":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "mongolia":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "china":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "india":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "australia":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "madagascar":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "south_africa":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "south_america":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "bolivia":
                        var count = 1;
                        var win = true;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "alaska-canada":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "USA_West":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;

                    case "USA_east":
                        var count = 1;
                        var win = false;
                        color(id, win, count);
                        $scope.countotale = countotale;
                        break;
                }
                 
                // console.log(id);
            //     $scope.$apply;
            // }else if (number==2) {
            //     alert('bien joué');
            // };    
            
        }

      });

    var countotale = 0;

      function color(id, win, count)
      {
          var i = 0;
          var ele = '#'+id+ ' > *:first';
          var nbr = $(ele).length;


          console.log(nbr);


          var elefill = '#'+id+ ' > [attribut="fill"]';

          if(win == true)
          {
              if($('path, polygon, circle', ele).attr('fill')!= "#3DB807")
              {
                  countotale = countotale + count;
                  if (countotale == 11) {
                      $('#win').modal('show');
                  }
              }
              $('path, polygon, circle', ele).attr('fill', "#3DB807");
          }
          else
          {
              $('path, polygon, circle', ele).attr('fill', "#E25B5A");
              $('#lose').modal('toggle');
          }

          /*
          while (i != nbr)

          {
              $(ele).attr('fill','#fff');
             i++;
          }

*/

      }