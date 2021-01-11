function p1_get_output(){
    
    var p1 = [];
    var title1 =  document.getElementById("title1").value;

    for(var i=1; i<=10; i++){

        p1.push(document.getElementById("p1_s" + i).value);

    }

    document.getElementById("p1_output").innerHTML = p1.join(" ");
    document.getElementById("p1_title").innerHTML = title1;

  

}

function p2_get_output(){
    
    var p2 = [];
    var title2 =  document.getElementById("title1").value;

    for(var k=1; k<=10; k++){

        p2.push(document.getElementById("p2_s" + k).value);

    }

    document.getElementById("p2_output").innerHTML = p2.join(" ");
    document.getElementById("p2_title").innerHTML = title2;

  

}