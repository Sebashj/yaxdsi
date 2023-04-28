
var slider = document.getElementById("myRange2"),
output = document.getElementById("demo2");
output.innerHTML = slider.value; 

slider.oninput = function Calculate7(){
  output.innerHTML = this.value;
  try{
  var followers7 = document.getElementById("myRange2"),
        followersReached7 = followers7 * 2,
        averageSale7= followersReached7 * 2,
        estimateEarning7= averageSale7 * 2;
  
  document.slidecontainer2.sum7.value = estimateEarning7;
    } catch (e){}
}
