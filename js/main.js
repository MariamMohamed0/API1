function showData(){
    var xhttp=new XMLHttpRequest;
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var x=this.responseText;
            var y=JSON.parse(x);
            var z=y.products;
            var myText="";
            for(var i=0; i<z.length; i++){
                var cartoona=`<div class="col-md-4 text-center mb-5">
                                <img src="${z[i].images[0]}" alt="" class="img-fluid"  style="height:300px "></img>
                                <h4>${z[i].title}</h4>
                                <h6>${z[i].price}$</h6>
                            </div>`;
                myText=myText+cartoona;
            }
            document.querySelector(".test").innerHTML=myText;
        }
    }
    xhttp.open("GET","https://dummyjson.com/products/search?q=phone");
    xhttp.send();
}
showData();