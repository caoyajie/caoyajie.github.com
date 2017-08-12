function _set_font_size_750() {
        //先留着这个方法，不要删，要给专题调用
    }
    function setRootFontSize() {
        var width = document.documentElement.clientWidth, fontSize;
        if (width > 540) {
            width = 540;
        }
        fontSize = (width / 15);
        document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
        window.wapParams = {
            rootFontSize: fontSize,
            clientWidth: width
        };
    }
    setRootFontSize();
    window.addEventListener('resize', function() {
        setRootFontSize();
    }, false);

var curIndex = 0; 
  var timeInterval = 1000; 
  var arr = new Array(); 
  arr[0] = "tp/15011399223560.jpg"; 
  arr[1] = "tp/15018405924406.jpg"; 
  arr[2] = "tp/15018355142209.jpg"; 
  arr[3] = "tp/15017617443109.jpg"; 
  setInterval(changeImg,timeInterval); 
  function changeImg() { 
   var obj = document.getElementById("obj"); 
   if (curIndex == arr.length-1) { 
    curIndex = 0; 
   } else { 
    curIndex += 1; 
     } 
   obj.src = arr[curIndex]; 
  } 