# Serverless Repository

Welcome to the Serverless Repository! This repository contains the implementation of Cloud Functions for handling user account creation events and sending verification emails.

## Implementation Details

### Cloud Function

The Cloud Function in this repository is designed to be invoked by a Pub/Sub trigger when a new user account is created. Its responsibilities include:

1. **Sending Verification Email**: Upon receiving a trigger, the Cloud Function sends an email to the user containing a verification link. This link allows the user to verify their email address.

2. **Verification Link Expiry**: The verification link included in the email expires after 2 minutes. This short expiry time is set to facilitate quicker demos. Once expired, the link cannot be used for verification.

3. **Tracking Emails**: The Cloud Function tracks the emails sent in a Cloud SQL instance. It utilizes the same instance and database used by the web application, ensuring seamless integration and data consistency.

## Getting Started

Follow the steps below to set up and deploy the Cloud Function:

1. **Clone Repository**: Clone this repository to your local machine using the following command:

2. **Set Up Cloud SQL**: Ensure that you have a Cloud SQL instance set up and configured. The Cloud Function will use this instance to track the emails sent.

3. **Set Up Pub/Sub Trigger**: Set up a Pub/Sub trigger that listens for user account creation events. Configure the trigger to invoke the Cloud Function when a new event occurs.

4. **Configure Email Service**: Configure the email service (e.g., Gmail, SendGrid) to enable sending emails from the Cloud Function. Ensure that the necessary credentials and configurations are set up correctly.

5. **Deploy Cloud Function**: Deploy the Cloud Function to your Google Cloud Platform (GCP) project using the appropriate deployment command. Make sure to specify the Pub/Sub trigger and any required environment variables.

6. **Test Functionality**: Test the functionality by creating a new user account and verifying that the verification email is sent successfully. Verify that the email contains the correct verification link and that it expires after 2 minutes.


## Additional Resources

For more information on setting up Cloud Functions, configuring Pub/Sub triggers, and integrating with other Google Cloud services, refer to the [Google Cloud documentation](https://cloud.google.com/docs).

