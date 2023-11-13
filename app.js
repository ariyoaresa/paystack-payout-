
function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'pk_test_3359c81f54adc93f93d7abfab133e8bba84d02c3', //put your public key here
        email: 'ariyoaresa@gmail.com', //put your customer's email here
        amount: 100, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2347081134216" //customer's mobile number
                }
            ]
        },
        callback: function (response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            $.post("verify.php", {reference:response.reference}, function(status){
                if(status == "success")
                    //successful transaction
                    alert('Transaction was successful');
                else
                    //transaction failed
                    alert(response);
            });
        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
}
