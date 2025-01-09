# Node.js Email Sender

A simple email sender application built with Node.js using Nodemailer and dotenv for secure credential management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/email-sender.git
   cd email-sender

2. Install the required packages:

   ```bash
   npm install nodemailer dotenv

3. Create a .env file in the root directory of the project and add your email credentials:

   ```bash
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password

  // Note: Make sure to replace your_email@example.com and your_email_password with your actual email and password.

4. Run the script:

   ```bash
   node sendEmail.js

## License

### Notes:
- Replace `yourusername` in the clone URL with your actual GitHub username.
- Adjust the email service in the transporter configuration if you're using a service other than Gmail.
- Make sure to include any additional instructions or features specific to your project.
