function MyFunction()
{
    var i ;
    var CheckBox = document.getElementsByClassName("toggler");
    var NavLinks = document.getElementsByClassName("NavLink");
    if(CheckBox[0].checked  == true)
    {
       for(i of NavLinks)
       {
           i.style.visibility = "visible";
       }
    }
    else
    {
        for(i of NavLinks)
       {
           i.style.visibility = "hidden";
       }
    }
}