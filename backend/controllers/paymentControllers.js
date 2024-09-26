import Razorpay from 'razorpay';
import crypto from 'crypto';

// Create Razorpay instance
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

// get payment api-/api/v1/get-payment/
exports.createPayment = async (req, res) => {
    try {
        const { amount } = req.body; // Get the amount from the client-side request
        
        // Create a Razorpay order
        const options = {
            amount: amount * 100, // amount in the smallest currency unit (paise for INR)
            currency: 'INR',
            receipt: `receipt_${Math.random()}`,
        };

        const order = await razorpayInstance.orders.create(options);

        // Send the order details to the client
        res.json({
            success: true,
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// After payment verification
exports.verifyPayment = (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        // Hash the body using secret
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_SECRET)
            .update(body.toString())
            .digest('hex');

        // Verify the payment signature
        if (expectedSignature === razorpay_signature) {
            // Payment is successful, respond accordingly
            res.json({
                success: true,
                message: "Payment verified successfully!",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Invalid signature, payment verification failed!",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
