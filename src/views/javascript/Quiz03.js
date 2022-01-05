let min, seg;
min = 1;
seg = 1;

    function relogio()
    {
        if((min > 0) || (seg > 0))
        {
            if(seg == 0){
            seg = 56;
            min--;
          
        }
        else
        {
            seg--;
            
        }
        if(min.toString().length == 1)
        {
            min = "0" + min
       
        }
        if(seg.toString().length == 1)
        {
            seg = "0" + seg
          
        }
         elemento = document.getElementById('contador').innerHTML = min + ":" + seg
         setTimeout('relogio()', 1000)
        }
         else
         {
             document.getElementById('contador').innerHTML = "00:00"
             alert('TEMPO ESGOTADO')
         }
        }
function clicar2()
{
    let questao = document.getElementsByName('Q1')
        if(questao[3].checked == true)
        {
            document.getElementById('res3').style.background = "blue"
        }
        else
        {
            document.getElementById('res3').style.background = "red"
        }
}