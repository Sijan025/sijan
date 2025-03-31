# Timeless Watches - E-Commerce Website

![Website Preview](https://i.imgur.com/JK9y5dN.png)

A single-page e-commerce website for selling premium watches with QR code payments and order form integration.

## Features

- **Product Showcase**: Display watches with images, descriptions, and prices
- **QR Code Payments**: Integrated UPI payment via QR code scanning
- **Order Form**: Google Forms integration for order collection
- **WhatsApp Integration**: Direct customer chat via WhatsApp
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Location Map**: Google Maps integration showing store location
- **Contact Information**: Phone, email, and address display

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (Basic interactivity)
- Google Forms (Order processing)
- Google Maps (Location display)
- Font Awesome (Icons)

## Setup Instructions

1. **Replace Placeholder Data**:
   - Update the QR code image with your actual payment QR:
     ```html
     <img src="YOUR_QR_CODE_URL" alt="Payment QR Code">
     ```
   - Update contact information in the footer and contact section

2. **Google Form Setup**:
   - Your form is already linked: `https://forms.gle/aXkBF5z6uypmuBoa7`
   - Ensure form notifications are enabled in Google Forms settings

3. **WhatsApp Link**:
   - Current number: `+977 976-5936742`
   - To change: update all WhatsApp links in the HTML

4. **Location Map**:
   - Current address: Fulbari-11, Nepal
   - To change: update the iframe src in the map section

## How It Works

1. Customer browses watches and clicks "Add to Cart"
2. Customer proceeds to payment via QR code
3. After payment, customer submits order via:
   - Google Form (automatically sends to your email)
   - OR WhatsApp message to your number

## Seller Benefits

- **No backend needed**: Uses Google Forms for order collection
- **Payment tracking**: Customers submit transaction IDs via form
- **Direct communication**: WhatsApp integration for quick queries
- **Easy to update**: Single HTML file for all modifications

## Customization Options

1. **Add More Products**:
   - Duplicate the watch-card div and update information
2. **Change Colors**:
   - Modify the CSS variables in the `:root` selector
3. **Add Social Media**:
   - Update links in the footer's social-icons section

## Support

For assistance with customization, contact:
- **Sijan Bastola**
- Phone: +977 976-5936742
- Email: sijanbastola1@gmail.com
- WhatsApp: [Chat Now](https://wa.me/9779765936742)
