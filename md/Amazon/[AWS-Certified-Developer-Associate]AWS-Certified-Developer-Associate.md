
![ExamTopics Logo](https://www.examtopics.com/assets/images/et/ExamTopics-Logo-Smaller.png) - Expert Verified, Online, **Free**.

[ Custom View Settings](https://www.examtopics.com/exams/amazon/aws-certified-developer-associate/custom-view/)

## Topic 1 - Single Topic

Question #1*Topic 1*

A gaming website gives users the ability to trade game items with each other on the platform. The platform requires both users' records to be updated and persisted in one transaction. If any update fails, the transaction must roll back.
Which AWS solution can provide the transactional capability that is required for this feature?

- A. Amazon DynamoDB with operations made with the Consistent Read parameter set to true
- B. Amazon ElastiCache for Memcached with operations made within a transaction block
- C. Amazon DynamoDB with reads and writes made by using Transact* operations
- D. Amazon Aurora MySQL with operations made within a transaction block
- E. Amazon Athena with operations made within a transaction block

**Correct Answer:** *D*

*Community vote distribution*

C (59%)

D (41%)



Question #2*Topic 1*

A developer has created a Java application that makes HTTP requests directly to AWS services. Application logging shows 5xx HTTP response codes that occur at irregular intervals. The errors are affecting users.
How should the developer update the application to improve the application's resiliency?

- A. Revise the request content in the application code.
- B. Use the AWS SDK for Java to interact with AWS APIs.
- C. Scale out the application so that more instances of the application are running.
- D. Add additional logging to the application code.

**Correct Answer:** *C*

*Community vote distribution*

B (96%)

4%



Question #3*Topic 1*

A global company has a mobile app with static data stored in an Amazon S3 bucket in the us-east-1 Region. The company serves the content through an Amazon
CloudFront distribution. The company is launching the mobile app in South Africa. The data must reside in the af-south-1 Region. The company does not want to deploy a specific mobile client for South Africa.
What should the company do to meet these requirements?

- A. Use the CloudFront geographic restriction feature to block access to users in South Africa.
- B. Create a Lambda@Edge function. Associate the Lambda@Edge function as an origin request trigger with the CloudFront distribution to change the S3 origin Region.
- C. Create a Lambda@Edge function. Associate the Lambda@Edge function as a viewer response trigger with the CloudFront distribution to change the S3 origin Region.
- D. Include af-south-1 in the alternate domain name (CNAME) of the CloudFront distribution.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #4*Topic 1*

A developer is testing an AWS Lambda function by using the AWS Serverless Application Model (AWS SAM) local CLI. The application that is implemented by the
Lambda function makes several AWS API calls by using the AWS software development kit (SDK). The developer wants to allow the function to make AWS API calls in a test AWS account from the developer's laptop.
What should the developer do to meet these requirements?

- A. Edit the template.yml file. Add the AWS_ACCESS_KEY_ID property and the AWS_SECRET_ACCESS_KEY property in the Globals section.
- B. Add a test profile by using the aws configure command with the --profile option. Run AWS SAM by using the sam local invoke command with the -profile option.
- C. Edit the template.yml tile. For the AWS::Serverless::Function resource, set the role to an IAM role in the AWS account.
- D. Run the function by using the sam local invoke command. Override the AWS_ACCESS_KEY_ID parameter and the AWS_SECRET_ACCESS_KEY parameter by specifying the --parameter-overrides option.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #5*Topic 1*

A developer designed an application on an Amazon EC2 instance. The application makes API requests to objects in an Amazon S3 bucket.
Which combination of steps will ensure that the application makes the API requests in the MOST secure manner? (Choose two.)

- A. Create an IAM user that has permissions to the S3 bucket. Add the user to an IAM group.
- B. Create an IAM role that has permissions to the S3 bucket.
- C. Add the IAM role to an instance profile. Attach the instance profile to the EC2 instance.
- D. Create an IAM role that has permissions to the S3 bucket. Assign the role to an 1AM group.
- E. Store the credentials of the IAM user in the environment variables on the EC2 instance.

**Correct Answer:** *BC*

*Community vote distribution*

BC (100%)



Question #6*Topic 1*

A developer is configuring an Amazon CloudFront distribution for a new application to provide encryption in transit. The application is running in the eu-west-1
Region. The developer creates a new certificate in AWS Certificate Manager (ACM) in eu-west-1, but the certificate is not visible in the CloudFront distribution settings.
What should the developer do to fix this problem?

- A. Create the certificate for the domain in the same Region as the application. Ensure that the alternate domain name (CNAME) in the distribution settings matches the domain name in the certificate.
- B. Create the certificate in the eu-west-1 Region. Ensure that the alternate domain name (CNAME) in the distribution settings matches the domain name in the certificate.
- C. Recreate the CloudFront distribution in the same Region as the certificate.
- D. Specify the ACM certificate name as the default root object of the CloudFront distribution.

**Correct Answer:** *B*

*Community vote distribution*

B (84%)

C (16%)



Question #7*Topic 1*

A developer is building an application that runs behind an Application Load Balancer (ALB). The ALB is configured as the origin for an Amazon CloudFront distribution. Users will log in to the application by using their social media accounts.
How can the developer authenticate users?

- A. Validate the users by inspecting the tokens in an AWS Lambda authorizer on the ALB.
- B. Configure the ALB to use Amazon Cognito as one of the authentication providers.
- C. Configure CloudFront to use Amazon Cognito as one of the authentication providers.
- D. Validate the users by calling the Amazon Cognito API in an AWS Lambda authorizer on the ALB.

**Correct Answer:** *B*

*Community vote distribution*

B (86%)

14%



Question #8*Topic 1*

A company has an application that analyzes photographs. A developer is preparing the application for deployment to Amazon EC2 instances. The application's image analysis functions require a mix of GPU instances and CPU instances that run on Amazon Linux. The developer needs to add code to the application so that the functions can determine whether they are running on a GPU instance.
What should the functions do to obtain this information?

- A. Call the DescribeInstances API operation and filter on the current instance ID. Examine the ElasticGpuAssociations property.
- B. Evaluate the GPU AVAILABLE environment variable.
- C. Call the DescribeElasticGpus API operation.
- D. Retrieve the instance type from the instance metadata.

**Correct Answer:** *D*

*Community vote distribution*

D (93%)

7%



Question #9*Topic 1*

A company has an application that uses Amazon Cognito user pools as an identity provider. The company must secure access to user records. The company has set up multi-factor authentication (MFA). The company also wants to send a login activity notification by email every time a user logs in.
What is the MOST operationally efficient solution that meets this requirement?

- A. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Add an Amazon API Gateway API to invoke the function. Call the API from the client side when login confirmation is received.
- B. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Add an Amazon Cognito post authentication Lambda trigger for the function.
- C. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Create an Amazon CloudWatch Logs log subscription filter to invoke the function based on the login status.
- D. Configure Amazon Cognito to stream all logs to Amazon Kinesis Data Firehose. Create an AWS Lambda function to process the streamed logs and to send the email notification based on the login status of each user.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #10*Topic 1*

A company hosts a three-tier web application on AWS behind an Amazon CloudFront distribution. A developer wants a dashboard to monitor error rates and anomalies of the CloudFront distribution with the shortest possible refresh interval.
Which combination of slops should the developer take to meet these requirements? (Choose two.)

- A. Activate real-time logs on the CloudFront distribution. Create a stream in Amazon Kinesis Data Streams.
- B. Export the CloudFront logs to an Amazon S3 bucket. Detect anomalies and error rates with Amazon QuickSight.
- C. Configure Amazon Kinesis Data Streams to deliver logs to Amazon OpenSearch Service (Amazon Elasticsearch Service). Create a dashboard in OpenSearch Dashboards (Kibana).
- D. Create Amazon CloudWatch alarms based on expected values of selected CloudWatch metrics to detect anomalies and errors.
- E. Design an Amazon CloudWatch dashboard of the selected CloudFront distribution metrics.

**Correct Answer:** *AC*

*Community vote distribution*

AC (83%)

Other



Question #11*Topic 1*

A developer creates a customer managed key for multiple AWS users to encrypt data in Amazon S3. The developer configures Amazon Simple Notification
Service (Amazon SNS) to publish a message if key deletion is scheduled. The developer needs to preserve any SNS messages that cannot be delivered so that those messages can be reprocessed.
Which AWS service or feature should the developer use to meet this requirement?

- A. Amazon Simple Email Service (Amazon SES)
- B. AWS Lambda
- C. Amazon Simple Queue Service (Amazon SQS)
- D. Amazon CloudWatch alarm

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #12*Topic 1*

A developer needs to deploy an application to AWS Elastic Beanstalk for a company. The application consists of a single Docker image. The company's automated continuous integration and continuous delivery (CI/CD) process builds the Docker image and pushes the image to a public Docker registry.
How should the developer deploy the application to Elastic Beanstalk?

- A. Create a Dockerfile. Configure Elastic Beanstalk to build the application as a Docker image.
- B. Create a docker-compose.yml file. Use the Elastic Beanstalk CLI to deploy the application.
- C. Create a .zip file that contains the Docker image. Upload the .zip file to Elastic Beanstalk.
- D. Create a Dockerfile. Run the Elastic Beanstalk CLI eb local run command in the same directory.

**Correct Answer:** *A*

*Community vote distribution*

B (71%)

A (24%)

5%



Question #13*Topic 1*

A company is using AWS CodeDeploy for all production deployments. A developer has an Amazon Elastic Container Service (Amazon ECS) application that uses the CodeDeployDefault.ECSAIIAtOnce configuration. The developer needs to update the production environment in increments of 10% until the entire production environment is updated.
Which CodeDeploy configuration should the developer use to meet these requirements?

- A. CodeDeployDefault.ECSCanary10Percent5Minutes
- B. CodeDeployDefault.ECSLinear10PercentEvery3Minutes
- C. CodeDeployDefault.OneAtATime
- D. CodeDeployDefault.LambdaCanary10Percent5Minutes

**Correct Answer:** *B*

*Community vote distribution*

B (94%)

6%



Question #14*Topic 1*

A company is using AWS Elastic Beanstalk to deploy a three-tier application. The application uses an Amazon RDS DB instance as the database tier. The company wants to decouple the DB instance from the Elastic Beanstalk environment.
Which combination of steps should a developer lake to meet this requirement? (Choose two.)

- A. Create a new Elastic Beanstalk environment that connects to the DB instance.
- B. Create a new DB instance from a snapshot of the previous DB instance.
- C. Use the Elastic Beanstalk CLI to decouple the DB instance.
- D. Use the AWS CLI to decouple the DB instance.
- E. Modify the current Elastic Beanstalk environment to connect to the DB instance.

**Correct Answer:** *AB*

*Community vote distribution*

AB (45%)

AC (27%)

BE (27%)



Question #15*Topic 1*

A company has point-of-sale devices across thousands of retail shops that synchronize sales transactions with a centralized system. The system includes an
Amazon API Gateway API that exposes an AWS Lambda function. The Lambda function processes the transactions and stores the transactions in Amazon RDS for MySQL. The number of transactions increases rapidly during the day and is near zero at night.
How can a developer increase the elasticity of the system MOST cost-effectively?

- A. Migrate from Amazon RDS to Amazon Aurora MySQL. Use an Aurora Auto Scaling policy to scale road replicas based on CPU consumption.
- B. Migrate from Amazon RDS to Amazon Aurora MySQL. Use an Aurora Auto Scaling policy to scale read replicas based on the number of database connections.
- C. Create an Amazon Simple Queue Service (Amazon SQS) queue. Publish transactions to the queue. Set the queue to invoke the Lambda function. Turn on enhanced fanout for the Lambda function.
- D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Publish transactions to the queue. Set the queue to invoke the Lambda function. Set the reserved concurrency of the Lambda function to be less than the number of database connections.

**Correct Answer:** *B*

*Community vote distribution*

D (73%)

C (20%)

3%



Question #16*Topic 1*

A developer is writing an AWS Lambda function. The Lambda function needs to access items that are stored in an Amazon DynamoDB table.
What is the MOST secure way to configure this access for the Lambda function?

- A. Create an IAM user that has permissions to access the DynamoDB table. Create an access key for this user. Store the access key ID and secret access key in the Lambda function environment variables.
- B. Add a resource-based policy to the DynamoDB table to allow access from the Lambda function's IAM role.
- C. Create an IAM policy that allows access to the DynamoDB table. Attach this policy to the Lambda function's IAM role.
- D. Create a DynamoDB Accelerator (DAX) cluster. Configure the Lambda function to use the DAX duster to access the DynamoDB table.

**Correct Answer:** *C*

*Community vote distribution*

C (89%)

11%



Question #17*Topic 1*

A developer is implementing user authentication and authorization for a web application that is hosted on an Amazon EC2 instance. The developer needs to ensure that the user credentials are encrypted and secure when they are stored and transmitted.
Which solution will meet these requirements?

- A. Activate web server modules for authentication and authorization on the instance. Use HTTP basic authentication for the user login.
- B. Deploy a custom authentication and authorization API over HTTP. Store the user credentials on Amazon ElastiCache for Redis.
- C. Use Amazon Cognito to configure a user pool. Use the Amazon Cognito API to authenticate and authorize the users.
- D. Create IAM users. Assign the users to different IAM groups. Use AWS Single Sign-On to authenticate and authorize each user.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #18*Topic 1*

A company that has multiple offices uses an Amazon DynamoDB table to store employee payroll information. Item attributes consist of employee names, office identifiers, and cumulative daily hours worked The most frequently used query extracts a report of an alphabetical subset of employees for a specific office.
Which design of the DynamoDB table primary key will have the MINIMUM performance impact?

- A. Partition key on the office identifier and sort key on the employee name
- B. Partition key on the employee name and sort key on the office identifier
- C. Partition key on the employee name
- D. Partition key on the office identifier

**Correct Answer:** *A*

*Community vote distribution*

A (63%)

B (33%)

4%



Question #19*Topic 1*

A company hosts a microservices application that uses Amazon API Gateway. AWS Lambda, Amazon Simple Queue Service (Amazon SQS), and Amazon
DynamoDB. One of the Lambda functions adds messages to an SQS FIFO queue.
When a developer checks the application logs, the developer finds a few duplicated items in a DynamoDB table. The items were inserted by another polling function that processes messages from the queue.
What is the MOST likely cause of this issue?

- A. Write operations on the DynamoDB table are being throttled.
- B. The SQS queue delivered the message to the function more than once.
- C. API Gateway duplicated the message in the SQS queue.
- D. The polling function timeout is greater than the queue visibility timeout.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #20*Topic 1*

A development team has been using a builder server that is hosted on an Amazon EC2 instance to perform builds and deployments for the last 3 months. The
EC2 instance's instance profile uses an IAM role that contains the Administrator Access managed policy. The development team must replace that policy with a policy that provides only the required permissions.
What is the FASTEST way to create a custom 1AM policy for the EC2 instance to meet this requirement?

- A. Create a new IAM policy based on services that the build server deployed or updated in the last 3 months.
- B. Create a new IAM policy that includes all actions that AWS CloudTrail recorded for the IAM role in the last 3 months.
- C. Create a new permissions boundary policy that denies all access. Associate the permissions boundaries with the IAM role.
- D. Create a new IAM policy by using Amazon Athena to query an Amazon S3 bucket that contains AWS CloudTrail events that the IAM role performed in the last 3 months.

**Correct Answer:** *A*

*Community vote distribution*

B (71%)

D (16%)

13%



Question #21*Topic 1*

A developer needs to write an AWS CloudFormation template on a local machine and deploy a CloudFormation stack to AWS.
What must the developer do to complete these tasks?

- A. Install the AWS CLI. Configure the AWS CLI by using an IAM user name and password.
- B. Install the AWS CLI. Configure the AWS CLI by using an SSH key.
- C. Install the AWS CLI. Configure the AWS CLI by using an IAM user access key and secret key.
- D. Install an AWS software development kit (SDK). Configure the SDK by using an X.509 certificate.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #22*Topic 1*

A developer is working on a web application that runs on Amazon Elastic Container Service (Amazon ECS) and uses an Amazon DynamoDB table to store data.
The application performs a large number of read requests against a small set of the table data.
How can the developer improve the performance of these requests? (Choose two.)

- A. Create an Amazon ElastiCache cluster. Configure the application to cache data in the cluster.
- B. Create a DynamoDB Accelerator (DAX) cluster. Configure the application to use the DAX cluster for DynamoDB requests.
- C. Configure the application to make strongly consistent read requests against the DynamoDB table.
- D. Increase the read capacity of the DynamoDB table.
- E. Enable DynamoDB adaptive capacity.

**Correct Answer:** *B*

*Community vote distribution*

B (81%)

Other



Question #23*Topic 1*

A developer needs to use Amazon DynamoDB to store customer orders. The developer's company requires all customer data to be encrypted at rest with a key that the company generates.
What should the developer do to meet these requirements?

- A. Create the DynamoDB table with encryption set to None. Code the application to use the key to decrypt the data when the application reads from the table. Code the application to use the key to encrypt the data when the application writes to the table.
- B. Store the key by using AWS Key Management Service (AWS KMS). Choose an AWS KMS customer managed key during creation of the DynamoDB table. Provide the Amazon Resource Name (ARN) of the AWS KMS key.
- C. Store the key by using AWS Key Management Service (AWS KMS). Create the DynamoDB table with default encryption. Include the kms:Encrypt parameter with the Amazon Resource Name (ARN) of the AWS KMS key when using the DynamoDB software development kit (SDK).
- D. Store the key by using AWS Key Management Service (AWS KMS). Choose an AWS KMS AWS managed key during creation of the DynamoDB table. Provide the Amazon Resource Name (ARN) of the AWS KMS key.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #24*Topic 1*

A developer is creating a solution to track an account's Amazon S3 buckets over time. The developer has created an AWS Lambda function that will run on a schedule. The function will list the account's S3 buckets and will store the list in an Amazon DynamoDB table. The developer receives a permissions error when the developer runs the function with the AWSLambdaBasicExecutionRole AWS managed policy.
Which combination of permissions should the developer use to resolve this error? (Choose two.)

- A. Cross-account IAM role
- B. Permission for the Lambda function to list buckets in Amazon S3
- C. Permission for the Lambda function to write in DynamoDB
- D. Permission for Amazon S3 to invoke the Lambda function
- E. Permission for DynamoDB to invoke the Lambda function

**Correct Answer:** *BC*

*Community vote distribution*

BC (89%)

11%



Question #25*Topic 1*

A company is adding items to an Amazon DynamoDB table from an AWS Lambda function that is written in Python. A developer needs to implement a solution that inserts records in the DynamoDB table and performs automatic retry when the insert fails.
Which solution meets these requirements with MINIMUM code changes?

- A. Configure the Python code to run the AWS CLI through shell to call the PutItem operation
- B. Call the PutItem operation from Python by using the DynamoDB HTTP API
- C. Queue the items in AWS Glue, which will put them into the DynamoDB table
- D. Use the AWS software development kit (SDK) for Python (boto3) to call the PutItem operation

**Correct Answer:** *D*
Reference:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Python.html

*Community vote distribution*

D (100%)



Question #26*Topic 1*

A developer is writing an AWS Lambda function. The developer wants to log key events that occur during the Lambda function and include a unique identifier to associate the events with a specific function invocation.
Which of the following will help the developer accomplish this objective?

- A. Obtain the request identifier from the Lambda context object. Architect the application to write logs to the console.
- B. Obtain the request identifier from the Lambda event object. Architect the application to write logs to a file.
- C. Obtain the request identifier from the Lambda event object. Architect the application to write logs to the console.
- D. Obtain the request identifier from the Lambda context object. Architect the application to write logs to a file.

**Correct Answer:** *A*

*Community vote distribution*

D (53%)

A (47%)



Question #27*Topic 1*

A company experienced partial downtime during the last deployment of a new application. AWS Elastic Beanstalk split the environment's Amazon EC2 instances into batches and deployed a new version one batch at a time after taking them out of service. Therefore, full capacity was not maintained during deployment.
The developer plans to release a new version of the application, and is looking for a policy that will maintain full capacity and minimize the impact of the failed deployment.
Which deployment policy should the developer use?

- A. Immutable
- B. All at Once
- C. Rolling
- D. Rolling with an Additional Batch

**Correct Answer:** *D*
Reference:
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html

*Community vote distribution*

A (100%)



Question #28*Topic 1*

A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in a complex architecture that is difficult to manage and does not scale well. The company needs a single interface to manage these services to consumers.
Which AWS service should be used to refactor this architecture?

- A. AWS Lambda
- B. AWS X-Ray
- C. Amazon SQS
- D. Amazon API Gateway

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #29*Topic 1*

When a Developer tries to run an AWS CodeBuild project, it raises an error because the length of all environment variables exceeds the limit for the combined maximum of characters.
What is the recommended solution?

- A. Add the export LC_ALL=ג€en_US.utf8ג€ command to the pre_build section to ensure POSIX localization.
- B. Use Amazon Cognito to store key-value pairs for large numbers of environment variables.
- C. Update the settings for the build project to use an Amazon S3 bucket for large numbers of environment variables.
- D. Use AWS Systems Manager Parameter Store to store large numbers of environment variables.

**Correct Answer:** *D*
Reference:
https://docs.aws.amazon.com/codebuild/latest/userguide/troubleshooting.html

*Community vote distribution*

D (100%)



Question #30*Topic 1*

A Development team decides to adopt a continuous integration/continuous delivery (CI/CD) process using AWS CodePipeline and AWS CodeCommit for a new application. However, management wants a person to review and approve the code before it is deployed to production.
How can the Development team add a manual approver to the CI/CD pipeline?

- A. Use AWS SES to send an email to approvers when their action is required. Develop a simple application that allows approvers to accept or reject a build. Invoke an AWS Lambda function to advance the pipeline when a build is accepted.
- B. If approved, add an approved tag when pushing changes to the CodeCommit repository. CodePipeline will proceed to build and deploy approved commits without interruption.
- C. Add an approval step to CodeCommit. Commits will not be saved until approved.
- D. Add an approval action to the pipeline. Configure the approval action to publish to an Amazon SNS topic when approval is required. The pipeline execution will stop and wait for an approval.

**Correct Answer:** *D*
Reference:
https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals-action-add.html

*Community vote distribution*

D (100%)



Question #31*Topic 1*

A Developer is migrating an on-premises application to AWS. The application currently takes user uploads and saves them to a local directory on the server. All uploads must be saved and made immediately available to all instances in an Auto Scaling group.
Which approach will meet these requirements?

- A. Use Amazon EBS and configure the application AMI to use a snapshot of the same EBS instance on boot.
- B. Use Amazon S3 and rearchitect the application so all uploads are placed in S3.
- C. Use instance storage and share it between instances launched from the same Amazon Machine Image (AMI).
- D. Use Amazon EBS and file synchronization software to achieve eventual consistency among the Auto Scaling group.

**Correct Answer:** *D*

*Community vote distribution*

B (91%)

9%



Question #32*Topic 1*

A developer is creating a script to automate the deployment process for a serverless application. The developer wants to use an existing AWS Serverless
Application Model (AWS SAM) template for the application.
What should the developer use for the project? (Choose two.)

- A. Call aws cloudformation package to create the deployment package. Call aws cloudformation deploy to deploy the package afterward.
- B. Call sam package to create the deployment package. Call sam deploy to deploy the package afterward.
- C. Call aws s3 cp to upload the AWS SAM template to Amazon S3. Call aws lambda update-function-code to create the application.
- D. Create a ZIP package locally and call aws serverlessrepo create-application to create the application.
- E. Create a ZIP package and upload it to Amazon S3. Call aws cloudformation create-stack to create the application.

**Correct Answer:** *CE*
Reference:
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-cli-package.html

*Community vote distribution*

AB (57%)

BE (36%)

7%



Question #33*Topic 1*

A developer has built a market application that stores pricing data in Amazon DynamoDB with Amazon ElastiCache in front. The prices of items in the market change frequently. Sellers have begun complaining that, after they update the price of an item, the price does not actually change in the product listing.
What could be causing this issue?

- A. The cache is not being invalidated when the price of the item is changed
- B. The price of the item is being retrieved using a write-through ElastiCache cluster
- C. The DynamoDB table was provisioned with insufficient read capacity
- D. The DynamoDB table was provisioned with insufficient write capacity

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #34*Topic 1*

The developer is creating a web application that collects highly regulated and confidential user data through a POST request. The web application is served through Amazon CloudFront. User names and phone numbers must be encrypted at the edge and must remain encrypted throughout the entire application stack.
What is the MOST secure way to meet these requirements?

- A. Enforce Match Viewer with HTTPS Only on CloudFront.
- B. Use only the newest TLS security policy on CloudFront.
- C. Enforce a signed URL on CloudFront on the front end.
- D. Use field-level encryption on CloudFront.

**Correct Answer:** *D*
Reference:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html
![img](https://www.examtopics.com/assets/media/exam-media/04238/0001900001.png)

*Community vote distribution*

D (100%)



Question #35*Topic 1*

A Developer has been asked to create an AWS Lambda function that is triggered any time updates are made to items in an Amazon DynamoDB table. The function has been created, and appropriate permissions have been added to the Lambda execution role. Amazon DynamoDB streams have been enabled for the table, but the function is still not being triggered.
Which option would enable DynamoDB table updates to trigger the Lambda function?

- A. Change the StreamViewType parameter value to NEW_AND_OLD_IMAGES for the DynamoDB table
- B. Configure event source mapping for the Lambda function
- C. Map an Amazon SNS topic to the DynamoDB streams
- D. Increase the maximum execution time (timeout) setting of the Lambda function

**Correct Answer:** *A*
Reference:
https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

*Community vote distribution*

B (100%)



Question #36*Topic 1*

A company maintains a REST service using Amazon API Gateway and the API Gateway native API key validation. The company recently launched a new registration page, which allows users to sign up for the service. The registration page creates a new API key using CreateApiKey and sends the new key to the user. When the user attempts to call the API using this key, the user receives a 403 Forbidden error. Existing users are unaffected and can still call the API.
What code updates will grant these new users access to the API?

- A. The createDeployment method must be called so the API can be redeployed to include the newly created API key.
- B. The updateAuthorizer method must be called to update the API's authorizer to include the newly created API key.
- C. The importApiKeys method must be called to import all newly created API keys into the current stage of the API.
- D. The createUsagePlanKey method must be called to associate the newly created API key with the correct usage plan.

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #37*Topic 1*

An application uploads photos to an Amazon S3 bucket. Each photo that is uploaded to the S3 bucket must be resized to a thumbnail image by the application.
Each thumbnail image is uploaded with a new name in the same S3 bucket.
Which AWS service can a developer configure to directly process each single S3 event for each S3 object upload?

- A. Amazon EC2
- B. Amazon Elastic Container Service (Amazon ECS)
- C. AWS Elastic Beanstalk
- D. AWS Lambda

**Correct Answer:** *D*
Reference:
https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html

*Community vote distribution*

D (100%)



Question #38*Topic 1*

A company is running a Docker application on Amazon ECS. The application must scale based on user load in the last 15 seconds.
How should a Developer instrument the code so that the requirement can be met?

- A. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds
- B. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds
- C. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds
- D. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #39*Topic 1*

Where should the appspec.yml file be placed in order for AWS CodeDeploy to work?

- A. In the root of the application source code directory structure
- B. In the bin folder along with all the complied code
- C. In an S3 bucket
- D. In the same folder as the application configuration files

**Correct Answer:** *A*
Reference:
https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html
![img](https://www.examtopics.com/assets/media/exam-media/04238/0002100001.png)

*Community vote distribution*

A (100%)



Question #40*Topic 1*

A Developer is working on an application that handles 10MB documents that contain highly-sensitive data. The application will use AWS KMS to perform client- side encryption.
What steps must be followed?

- A. Invoke the Encrypt API passing the plaintext data that must be encrypted, then reference the customer managed key ARN in the KeyId parameter
- B. Invoke the GenerateRandom API to get a data encryption key, then use the data encryption key to encrypt the data
- C. Invoke the GenerateDataKey API to retrieve the encrypted version of the data encryption key to encrypt the data
- D. Invoke the GenerateDataKey API to retrieve the plaintext version of the data encryption key to encrypt the data

**Correct Answer:** *A*

*Community vote distribution*

D (94%)

6%



Question #41*Topic 1*

An application uses Amazon Kinesis Data Streams to ingest and process large streams of data records in real time. Amazon EC2 instances consume and process the data from the shards of the Kinesis data stream by using Amazon Kinesis Client Library (KCL). The application handles the failure scenarios and does not require standby workers. The application reports that a specific shard is receiving more data than expected. To adapt to the changes in the rate of data flow, the
`hot` shard is resharded.
Assuming that the initial number of shards in the Kinesis data stream is 4, and after resharding the number of shards increased to 6, what is the maximum number of EC2 instances that can be deployed to process data from all the shards?

- A. 12
- B. 6
- C. 4
- D. 1

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #42*Topic 1*

A Company runs continuous integration/continuous delivery (CI/CD) pipelines for its application on AWS CodePipeline. A Developer must write unit tests and run them as part of the pipelines before staging the artifacts for testing.
How should the Developer incorporate unit tests as part of CI/CD pipelines?

- A. Create a separate CodePipeline pipeline to run unit tests
- B. Update the AWS CodeBuild specification to include a phase for running unit tests
- C. Install the AWS CodeDeploy agent on an Amazon EC2 instance to run unit tests
- D. Create a testing branch in AWS CodeCommit to run unit tests

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #43*Topic 1*

A Developer has written an application that runs on Amazon EC2 instances and generates a value every minute. The Developer wants to monitor and graph the values generated over time without logging in to the instance each time.
Which approach should the Developer use to achieve this goal?

- A. Use the Amazon CloudWatch metrics reported by default for all EC2 instances. View each value from the CloudWatch console.
- B. Develop the application to store each value in a file on Amazon S3 every minute with the timestamp as the name.
- C. Publish each generated value as a custom metric to Amazon CloudWatch using available AWS SDKs.
- D. Store each value as a variable and add the variable to the list of EC2 metrics that should be reported to the Amazon CloudWatch console.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #44*Topic 1*

A developer is trying to get data from an Amazon DynamoDB table called demoman-table. The developer configured the AWS CLI to use a specific IAM user's credentials and executed the following command:
![img](https://www.examtopics.com/assets/media/exam-media/04238/0002400001.png)
The command returned errors and no rows were returned.
What is the MOST likely cause of these issues?

- A. The command is incorrect; it should be rewritten to use put-item with a string argument.
- B. The developer needs to log a ticket with AWS Support to enable access to the demoman-table.
- C. Amazon DynamoDB cannot be accessed from the AWS CLI and needs to be called via the REST API.
- D. The IAM user needs an associated policy with read access to demoman-table.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #45*Topic 1*

A Development team is working on a case management solution that allows medical claims to be processed and reviewed. Users log in to provide information related to their medical and financial situations.
As part of the application, sensitive documents such as medical records, medical imaging, bank statements, and receipts are uploaded to Amazon S3. All documents must be securely transmitted and stored. All access to the documents must be recorded for auditing.
What is the MOST secure approach?

- A. Use S3 default encryption using Advanced Encryption Standard-256 (AES-256) on the destination bucket.
- B. Use Amazon Cognito for authorization and authentication to ensure the security of the application and documents.
- C. Use AWS Lambda to encrypt and decrypt objects as they are placed into the S3 bucket.
- D. Use client-side encryption/decryption with Amazon S3 and AWS KMS.

**Correct Answer:** *D*

*Community vote distribution*

D (86%)

7%



Question #46*Topic 1*

A developer is planning to use an Amazon API Gateway and AWS Lambda to provide a REST API. The developer will have three distinct environments to manage: development, test, and production.
How should the application be deployed while minimizing the number of resources to manage?

- A. Create a separate API Gateway and separate Lambda function for each environment in the same Region.
- B. Assign a Region for each environment and deploy API Gateway and Lambda to each Region.
- C. Create one API Gateway with multiple stages with one Lambda function with multiple aliases.
- D. Create one API Gateway and one Lambda function, and use a REST parameter to identify the environment.

**Correct Answer:** *C*
Reference:
https://aws.amazon.com/blogs/compute/using-api-gateway-stage-variables-to-manage-lambda-functions/

*Community vote distribution*

C (100%)



Question #47*Topic 1*

An application needs to use the IP address of the client in its processing. The application has been moved into AWS and has been placed behind an Application
Load Balancer (ALB). However, all the client IP addresses now appear to be the same. The application must maintain the ability to scale horizontally.
Based on this scenario, what is the MOST cost-effective solution to this problem?

- A. Remove the application from the ALB. Delete the ALB and change Amazon Route 53 to direct traffic to the instance running the application.
- B. Remove the application from the ALB. Create a Classic Load Balancer in its place. Direct traffic to the application using the HTTP protocol.
- C. Alter the application code to inspect the X-Forwarded-For header. Ensure that the code can work properly if a list of IP addresses is passed in the header.
- D. Alter the application code to inspect a custom header. Alter the client code to pass the IP address in the custom header.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #48*Topic 1*

A developer tested an application locally and then deployed it to AWS Lambda. While testing the application remotely, the Lambda function fails with an access denied message.
How can this issue be addressed?

- A. Update the Lambda function's execution role to include the missing permissions.
- B. Update the Lambda function's resource policy to include the missing permissions.
- C. Include an IAM policy document at the root of the deployment package and redeploy the Lambda function.
- D. Redeploy the Lambda function using an account with access to the AdministratorAccess policy.

**Correct Answer:** *A*
Reference:
https://aws.amazon.com/premiumsupport/knowledge-center/access-denied-lambda-s3-bucket/

*Community vote distribution*

A (100%)



Question #49*Topic 1*

A Developer must analyze performance issues with production-distributed applications written as AWS Lambda functions. These distributed Lambda applications invoke other components that make up the applications.
How should the Developer identify and troubleshoot the root cause of the performance issues in production?

- A. Add logging statements to the Lambda functions, then use Amazon CloudWatch to view the logs.
- B. Use AWS CloudTrail and then examine the logs.
- C. Use AWS X-Ray, then examine the segments and errors.
- D. Run Amazon Inspector agents and then analyze performance.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #50*Topic 1*

A company is building a compute-intensive application that will run on a fleet of Amazon EC2 instances. The application uses attached Amazon EBS disks for storing data. The application will process sensitive information and all the data must be encrypted.
What should a Developer do to ensure the data is encrypted on disk without impacting performance?

- A. Configure the Amazon EC2 instance fleet to use encrypted EBS volumes for storing data.
- B. Add logic to write all data to an encrypted Amazon S3 bucket.
- C. Add a custom encryption algorithm to the application that will encrypt and decrypt all data.
- D. Create a new Amazon Machine Image (AMI) with an encrypted root volume and store the data to ephemeral disks.

**Correct Answer:** *A*
Reference:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html
![img](https://www.examtopics.com/assets/media/exam-media/04238/0002700001.png)

*Community vote distribution*

A (90%)

10%



Question #51*Topic 1*

A Developer is working on a serverless project based in Java. Initial testing shows a cold start takes about 8 seconds on average for AWS Lambda functions.
What should the Developer do to reduce the cold start time? (Choose two.)

- A. Add the Spring Framework to the project and enable dependency injection.
- B. Reduce the deployment package by including only needed modules from the AWS SDK for Java.
- C. Increase the memory allocation setting for the Lambda function.
- D. Increase the timeout setting for the Lambda function.
- E. Change the Lambda invocation mode from synchronous to asynchronous.

**Correct Answer:** *AE*
Reference:
https://github.com/awslabs/aws-serverless-java-container/wiki/Quick-start---Spring-Boot

*Community vote distribution*

BC (85%)

Other



Question #52*Topic 1*

A company runs an e-commerce website that uses Amazon DynamoDB where pricing for items is dynamically updated in real time. At any given time, multiple updates may occur simultaneously for pricing information on a particular product. This is causing the original editor's changes to be overwritten without a proper review process.
Which DynamoDB write option should be selected to prevent this overwriting?

- A. Concurrent writes
- B. Conditional writes
- C. Atomic writes
- D. Batch writes

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #53*Topic 1*

A developer is storing JSON files in an Amazon S3 bucket. The developer wants to securely share an object with a specific group of people.
How can the developer securely provide temporary access to the objects that are stored in the S3 bucket?

- A. Set object retention on the files. Use the AWS software development kit (SDK) to restore the object before subsequent requests. Provide the bucket's S3 URL.
- B. Use the AWS software development kit (SDK) to generate a presigned URL. Provide the presigned URL.
- C. Set a bucket policy that restricts access after a period of time. Provide the bucket's S3 URL.
- D. Configure static web hosting on the S3 bucket. Provide the bucket's web URL.

**Correct Answer:** *B*
Reference:
https://blog.pics.io/everything-you-need-to-know-about-amazon-s3-bucket/

*Community vote distribution*

B (86%)

14%



Question #54*Topic 1*

A front-end web application is using Amazon Cognito user pools to handle the user authentication flow. A developer is integrating Amazon DynamoDB into the application using the AWS SDK for JavaScript.
How would the developer securely call the API without exposing the access or secret keys?

- A. Configure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials.
- B. Run the web application in an Amazon EC2 instance with the instance profile configured.
- C. Hardcore the credentials, use Amazon S3 to host the web application, and enable server-side encryption.
- D. Use Amazon Cognito user pool JSON Web Tokens (JWITs) to access the DynamoDB APIs.

**Correct Answer:** *A*
Reference:
https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html

*Community vote distribution*

A (100%)



Question #55*Topic 1*

A Developer must build an application that uses Amazon DynamoDB. The requirements state that the items being stored in the DynamoDB table will be 7KB in size and that reads must be strongly consistent. The maximum read rate is 3 items per second, and the maximum write rate is 10 items per second.
How should the Developer size the DynamoDB table to meet these requirements?

- A. Read: 3 read capacity units Write: 70 write capacity units
- B. Read: 6 read capacity units Write: 70 write capacity units
- C. Read: 6 read capacity units Write: 10 write capacity units
- D. Read: 3 read capacity units Write: 10 write capacity units

**Correct Answer:** *B*
Reference:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html

*Community vote distribution*

B (100%)



Question #56*Topic 1*

A company needs to ingest terabytes of data each hour from thousands of sources that are delivered almost continually throughout the day. The volume of messages generated varies over the course of the day. Messages must be delivered in real time for fraud detection and live operational dashboards.
Which approach will meet these requirements?

- A. Send the messages to an Amazon SQS queue, then process the messages by using a fleet of Amazon EC2 instances
- B. Use the Amazon S3 API to write messages to an S3 bucket, then process the messages by using Amazon Redshift
- C. Use AWS Data Pipeline to automate the movement and transformation of data
- D. Use Amazon Kinesis Data Streams with Kinesis Client Library to ingest and deliver messages

**Correct Answer:** *D*
Reference:
https://aws.amazon.com/kinesis/data-streams/faqs/

*Community vote distribution*

D (100%)



Question #57*Topic 1*

A developer is debugging an AWS Lambda function behind an Amazon API Gateway. Whenever the API Gateway endpoint is called, HTTP status code 200 is returned even though AWS Lambda is recording a 4xx error.
What change needs to be made to return a proper error code through the API Gateway?

- A. Enable CORS in the API Gateway method settings
- B. Use a Lambda proxy integration to return HTTP codes and headers
- C. Enable API Gateway error pass-through.
- D. Return the value in the header x-Amzn-ErrorType.

**Correct Answer:** *A*
Reference:
https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html

*Community vote distribution*

B (100%)



Question #58*Topic 1*

For a deployment using AWS CodeDeploy, what is the run order of the hooks for in-place deployments?

- A. Before Install -> Application Stop -> Application Start -> After Install
- B. Application Stop -> Before Install -> After Install -> Application Start
- C. Before Install -> Application Stop -> Validate Service -> Application Start
- D. Application Stop -> Before Install -> Validate Service -> Application Start

**Correct Answer:** *B*
Reference:
https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html

*Community vote distribution*

B (100%)



Question #59*Topic 1*

A developer is using Amazon S3 as the event source that invokes a Lambda function when new objects are created in the bucket. The event source mapping information is stored in the bucket notification configuration. The developer is working with different versions of the Lambda function, and has a constant need to update notification configuration so that Amazon S3 invokes the correct version.
What is the MOST efficient and effective way to achieve mapping between the S3 event and Lambda?

- A. Use a different Lambda trigger.
- B. Use Lambda environment variables.
- C. Use a Lambda alias.
- D. Use Lambda tags.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #60*Topic 1*

A company has a multi-tier application that uses Amazon API Gateway, AWS Lambda, and Amazon RDS. The company wants to investigate a slow response time to calls that come from the API Gateway API.
What is the MOST operationally efficient way for the company to determine which internal call is causing the slow response times?

- A. Use Amazon CloudWatch.
- B. Use AWS X-Ray.
- C. Use AWS CloudTrail.
- D. Use VPC Flow Logs.

**Correct Answer:** *B*

*Community vote distribution*

B (86%)

7%



Question #61*Topic 1*

A developer is deploying an application that will store files in an Amazon S3 bucket. The files must be encrypted at rest. The developer wants to automatically replicate the files to an S3 bucket in a different AWS Region for disaster recovery.
How can the developer accomplish this task with the LEAST amount of configuration?

- A. Encrypt the files by using server-side encryption with S3 managed encryption keys (SSE-S3). Enable S3 bucket replication.
- B. Encrypt the files by using server-side encryption (SSE) with an AWS Key Management Service (AWS KMS) customer master key (CMK). Enable S3 bucket replication.
- C. Use the s3 sync command to sync the files to the S3 bucket in the other Region.
- D. Configure an S3 Lifecycle configuration to automatically transfer files to the S3 bucket in the other Region.

**Correct Answer:** *B*

*Community vote distribution*

A (89%)

11%



Question #62*Topic 1*

A serverless application is using AWS Step Functions to process data and save it to a database. The application needs to validate some data with an external service before saving the data. The application will call the external service from an AWS Lambda function, and the external service will take a few hours to validate the data. The external service will respond to a webhook when the validation is complete.
A developer needs to pause the Step Functions workflow and wait for the response from the external service.
What should the developer do to meet this requirement?

- A. Use the .wait ForTaskToken option in the Lambda function task state. Pass the token in the body.
- B. Use the .waitForTaskToken option in the Lambda function task state. Pass the invocation request.
- C. Call the Lambda function in synchronous mode. Wait for the external service to complete the processing.
- D. Call the Lambda function in asynchronous mode. Use the Wait state until the external service completes the processing.

**Correct Answer:** *D*

*Community vote distribution*

A (80%)

12%

8%



Question #63*Topic 1*

A developer must use AWS X-Ray to monitor an application that is running on an Amazon EC2 instance. The developer has prepared the application by using the
X-Ray SDK.
What should the developer do to perform the monitoring?

- A. Configure the X-Ray SDK sampling rule and target. Activate the X-Ray daemon from the EC2 console or the AWS CLI with the modify-instance-attribute command to set the XRayEnabled flag.
- B. Install the X-Ray daemon. Assign an IAM role to the EC2 instance with a policy that allows writes to X-Ray.
- C. Install the X-Ray daemon. Configure it to forward data to Amazon EventBridge (Amazon CloudWatch Events). Grant the EC2 instance permission to write to Event Bridge (CloudWatch Events).
- D. Deploy the X-Ray SDK with the application, and instrument the application code. Use the SDK logger to capture and send the events.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #64*Topic 1*

A developer is designing a full-stack serverless application. Files for the website are stored in an Amazon S3 bucket. AWS Lambda functions that use Amazon
API Gateway endpoints return results from an Amazon DynamoDB table.
The developer must create a solution that securely provides registration and authentication for the application while minimizing the amount of configuration.
Which solution meets these requirements?

- A. Create an Amazon Cognito user pool and an app client. Configure the app client to use the user pool and provide the hosted web UI provided for sign-up and sign-in.
- B. Configure an Amazon Cognito identity pool. Map the users with IAM roles that are configured to access the S3 bucket that stores the website.
- C. Configure and launch an Amazon EC2 instance to set up an identity provider with an Amazon Cognito user pool. Configure the user pool to provide the hosted web UI for sign-up and sign-in.
- D. Create an IAM policy that allows access to the website that is stored in the S3 bucket. Attach the policy to an IAM group. Add IAM users to the group.

**Correct Answer:** *B*

*Community vote distribution*

A (82%)

B (18%)



Question #65*Topic 1*

A company has an application that writes files to an Amazon S3 bucket. Whenever there is a new file, an S3 notification event invokes an AWS Lambda function to process the file. The Lambda function code works as expected. However, when a developer checks the Lambda function logs, the developer finds that multiple invocations occur for every file.
What is causing the duplicate entries?

- A. The S3 bucket name is incorrectly specified in the application and is targeting another S3 bucket.
- B. The Lambda function did not run correctly, and Lambda retried the invocation with a delay.
- C. Amazon S3 is delivering the same event multiple times.
- D. The application stopped intermittently and then resumed, splitting the logs into multiple smaller files.

**Correct Answer:** *A*

*Community vote distribution*

B (67%)

C (31%)

3%



Question #66*Topic 1*

A developer needs to use the AWS CLI on an on-premises development server temporarily to access AWS services while performing maintenance. The developer needs to authenticate to AWS with their identity for several hours.
What is the MOST secure way to call AWS CLI commands with the developer's IAM identity?

- A. Specify the developer's IAM access key ID and secret access key as parameters for each CLI command
- B. Run the aws configure CLI command. Provide the developer's IAM access key ID and secret access key.
- C. Specify the developer's IAM profile as a parameter for each CLI command.
- D. Run the get-session-token CLI command with the developer's IAM user. Use the returned credentials to call the CLI

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #67*Topic 1*

An AWS Lambda function accesses two Amazon DynamoDB tables. A developer wants to improve the performance of the Lambda function by identifying bottlenecks in the function.
How can the developer inspect the timing of the DynamoDB API calls?

- A. Add DynamoDB as an event source to the Lambda function. View the performance with Amazon CloudWatch metrics
- B. Place an Application Load Balancer (ALB) in front of the two DynamoDB tables. Inspect the ALB logs
- C. Limit Lambda to no more than five concurrent invocations. Monitor from the Lambda console.
- D. Enable AWS X-Ray tracing for the function. View the traces from the X-Ray service.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #68*Topic 1*

A developer deployed an application to an Amazon EC2 instance. The application needs to know the public IPv4 address of the instance.
How can the application find this information?

- A. Query the instance metadata from http://169.254.169.254/latest/meta-data/.
- B. Query the instance user data from http://169.254.169.254/latest/user-data/.
- C. Query the Amazon Machine Image (AMI) information from http://169.254 169.254/latest/meta-data/ami/.
- D. Check the hosts file of the operating system.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #69*Topic 1*

A developer is designing an AWS Lambda function to perform a maintenance activity. The developer will use Amazon EventBridge (Amazon CloudWatch Events) to invoke the function on an hourly schedule. The developer wants the function to log information at different levels of detail according to the value of a log level variable. The developer must design the function so that the log level can be set without requiring a change to the function code.
Which solution will meet these requirements?

- A. Add a custom log level parameter for the Lambda function. Set the parameter by using the Lambda console
- B. Set the log level in a Lambda environment variable
- C. Set the log level in the Amazon CloudWatch Logs console.
- D. Add a custom log level parameter for the Lambda function. Set the parameter by using the AWS CLI.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #70*Topic 1*

A developer is creating a serverless application that uses an AWS Lambda function The developer will use AWS CloudFormation to deploy the application The application will write logs to Amazon CloudWatch Logs. The developer has created a log group in a CloudFormation template for the application to use. The developer needs to modify the CloudFormation template to make the name of the log group available to the application at runtime.
Which solution will meet this requirement?

- A. Use the AWS::Include transform in CloudFormation to provide the log group's name to the application.
- B. Pass the log group's name to the application in the user data section of the CloudFormation template
- C. Use the CloudFormation template's Mappings section to specify the log group's name for the application.
- D. Pass the log group's Amazon Resource Name (ARN) as an environment variable to the Lambda function.

**Correct Answer:** *D*

*Community vote distribution*

D (52%)

C (48%)



Question #71*Topic 1*

A company is running an application on Amazon Elastic Container Service (Amazon ECS). When the company deploys a new version of the application, the company initially needs to expose 10% of live traffic to the new version. After a period of time, the company needs to immediately route all the remaining live traffic to the new version.
Which ECS deployment should the company use to meet these requirements?

- A. Rolling update
- B. Blue/green with canary
- C. Blue/green with all at once
- D. Blue/green with linear

**Correct Answer:** *B*

*Community vote distribution*

B (95%)

5%



Question #72*Topic 1*

A microservices application is deployed across multiple containers in Amazon Elastic Container Service (Amazon ECS). To improve performance, a developer wants to capture trace information between the microservices and visualize the microservices architecture.
Which solution will meet these requirements?

- A. Build the container from the amazon/aws-xray-daemon base image. Use the AWS X-Ray SDK to instrument the application.
- B. Install the Amazon CloudWatch agent on the container image. Use the CloudWatch SDK to publish custom metrics from each of the microservices.
- C. Install the AWS X-Ray daemon on each of the ECS instances.
- D. Configure AWS CloudTrail data events to capture the traffic between the microservices.

**Correct Answer:** *C*

*Community vote distribution*

A (95%)

5%



Question #73*Topic 1*

A company is planning to use AWS CodeDeploy to deploy an application to Amazon Elastic Container Service (Amazon ECS). During the deployment of a new version of the application, the company initially must expose only 10% of live traffic to the new version of the deployed application. Then, after 15 minutes elapse, the company must route all the remaining live traffic to the new version of the deployed application.
Which CodeDeploy predefined configuration will meet these requirements?

- A. CodeDeployDefault.ECSCanary10Percent15Minutes
- B. CodeDeployDefault.LambdaCanary10Percent5Minutes
- C. CodeDeployDefault.LambdaCanary10Percent15Minutes
- D. CodeDeployDefault.ECSLinear10PercentEvery1 Minutes

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #74*Topic 1*

A developer notices timeouts from the AWS CLI when the developer runs list commands.
What should the developer do to avoid these timeouts?

- A. Use the --page-size parameter to request a smaller number of items.
- B. Use shorthand syntax to separate the list by a single space.
- C. Use the yaml-stream output for faster viewing of large datasets.
- D. Use quotation marks around strings to enclose data structure.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #75*Topic 1*

A company has moved a legacy on-premises application to AWS by performing a lift and shift. The application exposes a REST API that can be used to retrieve billing information. The application is running on a single Amazon EC2 instance. The application code cannot support concurrent invocations. Many clients access the API, and the company adds new clients all the time.
A developer is concerned that the application might become overwhelmed by too many requests. The developer needs to limit the number of requests to the API for all current and future clients. The developer must not change the API, the application, or the client code.
What should the developer do to meet these requirements?

- A. Place the API behind an Amazon API Gateway API. Set the server-side throttling limits.
- B. Place the API behind a Network Load Balancer. Set the target group throttling limits.
- C. Place the API behind an Application Load Balancer. Set the target group throttling limits.
- D. Place the API behind an Amazon API Gateway API. Set the per-client throttling limits.

**Correct Answer:** *D*

*Community vote distribution*

D (52%)

A (48%)



Question #76*Topic 1*

An ecommerce company wants to redirect users to a country-specific website when they enter the example.com website. For example, the company wants to redirect United States users to example.com/us/ and wants to redirect French users to example.com/fr/. The web application is using Amazon CloudFront and an
Application Load Balancer with an Amazon Elastic Container Service (Amazon ECS) cluster. The application's domain name resolution is configured in an
Amazon Route 53 public hosted zone.
Which solution will meet these requirements with the LEAST operational effort?

- A. Update the routing policy for the application's Route 53 record to specify geolocation routing. Configure listener rules based on a unique alias location to redirect requests to the correct URLs by country.
- B. Create a CloudFront function to inspect the CloudFront-Viewer-Country header and return redirect responses to different URLs based on user location.
- C. On the ECS web server configuration, use a GeoIP database to look up the requested IP address and redirect requests to the correct URLs by country.
- D. Use AWS WAF to determine the country of origin. Create an AWS WAF custom rule with a geographic match condition to redirect traffic from each country to the correct URL.

**Correct Answer:** *A*

*Community vote distribution*

B (61%)

A (39%)



Question #77*Topic 1*

A developer deploys an AWS Lambda function that runs each time a new Amazon S3 bucket is created. The Lambda function is supposed to attach an S3
Lifecycle policy to each new S3 bucket. The developer discovers that newly created S3 buckets have no S3 Lifecycle policy attached.
Which AWS service should the developer use to find a possible error in the Lambda function?

- A. AWS CloudTrail
- B. Amazon S3
- C. AWS CloudFormation
- D. Amazon CloudWatch

**Correct Answer:** *D*

*Community vote distribution*

A (47%)

D (47%)

7%



Question #78*Topic 1*

A developer has created a web API that uses Amazon Elastic Container Service (Amazon ECS) and an Application Load Balancer (ALB). An Amazon CloudFront distribution uses the API as an origin for web clients. The application has received millions of requests with a JSON Web Token (JWT) that is not valid in the authorization header. The developer has scaled out the application to handle the unauthenticated requests.
What should the developer do to reduce the number of unauthenticated requests to the API?

- A. Add a request routing rule to the ALB to return a 401 status code if the authorization header is missing.
- B. Add a container to the ECS task definition to validate JWTs Set the new container as a dependency of the application container.
- C. Create a CloudFront function for the distribution Use the crypto module in the function to validate the JWT.
- D. Add a custom authorizer for AWS Lambda to the CloudFront distribution to validate the JWT.

**Correct Answer:** *C*

*Community vote distribution*

C (81%)

Other



Question #79*Topic 1*

A developer is creating a mobile application that will not require users to log in.
What is the MOST efficient method to grant users access to AWS resources?

- A. Use an identity provider to securely authenticate with the application.
- B. Create an AWS Lambda function to create an IAM user when a user accesses the application.
- C. Create credentials using AWS KMS and apply these credentials to users when using the application.
- D. Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #80*Topic 1*

A developer has created on AWS Lambda function tool uses 15 MB of memory. When the developer runs the code natively on a laptop that has 4 cores, the function runs within 100 ms. When the developer deploys the code as a Lambda function with 128 MB of memory, the first run takes 3 seconds. Subsequent runs take more than 500 ms to finish.
The developer needs to improve the performance of the Lambda function so that the function runs consistently in less than 100 ms, excluding the initial startup time.
Which solution will meet this requirement?

- A. Increase the reserved concurrency of the Lambda function.
- B. Increase the provisioned concurrency of the Lambda function.
- C. Increase the memory of the Lambda function.
- D. Repackage the Lambda function as a container. Redeploy the function.

**Correct Answer:** *B*

*Community vote distribution*

C (94%)

6%



Question #81*Topic 1*

A company is planning to use AWS CodeDeploy to deploy an application to AWS Lambda. During the deployment of a new version of the application, the company initially must expose only 10% of live traffic to the new version of the deployed application. Then, every 10 minutes, the company must route another
10% of live traffic to the new version of the deployed application until all live traffic is routed to the new version.
Which CodeDeploy predefined configuration will meet these requirements?

- A. CodeDeployDefault.OnceAtATime
- B. CodeDeployDefault.LambdaCanary10Percent10Minutes
- C. CodeDeployDefault.LambdaLinear10PercentEvery10Minutes
- D. CodeDeployDefault.ECSLinear10PercentEvery3Minutes

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #82*Topic 1*

A developer wants to use AWS Elastic Beanstalk to test a new version of on application in a test environment.
Which deployment method offers the FASTEST deployment?

- A. Immutable
- B. Rolling
- C. Rolling with additional batch
- D. All at once

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #83*Topic 1*

A developer has built an application that inserts data into an Amazon DynamoDB table. The table is configured to use provisioned capacity. The application is deployed on a burstable nano Amazon EC2 Instance. The application logs show that the application has been failing because of a
ProvisionedThroughputExceedException error.
Which actions should the developer take to resolve this issue? (Choose two.)

- A. Move The application to a larger EC instance.
- B. Increase the number or read capacity units (RCUs) that are provisioned for the DynamoDB table.
- C. Reduce the frequency of requests to DynamoDB by implement ng exponential backoff.
- D. Increase the frequency of requests to DynamoDB by decreasing the retry delay.
- E. Change the capacity mode of the DynamoDB table from provisioned to on-demand.

**Correct Answer:** *AE*

*Community vote distribution*

CE (82%)

Other



Question #84*Topic 1*

A developer is deploying on application on Amazon EC2 instances that run in Account A. In certain cases, this application needs to read data from a private
Amazon S3 bucket in Account B. The developer must provide the application access to the S3 bucket without exposing the S3 bucket to anyone else.
Which combination of actions should the developer take to meet these requirements? (Choose two.)

- A. Create an IAM role with S3 read permissions in Account B.
- B. Update the instance profile IAM role in Account A with S3 read permissions.
- C. Make the S3 bucket public with limited access for Account A.
- D. Configure the bucket policy in Account B to grant permissions to the instance profile role.
- E. Add a trust policy that allows s3:Get* permissions to the IAM rote in Account B.

**Correct Answer:** *AB*

*Community vote distribution*

BD (60%)

AD (20%)

13%

7%



Question #85*Topic 1*

A developer at a company recently created a serverless application to process and show data from business reports. The application's user interface (UI) allows users to select and start processing the flies. The UI displays a message when the result is available to view. The application uses AWS Step Functions with AWS
Lambda functions to process the files. The developer used Amazon API Gateway and Lambda functions to create an API to support the UI.
The company's UI team reports that the request to process a file s often returning timeout errors because of the size or complexity of the files. The UI team wants the API to provide an immediate response so that the UI can display a message while the files are being processed. The backend process that is invoked by the
API needs to send an email message when the report processing is complete.
What should the developer do to configure the API to meet these requirements?

- A. Change the API Gateway route to add an X-Amz-Invocation-Type header with a static value of 'Event' in the integration request. Deploy the API Gateway stage to apply the changes.
- B. Change the configuration of the Lambda function that implements the request to process a file. Configure the maximum age of the event so that the Lambda function will run asynchronously.
- C. Change the API Gateway timeout value to match the Lambda function timeout value. Deploy the API Gateway stage to apply the changes.
- D. Change the API Gateway route to add an X-Amz-Target header with a static value of 'Async' in the integration request. Deploy the API Gateway stage to apply the changes.

**Correct Answer:** *A*

*Community vote distribution*

A (90%)

10%



Question #86*Topic 1*

An ecommerce application is running behind an Application Load Balancer. A developer observes some unexpected load on the application during non-peak hours. The developer wants to analyze patterns for the client IP addresses that use the application.
Which HTTP header should the developer use for this analysis?

- A. The X-Forwarded-Proto header
- B. The X-Forwarded-Host header
- C. The X-Forwarded-For header
- D. The X-Forwarded-Port header

**Correct Answer:** *A*

*Community vote distribution*

C (94%)

6%



Question #87*Topic 1*

A developer needs to create an application that supports Security Assertion Markup Language (SAML) and authentication with social media providers. It must also allow access to AWS services, such as Amazon DynamoDB.
Which AWS service or feature will meet these requirements with the LEAST amount of additional coding?

- A. AWS AppSync
- B. Amazon Cognito identity pools
- C. Amazon Cognito user pools
- D. Amazon Lambda@Edge

**Correct Answer:** *C*

*Community vote distribution*

B (95%)

5%



Question #88*Topic 1*

A developer is designing a serverless application for an ecommerce website. An Amazon API Gateway API exposes AWS Lambda functions for billing, payment, and user operations. The website features shopping carts for the users. The shopping carts must be stored for extended periods of time and will be retrieved frequently by the front-end application.
The load on the application will vary significantly based on the time of day and the promotional sales that are offered on the website. The application must be able to scale automatically to meet these changing demands.
Which solution will meet these requirements?

- A. Store the data objects on an Amazon RDS DB instance. Cache the data objects in memory by using Amazon ElastiCache.
- B. Store the data objects on Amazon EC2 instances behind an Application Load Balancer. Use session affinity (sticky sessions) for each user's shopping cart.
- C. Store the data objects in Amazon S3 buckets. Cache the data objects by using Amazon CloudFront with the maximum TTL.
- D. Store the data objects in Amazon DynamoDB tables. Cache the data objects by using DynamoDB Accelerator (DAX).

**Correct Answer:** *A*

*Community vote distribution*

D (90%)

10%



Question #89*Topic 1*

A company is migrating its on-premises database to Amazon RDS for MySQL. The company has read-heavy workloads, and wants to make sure it re-factors its code to achieve optimum read performance for its queries.
How can this objective be met?

- A. Add database retries to effectively use RDS with vertical scaling.
- B. Use RDS with multi-AZ deployment.
- C. Add a connection string to use an RDS read replica for read queries.
- D. Add a connection string to use a read replica on an EC2 instance.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #90*Topic 1*

An application running on Amazon EC2 opens connections to an Amazon RDS SQL Server database. The developer does not want to store the user name and password for the database in the code. The developer would also like to automatically rotate the credentials.
What is the MOST secure way to store and access the database credentials?

- A. Create an IAM role that has permissions to access the database. Attach the role to the EC2 instance.
- B. Use AWS Secrets Manager to store the credentials. Retrieve the credentials from Secrets Manager as needed.
- C. Store the credentials in an encrypted text file in an Amazon S3 bucket. Configure the EC2 instance's user data to download the credentials from Amazon S3 as the instance boots.
- D. Store the user name and password credentials directly in the source code. No further action is needed because the source code is stored in a private repository.

**Correct Answer:** *B*

*Community vote distribution*

B (90%)

10%



Question #91*Topic 1*

A developer received the following error message during an AWS CloudFormation deployment:
DELETE_FAILED (The following resource(s) failed to delete: [ASGInstanceRolel2345678].)
Which action should the developer take to resolve this error?

- A. Contact AWS Support to report an issue with the Auto Scaling Groups (ASG) service.
- B. Add a DependsOn attribute to the ASGInstanceRole12345678 resource in the CloudFormation template. Then delete the stack.
- C. Modify the CloudFormation template to retain the ASGInstanceRolel2345678 resource. Then manually delete the resource after deployment.
- D. Add a force parameter when calling CloudFormation with the role-arn of ASGInstanceRolel2345678.

**Correct Answer:** *C*

*Community vote distribution*

C (73%)

B (27%)



Question #92*Topic 1*

An application runs on multiple EC2 instances behind an ELB.
Where is the session data best written so that it can be served reliably across multiple requests?

- A. Write data to Amazon ElastiCache.
- B. Write data to Amazon Elastic Block Store.
- C. Write data to Amazon EC2 Instance Store.
- D. Write data to the root filesystem.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #93*Topic 1*

A company is using continuous integration/continuous delivery (CI/CD) systems. A developer must automate the deployment of an application software package to Amazon EC2 instances and virtual servers that run on premises.
Which AWS service should the developer use to meet these requirements?

- A. AWS Cloud9
- B. AWS CodeBuild
- C. AWS Elastic Beanstalk
- D. AWS CodeDeploy

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #94*Topic 1*

A software company is using AWS CodeBuild to build an application. The buildspec runs the application build and creates a Docker image that contains the application. The company needs to push the Docker image to Amazon Elastic Container Registry (Amazon ECR) only upon the completion of each successful build.
Which solution meets these requirements?

- A. Change the buildspec by adding a post_build phase that uses the commands block to push the Docker image.
- B. Change the buildspec by adding a post_build phase that uses the finally block to push the Docker image.
- C. Specify the Docker image in the buildspec's artifacts sequence with an action to push the image.
- D. Use a batch build to define a build matrix. Use the batch build to push the Docker image.

**Correct Answer:** *C*

*Community vote distribution*

A (80%)

B (20%)



Question #95*Topic 1*

A company is using Amazon RDS as the backend database for its application. After a recent marketing campaign, a surge of read requests to the database increased the latency of data retrieval from the database.
The company has decided to implement a caching layer in front of the database. The cached content must be encrypted and must be highly available.
Which solution will meet these requirements?

- A. Amazon CloudFront
- B. Amazon ElastiCache for Memcached
- C. Amazon ElastiCache for Redis in cluster mode
- D. Amazon DynamoDB Accelerator (DAX)

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #96*Topic 1*

A company has an application that runs on AWS Elastic Beanstalk in a load-balanced environment. The company needs to update the instance types in the environment to a more recent generation of instance types. The company must minimize downtime during the deployment of this configuration change.
Which deployment options will meet these requirements? (Choose two.)

- A. Disabled
- B. Rolling based on Health
- C. Immutable
- D. All at once
- E. Canary

**Correct Answer:** *CE*

*Community vote distribution*

BC (53%)

CE (47%)



Question #97*Topic 1*

Given the source code for an AWS Lambda function in the local file store.py containing a handler function called get_store and the following AWS
CloudFormation template:
![img](https://www.examtopics.com/assets/media/exam-media/04238/0005000001.png)
What should be done to prepare the template so that it can be deployed using the AWS CLI command aws cloudformation deploy?

- A. Use aws cloudformation compile to base64 encode and embed the source file into a modified CloudFormation template.
- B. Use aws cloudformation package to upload the source code to an Amazon S3 bucket and produce a modified CloudFormation template.
- C. Use aws lambda zip to package the source file together with the CloudFormation template and deploy the resulting zip archive.
- D. Use aws serverless create-package to embed the source file directly into the existing CloudFormation template.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #98*Topic 1*

A company is developing a report implemented using AWS Step Functions. Amazon CloudWatch shows errors in the Step Functions task state machine. To troubleshoot each task, the state input needs to be included along with the error message in the state output.
Which coding practice can preserve both the original input and the error for the state?

- A. Use ResultPath in a Catch statement to include the error with the original input.
- B. Use InputPath in a Catch statement and set the value to null.
- C. Use ErrorEquals in a Retry statement to include the error with the original input.
- D. Use OutputPath in a Retry statement and set the value to $.

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #99*Topic 1*

A developer is receiving HTTP 400: ThrottlingException errors intermittently when calling the Amazon CloudWatch API. When a call fails, no data is retrieved.
What best practice should first be applied to address this issue?

- A. Contact AWS Support for a limit increase.
- B. Use the AWS CLI to get the metrics.
- C. Analyze the applications and remove the API call.
- D. Retry the call with exponential backoff.

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #100*Topic 1*

A company has an online order website that uses Amazon DynamoDB to store item inventory. A sample of the inventory object is as follows:
![img](https://www.examtopics.com/assets/media/exam-media/04238/0005200001.png)
A developer needs to reduce all inventory prices by 100 as long as the resulting price would not be less than 500.
What should the developer do to make this change with the LEAST number of calls to DynamoDB?

- A. Perform a DynamoDB Query operation with the Id. If the price is >= 600, perform an UpdateItem operation to update the price.
- B. Perform a DynamoDB UpdateItem operation with a condition expression of "Price >= 600".
- C. Perform a DynamoDB UpdateItem operation with a condition expression of "ProductCategory IN ({"S": "Sporting Goods"}) and Price 600".
- D. Perform a DynamoDB UpdateItem operation with a condition expression of "MIN Price = 500".

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #101*Topic 1*

A company is using an AWS Lambda function to process records from an Amazon Kinesis data stream. The company recently observed slow processing of the records. A developer notices that the iterator age metric for the function is increasing and that the Lambda run duration is constantly above normal.
Which actions should the developer take to increase the processing speed? (Choose two.)

- A. Increase the number of shards of the Kinesis data stream.
- B. Decrease the timeout of the Lambda function.
- C. Increase the memory that is allocated to the Lambda function.
- D. Decrease the number of shards of the Kinesis data stream.
- E. Increase the timeout of the Lambda function.

**Correct Answer:** *BC*

*Community vote distribution*

AC (75%)

8%

Other



Question #102*Topic 1*

A developer is making changes to a custom application that uses AWS Elastic Beanstalk.
Which solutions will update the Elastic Beanstalk environment with the new application version after the developer completes the changes? (Choose two.)

- A. Package the application code into a .zip file. Use the AWS Management Console to upload the zip file and deploy the packaged application.
- B. Package the application code into a .tar file. Use the AWS Management Console to create a new application version from the .tar file. Update the environment by using the AWS CLI.
- C. Package the application code into a .tar file. Use the AWS Management Console to upload the .tar file and deploy the packaged application.
- D. Package the application code into a .zip file. Use the AWS CLI to create a new application version from the .zip file and to update the environment.
- E. Package the application code into a .zip file. Use the AWS Management Console to create a new application version from the .zip file. Rebuild the environment by using the AWS CLI.

**Correct Answer:** *AC*

*Community vote distribution*

AD (100%)



Question #103*Topic 1*

A company has an application where reading objects from Amazon S3 is based on the type of user. The user types are registered user and guest user. The company has 25,000 users and is growing. Information is pulled from an S3 bucket depending on the user type.
Which approaches are recommended to provide access to both user types? (Choose two.)

- A. Provide a different access key and secret access key in the application code for registered users and guest users to provide read access to the objects.
- B. Use S3 bucket policies to restrict read access to specific IAM users.
- C. Use Amazon Cognito to provide access using authenticated and unauthenticated roles.
- D. Create a new IAM user for each user and grant read access.
- E. Use the AWS IAM service and let the application assume the different roles using the AWS Security Token Service (AWS STS) AssumeRole action depending on the type of user and provide read access to Amazon S3 using the assumed role.

**Correct Answer:** *AE*

*Community vote distribution*

CE (100%)



Question #104*Topic 1*

A developer is writing an application to analyze the traffic to a fleet of Amazon EC2 instances. The EC2 instances run behind a public Application Load Balancer
(ALB). An HTTP server runs on each of the EC2 instances, logging all requests to a log file.
The developer wants to capture the client public IP addresses. The developer analyzes the log files and notices only the IP address of the ALB.
What must the developer do to capture the client public IP addresses in the log file?

- A. Add a Host header to the HTTP server log configuration file.
- B. Install the Amazon CloudWatch Logs agent on each EC2 instance. Configure the agent to write to the log file.
- C. Install the AWS X-Ray daemon on each EC2 instance. Configure the daemon to write to the log file.
- D. Add an X-Forwarded-For header to the HTTP server log configuration file.

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #105*Topic 1*

A developer is writing a new AWS Serverless Application Model (AWS SAM) template with a new AWS Lambda function. The Lambda function runs complex code. The developer wants to test the Lambda function with more CPU power.
What should the developer do to meet this requirement?

- A. Increase the runtime engine version.
- B. Increase the timeout.
- C. Increase the number of Lambda layers.
- D. Increase the memory.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #106*Topic 1*

A developer uses a single AWS CloudFormation template to configure the test environment and the production environment for an application. The developer handles environment-specific requirements in the CloudFormation template.
The developer decides to update the Amazon EC2 Auto Scaling launch template with new Amazon Machine Images (AMIs) for each environment. The
CloudFormation update for the new AMIs is successful in the test environment, but the update fails in the production environment.
What are the possible causes of the CloudFormation update failure in the production environment? (Choose two.)

- A. The new AMIs do not fulfill the specified conditions in the CloudFormation template.
- B. The service quota for the number of EC2 vCPUs in the AWS Region has been exceeded.
- C. The security group that is specified in the CloudFormation template does not exist.
- D. CloudFormation does not recognize the template change as an update.
- E. CloudFormation does not have sufficient IAM permissions to make the changes.

**Correct Answer:** *CE*

*Community vote distribution*

AE (50%)

AC (21%)

AB (21%)

7%



Question #107*Topic 1*

A developer is creating a serverless web application and maintains different branches of code. The developer wants to avoid updating the Amazon API Gateway target endpoint each time a new code push is performed.
What solution would allow the developer to perform a code push efficiently, without the need to update the API Gateway?

- A. Associate different AWS Lambda functions to an API Gateway target endpoint.
- B. Create different stages in API Gateway. then associate API Gateway with AWS Lambda.
- C. Create aliases and versions in AWS Lambda.
- D. Tag the AWS Lambda functions with different names.

**Correct Answer:** *C*

*Community vote distribution*

C (82%)

B (18%)



Question #108*Topic 1*

A developer needs to deploy an application running on AWS Fargate using Amazon ECS. The application has environment variables that must be passed to a container for the application to initialize.
How should the environment variables be passed to the container?

- A. Define an array that includes the environment variables under the environment parameter within the service definition.
- B. Define an array that includes the environment variables under the environment parameter within the task definition.
- C. Define an array that includes the environment variables under the entryPoint parameter within the task definition.
- D. Define an array that includes the environment variables under the entryPoint parameter within the service definition.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #109*Topic 1*

A developer must extend an existing application that is based on the AWS Serverless Application Model (AWS SAM). The developer has used the AWS SAM CLI to create the project. The project contains different AWS Lambda functions.
Which combination of commands must the developer use to redeploy the AWS SAM application? (Choose two.)

- A. sam init
- B. sam validate
- C. sam build
- D. sam deploy
- E. sam publish

**Correct Answer:** *CD*

*Community vote distribution*

CD (100%)



Question #110*Topic 1*

A developer manages an application that interacts with Amazon RDS. After observing slow performance with read queries, the developer implements Amazon
ElastiCache to update the cache immediately following the primary database update.
What will be the result of this approach to caching?

- A. Caching will increase the load on the database instance because the cache is updated for every database update.
- B. Caching will slow performance of the read queries because the cache is updated when the cache cannot find the requested data.
- C. The cache will become large and expensive because the infrequently requested data is also written to the cache.
- D. Overhead will be added to the initial response time because the cache is updated only after a cache miss.

**Correct Answer:** *C*

*Community vote distribution*

C (64%)

D (32%)

4%



Question #111*Topic 1*

A developer has a stateful web server on-premises that is being migrated to AWS. The developer must have greater elasticity in the new design.
How should the developer re-factor the application to make it more elastic? (Choose two.)

- A. Use pessimistic concurrency on Amazon DynamoDB.
- B. Use Amazon CloudFront with an Auto Scaling group.
- C. Use Amazon CloudFront with an AWS Web Application Firewall.
- D. Store session state data in an Amazon DynamoDB table.
- E. Use an ELB with an Auto Scaling group.

**Correct Answer:** *DE*

*Community vote distribution*

DE (100%)



Question #112*Topic 1*

A developer has a legacy application that is hosted on-premises. Other applications hosted on AWS depend on the on-premises application for proper functioning.
In case of any application errors, the developer wants to be able to use Amazon CloudWatch to monitor and troubleshoot all applications from one place.
How can the developer accomplish this?

- A. Install an AWS SDK on the on-premises server to automatically send logs to CloudWatch.
- B. Download the CloudWatch agent to the on-premises server. Configure the agent to use IAM user credentials with permissions for CloudWatch.
- C. Upload log files from the on-premises server to Amazon S3 and have CloudWatch read the files.
- D. Upload log files from the on-premises server to an Amazon EC2 instance and have the instance forward the logs to CloudWatch.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #113*Topic 1*

A developer is designing a serverless application with two AWS Lambda functions to process photos. One Lambda function stores objects in an Amazon S3 bucket and stores the associated metadata in an Amazon DynamoDB table. The other Lambda function fetches the objects from the S3 bucket by using the metadata from the DynamoDB table. Both Lambda functions use the same Python library to perform complex computations and are approaching the quota for the maximum size of zipped deployment packages.
What should the developer do to reduce the size of the Lambda deployment packages with the LEAST operational overhead?

- A. Package each Python library in its own .zip file archive. Deploy each Lambda function with its own copy of the library.
- B. Create a Lambda layer with the required Python library. Use the Lambda layer in both Lambda functions.
- C. Combine the two Lambda functions into one Lambda function. Deploy the Lambda function as a single .zip file archive.
- D. Download the Python library to an S3 bucket. Program the Lambda functions to reference the object URLs.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #114*Topic 1*

A developer is adding a feature to a client-side application so that users can upload videos to an Amazon S3 bucket.
What is the MOST secure way to give the application the ability to write files to the S3 bucket?

- A. Update the S3 bucket policy to allow public write access. Allow any user to upload videos by removing the need to handle user authentication within the client- side application.
- B. Create a new IAM policy and a corresponding IAM user with permissions to write to the S3 bucket. Store the key and the secret for the user in the application code. Use the key to authenticate the video uploads.
- C. Configure the API layer of the application to have a new endpoint that creates signed URLs that allow an object to be put into the S3 bucket. Generate a presigned URL through this API call in the client application. Upload the video by using the signed URL.
- D. Generate a new IAM key and a corresponding secret by using the AWS account root user credentials. Store the key and the secret for the user in the application code. Use the key to authenticate the video uploads.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #115*Topic 1*

A company is building an application for stock trading. The application needs sub-millisecond latency for processing trade requests. The company uses Amazon
DynamoDB to store all the trading data that is used to process each trading request.
A development team performs load testing on the application and finds that the data retrieval time is higher than expected. The development team needs a solution that reduces the data retrieval time with the least possible effort.
Which solution meets these requirements?

- A. Add local secondary indexes (LSIs) for the trading data.
- B. Store the trading data in Amazon S3, and use S3 Transfer Acceleration.
- C. Add retries with exponential backoff for DynamoDB queries.
- D. Use DynamoDB Accelerator (DAX) to cache the trading data.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #116*Topic 1*

A developer needs to build and deploy a serverless application that has an API that mobile clients will use. The API will use Amazon DynamoDB and Amazon
OpenSearch Service (Amazon Elasticsearch Service) as data sources. Responses that are sent to the clients will contain aggregated data from both data sources.
The developer must minimize the number of API endpoints and must minimize the number of API calls that are required to retrieve the necessary data.
Which solution should the developer use to meet these requirements?

- A. GraphQL API on AWS AppSync
- B. REST API on Amazon API Gateway
- C. GraphQL API on an Amazon EC2 instance
- D. REST API on AWS Elastic Beanstalk

**Correct Answer:** *B*

*Community vote distribution*

A (89%)

11%



Question #117*Topic 1*

A Lambda function processes data before sending it to a downstream service. Each piece of data is approximately 1MB in size. After a security audit, the function is now required to encrypt the data before sending it downstream.
Which API call is required to perform the encryption?

- A. Pass the data to the KMS ReEncrypt API for encryption.
- B. Use the KMS GenerateDataKey API to get an encryption key.
- C. Use the KMS GenerateDataKeyWithoutPlainText API to get an encryption key.
- D. Pass the data to KMS as part of the Encrypt API for encryption.

**Correct Answer:** *B*

*Community vote distribution*

B (55%)

D (45%)



Question #118*Topic 1*

A company has a web application that runs on Amazon EC2 instances with a custom Amazon Machine Image (AMI). The company uses AWS CloudFormation to provision the application. The application runs in the us-east-1 Region, and the company needs to deploy the application to the us-west-1 Region.
An attempt to create the AWS CloudFormation stack in us-west-1 fails. An error message states that the AMI ID does not exist. A developer must resolve this error with a solution that uses the least amount of operational overhead.
Which solution meets these requirements?

- A. Change the AWS CloudFormation templates for us-east-1 and us-west-1 to use an AWS AMI. Relaunch the stack for both Regions.
- B. Copy the custom AMI from us-east-1 to us-west-1. Update the AWS CloudFormation template for us-west-1 to refer to AMI ID for the copied AMI. Relaunch the stack.
- C. Build the custom AMI in us-west-1. Create a new AWS CloudFormation template to launch the stack in us-west-1 with the new AMI ID.
- D. Manually deploy the application outside AWS CloudFormation in us-west-1.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #119*Topic 1*

A developer wants to run a PHP website with an NGINX proxy and package them as Docker containers in one environment. The developer wants a managed environment with automated provisioning and load balancing. The developer cannot change the configuration and must minimize operational overhead.
How should the developer build the website to meet these requirements?

- A. Create a new application in AWS Elastic Beanstalk that is preconfigured for a multicontainer Docker environment. Upload the code, and deploy it to a web server environment.
- B. Deploy the code on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.
- C. Construct an AWS CloudFormation template that launches Amazon EC2 instances. Install and configure the PHP code by using cfn helper scripts.
- D. Upload the code for the PHP website into an Amazon S3 bucket. Host the website from the S3 bucket.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #120*Topic 1*

A company has a website that displays a daily newsletter. When a user visits the website, an AWS Lambda function processes the browser's request and queries the company's on-premises database to obtain the current newsletter. The newsletters are stored in English. The Lambda function uses the Amazon Translate
TranslateText API operation to translate the newsletters, and the translation is displayed to the user.
Due to an increase in popularity, the website's response time has slowed. The database is overloaded. The company cannot change the database and needs a solution that improves the response time of the Lambda function.
Which solution meets these requirements?

- A. Change to asynchronous Lambda function invocation.
- B. Cache the translated newsletters in the Lambda /tmp directory.
- C. Enable TranslateText API caching.
- D. Change the Lambda function to use parallel processing.

**Correct Answer:** *A*

*Community vote distribution*

B (91%)

9%



Question #121*Topic 1*

A developer is creating an AWS CloudFormation template for an application. The application includes an Amazon RDS database. The password to be set for the resource's MasterUserPassword property is already stored in AWS Secrets Manager.
How can the developer reference the value of the password in the CloudFormation template?

- A. Use a parameter in the CloudFormation template with the same name of the secret.
- B. Use the ssm dynamic reference by specifying the name of the secret and its version.
- C. Use the secretsmanager dynamic reference by specifying the appropriate reference-key segment.
- D. Use the ssm-secure dynamic reference by specifying the name of the secret and its version.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #122*Topic 1*

An application is using Amazon DynamoDB as its data store, and should be able to read 100 items per second as strongly consistent reads. Each item is 5 KB in size.
To what value should the table's provisioned read throughput be set?

- A. 50 read capacity units
- B. 100 read capacity units
- C. 200 read capacity units
- D. 500 read capacity units

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #123*Topic 1*

A developer created a Lambda function for a web application backend. When testing the Lambda function from the AWS Lambda console, the developer can see that the function is being run, but there is no log data being generated in Amazon CloudWatch Logs, even after several minutes.
What could cause this situation?

- A. The Lambda function does not have any explicit log statements for the log data to send it to CloudWatch Logs.
- B. The Lambda function is missing CloudWatch Logs as a source trigger to send log data.
- C. The execution role for the Lambda function is missing permissions to write log data to the CloudWatch Logs.
- D. The Lambda function is missing a target CloudWatch Log group.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #124*Topic 1*

A developer has written code for an application and wants to share it with other developers on the team to receive feedback. The shared application code needs to be stored long-term with multiple versions and batch change tracking.
Which AWS service should the developer use?

- A. AWS CodeBuild
- B. Amazon S3
- C. AWS CodeCommit
- D. AWS Cloud9

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #125*Topic 1*

A developer has created a new IAM user that has the s3:PutObject permission to write to a specific Amazon S3 bucket. The S3 bucket uses server-side encryption with AWS KMS managed keys (SSE-KMS) as the default encryption. When an application uses the access key and secret key of the IAM user to call the PutObject API operation, the application receives an access denied error.
What should the developer do to resolve this error?

- A. Update the policy of the IAM user to allow the s3:EncryptionConfiguration action.
- B. Update the bucket policy of the S3 bucket to allow the IAM user to upload objects.
- C. Update the policy of the IAM user to allow the kms:GenerateDataKey action.
- D. Update the ACL of the S3 bucket to allow the IAM user to upload objects.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #126*Topic 1*

A static website is hosted in an Amazon S3 bucket. Several HTML pages on the site use JavaScript to download images from another Amazon S3 bucket. These images are not displayed when users browse the site.
What is the possible cause for the issue?

- A. The referenced Amazon S3 bucket is in another region.
- B. The images must be stored in the same Amazon S3 bucket.
- C. Port 80 must be opened on the security group in which the Amazon S3 bucket is located.
- D. Cross Origin Resource Sharing must be enabled on the Amazon S3 bucket.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #127*Topic 1*

An application needs to encrypt data that is written to Amazon S3 where the keys are managed in an on-premises data center, and the encryption is handled by
S3.
Which type of encryption should be used?

- A. Use server-side encryption with Amazon S3-managed keys.
- B. Use server-side encryption with AWS KMS-managed keys.
- C. Use client-side encryption with AWS KMS-managed keys.
- D. Use server-side encryption with customer-provided keys.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #128*Topic 1*

A developer is building a serverless application that is based on AWS Lambda. The developer initializes the AWS software development kit (SDK) outside of the
Lambda handler function.
What is the PRIMARY benefit of this action?

- A. Improves legibility and stylistic convention
- B. Takes advantage of runtime environment reuse
- C. Provides better error handling
- D. Creates a new SDK instance for each invocation

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #129*Topic 1*

A developer is testing a Docker-based application that uses the AWS SDK to interact with Amazon DynamoDB. In the local development environment, the application has used IAM access keys. The application is now ready for deployment onto an ECS cluster.
How should the application authenticate with AWS services in production?

- A. Configure an ECS task IAM role for the application to use.
- B. Refactor the application to call AWS STS AssumeRole based on an instance role.
- C. Configure AWS access key/secret access key environment variables with new credentials.
- D. Configure the credentials file with a new access key/secret access key.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #130*Topic 1*

A developer has created an AWS Lambda function to provide notification through Amazon Simple Notification Service (Amazon SNS) whenever a file is uploaded to Amazon S3 that is larger than 50 MB. The developer has deployed and tested the Lambda function by using the CLI. However, when the event notification is added to the S3 bucket and a 3,000 MB file is uploaded, the Lambda function does not launch.
Which of the following is a possible reason for the Lambda function's inability to launch?

- A. The S3 event notification does not activate for files that are larger than 1,000 MB.
- B. The resource-based policy for the Lambda function does not have the required permissions to be invoked by Amazon S3.
- C. Lambda functions cannot be invoked directly from an S3 event.
- D. The S3 bucket needs to be made public.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #131*Topic 1*

A company stores documents in Amazon S3 with default settings. A new regulation requires the company to encrypt the documents at rest, rotate the encryption keys annually, and keep a record of when the encryption keys were rotated. The company does not want to manage the encryption keys outside of AWS.
Which solution will meet these requirements?

- A. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3).
- B. Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS).
- C. Use server-side encryption with customer-provided encryption keys (SSE-C).
- D. Use client-side encryption before sending the data to Amazon S3.

**Correct Answer:** *C*

*Community vote distribution*

B (95%)

5%



Question #132*Topic 1*

A developer has discovered that an application responsible for processing messages in an Amazon SQS queue is routinely falling behind. The application is capable of processing multiple messages in one invocation, but is only receiving one message at a time.
What should the developer do to increase the number of messages the application receives?

- A. Call the ChangeMessageVisibility API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.
- B. Call the AddPermission API to set MaxNumberOfMessages for the ReceiveMessage action to a value greater than the default of 1.
- C. Call the ReceiveMessage API to set MaxNumberOfMessages to a value greater than the default of 1.
- D. Call the SetQueueAttributes API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #133*Topic 1*

A developer is using an Amazon Kinesis Data Firehose delivery stream to store data in Amazon S3. Before storing the data in Amazon S3, the developer wants to enrich the data by combining the data with data from an Amazon DynamoDB table.
How can the developer implement the data enrichment?

- A. Create a Kinesis Data Firehose data transformation by using an Amazon EC2 instance.
- B. Configure the Kinesis Data Firehose delivery stream to send data to a Kinesis data stream. Enrich the data by using an AWS Lambda function.
- C. Configure the Kinesis Data Firehose delivery stream to store data in the DynamoDB table. Export the table to Amazon S3.
- D. Create a Kinesis Data Firehose data transformation by using an AWS Lambda function.

**Correct Answer:** *B*

*Community vote distribution*

D (85%)

Other



Question #134*Topic 1*

A company created an application to consume and process data. The application uses Amazon Simple Queue Service (Amazon SQS) and AWS Lambda functions. The application is currently working as expected, but it occasionally receives several messages that it cannot process properly. The company needs to clear these messages to prevent the queue from becoming blocked.
A developer must implement a solution that makes queue processing always operational. The solution must give the company the ability to defer the messages with errors and save these messages for further analysis.
What is the MOST operationally efficient solution that meets these requirements?

- A. Configure Amazon CloudWatch Logs to save the error messages to a separate log stream.
- B. Create a new SQS queue. Set the new queue as a dead-letter queue for the application queue. Configure the Maximum Receives setting.
- C. Change the SQS queue to a FIFO queue. Configure the message retention period to 0 seconds.
- D. Configure an Amazon CloudWatch alarm for Lambda function errors. Publish messages to an Amazon Simple Notification Service (Amazon SNS) topic to notify administrator users.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #135*Topic 1*

A company has a website that is developed in PHP and is launched using AWS Elastic Beanstalk. There is a new version of the website that needs to be deployed in the Elastic Beanstalk environment. The company cannot tolerate having the website offline if an update fails. Deployments must have minimal impact and rollback as soon as possible.
What deployment method should be used?

- A. All at once
- B. Rolling
- C. Snapshots
- D. Immutable

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #136*Topic 1*

An application running on multiple Amazon EC2 instances pulls messages from a standard Amazon SQS queue. A requirement for the application is that all messages must be encrypted at rest.
Developers are instructed to use methods that allow for centralized key management and minimize possible support requirements whenever possible.
Which of the following solutions supports these requirements?

- A. Encrypt individual messages by using client-side encryption with customer managed keys, then write to the SQS queue.
- B. Encrypt individual messages by using SQS Extended Client and the Amazon S3 encryption client.
- C. Create an SQS queue, and encrypt the queue by using server-side encryption with AWS KMS.
- D. Create an SQS queue, and encrypt the queue by using client-side encryption.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #137*Topic 1*

A company is running a web application that is using Amazon Cognito for authentication. The company does not want to use multi-factor authentication (MFA) for all the visitors every time, but the company's security team has concerns about compromised credentials. The development team needs to configure mandatory
MFA only when suspicious sign-in attempts are detected.
Which Amazon Cognito feature will meet these requirements?

- A. Short message service (SMS) text message MFA
- B. Advanced security metrics
- C. Time-based one-time password (TOTP) software token MFA
- D. Adaptive authentication

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #138*Topic 1*

A company has a two-tier application running on an Amazon EC2 server that handles all of its AWS based e-commerce activity. During peak times, the backend servers that process orders are overloaded with requests. This results in some orders failing to process. A developer needs to create a solution that will re-factor the application.
Which steps will allow for more flexibility during peak times, while still remaining cost-effective? (Choose two.)

- A. Increase the backend T2 EC2 instance sizes to x1 to handle the largest possible load throughout the year.
- B. Implement an Amazon SQS queue to decouple the front-end and backend servers.
- C. Use an Amazon SNS queue to decouple the front-end and backend servers.
- D. Migrate the backend servers to on-premises and pull from an Amazon SNS queue.
- E. Modify the backend servers to pull from an Amazon SQS queue.

**Correct Answer:** *AD*

*Community vote distribution*

BE (100%)



Question #139*Topic 1*

A developer is creating an AWS Lambda function that generates a new file each time it runs. Each new file must be checked into an AWS CodeCommit repository hosted in the same AWS account.
How should the developer accomplish this?

- A. When the Lambda function starts, use the Git CLI to clone the repository. Check the new file into the cloned repository and push the change.
- B. After the new file is created in Lambda, use cURL to invoke the CodeCommit API. Send the file to the repository.
- C. Use an AWS SDK to instantiate a CodeCommit client. Invoke the putjile method to add the file to the repository.
- D. Upload the new file to an Amazon S3 bucket. Create an AWS Step Function to accept S3 events. In the Step Function, add the new file to the repository.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #140*Topic 1*

A developer is designing an Amazon DynamoDB table for an application. The application will store user information that includes a unique identifier and an email address for each user. The application must be able to query the table by using either the unique identifier or the email address.
How should the developer design the DynamoDB table to meet these requirements?

- A. For the primary key of the table, specify the unique identifier as the partition key and specify the email address as the sort key.
- B. For the primary key of the table, specify the unique identifier as the partition key. Create a local secondary index (LSI) based on the email address.
- C. For the primary key of the table, specify the email address as the partition key and specify the unique identifier as the sort key.
- D. For the primary key of the table, specify the unique identifier as the partition key. Create a global secondary index (GSI) based on the email address.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #141*Topic 1*

A developer has an application that asynchronously invokes an AWS Lambda function. The developer wants to store messages that resulted in failed invocations of the Lambda function so that the application can retry the call later.
What should the developer do to accomplish this goal with the LEAST operational overhead?

- A. Set up Amazon CloudWatch Logs log groups to filter and store the messages in an Amazon S3 bucket. Import the messages in Lambda. Run the Lambda function again.
- B. Configure Amazon EventBridge (Amazon CloudWatch Events) to send the messages to Amazon Simple Notification Service (Amazon SNS) to initiate the Lambda function again.
- C. Implement a dead-letter queue for discarded messages. Set the dead-letter queue as an event source for the Lambda function.
- D. Send Amazon EventBridge (Amazon CloudWatch Events) events to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda function to pull messages from the SQS queue. Run the Lambda function again.

**Correct Answer:** *C*

*Community vote distribution*

C (87%)

13%



Question #142*Topic 1*

A developer is writing an application in Python. The application runs on AWS Lambda. The application generates a file and needs to upload this file to Amazon S3.
The developer must implement this upload functionality with the least possible change to the application code.
Which solution meets these requirements?

- A. Make an HTTP request directly to the S3 API to upload the file.
- B. Include the AWS SDK for Python in the Lambda function. Use the SDK to upload the file.
- C. Use the AWS SDK for Python that is installed in the Lambda environment to upload the file.
- D. Use the AWS CLI that is installed in the Lambda environment to upload the file.

**Correct Answer:** *C*

*Community vote distribution*

C (79%)

B (21%)



Question #143*Topic 1*

An application that is hosted on an Amazon EC2 instance needs access to files that are stored in an Amazon S3 bucket. The application lists the objects that are stored in the S3 bucket and displays a table to the user. During testing, a developer discovers that the application does not show any objects in the list.
What is the MOST secure way to resolve this issue?

- A. Update the IAM instance profile that is attached to the EC2 instance to include the S3:' permission for the S3 bucket.
- B. Update the IAM instance profile that is attached to the EC2 instance to include the S3:ListBucket permission for the S3 bucket.
- C. Update the developer's user permissions to include the S3:ListBucket permission for the S3 bucket.
- D. Update the S3 bucket policy by including the S3:ListBucket permission and by setting the Principal element to specify the account number of the EC2 instance.

**Correct Answer:** *B*

*Community vote distribution*

B (82%)

A (18%)



Question #144*Topic 1*

A developer needs to implement a cache to store data that an application frequently queries from an Amazon RDS for MySQL database. The data structures that will be cached include sets and sorted sets.
How should the developer implement the cache to achieve the LOWEST latency?

- A. Create an Amazon ElastiCache for Memcached instance. Serialize the data as JSON before caching the data.
- B. Create an Amazon ElastiCache for Redis instance. Use a Redis client library to cache the data.
- C. Create an Amazon DynamoDB table. Serialize the data as JSON before caching the data.
- D. Create an Amazon ElastiCache for Memcached instance. Use a Memcached client library to cache the data.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #145*Topic 1*

A developer creates an AWS Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. All message content must be encrypted in transit and at rest between Lambda and Amazon SNS.
A part of the Lambda execution role is as follows:
![img](https://www.examtopics.com/assets/media/exam-media/04238/0007400001.png)
Which combination of steps should the developer take to meet these requirements? (Choose two.)

- A. Enable server-side encryption on the SNS topic.
- B. Add a Deny statement to the Lambda execution role. Specify the SNS topic ARN as the resource. Specify "aws:SecureTransport": "trueג€ as the condition.
- C. Create a VPC endpoint for Amazon SNS.
- D. Add a StringEquals condition of "sns:Protocol": "https" to the Lambda execution role.
- E. Add a Deny statement to the Lambda execution role. Specify the SNS topic ARN as the resource. Specify "aws:SecureTransport": "false" as the condition.

**Correct Answer:** *AB*

*Community vote distribution*

AE (89%)

11%



Question #146*Topic 1*

A developer is using an AWS Key Management Service (AWS KMS) customer master key (CMK) with imported key material to encrypt data in Amazon S3. The developer accidentally deletes the key material of the CMK and is unable to decrypt the data.
How can the developer decrypt the data that was encrypted by the CMK?

- A. Request support from AWS to recover the deleted key material.
- B. Create a new CMK. Use the new CMK to decrypt the data.
- C. Use the CMK without the key material.
- D. Reimport the same key material to the CMK.

**Correct Answer:** *A*

*Community vote distribution*

D (100%)



Question #147*Topic 1*

A developer needs to launch a new Amazon EC2 instance by using the AWS CLI.
Which AWS CLI command should the developer use to meet this requirement?

- A. aws ec2 bundle-instance
- B. aws ec2 start-instances
- C. aws ec2 confirm-product-instance
- D. aws ec2 run instances

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #148*Topic 1*

A development team uses AWS Elastic Beanstalk for application deployment. The development team has configured the application version lifecycle policy to limit the number of application versions to 25. However, even with the application version lifecycle policy, the source bundle is deleted from the Amazon S3 source bucket.
What should the development team do in the Elastic Beanstalk application version lifecycle settings to retain the source code in the S3 bucket?

- A. Enable versioning on the source bundle S3 bucket.
- B. Disable the S3 bucket lifecycle policy to avoid the archiving of the source bundle.
- C. Update the Elastic Beanstalk application version lifecycle policy to increase the version quota to 50.
- D. Update the Elastic Beanstalk application version lifecycle policy to retain the source bundle in Amazon S3.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #149*Topic 1*

A development team is building a new application that will run on Amazon EC2 and use Amazon DynamoDB as a storage layer. The developers all have assigned IAM user accounts in the same IAM group. The developers currently can launch EC2 instances, and they need to be able to launch EC2 instances with an instance role allowing access to Amazon DynamoDB.

Which AWS IAM changes are needed when creating an instance role to provide this functionality?

- A. Create an IAM permission policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows DynamoDB to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:GetRole and iam:PassRole permissions for the role.
- B. Create an IAM permissions policy attached to the role that allows access to DynamoDAdd a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:PassRole permission for the role.
- C. Create an IAM permission policy attached to the role that allows access to Amazon EC2. Add a trust policy to the role that allows DynamoDB to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:PassRole permission for the role.
- D. Create an IAM permissions policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:GetRole permission for the role.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #150*Topic 1*

A banking application processes thousands of transactions each second. Each transaction payload must have end-to-end encryption. The application encrypts each transaction locally by using the AWS Key Management Service (AWS KMS) GenerateDataKey operation. A developer is testing the application and receives a ThrottlingException error.

Which actions are best practices to resolve this error? (Choose two.)

- A. Use the LocalCryptoMatenalsCache feature of the AWS Encryption SDK encryption library.
- B. Call the AWS KMS Encrypt operation directly to allow AWS KMS to encrypt the data.
- C. Create a case in the AWS Support Center to increase the quota for the account.
- D. Use Amazon Simple Queue Service (Amazon SQS) to queue the requests to AWS KMS.
- E. Switch to an AWS KMS custom key store.

**Correct Answer:** *CE*

*Community vote distribution*

AC (75%)

C (25%)



Question #151*Topic 1*

A developer has code that is stored in an Amazon S3 bucket. The code must be deployed as an AWS Lambda function across multiple accounts in the same AWS Region as the S3 bucket. An AWS CloudFormation template that runs for each account will deploy the Lambda function.
What is the MOST secure way to allow CloudFormation to access the Lambda code in the S3 bucket?

- A. Grant the CloudFormation service role the S3 ListBucket and GetObject permissions. Add a bucket policy to Amazon S3 with the pnncipal of "AWS": [account numbers].
- B. Grant the CloudFormation service role the S3 GetObject permission. Add a bucket policy to Amazon S3 with the principal of "*".
- C. Use a service-based link to grant the Lambda function the S3 ListBucket and GetObject permissions by explicitly adding the S3 bucket’s account number in the resource.
- D. Use a service-based link to grant the Lambda function the S3 GetObject permission. Add a resource of "*" to allow access to the S3 bucket.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #152*Topic 1*

A company is migrating a legacy application to a serverless application on AWS. The legacy application consists of a set of web services that are exposed by an Amazon API Gateway API. A developer needs to replace the existing implementation of web services with AWS Lambda functions. The developer needs to test a new version of the API that uses the functions in production. The developer must minimize the impact of the testing on the application's users.

Which solution will meet these requirements?

- A. Create a beta stage for the new version of the API. Send the updated endpoint to the users.
- B. Create a development stage for the new version of the API. Use a canary deployment.
- C. Create a development stage for the new version of the API. Promote a canary release.
- D. Create a deployment stage. Enable mutual TLS for the new version of the API.

**Correct Answer:** *D*

*Community vote distribution*

B (93%)

7%



Question #153*Topic 1*

A developer needs to modify an application architecture to meet new functional requirements. Application data is stored in Amazon DynamoDB and processed for analysis in a nightly batch. The system analysts do not want to wait until the next day to view the processed data and have asked to have it available in near-real time.

Which application architecture pattern would enable the data to be processed as it is received?

- A. Event driven
- B. Client-server driven
- C. Fan-out driven
- D. Schedule driven

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #154*Topic 1*

A company is migrating a web application from on premises to AWS. The company needs to move session storage from the application code to a shared service as part of the migration. The session storage data must be encrypted at rest.

Which AWS services meet these requirements? (Choose two.)

- A. Amazon ElastiCache for Redis
- B. Amazon ElastiCache for Memcached
- C. Amazon CloudWatch
- D. AWS CloudTrail
- E. Amazon DynamoDB

**Correct Answer:** *BD*

*Community vote distribution*

AE (70%)

AB (15%)

Other



Question #155*Topic 1*

A gaming application stores scores for players in an Amazon DynamoDB table that has four attributes user_id, user_name, user_score and user_rank. The users are allowed to update their names only. A user is authenticated by web identity federation.

Which set of conditions should be added in the policy attached to the role for the dynamodb:PutItem API call?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image1.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image2.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image3.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image4.png)

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #156*Topic 1*

A company is hosting a workshop for external users and wants to share the reference documents with the external users for 7 days. The company stores the reference documents in an Amazon S3 bucket that the company owns.

What is the MOST secure way to share the documents with the external users?

- A. Use S3 presigned URLs to share the documents with the external users. Set an expiration time of 7 days.
- B. Move the documents to an Amazon WorkDocs folder Share the links of the WorkDocs folder with the external users.
- C. Create temporary IAM users that have read-only access to the S3 bucket. Share the access keys with the external users. Expire the credentials after 7 days.
- D. Create a role that has read-only access to the S3 bucket. Share the Amazon Resource Name (ARN) of this role with the external users.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #157*Topic 1*

A developer is storing many objects in a single Amazon S3 bucket. The developer needs to optimize the S3 bucket for high request rates.

How should the developer store the objects to meet this requirement?

- A. Store the objects by using S3 Intelligent-Tiering.
- B. Store the objects at the root of the S3 bucket.
- C. Store the objects by using object key names distributed across multiple prefixes.
- D. Store each object with an object tag named "prefix" that contains a unique value.

**Correct Answer:** *A*

*Community vote distribution*

C (88%)

13%



Question #158*Topic 1*

A company has a serverless application that uses AWS Lambda functions and AWS Systems Manager parameters to store configuration data. The company moves the Lambda functions inside the VPC and into private subnets. The Lambda functions are now producing errors in their attempts to access Systems Manager parameters.

Which solution will allow the Lambda functions to access Systems Manager parameters inside the VPC?

- A. Configure security groups to allow access to Systems Manager.
- B. Create an interface VPC endpoint for Systems Manager.
- C. Use an Internet gateway from inside the VPC.
- D. Create a gateway VPC endpoint for Systems Manager.

**Correct Answer:** *D*

*Community vote distribution*

B (88%)

12%



Question #159*Topic 1*

A research company has a website that is used once each day to perform scientific calculations based on inputs that are submitted through a webpage. The calculations are CPU intensive. An AWS Lambda function performs the calculations once each day. Users occasionally receive errors because of Lambda function timeouts.

Which change will reduce the Lambda function's runtime duration?

- A. Configure Lambda to run the function on an Amazon EC2 burstable instance type.
- B. Configure Lambda to run the function on an Amazon EC2 instance type that is recommended for high performance computing (HPC) workloads.
- C. Configure Lambda to run the function with a larger reserved concurrency value.
- D. Configure Lambda to run the function with a larger memory value.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #160*Topic 1*

A developer is creating an application. New users of the application must be able to create an account and register by using their own social media accounts.

Which AWS service or resource should the developer use to meet these requirements?

- A. IAM role
- B. Amazon Cognito identity pools
- C. Amazon Cognito user pools
- D. AWS Directory Service

**Correct Answer:** *C*

*Community vote distribution*

C (88%)

13%



Question #161*Topic 1*

A developer wants to use AWS CodeDeploy to deploy an Amazon Elastic Container Service (Amazon ECS) service.

What are the MINIMUM properties required in the 'resources' section of the AppSpec file for CodeDeploy to deploy the ECS service successfully?

- A. name, alias currentversion, and targetversion
- B. TaskDefinition, ContainerName, and PlatformVersion
- C. TaskDefimtion, ContainerName, and ContainerPort
- D. name, currentversion, NetworkConfiguration, and PlatformVersion

**Correct Answer:** *A*

*Community vote distribution*

C (85%)

A (15%)



Question #162*Topic 1*

A company has deployed a single-page application on AWS. The application stores assets in an Amazon S3 bucket. The application has an Amazon CloudFront distribution that is configured with the S3 bucket as the origin. Amazon API Gateway APIs access AWS Lambda functions that store information in an Amazon DynamoDB table. The application ingests a payload that includes 20 fields of sensitive data.

Which combination of steps should a developer take to protect the sensitive data through its entire lifecycle in AWS? (Choose two.)

- A. Create a Lambda@Edge function to encrypt data when CloudFront processes a client request. Configure the distribution to invoke the Lambda@Edge function when the origin request event occurs.
- B. Generate an AWS Key Management Service (AWS KMS) customer managed key that Lambda@Edge can use.
- C. Create an SSL/TLS certificate in AWS Certificate Manager (ACM). Associate the certificate with the Network Load Balancer.
- D. Set up a Network Load Balancer for API Gateway private integrations.
- E. Store the data in the S3 bucket by using server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Transfer the encrypted data from the S3 bucket to the DynamoDB table.

**Correct Answer:** *BD*

*Community vote distribution*

AB (62%)

AE (23%)

BE (15%)



Question #163*Topic 1*

A developer is writing an application that stores data in an Amazon DynamoDB table by using the Putltem API operation. The table has a partition key of streamID and has a sort key of seqID. The developer needs to make sure that the Putltem invocation does not overwrite the existing partition key and sort key.

Which condition expression will maintain the uniqueness of the partition key and the sort key?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image5.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image6.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image7.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image8.png)

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #164*Topic 1*

A developer has created an AWS Lambda function that is written in Python. The Lambda function reads data from objects in Amazon S3 and writes data to an Amazon DynamoDB table.

The function is successfully invoked from an S3 event notification when an object is created. However, the function fails when it attempts to write to the DynamoDB table.

What is the MOST likely cause of this issue?

- A. The Lambda function's concurrency limit has been exceeded.
- B. The DynamoDB table requires a global secondary index (GSI) to support writes.
- C. The Lambda function does not have IAM permissions to write to DynamoDB.
- D. The DynamoDB table is not running in the same Availability Zone as the Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #165*Topic 1*

A development team wants to build a continuous integration/continuous delivery (CI/CD) pipeline. The team is using AWS CodePipeline to automate the code build and deployment. The team wants to store the program code to prepare for the CI/CD pipeline.

Which AWS service should the team use to store the program code?

- A. AWS CodeDeploy
- B. AWS CodeArtifact
- C. AWS CodeCommit
- D. Amazon CodeGuru

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #166*Topic 1*

A developer supports an application that accesses data in an Amazon DynamoDB table. One of the item attributes is expiration Date in the timestamp format. The application uses this attribute to find items, archive them, and remove them from the table based on the timestamp value.

The application will be decommissioned soon, and the developer must find another way to implement this functionality. The developer needs a solution that will require the least amount of code to write.

Which solution will meet these requirements?

- A. Enable TTL on the expirationDate attribute in the table. Create a DynamoDB stream. Create an AWS Lambda function to process the deleted items. Create a DynamoDB trigger for the Lambda function.
- B. Create two AWS Lambda functions: one to delete the items and one to process the items. Create a DynamoDB stream. Use the DeleteItem API operation to delete the items based on the expirationDate attribute. Use the GetRecords API operation to get the items from the DynamoDB stream and process them.
- C. Create two AWS Lambda functions: one to delete the items and one to process the items. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled rule to invoke the Lambda functions. Use the DeleteItem API operation to delete the items based on the expirationDate attribute. Use the GetRecords API operation to get the items from the DynamoDB table and process them.
- D. Enable TTL on the expirationDate attribute in the table. Specify an Amazon Simple Queue Service (Amazon SQS) dead-letter queue as the target to delete the items. Create an AWS Lambda function to process the items.

**Correct Answer:** *A*

*Community vote distribution*

A (91%)

9%



Question #167*Topic 1*

A company has developed a new serverless application using AWS Lambda functions that will be deployed using the AWS Serverless Application Model (AWS SAM) CLI.

Which step should the developer complete prior to deploying the application?

- A. Compress the application to a .zip file and upload it into AWS Lambda.
- B. Test the new AWS Lambda function by first tracing it in AWS X-Ray.
- C. Bundle the serverless application using a SAM package.
- D. Create the application environment using the eb create my-env command.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #168*Topic 1*

A developer is working on an ecommerce website. The developer wants to review server logs without logging in to each of the application servers individually. The website runs on multiple Amazon EC2 instances, is written in Python, and needs to be highly available.

How can the developer update the application to meet these requirements with MINIMUM changes?

- A. Rewrite the application to be cloud native and to run on AWS Lambda, where the logs can be reviewed in Amazon CloudWatch.
- B. Set up centralized logging by using Amazon OpenSearch Service (Amazon Elasticsearch Service), Logstash, and OpenSearch Dashboards (Kibana).
- C. Scale down the application to one larger EC2 instance where only one instance is recording logs.
- D. Install the unified Amazon CloudWatch agent on the EC2 instances. Configure the agent to push the application logs to CloudWatch.

**Correct Answer:** *B*

*Community vote distribution*

D (77%)

B (23%)



Question #169*Topic 1*

A company needs an event-management platform to accept registrations for an upcoming event. The platform must perform a single invocation of an existing AWS Lambda function 10 minutes after a user completes a new account registration.

Which solution will meet these requirements?

- A. Add an item to an Amazon DynamoDB table. Set the item TTL to 10 minutes. Invoke the Lambda function when the TTL expires.
- B. Create an ongoing Amazon EventBridge (Amazon CloudWatch Events) rule with a rate expression of 600 seconds. Create a rule/target to invoke the Lambda function.
- C. Send a message to an Amazon Simple Queue Service (Amazon SQS) delay queue. Set the queue to 600 seconds. Configure the Lambda function with the queue as an event source.
- D. Put a record in Amazon Kinesis Data Streams. Configure the Lambda function to use the data stream as an event source. Define the shard iterator AT_TIMESTAMP setting to 10 minutes.

**Correct Answer:** *B*

*Community vote distribution*

C (70%)

B (30%)



Question #170*Topic 1*

How would a developer notify users when a new item is written to a DynamoDB table without affecting the provisioned throughput?

- A. Set up a DynamoDB stream to trigger a Lambda function that sends an SNS notification to users.
- B. Schedule an Amazon CloudWatch event to regularly trigger a Lambda function that scans the DynamoDB table.
- C. Run a polling application that queries the DynamoDB table at one-second intervals and send SNS notification to users.
- D. Embed a Lambda notification function in DynamoDB and configure DynamoDB to trigger the embedded Lambda function when changes are made.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #171*Topic 1*

A developer is writing a web application that is deployed on Amazon EC2 instances behind an internet-facing Application Load Balancer (ALB). The developer must add an Amazon CloudFront distribution in front of the ALB. The developer also must ensure that customer data from outside the VPC is encrypted in transit.

Which combination of CloudFront configuration settings should the developer use to meet these requirements? (Choose two.)

- A. Restrict viewer access by using signed URLs.
- B. Set the Origin Protocol Policy setting to Match Viewer.
- C. Enable field-level encryption.
- D. Enable automatic object compression.
- E. Set the Viewer Protocol Policy setting to Redirect HTTP to HTTPS.

**Correct Answer:** *AE*

*Community vote distribution*

CE (51%)

BE (49%)



Question #172*Topic 1*

A developer is writing a web application that must share secure documents with end users. The documents are stored in a private Amazon S3 bucket. The application must allow only authenticated users to download specific documents when requested, and only for a duration of 15 minutes.

How can the developer meet these requirements?

- A. Copy the documents to a separate S3 bucket that has a lifecycle policy for deletion after 15 minutes.
- B. Create a presigned S3 URL using the AWS SDK with an expiration time of 15 minutes.
- C. Use server-side encryption with AWS KMS managed keys (SSE-KMS) and download the documents using HTTPS.
- D. Modify the S3 bucket policy to only allow specific users to download the documents. Revert the change after 15 minutes.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #173*Topic 1*

A company wants to migrate an existing web application to AWS. The application consists of two web servers and a MySQL database.

The company wants the application to automatically scale in response to demand. The company also wants to reduce its operational overhead for database backups and maintenance. The company needs the ability to deploy multiple versions of the application concurrently.

What is the MOST operationally efficient solution that meets these requirements?

- A. Deploy the application to AWS Elastic Beanstalk. Migrate the database to an Amazon RDS Multi-AZ DB instance.
- B. Create an Amazon Machine Image (AMI) that contains the application code. Create an Auto Scaling group that is based on the AMI. Integrate the Auto Scaling group with an Application Load Balancer for the web servers. Migrate the database to a MySQL instance that runs on an Amazon EC2 instance.
- C. Deploy the application to AWS Elastic Beanstalk. Migrate the database to a MySQL instance that runs on an Amazon EC2 instance.
- D. Create an Amazon Machine Image (AMI) that contains the application code. Create an Auto Scaling group that is based on the AMI. Integrate the Auto Scaling group with an Application Load Balancer for the web servers. Migrate the database to an Amazon RDS Multi-AZ DB instance.

**Correct Answer:** *A*

*Community vote distribution*

A (80%)

D (20%)



Question #174*Topic 1*

A financial company must store original customer records for 10 years for legal reasons. A complete record contains personally identifiable information (PII). According to local regulations. PII is available to only certain people in the company and must not be shared with third parties. The company needs to make the records available to third-party organizations for statistical analysis without sharing the PII.

A developer wants to store the original immutable record in Amazon S3. Depending on who accesses the S3 document, the document should be returned as is or with all the PII removed. The developer has written an AWS Lambda function to remove the PII from the document. The function is named removePii.

What should the developer do so that the company can meet the PII requirements while maintaining only one copy of the document?

- A. Set up an S3 event notification that invokes the removePii function when an S3 GET request is made. Call Amazon S3 by using a GET request to access the object without PII.
- B. Set up an S3 event notification that invokes the removePii function when an S3 PUT request is made. Call Amazon S3 by using a PUT request to access the object without PII.
- C. Create an S3 Object Lambda access point from the S3 console. Select the removePii function. Use S3 Access Points to access the object without PII.
- D. Create an S3 access point from the S3 console. Use the access point name to call the GetObjectLegalHold S3 API function. Pass in the removePii function name to access the object without PII.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #175*Topic 1*

A developer is designing an AWS Lambda function that creates temporary files that are less than 10 MB during invocation. The temporary files will be accessed and modified multiple times during invocation. The developer has no need to save or retrieve these files in the future.

Where should the temporary files be stored?

- A. the /tmp directory
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon S3

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #176*Topic 1*

A developer is building a web and mobile application for two types of users: regular users and guest users. Regular users are required to log in, but guest users do not log in. Users should see only their data, regardless of whether they authenticate. Users need AWS credentials before they can access AWS resources.

What is the MOST secure solution that the developer can implement to allow access for guest users?

- A. Use an Amazon Cognito credentials provider to issue temporary credentials that are linked to an unauthenticated role that has access to the required resources.
- B. Set up an IAM user that has permissions to the required resources. Hardcode the IAM credentials in the web and mobile application.
- C. Generate temporary keys that are stored in AWS Key Management Service (AWS KMS). Use the temporary keys to access the required resources.
- D. Generate temporary credentials. Store the temporary credentials in AWS Secrets Manager. Use the temporary credentials to access the required resources.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #177*Topic 1*

A developer is using AWS Elastic Beanstalk to create a deployment for a web application that supports ecommerce. According to a company requirement. Amazon EC2 instances that host one version of the application must be retired when the deployment of a new version is complete.

Which deployment methods can the developer use to meet this requirement? (Choose two.)

- A. All-al-once deployment
- B. In-place deployment
- C. Rolling deployment without an additional batch
- D. Blue/green deployment
- E. Immutable deployment

**Correct Answer:** *CE*

*Community vote distribution*

DE (100%)



Question #178*Topic 1*

A company caches session information for a web application in an Amazon DynamoDB table. The company wants an automated way to delete old items from the table.

What is the simplest way to do this?

- A. Write a script that deletes old records; schedule the script as a cron job on an Amazon EC2 instance.
- B. Add an attribute with the expiration time; enable the Time To Live feature based on that attribute.
- C. Each day, create a new table to hold session data; delete the previous day’s table.
- D. Add an attribute with the expiration time; name the attribute ItemExpiration.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #179*Topic 1*

A company's new mobile app uses Amazon API Gateway. As the development team completes a new release of its APIs, a developer must safely and transparently roll out the API change.

What is the SIMPLEST solution for the developer to use for rolling out the new API version to a limited number of users through API Gateway?

- A. Create a new API in API Gateway. Direct a portion of the traffic to the new API using an Amazon Route 53 weighted routing policy.
- B. Validate the new API version and promote it to production during the window of lowest expected utilization.
- C. Implement an Amazon CloudWatch alarm to trigger a rollback if the observed HTTP 500 status code rate exceeds a predetermined threshold.
- D. Use the canary release deployment option in API Gateway. Direct a percentage of the API traffic using the canarySettings setting.

**Correct Answer:** *D*

*Community vote distribution*

D (86%)

14%



Question #180*Topic 1*

A developer is designing a serverless application that customers use to select seats for a concert venue. Customers send the ticket requests to an Amazon API Gateway API with an AWS Lambda function that acknowledges the order and generates an order ID. The application includes two additional Lambda functions: one for inventory management and one for payment processing. These two Lambda functions run in parallel and write the order to an Amazon Dynamo DB table.

The application must provide seats to customers according to the following requirements. If a seat is accidently sold more than once, the first order that the application received must get the seat. In these cases, the application must process the payment for only the first order. However, if the first order is rejected during payment processing, the second order must get the seat. In these cases, the application must process the payment for the second order.

Which solution will meet these requirements?

- A. Send the order ID to an Amazon Simple Notification Service (Amazon SNS) FIFO topic that fans out to one Amazon Simple Queue Service (Amazon SQS) FIFO queue for inventory management and another SQS FIFO queue for payment processing.
- B. Change the Lambda function that generates the order ID to initiate the Lambda function for inventory management. Then initiate the Lambda function for payment processing.
- C. Send the order ID to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the Lambda functions for inventory management and payment processing to the topic.
- D. Deliver the order ID to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda functions for inventory management and payment processing to poll the queue.

**Correct Answer:** *A*

*Community vote distribution*

A (78%)

D (22%)



Question #181*Topic 1*

A developer wants to implement authentication using Amazon Cognito user pools for an existing API in Amazon API Gateway. After creating the Amazon Cognito user pool, the developer tests the GET request to the API. Unauthenticated requests to the API return a 200 OK status response.

Which combination of additional steps are required to complete the authentication implementation? (Choose two.)

- A. Create an Amazon Cognito authorizer in API Gateway and specify the Amazon Cognito user pool.
- B. Create an AWS Lambda authorizer in API Gateway and specify the Amazon Cognito user pool.
- C. Specify the authorizer in the GET method section of API Gateway and redeploy the API
- D. Use Amazon Cognito user pools to make and authenticate the request to API Gateway.
- E. Create an Amazon Cognito authorizer in API Gateway and specify the Amazon Cognito identity pool.

**Correct Answer:** *BD*

*Community vote distribution*

AC (100%)



Question #182*Topic 1*

A developer is creating a command line script to launch an Amazon EC2 instance at a preset time with a cron job. The developer will provide a user data script to start a task and then terminate the instance. The task cannot be interrupted and must run to completion.

How should the developer launch the EC2 instance?

- A. Use the ec2 start-instances command.
- B. Use the ec2 request-spot-instances command.
- C. Use the ec2 run-instances command.
- D. Use the ec2 purchase-scheduled-instances command.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #183*Topic 1*

A developer is creating an Amazon DynamoDB table. The entire table must be encrypted at rest.

Which solution will meet this requirement MOST cost-effectively?

- A. Create the DynamoDB table by using default encryption settings.
- B. Encrypt the data by using the DynamoDB Encryption Client.
- C. During creation of the DynamoDB table, configure encryption at rest with an AWS Key Management Service (AWS KMS) AWS managed key.
- D. During creation of the DynamoDB table, configure encryption at rest with an AWS Key Management Service (AWS KMS) customer managed key.

**Correct Answer:** *A*

*Community vote distribution*

A (75%)

C (17%)

8%



Question #184*Topic 1*

A company configures an Amazon S3 bucket to deliver S3 object events to Amazon EventBridge (Amazon CloudWatch Events). An EventBridge rule invokes an AWS Lambda function for each object event that is received from the S3 bucket.

A developer is working on a new version of the Lambda function. To ensure that the new Lambda function works as expected, the developer must run a repeatable test that uses realistic S3 bucket object events. The developer must minimize the amount of code and infrastructure that are required to support the test.

Which solution will meet these requirements?

- A. Create another S3 bucket that can deliver object events to EventBridge. Add another EventBridge rule to deliver data events from the new S3 bucket to the new Lambda function Develop a tool to update objects in the new S3 bucket to produce the test S3 object events.
- B. Add the new Lambda function as an additional target of the existing EventBridge rule. Deliver the S3 object events to the existing Lambda function and the new Lambda function simultaneously.
- C. Use EventBridge to archive and replay production S3 object events. Set up a new EventBridge rule to deliver replayed S3 object events to the new Lambda function.
- D. Develop a tool that uses the EventBridge PutEvents API operation to publish aws.s3 data events. Add a new EventBridge rule that delivers the aws.s3 events to the new Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

C (73%)

B (27%)



Question #185*Topic 1*

A developer has built an application running on AWS Lambda using AWS Serverless Application Model (AWS SAM).

What is the correct sequence of steps to successfully deploy the application?

- A. 1. Build the SAM template in Amazon EC2.
  2. Package the SAM template to Amazon EBS storage.
  3. Deploy the SAM template from Amazon EBS.
- B. 1. Build the SAM template locally.
  2. Package the SAM template onto Amazon S3.
  3. Deploy the SAM template from Amazon S3.
- C. 1. Build the SAM template locally.
  2. Deploy the SAM template from Amazon S3.
  3. Package the SAM template for use.
- D. 1. Build the SAM template locally.
  2. Package the SAM template from AWS CodeCommit.
  3. Deploy the SAM template to CodeCommit.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #186*Topic 1*

A team of developers is using an AWS CodePipeline pipeline as a continuous integration and continuous delivery (CI/CD) mechanism for a web application. A developer has written unit tests to programmatically test the functionality of the application code. The unit tests produce a test report that shows the results of each individual check. The developer now wants to run these tests automatically during the CI/CD process.

Which solution will meet this requirement with the LEAST operational effort?

- A. Write a Git pre-commit hook that runs the tests before every commit. Ensure that each developer who is working on the project has the pre-commit hook installed locally. Review the test report and resolve any issues before pushing changes to AWS CodeCommit.
- B. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage after the stage that deploys code revisions to the test environment. Write a buildspec that fails the CodeBuild stage if any test does not pass. Use the test reports feature of CodeBuild to integrate the report with the CodeBuild console. View the test results in CodeBuild. Resolve any issues.
- C. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage before the stage that deploys code revisions to the test environment. Write a buildspec that fails the CodeBuild stage if any test does not pass. Use the test reports feature of CodeBuild to integrate the report with the CodeBuild console. View the test results in CodeBuild. Resolve any issues.
- D. Add a new stage to the pipeline. Use Jenkins as the provider. Configure CodePipeline to use Jenkins to run the unit tests. Write a Jenkinsfile that fails the stage if any test does not pass. Use the test report plugin for Jenkins to integrate the report with the Jenkins dashboard. View the test results in Jenkins. Resolve any issues.

**Correct Answer:** *B*

*Community vote distribution*

C (80%)

B (20%)



Question #187*Topic 1*

A game stores user game data in an Amazon DynamoDB table. Individual users should not have access to other users' game data.

How can this be accomplished?

- A. Encrypt the game data with individual user keys.
- B. Restrict access to specific items based on certain primary key values.
- C. Stage data in SQS queues to inject metadata before accessing DynamoDB.
- D. Read records from DynamoDB and discard irrelevant data client-side.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #188*Topic 1*

A developer is creating an application that will give users the ability to store photos from their cellphones in the cloud. The application needs to support tens of thousands of users. The application uses an Amazon API Gateway REST API that is integrated with AWS Lambda functions to process the photos. The application stores details about the photos in Amazon DynamoDB.

Users need to create an account to access the application. In the application, users must be able to upload photos and retrieve previously uploaded photos. The photos will range in size from 300 KB to 5 MB.

Which solution will meet these requirements with the LEAST operational overhead?

- A. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control access to the API. Use the Lambda function to store the photos and details in the DynamoDB table. Retrieve previously uploaded photos directly from the DynamoDB table.
- B. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control access to the API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.
- C. Create an IAM user for each user of the application during the sign-up process. Use IAM authentication to access the API Gateway API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.
- D. Create a user’s table in DynamoDB. Use the table to manage user accounts. Create a Lambda authorizer that validates user credentials against the users table. Integrate the Lambda authorizer with API Gateway to control access to the API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #189*Topic 1*

A developer is building a three-tier web application that should be able to handle a minimum of 5000 requests per minute. Requirements state that the web tier should be completely stateless while the application maintains session state for the users.

How can session data be externalized, keeping latency at the LOWEST possible value?

- A. Create an Amazon RDS instance, then implement session handling at the application level to leverage a database inside the RDS database instance for session data storage.
- B. Implement a shared file system solution across the underlying Amazon EC2 instances, then implement session handling at the application level to leverage the shared file system for session data storage.
- C. Create an Amazon ElastiCache Memcached cluster, then implement session handling at the application level to leverage the cluster for session data storage.
- D. Create an Amazon DynamoDB table, then implement session handling at the application level to leverage the table for session data storage.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #190*Topic 1*

A company is using an Amazon API Gateway REST API endpoint as a webhook to publish events from an on-premises source control management (SCM) system to Amazon EventBridge (Amazon CloudWatch Events). The company has configured an EventBridge (CloudWatch Events) rule to listen for the events and to control application deployment in a central AWS account. The company needs to receive the same events across multiple receiver AWS accounts.

How can a developer meet these requirements without changing the configuration of the SCM system?

- A. Deploy the API Gateway REST API to all the required AWS accounts. Use the same custom domain name for all the gateway endpoints so that a single SCM webhook can be used for all events from all accounts.
- B. Deploy the API Gateway REST API to all the receiver AWS accounts. Create as many SCM webhooks as the number of AWS accounts.
- C. Grant permission to the central AWS account for EventBridge (CloudWatch Events)to access the receiver AWS accounts. Add an EventBridge (CloudWatch Events) event bus on the receiver AWS accounts as the targets to the existing EventBridge (CloudWatch Events) rule.
- D. Convert the API Gateway type from REST API to HTTP API.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #191*Topic 1*

A company is developing an application that will be accessed through the Amazon API Gateway REST API. Registered users should be the only ones who can access certain resources of this API. The token being used should expire automatically and needs to be refreshed periodically.

How can a developer meet these requirements?

- A. Create an Amazon Cognito identity pool, configure the Amazon Cognito Authorizer in API Gateway, and use the temporary credentials generated by the identity pool.
- B. Create and maintain a database record for each user with a corresponding token and use an AWS Lambda authorizer in API Gateway.
- C. Create an Amazon Cognito user pool, configure the Cognito Authorizer in API Gateway, and use the identity or access token.
- D. Create an IAM user for each API user, attach an invoke permissions policy to the API, and use an IAM authorizer in API Gateway.

**Correct Answer:** *A*

*Community vote distribution*

C (67%)

A (33%)



Question #192*Topic 1*

A developer maintains a critical business application that uses Amazon DynamoDB as the primary data store. The DynamoDB table contains millions of documents and receives 30-60 requests each minute. The developer needs to perform processing in near-real time on the documents when they are added or updated in the DynamoDB table.

How can the developer implement this feature with the LEAST amount of change to the existing application code?

- A. Set up a cron job on an Amazon EC2 instance. Run a script every hour to query the table for changes and process the documents.
- B. Enable a DynamoDB stream on the table. Invoke an AWS Lambda function to process the documents.
- C. Update the application to send a PutEvents request to Amazon EventBridge (Amazon CloudWatch Events). Create an EventBridge (CloudWatch Events) rule to invoke an AWS Lambda function to process the documents.
- D. Update the application to synchronously process the documents directly after the DynamoDB write.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #193*Topic 1*

A web application is using Amazon Kinesis Streams for clickstream data that may not be consumed for up to 12 hours.

How can the developer implement encryption at rest for data within the Kinesis Streams?

- A. Enable SSL connections to Kinesis.
- B. Use Amazon Kinesis Consumer Library.
- C. Encrypt the data once it is at rest with a Lambda function.
- D. Enable server-side encryption in Kinesis Streams.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #194*Topic 1*

A company has copies of customer ID cards in its on-premises system. The company wants the on-premises system to automatically upload the ID card images directly to an Amazon S3 bucket.

What is the MOST secure way to meet this requirement?

- A. Use the AWS SDK to upload the images to the S3 bucket directly from the on-premises system. Create an IAM user. Attach the user to a policy that includes the s3:PutObject permission. Configure the on-premises system to use the generated access key and secrets to authenticate access to AWS.
- B. Use the AWS SDK to upload the images to the S3 bucket directly from the on-premises system. Create an IAM role. Attach the role to a policy that includes the s3:PutObject permission. Configure the on-premises system to use the AssumeRole functionality in the AWS SDK to authenticate access to AWS.
- C. Use S3 presigned URLs to upload the images to the S3 bucket directly from the on-premises system. Generate the presigned URLs by using an AWS Lambda function and a private REST API endpoint. Create an AWS Site-to-Site VPN connection between the on-premises network and the VPC to allow the on-premises system to call the API to receive the presigned URLs.
- D. Use S3 presigned URLs to upload the images to the S3 bucket directly from the on-premises system. Generate the presigned URLs by using an AWS Lambda function and a public REST API endpoint. Secure the API by adding an Amazon Cognito authorizer. Create a user for the on-premises system to use for authentication to call the API to receive the presigned URLs.

**Correct Answer:** *A*

*Community vote distribution*

C (41%)

B (31%)

A (21%)

7%



Question #195*Topic 1*

A developer is building a highly secure healthcare application using serverless components. This application requires writing temporary data to /tmp storage on an AWS Lambda function.

How should the developer encrypt this data?

- A. Enable Amazon EBS volume encryption with an AWS KMS key in the Lambda function configuration so that all storage attached to the Lambda function is encrypted.
- B. Set up the Lambda function with a role and key policy to access an AWS KMS key. Use the key to generate a data key used to encrypt all data prior to writing to /tmp storage.
- C. Use OpenSSL to generate a symmetric encryption key on Lambda startup. Use this key to encrypt the data prior to writing to /tmp.
- D. Use an on-premises hardware security module (HSM) to generate keys, where the Lambda function requests a data key from the HSM and uses that to encrypt data on all requests to the function.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #196*Topic 1*

A developer creates a web service that performs many critical activities. The web service code uses an AWS SDK to publish noncritical metrics to Amazon CloudWatch by using the PutMetricData API. The web service must return results to the caller as quickly as possible. The response data from the PutMetricData API is not necessary to create the web service response.

Which solution will MOST improve the response time of the web service?

- A. Upgrade to the latest version of the AWS SDK.
- B. Call the PutMetricData API in a background thread.
- C. Use the AWS SDK to perform a synchronous call to an AWS Lambda function. Call the PutMetricData API within the Lambda function.
- D. Send metric data to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an AWS Lambda function with the queue as the event source. Call the PutMetricData API within the Lambda function.

**Correct Answer:** *B*

*Community vote distribution*

D (68%)

B (23%)

9%



Question #197*Topic 1*

A developer is creating a Ruby application and needs to automate the deployment, scaling, and management of an environment without requiring knowledge of the underlying infrastructure.

Which service would best accomplish this task?

- A. AWS CodeDeploy
- B. AWS CloudFormation
- C. AWS OpsWorks
- D. AWS Elastic Beanstalk

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #198*Topic 1*

A company has an Amazon S3 bucket that contains sensitive data. The data must be encrypted in transit and at rest. The company encrypts the data in the S3 bucket by using an AWS Key Management Service (AWS KMS) key. A developer needs to grant several other AWS accounts the permission to use the S3 GetObject operation to retrieve the data from the S3 bucket.

How can the developer enforce that all requests to retrieve the data provide encryption in transit?

- A. Define a resource-based policy on the S3 bucket to deny access when a request meets the condition "aws:SecureTransport": "false".
- B. Define a resource-based policy on the S3 bucket to allow access when a request meets the condition "aws:SecureTransport": "false".
- C. Define a role-based policy on the other accounts' roles to deny access when a request meets the condition of "aws:SecureTransport": "false".
- D. Define a resource-based policy on the KMS key to deny access when a request meets the condition of "aws:SecureTransport": "false".

**Correct Answer:** *C*

*Community vote distribution*

A (89%)

11%



Question #199*Topic 1*

A developer is deploying an application in the AWS Cloud by using AWS CloudFormation. The application will connect to an existing Amazon RDS database. The hostname of the RDS database is stored in AWS Systems Manager Parameter Store as a plaintext value. The developer needs to incorporate the database hostname into the CloudFormation template to initialize the application when the stack is created.

How should the developer reference the parameter that contains the database hostname?

- A. Use the ssm dynamic reference.
- B. Use the Ref intrinsic function.
- C. Use the Fn::ImportValue intrinsic function.
- D. Use the ssm-secure dynamic reference.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #200*Topic 1*

A developer is building a new complex application on AWS. The application consists of multiple microservices hosted on Amazon EC2. The developer wants to determine which microservice adds the most latency while handling a request.

Which method should the developer use to make this determination?

- A. Instrument each microservice request using the AWS X-Ray SDK. Examine the annotations associated with the requests.
- B. Instrument each microservice request using the AWS X-Ray SDK. Examine the subsegments associated with the requests.
- C. Instrument each microservice request using the AWS X-Ray SDK. Examine the Amazon CloudWatch EC2 instance metrics associated with the requests.
- D. Instrument each microservice request using the Amazon CloudWatch SDK. Examine the CloudWatch EC2 instance metrics associated with the requests.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #201*Topic 1*

A developer is deploying an application on Amazon EC2 instances that run in Account A. The application needs to read data from an existing Amazon Kinesis data stream in Account B.

Which actions should the developer take to provide the application with access to the stream? (Choose two.)

- A. Update the instance profile role in Account A with stream read permissions.
- B. Create an IAM role with stream read permissions in Account B.
- C. Add a trust policy to the instance profile role and IAM role in Account B to allow the instance profile role to assume the IAM role.
- D. Add a trust policy to the instance profile role and IAM role in Account B to allow reads from the stream.
- E. Add a resource-based policy in Account B to allow read access from the instance profile role.

**Correct Answer:** *BD*

*Community vote distribution*

BC (57%)

AE (21%)

AC (21%)



Question #202*Topic 1*

A developer is working on an AWS Lambda function that accesses Amazon DynamoDB. The Lambda function must retrieve an item and update some of its attributes, or create the item if it does not exist. The Lambda function has access to the primary key.

Which IAM permissions should the developer request for the Lambda function to achieve this functionality?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image9.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image10.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image11.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image12.png)

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #203*Topic 1*

A company is using AWS CloudFormation templates to deploy AWS resources. The company needs to update one of its AWS CloudFormation stacks.

What can the company do to find out how the changes will impact the resources that are running?

- A. Investigate the change sets.
- B. Investigate the stack policies.
- C. Investigate the Metadata section.
- D. Investigate the Resources section.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #204*Topic 1*

A developer is building an application integrating an Amazon API Gateway with an AWS Lambda function. When calling the API. the developer receives the following error:

Wed Nov 08 01:13:00 UTC 2017 : Method completed with status: 502

What should the developer do to resolve the error?

- A. Change the HTTP endpoint of the API to an HTTPS endpoint.
- B. Change the format of the payload sent to the API Gateway.
- C. Change the format of the Lambda function response to the API call.
- D. Change the authorization header in the API call to access the Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #205*Topic 1*

A company’s social media application stores image files in an Amazon S3 bucket. All the images are stored in S3 Standard storage. Users access images frequently during the first week after images are uploaded. Users rarely access images that were uploaded more than 1 week ago.

The company needs a solution to reduce the application’s storage cost. Users must be able to access all images in the same amount of time, regardless of when the images were uploaded.

Which solution will meet these requirements with the LEAST amount of effort?

- A. Modify the application to use S3 Intelligent-Tiering for all the images.
- B. Modify the application to use S3 One Zone-Infrequent Access (S3 One Zone-IA) for all the images.
- C. Use an S3 Lifecycle policy to move images that were uploaded more than 1 week ago to S3 Glacier Deep Archive.
- D. Use an S3 Lifecycle policy to move images that were uploaded more than 1 week ago to S3 Glacier Flexible Retrieval.

**Correct Answer:** *A*

*Community vote distribution*

A (50%)

D (25%)

B (25%)



Question #206*Topic 1*

A development team is designing a mobile app that requires multi-factor authentication.

Which steps should be taken to achieve this? (Choose two.)

- A. Use Amazon Cognito to create a user pool and create users in the user pool.
- B. Send multi-factor authentication text codes to users with the Amazon SNS Publish API call in the app code.
- C. Enable multi-factor authentication for the Amazon Cognito user pool.
- D. Use AWS IAM to create IAM users.
- E. Enable multi-factor authentication for the users created in AWS IAM.

**Correct Answer:** *AC*

*Community vote distribution*

AC (100%)



Question #207*Topic 1*

A company is using AWS CodePipeline pipelines to deploy development Amazon EC2 instances for multiple teams. All the pipelines are using the same AWS CloudFormation template to deploy the EC2 instances and create dedicated CloudFormation stacks for each team. Each pipeline passes a parameter that is named TeamName to the CloudFormation stack to tag resources with the appropriate team’s name.

The company discovers that each team's usage of EC2 instances is not consistent with the type of EC2 instances that the teams are deploying. The company needs to allow the teams to deploy different types of EC2 instances.

Which solution will meet this requirement with the LEAST change to the pipelines?

- A. For each team, use a dedicated CloudFormation template that includes different types of EC2 instances. Update CodePipeline to use the dedicated template for each team.
- B. For each team, use a dedicated CloudFormation template that includes an InstanceType parameter and a value that is specific to the team's requirement. Update CodePipeline to use the dedicated template for each team
- C. Update the CloudFormation template by creating an InstanceType parameter. Update CodePipeline to pass the InstanceType parameter value that is specific to the team's requirement.
- D. Update the CloudFormation template by adding a map for the instance types to the Mappings section. Create a list of all the teams. Configure the required instance type for each team in the map.

**Correct Answer:** *D*

*Community vote distribution*

D (50%)

C (43%)

7%



Question #208*Topic 1*

A developer is creating an application for a company. The application needs to read the file doc txt that is placed in the root folder of an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The company’s security team requires the principle of least privilege to be applied to the application’s IAM policy.

Which IAM policy statement will meet these security requirements?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image13.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image14.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image15.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image16.png)

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #209*Topic 1*

A company has migrated an application to Amazon EC2 instances. Automatic scaling is working well for the application user interface. However, the process to deliver shipping requests to the company's warehouse staff is encountering issues. Duplicate shipping requests are arriving, and some requests are lost or arrive out of order.

The company must avoid duplicate shipping requests and must process the requests in the order that the requests arrive. Requests are never more than 250 KB in size and take 5-10 minutes to process. A developer needs to rearchitect the application to improve the reliability of the delivery and processing of the requests.

What should the developer do to meet these requirements?

- A. Create an Amazon Kinesis Data Firehose delivery stream to process the requests. Create an Amazon Kinesis data stream. Modify the application to write the requests to the Kinesis data stream.
- B. Create an AWS Lambda function to process the requests. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the Lambda function to the SNS topic. Modify the application to write the requests to the SNS topic.
- C. Create an AWS Lambda function to process the requests. Create an Amazon Simple Queue Service (Amazon SQS) standard queue. Set the SQS queue as an event source for the Lambda function. Modify the application to write the requests to the SQS queue.
- D. Create an AWS Lambda function to process the requests. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the SQS queue as an event source for the Lambda function. Modify the application to write the requests to the SQS queue.

**Correct Answer:** *B*

*Community vote distribution*

D (93%)

7%



Question #210*Topic 1*

A team of developers must migrate an application running inside an AWS Elastic Beanstalk environment from a Classic Load Balancer to an Application Load Balancer.

Which steps should be taken to accomplish the task using the AWS Management Console?

- A. 1. Update the application code in the existing deployment.
  2. Select a new load balancer type before running the deployment
  3. Deploy the new version of the application code to the environment
- B. 1. Create a new environment with the same configurations except for the load balancer type.
  2. Deploy the same application version as used in the original environment.
  3. Run the swap-environment-cnames action
- C. 1. Clone the existing environment, changing the associated load balancer type.
  2. Deploy the same application version as used in the original environment.
  3. Run the swap-environment-cnames action
- D. 1. Edit the environment definitions in the existing deployment.
  2. Change the associated load balancer type according to the requirements.
  3. Rebuild the environment with the new load balancer type.

**Correct Answer:** *C*

*Community vote distribution*

B (80%)

C (20%)



Question #211*Topic 1*

What does an Amazon SQS delay queue accomplish?

- A. Messages are hidden for a configurable amount of time when they are first added to the queue.
- B. Messages are hidden for a configurable amount of time after they are consumed from the queue.
- C. The consumer can poll the queue for a configurable amount of time before retrieving a message.
- D. Messages cannot be deleted for a configurable amount of time after they are consumed from the queue.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #212*Topic 1*

A company stores the photographs in an Amazon S3 bucket. The company wants to resize the photographs automatically after writing the photographs to the S3 bucket. The company creates an AWS Lambda function to resize the photographs.

Which solution will meet these requirements?

- A. Configure S3 Event Notifications to invoke the Lambda function
- B. Configure an S3 Lifecycle rule to invoke the Lambda function.
- C. Configure S3 Select on a schedule to invoke the Lambda function.
- D. Configure S3 Storage Lens to invoke the Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #213*Topic 1*

A developer is automating a new application deployment with AWS Serverless Application Model (AWS SAM). The new application has one AWS Lambda function and one Amazon S3 bucket. The Lambda function must access the S3 bucket to only read objects.

How should the developer configure AWS SAM to grant the necessary read privilege to the S3 bucket?

- A. Reference a second Lambda authorizer function.
- B. Add a custom S3 bucket policy to the Lambda function.
- C. Create an Amazon Simple Queue Service (SQS) topic for only S3 object reads Reference the topic in the template.
- D. Add the S3ReadPolicy template to the Lambda function's execution role.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #214*Topic 1*

A company hosts a web application that writes to an Amazon DynamoDB table. Application users frequently observe and report errors. The development team examines Amazon CloudWatch logs and frequently sees the following error:

400 Bad Request ProvisionedThroughputExceededException

What is the cause of this error?

- A. The application does not have the required permissions for the DynamoDB table.
- B. The item that the application is placing on the table exceeds the item size limit.
- C. The development team has not allocated enough space for the table and its indexes.
- D. The development team has not allocated enough write capacity units (WCU) for the table and Its indexes.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #215*Topic 1*

A company's developer is building a static website to be deployed in Amazon S3 for a production environment. The website integrates with an Amazon Aurora PostgreSQL database by using an AWS Lambda function. The website that is deployed to production will use a Lambda alias that points to a specific version of the Lambda function.

The company must rotate the database credentials every 2 weeks. Lambda functions that the company deployed previously must be able to use the most recent credentials.

Which solution will meet these requirements?

- A. Store the database credentials in AWS Secrets Manager. Turn on rotation. Write code in the Lambda function to retrieve the credentials from Secrets Manager.
- B. Include the database credentials as part of the Lambda function code. Update the credentials periodically and deploy the new Lambda function.
- C. Use Lambda environment variables. Update the environment variables when new credentials are available.
- D. Store the database credentials in AWS Systems Manager Parameter Store Turn on rotation. Write code in the Lambda function to retrieve the credentials from Systems Manager Parameter Store.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #216*Topic 1*

An application reads data from an Amazon DynamoDB table. Several times a day, for a period of 15 seconds, me application receives multiple ProvisionedThroughputExceeded errors.

How should this exception be handled?

- A. Create a new global secondary index for the table to help with the additional requests.
- B. Retry the failed read requests with exponential backoff.
- C. Immediately retry the failed read requests.
- D. Use the DynamoDB "UpdateItem" API to increase the provisioned throughput capacity of the table.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #217*Topic 1*

A company wants to migrate its web application to AWS and leverage auto scaling to handle peak workloads. The solutions architect determined that the best metric for an auto scaling event is the number of concurrent users.

Based on this information, what should the developer use to auto scale based on concurrent users?

- A. An Amazon SNS topic to be invoked when a concurrent user threshold is met
- B. An Amazon Cloudwatch NetworkIn metric
- C. Amazon CloudFront to leverage AWS edge locations
- D. A custom Amazon CloudWatch metric for concurrent users

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #218*Topic 1*

A company is managing a NoSQL database on-premises to host a critical component of an application, which is starting to have scaling issues. The company wants to migrate the application to Amazon DynamoDB with the following considerations:

• Optimize frequent queries
• Reduce read latencies
• Plan for frequent queries on certain key attributes of the table

Which solution would help achieve these objectives?

- A. Create global secondary indexes on keys that are frequently queried. Add the necessary attributes into the indexes.
- B. Create local secondary indexes on keys that are frequently queried. DynamoDB will fetch needed attributes from the table.
- C. Create DynamoDB global tables to speed up query responses. Use a scan to fetch data from the table
- D. Create an AWS Auto Scaling policy for the DynamoDB table.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #219*Topic 1*

A developer is storing sensitive data generated by an application in Amazon S3. The developer wants to encrypt the data at rest A company policy requires an audit trail of when the AWS Key Management Service (AWS KMS) key was used and by whom.

Which encryption option will meet these requirements?

- A. Server-side encryption with Amazon S3 managed keys (SSE-S3)
- B. Server-side encryption with AWS KMS managed keys (SSE-KMS)
- C. Server-side encryption with customer-provided keys (SSE-C)
- D. Server-side encryption with self-managed keys

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #220*Topic 1*

An AWS Lambda function that Is running in a test environment is not working property. However, there is no error associated with the Lambda function in the Amazon CloudWatch logs for the account. The Lambda function's permissions do not include a resource-based policy. The Lambda function's execution role has properly configured trust relationships and has no permissions policies attached.

Which action should a developer take to allow logs for the Lambda function to appear in CloudWatch?

- A. Attach the AWSLambda8asicExecutionRole managed policy to the Lambda function's execution role.
- B. Set the AWSLambdaBasicExecutionRole managed policy as the Lambda function's resource-based policy.
- C. Attach the CloudWatchLambdaInsightsExecutionRolePolicy managed policy to the Lambda function's execution role.
- D. Set the CloudWatchLambdaInsightsExecutionRolePolicy managed policy as the Lambda function's resource-based policy.

**Correct Answer:** *A*

*Community vote distribution*

A (56%)

C (44%)



Question #221*Topic 1*

A company's website runs on an Amazon EC2 instance and uses Auto Scaling to scale the environment during peak times. Website users across the world are experiencing high latency due to static content on the EC2 instance, even during non-peak hours.

Which combination of steps will resolve the latency issue? (Choose two.)

- A. Double the Auto Scaling group's maximum number of servers.
- B. Host the application code on AWS Lambda.
- C. Scale vertically by resizing the EC2 instances.
- D. Create an Amazon CloudFront distribution to cache the static content.
- E. Store the application’s static content in Amazon S3.

**Correct Answer:** *DE*

*Community vote distribution*

DE (100%)



Question #222*Topic 1*

An application is experiencing performance issues based on increased demand. This increased demand is on read-only historical records pulled from an Amazon RDS-hosted database with custom views and queries. A developer must improve performance without changing the database structure.

Which approach will improve performance and MINIMIZE management overhead?

- A. Deploy Amazon DynamoDB, move all the data, and point to DynamoDB.
- B. Deploy Amazon ElastiCache for Red is and cache the data for the application.
- C. Deploy Memcached on Amazon EC2 and cache the data for the application.
- D. Deploy Amazon DynamoDB Accelerator (DAX) on Amazon RDS to improve cache performance.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #223*Topic 1*

A company is planning to deploy an application on AWS behind an Elastic Load Balancer. The application uses an HTTP/HTTPS listener and must access the client IP addresses.

Which load-balancing solution meets these requirements?

- A. Use an Application Load Balancer and the X-Forwarded-For headers.
- B. Use a Network Load Balancer (NLB). Enable proxy protocol support on the NLB and the target application.
- C. Use an Application Load Balancer. Register the targets by the instance ID.
- D. Use a Network Load Balancer and the X-Forwarded-For headers.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #224*Topic 1*

A developer has setup an Amazon Kinesis Stream with 4 shards to ingest a maximum of 2500 records per second. A Lambda function has been configured to process these records.

In which order will these records be processed?

- A. Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, first-out) method.
- B. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (first-in, first-out) method.
- C. Lambda will receive each record in the exact order it was placed into the shard following a FIFO (first-in, first-out) method. There is no guarantee of order across shards.
- D. The developer can select FIFO (first-in, first-out), LIFO (last-in, first-out), random, or request specific record using the getRecords API.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #225*Topic 1*

A developer is using an AWS CodeCommit repository to store source code for an application. The developer is using an AWS CodePipeline pipeline to deploy the application. The pipeline does not start automatically and must be started manually when a deployment is needed.

The developer needs to configure the pipeline to start automatically.

Which solution meets this requirement with the LEAST delay?

- A. Create a webhook in the CodeCommit repository to directly call the CodePipeline API to start the pipeline.
- B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to start the pipeline upon the detection of changes in the CodeCommit repository.
- C. Configure the pipeline to poll the CodeCommit repository for changes and to start automatically when changes are detected.
- D. Create a CodeCommit trigger for an Amazon Simple Notification Service (Amazon SNS) topic. Configure the SNS topic to post to the CodePipeline API to start the pipeline.

**Correct Answer:** *B*

*Community vote distribution*

B (64%)

A (27%)

9%



Question #226*Topic 1*

A developer is writing an IAM policy document that grants administrator access to AWS Key Management Service (AWS KMS) for a federated user. The federated IAM role name is FederatedIAMRole. The user name is KeyAdmin.

How should the developer set the principal in the KMS key policy to meet these requirements?

- A. “Principal”: { “AWS”: “arn:aws:sts::123456789012:role/FederatedIAMRole/KeyAdmin” }
- B. “Principal”: { “AWS”: “arn:aws:sts::123456789012:user/FederatedIAMRole/KeyAdmin” }
- C. “Principal”: { “AWS”: “arn:aws:sts::123456789012:user/KeyAdmin” }
- D. “Principal”: { “AWS”: “arn:aws:sts::123456789012:assumed-role/FederatedIAMRole/KeyAdmin” }

**Correct Answer:** *D*

*Community vote distribution*

D (82%)

C (18%)



Question #227*Topic 1*

A company has a multi-node Windows legacy application that runs on premises. The application uses a network shared folder as a centralized configuration repository to store configuration files in .xml format. The company is migrating the application to Amazon EC2 instances. As part of the migration to AWS, a developer must identify a solution that provides high availability for the repository.

Which solution will meet this requirement MOST cost-effectively?

- A. Mount an Amazon Elastic Block Store (Amazon EBS) volume onto one of the EC2 instances. Deploy a file system on the EBS volume. Use the host operating system to share a folder. Update the application code to read and write configuration files from the shared folder.
- B. Deploy a micro EC2 instance with an instance store volume. Use the host operating system to share a folder. Update the application code to read and write configuration files from the shared folder.
- C. Create an Amazon S3 bucket to host the repository. Migrate the existing .xml files to the S3 bucket. Update the application code to use the AWS SDK to read and write configuration files from Amazon S3.
- D. Create an Amazon S3 bucket to host the repository. Migrate the existing xml files to the S3 bucket. Mount the S3 bucket to the EC2 instances as a local volume. Update the application code to read and write configuration files from the disk.

**Correct Answer:** *C*

*Community vote distribution*

C (67%)

D (33%)



Question #228*Topic 1*

A company has deployed an application on AWS Elastic Beanstalk. The company has configured the Auto Scaling group that is associated with the Elastic Beanstalk environment to have five Amazon EC2 instances. If the capacity is fewer than four EC2 instances during the deployment, application performance degrades. The company is using the all-at-once deployment policy.

What is the MOST cost-effective way to solve the deployment issue?

- A. Change the Auto Scaling group to six desired instances.
- B. Change the deployment policy to traffic splitting. Specify an evaluation time of 1 hour.
- C. Change the deployment policy to rolling with additional batch. Specify a batch size of 1.
- D. Change the deployment policy to rolling. Specify a batch size of 2.

**Correct Answer:** *D*

*Community vote distribution*

C (91%)

9%



Question #229*Topic 1*

A developer at a company needs to create a small application that makes the same API call once each day at a designated time. The company does not have infrastructure in the AWS Cloud yet, but the company wants to implement this functionality on AWS.

Which solution meets these requirements in the MOST operationally efficient manner?

- A. Use a Kubernetes cron job that runs on Amazon Elastic Kubernetes Service (Amazon EKS).
- B. Use an Amazon Linux crontab scheduled job that runs on Amazon EC2.
- C. Use an AWS Lambda function that is invoked by an Amazon EventBridge (Amazon CloudWatch Events) scheduled event.
- D. Use an AWS Batch job that is submitted to an AWS Batch job queue.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #230*Topic 1*

A company has an application that generates large binary data outside of AWS. The company must encrypt the data before uploading the data to an Amazon S3 bucket.

Which solution will meet this requirement?

- A. Use the AWS Key Management Service (AWS KMS) encrypt command in the AWS CLI.
- B. Configure server-side encryption on the S3 bucket.
- C. Use the AWS Encryption SDK to perform client-side encryption of the data.
- D. Specify the x-amz-server-side-encryption header when uploading the data to the S3 bucket.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #231*Topic 1*

A Developer accesses AWS CodeCommit over SSH. The SSH keys configured to access AWS CodeCommit are tied to a user with the following permissions:

![img](https://img.examtopics.com/aws-certified-developer-associate/image17.png)

The Developer needs to create/delete branches.

Which specific IAM permissions need to be added, based on the principle of least privilege?

- A. “codecommit:CreateBranch”
  “codecommit:DeleteBranch”
- B. “codecommit:Put*”
- C. “codecommit:Update*”
- D. “codecommit:*”

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #232*Topic 1*

Where should an Elastic Beanstalk configuration file named healthcheckurl.config be placed in the application source bundle?

- A. In the root of the application
- B. In the bin folder
- C. In healthcheckurl.config.ebextension under root
- D. In the .ebextensions folder

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #233*Topic 1*

A developer is writing a web application that allows users to sign in. The application will run on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances will run in an Auto Scaling group across multiple Availability Zones.

How can the developer ensure that users stay signed in when the Auto Scaling group is scaled down?

- A. Enable sticky sessions on the ALB target group.
- B. Create an Amazon DynamoDB table. Configure the application to use the DynamoDB table to store session state such as login status.
- C. Create an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS Multi-Attach to attach the volume to all instances in the Auto Scaling group. Configure the application to use the volume to store session state such as login status.
- D. Enable deregistration delay on the ALB target group.

**Correct Answer:** *C*

*Community vote distribution*

B (83%)

A (17%)



Question #234*Topic 1*

A developer is troubleshooting a new AWS Lambda function. The function should run automatically each time a new object is uploaded to an Amazon S3 bucket. The function is supposed to read the object, make modifications, and overwrite the object with the new version. The developer finds that all calls failed within the function code.

Which of the following are possible reasons for this failure? (Choose two.)

- A. The function resource policy does not allow access from Amazon S3.
- B. The function execution role does not allow access from Amazon S3.
- C. The function execution role does not allow access to Amazon S3.
- D. The S3 bucket policy does not allow access from the Lambda function.
- E. The S3 bucket policy does not allow access to the Lambda function.

**Correct Answer:** *AE*

*Community vote distribution*

CD (80%)

BD (20%)



Question #235*Topic 1*

An application is processing clickstream data using Amazon Kinesis. The clickstream data feed into Kinesis experiences periodic spikes. The PutRecords API call occasionally fails and the logs show that the failed call returns the response shown below:

![img](https://img.examtopics.com/aws-certified-developer-associate/image18.png)

Which techniques will help mitigate this exception? (Choose two.)

- A. Implement retries with exponential backoff.
- B. Use a PutRecord API instead of PutRecords.
- C. Reduce the frequency and/or size of the requests.
- D. Use Amazon SNS instead of Kinesis.
- E. Reduce the number of KCL consumers.

**Correct Answer:** *BD*

*Community vote distribution*

AC (100%)



Question #236*Topic 1*

Two containerized microservices are hosted on Amazon EC2 ECS. The first microservice reads an Amazon RDS Aurora database instance, and the second microservice reads an Amazon DynamoDB table.

How can each microservice be granted the minimum privileges?

- A. Set ECS_ENABLE_TASK_IAM_ROLE to false on EC2 instance boot in ECS agent configuration file. Run the first microservice with an IAM role for ECS tasks with read-only access for the Aurora database. Run the second microservice with an IAM role for ECS tasks with read-only access to DynamoDB.
- B. Set ECS_ENABLE_TASK_IAM_ROLE to false on EC2 instance boot in the ECS agent configuration file. Grant the instance profile role read-only access to the Aurora database and DynamoDB.
- C. Set ECS_ENABLE_TASK_IAM_ROLE to true on EC2 instance boot in the ECS agent configuration file. Run the first microservice with an IAM role for ECS tasks with read-only access for the Aurora database. Run the second microservice with an IAM role for ECS tasks with read-only access to DynamoDB.
- D. Set ECS_ENABLE_TASK_IAM_ROLE to true on EC2 instance boot in the ECS agent configuration file. Grant the instance profile role read-only access to the Aurora database and DynamoDB.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #237*Topic 1*

A developer is writing a new serverless application for a company. Several other developers must collaborate on the code for this application, and the company expects frequent changes to the code. The developer needs to deploy the code from source control to AWS Lambda with the fewest number of manual steps.

Which strategy for the build and deployment should the developer use to meet these requirements?

- A. Build the code locally, and then upload the code into the source control system. When a release is needed, run AWS CodePipeline to extract the uploaded build and deploy the resources.
- B. Use the AWS Serverless Application Model (AWS SAM) CLI to build and deploy the application from the developer's local machine with the latest version checked out locally.
- C. Use AWS CodeBuild and AWS CodePipeline to invoke builds and corresponding deployments when configured source controlled branches have pull requests merged into them
- D. Use the Lambda console to upload a .zip file of the application that is created by the AWS Serverless Application Model (AWS SAM) CLI build command.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #238*Topic 1*

A developer is using an AWS CodePipeline pipeline to provide continuous integration and continuous delivery (CI/CD) support for a Java application. The developer needs to update the pipeline to support the introduction of a new application dependency .jar file. The pipeline must start a build when a new version of the .jar file becomes available.

Which solution will meet these requirements?

- A. Create an Amazon S3 bucket to store the dependency .jar file. Publish the dependency .jar file to the S3 bucket. Use an Amazon Simple Notification Service (Amazon SNS) notification to start a CodePipeline pipeline build.
- B. Create an Amazon Elastic Container Registry (Amazon ECR) private repository. Publish the dependency jar file to the repository. Use an ECR source action to start a CodePipeline pipeline build.
- C. Create an Amazon Elastic Container Registry (Amazon ECR) private repository. Publish the dependency .jar file to the repository. Use an Amazon Simple Notification Service (Amazon SNS) notification to start a CodePipeline pipeline build.
- D. Create an AWS CodeArtifact repository. Publish the dependency .jar file to the repository. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to start a CodePipeline pipeline build.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #239*Topic 1*

A developer is writing a serverless application that requires an AWS Lambda function to be invoked every 10 minutes.

What is an automated and serverless way to invoke the function?

- A. Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab file by adding a command to periodically invoke the Lambda function.
- B. Configure an environment variable named PERIOD for the Lambda function. Set the value to 600.
- C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs on a regular schedule to invoke the Lambda function.
- D. Create an Amazon Simple Notification Service (Amazon SNS) topic that has a subscription to the Lambda function with a 600-second timer.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #240*Topic 1*

A company is migrating legacy internal applications to AWS. Leadership wants to rewrite the internal employee directory to use native AWS services A developer needs to create a solution for storing employee contact details and high-resolution photos for use with the new application.

Which solution will enable the search and retrieval of each employee's individual details and high-resolution photos using AWS APIs?

- A. Encode each employee s contact information and photos using Base64 Store the information in an Amazon DynamoDB table using a sort key.
- B. Store each employee's contact information in an Amazon DynamoDB table along with the object keys for the photos stored in Amazon S3.
- C. Use Amazon Cognito user pools to implement the employee directory in a fully managed software-as-a-service (SaaS) method.
- D. Store employee contact information in an Amazon RDS DB instance with the photos stored in Amazon Elastic File System (Amazon EFS).

**Correct Answer:** *B*

*Community vote distribution*

B (93%)

7%



Question #241*Topic 1*

A company has three different environments: Development. QA, and Production. The company wants to deploy its code first in the Development environment, then QA, and then Production.

Which AWS service can be used to meet this requirement?

- A. Use AWS CodeCommit to create multiple repositories to deploy the application.
- B. Use AWS CodeBuild to create, configure, and deploy multiple build application projects.
- C. Use AWS Data Pipeline to create multiple data pipeline provisions to deploy the application.
- D. Use AWS CodeDeploy to create multiple deployment groups.

**Correct Answer:** *A*

*Community vote distribution*

D (100%)



Question #242*Topic 1*

A developer is creating a template that uses AWS CloudFormation to deploy an application. The application is serverless and uses Amazon API Gateway. Amazon DynamoDB, and AWS Lambda.

Which AWS service or tool should the developer use to define serverless resources in YAML?

- A. CloudFormation serverless intrinsic functions
- B. AWS Elastic Beanstalk
- C. AWS Serverless Application Model (AWS SAM)
- D. AWS Cloud Development Kit (AWS CDK)

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #243*Topic 1*

An application adds a processing date to each transaction that it receives. The application writes each transaction to an Amazon DynamoDB table by using the PutItem operation. Each transaction has a unique ID (transactionID). Sometimes the application receives transactions more than once.

A developer notices that duplicate transactions in DynamoDB have the latest processing date instead of the date when the transaction was first received. Duplicate records happen infrequently, and most of the transactions are unique.

What is the MOST cost-effective solution that the developer can implement to ensure that PutItem does not update an existing record?

- A. Call the GetItem operation first to confirm that the record does not exist. Then call PutItem.
- B. Enable the TTL attribute on the DynamoDB table.
- C. Implement a conditional put by using the attribute_exists(transactionID) condition expression.
- D. Implement a conditional put by using the attribute_not_exists(transactionID) condition expression.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #244*Topic 1*

A developer is building a static, client-side rendered website that is powered by ReactJS. The code has no server-side generated components and does not need to run any programming languages on the server. However, the code serves static HTML, CSS, and JavaScript to the client on each request. The developer’s solution to host the website must maximize performance and cost-effectiveness.

Which combination of AWS services or resources should the developer use to meet these requirements?

- A. Application Load Balancer and Amazon EC2
- B. Amazon API Gateway and AWS Lambda
- C. Amazon CloudFront and Amazon S3
- D. Amazon CloudFront and AWS Elastic Beanstalk

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #245*Topic 1*

A developer has written an application that runs on Amazon EC2 instances. The developer is adding functionality for the application to write objects to an Amazon S3 bucket.

Which policy must the developer modify to allow the instances to write these objects?

- A. The IAM policy that is attached to the EC2 instance profile role.
- B. The session policy that is applied to the EC2 instance role session.
- C. The AWS Key Management Service (AWS KMS) key policy that is attached to the EC2 instance profile role.
- D. The Amazon VPC endpoint policy.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #246*Topic 1*

A developer uses the Amazon S3 ListObjectsV2 API call to retrieve and list object keys from an S3 bucket. The list can contain thousands of keys, and the retrieval often returns more than the max-keys maximum value. The code must handle any number of returned results.

How can the developer modify the code to handle any number of returns?

- A. Set max-keys in the ListObjectsV2 API call to the expected number of returned objects.
- B. Set max-keys in the ListObjectsV2 API call to -1.
- C. Run an S3 Select query to retrieve and list object keys from the bucket.
- D. When applicable, repeat the ListObjectsV2 API call by using NextContinuationToken.

**Correct Answer:** *C*

*Community vote distribution*

D (92%)

8%



Question #247*Topic 1*

A developer is writing an application that runs on Amazon EC2 instances in an Auto Scaling group The application data is stored in an Amazon DynamoDB table and records are constantly updated by all instances. An instance sometimes retrieves old data. The developer wants to correct this by making sure the reads are strongly consistent.

How can the developer accomplish this?

- A. Set ConsistentRead to true when calling GetItem.
- B. Create a new DynamoDB Accelerator (DAX) table
- C. Set Consistency to strong when calling UpdateTable.
- D. Use the GetShardIterator command.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #248*Topic 1*

A development team sets up a project's file directory structure in AWS CodeCommit. The team plans to use AWS CodeBuild and AWS CodeDeploy. The team creates the necessary configuration files for CodeBuild and CodeDeploy. The team wants to name and place these files according to service defaults.

Where should the team place the CodeBuild and CodeDeploy files?

- A. A directory named "aws" under the route source directory
- B. A directory named "deploy" under the root source directory
- C. A directory named "scripts" under the root source directory
- D. The root of the source directory

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #249*Topic 1*

A software company must ensure that documents that are uploaded by users are securely stored in Amazon S3. The documents must be encrypted at rest in Amazon S3. The company wants to avoid client-side encryption and does not want to manage the security infrastructure. In addition, the company wants control over the keys that are used for encryption at rest.

Which solution for encryption keys should a developer use to meet these requirements?

- A. Amazon S3 managed keys
- B. Application-level encryption with customer-provided encryption keys that are stored in an on-premises hardware security module (HSM)
- C. AWS Key Management Service (AWS KMS) customer managed keys
- D. IAM access keys

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #250*Topic 1*

In a move toward using microservices, a company's management team has asked all development teams to build their services so that API requests depend only on that service's data store. One team is building a Payments service which has its own database; the service needs data that originates in the Accounts database. Both are using Amazon DynamoDB.

What approach will result in the simplest, decoupled, and reliable method to get near-real time updates from the Accounts database?

- A. Use Amazon Glue to perform frequent ETL updates from the Accounts database to the Payments database.
- B. Use Amazon ElastiCache in Payments, with the cache updated by triggers in the Accounts database.
- C. Use Amazon Kinesis Data Firehose to deliver all changes from the Accounts database to the Payments database.
- D. Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #251*Topic 1*

A software engineer developed an AWS Lambda function in Node.js to do some CPU-intensive data processing. With the default settings, the Lambda function takes about 5 minutes to complete.

Which approach should a developer take to increase the speed of completion?

- A. Instead of using Node.js. rewrite the Lambda function using Python.
- B. Instead of packaging the libraries in the ZIP file with the function, move them to a Lambda layer and use the layer with the function.
- C. Allocate the maximum available CPU units to the function.
- D. Increase the available memory to the function.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #252*Topic 1*

A developer must build a mobile application that allows users to read and write data from an Amazon DynamoDB table to store user state for each unique user. The solution needs to limit data access to allow users access only to their own data.

Which solution below is the most secure?

- A. Embed AWS access credentials into the application and create DynamoDB queries that limit user access.
- B. Use Amazon Cognito identity pools to assign unique identifiers and provide user access.
- C. Modify the DynamoDB table to allow public read and writes, then add client-side filtering.
- D. Create a web portal for users to create an account on AWS Directory Service.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #253*Topic 1*

A developer is developing an application that uses signed requests (Signature Version 4) to call other AWS services. The developer has created a canonical request, has created the string to sign, and has calculated signing information.

Which methods could the developer use to complete a signed request? (Choose two.)

- A. Add the signature to an HTTP header that is named Authorization
- B. Add the signature to a session cookie
- C. Add the signature to an HTTP header that is named Authentication
- D. Add the signature to a query string parameter that is named X-Amz-Signature
- E. Add the signature to an HTTP header that is named WWW-Authenticate

**Correct Answer:** *AD*

*Community vote distribution*

AD (100%)



Question #254*Topic 1*

A company has an Amazon S3 bucket containing premier content that it intends to make available to only paid subscribers of its website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors.

How can the company limit the ability to download a premier content file in the S3 bucket to paid subscribers only?

- A. Apply a bucket policy that allows anonymous users to download the content from the S3 bucket.
- B. Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download.
- C. Add a bucket policy that requires multi-factor authentication for requests to access the S3 bucket objects.
- D. Enable server-side encryption on the S3 bucket for data protection against the non-paying website visitors.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #255*Topic 1*

An application under development is required to store hundreds of video files. The data must be encrypted within the application prior to storage, with a unique key for each video file.

How should the Developer code the application?

- A. Use the KMS Encrypt API to encrypt the data. Store the encrypted data key and data.
- B. Use a cryptography library to generate an encryption key for the application. Use the encryption key to encrypt the data. Store the encrypted data.
- C. Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.
- D. Upload the data to an S3 bucket using server side-encryption with an AWS KMS key.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #256*Topic 1*

An organization is storing large files in Amazon S3, and is writing a web application to display meta-data about the files to end-users. Based on the metadata a user selects an object to download. The organization needs a mechanism to index the files and provide single-digit millisecond latency retrieval for the metadata.

What AWS service should be used to accomplish this?

- A. Amazon DynamoDB
- B. Amazon EC2
- C. AWS Lambda
- D. Amazon RDS

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #257*Topic 1*

A developer is writing an application in AWS Lambda. To simplify testing and deployments, the developer needs the database connection string to be easily changed without modifying the Lambda code.

How can this requirement be met?

- A. Store the connection string as a secret in AWS Secrets Manager.
- B. Store the connection string in an IAM user account.
- C. Store the connection string in AWS KMS.
- D. Store the connection string as a Lambda layer.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #258*Topic 1*

A company has an AWS Lambda function that reads messages from an Amazon Simple Queue Service (Amazon SQS) queue by using the Amazon SQS API. The Lambda function is not processing all the messages successfully because of random failures of a third-party dependency. A developer needs to improve the reliability of the Lambda function so that the Lambda function will process each message successfully despite the failures of the third-party dependency.

Which solution will meet this requirement with the LEAST effort?

- A. Move the call to the third-party dependency into an exception handling block. Write the message back to the SQS queue if a failure in the third-party dependency is caught in the exception handler.
- B. Update the code in the Lambda function to remove calls to the SQS SDK ReceiveMessage function. Configure the Lambda function to use the SQS queue as an event source. Set the maxReceiveCount value on the SQS queue's redrive policy to at least 5.
- C. Create a second SQS queue to use as a dead-letter queue. Configure a redrive policy on the original SQS queue to send failed messages to the dead-letter queue. Modify the Lambda function to read messages from both queues.
- D. Create a second SQS queue to use as a dead-letter queue. Move the call to the third-party dependency into an exception handling block. Write the message to the dead-letter queue if a failure in the third-party dependency is caught in the exception handler.

**Correct Answer:** *D*

*Community vote distribution*

D (77%)

A (15%)

8%



Question #259*Topic 1*

A developer is building a new application that uses an Amazon DynamoDB table. The specification states that all items that are older than 48 hours must be removed.

Which solution will meet this requirement?

- A. Create a new attribute that has the Number data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration of 48 hours. In the application code, set the value of this attribute to the current timestamp for each new item that is being inserted.
- B. Create a new attribute that has the String data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration of 48 hours. In the application code, set the value of this attribute to the current timestamp for each new item that is being inserted.
- C. Create a new attribute that has the Number data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the value of this attribute to the current timestamp plus 48 hours for each new item that is being inserted.
- D. Create a new attribute that has the String data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the value of this attribute to the current timestamp plus 48 hours for each new item that is being inserted.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #260*Topic 1*

A developer is designing a web application in which new users will use their email addresses to create accounts. Millions of users are expected to sign up. The application will store attributes for each user.

Which AWS service or feature should the developer implement to meet these requirements?

- A. Amazon Cognito user pools
- B. AWS Mobile Hub User File Storage
- C. AWS AppSync
- D. AWS Mobile Hub Cloud Logic

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #261*Topic 1*

A company is running a software-as-a-service (SaaS) application in its on-premises data center. The application architecture uses a frontend Apache web server to support many customer-specific websites. The Apache web server routes traffic to a different set of servers based on the domain name that is specified in the host header of the initial request.

The company decides to move its architecture to AWS. A developer is moving the customer-specific backend servers onto Amazon EC2 instances. The developer must configure the EC2 instances in Auto Scaling groups for each customer and must register the instances in different target groups. The developer needs to replace the frontend Apache web server with an Elastic Load Balancing (ELB) load balancer. The developer also must forward queries for specific domain names to the appropriate target groups.

Which configuration on AWS will meet these requirements?

- A. Use a Network Load Balancer and host-based routing to respective backend target groups.
- B. Use a Network Load Balancer and path-based routing to respective backend target groups.
- C. Use an Application Load Balancer and host-based routing to respective backend target groups.
- D. Use an Application Load Balancer and path-based routing to respective backend target groups.

**Correct Answer:** *D*

*Community vote distribution*

C (92%)

8%



Question #262*Topic 1*

A company has an AWS Lambda function that runs hourly, reads log files that are stored in Amazon S3, and forwards alerts to Amazon Simple Notification Service (Amazon SNS) topics based on content. A developer wants to add a custom metric to the Lambda function to track the number of alerts of each type for each run. The developer needs to log this information in Amazon CloudWatch in a metric that is named Lambda/AlertCounts.

How should the developer modify the Lambda function to meet this requirement with the LEAST operational overhead?

- A. Add a print statement to standard out for each alert and the number of occurrences.
- B. Add a call to the PutMetricData API operation. Pass an array for alerts and the number of occurrences in the Values and Counts fields with a namespace of “Lambda/AlertCounts”.
- C. Add a call to the PutMetricAlarm API operation. Pass an array of alerts in the metrics member with the namespace of “Lambda/AlertCounts”.
- D. Add a call to the PutDashboard API operation. Pass an array of alerts in the metrics member with the namespace of “Lambda/AlertCounts”.

**Correct Answer:** *C*

*Community vote distribution*

B (86%)

14%



Question #263*Topic 1*

A company deploys a photo-processing application to an Amazon EC2 instance The application needs to process each photo in less than 5 seconds. If processing takes longer than 5 seconds, the company's development team must receive a notification.

How can a developer implement the required time measurement and notification with the LEAST operational overhead?

- A. Create an Amazon CloudWatch custom metric. Each time a photo is processed, publish the processing time as a metric value. Create a CloudWatch alarm that is based on a static threshold of 5 seconds. Notify the development team by using an Amazon Simple Notification Service (Amazon SNS) topic.
- B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Each time a photo is processed, publish the processing time to the queue. Create an application to consume from the queue and to determine whether any values are more than 5 seconds. Notify the development team by using an Amazon Simple Notification Service (Amazon SNS) topic.
- C. Create an Amazon CloudWatch custom metric. Each time a photo is processed, publish the processing time as a metric value. Create a CloudWatch alarm that enters ALARM state if the average of values is greater than 5 seconds. Notify the development team by sending an Amazon Simple Email Service (Amazon SES) message.
- D. Create an Amazon Kinesis data stream. Each time a photo is processed, publish the processing time to the data stream. Create an Amazon CloudWatch alarm that enters ALARM state if any values are more than 5 seconds. Notify the development team by using an Amazon Simple Notification Service (Amazon SNS) topic.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #264*Topic 1*

A developer is troubleshooting an Amazon API Gateway API. Clients are receiving HTTP 400 response errors when the clients try to access an endpoint of the API.

How can the developer determine the cause of these errors?

- A. Create an Amazon Kinesis Data Firehose delivery stream to receive API call logs from API Gateway. Configure Amazon CloudWatch Logs as the delivery stream’s destination.
- B. Turn on AWS CloudTrail Insights and create a trail. Specify the Amazon Resource Name (ARN) of the trail for the stage of the API.
- C. Turn on AWS X-Ray for the API stage. Create an Amazon CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log group for the API stage.
- D. Turn on execution logging and access logging in Amazon CloudWatch Logs for the API stage Create a CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log group for the API stage.

**Correct Answer:** *C*

*Community vote distribution*

D (88%)

12%



Question #265*Topic 1*

A company is hosting an Amazon API Gateway REST API that calls a single AWS Lambda function. The function is infrequently invoked by multiple clients at the same time. The code performance is optimal, but the company wants to optimize the startup time of the function.

What can a developer do to optimize the initialization of the function?

- A. Enable API Gateway caching for the REST API.
- B. Configure provisioned concurrency for the Lambda function.
- C. Use Lambda proxy integration for the REST API.
- D. Configure AWS Global Accelerator for the Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #266*Topic 1*

A developer wants to expand an application to run in multiple AWS Regions. The developer wants to copy Amazon Machine Images (AMIs) with the latest changes and create a new application slack in the destination Region. According to company requirements, all AMIs must be encrypted in all Regions. However, not all the AMIs that the company uses are encrypted.

How can the developer expand the application to run in the destination Region while meeting the encryption requirement?

- A. Create a new AMIs, and specify encryption parameters. Copy the encrypted AMIs to the destination Region. Delete the unencrypted AMIs.
- B. Use AWS Key Management Service (AWS KMS) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.
- C. Use AWS Certificate Manager (ACM) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.
- D. Copy the unencrypted AMIs to the destination Region. Enable encryption by default in the destination Region.

**Correct Answer:** *B*

*Community vote distribution*

A (63%)

B (38%)



Question #267*Topic 1*

A company manages a microservices application on Amazon EC2 instances. A developer has integrated the AWS X-Ray SDK with the application. The developer also has an IAM role that is associated with the EC2 instances. The role includes the AWSXRayDaemonWriteAccess managed IAM policy.

When the developer queries the X-Ray traces by using the GetServiceGraph API operation, no errors and no trace data are returned.

What could be the reason that no X-Ray trace data is being returned? (Choose two.)

- A. The X-Ray daemon is not installed on each EC2 instance.
- B. The GetServiceGraph API operation is providing a StartTime value and an EndTime value that are older than 30 days.
- C. X-Ray trace data is not available for querying for 30 minutes after it is captured.
- D. The developer’s IAM policy contains the AWSXRayReadOnlyAccess managed policy.
- E. The GetServiceGraph API operation does not include an EndTime value.

**Correct Answer:** *BE*

*Community vote distribution*

AB (90%)

10%



Question #268*Topic 1*

A developer is trying to determine which IAM user is calling several AWS APIs from an application.

Which service would provide this information?

- A. AWS Config
- B. AWS CloudTrail
- C. Amazon CloudWatch
- D. Amazon VPC Flow Logs

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #269*Topic 1*

A company is building a cloud solution to analyze customer demographic data. The data includes personally identifiable information (PII) such as full names, street addresses, and financial records.

A developer is configuring a source Amazon DynamoDB table with a DynamoDB stream. The developer is writing an AWS Lambda function that will ingest the demographic data from the DynamoDB stream. perform analytics, and write results to a separate DynamoDB table. The application must log important AWS API workflow events for monitoring purposes, but the application must expose the PII.

Which combination of actions should the developer take to log the LARGEST amount of AWS API operational information without exposing the PII? (Choose two.)

- A. Configure the DynamoDB stream to record KEYS_ONLY events.
- B. Configure the DynamoDB stream to record NEW_IMAGE events.
- C. Log the received event. Fetch the items from the source DynamoDB table. Log the response metadata from the API. Process and record the result in the separate DynamoDB table. Log the response metadata from the API.
- D. Log the received event. Fetch the items from the source DynamoDB table. Log the response from the API. Process and record the result in the separate DynamoDB table. Log the response metadata from the API.
- E. Fetch the items from the source DynamoDB table. Process the data and log workflow events without referring to the PII. Record the result in the separate DynamoDB table.

**Correct Answer:** *DE*

*Community vote distribution*

AE (83%)

CE (17%)



Question #270*Topic 1*

A company is using AWS CloudFormation to deploy a two-tier application. The application will use Amazon RDS as its backend database. The company wants a solution that will randomly generate the database password during deployment. The solution also must automatically rotate the database password without requiring changes to the application.

What is the MOST operationally efficient solution that meets these requirements?

- A. Use an AWS Lambda function as a CloudFormation custom resource to generate and rotate the password.
- B. Use an AWS Systems Manager Parameter Store resource with the SecureString data type to generate and rotate the password.
- C. Use a cron daemon on the application’s host to generate and relate the password.
- D. Use an AWS Secrets Manager resource to generate and rotate the password.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #271*Topic 1*

A company is building a serverless microservice for an existing application that uses AWS Lambda functions and Amazon API Gateway. The microservice needs to automate an on-premises identity provider (IdP) that supports the OpenID Connect (OIDC) standard.

What should the company do to implement the API authorization mechanism with the LEAST operational overhead?

- A. Use an API Gateway HTTP API to invoke the Lambda functions. Set the JSON Web Token (JWT) issuer as the public OIDC endpoint of the on-premises IdP.
- B. Use an API Gateway HTTP API to invoke the Lambda functions. Create an Amazon Cognito identity pool. Create a federation between the identity pool and the on-premises IdP. Set the identity pool as the JSON Web Token (JWT) issuer.
- C. Use an API Gateway REST API to invoke the Lambda functions. Configure the JSON Web Token (JWT) issuer to link to the on-premises IdP over the public internet.
- D. Use an API Gateway REST API to invoke the Lambda functions. Create an Amazon Cognito identity pool. Create a federation between the identity pool and the on-premises IdP. Set Amazon Cognito as the authorizer.

**Correct Answer:** *D*

*Community vote distribution*

D (64%)

B (36%)



Question #272*Topic 1*

A website allows users to upload photos to Amazon S3. An S3 event invokes an AWS Lambda function that uses the Amazon Rekognition DetectLabels operation to detect real-world objects within a photo. The website needs to store this data in a search index to allow users to quickly locate all photos associated with a label.

Which solution will meet these requirements?

- A. Store username and label values as S3 object tags. Retrieve and index the objects based on the tag by calling the describe-tags API with the username and label value.
- B. Store username and label values as S3 object metadata keys. Include the "x-amz-meta-" prefix for each key. Search by metadata to find all the objects that share the username and label value.
- C. Insert an item for each S3 key, label, and user combination into an Amazon DynamoDB table. Create a global secondary index with the username as the partition key and the label as the sort key. Call the QueryItem API on the index to find all the objects that share the username and label value
- D. Insert an item for each S3 key, label, and user combination into an Amazon DynamoDB global secondary index. Define the username as the partition key. Define the label as the sort key. Call the QueryItem API on the index to find all the objects that share the username and label value.

**Correct Answer:** *C*

*Community vote distribution*

B (50%)

C (50%)



Question #273*Topic 1*

A developer has an application that makes batch requests directly to Amazon DynamoDB by using the BatchGetltem low-level API operation. The responses frequently return values in the UnprocessedKeys element.

Which actions should the developer take to increase the resiliency of the application when the batch response includes values in UnprocessedKeys? (Choose two.)

- A. Retry the batch operation immediately.
- B. Retry the batch operation with exponential backoff and randomized delay.
- C. Update the application to use an AWS software development kit (AWS SDK) to make the requests.
- D. Increase the provisioned read capacity of the DynamoDB tables that the operation accesses.
- E. Increase the provisioned write capacity of the DynamoDB tables that the operation accesses.

**Correct Answer:** *AD*

*Community vote distribution*

BD (41%)

CD (30%)

BC (30%)



Question #274*Topic 1*

While developing an application that runs on Amazon EC2 in an Amazon VPC, a Developer identifies the need for centralized storage of application-level logs.

Which AWS service can be used to securely store these logs?

- A. Amazon EC2 VPC Flow Logs
- B. Amazon CloudWatch Logs
- C. Amazon CloudSearch
- D. AWS CloudTrail

**Correct Answer:** *B*

*Community vote distribution*

B (80%)

A (20%)



Question #275*Topic 1*

A company deploys a local news website on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to implement authentication for viewers through well-known social identity providers (IdPs). The company’s development team must use AWS native services in the solution.

Which combination of actions will meet these requirements? (Choose two.)

- A. Configure Amazon Cognito user pools with social IdPs
- B. Configure OpenID Connect (OIDC)-compliant IdP endpoints
- C. Create an AWS Lambda authorizer as a target in the ALB target group
- D. Configure an ALB listener to add a rule for authentication
- E. Use Lambda@Edge to authorize viewer requests in the ALB

**Correct Answer:** *AC*

*Community vote distribution*

AD (57%)

AB (29%)

14%



Question #276*Topic 1*

A company designs a mobile app to run on AWS. The app will run on Amazon EC2 instances behind an Application Load Balancer. The instances will run in an Amazon EC2 Auto Scaling group. The app must securely access data that the company stores in Amazon DynamoDB.

Which solution is MOST secure?

- A. Create an Amazon Cognito user pool for the mobile app users. Attach an IAM policy that has the required DynamoDB permissions to the user pool.
- B. Create an AWS Lambda authorizer with the required DynamoDB permissions. Attach the Lambda authorizer to the Application Load Balancer.
- C. Create an IAM user for each mobile user. Attach an IAM policy that provides the required DynamoDB permissions to each IAM user.
- D. Create an IAM role. Attach a policy with the required DynamoDB permissions to the role. Configure the EC2 Auto Scaling launch template to attach the role to all EC2 instances.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #277*Topic 1*

An open-source map application gathers data from several geolocation APIs. The application's source code repository is public and can be used by anyone, but the geolocation APIs must not be directly accessible.

A developer must implement a solution to prevent the credentials that are used to access the APIs from becoming public. The solution also must ensure that the application still functions properly.

Which solution will meet these requirements MOST cost-effectively?

- A. Store the credentials in AWS Secrets Manager. Retrieve the credentials by using the GetSecretValue API operation.
- B. Store the credentials in AWS Key Management Service (AWS KMS). Retrieve the credentials by using the GetPublicKey API operation.
- C. Store the credentials in AWS Security Token Service (AWS STS). Retrieve the credentials by using the GetCallerldentity API operation.
- D. Store the credentials in AWS Systems Manager Parameter Store. Retrieve the credentials by using the GetParameter API operation.

**Correct Answer:** *D*

*Community vote distribution*

D (82%)

A (18%)



Question #278*Topic 1*

A developer is working on a serverless application that needs to process any changes to an Amazon DynamoDB table with an AWS Lambda function.

How should the developer configure the Lambda function to detect changes to the DynamoDB table?

- A. Create an Amazon Kinesis data stream, and attach it to the DynamoDB table. Create a trigger to connect the data stream to the Lambda function.
- B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function on a regular schedule. Connect to the DynamoDB table from the Lambda function to detect changes.
- C. Enable DynamoDB Streams on the table. Create a trigger to connect the DynamoDB stream to the Lambda function.
- D. Create an Amazon Kinesis Data Firehose delivery stream, and attach it to the DynamoDB table. Configure the delivery stream destination as the Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #279*Topic 1*

A company is using Amazon OpenSearch Service to implement an audit monitoring system. A developer needs to create an AWS CloudFormation custom resource that is associated with an AWS Lambda function to configure the OpenSearch Service domain. The Lambda function must access the OpenSearch Service domain by using OpenSearch Service internal master user credentials.

What is the MOST secure way to pass these credentials to the Lambda function?

- A. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and the Lambda function's environment variable. Set the NoEcho attribute to true.
- B. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and to create a parameter in AWS Systems Manager Parameter Store. Set the NoEcho attribute to true. Create an IAM role that has the ssm GetParameter permission. Assign the role to the Lambda function. Store the parameter name as the Lambda function's environment variable. Resolve the parameter's value at runtime
- C. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and the Lambda function's environment variable. Encrypt the parameter's value by using the AWS Key Management Service (AWS KMS) encrypt command.
- D. Use CloudFormation to create an AWS Secrets Manager secret. Use a CloudFormation dynamic reference to retrieve the secret's value for the OpenSearch Service domain's MasterUserOptions. Create an IAM role that has the secretsmanager:GetSecretValue permission. Assign the role to the Lambda function. Store the secret's name as the Lambda function's environment variable. Resolve the secret's value at runtime.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #280*Topic 1*

A company has a two-tier application that consists of a frontend application and an Amazon RDS for MySQL database. The frontend application retrieves data from the database. The data consists of postal codes and their associated geographic coordinates The application performs many more database reads than writes. The application retrieves each postal code from the database thousands of times each day.

A developer must improve the performance of the application to decrease latency.

Which change should the developer make to the application to meet these requirements?

- A. Modify the application to use a lazy loading caching strategy with a small TTL value.
- B. Modify the application to use a write-behind caching strategy.
- C. Modify the application to use a write-through caching strategy.
- D. Modify the application to use a lazy loading caching strategy with a large TTL value.

**Correct Answer:** *A*

*Community vote distribution*

D (71%)

C (29%)



Question #281*Topic 1*

A developer is building an application that supports multiple languages. The directory structure and file names for all versions of the website are identical. When a user views the website, the preferred language is added as a query string parameter. The following is an example of the URL: http://d111111abcdef2.doudfront.net/main.html?language=de.

The query string is passed to Amazon CloudFront. No matter which language the developer selects, the English page is returned. If the developer accesses the website directly and bypasses CloudFront. the page works as expected

What should the developer do so that the content of the page matches the language that the developer selects?

- A. Create a new CloudFront origin request policy. Set the query string option to All. Update the CloudFront distribution to use the new cache policy.
- B. Create a new CloudFront cache policy. Set the minimum and maximum TTL to 1 hour. Update the CloudFront distribution to use the new cache policy.
- C. Create a new CloudFront cache policy. Set the query string option to None. Update the CloudFront distribution to use the new cache policy.
- D. Create a new CloudFront cache policy. Set the query string option to Whitelist, and include the language string. Update the CloudFront distribution to use the new cache policy.

**Correct Answer:** *A*

*Community vote distribution*

D (86%)

14%



Question #282*Topic 1*

A development team uses AWS CodeDeploy to deploy software changes to Amazon EC2 instances. The deployments begin to fail. The team traces the problem to a specific EC2 instance. The CodeDeploy agent's log file contains the following error message:

InvalidSignatureException Signature expired: |time| is now earlier than |time|

What is the underlying cause of this issue?

- A. The development team signed the CodeDeploy revision after the team created the deployment.
- B. The development team signed the CodeDeploy revision with a key that was not valid.
- C. The deployment did not finish within the specified time frame.
- D. The date setting or the time setting on the EC2 instance is not correct.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #283*Topic 1*

An AWS Elastic Beanstalk application needs to be deployed in multiple regions and requires a different Amazon Machine Image (AMI) in each region.

Which AWS CloudFormation template key can be used to specify the correct AMI for each region?

- A. Parameters
- B. Outputs
- C. Mappings
- D. Resources

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #284*Topic 1*

A Development team wants to instrument their code to provide more detailed information to AWS X-Ray than simple outgoing and incoming requests. This will generate large amounts of data, so the Development team wants to implement indexing so they can filter the data.

What should the Development team do to achieve this?

- A. Add annotations to the segment document and the code
- B. Add metadata to the segment document and the code
- C. Configure the necessary X-Ray environment variables
- D. Install required plugins for the appropriate AWS SDK

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #285*Topic 1*

A development team uses AWS CodeBuild for build and test activities in a PHP application. The build process requires the team to download and install three PHP packages from the internet. The install section of the buildspec.yml file includes commands to download and install these three packages. The team wants to reduce build time.

Which solution will reduce build time the MOST?

- A. Download the package files from the internet. Upload the package files into an Amazon S3 bucket. Change the buildspec's install section to use the S3 bucket as the download location.
- B. Define a VPC endpoint for CodeBuild. Install the package files on an Amazon EC2 instance in the VPC. Change the buildspec's install section to use the EC2 instance as the download location.
- C. Run the build on Jenkins by using the Jenkins plugin for CodeBuild. Pre-install the packages on the Jenkins server once. Remove the install commands from the buildspec.
- D. Create a custom CodeBuild image with the package files already downloaded and installed. Alter the CodeBuild project to use the custom image. Remove the install commands from the buildspec.

**Correct Answer:** *A*

*Community vote distribution*

D (67%)

A (33%)



Question #286*Topic 1*

An application uses an Amazon CloudFront distribution to deliver static content from Amazon S3 buckets that are set up in multiple AWS Regions around the world. A developer receives reports of problems with latency when cached content is updated.

The developer plans to address this problem by redirecting requests on cache misses to the S3 bucket in the Region that is nearest to the user's country. The developer configures the distribution to cache based on the CloudFront-Viewer-Country request header.

What should the developer do next to redirect requests on cache misses?

- A. Create a CloudFront function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the CloudFront function with the distribution's origin request event.
- B. Create a Lambda@Edge function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the Lambda@Edge function with the distribution's origin request event.
- C. Create a Lambda@Edge function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the Lambda@Edge function with the distribution's viewer request event.
- D. Create a CloudFront function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the CloudFront function with the distribution's viewer request event.

**Correct Answer:** *D*

*Community vote distribution*

B (71%)

D (29%)



Question #287*Topic 1*

A social media application stores millions of video clips in Amazon S3 and serves them to users across the world. The traffic to the application varies, but access often increases suddenly to more than 10,000 PUT requests and GET requests each second. As the application has grown in popularity, users report poor quality of video streaming.

Which solution will provide the LARGEST improvement in performance?

- A. Create an Amazon Route 53 geolocation routing policy.
- B. Duplicate content in multiple AWS Regions by using S3 Cross Region-Replication.
- C. Use S3 Intelligent-Tiering to move data based on access patterns.
- D. Create an Amazon CloudFront distribution with Amazon S3 as an origin.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #288*Topic 1*

A developer is creating a Java application that will store sensitive data in an Amazon DynamoDB table. The data must be encrypted at all times.

How can the developer meet this requirement?

- A. Enable encryption at rest by using an AWS Key Management Service (AWS KMS) AWS owned key for the DynamoDB table.
- B. Enable encryption at rest by using an AWS Key Management Service (AWS KMS) customer managed key for the DynamoDB table.
- C. Implement client-side encryption in the application code by using the DynamoDB Encryption Client.
- D. Use an HTTPS connection to encrypt data in transit.

**Correct Answer:** *A*

*Community vote distribution*

C (81%)

Other



Question #289*Topic 1*

A company is using AWS Elastic Beanstalk to manage web applications that are running on Amazon EC2 instances. A developer needs to make configuration changes. The developer must deploy the changes to new instances only.

Which types of deployment can the developer use to meet this requirement? (Choose two.)

- A. All at once
- B. Immutable
- C. Rolling
- D. Blue/green
- E. Rolling with additional batch

**Correct Answer:** *BD*

*Community vote distribution*

BD (80%)

BE (20%)



Question #290*Topic 1*

A developer has created a REST API using Amazon API Gateway. The developer wants to log who and how each caller accesses the API. The developer also wants to control how long the logs are kept.

What should the developer do to meet these requirements?

- A. Enable API Gateway execution logging. Delete old logs using API Gateway retention settings.
- B. Enable API Gateway access logs. Use Amazon CloudWatch retention settings to delete old logs.
- C. Enable detailed Amazon CloudWatch metrics. Delete old logs with a recurring AWS Lambda function.
- D. Create and use API Gateway usage plans. Delete old logs with a recurring AWS Lambda function.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #291*Topic 1*

A Developer has been asked to make changes to the source code of an AWS Lambda function. The function is managed using an AWS CloudFormation template. The template is configured to load the source code from an Amazon S3 bucket. The Developer manually created a .ZIP file deployment package containing the changes and put the file into the correct location on Amazon S3. When the function is invoked, the code changes have not been applied.

What step is required to update the function with the changes?

- A. Delete the .ZIP file on S3, and re-upload by using a different object key name.
- B. Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion.
- C. Ensure that the function source code is base64-encoded before uploading the deployment package to S3.
- D. Modify the execution role of the Lambda function to allow S3 access permission to the deployment package .ZIP file.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #292*Topic 1*

A developer is deploying Amazon Cognito as part of a new application. The Amazon Cognito user pool domain's hosted UI must match the application's deployed domain. DNS records must be updated appropriately.

What should the developer do to meet these requirements?

- A. Configure the application's domain DNS setting to use the predefined domain.
- B. Configure the prefix of the Amazon Cognito domain, amazoncognito.com, in the user pool app integration. Configure the application's domain DNS setting to use this new prefix.
- C. Create an AWS Certificate Manager (ACM) certificate in the us-east-1 Region. Configure the user pool's app integration domain name with the custom domain. Configure the application's domain DNS setting with the supplied alias target.
- D. Create an AWS Certificate Manager (ACM) certificate in the us-east-1 Region. Configure the user pool's domain app client settings with the custom domain. Configure the application's domain DNS setting with the supplied alias target.

**Correct Answer:** *A*

*Community vote distribution*

C (89%)

11%



Question #293*Topic 1*

A government agency deploys a REST application on AWS. The agency integrates the application with AWS Lambda. The agency accesses the application through Amazon API Gateway. The agency has the following policies:

• Number versions to manage the deployment of all Lambda functions to production
• Create a PROD alias to point to each function
• Reference the PROD aliases in the production stages of API Gateway

One Lambda function contains the environment variables that are used to externalize connection parameters. The PROD alias points to version 10 of the Lambda function. A developer needs to update the connection parameters and ensure that the updated Lambda function is available on production.

Which solution will meet these requirements?

- A. Update the environment variable values on version 10 of the Lambda function. Do not change the PROD alias.
- B. Update the environment variable values on version 10 of the Lambda function. Save the changes to create version 11. Update the PROD alias so that it points to version 11.
- C. Update the environment variable values on the SLATEST version. Do not change the PROD alias
- D. Update the environment variable values on the SLATEST version. Publish SLATEST to create version 11 of the Lambda function. Update the PROD alias so that it points to version 11.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #294*Topic 1*

A company's developer is creating an application that uses Amazon API Gateway. The company wants to ensure that only users in the Sales department can use the application. The users authenticate to the application by using federated credentials from a third-party identity provider (ldP) through Amazon Cognito. The developer has set up an attribute mapping to map an attribute that is named Department and to pass the attribute to a custom AWS Lambda authorizer.

To test the access limitation, the developer sets their department to Engineering in the IdP and attempts to log in to the application. The developer is denied access. The developer then updates their department to Sales in the IdP and attempts to log in. Again, the developer is denied access. The developer checks the logs and discovers that access is being denied because the developer's access token has a department value of Engineering.

Which of the following is a possible reason that the developer’s department is still being reported as Engineering instead of Sales?

- A. Authorization caching is enabled in the custom Lambda authorizer.
- B. Authorization caching is enabled on the Amazon Cognito user pool.
- C. The IAM role for the custom Lambda authorizer does not have a Department tag.
- D. The IAM role for the Amazon Cognito user pool does not have a Department tag.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #295*Topic 1*

A developer is creating an AWS Lambda function to process streaming data from an Amazon Kinesis data stream. When the Lambda function parses the data and encounters a malformed record from the stream, the Lambda function exits with an error.

The developer is observing duplicate records downstream from the function. When the developer uses a different client to examine the Kinesis data stream output, no duplicate records are visible in the stream.

What is the reason for the duplicate records?

- A. The Lambda function did not advance the Kinesis data stream pointer to the next record after the error.
- B. The Lambda event source used asynchronous invocation.
- C. The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data.
- D. The Lambda function did not keep up with the amount of data that was coming from the Kinesis data stream.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #296*Topic 1*

A developer is testing a new file storage application that uses an Amazon CloudFront distribution to serve content from an Amazon S3 bucket. The distribution accesses the S3 bucket by using an origin access identity (OAI). The S3 bucket's permissions explicitly deny access to all other users.

The application prompts users to authenticate on a login page and then uses signed cookies to allow users to access their personal storage directories. The developer has configured the distribution to use its default cache behavior with restricted viewer access and has set the origin to point to the S3 bucket. However, when the developer tries to navigate to the login page, the developer receives a 403 Forbidden error.

The developer needs to implement a solution to allow unauthenticated access to the login page. The solution also must keep all private content secure.

Which solution will meet these requirements?

- A. Add a second cache behavior to the distribution with the same origin as the default cache behavior. Set the path pattern for the second cache behavior to the path of the login page, and make viewer access unrestricted. Keep the default cache behavior’s settings unchanged.
- B. Add a second cache behavior to the distribution with the same origin as the default cache behavior. Set the path pattern for the second cache behavior to *, and make viewer access restricted. Change the default cache behavior's path pattern to the path of the login page, and make viewer access unrestricted.
- C. Add a second origin as a failover origin to the default cache behavior. Point the failover origin to the S3 bucket. Set the path pattern for the primary origin to * and make viewer access restricted. Set the path pattern for the failover origin to the path of the login page, and make viewer access unrestricted.
- D. Add a bucket policy to the S3 bucket to allow read access. Set the resource on the policy to the Amazon Resource Name (ARN) of the login page object in the S3 bucket. Add a CloudFront function to the default cache behavior to redirect unauthorized requests to the login page’s S3 URI.

**Correct Answer:** *C*

*Community vote distribution*

A (63%)

C (25%)

13%



Question #297*Topic 1*

A company must encrypt sensitive data that the company will store in Amazon S3. A developer must retain total control over the company's AWS Key Management Service (AWS KMS) key and the company’s data keys. The company currently uses an on-premises hardware security module (HSM) solution. The company wants to move its key management onto AWS.

Which solution will meet these requirements?

- A. Implement server-side encryption with AWS KMS managed keys (SSE-KMS). Use AWS CloudHSM to generate the KMS key and data keys to use with AWS KMS.
- B. Implement server-side encryption with customer-provided encryption keys (SSE-C). Use AWS CloudHSM to generate the KMS key and manage the data keys that the company will use to read and write objects to Amazon S3.
- C. Implement server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use AWS CloudHSM to generate the KMS key and manage the data keys that the company will use to read and write objects to Amazon S3.
- D. Implement server-side encryption with AWS KMS managed keys (SSE-KMS). Use the AWS KMS custom key store feature to manage the data keys. Then read or write objects to Amazon S3 as normal.

**Correct Answer:** *C*

*Community vote distribution*

D (39%)

B (33%)

A (28%)



Question #298*Topic 1*

A developer is deploying a company's application to Amazon EC2 instances. The application generates gigabytes of data files each day. The files are rarely accessed, but the files must be available to the application’s users within minutes of a request during the first year of storage. The company must retain the files for 7 years.

How can the developer implement the application to meet these requirements MOST cost-effectively?

- A. Store the files in an Amazon S3 bucket Use the S3 Glacier Instant Retrieval storage class. Create an S3 Lifecycle policy to transition the files to the S3 Glacier Deep Archive storage class after 1 year.
- B. Store the files in an Amazon S3 bucket. Use the S3 Standard storage class. Create an S3 Lifecycle policy to transition the files to the S3 Glacier Flexible Retrieval storage class after 1 year.
- C. Store the files on an Amazon Elastic Block Store (Amazon EBS) volume. Use Amazon Data Lifecycle Manager (Amazon DLM) to create snapshots of the EBS volumes and to store those snapshots in Amazon S3.
- D. Store the files on an Amazon Elastic File System (Amazon EFS) mount. Configure EFS lifecycle management to transition the files to the EFS Standard-Infrequent Access (Standard-IA) storage class after 1 year.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #299*Topic 1*

An application receives authenticated user data in the form of a JSON Web Token (JWT) from an Amazon Cognito user pool. A developer is setting up an Amazon API Gateway API to handle requests from the application and is using the token to verify the user’s identity.

Which of the following must the developer validate before the user data can be trusted?

- A. The token’s nonce
- B. The key ID in the token’s header
- C. The token's signature
- D. The token's issuer claim

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #300*Topic 1*

A new mobile app uses Amazon Cognito web identity federation. Immediately after a user logs in, the following error occurs:

AccessDenied -- Not authorized to perform sts:AssumeRoleWithWebIdentity

A developer determines that the Amazon Cognito configuration appears to be correct.

Which of the following could be the cause of the error?

- A. The app’s developer incorrectly defined the authenticated principal role access policy.
- B. The app could not confirm the user in the user pool.
- C. The app could not properly authenticate the user with the identity provider.
- D. The app’s developer incorrectly defined the authenticated principal role trust policy.

**Correct Answer:** *C*

*Community vote distribution*

D (86%)

14%



Question #301*Topic 1*

A business intelligence application runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Application-level audits require a searchable log of all API calls from users to the application. The application’s developers must store the logs centrally on AWS.

Which solution will meet these requirements?

- A. Install the Amazon CloudWatch agent on the Amazon EC2 host that runs Fargate.
- B. Configure the awslogs log driver in the ECS task definition.
- C. Configure AWS CloudTrail for the ECS containers.
- D. Install the ECS logs collector on the ECS hosts.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #302*Topic 1*

A company hosts a client-side web application for one of its subsidiaries on Amazon S3. The web application can be accessed through Amazon CloudFront from https://www.example.com. After a successful rollout, the company wants to host three more client-side web applications for its remaining subsidiaries on three separate S3 buckets.

To achieve this goal, a developer moves all the common JavaScript files and web fonts to a central S3 bucket that serves the web applications. However, during testing, the developer notices that the browser blocks the JavaScript files and web fonts.

What should the developer do to prevent the browser from blocking the JavaScript files and web fonts?

- A. Create four access points that allow access to the central S3 bucket. Assign an access point to each web application bucket.
- B. Create a bucket policy that allows access to the central S3 bucket. Attach the bucket policy to the central S3 bucket.
- C. Create a cross-origin resource sharing (CORS) configuration that allows access to the central S3 bucket. Add the CORS configuration to the central S3 bucket.
- D. Create a Content-MD5 header that provides a message integrity check for the central S3 bucket. Insert the Content-MD5 header for each web application request.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #303*Topic 1*

A company has a new application. The company needs to secure sensitive configuration data such as database connection strings, application license codes, and API keys that the application uses to access external resources. The company must track access to the configuration data for auditing purposes. The resources are managed outside the application.

The company is not required to manage rotation of the connection strings, license codes, and API keys in the application. The company must implement a solution to securely store the configuration data and to give the application access to the configuration data. The solution must comply with security best practices.

Which solution will meet these requirements MOST cost-effectively?

- A. Store the configuration data in an encrypted file on the source code bundle. Grant the application access by using IAM policies.
- B. Store the configuration data in AWS Systems Manager Parameter Store. Grant the application access by using IAM policies.
- C. Store the configuration data on an Amazon Elastic Block Store (Amazon EBS) encrypted volume. Attach the EBS volume to an Amazon EC2 instance to provide the application with access to the data.
- D. Store the configuration data in AWS Secrets Manager. Grant the application access by using IAM policies.

**Correct Answer:** *A*

*Community vote distribution*

B (93%)

7%



Question #304*Topic 1*

A developer deploys a custom application to three Amazon EC2 instances. The application processes messages from an Amazon Simple Queue Service (Amazon SQS) standard queue with default settings. When the developer runs a load test on the Amazon SQS queue, the developer discovers that the application processes many messages multiple times.

How can the developer ensure that the application processes each message exactly once?

- A. Modify the SQS standard queue to an SQS FIFO queue.
- B. Process the messages on one EC2 instance instead of three instances.
- C. Create a new SQS FIFO queue. Point the application to the new queue.
- D. Increase the DelaySeconds value on the current SQS queue.

**Correct Answer:** *D*

*Community vote distribution*

C (73%)

D (18%)

9%



Question #305*Topic 1*

A company is running its website on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group. A developer needs to secure the internet-facing connection with HTTPS. The developer uses AWS Certificate Manager (ACM) to issue an X.509 certificate.

What should the developer do to secure the connection?

- A. Configure the ALB to use the X.509 certificate by using the AWS Management Console.
- B. Configure each EC2 instance to use the same X.509 certificate by using the AWS Management Console.
- C. Export the root key of the X.509 certificate to an Amazon S3 bucket. Configure each EC2 instance to use the same X.509 certificate from the S3 bucket.
- D. Export the root key of the X.509 certificate to an Amazon S3 bucket. Configure the ALB to use the X.509 certificate from the S3 bucket.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #306*Topic 1*

A developer uses server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to store data in Amazon S3. The developer needs to decrypt and download the encrypted objects by using the GetObject API call.

What is the LEAST amount of information that the developer must provide in the API call to meet this requirement?

- A. The S3 object key only
- B. The S3 object key and the encryption key
- C. The S3 object key and the Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key
- D. The S3 object key and a randomly salted Hash-based Message Authentication Code (HMAC) value of the encryption key

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #307*Topic 1*

A developer is managing an application that uploads user files to an Amazon S3 bucket named companybucket. The company wants to maintain copies of all the files uploaded by users for compliance purposes, while ensuring users still have access to the data through the application.

Which IAM permissions should be applied to users to ensure they can create but not remove files from the bucket?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image19.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image20.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image21.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image22.png)

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #308*Topic 1*

A company is developing a microservice that will manage customer account data in an Amazon DynamoDB table. Insert, update, and delete requests will be rare. Read traffic will be heavy. The company must have the ability to access customer data quickly by using a customer ID. The microservice can tolerate stale data.

Which solution will meet these requirements with the FEWEST possible read capacity units (RCUs)?

- A. Read the table by using eventually consistent reads.
- B. Read the table by using strongly consistent reads.
- C. Read the table by using transactional reads.
- D. Read the table by using strongly consistent PartiQL queries.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #309*Topic 1*

A developer deploys an ecommerce application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group. The EC2 instances are based on an Amazon Machine Image (AMI) that uses an Amazon Elastic Block Store (Amazon EBS) root volume. After deployment, the developer notices that a third of the instances seem to be idle. These instances are not receiving requests from the load balancer. The developer verifies that all the instances are registered with the load balancer. The developer must implement a solution to allow the EC2 instances to receive requests from the load balancer.

Which action will meet this requirement?

- A. Reregister the failed instances with the ALB.
- B. Enable all Availability Zones for the ALB.
- C. Use the instance refresh feature to redeploy the EC2 Auto Scaling group.
- D. Restart the EC2 instances that are not receiving traffic.

**Correct Answer:** *C*

*Community vote distribution*

B (67%)

C (33%)



Question #310*Topic 1*

An application stores financial statements in an Amazon S3 bucket. A recent security audit found that the bucket does not comply with company standards. Currently, several IAM policies allow encrypted calls and unencrypted calls to the bucket. The company needs to create a bucket policy that forces all requests to the bucket to use encrypted connections.

Which solution will meet this requirement?

- A. Add a bucket policy with a condition of "aws:SecureTransport": "true" and an effect of "Allow."
- B. Add a bucket policy with a resource of "am:aws:s3:::https/bucketname" and an effect of "Allow."
- C. Add a bucket policy with a condition of "aws:SecureTransport": "false" and an effect of "Deny."
- D. Add a bucket policy with a resource of "arn:aws:s3:::http/bucketname" and an effect of "Deny."

**Correct Answer:** *C*

*Community vote distribution*

C (83%)

A (17%)



Question #311*Topic 1*

A company uses the AWS SDK for JavaScript in the Browser to build a web application and then hosts the application on Amazon S3. The company wants the application to support 10,000 users concurrently. The company selects Amazon DynamoDB to store user preferences in a table. There is a requirement to uniquely identify users at any scale.

Which solution will meet these requirements?

- A. Create a user cookie. Attach an 1AM role to the S3 bucket that hosts the application.
- B. Deploy an Amazon CloudFront distribution with an origin access identity (OAI) to access the S3 bucket.
- C. Configure and use Amazon Cognito. Access DynamoDB with the authenticated users.
- D. Create an IAM user for each user. Use fine-grained access control on the DynamoDB table to control access.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #312*Topic 1*

An application on AWS is using third-party APIs. A developer needs to monitor API errors in the code. The developer needs to receive notifications if failures reach a set threshold value.

How can the developer meet these requirements?

- A. Publish a custom metric to Amazon CloudWatch. Create a metric alarm. Use Amazon Simple Email Service (Amazon SES) for notification.
- B. Use an Amazon CloudWatch API error metric. Use Amazon Simple Notification Service (Amazon SNS) for notification.
- C. Use an Amazon CloudWatch API error metric. Use Amazon Simple Email Service (Amazon SES) for notification.
- D. Publish a custom metric to Amazon CloudWatch. Create a metric alarm. Use Amazon Simple Notification Service (Amazon SNS) for notification.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #313*Topic 1*

A company is preparing to migrate an application to the company’s first AWS environment. Before this migration, a developer is creating a proof-of-concept application to validate a model for building and deploying container-based applications on AWS.

Which combination of steps should the developer take to deploy the containerized proof-of-concept application with the LEAST operational effort? (Choose two.)

- A. Package the application into a .zip file by using a command line tool. Upload the package to Amazon S3.
- B. Package the application into a container image by using the Docker CLI. Upload the image to Amazon Elastic Container Registry (Amazon ECR).
- C. Deploy the application to an Amazon EC2 instance by using AWS CodeDeploy.
- D. Deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS) on AWS Fargate.
- E. Deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.

**Correct Answer:** *BD*

*Community vote distribution*

BE (100%)



Question #314*Topic 1*

A developer is building a web application that processes and tracks votes. A voting device submits the votes to an Amazon S3 bucket named DOC-EXAMPLE-BUCKET. The application needs to record the votes to an Amazon DynamoDB table named Example. The developer writes an AWS Lambda function to process the objects. The developer writes the following policy for the execution role of the Lambda function:

![img](https://img.examtopics.com/aws-certified-developer-associate/image23.png)

The developer ran a successful test on the Lambda function. However, the developer could not find a record of the invocation in the logs.

What should the developer do to record invocations of this function in the logs?

- A. Modify the Lambda function resource configuration in the AWS Management Console to log Lambda function invocations to Amazon CloudWatch Logs.
- B. Modify the Lambda code to produce event log output. Send the event log output to stdout. Redirect the stdout to Amazon CloudWatch Logs.
- C. Modify the Lambda execution role to have permissions to a create log groups, log streams, and log events in Amazon CloudWatch Logs.
- D. Modify the Lambda invocation permissions to allow DynamoDB and Amazon S3 to log Lambda actions to Amazon CloudWatch Logs.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #315*Topic 1*

A developer has written the following IAM policy to provide access to an Amazon S3 bucket:

![img](https://img.examtopics.com/aws-certified-developer-associate/image24.png)

Which access does the policy allow regarding the s3:GetObject and s3:PutObject actions?

- A. Access on all buckets except the "DOC-EXAMPLE-BUCKET" bucket
- B. Access on all buckets that start with "DOC-EXAMPLE-BUCKET" except the "DOC-EXAMPLE-BUCKET/secrets" bucket
- C. Access on all objects in the "DOC-EXAMPLE-BUCKET" bucket along with access to all S3 actions for objects in the "DOC-EXAMPLE-BUCKET" bucket that start with "secrets"
- D. Access on all objects in the "DOC-EXAMPLE-BUCKET" bucket except on objects that start with "secrets"

**Correct Answer:** *B*

*Community vote distribution*

D (85%)

B (15%)



Question #316*Topic 1*

A developer is building various microservices for an application that will run on Amazon EC2 instances. The developer needs to monitor the end-to-end view of the requests between the microservices and debug any issues in the various microservices.

What should the developer do to accomplish these tasks?

- A. Use Amazon CloudWatch to aggregate the microservices' logs and metrics, and build the monitoring dashboard.
- B. Use AWS CloudTrail to aggregate the microservices' logs and metrics, and build the monitoring dashboard.
- C. Use the AWS X-Ray SDK to add instrumentation in all the microservices, and monitor using the X-Ray service map.
- D. Use AWS Health to monitor the health of all the microservices.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #317*Topic 1*

A developer is using AWS CodeDeploy to automate a company's application deployments to Amazon EC2.

Which application specification file properties are required to ensure the software deployments do not fail? (Choose two.)

- A. The file must be a JSON-formatted file named appspec.json.
- B. The file must be a YAML-formatted file named appspec.yml.
- C. The file must be stored in AWS CodeBuild and referenced from the application's source code.
- D. The file must be placed in the root of the directory structure of the application's source code.
- E. The file must be stored in Amazon S3 and referenced from the application's source code.

**Correct Answer:** *AC*

*Community vote distribution*

BD (100%)



Question #318*Topic 1*

A developer maintains an Amazon API Gateway REST API. Customers use the API through a frontend UI and Amazon Cognito authentication.

The developer has a new version of the API that contains new endpoints and backward-incompatible interface changes. The developer needs to provide beta access to other developers on the team without affecting customers.

Which solution will meet these requirements with the LEAST operational overhead?

- A. Define a development stage on the API Gateway API. Instruct the other developers to point the endpoints to the development stage.
- B. Define a new API Gateway API that points to the new API application code. Instruct the other developers to point the endpoints to the new API.
- C. Implement a query parameter in the API application code that determines which code version to call.
- D. Specify new API Gateway endpoints for the API endpoints that the developer wants to add.

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #319*Topic 1*

A company with multiple branch locations has an analytics and reporting application. Each branch office pushes a sales report to a shared Amazon S3 bucket at a predefined time each day. The company has developed an AWS Lambda function that analyzes the reports from all branch offices in a single pass. The Lambda function stores the results in a database.

The company needs to start the analysis once each day at a specific time.

Which solution will meet these requirements MOST cost-effectively?

- A. Configure an S3 event notification to invoke the Lambda function when a branch office uploads a sales report.
- B. Create an AWS Step Functions state machine that invokes the Lambda function once each day at the predefined time.
- C. Configure the Lambda function to run continuously and to begin analysis only at the predefined time each day.
- D. Create an Amazon EventBridge scheduled rule that invokes the Lambda function once each day at the predefined time.

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #320*Topic 1*

A company is expanding the compatibility of its photo-sharing mobile app to hundreds of additional devices with unique screen dimensions and resolutions. Photos are stored in Amazon S3 in their original format and resolution. The company uses an Amazon CloudFront distribution to serve the photos. The app includes the dimension and resolution of the display as GET parameters with every request.

A developer needs to implement a solution that optimizes the photos that are served to each device to reduce load time and increase photo quality.

Which solution will meet these requirements MOST cost-effectively?

- A. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and resolutions. Create a dynamic CloudFront origin that automatically maps the request of each device to the corresponding photo variant.
- B. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and resolutions. Create a Lambda@Edge function to route requests to the corresponding photo variant by using request headers.
- C. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. Change the CloudFront TTL cache policy to the maximum value possible.
- D. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. In the same function, store a copy of the processed photos on Amazon S3 for subsequent requests.

**Correct Answer:** *A*

*Community vote distribution*

D (57%)

C (39%)

4%



Question #321*Topic 1*

A developer is monitoring an application that runs on an Amazon EC2 instance. The developer has configured a custom Amazon CloudWatch metric with data granularity of 1 second. If any issues occur, the developer wants to be notified within 30 seconds by Amazon Simple Notification Service (Amazon SNS).

What should the developer do to meet this requirement?

- A. Configure a high-resolution CloudWatch alarm.
- B. Set up a custom CloudWatch dashboard.
- C. Use Amazon CloudWatch Logs Insights.
- D. Change to a default CloudWatch metric.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #322*Topic 1*

A current architecture uses many Lambda functions invoking one another as a large state machine. The coordination of this state machine is legacy custom code that breaks easily.

Which AWS Service can help refactor and manage the state machine?

- A. AWS Data Pipeline
- B. AWS SNS with AWS SOS
- C. Amazon Elastic MapReduce
- D. AWS Step Functions

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #323*Topic 1*

A developer is running an application on an Amazon EC2 instance. When the application tries to read an Amazon S3 bucket, the application fails. The developer notices that the associated IAM role is missing the S3 read permission. The developer needs to give the application the ability to read the S3 bucket.

Which solution will meet this requirement with the LEAST application disruption?

- A. Add the permission to the role. Terminate the existing EC2 instance. Launch a new EC2 instance.
- B. Add the permission to the role so that the change will take effect automatically.
- C. Add the permission to the role. Hibernate and restart the existing EC2 instance.
- D. Add the permission to the S3 bucket. Restart the EC2 instance.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #324*Topic 1*

A company needs to develop a proof of concept for a web service application. The application will show the weather forecast for one of the company's office locations. The application will provide a REST endpoint that clients can call. Where possible, the application should use caching features provided by AWS to limit the number of requests to the backend service. The application backend will receive a small amount of traffic only during testing.

Which approach should the developer take to provide the REST endpoint MOST cost-effectively?

- A. Create a container image. Deploy the container image by using Amazon Elastic Kubernetes Service (Amazon EKS). Expose the functionality by using Amazon API Gateway.
- B. Create an AWS Lambda function by using the AWS Serverless Application Model (AWS SAM). Expose the Lambda functionality by using Amazon API Gateway.
- C. Create a container image. Deploy the container image by using Amazon Elastic Container Service (Amazon ECS). Expose the functionality by using Amazon API Gateway.
- D. Create a microservices application in a preferred programming language. Deploy the application to AWS Elastic Beanstalk. Expose the AWS Lambda functionality by using an Application Load Balancer.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #325*Topic 1*

A company's developer is creating an AWS Lambda function that will read data from an Amazon RDS database. The company's security policies require the database credentials to be encrypted at rest by AWS Key Management Service (AWS KMS) keys. The database credentials must also be automatically rotated. The Lambda function needs to be able to read the database credentials securely.

Which solution will meet these requirements?

- A. Create an AWS Secrets Manager secret for the database credentials encrypted with a KMS key. Modify the Lambda function to retrieve the secret from Secrets Manager. Attach a custom IAM policy to the Lambda function execution role to allow access to secretsmanager:GetSecretValue from the secret's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.
- B. Create an Amazon S3 bucket for the database credentials. Encrypt the database credentials with server-side encryption with KMS keys (SSE-KMS). Modify the Lambda function to retrieve the database credentials from the S3 bucket. Attach a custom IAM policy to the Lambda function execution role to allow access to S3:GetObject from the S3 bucket's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.
- C. Create SecureString parameters in AWS Systems Manager Parameter Store for the database credentials encrypted with a KMS key. Pass the parameter values by using Lambda environment variables. Attach a custom IAM policy to the Lambda function execution role to allow access to ssm:GetParameter from the parameter's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.
- D. Create String parameters in AWS Systems Manager Parameter Store for the database credentials encrypted with a KMS key. Pass the parameter values by using Lambda environment variables. Attach a custom IAM policy to the Lambda function execution role to allow access to ssm:GetParameter from the parameter's Amazon Resource Name (ARN) and to allow access to kms:Decrypt from the KMS key's ARN.

**Correct Answer:** *A*

*Community vote distribution*

A (91%)

9%



Question #326*Topic 1*

A developer is creating an application that will store personal health information (PHI). The PHI needs to be encrypted at all times. An encrypted Amazon RDS for MySQL DB instance is storing the data. The developer wants to increase the performance of the application by caching frequently accessed data while adding the ability to sort or rank the cached datasets.

Which solution will meet these requirements?

- A. Create an Amazon ElastiCache for Redis instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the cache.
- B. Create an Amazon ElastiCache for Memcached instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the cache.
- C. Create an Amazon RDS for MySQL read replica. Connect to the read replica by using SSL. Configure the read replica to store frequently accessed data.
- D. Create an Amazon DynamoDB table and a DynamoDB Accelerator (DAX) cluster for the table. Store frequently accessed data in the DynamoDB table.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #327*Topic 1*

A company manages a financial services application that stores a large volume of data in an Amazon DynamoDB table. A developer needs to improve the performance of the DynamoDB read queries without increasing the cost.

Which solution meets these requirements?

- A. Use parallel scans.
- B. Add a local secondary index (LSI).
- C. Create a DynamoDB Accelerator (DAX) cluster.
- D. Query with the ProjectionExpression parameter.

**Correct Answer:** *A*

*Community vote distribution*

A (47%)

B (29%)

D (18%)

6%



Question #328*Topic 1*

A development team is working on a mobile app that allows users to upload pictures to Amazon S3. The team expects the app will be used by hundreds of thousands of users during a single event simultaneously. Once the pictures are uploaded, the backend service will scan and parse the pictures for inappropriate content.

Which approach is the MOST resilient way to achieve this goal, which also smooths out temporary volume spikes for the backend service?

- A. Develop an AWS Lambda function to check the upload folder in the S3 bucket. If new uploaded pictures are detected, the Lambda function will scan and parse them.
- B. Once a picture is uploaded to Amazon S3, publish the event to an Amazon SQS queue. Use the queue as an event source to trigger an AWS Lambda function. In the Lambda function, scan and parse the picture.
- C. When the user uploads a picture. invoke an API hosted in Amazon API Gateway. The API will invoke an AWS Lambda function to scan and parse the picture.
- D. Create a state machine in AWS Step Functions to check the upload folder in the S3 bucket. If a new picture is detected, invoke an AWS Lambda function to scan and parse it.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #329*Topic 1*

A developer is writing an application that will run on Amazon EC2 instances in an Auto Scaling group. The developer wants to externalize the session state to support the application.

Which AWS services or resources can the developer use to meet these requirements? (Choose two.)

- A. Amazon DynamoDB
- B. Amazon Cognito
- C. Amazon ElastiCache
- D. Application Load Balancer
- E. Amazon Simple Queue Service (Amazon SQS)

**Correct Answer:** *AC*

*Community vote distribution*

AC (86%)

14%



Question #330*Topic 1*

A developer registered an AWS Lambda function as a target for an Application Load Balancer (ALB) using a CLI command. However, the Lambda function is not being invoked when the client sends requests through the ALB.

Why is the Lambda function not being invoked?

- A. A Lambda function cannot be registered as a target for an ALB.
- B. A Lambda function can be registered with an ALB using AWS Management Console only.
- C. The permissions to invoke the Lambda function are missing.
- D. Cross-zone is not enabled on the ALB.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #331*Topic 1*

A company is using AWS CodePipeline to deliver one of its applications. The delivery pipeline is triggered by changes to the main branch of an AWS CodeCommit repository and uses AWS CodeBuild to implement the test and build stages of the process and AWS CodeDeploy to deploy the application.

The pipeline has been operating successfully for several months and there have been no modifications. Following a recent change to the application's source code, AWS CodeDeploy has not deployed the updated application as expected.

What are the possible causes? (Choose two.)

- A. The change was not made in the main branch of the AWS CodeCommit repository.
- B. One of the earlier stages in the pipeline failed and the pipeline has terminated.
- C. One of the Amazon EC2 instances in the company's AWS CodePipeline cluster is inactive.
- D. The AWS CodePipeline is incorrectly configured and is not invoking AWS CodeDeploy.
- E. AWS CodePipeline does not have permissions to access AWS CodeCommit.

**Correct Answer:** *AB*

*Community vote distribution*

AB (100%)



Question #332*Topic 1*

A developer created a web API that receives requests by using an internet-facing Application Load Balancer (ALB) with an HTTPS listener. The developer configures an Amazon Cognito user pool and wants to ensure that every request to the API is authenticated through Amazon Cognito.

What should the developer do to meet this requirement?

- A. Add a listener rule to the listener to return a fixed response if the Authorization header is missing. Set the fixed response to 401 Unauthorized.
- B. Create an authentication action for the listener rules of the ALSet the rule action type to authenticate-cognito. Set the OnUnauthenticatedRequest field to "deny."
- C. Create an Amazon API Gateway API. Configure all API methods to be forwarded to the ALB endpoint. Create an authorizer of the COGNITO_USER_POOLS type. Configure every API method to use that authorizer.
- D. Create a new target group that includes an AWS Lambda function target that validates the Authorization header by using Amazon Cognito. Associate the target group with the listener.

**Correct Answer:** *C*

*Community vote distribution*

B (78%)

C (22%)



Question #333*Topic 1*

A developer needs to build an AWS CloudFormation template that self-populates the AWS Region variable that deploys the CloudFormation template.

What is the MOST operationally efficient way to determine the Region in which the template is being deployed?

- A. Use the AWS::Region pseudo parameter.
- B. Require the Region as a CloudFormation parameter.
- C. Find the Region from the AWS:StackId pseudo parameter by using the Fn::Split intrinsic function.
- D. Dynamically import the Region by referencing the relevant parameter in AWS Systems Manager Parameter Store.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #334*Topic 1*

A company has a web application that is deployed on AWS. The application uses an Amazon API Gateway API and an AWS Lambda function as its backend.

The application recently demonstrated unexpected behavior. A developer examines the Lambda function code, finds an error, and modifies the code to resolve the problem. Before deploying the change to production, the developer needs to run tests to validate that the application operates properly.

The application has only a production environment available. The developer must create a new development environment to test the code changes. The developer must also prevent other developers from overwriting these changes during the test cycle.

Which combination of steps will meet these requirements with the LEAST development effort? (Choose two.)

- A. Create a new resource in the current stage. Create a new method with Lambda proxy integration. Select the Lambda function. Add the hotfix alias. Redeploy the current stage. Test the backend.
- B. Update the Lambda function in the API Gateway API integration request to use the hotfix alias. Deploy the API Gateway API to a new stage named hotfix. Test the backend.
- C. Modify the Lambda function by fixing the code. Test the Lambda function. Create the alias hotfix. Point the alias to the $LATEST version.
- D. Modify the Lambda function by fixing the code. Test the Lambda function. When the Lambda function is working as expected, publish the Lambda function as a new version. Create the alias hotfix. Point the alias to the new version.
- E. Create a new API Gateway API for the development environment. Add a resource and method with Lambda integration. Choose the Lambda function and the hotfix alias. Deploy to a new stage. Test the backend.

**Correct Answer:** *BD*

*Community vote distribution*

BD (83%)

DE (17%)



Question #335*Topic 1*

A company that manages movie reviews wants to make its movie review data available to its customers by calling a set of REST web service endpoints. The company will develop the retrieval functionality as AWS Lambda functions and will expose the functionality to customers as an Amazon API Gateway REST API.

The company needs to ensure that no consumer exceeds 100 requests a day to the API during the initial deployment. The company decides to use API Gateway API keys to restrict access. The company creates and issues API keys for each customer.

What should the company do next to meet these requirements with the LEAST administrative effort?

- A. Create a usage plan that applies throttling at 100 requests a day. Associate the usage plan with the API keys of all customers.
- B. Create an Amazon DynamoDB table to track all the requests that use a particular API key. For each request to the API, count the number of records in the DynamoDB table for that day for the API key. If the number of requests is 100 or greater, generate an exception.
- C. Create a usage plan that applies a quota of 100 requests a day. Associate the usage plan with the API keys of all customers.
- D. Create an Amazon Aurora table to track all the requests that use a particular API key. For each request to the API, count the number of records in the Aurora table for that day for the API key. If the number of requests is 100 or greater, generate an exception.

**Correct Answer:** *B*

*Community vote distribution*

C (77%)

A (15%)

8%



Question #336*Topic 1*

A distributed application includes an AWS Lambda function that runs successfully in the DEV environment with 128 MB of memory assigned. The same function is failing in the TEST environment. The developer is monitoring the application using AWS X-Ray, but the Lambda function cannot be seen on the X-Ray service graph. The Lambda execution role has AWS X-Ray permissions.

What is the MOST LIKELY cause for AWS X-Ray not showing any data for the Lambda function?

- A. The AWS SDK needs to be included in the AWS Lambda deployment package.
- B. VPC Flow Logs are not enabled for the application VPC.
- C. Active tracing needs to be enabled for the Lambda function.
- D. The memory needs to be increased to 2 GB for the TEST environments.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #337*Topic 1*

A developer wants to process personally identifiable information by using a public HTTP API that is hosted on Amazon EC2. The developer also wants to protect the data as securely as possible in transit.

Which combination of steps will meet these requirements? (Choose two.)

- A. Use the Amazon CloudFront field-level encryption feature for the incoming data.
- B. Apply the principle of least privilege for access to the AWS Key Management Service (AWS KMS) service page.
- C. Frequently rotate any API access keys for the HTTP API.
- D. Turn on multi-factor authentication (MFA) for all IAM users.
- E. Implement TLS for the HTTP API.

**Correct Answer:** *BE*

*Community vote distribution*

AE (85%)

CE (15%)



Question #338*Topic 1*

A developer is modifying an existing AWS Lambda function. While checking the code, the developer notices hardcoded parameter values for an Amazon RDS for SQL Server user name, password, database, host, and port. There also are hardcoded parameter values for an Amazon DynamoDB table, an Amazon S3 bucket, and an Amazon Simple Notification Service (Amazon SNS) topic.

The developer wants to securely store the parameter values outside the code in an encrypted format and wants to turn on rotation for the credentials. The developer also wants to be able to reuse the parameter values from other applications and to update the parameter values without modifying code.

Which solution will meet these requirements with the LEAST operational overhead?

- A. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation. Create encrypted Lambda environment variables for the DynamoDB table, S3 bucket, and SNS topic.
- B. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation. Create SecureString parameters in AWS Systems Manager Parameter Store for the DynamoDB table, S3 bucket, and SNS topic.
- C. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Create encrypted Lambda environment variables for the DynamoDB table, S3 bucket, and SNS topic. Create a Lambda function and set the logic for the credentials rotation task. Schedule the credentials rotation task in Amazon EventBridge.
- D. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Store the DynamoDB table, S3 bucket, and SNS topic in Amazon S3. Create a Lambda function and set the logic for the credentials rotation. Invoke the Lambda function on a schedule.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #339*Topic 1*

A company is developing a serverless ecommerce web application. The application needs to make coordinated, all-or-nothing changes to multiple items in the company's inventory table in Amazon DynamoDB.

Which solution will meet these requirements?

- A. Enable transactions for the DynamoDB table. Use the BatchWriteItem operation to update the items.
- B. Use the TransactWriteItems operation to group the changes. Update the items in the table.
- C. Set up a FIFO queue using Amazon SOS. Group the changes in the queue. Update the table based on the grouped changes.
- D. Create a transaction table in an Amazon Aurora DB cluster to manage the transactions. Write a backend process to sync the Aurora DB table and the DynamoDB table.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #340*Topic 1*

A developer has created a Node.js web application on a local development machine. The developer wants to use AWS technology to host the website. The developer needs a solution that requires the least possible operational overhead and no code changes.

Which AWS service should the developer use to meet these requirements?

- A. AWS Elastic Beanstalk
- B. Amazon EC2
- C. AWS Lambda
- D. Amazon Elastic Kubernetes Service (Amazon EKS)

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #341*Topic 1*

An AWS Lambda function requires read access to an Amazon S3 bucket and requires read/write access to an Amazon DynamoDB table. The correct IAM policy already exists.

What is the MOST secure way to grant the Lambda function access to the S3 bucket and the DynamoDB table?

- A. Attach the existing IAM policy to the Lambda function.
- B. Create an IAM role for the Lambda function. Attach the existing IAM policy to the role. Attach the role to the Lambda function.
- C. Create an IAM user with programmatic access. Attach the existing IAM policy to the user. Add the user access key ID and secret access key as environment variables in the Lambda function.
- D. Add the AWS account root user access key ID and secret access key as encrypted environment variables in the Lambda function.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #342*Topic 1*

A developer has an Amazon DynamoDB table that must be in provisioned mode to comply with user requirements. The application needs to support the following:

• Average item size: 10 KB
• Item reads each second: 10 strongly consistent
• Item writes each second: 2 transactional

Which read and write capacity cost-effectively meets these requirements?

- A. Read 10; write 2
- B. Read 30; write 40
- C. Use on-demand scaling
- D. Read 300; write 400

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #343*Topic 1*

A developer is creating an AWS CloudFormation template to deploy Amazon EC2 instances across multiple AWS accounts. The developer must choose the EC2 instances from a list of approved instance types.

How can the developer incorporate the list of approved instance types in the CloudFormation template?

- A. Create a separate CloudFormation template for each EC2 instance type in the list.
- B. In the Resources section of the CloudFormation template, create resources for each EC2 instance type in the list.
- C. In the CloudFormation template, create a separate parameter for each EC2 instance type in the list.
- D. In the CloudFormation template, create a parameter with the list of EC2 instance types as Allowed Values.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #344*Topic 1*

An ecommerce company is using an AWS Lambda function behind Amazon API Gateway as its application tier. To process orders during checkout, the application calls a POST API from the frontend. The POST API invokes the Lambda function asynchronously. In rare situations, the application has not processed orders. The Lambda application logs show no errors or failures.

What should a developer do to solve this problem?

- A. Inspect the frontend logs for API failures. Call the POST API manually by using the requests from the log file.
- B. Create and inspect the Lambda dead-letter queue. Troubleshoot the failed functions. Reprocess the events.
- C. Inspect the Lambda logs in Amazon CloudWatch for possible errors. Fix the errors.
- D. Make sure that caching is disabled for the POST API in API Gateway.

**Correct Answer:** *C*

*Community vote distribution*

B (88%)

13%



Question #345*Topic 1*

A developer is building a three-tier application with an Application Load Balancer (ALB), Amazon EC2 instances, and Amazon RDS. There is an alias record in Amazon Route 53 that points to the ALB. When the developer tries to access the ALB from a laptop, the request times out.

Which logs should the developer investigate to verify that the request is reaching the AWS network?

- A. VPC Flow Logs
- B. Amazon Route 53 logs
- C. AWS Systems Manager Agent logs
- D. Amazon CloudWatch agent logs

**Correct Answer:** *D*

*Community vote distribution*

A (86%)

14%



Question #346*Topic 1*

A developer is designing a serverless application for a game in which users register and log in through a web browser. The application makes requests on behalf of users to a set of AWS Lambda functions that run behind an Amazon API Gateway HTTP API.

The developer needs to implement a solution to register and log in users on the application's sign-in page. The solution must minimize operational overhead and must minimize ongoing management of user identities.

Which solution will meet these requirements?

- A. Create Amazon Cognito user pools for external social identity providers. Configure IAM roles for the identity pools.
- B. Program the sign-in page to create users' IAM groups with the IAM roles attached to the groups.
- C. Create an Amazon RDS for SQL Server DB instance to store the users and manage the permissions to the background resources in AWS.
- D. Configure the sign-in page to register and store the users and their passwords in an Amazon DynamoDB table with an attached IAM policy.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #347*Topic 1*

A developer is creating an AWS Lambda function in VPC mode. An Amazon S3 event will invoke the Lambda function when an object is uploaded into an S3 bucket. The Lambda function will process the object and produce some analytic results that will be recorded into a file. Each processed object will also generate a log entry that will be recorded into a file.

Other Lambda functions, AWS services, and on-premises resources must have access to the result files and log file. Each log entry must also be appended to the same shared log file. The developer needs a solution that can share files and append results into an existing file.

Which solution should the developer use to meet these requirements?

- A. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in Lambda. Store the result files and log file in the mount point. Append the log entries to the log file.
- B. Create an Amazon Elastic Block Store (Amazon EBS) Multi-Attach enabled volume. Attach the EBS volume to all Lambda functions. Update the Lambda function code to download the log file, append the log entries, and upload the modified log file to Amazon EBS.
- C. Create a reference to the /tmp local directory. Store the result files and log file by using the directory reference. Append the log entry to the log file.
- D. Create a reference to the /opt storage directory. Store the result files and log file by using the directory reference. Append the log entry to the log file.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #348*Topic 1*

A developer is creating a new batch application that will run on an Amazon EC2 instance. The application requires read access to an Amazon S3 bucket. The developer needs to follow security best practices to grant S3 read access to the application.

Which solution meets these requirements?

- A. Add the permissions to an IAM policy. Attach the policy to a role. Attach the role to the EC2 instance profile.
- B. Add the permissions inline to an IAM group. Attach the group to the EC2 instance profile.
- C. Add the permissions to an IAM policy. Attach the policy to a user. Attach the user to the EC2 instance profile.
- D. Add the permissions to an IAM policy. Use IAM web identity federation to access the S3 bucket with the policy.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #349*Topic 1*

A developer is creating a serverless orchestrator that performs a series of steps to processes incoming IoT data. The orchestrator transforms the data, performs a series of calculations, and stores the results in Amazon DynamoDB. The entire process is completed in less than a minute.

The orchestrator must process tens of thousands of transactions each second. The orchestrator must not miss a transaction and must process each transaction at least once.

Which solution will meet these requirements MOST cost-effectively?

- A. Use Amazon Simple Notification Service (Amazon SNS) to process the data through an HTTP or HTTPS endpoint.
- B. Use AWS Step Functions to process the data as Standard Workflows.
- C. Use AWS Step Functions to process the data as Synchronous Express Workflows.
- D. Use AWS Step Functions to process the data as Asynchronous Express Workflows.

**Correct Answer:** *B*

*Community vote distribution*

D (62%)

C (38%)



Question #350*Topic 1*

A developer wants to reduce risk when deploying a new version of an existing AWS Lambda function. To test the Lambda function, the developer needs to split the traffic between the existing version and the new version of the Lambda function.

Which solution will meet these requirements?

- A. Configure a weighted routing policy in Amazon Route 53. Associate the versions of the Lambda function with the weighted routing policy.
- B. Create a function alias. Configure the alias to split the traffic between the two versions of the Lambda function.
- C. Create an Application Load Balancer (ALB) that uses the Lambda function as a target. Configure the ALB to split the traffic between the two versions of the Lambda function.
- D. Create the new version of the Lambda function as a Lambda layer on the existing version. Configure the function to split the traffic between the two layers.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #351*Topic 1*

A company has hundreds of AWS Lambda functions that the company's QA team needs to test by using the Lambda function URLs. A developer needs to configure the authentication of the Lambda functions to allow access so that the QA IAM group can invoke the Lambda functions by using the public URLs.

Which solution will meet these requirements?

- A. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the AWS_IAM auth type. Run another script to create an IAM identity-based policy that allows the lambda:InvokeFunctionUrl action to all the Lambda function Amazon Resource Names (ARNs). Attach the policy to the QA IAM group.
- B. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the NONE auth type. Run another script to create an IAM resource-based policy that allows the lambdainvokeFunctionUrl action to all the Lambda function Amazon Resource Names (ARNs). Attach the policy to the QA IAM group.
- C. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the AWS_IAM auth type. Run another script to loop on the Lambda functions to create an IAM identity-based policy that allows the lambdainvokeFunctionUrl action from the QA IAM group's Amazon Resource Name (ARN).
- D. Create a CLI script that loops on the Lambda functions to add a Lambda function URL with the NONE auth type. Run another script to loop on the Lambda functions to create an IAM resource-based policy that allows the lambdainvokeFunctionUrl action from the QA IAM group's Amazon Resource Name (ARN).

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #352*Topic 1*

A developer has an application that pushes files from an on-premises local server to an Amazon S3 bucket. The application uses an AWS access key and a secret key that are stored on the server for authentication. The application calls AWS Security Token Service (AWS STS) to assume a role with access to perform the S3 PUT operation to upload the file.

The developer is migrating the server to an Amazon EC2 instance. The EC2 instance is configured with an IAM instance profile in the same AWS account that owns the S3 bucket.

What is the MOST secure solution for the developer to use to migrate the automation code?

- A. Remove the code that calls the STS AssumeRole operation. Use the same access key and secret key from the server to access the S3 bucket.
- B. Remove the access key and the secret key. Use the STS AssumeRole operation to add permissions to access the S3 bucket.
- C. Remove the access key, the secret key, and the code that calls the STS AssumeRole operation. Use an IAM instance profile role that grants access to the S3 bucket.
- D. Remove the access key, the secret key, and the code that calls the STS AssumeRole operation. Create a new access key and secret key. Use the new keys to access the S3 bucket.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #353*Topic 1*

A developer is writing a new web application that will be deployed and managed with AWS Elastic Beanstalk. The application will include an Amazon RDS DB instance.

What steps should the developer take to access the RDS DB instance from the code? (Choose two.)

- A. Modify the endpoint name using either the AWS Management Console or AWS CLI.
- B. Upload the driver to Amazon S3 and reference it in the code.
- C. Download the appropriate database driver and include it with the application.
- D. Construct a connection string using the Elastic Beanstalk environment variables.
- E. Create a CNAME record referencing database instances ALIAS.

**Correct Answer:** *AD*

*Community vote distribution*

CD (59%)

AD (41%)



Question #354*Topic 1*

A developer is using AWS Amplify Hosting to build and deploy an application. The developer is receiving an increased number of bug reports from users. The developer wants to add end-to-end testing to the application to eliminate as many bugs as possible before the bugs roach production.

Which solution should the developer implement to meet these requirements?

- A. Run the amplify add test command in the Amplify CLI.
- B. Create unit tests in the application. Deploy the unit tests by using the amplify push command in the Amplify CLI.
- C. Add a test phase to the amplify.yml build settings for the application.
- D. Add a test phase to the aws-exports.js file for the application.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #355*Topic 1*

A developer is building a serverless application that uses the AWS Cloud Development Kit (AWS CDK) to deploy application infrastructure. The developer is creating an AWS Lambda function that queries an HTTP API. The API needs all requests to include an access token for authentication and authorization. The developer needs to store the access token securely and to give the Lambda function access to the token.

Which solution will meet these requirements?

- A. Update the deployment environment to inject the access token as an environment variable. Update the AWS CDK stack to capture the access token. Set the access token as an environment variable of the Lambda function. Update the Lambda function's code to reference the environment variable.
- B. Update the deployment environment to inject the access token as an environment variable. Update the AWS CDK stack to create an AWS Systems Manager Parameter Store String parameter. Set the value of the parameter from the environment variable. Update the Lambda function's execution role to allow the GetParameter action on the parameter. Update the Lambda function's code to use the AWS SDK to retrieve the access token from Parameter Store.
- C. Update the AWS CDK stack to create an AWS Systems Manager Parameter Store String parameter. Update the Lambda function's execution role to allow the GetParameter action on the parameter. Manually set the access token in Parameter Store. Update the Lambda function's code to use the AWS SDK to retrieve the access token from Parameter Store.
- D. Update the AWS CDK stack to create an AWS Secrets Manager secret. Configure the permissions for the secret and the Lambda function to allow the function to access the secret. Update the CloudFormation stack policy inside the AWS CDK stack to prevent updates to the secret. Manually set the access token in Secrets Manager. Update the Lambda function's code to use the AWS SDK to retrieve the access token from Secrets Manager.

**Correct Answer:** *A*

*Community vote distribution*

D (86%)

14%



Question #356*Topic 1*

A developer is working on an application that is deployed on an Amazon EC2 instance. The application needs to transfer a file to an Amazon S3 bucket.

What should the developer do to authenticate the application's access to the S3 bucket in the MOST secure way?

- A. Create an access key for an IAM user. Store the access key in the application's environment variables.
- B. Create an IAM role. Create an access key for the role. Store the access key in the application's environment variables.
- C. Associate an IAM role with the EC2 instance. Use the instance metadata service to retrieve the credentials.
- D. Configure a bucket policy for the S3 bucket. Allow access from the EC2 instance ID in the bucket policy.

**Correct Answer:** *D*

*Community vote distribution*

D (56%)

C (44%)



Question #357*Topic 1*

A company is running its application on the most recent generation of hare metal Amazon EC2 instances. A developer is adding a low-latency computation feature to the application. The feature depends on highly sensitive personally identifiable information (PII). When computation occurs on unencrypted data, the feature needs to run in an isolated environment that provides CPU and memory isolation.

Which solution will meet these requirements?

- A. Build and deploy the feature on the original EC2 instance store.
- B. Add the now feature in the original application. Deploy the application on a Dedicated Host.
- C. Package the now feature and deploy the now feature on AWS Lambda. Use AWS Key Management Service (AWS KMS) to encrypt and decrypt the PII.
- D. Build and deploy the now feature as part of the original application. Run the feature on AWS Nitro Enclaves.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #358*Topic 1*

A developer has created an AWS Lambda function that interacts with an Amazon Aurora MySQL database. The Lambda function makes queries to the database. After a performance test for the Lambda function, the database starts to show an error for too many connections.

Which solution will solve this problem with the LEAST operational effort?

- A. Create a road replica for the database. Query the replica database instead of the primary database.
- B. Migrate the data to an Amazon DynamoDB database.
- C. Sot a limit to the Lambda function's concurrency.
- D. Create a proxy in Amazon RDS Proxy. Query the proxy instead of the database.

**Correct Answer:** *C*

*Community vote distribution*

D (91%)

9%



Question #359*Topic 1*

A calendar application gives users the ability to schedule and share events. The application stores its data in several Amazon DynamoDB tables. The Events table stores all events for the application. The Events table has a primary key in which the partition key is the date of the event and the sort key is the user’s unique ID number.

A developer is working on a dashboard that will show each user all the details for all their events scheduled on a single day. The developer needs to get the data from the Events table.

What should the developer do to get the relevant data MOST efficiently?

- A. Perform a scan on the Events table by using the partition key and the sort key as filter expressions.
- B. Perform a query on the Events table by using the partition key and the sort key as filter expressions.
- C. Perform a scan on the Events table by using the partition key and the sort key in a key condition expression.
- D. Perform a query on the Events table by using the partition key and the sort key in a key condition expression.

**Correct Answer:** *D*

*Community vote distribution*

D (80%)

B (20%)



Question #360*Topic 1*

A developer is integrating Amazon ElastiCache in an application. The cache will store data from a database. The cached data must populate real-time dashboards.

Which caching strategy will meet these requirements?

- A. A read-through cache
- B. A write-behind cache
- C. A lazy-loading cache
- D. A write-through cache

**Correct Answer:** *A*

*Community vote distribution*

D (100%)



Question #361*Topic 1*

A social media application uses the AWS SDK for JavaScript on the frontend to get user credentials from AWS Security Token Service (AWS STS). The application stores its assets in an Amazon S3 bucket. The application serves its content by using an Amazon CloudFront distribution with the origin sot to the S3 bucket.

The credentials for the role that the application assumes to make the SDK calls are stored in plaintext in a JSON file within the application code. The developer needs to implement a solution that will allow the application to get user credentials without having any credentials hardcoded in the application code.

Which solution will meet these requirements?

- A. Add a Lambda@Edge function to the distribution. Invoke the function on viewer request. Add permissions to the function's execution role to allow the function to access AWS STS. Move all SDK calls from the frontend into the function.
- B. Add a CloudFront function to the distribution. Invoke the function on viewer request. Add permissions to the function's execution role to allow the function to access AWS STS. Move all SDK calls from the frontend into the function.
- C. Add a Lambda@Edge function to the distribution. Invoke the function on viewer request. Move the credentials from the JSON file into the function. Move all SDK calls from the frontend into the function.
- D. Add a CloudFront function to the distribution. Invoke the function on viewer request. Move the credentials from the JSON file into the function. Move all SDK calls from the frontend into the function.

**Correct Answer:** *B*

*Community vote distribution*

A (75%)

B (25%)



Question #362*Topic 1*

A company has an ecommerce application. To track product reviews, the company's development team uses an Amazon DynamoDB table.

Every record includes the following:

• A Review ID, a 16-digit universally unique identifier (UUID)
• A Product ID and User ID, 16-digit UUIDs that reference other tables
• A Product Rating on a scale of 1-5
• An optional comment from the user

The table partition key is the Review ID. The most performed query against the table is to find the 10 reviews with the highest rating for a given product.

Which index will provide the FASTEST response for this query?

- A. A global secondary index (GSI) with Product ID as the partition key and Product Rating as the sort key
- B. A global secondary index (GSI) with Product ID as the partition key and Review ID as the sort key
- C. A local secondary index (LSI) with Product ID as the partition key and Product Rating as the sort key
- D. A local secondary index (LSI) with Review ID as the partition key and Product ID as the sort key

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #363*Topic 1*

A media company wants to test its web application more frequently. The company deploys the application by using a separate AWS CloudFormation stack for each environment. The same CloudFormation template is deployed to each stack as the application progresses through the development lifecycle.

A developer needs to build an automated alert for the quality assurance (QA) team. The developer wants the alert to occur for new deployments in the final pre-production environment.

Which solution will moot these requirements?

- A. Create an Amazon Simple Notification Service (Amazon SNS) topic. Add a subscription to notify the QA team. Update the CloudFormation stack options to point to the SNS topic in the pro-production environment.
- B. Create an AWS Lambda function that notifies the QA team. Create an Amazon EventBridge rule to invoke the Lambda function on the default event bus. Filter the events on the CloudFormation service and the CloudFormation stack Amazon Resource Name (ARM).
- C. Create an Amazon CloudWatch alarm that monitors the metrics from CloudFormation. Filter the metrics on the stack name and the stack status. Configure the alarm to notify the QA team.
- D. Create an AWS Lambda function that notifies the QA team. Configure the event source mapping to receive events from CloudFormation. Specify the filtering values to limit invocations to the desired CloudFormation stack.

**Correct Answer:** *B*

*Community vote distribution*

A (83%)

B (17%)



Question #364*Topic 1*

A developer is preparing a containerized application for deployment to AWS Lambda. The developer wants to build and optimize the container images to reduce duplicate work and improve build, deploy, and update times.

Which combination of steps should the developer take to meet these requirements? (Choose two.)

- A. Use an AWS provided base image.
- B. Use the smallest compatible third-party base image.
- C. Build frequently changing layers in the imago first, followed by stable layers.
- D. Store images for functions with large layers in the same Amazon Elastic Container Registry (Amazon ECR) repository.
- E. Maximize the number of layers in the built image.

**Correct Answer:** *AD*

*Community vote distribution*

AD (100%)



Question #365*Topic 1*

A developer is using Amazon CodeGuru Profiler. The developer has configured the application with the CodeGuru Profiler agent. However, when the application runs, the developer notices that a significant number of events are missing from the generated profile.

How can the developer reduce the number of missed events in the profile?

- A. Set a lower value for the SamplingIntervalInMilliseconds property.
- B. Set a lower value for the ReportingIntervalInMilliseconds property.
- C. Set a higher value for the SamplingIntervalInMilliseconds property.
- D. Set a higher value for the ReportingIntervalInMilliseconds property.

**Correct Answer:** *A*

*Community vote distribution*

A (83%)

C (17%)



Question #366*Topic 1*

A development team set up a pipeline to launch a test environment. The developers want to automate tests for their application. The team created an AWS CodePipeline stage to deploy the application to a test environment in batches using AWS Elastic Beanstalk. A later CodePipeline stage contains a single action that uses AWS CodeBuild to run numerous automated Selenium-based tests on the deployed application. The team must speed up the pipeline without removing any of the individual tests.

Which set of actions will MOST effectively speed up application deployment and testing?

- A. Set up an all-at-once deployment in Elastic Beanstalk. Run tests in parallel with multiple CodeBuild actions.
- B. Set up a rolling update in Elastic Beanstalk. Run tests in serial with a single CodeBuild action.
- C. Set up an immutable update in Elastic Beanstalk. Run tests in serial with a single CodeBuild action.
- D. Set up a traffic-splitting deployment in Elastic Beanstalk. Run tests in parallel with multiple CodeBuild actions.

**Correct Answer:** *A*

*Community vote distribution*

A (60%)

D (40%)



Question #367*Topic 1*

A developer migrated a legacy application to an AWS Lambda function. The function uses a third-party service to pull data with a series of API calls at the end of each month. The function then processes the data to generate the monthly reports. The function has been working with no issues so far.

The third-party service recently issued a restriction to allow a fixed number of API calls each minute and each day. If the API calls exceed the limit for each minute or each day, then the service will produce errors. The API also provides the minute limit and daily limit in the response header. This restriction might extend the overall process to multiple days because the process is consuming more API calls than the available limit.

What is the MOST operationally efficient way to refactor the serverless application to accommodate this change?

- A. Use an AWS Step Functions state machine to monitor API failures. Use the Wait state to delay calling the Lambda function.
- B. Use an Amazon Simple Queue Service (Amazon SQS) queue to hold the API calls. Configure the Lambda function to poll the queue within the API threshold limits.
- C. Use an Amazon CloudWatch Logs metric to count the number of API calls. Configure an Amazon CloudWatch alarm that stops the currently running instance of the Lambda function when the metric exceeds the API threshold limits.
- D. Use Amazon Kinesis Data Firehose to batch the API calls and deliver them to an Amazon S3 bucket with an event notification to invoke the Lambda function.

**Correct Answer:** *A*

*Community vote distribution*

B (53%)

A (33%)

13%



Question #368*Topic 1*

A developer is creating an Amazon DynamoDB table by using the AWS CLI. The DynamoDB table must use server-side encryption with an AWS owned encryption key.

How should the developer create the DynamoDB table to meet these requirements?

- A. Create an AWS Key Management Service (AWS KMS) customer managed key. Provide the key’s Amazon Resource Name (ARN) in the KMSMasterKeyId parameter during creation of the DynamoDB table.
- B. Create an AWS Key Management Service (AWS KMS) AWS managed key. Provide the key’s Amazon Resource Name (ARN) in the KMSMasterKeyId parameter during creation of the DynamoDB table.
- C. Create an AWS owned key. Provide the key’s Amazon Resource Name (ARN) in the KMSMasterKeyId parameter during creation of the DynamoDB table.
- D. Create the DynamoDB table with the default encryption options.

**Correct Answer:** *C*

*Community vote distribution*

D (83%)

B (17%)



Question #369*Topic 1*

A company has a three-tier application that is deployed in Amazon Elastic Container Service (Amazon ECS). The application is using an Amazon RDS for MySQL DB instance. The application performs more database reads than writes.

During times of peak usage, the application’s performance degrades. When this performance degradation occurs, the DB instance’s ReadLatency metric in Amazon CloudWatch increases suddenly.

How should a developer modify the application to improve performance?

- A. Use Amazon ElastiCache to cache query results.
- B. Scale the ECS cluster to contain more ECS instances.
- C. Add read capacity units (RCUs) to the DB instance.
- D. Modify the ECS task definition to increase the task memory.

**Correct Answer:** *C*

*Community vote distribution*

A (88%)

13%



Question #370*Topic 1*

A company is running an application on AWS Elastic Beanstalk in a single-instance environment. The company’s deployments must avoid any downtime.

Which deployment option will meet these requirements?

- A. All at once
- B. Rolling
- C. Rolling with additional batch
- D. Immutable

**Correct Answer:** *C*

*Community vote distribution*

D (63%)

C (38%)



Question #371*Topic 1*

A developer wants to debug an application by searching and filtering log data. The application logs are stored in Amazon CloudWatch Logs. The developer creates a new metric filter to count exceptions in the application logs. However, no results are returned from the logs.

What is the reason that no filtered results are being returned?

- A. A setup of the Amazon CloudWatch interface VPC endpoint is required for filtering the CloudWatch Logs in the VPC.
- B. CloudWatch Logs only publishes metric data for events that happen after the filter is created.
- C. The log group for CloudWatch Logs should be first streamed to Amazon OpenSearch Service before metric filtering returns the results.
- D. Metric data points for logs groups can be filtered only after they are exported to an Amazon S3 bucket.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #372*Topic 1*

A company is using Amazon Cognito user pools for sign-up and login functionality for a web application. The company is using Amazon RDS for the application’s data persistence and is using Amazon API Gateway and AWS Lambda for the application’s API functionality. Users must provide their first name, last name, email address, and phone number to sign up. All API endpoints have a Cognito user pool authorizer to guard against unauthenticated requests.

A developer wants to show a personalized welcome screen to users after they log in. The welcome screen needs to show the user’s first name and the user’s previous login date. According to company policy, developers who work on the web application cannot store any personally identifiable information in RDS instances.

Which solution should the developer implement to meet these requirements?

- A. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the identity token in the Authorization header of the request. Extract the user name from the given_name claim and the user’s universally unique identifier (UUID) from the sub claim inside the identity token. Use the UUID as the key to store and retrieve the previous login information from the database.
- B. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the access token in the Authorization header of the request. Extract the user name from the given_name claim and the user’s universally unique identifier (UUID) from the sub claim inside the access token. Use the UUID as the key to store and retrieve the previous login information from the database.
- C. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the identity token in the Authorization header of the request. Extract the user name from the given_name claim and the user’s universally unique identifier (UUID) from the iss claim inside the identity token. Use the UUID as the key to store and retrieve the previous login information from the database.
- D. After successful login, submit a Cognito request for user tokens. When redirecting to the welcome screen, provide the access token in the Authorization header of the request. Extract the user name from the given_name claim and the user’s universally unique identifier (UUID) from the iss claim inside the access token. Use the UUID as the key to store and retrieve the previous login information from the database.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #373*Topic 1*

A company has a web application that contains an Amazon API Gateway REST API. A developer has created an AWS CloudFormation template for the initial deployment of the application. The developer has deployed the application successfully as part of an AWS CodePipeline continuous integration and continuous delivery (CI/CD) process. All resources and methods are available through the deployed stage endpoint.

The CloudFormation template contains the following resource types:

• AWS::ApiGateway::RestApi
• AWS::ApiGateway::Resource
• AWS::ApiGateway::Method
• AWS::ApiGateway::Stage
• AWS::ApiGateway::Deployment

The developer adds a new resource to the REST API with additional methods and redeploys the template. CloudFormation reports that the deployment is successful and that the stack is in the UPDATE_COMPLETE state. However, calls to all new methods are returning 404 (Not Found) errors.

What should the developer do to make the new methods available?

- A. Specify the disable-rollback option during the update-stack operation.
- B. Unset the CloudFormation stack failure options.
- C. Add an AWS CodeBuild stage to CodePipeline to run the aws apigateway create-deployment AWS CLI command.
- D. Add an action to CodePipeline to run the aws cloudfront create-invalidation AWS CLI command.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #374*Topic 1*

A company is developing a publicly accessible single-page application. The application makes calls from a client web browser to backend services to provide a user interface to customers. The application depends on a third-party web service exposed as an HTTP API. The web client must provide an API key to the third-party web service by using the HTTP header as part of the HTTP request. The company’s API key must not be exposed to the users of the web application.

Which solution will meet these requirements MOST cost-effectively?

- A. Use Amazon API Gateway to create a private REST API. Create an HTTP integration to integrate with the third-party HTTP API. Add the company’s API key to the HTTP headers list of the integration request configuration.
- B. Use Amazon API Gateway to create a private REST API. Create an AWS Lambda proxy integration. Make calls to the third-party HTTP API from the Lambda function. Pass the company's API key as an HTTP request header.
- C. Use Amazon API Gateway to create a REST API. Create an HTTP integration to integrate with the third-party HTTP API. Add the company’s API key to the HTTP headers list of the integration request configuration.
- D. Use Amazon API Gateway to create a REST API. Create an AWS Lambda proxy integration. Make calls to the third-party HTTP API from the Lambda function. Pass the company’s API key as an HTTP request header.

**Correct Answer:** *B*

*Community vote distribution*

C (79%)

14%

7%



Question #375*Topic 1*

A company is developing a publicly accessible single-page application. The application makes calls from a client web browser to backend services to provide a user interface to customers. The application depends on a third-party web service exposed as an HTTP API. The web client must provide an API key to the third-party web service by using the HTTP header as part of the HTTP request. The company’s API key must not be exposed to the users of the web application.

Which solution will meet these requirements MOST cost-effectively?

- A. For each integration, configure a mapping template for Content-Type text/json that transforms the incoming request by using Velocity Template Language (VTL).
- B. For each integration, configure a mapping template for Content-Type text/json that transforms the incoming request by using Embedded JavaScript (EJS).
- C. For each integration, configure a mapping template for Content-Type application/json that transforms the incoming request by using Velocity Template Language (VTL).
- D. For each integration, configure a mapping template for Content-Type application/json that transforms the incoming request by using Embedded JavaScript (EJS).

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #376*Topic 1*

A developer has deployed a serverless application to AWS Lambda. The developer needs to encrypt the Lambda function's environment variables by using an AWS Key Management Service (AWS KMS) customer managed key. When the developer attempts to configure the KMS key for the environment variables, an error occurs. The error message indicates that access to the KMS key was denied.

What should the developer do to resolve this error?

- A. Set an IAM policy that allows the developer to have appropriate access to the KMS key.
- B. Set an IAM policy that allows the Lambda function to have appropriate access to the KMS key.
- C. Apply the AWSLambdaBasicExecutionRole managed policy to the Lambda function.
- D. Create a trust policy for the Lambda function. In the trust policy, specify kms.amazonaws.com as a service principal.

**Correct Answer:** *B*

*Community vote distribution*

A (93%)

7%



Question #377*Topic 1*

A company is creating a continuous integration and continuous delivery (CI/CD) process by using AWS CodePipeline for its application on AWS. The CI/CD process will pull code from an AWS CodeCommit repository, create the application infrastructure by using AWS CloudFormation, deploy the frontend code to an Amazon S3 bucket that is configured for static website hosting, and deploy the application backend on an Amazon Elastic Container Service (Amazon ECS) cluster.

A developer needs to create a new CodePipeline stage that creates the application infrastructure.

Which solution will meet these requirements with the LEAST operational overhead?

- A. Create a new action with AWS Lambda as the action provider. Create a Lambda function that makes an AWS SDK API call to create the CloudFormation stack.
- B. Create a new action with CloudFormation as the action provider. Set the action mode to CREATE_UPDATE. Target the CloudFormation stack to be launched.
- C. Create a new action with Jenkins as the action provider. Create and configure a Jenkins job to make an API call by using the AWS CLI to create the CloudFormation sack.
- D. Create a new action with AWS CodeBuild as the action provider. Configure the buildspec to make an API call by using the AWS CLI to create the CloudFormation stack.

**Correct Answer:** *D*

*Community vote distribution*

B (86%)

14%



Question #378*Topic 1*

A developer is setting up the deployment of application stacks to new test environments by using the AWS Cloud Development Kit (AWS CDK). The application contains the code for several AWS Lambda functions that will be deployed as assets. Each Lambda function is defined by using the AWS CDK Lambda construct library.

The developer has already successfully deployed the application stacks to the alpha environment in the first account by using the AWS CDK CLI’s cdk deploy command. The developer is preparing to deploy to the beta environment in a second account for the first time. The developer makes no significant changes to the CDK code between deployments, but the initial deployment in the second account is unsuccessful and returns a NoSuchBucket error.

Which command should the developer run before redeployment to resolve this error?

- A. cdk synth
- B. cdk bootstrap
- C. cdk init
- D. cdk destroy

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #379*Topic 1*

A company’s infrastructure team is using AWS CloudFormation to deploy common infrastructure resources such as VPCs, subnets, Amazon RDS DB cluster endpoints, and Amazon DynamoDB tables for other teams to use. The CloudFormation templates also create AWS Systems Manager Parameter Store parameters to store information about these resources for application developers. The parameters include elements such as RDS DB cluster endpoints for clusters that the templates create.

A developer creates a CloudFormation template that includes an AWS Lambda function that reads the SSM parameter value to access RDS DB cluster endpoints. The Lambda function has reserved concurrency configured to match the value of the Parameter Store maximum throughput (transactions per second) quota for the account and the AWS Region that hosts the account.

The developer wants to prepare for a potential load increase. The developer expects the Lambda function’s concurrent invocation rate to be two times more than the Parameter Store maximum throughput quota value.

Which solution will prepare for the load increase MOST cost-effectively?

- A. Move the code that is reading the SSM parameter value outside the Lambda function handler. Store the RDS DB cluster endpoint value in a global variable. Use the endpoint value inside the Lambda function handler.
- B. Move the code that is reading the SSM parameter value outside the Lambda function handler. Store the RDS DB cluster endpoint value in an environment variable. Use the endpoint value inside the Lambda function handler.
- C. Request a service quota increase for the Systems Manager GetParameter rate quota value to match the Lambda function's concurrency.
- D. Add an SSM parameter to the CloudFormation template that resolves the RDS DB cluster endpoint value at deployment time by using the ssm dynamic reference. Update the Lambda function resource in CloudFormation to create an environment variable that references the newly created SSM parameter.

**Correct Answer:** *D*

*Community vote distribution*

D (50%)

B (28%)

A (22%)



Question #380*Topic 1*

A developer is troubleshooting an application that uses Amazon DynamoDB in the us-west-2 Region. The application is deployed to an Amazon EC2 instance. The application requires read-only permissions to a table that is named Cars. The EC2 instance has an attached IAM role that contains the following IAM policy:

![img](https://img.examtopics.com/aws-certified-developer-associate/image25.png)

When the application tries to read from the Cars table, an Access Denied error occurs.

How can the developer resolve this error?

- A. Modify the IAM policy resource to be “arn:aws:dynamodb-us-west-2:account-id:table/*”
- B. Modify the IAM policy to include the dynamodb:* action.
- C. Create a trust policy that specifies the EC2 service principal. Associate the role with the policy.
- D. Create a trust relationship between the role and dynamodb.amazonaws.com.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #381*Topic 1*

A developer has created a Java application that runs on AWS Elastic Beanstalk with the default Elastic Beanstalk instance profile. The developer needs to visualize a map of the application’s interactions with AWS services to help identify and debug issues with the application.

Which combination of steps should the developer take to meet this requirement with the LEAST operational effort? (Choose two.)

- A. Instrument the code by using the AWS X-Ray software development kit (SDK) for Java.
- B. Create an Elastic Beanstalk configuration file to download and install the AWS X-Ray daemon on the underlying Amazon EC2 instances.
- C. Enable the AWS X-Ray daemon in the Elastic Beanstalk console.
- D. Enable Elastic Beanstalk enhanced health reporting.
- E. Configure AWS CloudTrail to visualize the services map.

**Correct Answer:** *DE*

*Community vote distribution*

AC (64%)

CD (18%)

Other



Question #382*Topic 1*

A developer is creating a photo website. Amazon Route 53 hosts the website’s domain. The developer wants to store the application code and images in an Amazon S3 bucket. The developer also wants to use Amazon CloudFront to deliver the images to users.

The developer has created the S3 bucket and a CloudFront distribution. The developer wants the images to be accessed only through the website’s domain. Users must not use the S3 URLs.

Which solution will meet these requirements?

- A. Create a CloudFront origin access identity (OAI). Associate the OAI with the CloudFront distribution. Modify the S3 bucket policy to allow access from only the OAI. Create an alias in Route 53 that points the website domain to the S3 bucket.
- B. Create a CloudFront origin access identity (OAI). Associate the OAI with the CloudFront distribution. Modify the S3 bucket policy to allow access from only the OAI. Update the Route 53 records to point the website domain to the CloudFront domain name.
- C. Block public access in the S3 bucket policy. Configure CloudFront to use the S3 bucket endpoint. Create an alias in Route 53 that points the website domain to the S3 bucket.
- D. Block public access in the S3 bucket policy. Configure CloudFront to use the S3 bucket endpoint. Create an alias in Route 53 that points the website domain to the CloudFront domain name.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #383*Topic 1*

Deploy the image to the production Amazon Elastic Container Service (Amazon ECS) cluster by using AWS CodeDeploy.

Recently, the CodeDeploy deployments began failing in Stage 4. The deployments are unable to perform rollbacks. The developer must minimize the number of failures that reach production without slowing down the pipeline.

Which solution will meet these requirements?

- A. Add a human review and approval stage between Stage 3 and Stage 4.
- B. Perform a more comprehensive test before Stage 2 by adding a test for the CodeCommit trigger in Stage 1.
- C. Replace Stage 4 with a manual deployment until the developer can add more quality tests to the automation.
- D. Modify Stage 3 so that it uses Amazon ECS and CodeDeploy.

**Correct Answer:** *D*

*Community vote distribution*

B (80%)

A (20%)



Question #384*Topic 1*

An application is real-time processing millions of events that are received through an API.

What service could be used to allow multiple consumers to process the data concurrently and MOST cost-effectively?

- A. Amazon SNS with fanout to an SQS queue for each application
- B. Amazon SNS with fanout to an SQS FIFO (first-in, first-out) queue for each application
- C. Amazon Kinesis Firehose
- D. Amazon Kinesis Streams

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #385*Topic 1*

A logistics company built an asset-tracking microservice by using the AWS Serverless Application Model (AWS SAM). One of the microservice’s AWS Lambda functions needs to import a large geospatial dataset from Amazon S3 before the function can process the requests. The import of the dataset requires significant time and is causing the function to take too long to finish running. The results are increased latency and cost.

A developer needs to optimize the function to process requests faster with the least possible cost.

Which solution will meet these requirements?

- A. Store the geospatial dataset on Amazon Elastic File System (Amazon EFS) instead of on Amazon S3. Attach the EFS file system to the function. Retrieve the dataset by accessing the file system for every invocation.
- B. Store the geospatial dataset on Amazon Elastic File System (Amazon EFS) instead of on Amazon S3. Attach the EFS file system to the function. Cache the data in the /tmp directory for use with every invocation.
- C. Declare the Amazon S3 SDK and object request outside of the function handler. Configure provisioned concurrency for the function.
- D. Declare the Amazon S3 SDK and object request outside of the function handler. Increase memory capacity of the function to 1,769 MB.

**Correct Answer:** *D*

*Community vote distribution*

C (43%)

B (43%)

14%



Question #386*Topic 1*

A company set up a continuous build process that uses AWS CodeBuild and AWS CodeCommit. During the development phase, developers are frequently pushing code and causing significant build failures. The company wants a solution that will build code before the developers push the code to the main branch.

Which solution meets these requirements MOST cost-effectively?

- A. Configure an Amazon EC2 instance with the CodeBuild agent to build the code.
- B. Configure CodeBuild jobs on AWS for each branch build process.
- C. Configure the CodeBuild agent to build the code in the local system.
- D. Configure a Jenkins plugin for CodeBuild to run the code build process.

**Correct Answer:** *C*

*Community vote distribution*

C (58%)

B (42%)



Question #387*Topic 1*

A company uses AWS CloudFormation to deploy an application that uses an Amazon API Gateway REST API with AWS Lambda function integration. The application uses Amazon DynamoDB for data persistence. The application has three stages: development, testing, and production. Each stage uses its own DynamoDB table.

The company has encountered unexpected issues when promoting changes to the production stage. The changes were successful in the development and testing stages. A developer needs to route 20% of the traffic to the new production stage API with the next production release. The developer needs to route the remaining 80% of the traffic to the existing production stage. The solution must minimize the number of errors that any single customer experiences.

Which approach should the developer take to meet these requirements?

- A. Update 20% of the planned changes to the production stage. Deploy the new production stage. Monitor the results. Repeat this process five times to test all planned changes.
- B. Update the Amazon Route 53 DNS record entry for the production stage API to use a weighted routing policy. Set the weight to a value of 80. Add a second record for the production domain name. Change the second routing policy to a weighted routing policy. Set the weight of the second policy to a value of 20. Change the alias of the second policy to use the testing stage API.
- C. Deploy an Application Load Balancer (ALB) in front of the REST API. Change the production API Amazon Route 53 record to point traffic to the ALB. Register the production and testing stages as targets of the ALB with weights of 80% and 20%, respectively.
- D. Configure canary settings for the production stage API. Change the percentage of traffic directed to canary deployment to 20%. Make the planned updates to the production stage. Deploy the changes.

**Correct Answer:** *D*

*Community vote distribution*

D (67%)

C (22%)

11%



Question #388*Topic 1*

A company’s developer has deployed an application in AWS by using AWS CloudFormation. The CloudFormation stack includes parameters in AWS Systems Manager Parameter Store that the application uses as configuration settings. The application can modify the parameter values.

When the developer updated the stack to create additional resources with tags, the developer noted that the parameter values were reset and that the values ignored the latest changes made by the application. The developer needs to change the way the company deploys the CloudFormation stack. The developer also needs to avoid resetting the parameter values outside the stack.

Which solution will meet these requirements with the LEAST development effort?

- A. Modify the CloudFormation stack to set the deletion policy to Retain for the Parameter Store parameters.
- B. Create an Amazon DynamoDB table as a resource in the CloudFormation stack to hold configuration data for the application. Migrate the parameters that the application is modifying from Parameter Store to the DynamoDB table.
- C. Create an Amazon RDS DB instance as a resource in the CloudFormation stack. Create a table in the database for parameter configuration. Migrate the parameters that the application is modifying from Parameter Store to the configuration table.
- D. Modify the CloudFormation stack policy to deny updates on Parameter Store parameters.

**Correct Answer:** *D*

*Community vote distribution*

D (78%)

11%

11%



Question #389*Topic 1*

A company deploys a new application to AWS. The company is streaming application logs to Amazon CloudWatch Logs. The company’s development team must receive notification by email when the word “ERROR” appears in any log lines. A developer sets up an Amazon Simple Notification Service (Amazon SNS) topic and subscribes the development team to the topic.

What should the developer do next to meet the requirements?

- A. Select the appropriate log group. Create a CloudWatch metric filter with “ERROR” as the search term. Create an alarm on this metric that notifies the SNS topic when the metric is 1 or higher.
- B. In CloudWatch Logs Insights, select the appropriate log group. Create a metric query to search for the term “ERROR” in the logs. Create an alarm on this metric that notifies the SNS topic when the metric is 1 or higher.
- C. Select the appropriate log group. Create an SNS subscription filter with “ERROR” as the filter pattern. Select the SNS topic as the destination.
- D. Create a CloudWatch alarm that includes “ERROR” as a filter pattern, a log group dimension that defines the appropriate log group, and a destination that notifies the SNS topic.

**Correct Answer:** *A*

*Community vote distribution*

A (90%)

10%



Question #390*Topic 1*

A developer runs an application that uses an Amazon API Gateway REST API. The developer needs to implement a solution to proactively monitor the health of both API responses and latencies in case a deployment causes a service disruption despite passing deployment pipeline tests. The solution also must check for endpoint vulnerability and unauthorized changes to APIs, URLs, and website content.

Which solution will meet these requirements?

- A. Use the Amazon CloudWatch Synthetics canary functionality to call the API and check the responses and duration of the request.
- B. Use a custom health check in the API that queries hosts to check the duration of the request.
- C. Implement a custom AWS Lambda function with an Amazon EventBridge event to periodically call the API and check the responses and duration of the request.
- D. Use the built-in API Gateway metrics to monitor the average duration of the API response.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #391*Topic 1*

A company is developing a social leaderboard application in the AWS Cloud. The company will host the application on Amazon S3. The application will retrieve data from an Amazon DynamoDB table for anyone who visits the application without a login. A developer must ensure that all the interactions with AWS services are secure and that all the interactions use proper permissions.

Which AWS feature can the developer use to meet these requirements?

- A. Amazon Cognito identity pool
- B. Amazon Cognito user pool
- C. IAM identity-based policy
- D. Amazon Cognito authorizer in Amazon API Gateway

**Correct Answer:** *C*

*Community vote distribution*

A (80%)

C (20%)



Question #392*Topic 1*

A developer is creating a new application for a pet store. The application will manage customer rewards points. The developer will use Amazon DynamoDB to store the data for the application. The developer needs to optimize query performance and limit partition overload before actual performance analysis.

Which option should the developer use for a partition key to meet these requirements?

- A. A randomly generated universally unique identifier (UUID)
- B. The customer’s full name
- C. The date when the customer signed up for the rewards program
- D. The name of the customer’s pet

**Correct Answer:** *A*

*Community vote distribution*

A (75%)

C (25%)



Question #393*Topic 1*

A company needs an application that consumes logs from Apache HTTP servers at a large scale with near real-time processing. The logs will vary in size from 300 KB to 500 KB. As part of processing, the company needs to convert the logs to JSON format and then upload the logs to an Amazon OpenSearch Service cluster.

Which combination of steps will meet these requirements? (Choose two.)

- A. Install the Amazon CloudWatch agent on the Apache HTTP servers. Configure the CloudWatch agent to push the logs to an Amazon Simple Queue Service (Amazon SQS) queue.
- B. Install the Amazon CloudWatch agent on the Apache HTTP servers. Configure the CloudWatch agent to push the logs to the Amazon Kinesis Data Firehose delivery stream.
- C. Install the Amazon Kinesis agent on the Apache HTTP servers. Configure the Kinesis agent to push the logs to the Amazon Kinesis Data Firehose delivery stream.
- D. Create an AWS Lambda function that converts the logs to JSON format and pushes the results to the OpenSearch Service cluster. Consume the logs from the Amazon Simple Queue Service (Amazon SQS) queue by using the Lambda function.
- E. Create an Amazon Kinesis Data Firehose delivery stream. Set the source as Direct PUT. Implement an AWS Lambda function to convert the logs to JSON format. Enable source record transformation on the Kinesis Data Firehose delivery stream for the Lambda function. Set the OpenSearch Service cluster as the destination.

**Correct Answer:** *DE*

*Community vote distribution*

CE (58%)

BE (42%)



Question #394*Topic 1*

A company is building a serverless application that uses AWS Lambda. The application includes Lambda functions that are exposed by Amazon API Gateway. The functions will use several large third-party libraries, and the build artifacts will exceed 50 MB in size.

Which combination of steps should a developer take to prepare and perform the deployment? (Choose two.)

- A. Issue the aws lambda update-function-code CLI command with the --zip-file fileb://my-function.zip parameter.
- B. Upload the build artifact to Amazon S3.
- C. Issue the aws cloudformation package CLI command.
- D. Issue the aws lambda update-function-code CLI command with the --s3-bucket and --s3-key parameters.
- E. Issue the aws lambda update-function-code CLI command with a parameter that points to the source code in AWS CodeCommit.

**Correct Answer:** *CE*

*Community vote distribution*

BD (100%)



Question #395*Topic 1*

A developer is implementing an AWS Lambda function that will be invoked when an object is uploaded to Amazon S3. The developer wants to test the Lambda function in a local development machine before publishing the function to a production AWS account.

Which solution will meet these requirements with the LEAST operational overhead?

- A. Upload an object to Amazon S3 by using the aws s3api put-object CLI command. Wait for the local Lambda invocation from the S3 event.
- B. Create a sample JSON text file for a put object S3 event. Invoke the Lambda function locally. Use the aws lambda invoke CLI command with the JSON file and Lambda function name as arguments.
- C. Use the sam local start-lambda CLI command to start Lambda. Use the sam local generate-event s3 put CLI command to create the Lambda test JSON file. Use the sam local invoke CLI command with the JSON file as the argument to invoke the Lambda function.
- D. Create a JSON string for the put object S3 event. In the AWS Management Console, use the JSON string to create a test event for the local Lambda function. Perform the test.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #396*Topic 1*

A company is running Amazon EC2 instances in multiple AWS accounts. A developer needs to implement an application that collects all the lifecycle events of the EC2 instances. The application needs to store the lifecycle events in a single Amazon Simple Queue Service (Amazon SQS) queue in the company's main AWS account for further processing.

Which solution will meet these requirements?

- A. Configure Amazon EC2 to deliver the EC2 instance lifecycle events from all accounts to the Amazon EventBridge event bus of the main account. Add an EventBridge rule to the event bus of the main account that matches all EC2 instance lifecycle events. Add the SQS queue as a target of the rule.
- B. Use the resource policies of the SQS queue in the main account to give each account permissions to write to that SQS queue. Add to the Amazon EventBridge event bus of each account an EventBridge rule that matches all EC2 instance lifecycle events. Add the SQS queue in the main account as a target of the rule.
- C. Write an AWS Lambda function that scans through all EC2 instances in the company accounts to detect EC2 instance lifecycle changes. Configure the Lambda function to write a notification message to the SQS queue in the main account if the function detects an EC2 instance lifecycle change. Add an Amazon EventBridge scheduled rule that invokes the Lambda function every minute.
- D. Configure the permissions on the main account event bus to receive events from all accounts. Create an Amazon EventBridge rule in each account to send all the EC2 instance lifecycle events to the main account event bus. Add an EventBridge rule to the main account event bus that matches all EC2 instance lifecycle events. Set the SQS queue as a target for the rule.

**Correct Answer:** *B*

*Community vote distribution*

D (50%)

A (33%)

B (17%)



Question #397*Topic 1*

A developer has an application container, an AWS Lambda function, and an Amazon Simple Queue Service (Amazon SQS) queue. The Lambda function uses the SQS queue as an event source. The Lambda function makes a call to a third-party machine learning API when the function is invoked. The response from the third-party API can take up to 60 seconds to return.

The Lambda function’s timeout value is currently 65 seconds. The developer has noticed that the Lambda function sometimes processes duplicate messages from the SQS queue.

What should the developer do to ensure that the Lambda function does not process duplicate messages?

- A. Configure the Lambda function with a larger amount of memory.
- B. Configure an increase in the Lambda function's timeout value.
- C. Configure the SQS queue’s delivery delay value to be greater than the maximum time it takes to call the third-party API.
- D. Configure the SQS queue’s visibility timeout value to be greater than the maximum time it takes to call the third-party API.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #398*Topic 1*

When using the AWS Encryption SDK, how does the developer keep track of the data encryption keys used to encrypt data?

- A. The developer must manually keep track of the data encryption keys used for each data object.
- B. The SDK encrypts the data encryption key and stores it (encrypted) as part of the returned ciphertext.
- C. The SDK stores the data encryption keys automatically in Amazon S3.
- D. The data encryption key is stored in the Userdata for the EC2 instance.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #399*Topic 1*

A company is automating a process and is moving the process from on premises to AWS. The company is using an AWS CodePipeline pipeline.

Before publishing the code, the company wants to create and implement test suites when the pipeline is running. The pipeline should publish the code only after the pipeline passes all the checks.

Which solution will implement this functionality with the LEAST operational overhead?

- A. Create a custom test action for CodePipeline. Host the job worker on the on-premises server.
- B. Use AWS CodeBuild and include the test checks. When the test checks clear, use AWS CodeDeploy to deploy and publish the code.
- C. Create a custom test action for CodePipeline. Host the job worker on an Amazon EC2 instance to run the testing request.
- D. Write test cases. Test the test cases locally before pushing the code changes to the version control.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #400*Topic 1*

A company built an online event platform. For each event, the company organizes quizzes and generates leaderboards that are based on the quiz scores. The company stores the leaderboard data in Amazon DynamoDB and retains the data for 30 days after an event is complete. The company then uses a scheduled job to delete the old leaderboard data

The DynamoDB table is configured with a fixed write capacity. During the months when many events occur, the DynamoDB write API requests are throttled when the scheduled delete job runs.

A developer must create a long-term solution that deletes the old leaderboard data and optimizes write throughput.

Which solution meets these requirements?

- A. Configure a TTL attribute for the leaderboard data.
- B. Use DynamoDB Streams to schedule and delete the leaderboard data
- C. Use AWS Step Functions to schedule and delete the leaderboard data.
- D. Set a higher write capacity when the scheduled delete job runs.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #401*Topic 1*

A developer is implementing a serverless application by using AWS CloudFormation to provision Amazon S3 web hosting, Amazon API Gateway, and AWS Lambda functions. The Lambda function source code is zipped and uploaded to an S3 bucket. The S3 object key of the zipped source code is specified in the Lambda resource in the CloudFormation template.

The developer notices that there are no changes in the Lambda function every time the CloudFormation stack is updated.

How can the developer resolve this issue?

- A. Create a new Lambda function alias before updating the CloudFormation stack.
- B. Change the S3 object key or the S3 version in the CloudFormation template before updating the CloudFormation stack.
- C. Upload the zipped source code to another $3 bucket before updating the CloudFormation stack.
- D. Associate a code signing configuration with the Lambda function before updating the CloudFormation stack.

**Correct Answer:** *B*

*Community vote distribution*

B (88%)

13%



Question #402*Topic 1*

A company uses Amazon DynamoDB as a data store for its order management system. The company frontend application stores orders in a DynamoDB table. The DynamoDB table is configured to send change events to a DynamoDB stream. The company uses an AWS Lambda function to log and process the incoming orders based on data from the DynamoDB stream.

An operational review reveals that the order quantity of incoming orders is sometimes set to 0. A developer needs to create a dashboard that will show how many unique customers this problem affects each day.

What should the developer do to implement the dashboard?

- A. Grant the Lambda function's execution role permissions to upload logs to Amazon CloudWatch Logs. Implement a CloudWatch Logs Insights query that selects the number of unique customers for orders with order quantity equal to 0 and groups the results in 1-day periods. Add the CloudWatch Logs Insights query to a CloudWatch dashboard.
- B. Use Amazon Athena to query AWS CloudTrail API logs for API calls. Implement an Athena query that selects the number of unique customers for orders with order quantity equal to 0 and groups the results in 1-day periods. Add the Athena query to an Amazon CloudWatch dashboard.
- C. Configure the Lambda function to send events to Amazon EventBridge. Create an EventBridge rule that groups the number of unique customers for orders with order quantity equal to 0 in 1-day periods. Add a CloudWatch dashboard as the target of the rule.
- D. Turn on custom Amazon CloudWatch metrics for the DynamoDB stream of the DynamoDB table. Create a CloudWatch alarm that groups the number of unique customers for orders with order quantity equal to 0 in 1-day periods. Add the CloudWatch alarm to a CloudWatch dashboard.

**Correct Answer:** *C*

*Community vote distribution*

A (83%)

D (17%)



Question #403*Topic 1*

A developer has built an AWS Lambda function to update a legacy system. The developer has set the Lambda function’s trigger type to Amazon EventBridge.

The legacy system was overwhelmed after the initial deployment of the Lambda function. The root cause was too many requests to the legacy system at the same time. The developer needs to limit the number of requests to the legacy system and must maintain high throughput.

Which solution will meet these requirements without requiring architecture changes?

- A. Configure provisioned concurrency for the Lambda function. Set the provisioned concurrency to the desired number of maximum simultaneous function calls.
- B. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Configure the SQS queue to invoke the Lambda function. Update the EventBridge rule to target the SQS queue.
- C. Configure reserved concurrency for the Lambda function. Increase the number of asynchronous invocation retry attempts and the maximum event age for the Lambda function.
- D. Create an Amazon Simple Queue Service (Amazon SQS) standard queue. Configure the SQS queue to invoke the Lambda function. Update the EventBridge rule to target the SQS queue.
  Configure reserved concurrency for the Lambda function.

**Correct Answer:** *D*

*Community vote distribution*

C (59%)

A (41%)



Question #404*Topic 1*

A company wants to migrate applications from its on-premises servers to AWS. As a first step, the company is modifying and migrating a non-critical application to a single Amazon EC2 instance. The application will store information in an Amazon S3 bucket. The company needs to follow security best practices when deploying the application on AWS.

Which approach should the company take to allow the application to interact with Amazon S3?

- A. Create an IAM role that has administrative access to AWS. Attach the role to the EC2 instance.
- B. Create an IAM user. Attach the AdministratorAccess policy. Copy the generated access key and secret key. Within the application code, use the access key and secret key along with the AWS SDK to communicate with Amazon S3.
- C. Create an IAM role that has the necessary access to Amazon S3. Attach the role to the EC2 instance.
- D. Create an IAM user. Attach a policy that provides the necessary access to Amazon S3. Copy the generated access key and secret key. Within the application code, use the access key and secret key along with the AWS SDK to communicate with Amazon S3.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #405*Topic 1*

A developer needs to secure the static assets in a company’s Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The company has an Amazon CloudFront distribution that serves the S3 bucket’s assets to the public. The developer has already created the origin access identity (OAI) and has associated the OAI with the distribution. The developer must write a bucket policy that allows only the CloudFront distribution to access the S3 bucket.

Which policy will meet this requirement MOST securely?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image26.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image27.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image28.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image29.png)

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #406*Topic 1*

A company’s mock data from development environments has been appearing in the production environment. The company wants a member of the Admin IAM user group to manually approve all promotions to production in the company’s AWS CodePipeline pipeline before the promotions can proceed.

Which combination of steps will meet these requirements? (Choose two.)

- A. Add an approval action to the pipeline. Set the Provider field to Group and the Owner field to the name of the IAM user group. Set the approval action to run before the production deploy action.
- B. Add an approval action to the pipeline. Set the Provider field to Manual and the Owner field to AWS. Set the approval action to run before the production deploy action.
- C. Add an approval action to the pipeline. Set the Provider field to Manual and the Owner field to the name of the IAM user group. Set the approval action to run before the production deploy action.
- D. Add an inline policy to the Admin IAM user group to allow the codepipeline:GetPipeline* action and the codepipeline:PutApprovalResult action. Set the pipeline as the resource for the policy.
- E. Add an inline policy to the Admin IAM user group to allow the codepipeline:GetPipeline* action. Set the pipeline as the resource for the policy. Add a second inline policy to allow the codepipeline:PutApprovalResult action. Set the approval action as the resource for the policy.

**Correct Answer:** *CE*

*Community vote distribution*

BE (43%)

CD (36%)

BD (21%)



Question #407*Topic 1*

A company runs an application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group. The company has configured the Amazon CloudWatch agent to capture custom metrics within the instances. When the company launches new instances, the agent starts successfully, but it does not deliver any custom metrics to CloudWatch.

Which action will deliver the custom metrics to CloudWatch?

- A. Ensure that the CloudWatch agent JSON configuration file has an IAM policy that has the CloudWatch:PutMetricLogs permission attached.
- B. Ensure that the role used in the EC2 Auto Scaling launch template has the CloudWatchAgentServerPolicy IAM policy attached.
- C. Attach the CloudWatchAgentServerPolicy IAM policy directly to the EC2 Auto Scaling launch template in the AWS Management Console.
- D. Attach a JSON script with the CloudWatch:PutMetricLogs permission to the EC2 Auto Scaling launch template in the AVVS Management Console.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #408*Topic 1*

An application development team decides to use AWS X-Ray to monitor application code to analyze performance and perform root cause analysis.

What does the team need to do to begin using X-Ray? (Choose two.)

- A. Log instrumentation output into an Amazon SQS queue.
- B. Use a visualization tool to view application traces.
- C. Instrument application code using the AWS SDK.
- D. Install the X-Ray agent on the application servers.
- E. Create an Amazon DynamoDB table to store the trace logs.

**Correct Answer:** *BD*

*Community vote distribution*

CD (100%)



Question #409*Topic 1*

A developer manages an Amazon RDS for PostgreSQL database. An Amazon Elastic Container Service (Amazon ECS) container that uses AWS Fargate needs to modify the contents of the database during a nightly run.

Which combination of steps should the developer take to provide database access to the container in the MOST secure manner? (Choose two.)

- A. Define a database secret in AWS Secrets Manager. Provide the credentials to the container by using the task definition.
- B. Define a password in AWS CloudFormation. Pass the password into the environment variables of the container.
- C. Enable IAM authentication for the database. Grant the appropriate permissions to the container.
- D. Use an Amazon Cognito identity pool to authenticate the container. Use the provided response token to connect to the database.
- E. Define an AWS Key Management Service (AWS KMS) key that encrypts the contents of the database. Grant permission to decrypt to the container.

**Correct Answer:** *DE*

*Community vote distribution*

AC (71%)

CE (29%)



Question #410*Topic 1*

A company is offering APIs as a service over the internet to provide unauthenticated read access to statistical information that is updated daily. The company uses Amazon API Gateway and AWS Lambda to develop the APIs. The service has become popular, and the company wants to enhance the responsiveness of the APIs.

Which action can help the company achieve this goal?

- A. Enable API caching in API Gateway.
- B. Configure API Gateway to use an interface VPC endpoint
- C. Enable cross-origin resource sharing (CORS) for the APIs.
- D. Configure usage plans and API keys in API Gateway.

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #411*Topic 1*

An ecommerce company is launching a new application that will be publicly accessible. The company deployed the application on Amazon EC2 instances behind an Application Load Balancer (ALB) in the us-east-1 Region. The EC2 instances are in an Auto Scaling group.

A developer needs to make the application secure by using TLS/SSL certificates provisioned by AWS. The developer also needs to configure the existing domain www.example.com in Amazon Route 53.

Which combination of steps should the developer take to meet these requirements? (Choose two.)

- A. Configure an A record in Route 53 with the ALB as the target. Request the www.example.com TLS/SSL certificate in IAM server certificates.
- B. Configure an A record in Route 53 with the ALB as the target. Request the www.example.com TLS/SSL certificate in AWS Certificate Manager (ACM).
- C. Add the www.example.com certificate to the HTTP listener. Add a rule with www.example.com as the host. Forward the traffic to a target group that contains the Auto Scaling group.
- D. Configure an A record in Route 53 with the ALB as the target. Request the www.example.com TLS/SSL certificate in Route 53.
- E. Create an HTTPS listener in the ALB. Add the www.example.com certificate to the listener. Add a rule with www.example.com as the host. Forward the traffic to a target group that contains the Auto Scaling group.

**Correct Answer:** *BD*

*Community vote distribution*

BE (100%)



Question #412*Topic 1*

A security review for a software company’s application infrastructure shows that there is no test coverage in any of the company’s deployment pipelines. A developer must fix this issue as soon as possible. The company has been integrating the AWS Cloud Development Kit (AWS CDK) into the deployment process. However, much of the pipeline still uses AWS CloudFormation templates. The developer needs to add test coverage to all the deployment code.

Which solution will meet these requirements with the LEAST amount of configuration?

- A. Write unit tests by using the AWS CDK assertions module. Create CloudFormation template instances by using the module's Template class for the existing CloudFormation templates and the module’s Capture class for the CDK stacks.
- B. Write unit tests by using the AWS CDK assertions module. Create CloudFormation template instances by using the module’s Template.fromString() method for the existing CloudFormation templates and the module's Template.fromStack{} method for the CDK stacks.
- C. Convert the CloudFormation templates into CDK stacks by using the AWS CDK CfnInciude construct. Write unit tests against the templates by using CloudFormation rule assertions.
- D. Convert the CDK stacks into CloudFormation templates by using the AWS CDK CfnInclude construct. Write unit tests against the templates by using CloudFormation rule assertions.

**Correct Answer:** *A*

*Community vote distribution*

C (63%)

B (38%)



Question #413*Topic 1*

A developer tests an application that a company developed by using AWS Lambda. The Lambda functions are behind an AmazonAPI Gateway API. The timeout for the API method is set to the same timeout as the Lambda functions. When a request is sent to the API, the responses are timing out.

Which action would help the developer troubleshoot this issue?

- A. Check the IntegrationLatency metric of the API in Amazon CloudWatch
- B. Check the Duration metric for the Lambda functions in Amazon CloudWatch
- C. Check the Count metric of the API in Amazon CloudWatch
- D. Check the Errors metric for the Lambda functions in Amazon CloudWatch

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #414*Topic 1*

A developer is creating a web application for a guitar store where customers can look for instruments in a catalog. The developer chooses Amazon DynamoDB in provisioned mode for the database. The database must contain a catalog for the instruments that are displayed in the application. The required information includes category (for example, acoustic guitar, electric guitar, bass guitar), part number, model, brand, country of fabrication, color, orientation (left-handed, right-handed), and price.

The application must give customers the ability to look for instruments by browsing category, then brand, and finally model. Customers must also be able to search by part number. Based on these requirements, the developer must choose the proper partition key, sort key, and indexes that will minimize the number of read capacity units (RCUs) that the queries consume. All query results must return all attributes.

Which combination of steps should the developer use in the table design to meet these requirements? (Choose two.)

- A. Set part number as the partition key. Do not set a sort key.
- B. Set brand as the partition key. Set category as the sort key.
- C. Create a global secondary index (GSI) with category as the partition key and brand+model as the sort key. Select ALL for attribute projections.
- D. Create a global secondary index (GSI) with category as the partition key and brand as the sort key. Use filter expression by model when necessary. Select ALL for attribute projections.
- E. Create a global secondary index (GSI) with category+brand as the partition key and model as the sort key. Select INCLUDE for attribute projections.

**Correct Answer:** *AD*

*Community vote distribution*

AD (64%)

AC (36%)



Question #415*Topic 1*

A company has a virtual reality (VR) game. The game has a serverless backend that consists of Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. Recently, the company noticed a sudden increase of new users globally. The company also noticed delays in the retrieval of user data.

Which AWS service or feature can the company use to reduce the database response time to microseconds?

- A. Amazon ElastiCache
- B. DynamoDB Accelerator (DAX)
- C. DynamoDB auto scaling
- D. Amazon CloudFront

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #416*Topic 1*

A developer is building an application on Amazon EC2. The developer encountered an “Access Denied” error on some of the API calls to AWS services while testing. The developer needs to modify permissions that have been already given to the instance.

How can these requirements be met with minimal changes and minimum downtime?

- A. Make a new IAM role with the needed permissions. Stop the instance. Attach the new IAM role to the instance. Start the instance.
- B. Delete the existing IAM role. Attach a new IAM role with the needed permissions.
- C. Stop the instance. Update the attached IAM role adding the needed permissions. Start the instance.
- D. Update the attached IAM role adding the needed permissions.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #417*Topic 1*

A developer wants to use AWS CodeDeploy to deploy an AWS Lambda function.

What are the MINIMUM properties required in the 'resources' section of the AppSpec file for CodeDeploy to deploy the function successfully?

- A. name, alias, currentversion, and targetversion
- B. TaskDefinition, ContainerName, and PlatformVersion
- C. TaskDefinition, ContainerName, and ContainerPort
- D. name, currentversion, NetworkConfiguration, and PlatformVersion

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #418*Topic 1*

A company is working on a new serverless application. A developer needs to find an automated way to deploy AWS Lambda functions and the dependent infrastructure with minimum coding effort. The application also needs to be reliable.

Which method will meet these requirements with the LEAST operational overhead?

- A. Build the application by using shell scripts to create .zip files for each Lambda function. Manually upload the .zip files to the AWS Management Console.
- B. Build the application by using the AWS Serverless Application Model (AWS SAM). Use a continuous integration and continuous delivery (CI/CD) pipeline and the SAM CLI to deploy the Lambda functions.
- C. Build the application by using shell scripts to create .zip files for each Lambda function. Upload the .zip files. Deploy the .zip files as Lambda functions by using the AWS CLI in a continuous integration and continuous delivery (CI/CD) pipeline.
- D. Build a container for each Lambda function. Store the container images in AWS CodeArtifact. Deploy the containers as Lambda functions by using the AWS CLI in a continuous integration and continuous delivery (CI/CD) pipeline.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #419*Topic 1*

A developer is creating a new application that will be accessed by users through an API created using Amazon API Gateway. The users need to be authenticated by a third-party Security Assertion Markup Language (SAML) identity provider. Once authenticated, users will need access to other AWS services, such as Amazon S3 and Amazon DynamoDB.

How can these requirements be met?

- A. Use an Amazon Cognito user pool with SAML as the resource server.
- B. Use Amazon Cognito identity pools with a SAML identity provider as one of the authentication providers.
- C. Use the AWS IAM service to provide the sign-up and sign-in functionality.
- D. Use Amazon CloudFront signed URLs to connect with the SAML identity provider.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #420*Topic 1*

A developer is writing an application to encrypt files outside of AWS before uploading the files to an Amazon S3 bucket. The encryption must be symmetric and must be performed inside the application.

How can the developer implement the encryption in the application to meet these requirements?

- A. Create a data key in AWS Key Management Service (AWS KMS). Use the AWS Encryption SDK to encrypt the files.
- B. Create a Hash-Based Message Authentication Code (HMAC) key in AWS Key Management Service (AWS KMS). Use the AWS Encryption SDK to encrypt the files.
- C. Create a data key pair in AWS Key Management Service (AWS KMS). Use the AWS CL to encrypt the files.
- D. Create a data key in AWS Key Management Service (AWS KMS). Use the AWS CLI to encrypt the files.

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #421*Topic 1*

A developer is building a web application that uses Amazon API Gateway to expose an AWS Lambda function to process requests from clients. During testing, the developer notices that the API Gateway times out even though the Lambda function finishes under the set time limit.

Which of the following API Gateway metrics in Amazon CloudWatch can help the developer troubleshoot the issue? (Choose two.)

- A. CacheHitCount
- B. IntegrationLatency
- C. CacheMissCount
- D. Latency
- E. Count

**Correct Answer:** *AD*

*Community vote distribution*

BD (100%)



Question #422*Topic 1*

A company deployed an application as a set of microservices that run on Amazon Elastic Container Service (Amazon ECS) behind an Application Load Balancer (ALB). The performance of the microservices has started to degrade for a specific set of user requests. The company needs to gain deeper insight into the request behavior that is associated with the performance degradation.

Which process will meet this requirement?

- A. Create a Docker image that runs the AWS X-Ray daemon. Run the image alongside the microservices in Amazon ECS. Use the X-Ray console to view requests to the microservices.
- B. Perform distributed tracing based on the ALB's built-in traffic request metrics.
- C. Use Amazon CloudWatch to collect metrics and logs from Amazon ECS. Perform distributed tracing based on the ECS metrics and logs.
- D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to capture the ECS metrics and logs. Use the EventBridge console to view the requests to the microservices.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #423*Topic 1*

A developer is working on a serverless project. Initial testing shows that a cold start takes about 8 seconds on average for AWS Lambda functions.

Which actions should the developer take to reduce the cold start time? (Choose two.)

- A. Add a dependency injection framework to the project.
- B. Reduce the deployment package by including only the needed modules.
- C. Configure provisioned concurrency for the Lambda functions.
- D. Increase the timeout setting for the Lambda functions.
- E. Change the Lambda invocation mode from synchronous to asynchronous.

**Correct Answer:** *BC*

*Community vote distribution*

BC (100%)



Question #424*Topic 1*

A company has an online web application that includes a product catalog. The catalog is stored in an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The application must be able to list the objects in the S3 bucket and must be able to download objects through an IAM policy.

Which policy allows MINIMUM access to meet these requirements?

- A. ![img](https://img.examtopics.com/aws-certified-developer-associate/image30.png)
- B. ![img](https://img.examtopics.com/aws-certified-developer-associate/image31.png)
- C. ![img](https://img.examtopics.com/aws-certified-developer-associate/image32.png)
- D. ![img](https://img.examtopics.com/aws-certified-developer-associate/image33.png)

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #425*Topic 1*

A company has three AWS Lambda functions that are written in Node.js. The Lambda functions include a mix of custom code and open-source modules. When bugs are occasionally detected in the open-source modules, all three Lambda functions must be patched.

What is the MOST operationally efficient solution to deploy a patched open-source library for all three Lambda functions?

- A. Create a custom AWS CloudFormation public registry extension. Reference a GitHub repository that hosts the open-source modules in the extension. Configure CloudFormation to scan the repository once each day. Write an AWS Serverless Application Model (AWS SAM) template to redeploy the three Lambda functions upon a scan notification change.
- B. Create an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. Upload the patched modules to Amazon S3 when needed. Modify each Lambda function to download the patched modules from the CloudFront distribution during the cold start.
- C. Launch an Amazon EC2 instance. Host a private open-source module registry on the EC2 instance. Upload the modified open-source modules to the private registry when needed. Modify each Lambda function deployment script to download the modules from the private registry. Redeploy the three new Lambda functions.
- D. Create a Lambda layer with the open-source modules. Modify all three Lambda functions to depend on the layer. Remove the open-source modules from each Lambda function. Patch the Lambda layer with the modified open-source modules when needed. Update the Lambda functions to reference the new layer version.

**Correct Answer:** *A*

*Community vote distribution*

D (100%)



Question #426*Topic 1*

A developer has an application that can upload tens of thousands of objects per second to Amazon S3 in parallel within a single AWS account. As part of new requirements, data stored in S3 must use server-side encryption with AWS KMS keys (SSE-KMS). After creating this change, performance of the application is slower.

Which of the following is MOST likely the cause of the application latency?

- A. Amazon S3 throttles the rate at which uploaded objects can be encrypted using KMS keys.
- B. The AWS KMS API calls limit is less than needed to achieve the desired performance.
- C. The client encryption of the objects is using a poor algorithm.
- D. KMS requires that an alias be used to create an independent display name that can be mapped to a KMS key.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #427*Topic 1*

A 3D printing company has developed a proof-of-concept application that is running on AWS Elastic Beanstalk. The application displays a list of products that are available for 3D printing, in addition to any available customizations. When the company deploys new versions of the application, the company wants to ensure that there is no application downtime. Additionally, the application must remain at the same level of server capacity throughout the deployment.

Which deployment strategies will meet these requirements? (Choose two.)

- A. All-at-once
- B. Rolling
- C. Rolling with additional batch
- D. Immutable
- E. All-at-once with additional batch

**Correct Answer:** *BC*

*Community vote distribution*

CD (80%)

BD (20%)



Question #428*Topic 1*

A developer is writing a mobile application that allows users to view images from an S3 bucket. The users must be able to log in with their Amazon login, as well as supported social media accounts.

How can the developer provide this authentication functionality?

- A. Use Amazon Cognito with web identity federation.
- B. Use Amazon Cognito with SAML-based identity federation.
- C. Use IAM access keys and secret keys in the application code to allow Get* on the S3 bucket.
- D. Use AWS STS AssumeRole in the application code and assume a role with Get* permissions on the S3 bucket.

**Correct Answer:** *A*

*Community vote distribution*

A (75%)

B (25%)



Question #429*Topic 1*

A company uses a custom root certificate authority certificate chain (Root CA Cert) that is 10 KB in size to generate SSL certificates for its on-premises HTTPS endpoints. One of the company’s cloud-based applications has hundreds of AWS Lambda functions that pull data from these endpoints. A developer updated the trust store of the Lambda execution environment to use the Root CA Cert when the Lambda execution environment is initialized. The developer bundled the Root CA Cert as a text file in the Lambda deployment bundle.

After 3 months of development, the Root CA Cert is no longer valid and must be updated. The developer needs a more efficient solution to update the Root CA Cert for all deployed Lambda functions. The solution must not include rebuilding or updating all Lambda functions that use the Root CA Cert. The solution must also work for all development, testing, and production environments. Each environment is managed in a separate AWS account.

Which combination of steps should the developer take to meet these requirements MOST cost-effectively? (Choose two.)

- A. Store the Root CA Cert as a secret in AWS Secrets Manager. Create a resource-based policy. Add IAM users to allow access to the secret.
- B. Store the Root CA Cert as a SecureString parameter in AWS Systems Manager Parameter Store. Create a resource-based policy. Add IAM users to allow access to the policy.
- C. Store the Root CA Cert in an Amazon S3 bucket. Create a resource-based policy to allow access to the bucket.
- D. Refactor the Lambda code to load the Root CA Cert from the Root CA Cert’s location. Modify the runtime trust store inside the Lambda function handler.
- E. Refactor the Lambda code to load the Root CA Cert from the Root CA Cert’s location. Modify the runtime trust store outside the Lambda function handler.

**Correct Answer:** *CD*

*Community vote distribution*

CE (56%)

AC (17%)

BC (17%)

11%



Question #430*Topic 1*

A developer is exposing an API by using Amazon API Gateway and AWS Lambda as the backend for an application. The developer wants to add validation rules for a POST method to ensure that the data from the frontend web form is valid. The validation rules must include mandatory fields, data type, length, and regular expressions.

Which solution will meet these requirements?

- A. Create an API Gateway model with schema for data validation.
- B. Create API Gateway HTTP request headers for data validation.
- C. Create API Gateway URL query string parameters for data validation.
- D. Create API Gateway URL path parameters for data validation.

**Correct Answer:** *A*

*Community vote distribution*

A (75%)

C (25%)



Question #431*Topic 1*

A developer is migrating an on-premises web application to AWS. The web application allows users to log in and modify their user profiles. The web application consists of a web server and a relational database. The developer has created an Amazon Machine Image (AMI) that will be used to launch Amazon EC2 instances to provide the web server. The developer also has created a database in Amazon RDS.

As part of the migration, the developer wants to create an Amazon EC2 Auto Scaling group to launch the web server instances behind an Application Load Balancer. The launch configuration for the Auto Scaling group will specify the AMI for the web server.

Which additional step should the developer take to give the web application the ability to automatically scale?

- A. Select an EC2 instance type that is large enough to handle increased demand.
- B. Create an Amazon ElastiCache cluster. Configure the web application to store session state in the cluster.
- C. Install the database on one of the EC2 instances. Recreate the AMI from that EC2 instance.
- D. Create an RDS read replica. Configure the web application to use the read replica for all read operations.

**Correct Answer:** *D*

*Community vote distribution*

B (60%)

D (40%)



Question #432*Topic 1*

A company has a serverless application that uses Amazon API Gateway backed by AWS Lambda proxy integration. The company is developing several backend APIs. The company needs a landing page to provide an overview of navigation to the APIs.

A developer creates a new /LandingPage resource and a new GET method that uses mock integration.

What should the developer do next to meet these requirements?

- A. Configure the integration request mapping template with Content-Type of text/html and statusCode of 200. Configure the integration response mapping template with Content-Type of application/json. In the integration response mapping template, include the LandingPage HTML code that references the APIs.
- B. Configure the integration request mapping template with Content-Type of application/json. In the integration request mapping template, include the LandingPage HMTL code that references the APIs. Configure the integration response mapping template with Content-Type of text/html and statusCode of 200.
- C. Configure the integration request mapping template with Content-Type of application/json and statusCode of 200. Configure the integration response mapping template with Content-Type of text/html. In the integration response mapping template, include the LandingPage HTML code that references the APIs.
- D. Configure the integration request mapping template with Content-Type of text/html. In the integration request mapping template, include the LandingPage HTML code that references the APIs. Configure the integration response mapping template with Content-Type of application/json and statusCode of 200.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #433*Topic 1*

A developer needs to manage AWS infrastructure as code and must be able to deploy multiple identical copies of the infrastructure, stage changes, and revert to previous versions.

Which approach addresses these requirements?

- A. Use cost allocation reports and AWS OpsWorks to deploy and manage the infrastructure.
- B. Use Amazon CloudWatch metrics and alerts along with resource tagging to deploy and manage the infrastructure.
- C. Use AWS Elastic Beanstalk and AWS CodeCommit to deploy and manage the infrastructure.
- D. Use AWS CloudFormation and AWS CodeCommit to deploy and manage the infrastructure.

**Correct Answer:** *A*

*Community vote distribution*

D (80%)

C (20%)



Question #434*Topic 1*

A company stores all personally identifiable information (PII) in an Amazon DynamoDB table named PII in Account A. Developers are working on an application that is running on Amazon EC2 instances in Account B. The application in Account B requires access to the PII table.

An administrator in Account A creates an IAM role named AccessPII that has permission to access the PII table. The administrator also creates a trust policy that specifies Account B as a principal that can assume the role.

Which combination of steps should the developers take in Account B to allow their application to access the PII table? (Choose two.)

- A. Allow the EC2 IAM role the permission to assume the AccessPII role
- B. Allow the EC2 IAM role the permission to access the PII table.
- C. Include the AWS API in the application code logic to obtain temporary credentials from the EC2 IAM role to access the PII table.
- D. Include the AssumeRole API operation in the application code logic to obtain temporary credentials to access the PII table.
- E. Include the GetSessionToken API operation in the application code logic to obtain temporary credentials to access the PII table.

**Correct Answer:** *AB*

*Community vote distribution*

AD (75%)

BD (25%)



Question #435*Topic 1*

A company has a web application that uses an Amazon Cognito user pool for authentication. The company wants to create a login page that includes the company logo.

What should a developer do to meet these requirements?

- A. Create a hosted user interface (UI) in Amazon Cognito. Customize the hosted UI with the company logo.
- B. Create a login page that includes the company logo. Upload the login page to Amazon Cognito,
- C. Create a login page that includes the company logo in Amazon API Gateway. Save the link in Amazon Cognito.
- D. Upload the company logo to an Amazon S3 bucket. Specify the S3 object path in app client settings in Amazon Cognito.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #436*Topic 1*

A developer has an application that is composed of many different AWS Lambda functions. The Lambda functions all use some of the same dependencies. To avoid security issues, the developer is constantly updating the dependencies of all of the Lambda functions. The result is duplicated effort for each function.

How can the developer keep the dependencies of the Lambda functions up to date with the LEAST additional complexity?

- A. Define a maintenance window for the Lambda functions to ensure that the functions get updated copies of the dependencies.
- B. Upgrade the Lambda functions to the most recent runtime version.
- C. Define a Lambda layer that contains all of the shared dependencies.
- D. Use an AWS CodeCommit repository to host the dependencies in a centralized location.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #437*Topic 1*

An application that is deployed to Amazon EC2 is using Amazon DynamoDB. The application calls the DynamoDB REST API. Periodically, the application receives a ProvisionedThroughputExceededException error when the application writes to a DynamoDB table.

Which solutions will mitigate this error MOST cost-effectively? (Choose two.)

- A. Modify the application code to perform exponential backoff when the error is received.
- B. Modify the application to use the AWS SDKs for DynamoDB.
- C. Increase the read and write throughput of the DynamoDB table.
- D. Create a DynamoDB Accelerator (DAX) cluster for the DynamoDB table.
- E. Create a second DynamoDB table. Distribute the reads and writes between the two tables.

**Correct Answer:** *BD*

*Community vote distribution*

AB (92%)

8%



Question #438*Topic 1*

A developer creates an AWS Lambda function that publishes a message to an Amazon Simple Queue Service (Amazon SQS) queue. The developer needs to ensure that the message is not processed for 60 seconds after delivery to the destination queue.

Which solution will meet these requirements?

- A. Increase the SQS queue’s delivery delay value to 60 seconds.
- B. Increase the SQS queue’s visibility timeout value to 60 seconds.
- C. Increase the Lambda function’s timeout value to 60 seconds.
- D. Increase the Lambda function’s memory.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #439*Topic 1*

A developer compiles an AWS Lambda function and packages the result as a .zip file. The developer uses the Functions page on the Lambda console to attempt to upload the local packaged .zip file. When pushing the package to Lambda, the console returns the following error:

An error occurred (RequestEntityTooLargeException) when calling the UpdateFunctionCode operation

Which solutions can the developer use to publish the code? (Choose two.)

- A. Upload the package to Amazon S3. Use the Functions page on the Lambda console to upload the package from the S3 location.
- B. Create an AWS Support ticket to increase the maximum package size.
- C. Use the update-function-code AWS CLI command. Pass the --publish parameter.
- D. Repackage the Lambda function as a Docker container image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Create a new Lambda function by using the Lambda console. Reference the image that is deployed to Amazon ECR.
- E. Sign the .zip file digitally. Create a new Lambda function by using the Lambda console. Update the configuration of the new Lambda function to include the Amazon Resource Name (ARN) of the code signing configuration.

**Correct Answer:** *C E*

*Community vote distribution*

AD (80%)

AC (20%)



Question #440*Topic 1*

A company has an application that provides blog hosting services to its customers. The application includes an Amazon DynamoDB table with a primary key. The primary key consists of the customers’ UserName as a partition key and the NumberOfBlogs as a sort key. The application stores the TotalReactionsOnBlogs as an attribute on the same DynamoDB table.

A developer needs to implement an operation to retrieve the top 10 customers based on the greatest number of reactions on their blogs. This operation must not consume the DynamoDB table’s existing read capacity.

What should the developer do to meet these requirements in the MOST operationally efficient manner?

- A. For the existing DynamoDB table, create a new global secondary index (GSI) that has the UserName as a partition key and the TotalReactionsOnBlogs as a sort key.
- B. For the existing DynamoDB table, create a new local secondary index (LSI) that has the UserName as a partition key and the TotalReactionsOnBlogs as a sort key.
- C. Back up and restore the DynamoDB table to a new DynamoDB table. Create a new global secondary index (GSI) that has the UserName as a partition key and the TotalReactionsOnBlogs as a sort key. Delete the old DynamoDB table.
- D. Back up and restore the DynamoDB table to a new DynamoDB table. Create a new local secondary index (LSI) that has the UserName as a partition key and the TotalReactionsOnBlogs as a sort key. Delete the old DynamoDB table.

**Correct Answer:** *D*

*Community vote distribution*

A (78%)

D (22%)



Question #441*Topic 1*

A developer is deploying an AWS Lambda function. The developer wants the ability to return to older versions of the function quickly and seamlessly.

How can the developer achieve this goal with the LEAST operational overhead?

- A. Use AWS OpsWorks to perform blue/green deployments.
- B. Use a function alias with different versions.
- C. Maintain deployment packages for older versions in Amazon S3.
- D. Use AWS CodePipeline for deployments and rollbacks.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #442*Topic 1*

A developer is creating a utility application as an AWS Lambda function. The code is using multiple threads. The developer runs the Lambda function, and the function does not perform as well as the developer expected.

What should the developer do to improve the performance of the Lambda function?

- A. Increase the Lambda function timeout setting.
- B. Request to increase the Lambda function concurrency quota.
- C. Increase the memory allocation of the Lambda function.
- D. Modify the reserved concurrency of the Lambda function to a higher number.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #443*Topic 1*

A company has a web application in an Amazon Elastic Container Service (Amazon ECS) cluster running hundreds of secure services in AWS Fargate containers. The services are in target groups routed by an Application Load Balancer (ALB). Application users log in to the website anonymously, but they must be authenticated using any OpenID Connect protocol-compatible identity provider (IdP) to access the secure services.

Which authentication approach would meet these requirements with the LEAST amount of effort?

- A. Configure the services to use Amazon Cognito.
- B. Configure the ALB to use Amazon Cognito.
- C. Configure the services to use AWS Security Token Service (AWS STS) with the OpenID Connect IdP.
- D. Configure the Amazon ECS cluster to use AWS Security Token Service (AWS STS) with the OpenID Connect IdP.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)