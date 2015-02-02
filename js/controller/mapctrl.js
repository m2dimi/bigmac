//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
//controller carte
        app.controller('carteCtrl', function($scope, $log , $routeParams, dataFactory, $filter) {
           
        
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
            var idcountry = $filter('filter')(data, countrySelect);
            $scope.countryselection = idcountry[0].perso;
        })

        //Code for the map game
        $scope.colourAll = '#9DD3CA';        

        $scope.countryreveal = function(number, event){
            // if (number==1) {
                // var idcurrent = event.target.id;
                 // $scope.colour = $scope.colour === "green" ? "blue" : "green";
                var id = $(event.target).data('id');
                // var col = "colour"+id;
                // console.log(id);
                switch(id) {
                    case 102:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour102 = "green";
                        $scope.countotale = countotale;
                        break;
                    case 103:
                        $scope.colour103 = "blue";
                        var count = 1;
                        var win = false;
                        find(count, win);
                        $scope.countotale = countotale;
                        // alert('perdu');
                        break;
                    case 104:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour104 = "green";
                        $scope.countotale = countotale;
                        break;
                    
                    case 105:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour105 = "green";
                        $scope.countotale = countotale;
                        break;
                    case 106:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour106 = "green";
                        $scope.countotale = countotale;
                        break;
                    case 107:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour107 = "green";
                        $scope.countotale = countotale;
                        break;
                    case 108:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour108 = "green";
                        $scope.countotale = countotale;
                        break;
                    case 109:
                        var count = 1;
                        var win = true;
                        find(count, win);
                        $scope.colour109 = "green";
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
      function find (count, win)
      {
          if(win == false)
          {
              $('#lose').modal('show');
          }
          else
          {
              countotale = countotale + count;
              if(countotale == 7)
              {
                  $('#win').modal('show');
              }
          }
      }