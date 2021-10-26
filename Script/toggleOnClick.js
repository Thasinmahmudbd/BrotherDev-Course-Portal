/* Script for login page elements */

function showPortion1() {
    document.getElementById("portion1").style.display = 'block';
    document.getElementById("portion2").style.display = 'none';

    document.getElementById("signUp").style.display = 'none';
    document.getElementById("content").style.display = 'grid';
    document.getElementById("courseBtns").style.display = 'block';
}

function showPortion2() {
    document.getElementById("portion2").style.display = 'block';
    document.getElementById("portion1").style.display = 'none';

    document.getElementById("signUp").style.display = 'grid';
    document.getElementById("content").style.display = 'none';
    document.getElementById("courseBtns").style.display = 'none';
}

function allBtnClicked() {
    document.getElementById("allBtn").style.color = '#FF165D';
    document.getElementById("webBtn").style.color = '#000';
    document.getElementById("appBtn").style.color = '#000';

    document.getElementById("web1").style.display = 'grid';
    document.getElementById("web2").style.display = 'grid';
    document.getElementById("web3").style.display = 'grid';
    document.getElementById("app").style.display = 'grid';
    
}

function webBtnClicked() {
    document.getElementById("webBtn").style.color = '#FF165D';
    document.getElementById("allBtn").style.color = '#000';
    document.getElementById("appBtn").style.color = '#000';

    document.getElementById("web1").style.display = 'grid';
    document.getElementById("web2").style.display = 'grid';
    document.getElementById("web3").style.display = 'grid';
    document.getElementById("app").style.display = 'none';
    
}

function appBtnClicked() {
    document.getElementById("appBtn").style.color = '#FF165D';
    document.getElementById("allBtn").style.color = '#000';
    document.getElementById("webBtn").style.color = '#000';

    document.getElementById("web1").style.display = 'none';
    document.getElementById("web2").style.display = 'none';
    document.getElementById("web3").style.display = 'none';
    document.getElementById("app").style.display = 'grid';
    
}

























/* Script for right side elements */

function showGrade() {
    document.getElementById("grade").style.display = 'grid';
    document.getElementById("payment").style.display = 'none';
    document.getElementById("notification").style.display = 'none';
    document.getElementById("messaging").style.display = 'none';
    document.getElementById("security").style.display = 'none';

    document.getElementById("gradeBtn").style.color = '#FF165D';
    document.getElementById("paymentBtn").style.color = '#000';
    document.getElementById("notifyBtn").style.color = '#000';
    document.getElementById("messagingBtn").style.color = '#000';
    document.getElementById("securityBtn").style.color = '#000';
}

function showPayment() {
    document.getElementById("grade").style.display = 'none';
    document.getElementById("payment").style.display = 'grid';
    document.getElementById("notification").style.display = 'none';
    document.getElementById("messaging").style.display = 'none';
    document.getElementById("security").style.display = 'none';

    document.getElementById("gradeBtn").style.color = '#000';
    document.getElementById("paymentBtn").style.color = '#FF165D';
    document.getElementById("notifyBtn").style.color = '#000';
    document.getElementById("messagingBtn").style.color = '#000';
    document.getElementById("securityBtn").style.color = '#000';
}

function showNotification() {
    document.getElementById("grade").style.display = 'none';
    document.getElementById("payment").style.display = 'none';
    document.getElementById("notification").style.display = 'grid';
    document.getElementById("messaging").style.display = 'none';
    document.getElementById("security").style.display = 'none';

    document.getElementById("gradeBtn").style.color = '#000';
    document.getElementById("paymentBtn").style.color = '#000';
    document.getElementById("notifyBtn").style.color = '#FF165D';
    document.getElementById("messagingBtn").style.color = '#000';
    document.getElementById("securityBtn").style.color = '#000';
}

function showSecurity() {
    document.getElementById("grade").style.display = 'none';
    document.getElementById("payment").style.display = 'none';
    document.getElementById("notification").style.display = 'none';
    document.getElementById("messaging").style.display = 'none';
    document.getElementById("security").style.display = 'grid';

    document.getElementById("gradeBtn").style.color = '#000';
    document.getElementById("paymentBtn").style.color = '#000';
    document.getElementById("notifyBtn").style.color = '#000';
    document.getElementById("messagingBtn").style.color = '#000';
    document.getElementById("securityBtn").style.color = '#FF165D';
}

function showMessaging() {
    document.getElementById("grade").style.display = 'none';
    document.getElementById("payment").style.display = 'none';
    document.getElementById("notification").style.display = 'none';
    document.getElementById("messaging").style.display = 'grid';
    document.getElementById("security").style.display = 'none';

    document.getElementById("gradeBtn").style.color = '#000';
    document.getElementById("paymentBtn").style.color = '#000';
    document.getElementById("notifyBtn").style.color = '#000';
    document.getElementById("messagingBtn").style.color = '#FF165D';
    document.getElementById("securityBtn").style.color = '#000';
}
















/* media */

function popBtnClicked() {
    document.getElementById("pop").style.right = '0';
}

function unPopBtnClicked() {
    document.getElementById("pop").style.right = '-1500px';
}

function dropDownClicked() {
    document.getElementById("drop").style.top = '65px';
    document.getElementById("cross").style.display = 'inline';

    document.getElementById("ham").style.display = 'none';
}

function crossClicked() {
    document.getElementById("drop").style.top = '-1000px';
    document.getElementById("cross").style.display = 'none';

    document.getElementById("ham").style.display = 'inline';
}

