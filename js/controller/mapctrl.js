//CONTROLLERS
//Each page have his controller. We need to write the code in each controllers
//controller carte
        app.controller('carteCtrl', function($scope, $log , $routeParams, dataFactory) {
            $scope.compt=[1,2,3,4,5]
        $log.debug('angular is ready');
            $log.debug('test', $routeParams);
        $scope.model = {
	        dataurl :
	        	$routeParams.countryA + " " +
	        	$routeParams.countryB
        }
        // $scope.countries = dataFactory;
        $scope.colourAll = 'red';
        var mysvg = d3.select("#play").append("svg");

        var data = ["http://www.mcdonalds.com.br/", "Brasil",   "Red",  1,  494,    40, 26, 817];

        var liste = [128, 2,13,45,65,78];
        var minvaleur = d3.min(liste);
        var maxvaleur = d3.max(liste);
        var size = d3.scale.linear()
            .domain([minvaleur, maxvaleur]).range([5,50])

        var selection = mysvg.selectAll("circle")
        .data(liste)
        .enter()
            .append("circle")
            .attr({
            r: function(d,i){ return size(d)},
            cy: 60,
            cx: function(d,i){ console.log("----",d,i); return i * 40;},
            fill: "yellow"
          })
        mysvg.selectAll("circle")
            .on("click", function(){
                // Determine if current line is visible
                var active   = redLine.active ? false : true ,
                  newOpacity = active ? 0 : 1;
                // Hide or show the elements
                d3.select("#redLine").style("opacity", newOpacity);
                d3.select("#redAxis").style("opacity", newOpacity);
                // Update whether or not the elements are active
                redLine.active = active;
            })
                

        $scope.countryreveal = function(number, event){
            if (number==1) {
                // var idcurrent = event.target.id;
                 $scope.colour = $scope.colour === "green" ? "blue" : "green";
                
               

                var id = $(event.target).data('id');
                var col = "colour"+id;
                console.log(col);
                 $scope.col = "green";
                // console.log(id);
                $scope.$apply;
            }else if (number==2) {
                alert('bien joué');
            };    
            
        }

      });
      