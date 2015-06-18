var app = angular.module('PremiPresentationEditor', ['mm.foundation']);
app.controller('PremiPresentationEditorCtrl', function($scope) {
});
app.controller('TopBarDemoCtrl', function($scope) {
});
app.controller('sectionChooser', function($scope) {
    hideAllSections();
});


app.controller('menuRadioController', ['$scope', function($scope) {
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


app.controller('myProjectsController', function($scope) {
    $scope.Projects = [
        {
            Title: "MyProject1",
            sections: ["Presentation", "Infographics", "Modules"]
        }, {
            Title: "MyProject2",
            sections: ["Presentation", "Infographics", "Modules"]
        }, {
            Title: "MyProject3",
            sections: ["Presentation", "Infographics", "Modules"]
        }, {
            Title: "MyProject4",
            sections: ["Presentation", "Infographics", "Modules"]
        }, {
            Title: "MyProject5",
            sections: ["Presentation", "Infographics", "Modules"]
        }
    ];
    //jQuery('#MyProjects').load("MyProjects/MyProjects.html");
});
app.controller('PresentationEditorController', function($scope) {
});
app.controller('InfographicEditorController', function($scope) {
    //jQuery('#InfographicEditor').load("InfographicEditor/infographicEditor.html");
});

//SLIDE EDITOR
app.controller('Premi_SLIDE_EditorCtrl', function($scope) {
    $scope.test = 'TEST_TXT';

    hidePanels();
    //hideAllEditForms();
    $scope.EditPanels = [
        {
            id: "textEdit",
            visible: "true"
        },
        {
            id: "imageEdit",
            visible: "true"
        },
        {
            id: "tableEdit",
            visible: "true"
        },
        {
            id: "chartEdit",
            visible: "true"
        },
        {
            id: "RealTimeDataEdit",
            visible: "true"
        },
        {
            id: "ShapeEdit",
            visible: "true"
        },
    ];
    $scope.components = [
        {
            label: "Text",
            id: "editText",
            classes: "fa fa-font fa-2x"
        },
        {
            label: "Image",
            id: "editImage",
            classes: "fa fa-camera-retro fa-2x"
        },
        {
            label: "Table",
            id: "editTable",
            classes: "fa fa-table fa-2x"
        },
        {
            label: "Chart",
            id: "editChart",
            classes: "fa fa-bar-chart fa-2x"
        },
        {
            label: "RealTimeData",
            id: "editRealTimeData",
            classes: "fa fa-globe fa-2x"
        },
        {
            label: "Shape",
            id: "editShape",
            classes: "fa fa-square fa-2x"
        }
    ];

    //Slides Components
    $scope.slideComponents = {
        "objects": [
            {"id": 1,
                "type": "rect",
                "originX": "left",
                "originY": "top",
                "left": 100,
                "top": 100,
                "width": 50,
                "height": 60,
                "fill": "red",
                "stroke": null,
                "strokeWidth": 1,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeLineJoin": "miter",
                "strokeMiterLimit": 10,
                "scaleX": 1,
                "scaleY": 1,
                "angle": 45,
                "flipX": false,
                "flipY": false,
                "opacity": 1,
                "shadow": null,
                "visible": true,
                "clipTo": null,
                "backgroundColor": "",
                "fillRule": "nonzero",
                "globalCompositeOperation": "source-over",
                "rx": 0,
                "ry": 0
            },
            {
                "id": 2,
                "type": "text",
                "originX": "left",
                "originY": "top",
                "left": 50,
                "top": 400,
                "width": 133.2,
                "height": 52.43,
                "fill": "rgb(0,0,0)",
                "stroke": null,
                "strokeWidth": 1,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeLineJoin": "miter",
                "strokeMiterLimit": 10,
                "scaleX": 1,
                "scaleY": 1,
                "angle": 0,
                "flipX": false,
                "flipY": false,
                "opacity": 1,
                "shadow": null,
                "visible": true,
                "clipTo": null,
                "backgroundColor": "",
                "fillRule": "nonzero",
                "globalCompositeOperation": "source-over",
                "text": "Beeeeee",
                "fontSize": 40,
                "fontWeight": "normal",
                "fontFamily": "Times New Roman",
                "fontStyle": "",
                "lineHeight": 1.16,
                "textDecoration": "",
                "textAlign": "left",
                "textBackgroundColor": ""
            }
        ],
        "background": ""};

    $scope.canvas = new fabric.Canvas('slide');
    $scope.canvas.loadFromJSON($scope.slideComponents, $scope.canvas.renderAll.bind($scope.canvas));
    $scope.editTypeItem = 'null';

    //functions
    $scope.canvas.on('mouse:down', function(options) {
        //alert(options.e.id + ' ' + options.e.clientX + ' ' + options.e.clientY); //e evento generico
        //alert(options.target.id + ' ' + options.e.clientX + ' ' + options.e.clientY); //target ritorna l'oggetto
    });

    $scope.canvas.on('before:selection:cleared', function() {
         console.log("persa selezione");
         $scope.editTypeItem ="null";
    });

    $scope.canvas.on('object:selected', function(options) {
            //console.log(options.target.type);
            $scope.editTypeItem = options.target.type;
    });

    $scope.canvas.on('object:modified', function(options) {
        //alert(options.e.id + ' ' + options.e.clientX + ' ' + options.e.clientY); //e evento generico
        //alert(options.target.id + ' ' + options.e.clientX + ' ' + options.e.clientY); //target ritorna l'oggetto
        console.log('obj_id: ' + options.target.id + 'obj_angle: ' + options.target.angle + ' type: ' + options.target.type);


    });


    //$scope.canvas.$apply();

    jQuery("#btnSerialize").click(function() {

        jQuery("#serialized").html(JSON.stringify($scope.canvas)); // '{"objects":[],"background":"rgba(0, 0, 0, 0)"}'

    });
});




//DIRECTIVES
app.directive('topMenu', function() {
    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/topMenu.html";
    return directive;
});

app.directive('pageSwitcherMenu', function() {
    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/pageSwitcherMenu.html";
    return directive;
});



app.directive('presentationEditor', function() {
    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/PresentationEditor/presentationEditor.html";
    return directive;
});

app.directive('projects', function() {
    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/MyProjects/MyProjects.html";
    return directive;
});


app.directive('infographicsEditor', function() {
    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/InfographicEditor/infographicEditor.html";
    return directive;
});

app.directive('textEditPanel', function() {
    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "views/PresentationEditor/textEditPanel.html";
    return directive;
});

app.directive('slideEditPanel', function() {
    var directive = {};
    directive.scope = false;
    directive.restrict = 'E'; /* restrict this directive to elements */


    /*
     *
     switch (base_url_string) {
     case "xxx.local":
     // Blah
     break;
     case "xxx.dev.yyy.com":
     // Blah
     break;
     }
     * 
     */
    directive.templateUrl = "views/PresentationEditor/editPanel.html";
    return directive;
});



/* jQuery functions */
function hideAllSections() {
    jQuery('#MyProjects').hide();
    jQuery('#PresentationEditor').hide();
    jQuery('#InfographicEditor').hide();
}

function showSection(name) {
    hideAllSections();
    if (name == "'MyProjects'")
        jQuery('#MyProjects').show();
    if (name == "'PresentationEditor'")
        jQuery('#PresentationEditor').show();
    if (name == "'InfographicEditor'")
        jQuery('#InfographicEditor').show();
}

function hidePanels() {
    //jQuery('#textComponent').hide();
}

jQuery().ready(function() {
    hideAllSections();
    jQuery('.MenuRadioButtons').click(function() {
        // alert(jQuery(this).attr('id'));

        id_section = jQuery(this).attr('id').toString();
        // alert(id_section);

        showSection(id_section);
    });


    /**
     * 
     * @description remove class selected at all Edit menu entry
     * @returns null
     */
    function hideAllEditMenuSelectedId() {
        // jQuery('#editComponentForm').hide();    

        jQuery(".editMenuItemContainer").each(function() {
            var currentElement = jQuery(this);
            if (currentElement.hasClass("selected"))
                currentElement.removeClass("selected");
        });
    }

    /**
     * 
     * @description remove selected property of alle entry and Setthem to the menu Edit entry identified by the param id
     * @param {string} id : represent the id of element to promove
     * @returns null}
     */
    function SetEditMenuSelectedId(id) {
        hideAllEditMenuSelectedId();
        jQuery(this).addClass("selected");
        //hideAllSections();
        // if(id=="editComponentForm'")
        //     jQuery('#editComponentForm').show();

    }

    /*jQuery("#textEdit").click(function() {
     SetEditMenuSelectedId("textEdit")
     });*/

});