/**
 * Created by BALASUBRAMANIAM on 30-11-2015.
 */


self.addEventListener('change',function()
{
    fileref=document.getElementById("fileupload");
    fileref.addEventListener('change',function()
    {
        for(i=0;i<fileref.files[0].length;i++)
        {
             console.log(i);
            setInterval(postMessage(found),10);

        }


    }) ;




});


