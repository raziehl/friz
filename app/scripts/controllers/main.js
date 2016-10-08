'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $timeout) {
    $('#navTrigger').hover(function(){$('.navbar').css('top', '0px');}, function(){$('.navbar').css('top', '-50px');});
    $scope.viewTransition = function(loc){
    	
    	$rootScope.squash = "squash";
      $rootScope.shadow = "none";
        function changeView(){$location.path(loc);}
        function cancelAnim(){$rootScope.squash = "ani"; $rootScope.shadow = "0px 7px 20px 7px black";}

        $timeout(changeView, 950);
        $timeout(cancelAnim, 1500);

        //document.getElementById("hidden") = 200;
    }
    $scope.cbtn = function(btn){
      
      

        console.log('btn: ' + btn + ' pressed');

        $rootScope.shrink = "shrink";

        if ($('#detail').attr('aria-expanded') == "true" &&  btn == 1) $rootScope.shrink = "ani";
        else if ($('#detail2').attr('aria-expanded') == "true" &&  btn == 2) $rootScope.shrink = "ani";
        else if ($('#detail3').attr('aria-expanded') == "true" &&  btn == 3) $rootScope.shrink = "ani";

        if(btn == 1){
            $("#detail2").collapse('hide');
            $("#detail3").collapse('hide');
        }
        else if(btn == 2){
            $("#detail").collapse('hide');
            $("#detail3").collapse('hide');
        }
        else if(btn == 3){
            $("#detail").collapse('hide');
            $("#detail2").collapse('hide');
        }
        else if(btn == 4){
            $rootScope.shrink = "ani";
        }
    }	
   
    $(document).ready(function(){
    $("#owl-example").owlCarousel({
      autoPlay: true,
      navigation : false, // Show next and prev buttons
      pagination: false,
      singleItem: true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight: true,
      itemsScaleUp: true
  });
    
});
    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
    $rootScope.li3 = 'iactive';
  });
