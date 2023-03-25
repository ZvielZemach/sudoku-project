wname = null
wpassword = null

function checkDetails(){
    let name = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    console.log(name);
    console.log(password);
    let errorname = document.getElementById('wrongname');
    let errorpassword = document.getElementById('wrongpassword');
    var isValid = true
    removeErrorElements();

    if(name != 'abcd') {  
        console.log(wname);
        
            if (wname == null) {
                wname = document.createElement('p');
                errorname.appendChild(wname);
                wname.setAttribute("id","wname");
                wname.innerHTML = 'wrong name';
            }

            isValid = false
        }

        if(password != 1234)
        {   
            if (wpassword == null) {
                wpassword = document.createElement('p');
                wpassword.innerHTML = 'wrong password';
                errorpassword.appendChild(wpassword);
                wpassword.setAttribute("id","wpassword");
            }
            
            isValid = false
        }
        // שולח לכתובת הרצויה במידה ושני התנאים שגויים
        if(isValid) {
            window.location = "https://www.google.com/search?q=%D7%AA%D7%A8%D7%92%D7%9D&oq=%2Crdo&aqs=chrome.1.69i57j0i10i131i433i512l3j0i10i512l6.2096j0j15&sourceid=chrome&ie=UTF-8";
        }
        
}

function removeErrorElements() {
    if (wname != null) {
        wname.remove();
        wname = null;
    }
    
    if(wpassword != null) {
        wpassword.remove();
        wpassword = null;
    }
}




