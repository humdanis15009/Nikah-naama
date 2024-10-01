const PaymentGateway = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
      amount: 50000, // Amount in paise (500 INR = 50000 paise)
      currency: "INR",
      name: "Nikah Naama",
      description: "Registration Fee",
      image: "/logo.png", // You can replace this with your website's logo URL
      handler: function (response) {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
        // Here you can also call a backend API to verify the payment and update the user registration status
      },
      prefill: {
        name: "User Name", // You can dynamically fill user details here
        email: "user@example.com", // Replace with user email
        contact: "9999999999", // Replace with user phone
      },
      theme: {
        color: "#528FF0", // Customize the color to match your website branding
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handlePayment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Pay 500 INR
      </button>
    </div>
  );
};

export default PaymentGateway;
