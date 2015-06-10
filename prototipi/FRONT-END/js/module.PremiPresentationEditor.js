var app =  angular.module('PremiPresentationEditor', ['mm.foundation']);
app.controller('PremiPresentationEditorCtrl', function($scope){});
app.controller('TopBarDemoCtrl', function ($scope) {});
app.controller('sectionChooser', function ($scope) {
    hideAllSections();
});
    
    
app.controller('menuRadioController', ['$scope',function ($scope) {
     $scope.menuItems = [
        {
          key: "MyProjects",
          txt: "My Projects"
        },
        {
          key: "PresentationEditor",
          txt: "Presentation Editor"
        },
        {
          key: "InfographicEditor",
          txt: "Infographic Editor"
        }
    ];
}]);


app.controller('myProjectsController', function ($scope) {
   jQuery('#MyProjects').load("MyProjects/MyProjects.html");
});
app.controller('PresentationEditorController', function ($scope) {
   jQuery('#PresentationEditor').load("PresentationEditor/presentationEditor.html");
   jQuery.getScript('js/module.slide.editor.js');
});
app.controller('InfographicEditorController', function ($scope) {
   jQuery('#InfographicEditor').load("InfographicEditor/infographicEditor.html");
});

/* jQuery functions */
function hideAllSections(){
    jQuery('#MyProjects').hide();    
    jQuery('#PresentationEditor').hide();
    jQuery('#InfographicEditor').hide();
}

function showSection(name){
    hideAllSections();
    if(name=="'MyProjects'")
    jQuery('#MyProjects').show();
    if(name=="'PresentationEditor'")
    jQuery('#PresentationEditor').show();
    if(name=="'InfographicEditor'")
    jQuery('#InfographicEditor').show();
}

jQuery().ready(function(){
   hideAllSections();
   jQuery('.MenuRadioButtons').click(function(){
      // alert(jQuery(this).attr('id'));
       
       id_section=jQuery(this).attr('id').toString();
      // alert(id_section);
       
       showSection(id_section); 
   });
   
   
   
});