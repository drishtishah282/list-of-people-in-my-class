name_array=[];

function submit(){
    var n1=document.getElementById ("name1").value;
    var n2=document.getElementById ("name2").value;
    var n3=document.getElementById ("name3").value;
    var n4=document.getElementById ("name4").value;
    var n5=document.getElementById ("name5").value;

    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);
    name_array.push(n5);

    console.log(name_array);

    document.getElementById ("display").innerHTML=name_array;
    document.getElementById ("sub_but").style.display=("none");
    document.getElementById ("sort_but").style.display=("inline-block");
}

function sort(){
    name_array.sort();
    console.log(name_array);
    document.getElementById ("display").innerHTML=name_array;
}