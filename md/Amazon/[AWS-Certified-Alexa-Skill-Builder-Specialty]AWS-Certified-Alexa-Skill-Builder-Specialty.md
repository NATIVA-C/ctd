
![ExamTopics Logo](https://www.examtopics.com/assets/images/et/ExamTopics-Logo-Smaller.png) - Expert Verified, Online, **Free**.

[ Custom View Settings](https://www.examtopics.com/exams/amazon/aws-certified-alexa-skill-builder-specialty/custom-view/)

## Topic 1 - Single Topic

Question #1*Topic 1*

Which of the following are ways that a user can interact with an Amazon Alexa skill using both voice and non-voice methods? (Choose three.)

- A. Scrolling through a list
- B. Selecting an action
- C. Zooming in on an image
- D. Pausing a video
- E. Muting the device
- F. Pairing with Bluetooth

**Correct Answer:** *DEF*

Question #2*Topic 1*

An Alexa Skill Builder wants a skill to inform the users of the number of times they have launched the skill.
What approach should the Builder take to track this information?

- A. Store and increment a launchCount session attribute.
- B. Using the ASK SDK, implement a persistent attribute that is stored and retrieved from Amazon DynamoDB.
- C. Perform a scan of the Amazon DynamoDB table for the number of records and count each record as a skill launch.
- D. Set up a global variable in the code project that increments each time the code is invoked by Amazon Alexa.

**Correct Answer:** *B*
Reference:
https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/manage-attributes.html

Question #3*Topic 1*

On Amazon Alexa enabled devices with a screen, which of the following standard built-in intents are handled by Alexa on the skill's behalf and are not forwarded to the skill? (Choose three.)

- A. AMAZON.NextIntent
- B. AMAZON.MoreIntent
- C. AMAZON.ScrollDownIntent
- D. AMAZON.PreviousIntent
- E. AMAZON.StartOverIntent
- F. AMAZON.NavigateHomeIntent

**Correct Answer:** *CEF*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/standard-built-in-intents.html

Question #4*Topic 1*

An Alexa Skill Builder needs to set up an Amazon Alexa skill beta test.
What user identifier should be used to add beta testers?

- A. AWS account number
- B. Alexa user email address
- C. Amazon vendor ID
- D. Amazon customer ID

**Correct Answer:** *B*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/skills-beta-testing-for-alexa-skills.html

Question #5*Topic 1*

An Alexa Skill Builder is developing a custom skill to play a live audio stream.
What two built-in intents are required to implement the AudioPlayer interface?

- A. AMAZON.NextIntent and AMAZON.StopIntent
- B. AMAZON.ResumeIntent and AMAZON.PauseIntent
- C. AMAZON.CancelIntent and AMAZON.ResumeIntent
- D. AMAZON.RepeatIntent and AMAZON.StopIntent

**Correct Answer:** *B*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/audioplayer-interface-reference.html

Question #6*Topic 1*

An Alexa Skill Builder is trying to enable a skill in the developer console. The skill model builds without errors, but the Builder is unable to turn on testing.
What could be causing this?

- A. The skill's slot types are invalid.
- B. The skill does not have an example phrase
- C. The skill does not have an invocation name
- D. The skill does not have an endpoint

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/devconsole/test-your-skill.html

Question #7*Topic 1*

An Alexa Skill Builder has published a skill to the Alexa Skills Store, but soon after realizes that Amazon Alexa is saying an incorrect word in one of the responses.
What is the recommended method for the Builder to correct this issue?

- A. Correct the response in a new endpoint, and after updating the In Development version of the skill, redeploy it.
- B. Access the In Development version of the skill, alter the intent that was causing the incorrect word, then resubmit the skill for certification.
- C. Edit the response in a new endpoint, and after updating the In Development version of the skill, resubmit it for certification.
- D. Correct the response in the existing endpoint of the Live version of the skill, then redeploy it.

**Correct Answer:** *A*

Question #8*Topic 1*

An Alexa Skill Builder needs to change the invocation name of a new skill.
What status should the skill be in to make this change?

- A. In Development
- B. Build
- C. In Certification
- D. Edit

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/choose-the-invocation-name-for-a-custom-skill.html

Question #9*Topic 1*

An Amazon Alexa interactive story skill needs to provide users with the option to resume the skill from where users left off when they last used the skill.
Where should the data be stored to ensure that the skill will start at the correct location?

- A. In a JSON file along with the skill's AWS Lambda function
- B. In Amazon DynamoDB
- C. In the skill's session object
- D. In the skills's request object

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/in-skill-purchase/add-isps-to-a-skill.html

Question #10*Topic 1*

An Alexa Skill Builder is developing a custom skill and needs to verify that the correct slot values are being passed into the AWS Lambda function.
According to best practices, what is the MOST efficient way to capture this information?

- A. Add a logging statement to write the event request to Amazon CloudWatch Logs.
- B. Add an API call to write the environment variables to an Amazon S3 bucket when the function is invoked.
- C. Add an API call to read the event information from AWS Cloud Trail logs and add a PutObject API call to write to an Amazon S3 bucket.
- D. Add a statement to parse the JSON request and save to the local disk for the Lambda function

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/validate-slot-values.html

Question #11*Topic 1*

An Alexa Skill Builder submitted a child-directed skill for certification that lists the nearest skateboard parks. The Builder ensured that
✑ The skill does not link to an external account
✑ The skill stored the child's preference by userId
✑ The skill has a valid privacy policy link in the skill Distribution page
Given this information, why will the skill fail certification?

- A. The Builder did not upload a privacy policy document
- B. Child-directed skills cannot use location information
- C. The child's userId cannot be used because of Personally Identifiable Information (PII) restrictions.
- D. The skill should not be child-directed as it can be used by children over 13 years old.

**Correct Answer:** *C*

Question #12*Topic 1*

The namespace value in the header of the incoming directive for an Amazon Alexa smart home skill specifies the:

- A. context of the message
- B. capability interface of the message
- C. endpoint specified in the message
- D. control message for the directive

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/device-apis/alexa-errorresponse.html

Question #13*Topic 1*

According to Amazon Alexa best practices, how should an Alexa Skill Builder prevent unintentional requests against a skill's backend when using AWS Lambda?

- A. Ensure that the session ID provided by the request to Lambda is not already in use.
- B. Rotate the Lambda ARN regularly to prevent others from using the service.
- C. Retrieve the Application ID property from the request JSON and validate it against the Lambda environment variables.
- D. Provide the Lambda trigger with the Application ID so that it validates on the ask trigger.

**Correct Answer:** *C*

Question #14*Topic 1*

An Alexa Skill Builder would like to improve a skill's help experience. To do this, the Builder plans to leverage the user's activity leading up to the help request to contextualize the help response.
Where should the skill obtain the necessary context?

- A. Load the user's recent activity from the Intent Request History API, then use this to provide context to the AMAZON.HelpIntent request.
- B. Retrieve the recent activity from the context object passed with the AMAZON.HelpIntent request.
- C. Use a session attribute to store the intent name for each request, then use this to provide context to the AMAZON.HelpIntent request.
- D. Retrieve the recent activity from the slot values passed with the AMAZON.HelpIntent request.

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/implement-the-built-in-intents.html

Question #15*Topic 1*

An Alexa Skill Builder adds a colleague to a skill using the beta test feature. The colleague logs in to the developer console to edit the interaction model and cannot see the skill.
Why is this happening?

- A. The colleague needs the ROLE_ADMINISTRATOR enablement.
- B. The skill was not submitted for publishing.
- C. The colleague was not made an administrator in the beta test tool.
- D. The colleague has not been added to the skill's developer account.

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/skills-beta-testing-for-alexa-skills.html

Question #16*Topic 1*

An Amazon Alexa skill fetches data for users from a third-party API and the wait for the response from that call is variable, often taking up to 5 seconds.
What is the recommended method for notifying users that a skill is working on the request and has not failed to respond?

- A. Prefetch the data that is expected to the required by the skill from the third-party API using Amazon CloudWatch Events.
- B. Call the Progressive Response API and send a directive, such as VoicePlayer.Speak
- C. Ask a follow-up question for clarification to engage the user while waiting for the initially requested response.
- D. Respond to the user stating that the data will be ready soon, and upon the next launch of the skill, provide the user with the response they initially requested.

**Correct Answer:** *B*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/send-the-user-a-progressive-response.html

Question #17*Topic 1*

An Alexa Skill Builder has created a custom skill about basketball including a HowToPlayBasketball intent. When looking at the Intent History page in the developer console, the Builder sees that a number of users are asking the skill how to play baseball. The Builder wants to add a relevant response directing the user back to the topic of basketball.
How should the Builder implement this?

- A. Add AMAZON.FallbackIntent and respond with a message about baseball in the handler
- B. Create a custom intent related to baseball, and when matched, provide a relevant response
- C. Add more sample utterances related to baseball in the HowToPlayBasketball intent
- D. Create a new custom baseball slot and add a slot-filling utterance to the HowToPlayBasketball intent.

**Correct Answer:** *A*
Reference:
https://developer.amazon.com/blogs/alexa/post/c97f3bb7-9701-41e8-ac06-a3a44b9f1638/use-the-new-fallback-intent-to-respond-gracefully-to- unexpected-customer-requests

Question #18*Topic 1*

An Alexa Skill Builder is using session attributes to maintain a user's state.
What can the Builder do to ensure that a user's session is not lost if they take too long to answer a question and the skill exists?

- A. Set shouldEndSession to false in the response object to prevent the skill from exiting.
- B. Handle the SessionEndedRequest request type and persist the user's session to a database.
- C. Return false from the SessionEndedRequest handler so the session does not exist.
- D. Return a reprompt in the response object from the SessionEndedRequest handler.

**Correct Answer:** *A*
Reference:
https://developer.amazon.com/blogs/alexa/post/08edaa00-59e2-46b7-aace-4080f2a87450/using-session-attributes-in-your-alexa-skill-to-enhance-the- voice-experience

Question #19*Topic 1*

A travel booking skill has slot elicitation for fromCity, toCity, and travelDate inside of a dialog. After going live, the skill is getting negative reviews stating that the skill does not understand the city names when customers try to book travel.
The Alexa Skill Builder adds AMAZON.FallbackIntent to the interaction model with the goal of providing better messaging for out-of-domain utterances.
Why will the addition of AMAZON.FallbackIntent fail to resolve the customer issue?

- A. AMAZON.FallbackIntent will not be triggered in the middle of a dialog.
- B. A handler cannot be added to a Live skill.
- C. AMAZON.FallbackIntent will cause the slot values to be incorrectly mapped.
- D. AMAZON.FallbackIntent cannot be present in a skill with a Dialog directive.

**Correct Answer:** *A*

Question #20*Topic 1*

An Alexa Skill Builder is developing a skill that must send an initial welcome email to each new user.
What combination of features would the Builder use to satisfy this requirement? (Choose two.)

- A. Alexa Settings API
- B. Entity resolution
- C. Customer Profile API
- D. Device Address API
- E. Data persistence

**Correct Answer:** *AC*

Question #21*Topic 1*

An Alexa Skill Builder is using Amazon S3 to stream large quantities of static audio and video content throughout the world with an Amazon Alexa skill.
Which additional AWS service will help the Builder decrease latency and improve the reliability of the streaming media content for the global audience?

- A. AWS Cloud9
- B. Amazon Kinesis
- C. Amazon Route 53
- D. Amazon CloudFront

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/blogs/alexa/post/87f73844-d971-4ac3-b274-bf0d93031bcd/build-more-engaging-skills-using-aws

Question #22*Topic 1*

An Alexa Skill Builder needs to have knowledge of the previous prompt that was presented to the user in order to give context to the user's response.
How can the Builder accomplish this?

- A. Find the corresponding prompt using the list events feature
- B. Store a reference to the prompt used as a session attribute
- C. Call the Intent Request History API to identify which prompt was used.
- D. Parse the context object from the skill request.

**Correct Answer:** *C*

Question #23*Topic 1*

What are the prerequisites for implementing account linking for Amazon Alexa smart home skills?

- A. OAuth 2.0 with either implicit grant flow or authorization code grant flow
- B. OAuth 2.0 with authorization code grant flow
- C. OpenID Connect wit JSON.Web Token (JWT)
- D. OAuth 1.0/2.0 with implicit grant flow

**Correct Answer:** *B*
Reference:
https://developer.amazon.com/en-US/docs/alexa/account-linking/account-linking-for-sh-and-other.html#prerequisites

Question #24*Topic 1*

An Alexa Skill Builder is developing a skill that enables users to purchase train tickets. The Builder wants to give users the ability to modify the departure time if they are misunderstood, before the skill proceeds to purchase the tickets.
Which option should be used to implement this functionality within the session?

- A. Implement AMAZON.FallbackIntent so the user can stop the execution when they have been misunderstood.
- B. Implement AMAZON.StopIntent so the user can stop the execution and implement reprompt with a new invocation of the skill.
- C. Implement AMAZON.CancelIntent so the user can cancel the order, then set shouldEndSession to false, and prompt the user for the next action.
- D. Implement the welcome message, providing clear instructions to the user describing how to format an order.

**Correct Answer:** *C*

Question #25*Topic 1*

An Alexa Skill Builder built a skill using AWS Lambda. The Lambda function works when running the code on a local machine with a runtime of 4.5 seconds, but during skill testing, the Builder receives an error response.
Which collection of steps will address the issue? (Choose two.)

- A. Change the Amazon Alexa default timeout to 5 seconds.
- B. Change the default timeout of the Lambda function to 5 seconds.
- C. Call the Progressive Response API and send a directive to reduce latency.
- D. Increase the size of the memory allocated to the Lambda function.
- E. Clone the Lambda function to another AWS Region.

**Correct Answer:** *BE*

Question #26*Topic 1*

An Alexa Skill Builder wants to name a skill using a company's branded acronym, "NAT Systems."
Which invocation name is valid?

- A. n a t systems
- B. n-a-t systems
- C. n. a. t. systems
- D. NAT Systems

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/choose-the-invocation-name-for-a-custom-skill.html

Question #27*Topic 1*

An Alexa Skill Builder is building an interactive storytelling skill where the user can choose their own path through the story. The Builder wants Amazon Alexa to narrate the story and use custom audio for the dialogue for each character, along with various sound effects.
How can these requirements be met?

- A. Record custom audio for each segment of the story, then stream audio files stored on Amazon S3 using the AudioPlayer interface for each segment of the story.
- B. Develop each response as text, and let Alexa speak each part differently using SSML markup for <amazon:effect> to alter the Alexa voice for each character.
- C. Record custom audio for each character voice and the sound effects in the story, then include the custom audio using SSML markup in the response.
- D. Record the entire story as custom audio and stream the audio stored on Amazon S3 using the AudioPlayer interface.

**Correct Answer:** *A*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/audioplayer-interface-reference.html

Question #28*Topic 1*

An Alexa Skill Builder is interested in gathering information about returning users.
What analytics tool in the developer console would provide the Builder with this information?

- A. Customers
- B. Interaction Path
- C. Sessions
- D. Retention

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/devconsole/measure-skill-usage.html

Question #29*Topic 1*

An Alexa Skill Builder needs to display an image and some additional text to users of a skill.
Which approach will work with any Amazon Alexa enabled device?

- A. Use an Alexa display template, such as BodyTemplate1.
- B. Send a Simple card to the user.
- C. Send a Standard card to the user.
- D. Send a LinkAccount card to the user.

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/include-a-card-in-your-skills-response.html#create-a-card-to-display-text-and-an-image

Question #30*Topic 1*

An Alexa Skill Builder receives feedback from users that a specific utterance causes Amazon Alexa to trigger the skill's AMAZON.HelpIntent rather than triggering the correct intent and slot.
How can the Builder reproduce this behavior to troubleshoot the problem?

- A. Use the AWS Lambda test feature to send a request with the given intent and slot combination.
- B. Set up a unit test in the code base to simulate what happens when the given intent and slot combination are dispatched within the skill.
- C. Use the Manual JSON tab on the Test page of the developer console to see what happens when a request for the given intent and slot combination is sent to the skill
- D. Use the Alexa Simulator tab on the Test page of the developer console to test the utterances the users have reported.

**Correct Answer:** *B*

Question #31*Topic 1*

An Alexa Skill Builder wants to add a short audio clip to a skill with SSML. The Builder records a 6-second audio clip using a high-end microphone and recording application and exports the file with a bitrate of 48 kbps. The file is then uploaded to a public Amazon S3 bucket.
The Builder then updates the SSML to return:
![img](https://www.examtopics.com/assets/media/exam-media/03310/0002700001.png)
When testing the skill, Amazon Alexa responds with "There was a problem with the requested skill's response" every time.
How should the Builder resolve this error?

- A. Record a shorter audio clip.
- B. Re-export the audio file with a smaller bitrate.
- C. Re-export the audio file to .mp3 instead of .wav
- D. Update the interaction model to enable the AudioPlayer interface

**Correct Answer:** *B*

Question #32*Topic 1*

During testing of a new Amazon Alexa skill, the skill is repeatedly failing and invoking the function defined in the addErrorHandler method specified on the
SkillBuilder object. Upon inspection of Amazon CloudWatch Logs, the Alexa Skill Builder establishes that the failure is occurring whenever
AMAZON.HelpIntent is being received.
How should this error be corrected?

- A. AMAZON.HelpIntent should be handled by the SDK. The Builder should raise a support ticket with Amazon.
- B. The Builder should ensure that the intent handler is coded so that it tests for AMAZON.HelpIntent in its canHandle method, and when detected, returns true.
- C. The Builder should add logic to provide help instructions to the function defined in the addErrorHandler method specified on the SkillBuilder object.
- D. The Builder should add an AMAZON.HelpIntent entry to the interaction model to ensure the request for help is recognized by the skill.

**Correct Answer:** *B*

Question #33*Topic 1*

An Amazon Alexa trip planner skill has several intents and slots. One of the intents is PlanMyTripIntent and some of the slots are fromCity, toCity, departDate, and returnDate. The following is a sample dialog:
User: Ask plan my trip to start a new trip leaving from Seattle.
Alexa: You said you are leaving from Seattle, right?

User: Yes -
Alexa: I've saved your trip. Do you want to create another trip?

User: Yes -
What will be invoked upon the user's final "Yes"?

- A. PlanMyTripIntent
- B. AMAZON.CancelIntent
- C. AMAZON.YesIntent
- D. LaunchRequest

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-types-reference.html

Question #34*Topic 1*

An Alexa Skill Builder wants to implement in-skill purchasing to offer one-time purchases for access to premium content. The Builder created an entitlement product and deployed it successfully using the ASK CLI tool. When testing the custom BuyInskillProductIntent in the developer console, the Builder receives the following error:
Sorry, this product is not available with your current language setting.
How can this error be fixed?

- A. Change the release date and redeploy the product
- B. Change the locale in the Alexa Simulator tab in the developer console
- C. Change the AWS Lambda function to include the correct locale in the Connections.SendRequest directive
- D. Change the language in the premium content

**Correct Answer:** *C*
Reference:
http://alexaskillstutorials.com

Question #35*Topic 1*

An Alexa Skill Builder made changes to an AWS Lambda function that is used as the endpoint for a skill. The Builder discovers that the skill now returns an error when it is launched.
How can the Builder use the Lambda console to trigger the function and debug the code?

- A. Create a Lambda test event using the JSON request as input to find the specific error within the code.
- B. Create a Lambda test event using the JSON response as output to find the specific error within the code.
- C. Check the JSON response to see if there are any syntax errors in the code.
- D. Create a Lambda test event using the JSON interaction model to find the specific error within the code.

**Correct Answer:** *A*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html

Question #36*Topic 1*

An Alexa Skill Builder has created a taxi hiring skill. The skill needs to find out when the customer wants a taxi, where the customer is traveling from, and where the customer wants to go. The Builder is currently asking each question individually, in the following order:
"Where do you want to take a taxi from"
"Where do you want to take a taxi to"
"When do you need a taxi"
To ensure the voice interaction is flexible, how should this information be gathered regardless of the order in which the user provides it?

- A. Use a single intent and slot. Inspect the incoming slot value and categorize then response, then prompt for the remaining information.
- B. Create an intent for each question and include slots for each piece of information on every intent
- C. Create three intents with one slot each. Use Dialog.ElicitSlot to fill the slots.
- D. Create a single intent with three slots. Use the Dialog.Delegate directive to fill the slots.

**Correct Answer:** *D*

Question #37*Topic 1*

Which of the following occur when a beta test of a live skill times out? (Choose two.)

- A. The beta tester will lose access to the beta skill and will need to reenable the live skill
- B. The beta tester will receive an email saying the beta test has ended
- C. The administrator will receive an email confirming that the beta tester has been removed
- D. The beta tester will lose access to the beta skill but will maintain access to the live skill
- E. The beta skill history in the Amazon Alexa app will disappear once the beta test has ended

**Correct Answer:** *AB*

Question #38*Topic 1*

When testing an Amazon Alexa skill using the Test page in the developer console, the JSON output is null.
What is the MOST likely cause?

- A. The AWS Lambda function is encountering an error and is not returning a result.
- B. The endpoint ARN has not been configured
- C. The ASK has not been granted access to trigger the AWS Lambda function
- D. Skill ID verification has been disabled

**Correct Answer:** *B*

Question #39*Topic 1*

An Alexa Skill Builder is creating a skill that requires the user to authenticate by speaking a PIN before an order status can be retrieved.
According to best practices, how should the PIN value be collected?

- A. Use AMAZON.SearchQuery
- B. Use AMAZON.FOUR_DIGIT_NUMBER
- C. Use multiple slots of type AMAZON.NUMBER
- D. Use a custom slot with zero to nine as values.

**Correct Answer:** *D*

Question #40*Topic 1*

An Alexa Skill Builder published a skill that streams sounds to help users relax. The skill is becoming very popular and is available in many different locales around the world. More than 20.000 users are using the skill every week, and more than 500 users are added daily. The sound files are stored in Amazon S3.
What can the Builder do to ensure low latency and the best possible streaming performance?

- A. Use Amazon CloudFront to deliver content and cache the audio files across different geographical regions.
- B. Migrate the sound files from Amazon S3 into Amazon Redshift to speed up the read operations.
- C. Use Elastic Load Balancing to handle the traffic generated by the increasing number of users.
- D. Enable cross-region replication on the Amazon S3 bucket policy to improve the skill's performance.

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/devconsole/measure-skill-usage.html

Question #41*Topic 1*

An Alexa Skill Builder is using the AudioPlayer.Play directive and would like to automatically start the next audio track at the end of the current track.
Which AudioPlayer playBehavior values will allow the Builder to achieve this without changing the audio currently playing? (Choose two.)

- A. REPLACE_ALL
- B. CLEAR_ENQUEUED
- C. REPLACE_ENQUEUED
- D. ENQUEUE
- E. CLEAR_ALL

**Correct Answer:** *CD*
Reference:
https://developer.amazon.com/en-US/docs/alexa/alexa-voice-service/audioplayer.html

Question #42*Topic 1*

An Alexa Builder is working on a skill for music streaming. When a user says, "Alexa, stop" the skill needs to know where the user was in the song, so that when returning to the skill in a new session, the song can pick up where it left off.
Which section of the following JSON contains the data indicating where the song left off?
![img](https://www.examtopics.com/assets/media/exam-media/03310/0003400001.png)

- A. session.attributes
- B. Context.AudioPlayer
- C. session.user
- D. context.System.device.supportedInterfaces.AudioPlayer

**Correct Answer:** *C*

Question #43*Topic 1*

An Alexa Skill Builder implemented the built-in intent AMAZON.HelpIntent. In some cases, users are asking for help using phrases that are specific to a skill's terminology. Amazon Alexa does not understand these phrases are help requests, and they are not being routed to AMAZON.HelpIntent.
According to best practices, how can this situation be corrected?

- A. Create custom intents using the help utterances that are specific to the skill, and remove AMAZON.HelpIntent.
- B. Use AMAZON.FallbackIntent to capture spoken phrases that do not match AMAZON.HelpIntent, then determine if the user needs help.
- C. Define custom slots for AMAZON.HelpIntent to capture the additional details in the users' help requests
- D. Extend the standard built-in AMAZON.HelpIntent using additional samples in the skill's interaction model

**Correct Answer:** *D*

Question #44*Topic 1*

An Alexa Skill Builder is developing a skill using AWS Lambda. The Builder made some backend code changes, then tested the skill on an Amazon Echo device.
When invoking the skill, Amazon Alexa replies with "There was a problem with the requested skill's response".
How can the Builder troubleshoot this problem?

- A. Use Amazon CloudWatch to check the most recent execution log and see if an error is present.
- B. Use Amazon DynamoDB and export a copy of the log database, then search for error messages.
- C. Use the developer console to rebuild the model, then invoke the skill again with the invocation name.
- D. Use the developer console to add AMAZON.LaunchRequest to the interaction model, rebuild the model, then invoke the skill again.

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/blogs/alexa/post/0d8c5234-3c7a-4b77-9906-b43a5310bde4/5-common-error-messages-for-custom-alexa-skills-and- how-to-troubleshoot-them

Question #45*Topic 1*

While developing a skill, an Alexa Skill Builder finds that the voice response is too quick and needs to be slowed down.
How can the Builder MOST efficiently iterate and test how the response will sound?

- A. Make changes in the skill code, deploy it, and test it on the device.
- B. Modify the SSML in the skill, save it, and check Amazon CloudWatch for errors.
- C. Edit the SSML in the skill and use the Alexa Simulator tab on the Test page of the developer console.
- D. Use the Voice & Tone tab on the Test page in the developer console.

**Correct Answer:** *A*

## Topic 2 - More Questions.

Question #1*Topic 2*

An Alexa Skill Builder is developing a skill that tells users facts about their neighborhoods using their postal codes. When running the skill, users receive error messages from their Amazon Alexa devices. When the Builder checks the logs, error messages are being sent when the device location API is used to get users' postal codes.
What are the potential causes of this issue? (Choose two.)

- A. The Alexa devices are registered in the incorrect postal code.
- B. The AWS Lambda function is not registered to the skill.
- C. The users have opted out of giving their location information.
- D. The application ID of the skill does not match the expected application ID of the AWS Lambda function.
- E. The skill is not registered to access information in the developer console.

**Correct Answer:** *CD*

Question #2*Topic 2*

An Alexa Skill Builder wants to create a skill that asks the user two yes/no questions:
Alexa: Do you like cats?
Alexa: Do you like dogs?
When the username answers "yes", how should the Builder code the handler to know which question the answer refers to?

- A. Using session attributes, store the previous question as the context for use in the AMAZON.YesIntent handler.
- B. Within the AMAZON.YesIntent handler, prompt the user to repeat the name of the animal that they like.
- C. Within the AMAZON.YesIntent handler, define a slot to store and retrieve the previously asked question.
- D. Access Amazon CloudWatch Logs and retrieve the previous question topic from the recent log messages.

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/standard-built-in-intents.html

Question #3*Topic 2*

An Alexa Skill Builder is building an order reporting skill. Occasionally, users need to enter 30-digit serial codes.
How can this be accomplished while providing a good voice user interface experience?

- A. Manually extend the timeout so that users can input all the numbers.
- B. Use multiple requests for smaller segments of the code and store the data in session attributes.
- C. Enter single digits one request at a time.
- D. Request that users send the number using the Amazon Alexa app

**Correct Answer:** *A*

Question #4*Topic 2*

Before beginning the development of a skill, an Alexa Skill Builder wants to hear how a statement will be pronounced by Amazon Alexa in another locale.
How should the Builder test the pronounciation of the statement?

- A. Use the Alexa Simulator tab in the developer console to interact with the skill using the selected locale.
- B. Create a developer account for the specific locale, and use a device to interact with the skill.
- C. Use Voice & Tone tab in the developer console to play the statement using the selected locale.
- D. Use the Manual JSON tab in the developer console to create a sample JSON response

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/devconsole/test-your-skill.html

Question #5*Topic 2*

An Alexa Skill Builder is developing a skill containing a multi-turn dialog that can be invoked with or without a specific intent request. On invocation, the skill needs to retrieve persistent attributes that have been saved by a previous invocation, and then copy them into session attributes.
How should the Builder implement this functionality?

- A. Place logic within the skill's SessionEndedRequest intent handler to copy the persistent attributes into the session attributes.
- B. Implement ResponseInterceptor containing logic that takes the current persistent attributes and copies them into session attributes.
- C. Include logic within the LaunchRequest intent handler to retrieve persistent attributes and copy them into session attributes.
- D. Implement RequestInterceptor containing logic which for new sessions, retrieves persistent attributes and copies them into session attributes

**Correct Answer:** *A*
Reference:
https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/manage-attributes.html

Question #6*Topic 2*

An Alexa Skill Builder has built a new custom skill backed by an AWS Lambda function. The Lambda function executes successfully from the Lambda console, however, the Lambda function cannot be successfully invoked in the developer console or from an Amazon Alexa enabled device. No error messages show in the function's Amazon CloudWatch Logs. The Builder confirmed the endpoint has the correct ARN.
What is likely causing this issue and how can it be corrected?

- A. The Lambda application code has a bug that is causing it to crash. Modify the code to fix the bug, then redeploy the Lambda function.
- B. The ASK SDK was not deployed with the Lambda function. Add the ASK SDK, then redeploy the Lambda function.
- C. The ASK trigger for the Lambda function has been restricted to the wrong skill ID. Re-create the trigger with the correct skill ID.
- D. The Lambda role does not have the correct AWS IAM permission. Update the IAM role associated with the Lambda function.

**Correct Answer:** *A*

Question #7*Topic 2*

A skill contains a PlanMyTrip intent configured to require slots fromCity and toCity. It contains the following interaction:
Alexa: What city are you leaving from?
User: I'm leaving from Seattle.
Alexa: You want to fly out of Seattle Tacoma International Airport, right?

User: Yes -
Which of the following should the Builder use to confirm the value of the fromCity slot only? (Choose two.)

- A. Use the Dialog.ConfirmSlot directive, including the full airport name in the outputSpeech object.
- B. Use the Dialog.ConfirmIntent directive, including the full airport name in the updatedIntent object.
- C. Use the Dialog.Delegate directive, including the full airport name in the updatedIntent object.
- D. Use the Dialog.Delegate directive, including the full airport name in the outputSpeech object.
- E. Use the Dialog.ElicitSlot directive, including the full airport name in the updatedIntent object.

**Correct Answer:** *BD*

Question #8*Topic 2*

An Alexa Skill Builder is troubleshooting issues with a custom skill backed by an AWS Lambda function that integrates with an external API controlling a light bulb.
The Builder observes that when saying "Alexa, turn on the light" the response is "light is not responding" and 10 seconds later, the light turns on.
What is the MOST likely cause for this issue and how can it be solved?

- A. The Lambda function is not executing fast enough. Double the currently specified Lambda memory allocation in the Lambda basic settings section.
- B. The default Lambda function timeout setting is too short and the Lambda function times out before the response from the external API can be processed and a reply can be sent back to Amazon Alexa. Increase the Lambda timeout limit.
- C. There are too many concurrent Lambda functions running, causing the existing Lambda function to block and then time out before a response can be returned to Amazon Alexa. Increase the Lambda function reserve concurrency value to 30, then verify that the function can complete its work within 10 seconds.
- D. There is a bug in the Lambda function code preventing the external API from being called. Enable Lambda debugging and error handling and check Amazon CloudWatch Logs for the error, then modify the code accordingly.

**Correct Answer:** *D*

Question #9*Topic 2*

An Alexa Skill Builder did not include a display template in a skill.
When the skill is used with an Amazon Alexa enabled device with a screen, cards used in the skill are:

- A. rendered as a gray screen.
- B. rendered using the skill icon as the foreground image.
- C. rendered using the skill icon as the background image.
- D. rendered using BodyTemplate1.

**Correct Answer:** *D*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/best-practices-for-skill-card-design.html

Question #10*Topic 2*

AMAZON.MoreIntent is comparable to which of the following Amazon Alexa intents? (Choose two.)

- A. AMAZON.ResumeIntent
- B. AMAZON.ScrollDownIntent
- C. AMAZON.RepeatIntent
- D. AMAZON.ScrollRightIntent
- E. AMAZON.LoopOnIntent

**Correct Answer:** *BD*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/standard-built-in-intents.html#amazonmoreintent

Question #11*Topic 2*

An Alexa Skill Builder is developing a complex skill to help users purchase items. The Builder has implemented the default AMAZON.HelpIntent, but when users ask for help they always reach the same unhelpful result.
How should the Builder enhance the experience to guide the users toward the end goal?

- A. Check the state of the user conversation when AMAZON.HelpIntent is received to give contextual responses.
- B. Implement AMAZON.FallbackIntent to give a response when an utterance is not understood.
- C. Extend the default AMAZON.HelpIntent with more sample utterances.
- D. Implement a custom intent users can request when they need help.

**Correct Answer:** *A*

Question #12*Topic 2*

An Alexa Skill Builder noticed that a large percentage of a food ordering skill's customers are not completing their transactions. The Builder needs to know what portion of the customers are leaving the skill by not responding, compared to the portion of customers who receive an error.
Which report inside the Analytics section of the developer console will provide this information?

- A. Session Type Distribution
- B. Unique Customers Per Intent
- C. Average Session Per Customer
- D. Failed Utterances Per Intent

**Correct Answer:** *C*
Reference:
https://developer.amazon.com/en-US/docs/alexa/devconsole/measure-skill-usage.html

Question #13*Topic 2*

An Alexa Skill Builder is designing a skill with an intent that needs six slots to be filled. It is unlikely that a user will provide all the slot values in a single utterance, so the slot fulfillment should be split up into a multi-turn conversation.
What can the Builder do in the developer console to have Amazon Alexa elicit any missing slots, without specifying each of the slots in the backend code?

- A. Keep track of what slots are filled in session attributes, and in the backend code, prompt the user for the missing slots using Dialog.ElicitSlot.
- B. Mark those six slots are required, fill in the necessary prompts, and in the backend code, use the Dialog.Delegate directive until all slots are filled.
- C. Mark those six slots are required, fill in the necessary prompts, and in the backend code, use the Dialog.ConfirmSlot directive until all slots are filled
- D. Mark those six slots are required, fill in the necessary prompts, and in the backend code, use the Dialog.ElicitSlot directive until all slots are filled.

**Correct Answer:** *B*
Reference:
https://developer.amazon.com/en-US/docs/alexa/custom-skills/create-the-interaction-model-for-your-skill.html

Question #14*Topic 2*

An Alexa Skill Builder published a skill and now wants to update it.
Which of the following changes will make it necessary to have the skill re-certified? (Choose two.)

- A. Adding a new intent in the interaction model
- B. Changing the text of a skill response
- C. Adding a sentence to the skill description
- D. Changing the URL of the image on a skill card
- E. Updating the backend to point to a new database

**Correct Answer:** *DE*