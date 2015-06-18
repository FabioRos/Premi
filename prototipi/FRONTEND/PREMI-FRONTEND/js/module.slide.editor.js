/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas;
var editComponentFormVisible=false;

jQuery( document ).ready(function(){
    
    
    
    
    /*INIT & BUSINESS LOGIC*/
    
    jQuery('#editComponentForm').hide();
    
    jQuery('#btnShowEditComponentForm').click(function(){
        toggleComponentForm();
    });
    
    function toggleComponentForm(){
        editComponentFormVisible=!editComponentFormVisible;
        if(editComponentFormVisible){
            jQuery('#editComponentForm').show('slow');
        }else{
            jQuery('#editComponentForm').hide('slow');   
        }
    }
    
    
    
    jQuery('#txt1_change').change(function(){
        txt= jQuery(this).val();
        text20.set('text',txt);
    });
    jQuery('#txt1_size_change').change(function(){
        s= jQuery(this).val();
        text20.set('fontSize',s);
    });
    
    /* *** */
    
    
        // create a wrapper around native canvas element (with id="c")
    canvas = new fabric.Canvas('slide');
    if (canvas != null) {
    // create a rectangle object
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 50,
      height: 60, 
      angle:45
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
    
    
    /**/
    fabric.Image.fromURL('MyProjects/prj1/img/pecorella.jpg', function(oImg) {
         // scale image down, and flip it, before adding it onto canvas
        oImg.scale(0.5).setFlipX(true);
        oImg.set({ left: 400, top: 50 });
        canvas.add(oImg);
    });

    var text = new fabric.Text('Beeeeee', {left: 50, top: 400 });
    canvas.add(text);
                            
    var text40 = new fabric.Text("I'm at fontSize 40 w/ shadow", {
        left:50,
        top:200,
        fontSize: 40,
        shadow: 'rgba(0,0,0,0.3) 5px 5px 5px'
    });
    var text20 = new fabric.Text("I'm at fontSize 20 BOLD", {
        left:50,
        top:250,
        fontWeight: 'bold',
        fontSize: 20
    });     
        
    canvas.add(text40);
    canvas.add(text20);
        
        
        
    /*GRUPPI*/
    
  var circle = new fabric.Circle({
    radius: 100,
    fill: '#eef',
    scaleY: 0.5,
    originX: 'center',
    originY: 'center'
  });

  var text = new fabric.Text('hello world ', {
    fontSize: 30,
    originX: 'center',
    originY: 'center'
  });

  var group = new fabric.Group([ circle, text ], {
    left: 150,
    top: 100,
    angle: -10
  });

  canvas.add(group);
      }
      else{
          alert('unsync');
      }
  
  
/* IMPUT HANDLERS */
    jQuery("#editText").click(function(){
        var textTest = new fabric.Text('PLACEHOLDER', {left: 300, top: 300});
        canvas.add(textTest);
        return false;
    });


});
  
  
    jQuery("#btnSerialize").click(function() {

        //var canvas = new fabric.Canvas('slide');
        jQuery("#serialized").html(JSON.stringify(canvas)); // '{"objects":[],"background":"rgba(0, 0, 0, 0)"}'
        
    });