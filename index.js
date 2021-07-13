var pin = 12345;
var account_Balance = 50000;

function show() {
    document.getElementById("pin_div").style.display = "block";
}

function linkpage() {
    var pinValue = document.getElementById("pin").value;
    if (pin == pinValue) {
        document.location.href = "mainpage.html"
    }
    else if (pinValue === "") {
        swal("Please Enter your pin...!", "", "error");
    }
    else {
        swal("Wrong Pin!", "", "error");
        document.getElementById("pin").value = "";
    }
}

function functions_task(all) {
    switch (all.firstChild.nodeValue) {
        case "Balance Inquiry":
            swal("your Account Balance is", `Rs. ${account_Balance} pkr`);
            break;
        case "Withdrawn Amount":
            swal("Enter your withdraw Amount:", {
                content: "input",
            })
                .then((value) => {
                    if (value == "") {
                        swal(`No Amount Entered ...`);
                    }
                    else if (value <= 500) {
                        swal(`minimum amount for withdraw should be greater than 500`);
                    }
                    else if (value >= 25000) {
                        swal(`more than 25000 amount is not allow`);
                    }
                    else if (value > account_Balance) {
                        swal(`Insufficient Balance`);
                    }
                    else {
                        account_Balance = account_Balance - value
                        swal("Withdraw Successful", `Now your Account Balance is : ${account_Balance}`, "success");
                    }
                });
            break;
        case "Deposit":
            swal("Enter your Deposit Amount:", {
                content: "input",
            })
                .then((value) => {
                    if (value == "") {
                        swal(`No Amount Entered ...`);
                    }
                    else {
                        var numericValue = parseInt(value);
                        account_Balance = eval(account_Balance + numericValue);
                        swal(`Now your Account Balance is : ${account_Balance}`);
                    }
                })
            break;
        case "Cancel":
            swal("Thank you for using Our ATM","","info");
            setTimeout(function(){ document.location.href = "index.html" }, 2000);
    }
}