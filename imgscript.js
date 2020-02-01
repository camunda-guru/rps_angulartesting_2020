/**
 * Created by BALASUBRAMANIAM on 08-01-2015.
 */

function displayimage()
{

  var fileref=document.getElementById("fname");
  var displayref=document.getElementById("displayarea");
  var filetype=/image.*/;
  if(fileref.files[0].type.match(filetype))
  {
    console.log("file type matching");
    var reader = new FileReader();
    reader.onload=function(evt)
    {
      var img = new Image();
      img.src=evt.target.result;
      img.width=200;
      img.height=100;
      displayref.appendChild(img);


    }

    reader.readAsDataURL(fileref.files[0]);


  }
  else
  {
    console.log("file type not matching");
  }


}
