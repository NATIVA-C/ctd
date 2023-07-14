
![ExamTopics Logo](https://www.examtopics.com/assets/images/et/ExamTopics-Logo-Smaller.png) - Expert Verified, Online, **Free**.

[ Custom View Settings](https://www.examtopics.com/exams/amazon/ans-c00/custom-view/)

## Topic 1 - Single Topic

Question #1*Topic 1*

Your organization's corporate website must be available on www.acme.com and acme.com.
How should you configure Amazon Route 53 to meet this requirement?

- A. Configure acme.com with an ALIAS record targeting the ELB. www.acme.com with an ALIAS record targeting the ELB.
- B. Configure acme.com with an A record targeting the ELB. www.acme.com with a CNAME record targeting the acme.com record.
- C. Configure acme.com with a CNAME record targeting the ELB. www.acme.com with a CNAME record targeting the acme.com record.
- D. Configure acme.com using a second ALIAS record with the ELB target. www.acme.com using a PTR record with the acme.com record target.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #2*Topic 1*

You are building an application in AWS that requires Amazon Elastic MapReduce (Amazon EMR). The application needs to resolve hostnames in your internal, on-premises Active Directory domain. You update your DHCP Options Set in the VPC to point to a pair of Active Directory integrated DNS servers running in your
VPC.
Which action is required to support a successful Amazon EMR cluster launch?

- A. Add a conditional forwarder to the Amazon-provided DNS server.
- B. Enable seamless domain join for the Amazon EMR cluster.
- C. Launch an AD connector for the internal domain.
- D. Configure an Amazon Route 53 private zone for the EMR cluster.

**Correct Answer:** *B*
References:
https://aws.amazon.com/blogs/security/how-to-connect-your-on-premises-active-directory-to-aws-using-ad-connector/

*Community vote distribution*

A (100%)



Question #3*Topic 1*

You have a three-tier web application with separate subnets for Web, Applications, and Database tiers. Your CISO suspects your application will be the target of malicious activity. You are tasked with notifying the security team in the event your application is port scanned by external systems.
Which two AWS Services cloud you leverage to build an automated notification system? (Choose two.)

- A. Internet gateway
- B. VPC Flow Logs
- C. AWS CloudTrail
- D. Lambda
- E. AWS Inspector

**Correct Answer:** *CD*
References:
https://aws.amazon.com/blogs/security/how-to-receive-alerts-when-specific-apis-are-called-by-using-aws-cloudtrail-amazon-sns-and-aws-lambda/

*Community vote distribution*

BD (100%)



Question #4*Topic 1*

You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet and from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link.
How should you design routing to meet these requirements?

- A. Configure a single routing table with two default routes: one to the Internet via an IGW, the other to the on-premises network via the VGW. Use this routing table across all subnets in your VPC.
- B. Configure two routing tables: one that has a default route via the IGW, and another that has a default route via the VGW. Associate both routing tables with each VPC subnet.
- C. Configure a single routing table with a default route via the IGW. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnet.
- D. Configure a single routing table with a default route via the IGW. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #5*Topic 1*

Your company decides to use Amazon S3 to augment its on-premises data store. Instead of using the company's highly controlled, on-premises Internet gateway, a Direct Connect connection is ordered to provide high bandwidth, low latency access to S3. Since the company does not own a publically routable IPv4 address block, a request was made to AWS for an AWS-owned address for a Public Virtual Interface (VIF).
The security team is calling this new connection a `backdoor`, and you have been asked to clarify the risk to the company.
Which concern from the security team is valid and should be addressed?

- A. AWS advertises its aggregate routes to the Internet allowing anyone on the Internet to reach the router.
- B. Direct Connect customers with a Public VIF in the same region could directly reach the router.
- C. EC2 instances in the same region with access to the Internet could directly reach the router.
- D. The S3 service could reach the router through a pre-configured VPC Endpoint.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #6*Topic 1*

Your organization uses a VPN to connect to your VPC but must upgrade to a 1-G AWS Direct Connect connection for stability and performance. Your telecommunications provider has provisioned the circuit from your data center to an AWS Direct Connect facility and needs information on how to cross-connect
(e.g., which rack/port to connect).
What is the AWS-recommended procedure for providing this information?

- A. Create a support ticket. Provide your AWS account number and telecommunications company's name and where you need the Direct Connect connection to terminate.
- B. Create a new connection through your AWS Management Console and wait for an email from AWS with information.
- C. Ask your telecommunications provider to contact AWS through an AWS Partner Channel. Provide your AWS account number.
- D. Contact an AWS Account Manager and provide your AWS account number, telecommunications company's name, and where you need the Direct Connect connection to terminate.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #7*Topic 1*

You manage a web service that is used by client applications deployed in 300 offices worldwide. The web service architecture is an Elastic Load Balancer (ELB) distributing traffic across four application servers deployed in an Auto Scaling group across two Availability Zones.
The ELB is configured to use round robin, and sticky sessions are disabled. You have configured the NACLs and security groups to allow port 22 from your bastion host, and port 80 from 0.0.0.0/0. The client configuration is managed by each regional IT team.
Upon inspection you find that a large amount of requests from incorrectly configured sites are causing a single application server to degrade. The remainder of the requests are equally distributed across all servers with no negative effects.
What should you do to remedy the situation and prevent future occurrences?

- A. Mark the affected instance as degraded in the ELB and raise it with the client application team.
- B. Update the NACL to only allow port 80 to the application servers from the ELB servers.
- C. Update the Security Groups to only allow port 80 to the application servers from the ELB.
- D. Terminate the affected instance and allow Auto Scaling to create a new instance.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #8*Topic 1*

A multinational organization has applications deployed in three different AWS regions. These applications must securely communicate with each other by VPN.
According to the organization's security team, the VPN must meet the following requirements:
✑ AES 128-bit encryption
✑ SHA-1 hashing
✑ User access via SSL VPN
✑ PFS using DH Group 2
✑ Ability to maintain/rotate keys and passwords
✑ Certificate-based authentication
Which solution should you recommend so that the organization meets the requirements?

- A. AWS hardware VPN between the virtual private gateway and customer gateway
- B. A third-party VPN solution deployed from AWS Marketplace
- C. A private MPLS solution from an international carrier
- D. AWS hardware VPN between the virtual private gateways in each region

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #9*Topic 1*

Refer to the image.
![img](https://www.examtopics.com/assets/media/exam-media/03964/0000600001.png)
You have three VPCs: A, B, and C. VPCs A and C are both peered with VPC B. The IP address ranges are as follows:
✑ VPC A: 10.0.0.0/16
✑ VPC B: 192.168.0.0/16
✑ VPC C: 10.0.0.0/16
Instance i-1 in VPC A has the IP address 10.0.0.10. Instance i-2 in VPC C has the IP address 10.0.0.10. Instances i-3 and i-4 in VPC B have the IP addresses
192.168.1.10 and 192.168.1.20, respectively, i-3 and i-4 are in the subnet 192.168.1.0/24.
✑ i-3 must be able to communicate with i-1
✑ i-4 must be able to communicate with i-2
✑ i-3 and i-4 are able to communicate with i-1, but not with i-2.
Which two steps will fix this problem? (Choose two.)

- A. Create subnets 192.168.1.0/28 and 192.168.1.16/28. Move i-3 and i-4 to these subnets, respectively.
- B. Create subnets 192.168.1.0/27 and 192.168.1.16/27. Move i-3 and i-4 to these subnets, respectively.
- C. Change the IP address of i-2 to 10.0.0.100. Assign it an elastic IP address.
- D. Create a new route table for VPC B, with unique route entries for destination VPC A and destination VPC C.
- E. Create two route tables: one with a route for destination VPC A, and another for destination VPC C.

**Correct Answer:** *AE*

*Community vote distribution*

AE (78%)

CD (22%)



Question #10*Topic 1*

A legacy, on-premises web application cannot be load balanced effectively. There are both planned and unplanned events that cause usage spikes to millions of concurrent users. The existing infrastructure cannot handle the usage spikes. The CIO has mandated that the application be moved to the cloud to avoid further disruptions, with the additional requirement that source IP addresses be unaltered to support network traffic-monitoring needs. Which of the following designs will meet these requirements?

- A. Use an Auto Scaling group of Amazon EC2 instances behind a Classic Load Balancer.
- B. Use an Auto Scaling group of EC2 instances in a target group behind an Application Load Balancer.
- C. Use an Auto Scaling group of EC2 instances in a target group behind a Classic Load Balancer.
- D. Use an Auto Scaling group of EC2 instances in a target group behind a Network Load Balancer.

**Correct Answer:** *D*

Question #11*Topic 1*

An organization processes consumer information submitted through its website. The organization's security policy requires that personally identifiable information
(PII) elements are specifically encrypted at all times and as soon as feasible when received. The front-end Amazon EC2 instances should not have access to decrypted PII. A single service within the production VPC must decrypt the PII by leveraging an IAM role.
Which combination of services will support these requirements? (Choose two.)

- A. Amazon Aurora in a private subnet
- B. Amazon CloudFront using AWS Lambda@Edge
- C. Customer-managed MySQL with Transparent Data Encryption
- D. Application Load Balancer using HTTPS listeners and targets
- E. AWS Key Management Services

**Correct Answer:** *CE*
References:
https://noise.getoto.net/tag/aws-kms/

*Community vote distribution*

BE (100%)



Question #12*Topic 1*

A Lambda function needs to access the private address of an Amazon ElastiCache cluster in a VPC. The Lambda function also needs to write messages to
Amazon SQS. The Lambda function has been configured to run in a subnet in the VPC.
Which of the following actions meet the requirements? (Choose two.)

- A. The Lambda function needs an IAM role to access Amazon SQS
- B. The Lambda function must route through a NAT gateway or NAT instance in another subnet to access the public SQS API.
- C. The Lambda function must be assigned a public IP address to access the public Amazon SQS API.
- D. The ElastiCache server outbound security group rules must be configured to permit the Lambda function's security group.
- E. The Lambda function must consume auto-assigned public IP addresses but not elastic IP addresses.

**Correct Answer:** *AC*
References:
https://aws.amazon.com/premiumsupport/knowledge-center/internet-access-lambda-function/

*Community vote distribution*

AB (100%)



Question #13*Topic 1*

You are deploying an EC2 instance in a private subnet that requires access to the Internet. One of the requirements for this solution is to restrict access to only particular URLs on a whitelist. In addition to the whitelisted URLs, the instances should be able to access any Amazon S3 bucket in the same region via any URL.
Which of the following solutions should you deploy? (Choose two.)

- A. Include s3.amazonaws.com in the whitelist.
- B. Create a VPC endpoint for S3.
- C. Run Squid proxy on a NAT instance.
- D. Deploy a NAT gateway into your VPC.
- E. Utilize a security group to restrict access.

**Correct Answer:** *CD*

*Community vote distribution*

BC (100%)



Question #14*Topic 1*

Your company runs an HTTPS application using an Elastic Load Balancing (ELB) load balancer/PHP on nginx server/RDS in multiple Availability Zones. You need to apply Geographic Restriction and identify the client's IP address in your application to generate dynamic content.
How should you utilize AWS services in a scalable fashion to perform this task?

- A. Modify the nginx log configuration to record value in X-Forwarded-For and use CloudFront to apply the Geographic Restriction.
- B. Enable ELB access logs to store the client IP address and parse these to dynamically modify a blacklist.
- C. Use X-Forwarded-For with security groups to apply the Geographic Restriction.
- D. Modify the application code to use value of X-Forwarded-For and CloudFront to apply the Geographic Restriction.

**Correct Answer:** *A*

*Community vote distribution*

D (67%)

A (33%)



Question #15*Topic 1*

You run a well-architected, multi-AZ application in the eu-central-1 (Frankfurt) AWS region. The application is hosted in a VPC and is only accessed from the corporate network. To support large volumes of data transfer and administration of the application, you use a single 10-Gbps AWS Direct Connect connection with multiple private virtual interfaces. As part of a review, you decide to improve the resilience of your connection to AWS and make sure that any additional connectivity does not share the same Direct Connect routers at AWS. You need to provide the best levels of resilience to meet the application's needs.
Which two options should you consider? (Choose two.)

- A. Install a second 10-Gbps Direct Connect connection to the same Direct Connection location.
- B. Deploy an IPsec VPN over a public virtual interface on a new 10-Gbps Direct Connect connection.
- C. Install a second 10-Gbps Direct Connect connection to a Direct Connect location in eu-west-1.
- D. Deploy an IPsec VPN over the Internet to the eu-west-1 region for diversity.
- E. Install a second 10-Gbps Direct Connect connection to a second Direct Connect location for eu-central-1.

**Correct Answer:** *BC*

*Community vote distribution*

CE (80%)

AE (20%)



Question #16*Topic 1*

You currently use a single security group assigned to all nodes in a clustered NoSQL database. Only your cluster members in one region must be able to connect to each other. This security group uses a self-referencing rule using the cluster security group's group-id to make it easier to add or remove nodes from the cluster. You need to make this database comply with out-of-region disaster recovery requirements and ensure that the network traffic between the nodes is encrypted when travelling between regions. How should you enable secure cluster communication while deploying additional cluster members in another AWS region?

- A. Create an IPsec VPN between AWS regions, use private IP addresses to route traffic, and create cluster security group rules that reference each other's security group-id in each region.
- B. Create an IPsec VPN between AWS regions, use private IP addresses to route traffic, and create cluster security group CIDR-based rules that correspond with the VPC CIDR in the other region.
- C. Use public IP addresses and TLS to securely communicate between cluster nodes in each AWS region, and create cluster security group CIDR-based rules that correspond with the VPC CIDR in the other region.
- D. Use public IP addresses and TLS to securely communicate between cluster nodes in each AWS region, and create cluster security group rules that reference each other's security group-id in each region.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #17*Topic 1*

You have to set up an AWS Direct Connect connection to connect your on-premises to an AWS VPC. Due to budget requirements, you can only provision a single
Direct Connect port. You have two border gateway routers at your on-premises data center that can peer with the Direct Connect routers for redundancy.
Which two design methodologies, in combination, will achieve this connectivity? (Choose two.)

- A. Terminate the Direct Connect circuit on a L2 border switch, which in turn has trunk connections to the two routers.
- B. Create two Direct Connect private VIFs for the same VPC, each with a different peer IP.
- C. Terminate the Direct Connect circuit on any of the one routers, which in turn will have an IBGP session with the other router.
- D. Create one Direct Connect private VIF for the VPC with two customer peer IPs.
- E. Provision two VGWs for the VPC and create one Direct Connect private VIF per VGW.

**Correct Answer:** *AD*

*Community vote distribution*

AB (100%)



Question #18*Topic 1*

Your organization needs to resolve DNS entries stored in an Amazon Route 53 private zone `awscloud:internal` from the corporate network. An AWS Direct
Connect connection with a private virtual interface is configured to provide access to a VPC with the CIDR block 192.168.0.0/16. A DNS Resolver (BIND) is configured on an Amazon Elastic Compute Cloud (EC2) instance with the IP address 192.168.10.5 within the VPC. The DNS Resolver has standard root server hints configured and conditional forwarding for `awscloud.internal` to the IP address 192.168.0.2.
From your PC on the corporate network, you query the DNS server at 192.168.10.5 for www.amazon.com. The query is successful and returns the appropriate response. When you query for `server.awscloud.internal`, the query times out. You receive no response.
How should you enable successful queries for `server.awscloud.internal`?

- A. Attach an internet gateway to the VPC and create a default route.
- B. Configure the VPC settings for enableDnsHostnames and enableDnsSupport as True
- C. Relocate the BIND DNS Resolver to the corporate network.
- D. Update the security group for the EC2 instance at 192.168.10.5 to allow UDP Port 53 outbound.

**Correct Answer:** *B*

Question #19*Topic 1*

Your company's policy requires that all VPCs peer with a `common services: VPC. This VPC contains a fleet of layer 7 proxies and an Internet gateway. No other
VPC is allowed to provision an Internet gateway. You configure a new VPC and peer with the common service VPC as required by policy. You launch an Amazon
EC2. Windows instance configured to forward all traffic to the layer 7 proxies in the common services VPC. The application on this server should successfully interact with Amazon S3 using its properly configured AWS Identity and Access Management (IAM) role. However, Amazon S3 is returning 403 errors to the application.
Which step should you take to enable access to Amazon S3?

- A. Update the S3 bucket policy with the private IP address of the instance.
- B. Exclude 169.254.169.0/24 from the instance's proxy configuration.
- C. Configure a VPC endpoint for Amazon S3 in the same subnet as the instance.
- D. Update the CORS configuration for Amazon S3 to allow traffic from the proxy.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #20*Topic 1*

A customer is using ABC Telecom as a network provider. The customer has 10 different offices connected to ABC Telecom's MPLS backbone. The customer is setting up an AWS Direct Connect connection to AWS and has provided the LOA-CFA to ABC Telecom. ABC Telecom has terminated the Direct Connect circuit into their MPLS backbone. To uniquely identify the customer's traffic over the MPLS backbone, the customer must encapsulate all traffic with VLAN tag 100. The customer wants to send traffic to multiple VPCs.
Which two steps should be taken to meet the customer's requirement? (Choose two.)

- A. The customer performs Q-in-Q tunneling, with the AWS-required VLAN tag in the inside and VLAN 100 as the outside tag.
- B. Create a support ticket with AWS to request the removal of the outer VLAN tag 100 as the traffic reaches AWS routers.
- C. Send the traffic for all VPCs with the same VLAN tag 100 and use BGP to ensure that proper routing takes place to the appropriate VPC.
- D. ABC Telecom removes the outer tag before sending the packet to AWS.
- E. ABC Telecom creates a support ticket with AWS to exchange MPLS labels and include the AWS port as part of their MPLS network.

**Correct Answer:** *CE*

*Community vote distribution*

AD (100%)



Question #21*Topic 1*

An organization runs a consumer-facing website on AWS. The Amazon EC2-based web fleet is load balanced using the AWS Application Load Balancer; Amazon
Route 53 is used to provide the public DNS services.
The following URLs need to server content to end users:
test.example.com
web.example.com
example.com
Based on this information, what combination of services must be used to meet the requirement? (Choose two.)

- A. Path condition in ALB listener to route example.com to appropriate target groups.
- B. Host condition in ALB listener to route *.example.com to appropriate target groups.
- C. Host condition in ALB listener to route example.com to appropriate target groups.
- D. Path condition in ALB listener to route *.example.com to appropriate target groups.
- E. Host condition in ALB listener to route $$$$.example.com to appropriate target groups.

**Correct Answer:** *AC*

*Community vote distribution*

BC (100%)



Question #22*Topic 1*

Under increased cybersecurity concerns, a company is deploying a near real-time intrusion detection system (IDS) solution. A system must be put in place as soon as possible. The architecture consists of many AWS accounts, and all results must be delivered to a central location.
Which solution will meet this requirement, while minimizing downtime and costs?

- A. Deploy a third-party vendor solution to perform deep packet inspection in a transit VPC.
- B. Enable VPC Flow Logs on each VPC. Set up a stream of the flow logs to a central Amazon Elasticsearch cluster.
- C. Enable Amazon Macie on each AWS account and configure central reporting.
- D. Enable Amazon GuardDuty on each account as members of a central account.

**Correct Answer:** *D*
References:
https://aws.amazon.com/blogs/security/how-to-manage-amazon-guardduty-security-findings-across-multiple-accounts/

*Community vote distribution*

D (60%)

A (40%)



Question #23*Topic 1*

An organization delivers high-resolution, dynamic web content. Internet users access the content from a variety of platforms, including mobile, tablet and desktop.
Each platform receives a customized experience to account for the differences in viewing modes. A dedicated, automatic-scaling fleet of Amazon EC2 instances is used for each platform to server content based on path-based headers.
Which combination of services will MINIMIZE cost and MAXIMIZE performance? (Choose two.)

- A. Amazon CloudFront with Lambda@Edge
- B. Network Load Balancer
- C. Amazon S3 static websites
- D. Amazon Route 53 with traffic flow policies
- E. Application Load Balancer

**Correct Answer:** *AE*
References:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html

Question #24*Topic 1*

A company needs to set up a VPN between AWS VPC and its on-premises network. A team creates a VPN connection in the AWS Management Console, downloads the configuration file, and installs it on the on-premises router. The tunnel is not coming up because of firewall restrictions on the router. Which two network traffic options should you allow through the firewall? (Choose two.)

- A. UDP port 500
- B. IP protocol 50
- C. IP protocol 5
- D. TCP port 50
- E. TCP port 500

**Correct Answer:** *AB*
References:
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_VPN.html

*Community vote distribution*

AB (100%)



Question #25*Topic 1*

You have been asked to monitor traffic flows on your Amazon EC2 instance. You will be performing deep packet inspection, looking for atypical patterns.
Which tool will enable you to look at this data?

- A. Wireshark
- B. VPC Flow Logs
- C. AWS CLI
- D. CloudWatch Logs

**Correct Answer:** *A*
References:
https://www.slideshare.net/TeriRadichel/packet-capture-on-aws

*Community vote distribution*

A (100%)



Question #26*Topic 1*

You ping an Amazon Elastic Compute Cloud (EC2) instance from an on-premises server. VPC Flow Logs record the following:
2 123456789010 eni-1235b8ca 10.123.234.78 172.11.22.33 0 0 1 8 672 1432917027
1432917142 ACCEPT OK
2 123456789010 eni-1235b8ca 172.11.22.33 10.123.234.78 0 0 1 4 336 1432917027
1432917082 ACCEPT OK
2 123456789010 eni-1235b8ca 172.11.22.33 10.123.234.78 0 0 1 4 336 1432917094
1432917142 REJECT OK
Why are ICMP responses not received by the on-premises system?

- A. The inbound network access control list is blocking the traffic
- B. The outbound network access control list is blocking the traffic
- C. The inbound security group is blocking the traffic.
- D. The outbound security group is blocking the traffic.

**Correct Answer:** *B*
An ACCEPT record for the originating ping that was allowed by both the network ACL and the security group, and therefore was allowed to reach your instance.
A REJECT record for the response ping that the network ACL denied.
If your network ACL permits outbound ICMP traffic, the flow log displays two ACCEPT records (one for the originating ping and one for the response ping). If your security group denies inbound ICMP traffic, the flow log displays a single REJECT record, because the traffic was not permitted to reach your instance.
Reference:
https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html

*Community vote distribution*

B (100%)



Question #27*Topic 1*

You are moving a two-tier application into an Amazon VPC. An Elastic Load Balancing (ELB) load balancer is configured in front of the application tier. The application tier is driven through RESTful interfaces. The data tier uses relational database service (RDS) MySQL. Company policy requires end-to-end encryption of all data in transit.
What ELB configuration complies with the corporate encryption policy?

- A. Configure the ELB load balancer protocol as HTTP. Configure the application instances for SSL termination. Configure Amazon RDS for SSL, and use REQUIRE SSL grants.
- B. Configure the ELB protocols in TCP mode. Configure the application instances for SSL termination. Configure Amazon RDS for SSL, and use REQUIRE SSL grants.
- C. Configure the ELB load balancer protocol as HTTPS. Offload application instance encryption to the load balancer. Install your SSL certificate on Amazon RDS, and configure SSL.
- D. Configure the ELB protocols in SSL mode. Offload application instance encryption to the load balancer. Install your SSL/TLS certificate on Amazon RDS, and configure SSL.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #28*Topic 1*

Your application is hosted behind an Elastic Load Balancer (ELB) within an autoscaling group. The autoscaling group is configured with a minimum of 2, a maximum of 14, and a desired value of 2. The autoscaling cooldown and the termination policies are set to the default value.
CloudWatch reports that the site typically requires just two servers, but spikes at the start and end of the business day can require eight to ten servers. You receive intermittent reports of timeouts and partially loaded web pages.
Which configuration change should you make to address this issue?

- A. Configure connection draining on the ELB.
- B. Configure the autoscaling cooldown to 600 seconds.
- C. Configure the termination policy to oldest instance.
- D. Configure a Terminating: Wait lifecycle hook on a scale in event.

**Correct Answer:** *A*
References:
https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html

Question #29*Topic 1*

You are designing an AWS Direct Connect solution into your VPC. You need to consider requirements for the customer router to terminate the Direct Connect link at the Direct Connect location.
Which three factors that must be supported should you consider when choosing the customer router? (Choose three.)

- A. 802.1Q VLAN encapsulation
- B. 802.1ax or 802.3ad link aggregation
- C. OSPF
- D. BGP
- E. single-mode optical fiber connectivity
- F. 1-Gbps copper connectivity

**Correct Answer:** *ADE*

*Community vote distribution*

ADE (50%)

AE (50%)



Question #30*Topic 1*

Your company uses an NTP server to synchronize time across systems. The company runs multiple versions of Linux and Windows systems. You discover that the NTP server has failed, and you need to add an alternate NTP server to your instances.
Where should you apply the NTP server update to propagate information without rebooting your running instances?

- A. DHCP Options Set
- B. instance user-data
- C. cfn-init scripts
- D. instance meta-data

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #31*Topic 1*

Your company has set up AWS Direct Connect to connect on-premises to an Amazon VPC instance. Two Direct Connect connections terminate at two different
Direct Connect locations. You are using two routers, R1 and R2, at your end (one of each Direct Connect connection). R1 and R2 do NOT have connectivity between them. Both routers advertise the same routers over BGP to the VGW. You have a stateful firewall on each router. The routers drop some of the traffic coming from the VPC.
Which two actions should you take to fix this problem? (Choose two.)

- A. Use BGP AS prepend attribute to prepend additional AS numbers while advertising routers from R1 to VGW.
- B. Use BGP local preference attribute to assign R1 to a lower local preference number than R2.
- C. Use BGP local preference attribute to assign R1 a higher local preference number than R2.
- D. Use BGP MED attribute to assign a higher MED value to the routes advertised R1 to VGW.
- E. Use BGP MED attribute to assign a higher MED value to the routes advertised from R2 to VGW.

**Correct Answer:** *AC*

*Community vote distribution*

AD (100%)



Question #32*Topic 1*

An organization will be expanding its current network design. When fully built out, there will be 99 VPCs spread across 11 AWS accounts (9 VPCs per account).
There is currently an AWS Direct Connect connection into one account with 9 VPCs, each with a virtual network interface (VIF) per VPC.
Which of the following designs will minimize cost while allowing the organization to expand?

- A. Order 10 new Direct Connect connections, one from each of the accounts that will be provisioned. Create private VIFs in each account. Attach one private VIF per VPC.
- B. Create a public VIF on the Direct Connect connection. Leverage the public VIF to create a VPN connection to each VPC.
- C. Create hosted private VIFs in the existing account. Connect a private VIF to an AWS Direct Connect gateway in each account. Connect the gateway in each account to the VPCs.
- D. Create a transit VPC in the existing account that consists of two routers in separate Availability Zones. Connect each VPC to the two routers in the transit VPC by using VPN.

**Correct Answer:** *D*

*Community vote distribution*

D (57%)

C (43%)



Question #33*Topic 1*

An organization with a growing ecommerce presence uses the AWS CloudHSM to offload the SSL/TLS processing of its web server fleet. The company leverages
Amazon EC2 Auto Scaling for web servers to handle the growth. What architectural approach is optimal to scale the encryption operation?

- A. Use multiple CloudHSM instances, and load balance them using a Network Load Balancer.
- B. Use multiple CloudHSM instances to the cluster; request to it will automatically load balance.
- C. Enable Auto Scaling on the CloudHSM instance, with similar configuration to the web tier Auto Scaling group.
- D. Use multiple CloudHSM instances, and load balance them using an Application Load Balancer.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #34*Topic 1*

A company has 225 mobile and desktop devices and 300 partner VPNs that need access to an AWS VPC. VPN users should not be able to reach one another.
Which approach will meet the technical and security requirements while minimizing costs?

- A. Use the AWS IPsec VPN for the mobile, desktop, and partner VPN connections. Use network access control lists (Network ACLs) and security groups to maintain routing separation.
- B. Use the AWS IPsec VPN for the partner VPN connections. Use an Amazon EC2 instance VPN for the mobile and desktop devices. Use Network ACLs and security groups to maintain routing separation.
- C. Create an AWS Direct Connect connection between on-premises and AWS Use a public virtual interface to connect to the AWS IPsec VPN for the mobile, desktop, and partner VPN connections.
- D. Use an Amazon EC2 instance VPN for the desktop, mobile, and partner VPN connections. Use features of the VPN instance to limit routing and connectivity.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #35*Topic 1*

Your company needs to leverage Amazon Simple Storage Solution (S3) for backup and archiving. According to company policy, data should not flow on the public
Internet even if data is encrypted. You have set up two S3 buckets in us-east-1 and us-west-2. Your company data center is located on the West Coast of the
United States. The design must be cost-effective and enable minimal latency.
Which design should you set up?

- A. An AWS Direct Connect connection to us-east-1 and a Direct Connect connection to us-west-2.
- B. An AWS Direct Connect connection to us-east-1.
- C. An AWS Direct Connect connection to us-west-2.
- D. An AWS Direct Connect connection to us-west-2 and a VPN connection to us-east-1.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #36*Topic 1*

Your organization runs a popular e-commerce application deployed on AWS that uses auto scaling in conjunction with an Elastic Load balancing (ELB) service with an HTTPS listener. Your security team reports that an exploitable vulnerability has been discovered in the encryption protocol and cipher that your site uses.
Which step should you take to fix this problem?

- A. Generate new SSL certificates for all web servers and replace current certificates.
- B. Change the security policy on the ELB to disable vulnerable protocols and ciphers.
- C. Generate new SSL certificates and use ELB to front-end the encrypted traffic for all web servers.
- D. Leverage your current configuration management system to update SSL policy on all web servers.

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #37*Topic 1*

Your organization leverages an IP Address Management (IPAM) product to manage IP address distribution. The IPAM exposes an API. Development teams use
CloudFormation to provision approved reference architectures. At deployment time, IP addresses must be allocated to the VPC. When the VPC is deleted, the
IPAM must reclaim the VPC's IP allocation.
Which method allows for efficient, automated integration of the IPAM with CloudFormation?

- A. AWS CloudFormation parameters using the ג€Ref::ג€ intrinsic function
- B. AWS CloudFormation custom resource using an AWS Lambda invocation.
- C. CloudFormation::OpsWorks::Stack with custom Chef configuration.
- D. AWS CloudFormation parameters using the ג€Fn::FindInMapג€ intrinsic function.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #38*Topic 1*

You need to set up an Amazon Elastic Compute Cloud (EC2) instance for an application that requires the lowest latency and the highest packet-per-second network performance. The application will talk to other servers in a peered VPC.
Which two of the following components should be part of the design? (Choose two.)

- A. Select an instance with support for single root I/O virtualization.
- B. Select an instance that has support for multiple ENAs.
- C. Ensure that the instance supports jumbo frames and set 9001 MTU.
- D. Select an instance with Amazon Elastic Block Store (EBS)-optimization.
- E. Ensure that proper OS drivers are installed.

**Correct Answer:** *AB*
References:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html

*Community vote distribution*

AE (63%)

BC (38%)



Question #39*Topic 1*

You are configuring a virtual interface for access to your VPC on a newly provisioned 1-Gbps AWS Direct Connect connection. Which two configuration values do you need to provide? (Choose two.)

- A. Public AS number
- B. VLAN ID
- C. IP prefixes to advertise
- D. Direct Connect location
- E. Virtual private gateway

**Correct Answer:** *AE*
References:
https://aws.amazon.com/directconnect/faqs/

*Community vote distribution*

BE (50%)

BC (50%)



Question #40*Topic 1*

A corporate network routing table contains 624 individual RFC 1918 and public IP prefixes. You have two AWS Direct Connect connectors. You configure a private virtual interface on both connections to a virtual private gateway. The virtual private gateway is not currently attached to a VPC. Neither BGP session will maintain the Established state on the customer router. The AWS Management Console reports the private virtual interfaces as Down.
What could you do to address the problem so that the AWS Management Console reports the private virtual interface as Available?

- A. Attach the virtual private gateway to a VPC and enable route propagation.
- B. Filter the public IP pre?xes on the corporate network from the private virtual interface.
- C. Change the BGP advertisements from the corporate network to only be a default route.
- D. Attach the second virtual interface to an alternative virtual private gateway.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #41*Topic 1*

Your company maintains an Amazon Route 53 private hosted zone. DNS resolution is restricted to a single, pre-existing VPC. For a new application deployment, you create an additional VPC in the same AWS account. Both this new VPC and your on-premises DNS infrastructure must resolve records in the existing private hosted zone.
Which two activities are required to enable DNS resolution both within the new VPC and from the on-premises infrastructure? (Choose two.)

- A. Update the DHCP options set for the new VPC with the Route 53 nameserver IP addresses.
- B. Update the Route 53 private hosted zone's VPC associations to include the new VPC.
- C. Launch Amazon EC2-based DNS proxies in the new VPC. Specify the proxies as forwarders in the on-premises DNS.
- D. Update the on-premises DNS to include forwarders to the Route 53 nameserver IP addresses.
- E. Launch Amazon EC2-based DNS proxies in the new VPC. Specify the proxies in the DHCP options set.

**Correct Answer:** *AB*

*Community vote distribution*

BC (100%)



Question #42*Topic 1*

A department in your company has created a new account that is not part of the organization's consolidated billing family. The department has also created a VPC for its workload. Access is restricted by network access control lists to the department's on-premises private IP allocation. An AWS Direct Connect private virtual interface for this VPC advertises a default route to the company network. When the department downloads data from an Amazon EC2 instance in its new VPC, what are the associated charges?

- A. The company pays Internet Data Out charges.
- B. The company pays AWS Direct Connect Data Out charges.
- C. The department pays Internet Data Out charges.
- D. The department pays AWS Direct Connect Data Out charges.

**Correct Answer:** *D*

Question #43*Topic 1*

An organization will be extending its existing on-premises infrastructure into the cloud. The design consists of a transit VPC that contains stateful firewalls that will be deployed in a highly available configuration across two Availability Zones for automatic failover.
What MUST be configured for this design to work? (Choose two.)

- A. A different Autonomous System Number (ASN) for each firewall
- B. Border Gateway Protocol (BGP) routing
- C. Autonomous system (AS) path prepending
- D. Static routing
- E. Equal-cost multi-path routing (ECMP)

**Correct Answer:** *BE*

*Community vote distribution*

BC (100%)



Question #44*Topic 1*

A company is about to migrate an application from its on-premises data center to AWS. As part of the planning process, the following requirements involving DNS have been identified.
✑ On-premises systems must be able to resolve the entries in an Amazon Route 53 private hosted zone.
✑ Amazon EC2 instances running in the organization's VPC must be able to resolve the DNS names of on-premises systems
The organization's VPC uses the CIDR block 172.16.0.0/16.
Assuming that there is no DNS namespace overlap, how can these requirements be met?

- A. Change the DHCP options set for the VPC to use both the Amazon-provided DNS server and the on-premises DNS systems. Configure the on-premises DNS systems with a stub-zone, delegating the name server 172.16.0.2 as authoritative for the Route 53 private hosted zone.
- B. Deploy and configure a set of EC2 instances into the company VPC to act as DNS proxies. Configure the proxies to forward queries for the on-premises domain to the on-premises DNS systems, and forward all other queries to 172.16.0.2. Change the DHCP options set for the VPC to use the new DNS proxies. Configure the on-premises DNS systems with a stub-zone, delegating the name server 172.16.0.2 as authoritative for the Route 53 private hosted zone.
- C. Deploy and configure a set of EC2 instances into the company VPC to act as DNS proxies. Configure the proxies to forward queries for the on-premises domain to the on-premises DNS systems, and forward all other queries to the Amazon-provided DNS server (172.16.0.2). Change the DHCP options set for the VPC to use the new DNS proxies. Configure the on-premises DNS systems with a stub-zone, delegating the proxies as authoritative for the Route 53 private hosted zone.
- D. Change the DHCP options set for the VPC to use both the on-premises DNS systems. Configure the on-premises DNS systems with a stub-zone, delegating the Route 53 private hosted zone's name servers as authoritative for the Route 53 private hosted zone.

**Correct Answer:** *C*

Question #45*Topic 1*

The Web Application Development team is worried about malicious activity from 200 random IP addresses. Which action will ensure security and scalability from this type of threat?

- A. Use inbound security group rules to block the IP addresses.
- B. Use inbound network ACL rules to block the IP addresses.
- C. Use AWS WAF to block the IP addresses.
- D. Write iptables rules on the instance to block the IP addresses.

**Correct Answer:** *B*

*Community vote distribution*

C (100%)



Question #46*Topic 1*

You operate a production VPC with both a public and a private subnet. Your organization maintains a restricted Amazon S3 bucket to support this production workload. Only Amazon EC2 instances in the private subnet should access the bucket. You implement VPC endpoints (VPC-E) for Amazon S3 and remove the
NAT that previously provided a network path to Amazon S3. The default VPC-E policy is applied. Neither EC2 instances in the public or private subnets are able to access the S3 bucket.
What should you do to enable Amazon S3 access from EC2 instances in the private subnet?

- A. Add the CIDR address range of the private subnet to the S3 bucket policy.
- B. Add the VPC-E identifier to the S3 bucket policy.
- C. Add the VPC identifier for the production VPC to the S3 bucket policy.
- D. Add the VPC-E identifier for the production VPC to endpoint policy.

**Correct Answer:** *A*

*Community vote distribution*

B (67%)

A (33%)



Question #47*Topic 1*

Your hybrid networking environment consists of two application VPCs, a shared services VPC, and your corporate network. The corporate network is connected to the shared services VPC via an IPsec VPN with dynamic (BGP) routing enabled.
The applications require access to a common authentication service in the shared services VPC. You need to enable native network access from the corporate network to both application VPCs.
Which step should you take to meet the requirements?

- A. Use VPC peering to peer the application VPCs with the shared services VPC, and enable associated routing in the shared services VPC via the corporate VPN.
- B. Configure an IPsec VPN between the virtual private gateway in each application VPC to the virtual private gateway in the shared services VPC.
- C. Configure additional IPsec VPNs for each application VPC back to the corporate network, and enable VPC peering to the shared services VPC.
- D. Enable CloudHub functionality to route traffic between the three VPCs and the corporate network using dynamic BGP routing.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #48*Topic 1*

You use a VPN to extend your corporate network into a VPC. Instances in the VPC are able to resolve resource records in an Amazon Route 53 private hosted zone. Your on-premises DNS server is configured with a forwarder to the VPC DNS server IP address. On-premises users are unable to resolve names in the private hosted zone, although instances in a peered VPC can.
What should you do to provide on-premises users with access to the private hosted zone?

- A. Create a proxy resolver within the VPC. Point the on-premises forwarder to the proxy resolver.
- B. Modify the network access control list on the VPC to allow DNS queries from on-premises systems.
- C. Configure the on-premises server as a secondary DNS for the private zone. Update the NS records.
- D. Update the on-premises forwarders with the four name servers assigned to the private hosted zone.

**Correct Answer:** *D*
References:
https://aws.amazon.com/blogs/security/how-to-set-up-dns-resolution-between-on-premises-networks-and-aws-by-using-unbound/

*Community vote distribution*

A (100%)



Question #49*Topic 1*

Your organization has a newly installed 1-Gbps AWS Direct Connect connection. You order the cross-connect from the Direct Connect location provider to the port on your router in the same facility. To enable the use of your first virtual interface, your router must be configured appropriately.
What are the minimum requirements for your router?

- A. 1-Gbps Multi Mode Fiber Interface, 802.1Q VLAN, Peer IP Address, BGP Session with MD5.
- B. 1-Gbps Single Mode Fiber Interface, 802.1Q VLAN, Peer IP Address, BGP Session with MD5.
- C. IPsec Parameters, Pre-Shared key, Peer IP Address, BGP Session with MD5
- D. BGP Session with MD5, 802.1Q VLAN, Route-Map, Prefix List, IPsec encrypted GRE Tunnel

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #50*Topic 1*

Your security team implements a host-based firewall on all of your Amazon Elastic Compute Cloud (EC2) instances to block all outgoing traffic. Exceptions must be requested for each specific requirement. Until you request a new rule, you cannot access the instance metadata service. Which firewall rule should you request to be added to your instances to allow instance metadata access?

- A. Inbound; Protocol tcp; Source [Instance's EIP]; Destination 169.254.169.254
- B. Inbound; Protocol tcp; Destination 169.254.169.254; Destination port 80
- C. Outbound; Protocol tcp; Destination 169.254.169.254; Destination port 80
- D. Outbound; Protocol tcp; Destination 169 .254.169.254; Destination port 443

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #51*Topic 1*

A customer has set up multiple VPCs for Dev, Test, Prod, and Management. You need to set up AWS Direct Connect to enable data flow from on-premises to each VPC. The customer has monitoring software running in the Management VPC that collects metrics from the instances in all the other VPCs. Due to budget requirements, data transfer charges should be kept at minimum.
Which design should be recommended?

- A. Create a total of four private VIFs, one for each VPC owned by the customer, and route traffic between VPCs using the Direct Connect link.
- B. Create a private VIF to the Management VPC, and peer this VPC to all other VPCs.
- C. Create a private VIF to the Management VPC, and peer this VPC to all other VPCs; enable source/destination NAT in the Management VPC.
- D. Create a total of four private VIFs, and enable VPC peering between all VPCs.

**Correct Answer:** *A*

*Community vote distribution*

D (83%)

C (17%)



Question #52*Topic 1*

Your company runs an application for the US market in the us-east-1 AWS region. This application uses proprietary TCP and UDP protocols on Amazon Elastic
Compute Cloud (EC2) instances. End users run a real-time, front-end application on their local PCs. This front-end application knows the DNS hostname of the service.
You must prepare the system for global expansion. The end users must access the application with lowest latency.
How should you use AWS services to meet these requirements?

- A. Register the IP addresses of the service hosts as ג€Aג€ records with latency-based routing policy in Amazon Route 53, and set a Route 53 health check for these hosts.
- B. Set the Elastic Load Balancing (ELB) load balancer in front of the hosts of the service, and register the ELB name of the main service host as an ALIAS record with a latency-based routing policy in Route 53.
- C. Set Amazon CloudFront in front of the host of the service, and register the CloudFront name of the main service as an ALIAS record in Route 53.
- D. Set the Amazon API gateway in front of the service, and register the API gateway name of the main service as an ALIAS record in Route 53.

**Correct Answer:** *B*

*Community vote distribution*

A (67%)

B (33%)



Question #53*Topic 1*

You deploy an Amazon EC2 instance that runs a web server into a subnet in a VPC. An Internet gateway is attached, and the main route table has a default route
(0.0.0.0/0) configured with a target of the Internet gateway.
The instance has a security group configured to allow as follows:
✑ Protocol: TCP
✑ Port: 80 inbound and nothing outbound
The Network ACL for the subnet is configured to allow as follows:
✑ Protocol: TCP
✑ Port: 80 inbound and nothing outbound
When you try to browse to the web server, you receive no response.
Which additional step should you take to receive a successful response?

- A. Add an entry to the security group outbound rules for Protocol: TCP, Port Range: 80
- B. Add an entry to the security group outbound rules for Protocol: TCP, Port Range: 1024-65535
- C. Add an entry to the Network ACL outbound rules for Protocol: TCP, Port Range: 80
- D. Add an entry to the Network ACL outbound rules for Protocol: TCP, Port Range: 1024-65535

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #54*Topic 1*

An organization launched an IPv6-only web portal to support IPv6-native mobile clients. Front-end instances launch in an Amazon VPC associated with an appropriate IPv6 CIDR. The VPC IPv4 CIDR is fully utilized. A single subnet exists in each of two Availability Zones with appropriately configured IPv6 CIDR associations. Auto Scaling is properly configured, and no Elastic Load Balancing is used.
Customers say the service is unavailable during peak load times. The network engineer attempts to launch an instance manually and receives the following message: `There are not enough free addresses in subnet `˜subnet-12345678' to satisfy the requested number of instances.`
What action will resolve the availability problem?

- A. Create a new subnet using a VPC secondary IPv6 CIDR, and associate an IPv6 CIDR. Include the new subnet in the Auto Scaling group.
- B. Create a new subnet using a VPC secondary IPv4 CIDR, and associate an IPv6 CIDR. Include the new subnet in the Auto Scaling group.
- C. Resize the IPv6 CIDR on each of the existing subnets. Modify the Auto Scaling group maximum number of instances.
- D. Add a secondary IPv4 CIDR to the Amazon VPC. Assign secondary IPv4 address space to each of the existing subnets.

**Correct Answer:** *B*

*Community vote distribution*

B (100%)



Question #55*Topic 1*

A Network Engineer is designing a new system on AWS that will take advantage of Amazon CloudFront for both content caching and for protecting the underlying origin. There is concern that an external agency might be able to access the IP addresses for the application's origin and then attack the origin despite it being served by CloudFront. Which of the following solutions provides the strongest level of protection to the origin?

- A. Use an IP whitelist rule in AWS WAF within CloudFront to ensure that only known-client IPs are able to access the application.
- B. Configure CloudFront to use a custom header and configure an AWS WAF rule on the origin's Application Load Balancer to accept only traffic that contains that header.
- C. Configure an AWS Lambda@Edge function to validate that the traffic to the Application Load Balancer originates from CloudFront.
- D. Attach an origin access identity to the CloudFront origin that allows traffic to the origin that originates from only CloudFront.

**Correct Answer:** *A*

*Community vote distribution*

B (100%)



Question #56*Topic 1*

A network engineer is managing two AWS Direct Connect connections. Each connection has a public virtual interface configured with a private ASN. The engineer wants to configure active/passive routing between the Direct Connect connections to access Amazon public endpoints. What BGP configuration is required for the on-premises equipment? (Choose two.)

- A. Use Local Pref to control outbound traffic.
- B. Use AS Prepending to control inbound traffic.
- C. Use eBGP multi-hop between loopback interfaces.
- D. Use BGP Communities to control outbound traffic.
- E. Advertise more specific prefixes over one Direct Connect connection.

**Correct Answer:** *CE*

*Community vote distribution*

AE (83%)

AB (17%)



Question #57*Topic 1*

You are preparing to launch Amazon WorkSpaces and need to configure the appropriate networking resources.
What must be configured to meet this requirement?

- A. At least two subnets in different Availability Zones.
- B. A dedicated VPC with Active Directory Services.
- C. An IPsec VPN to on-premises Active Directory.
- D. Network address translation for outbound traffic.

**Correct Answer:** *AD*
References:
https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html

Question #58*Topic 1*

You have multiple Amazon Elastic Compute Cloud (EC2) instances running a web server in a VPC configured with security groups and NACL. You need to ensure layer 7 protocol level logging of all network traffic (ACCEPT/REJECT) on the instances. What should be enabled to complete this task?

- A. CloudWatch Logs at the VPC level
- B. Packet sniffing at the instance level
- C. VPC flow logs at the subnet level
- D. Packet sniffing at the VPC level

**Correct Answer:** *A*

Question #59*Topic 1*

Your company operates a single AWS account. A common services VPC is deployed to provide shared services, such as network scanning and compliance tools.
Each AWS workload uses its own VPC, and each VPC must peer with the common services VPC. You must choose the most efficient and cost effective approach.
Which approach should be used to automate the required VPC peering?

- A. AWS CloudTrail integration with Amazon CloudWatch Logs to trigger a Lambda function.
- B. An OpsWorks Chef recipe to execute a command-line peering request.
- C. Cfn-init with AWS CloudFormation to execute a command-line peering request.
- D. An AWS CloudFormation template that includes a peering request.

**Correct Answer:** *A*

*Community vote distribution*

D (100%)



Question #60*Topic 1*

Your organization requires strict adherence to a change control process for its Amazon Elastic Compute Cloud (EC2) and VPC environments. The organization uses AWS CloudFormation as the AWS service to control and implement changes. Which combination of three services provides an alert for changes made outside of AWS CloudFormation? (Choose three.)

- A. AWS Config
- B. AWS Simple Notification Service
- C. AWS CloudWatch metrics
- D. AWS Lambda
- E. AWS CloudFormation
- F. AWS Identify and Access Management

**Correct Answer:** *BCD*

*Community vote distribution*

ABE (60%)

ABD (40%)



Question #61*Topic 1*

You have a global corporate network with 153 individual IP prefixes in your internal routing table. You establish a private virtual interface over AWS Direct Connect to a VPC that has an Internet gateway (IGW). All instances in the VPC must be able to route to the Internet via an IGW and route to the global corporate network via the VGW.
How should you configure your on-premises BGP peer to meet these requirements?

- A. Configure AS-Prepending on your BGP session
- B. Summarize your prefix announcement to less than 100
- C. Announce a default route to the VPC over the BGP session
- D. Enable route propagation on the VPC route table

**Correct Answer:** *D*

*Community vote distribution*

B (100%)



Question #62*Topic 1*

You are building an application that provides real-time audio and video services to customers on the Internet. The application requires high throughput. To ensure proper audio and video transmission, minimal latency is required.
Which of the following will improve transmission quality?

- A. Enable enhanced networking
- B. Select G2 instance types
- C. Enable jumbo frames
- D. Use multiple elastic network interfaces

**Correct Answer:** *D*

*Community vote distribution*

A (75%)

B (25%)



Question #63*Topic 1*

The Payment Card Industry Data Security Standard (PCI DSS) merchants that handle credit card data must use strong cryptography. These merchants must also use security protocols to protect sensitive data during transmission over public networks.
A team will migrate the PCI DSS application from on-premises SSL appliance and Apache to a VPC behind Amazon CloudFront.
How should you configure CloudFront to meet this requirement?

- A. Configure the CloudFront Cache Behavior to require HTTPS and the CloudFront Origin's Protocol Policy to 'Match Viewer'.
- B. Configure the CloudFront Cache Behavior to allow TCP connections and to forward all requests to the origin without TLS termination at the edge.
- C. Configure the CloudFront Cache Behavior to require HTTPS and to forward requests to the origin via AWS Direct Connect.
- D. Configure the CloudFront Cache Behavior to redirect HTTP requests to HTTPS and to forward request to the origin via the Amazon private network.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #64*Topic 1*

You deploy your Internet-facing application is the us-west-2(Oregon) region. To manage this application and upload content from your corporate network, you have a 1`"Gbps AWS Direct Connect connection with a private virtual interface via one of the associated Direct Connect locations. In normal operation, you use approximately 300 Mbps of the available bandwidth, which is more than your Internet connection from the corporate network.
You need to deploy another identical instance of the application is us-east-1(N Virginia) as soon as possible. You need to use the benefits of Direct Connect. Your design must be the most effective solution regarding cost, performance, and time to deploy.
Which design should you choose?

- A. Use the inter-region capabilities of Direct Connect to establish a private virtual interface from us-west-2 Direct Connect location to the new VPC in us-east-1.
- B. Deploy an IPsec VPN over your corporate Internet connection to us-east-1 to provide access to the new VPC.
- C. Use the inter-region capabilities of Direct Connect to deploy an IPsec VPN over a public virtual interface to the new VPC in us-east-1.
- D. Use VPC peering to connect the existing VPC in us-west-2 to the new VPC in us-east-1, and then route traffic over Direct Connect and transit the peering connection.

**Correct Answer:** *A*

*Community vote distribution*

A (60%)

C (40%)



Question #65*Topic 1*

Your company has a 1-Gbps AWS Direct Connect connection to AWS. Your company needs to send traffic from on-premises to a VPC owned by a partner company. The connectivity must have minimal latency at the lowest price.
Which of the following connectivity options should you choose?

- A. Create a new Direct Connect connection, and set up a new circuit to connect to the partner VPC using a private virtual interface.
- B. Create a new Direct Connect connection, and leverage the existing circuit to connect to the partner VPC.
- C. Create a new private virtual interface, and leverage the existing connection to connect to the partner VPC.
- D. Enable VPC peering and use your VPC as a transitive point to reach the partner VPC.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #66*Topic 1*

An organization wants to process sensitive information using the Amazon EMR service. The information is stored in on-premises databases. The output of processing will be encrypted using AWS KMS before it is uploaded to a customer-owned Amazon S3 bucket. The current configuration includes a VPS with public and private subnets, with VPN connectivity to the on-premises network. The security organization does not allow Amazon EC2 instances to run in the public subnet.
What is the MOST simple and secure architecture that will achieve the organization's goal?

- A. Use the existing VPC and configure Amazon EMR in a private subnet with an Amazon S3 endpoint.
- B. Use the existing VPS and a NAT gateway, and configure Amazon EMR in a private subnet with an Amazon S3 endpoint.
- C. Create a new VPS without an IGW and configure the VPN and Amazon EMR in a private subnet with an Amazon S3 endpoint.
- D. Create a new VPS without an IGW and configure the VPN and Amazon EMR in a private subnet with an Amazon S3 endpoint and a NAT gateway.

**Correct Answer:** *B*

*Community vote distribution*

A (44%)

C (39%)

B (17%)



Question #67*Topic 1*

An organization has three AWS accounts with each containing VPCs in Virginia, Canada and the Sydney regions. The organization wants to determine whether all available Elastic IP addresses (EIPs) in these accounts are attached to Amazon EC2 instances or in use elastic network interfaces (ENIs) in all of the specified regions for compliance and cost-optimization purposes.
Which of the following meets the requirements with the LEAST management overhead?

- A. Use an Amazon CloudWatch Events rule to schedule an AWS Lambda function in each account in all three regions to find the unattached and unused EIPs.
- B. Use a CloudWatch event bus to schedule Lambda functions in each account in all three regions to find the unattached and unused EIPs.
- C. Add an AWS managed, EIP-attached AWS Config rule in each region in all three accounts to find unattached and unused EIPs.
- D. Use AWS CloudFormation StackSets to deploy an AWS Config EIP-attached rule in all accounts and regions to find the unattached and unused EIPs.

**Correct Answer:** *C*

*Community vote distribution*

D (100%)



Question #68*Topic 1*

A Systems Administrator is designing a hybrid DNS solution with spilt-view. The apex-domain `example.com` should be served through name servers across multiple top-level domains (TLDs). The name server for subdomain `dev.example.com` should reside on-premises. The administrator has decided to use Amazon
Route 53 to achieve this scenario.
What procedurals steps must be taken to implement the solution?

- A. Use a Route 53 public hosted zone for example.com and a private hosted zone for dev.example.com
- B. Use a Route 53 public and private hosted zone for example.com, and perform subdomain delegation for dev.example.com
- C. Use a Route 53 public hosted zone for example.com, and perform subdomain delegation for dev.example.com
- D. Use a Route 53 private hosted zone for example.com, and perform subdomain delegation for dev.example.com

**Correct Answer:** *A*

*Community vote distribution*

B (50%)

A (50%)



Question #69*Topic 1*

DNS name resolution must be provided for services in the following four zones:
![img](https://www.examtopics.com/assets/media/exam-media/03964/0003700001.png)
The contents of these zones is not considered sensitive, however, the zones only need to be used by services hosted in these VPCs, one per geographic region.
Each VPC should resolve the names in all zones.
How can you use Amazon route 53 to meet these requirements?

- A. Create a Route 53 Private Hosted Zone for each of the four zones and associate them with the three VPCs.
- B. Create a single Route 53 Private Hosted Zone for the zone company.private. and associate it with the three VPCs.
- C. Create a Route Public 53 Hosted Zone for each of the four zones and configure the VPC DNS Resolver to forward
- D. Create a single Route 53 Public Hosted Zone for the zone company.private. and configure the VPC DNS Resolver to forward

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #70*Topic 1*

An organization is replacing a tape backup system with a storage gateway. there is currently no connectivity to AWS. Initial testing is needed.
What connection option should the organization use to get up and running at minimal cost?

- A. Use an internet connection.
- B. Set up an AWS VPN connection.
- C. Provision an AWS Direct Connection private virtual interface.
- D. Provision a Direct Connect public virtual interface.

**Correct Answer:** *A*

*Community vote distribution*

A (100%)



Question #71*Topic 1*

All IP addresses within a 10.0.0.0/16 VPC are fully utilized with application servers across two Availability Zones. The application servers need to send frequent
UDP probes to a single central authentication server on the Internet to confirm that it is running up-to-date packages. The network is designed for application servers to use a single NAT gateway for internal access. Testing reveals that a few of the servers are unable to communicate with the authentication server.
What is the reason for this failure?

- A. The NAT gateway does not support UDP traffic.
- B. The authentication server is not accepting traffic.
- C. The NAT gateway cannot allocate more ports.
- D. The NAT gateway is launched in a private subnet.

**Correct Answer:** *C*

*Community vote distribution*

C (100%)



Question #72*Topic 1*

An organization is using a VPC endpoint for Amazon S3. When the security group rules for a set of instances were initially configured, access was restricted to allow traffic only to the IP addresses of the Amazon S3 API endpoints in the region from the published JSON file. The application was working properly, but now is logging a growing number of timeouts when connecting with Amazon S3. No internet gateway is configured for the VPC.
Which solution will fix the connectivity failures with the LEAST amount of effort?

- A. Create a Lambda function to update the security group based on AmazonIPSpaceChanged notifications.
- B. Update the VPC routing to direct Amazon S3 prefix-list traffic to the VPC endpoint using the route table APIs.
- C. Update the application server's outbound security group to use the prefix-list for Amazon S3 in the same region.
- D. Create an additional VPC endpoint for Amazon S3 in the same route table to scale the concurrent connections to Amazon S3.

**Correct Answer:** *C*

*Community vote distribution*

C (60%)

A (40%)



Question #73*Topic 1*

A bank built a new version of its banking application in AWS using containers that connect to an on-premises database over a VPN connection. This application version requires users to also update their client application. The bank plans to deprecate the earlier client version. However, the company wants to keep supporting earlier clients through their on-premises version of the application to serve a small portion of the customers who haven't yet upgraded.
What design will allow the company to serve both newer and earlier clients in the MOST efficient way?

- A. Use an Amazon Route 53 multivalue answer routing policy to route older client traffic to the on-premises application version and the rest of the traffic to the new AWS based version.
- B. Use a Classic Load Balancer for the new application. Route all traffic to the new application by using an Elastic Load Balancing (ELB) load balancer DNS. Define a user-agent-based rule on the backend servers to redirect earlier clients to the on-premises application.
- C. Use an Application Load Balancer for the new application. Register both the new and earlier applications as separate target groups and use path-based routing to route traffic based on the application version.
- D. Use an Application Load Balancer for the new application. Register both the new and earlier application backends as separate target groups. Use host header- based routing to route traffic based on the application version.

**Correct Answer:** *B*

Question #74*Topic 1*

A company is deploying a non-web application on an Elastic Load Balancing. All targets are servers located on-premises that can be accessed by using AWS
Direct Connect. The company wants to ensure that the source IP addresses of clients connecting to the application are passed all the way to the end server.
How can this requirement be achieved?

- A. Use a Network Load Balancer to automatically preserve the source IP address.
- B. Use a Network Load Balancer and enable the X-Forwarded-For attribute.
- C. Use a Network Load Balancer and enable the ProxyProtocol attribute.
- D. Use an Application Load Balancer to automatically preserve the source IP address in the X-Forwarded-For header.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #75*Topic 1*

An AWS CloudFormation template is being used to create a VPC peering connection between two existing operational VPCs, each belonging to a different AWS account. All necessary components in the Remote (receiving) account are already in place.
The template below creates the VPC peering connection in the Originating account. It contains these components:
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004100001.png)
Which additional AWS CloudFormation components are necessary in the Originating account to create an operational cross-account VPC peering connection with AWS CloudFormation? (Choose two.)
A.
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004100002.png)
B.
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004100003.png)
C.
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004100004.png)
D.
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004200001.png)
E.
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004200002.png)

**Correct Answer:** *DE*

Question #76*Topic 1*

A Network Engineer is provisioning a subnet for a load balancer that will sit in front of a fleet of application servers in a private subnet. There is limited IP space left in the VPC CIDR. The application has few users now but is expected to grow quickly to millions of users.
What design will use the LEAST amount of IP space, while allowing for this growth?

- A. Use two /29 subnets for an Application Load Balancer in different Availability Zones.
- B. Use one /29 subnet for the Network Load Balancer. Add another VPC CIDR to the VPC to allow for future growth.
- C. Use two /28 subnets for a Network Load Balancer in different Availability Zones.
- D. Use one /28 subnet for an Application Load Balancer. Add another VPC CIDR to the VPC to allow for future growth.

**Correct Answer:** *D*

*Community vote distribution*

C (100%)



Question #77*Topic 1*

A network engineer is deploying an application on an Amazon EC2 instance. The instance is reachable within the VPC through its private IP address and from the internet using an elastic IP address. Clients are connecting to the instance over the Internet and within the VPC, and the application needs to be identified by a single custom Fully Qualified Domain Name that is publicly resolvable `"`˜app.example.com'.
Instances within the VPC should always connect to the private IP to minimize data transfer costs.
How should the engineer configure DNS to support these requirements?

- A. Use Amazon Route 53 to create a geo-based routing entry for the hostname 'app' in the DNS zone 'example.com'.
- B. Create two A record entries for 'app' in the DNS zone 'example.com' ג€" one for the public IP and one for the private IP.
- C. Use Route 53 to create an ALIAS record to the public DNS name for the instance.
- D. Create a CNAME for 'app' in the DNS zone 'example.com' to the public DNS name for the Amazon EC2 instance.

**Correct Answer:** *D*

*Community vote distribution*

D (100%)



Question #78*Topic 1*

A Network Engineer is troubleshooting a network connectivity issue for an instance within a public subnet that cannot connect to the internet. The first step the
Engineer takes is to SSH to the instance via a local bastion within the VPC and runs an ifconfig command to inspect the IP addresses configured on the instance. The output is as follows:
![img](https://www.examtopics.com/assets/media/exam-media/03964/0004300001.png)
The Engineer notices that the command output does not contain a public IP address. In the AWS Management Console, the public subnet has a route to the internet gateway. The instance also has a public IP address associated with it.
What should the Engineer do next to troubleshoot this situation?

- A. Configure the public IP on the interface.
- B. Disable source/destination checking for the instance.
- C. Associate an Elastic IP address to the interface.
- D. Evaluate the security groups and the network access control list.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #79*Topic 1*

A company uses a single connection to the internet when connecting its on-premises location to AWS. It has selected an AWS Partner Network (APN) Partner to provide a point-to-point circuit for its first-ever 10 Gbps AWS Direct Connect connection.
What steps must be taken to order the cross-connect at the Direct Connect location?

- A. Obtain the LOA/CFA from the APN Partner when ordering connectivity. Upload it to the AWS Management Console when creating a new Direct Connect connection. AWS will ensure that the cross-connect is installed.
- B. Obtain the LOA/CFA from the AWS Management Console when ordering the Direct Connect connection. Provide it to the APN Partner when ordering connectivity. The Direct Connect partner will ensure that the cross-connect is installed.
- C. Obtain one LOA/CFA each from the AWS Management Console and the APN Partner. Provide both to the Facility Operator of the Direct Connect location. The facility operator will ensure that the cross-connect is installed.
- D. Identify the APN Partner in the AWS Management Console when creating the Direct Connect connection. Provide the resulting Connection ID to the APN Partner, who will ensure that the cross-connect is installed.

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #80*Topic 1*

An organization's Security team has a requirement that all data leaving its on-premises data center be encrypted at the network layer and use dedicated connectivity. There is also a requirement to centrally log all traffic flow in Amazon VPC environments. An AWS Direct Connect connection has been ordered to build out this design.
What steps should be taken to ensure that connectivity to AWS meets these security requirements? (Choose two.)

- A. Provision a public virtual interface on AWS Direct Connect and set up a VPN to each VPC.
- B. Provision a private virtual interface for each VPC connection.
- C. Enable VPC Flow Logs for each VPC.
- D. Use AWS KMS to encrypt traffic between on-premises and AWS.
- E. Provision a VPN connection to each VPC over the internet.

**Correct Answer:** *BE*
Reference:
https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf

*Community vote distribution*

AC (100%)



Question #81*Topic 1*

A company has an application running on Amazon EC2 instances in a private subnet that connects to a third-party service provider's public HTTP endpoint through a NAT gateway. As request rates increase, new connections are starting to fail. At the same time, the ErrorPortAllocation Amazon CloudWatch metric count for the NAT gateway is increasing.
Which of the following actions should improve the connectivity issues? (Choose two.)

- A. Allocate additional Elastic IP addresses to the NAT gateway.
- B. Request that the third-party service provider implement HTTP keepalive.
- C. Implement TCP keepalive on the client instances.
- D. Create additional NAT gateways and update the private subnet route table to introduce the new NAT gateways.
- E. Create additional NAT gateways in the public subnet and split client instances into multiple private subnets, each with a route to a different NAT gateway.

**Correct Answer:** *CD*
Reference:
https://aws.amazon.com/premiumsupport/knowledge-center/vpc-resolve-port-allocation-errors/

*Community vote distribution*

CE (67%)

BE (33%)



Question #82*Topic 1*

An application runs on a fleet of Amazon EC2 instances in a VPC. All instances can reach one another using private IP addresses. The application owner has a new requirement that the domain name received via DHCP should be different for a particular set of instances that are currently in one particular subnet.
What changes should be made to meet this requirement while continuing to support the existing application requirements?

- A. Modify the existing DHCP option set and specify the different domain name for the specified subnet.
- B. Create a new DHCP option set with the different domain name, associate it with the specified subnet, and re-launch the Amazon EC2 instances.
- C. Create a new subnet, configure the DHCP option set with the different domain name, and re-launch the required instances there.
- D. Create a new peered VPC, configure the DHCP option set with the different domain name, and re-launch the required instances there.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #83*Topic 1*

A Network Engineer has enabled VPC Flow Logs to troubleshoot an ICMP reachability issue for an echo reply from an Amazon EC2 instance. The flow logs reveal an ACCEPT record for the request from the client to the EC2 instance, and a REJECT record for the response from the EC2 instance to the client.
What is the MOST likely reason for there to be a REJECT record?

- A. The security group is denying inbound ICMP.
- B. The network ACL is denying inbound ICMP.
- C. The security group is denying outbound ICMP.
- D. The network ACL is denying outbound ICMP.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #84*Topic 1*

An organization has multiple applications running in VPCs across multiple AWS accounts. The network engineer has deployed a central VPC with a pair of software VPN instances that run IPSec tunnels with dynamic routing to VGWs of all application VPCs. This central VPC is connected to on-premises resources via a Direct Connect connection using a private VIF.
What additional configuration is required to enable the applications in VPCs to communicate with each other and access on-premises resources?

- A. Configure each application VPC with a static route entry pointing the on-premises CIDR block to the software VPN instances.
- B. Configure the central VPC with a static route entry pointing the on-premises CIDR block to local VGWs.
- C. Advertise all application VPC CIDR blocks to on-premises resources via the VGW in the central VPC.
- D. Configure IPSec tunnels from the on-premises router into the software VPN instances with dynamic routing.

**Correct Answer:** *B*

*Community vote distribution*

D (100%)



Question #85*Topic 1*

A network engineer needs to create a public virtual interface on the company's AWS Direct Connect connection and only import routes which originated from the same region as the Direct Connect location.
What action should accomplish this?

- A. Configure a prefix list on the customer router containing the AWS IP address ranges for the specific Region.
- B. Configure a filter on the company's router to only import routes with the 7224:8100 BGP community tag.
- C. Configure a filter on the company's router to only import routes without a BGP community tag and a maximum path length of 3.
- D. Configure a filter in the AWS console and only allow routes advertised by AWS without a BGP community tag and a maximum path length of 3.

**Correct Answer:** *B*
Reference:
https://docs.aws.amazon.com/directconnect/latest/UserGuide/routing-and-bgp.html

*Community vote distribution*

B (100%)



Question #86*Topic 1*

A network engineer has configured a private hosted zone using Amazon Route 53. The engineer needs to configure health checks for record sets within the zone that are associated with instances.
How can the engineer meet the requirements?

- A. Configure a Route 53 health check to a private IP associated with the instances inside the VPC to be checked.
- B. Configure a Route 53 health check pointing to an Amazon SNS topic that notifies an Amazon CloudWatch alarm when the Amazon EC2 StatusCheckFailed metric fails.
- C. Create a CloudWatch metric that checks the status of the EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm.
- D. Create a CloudWatch alarm for the StatusCheckFailed metric and choose Recover this instance, selecting a threshold value of 1.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)



Question #87*Topic 1*

An architecture is being designed to support an Amazon WorkSpaces deployment of 1,000 desktops.
Which architecture will support this deployment while allowing for future expansion?

- A. A VPC with a /16 CIDR and one /21 subnet
- B. A VPC with a /20 CIDR and two /21 subnets
- C. A VPC with a /16 CIDR and one /22 subnet
- D. A VPC with a /20 CIDR and two /23 subnets

**Correct Answer:** *C*

*Community vote distribution*

B (100%)



Question #88*Topic 1*

An organization is deploying an application in a VPC that requires SSL mutual authentication with a client-side certificate, as that is the primary method of identifying clients. The Network Engineer has been tasked with defining the mechanism used within AWS to provide the SSL mutual authentication.
Which of the following options meets the organization's requirements?

- A. Use a Classic Load Balancer and upload the client certificate private keys to it. Perform SSL mutual authentication of the client-side certificate there.
- B. Use a Network Load Balancer with a TCP listener on port 443, and pass the request through for the SSL mutual authentication to be handled by a backend instance.
- C. Use an Application Load Balancer and upload the client certificate private keys to it by using the native server name indication (SNI) features with smart certificate selection to handle multiple calling applications.
- D. Front the application with Amazon API Gateway, and use its client-side SSL mutual authentication feature that uses the backend instances to verify the source of the request.

**Correct Answer:** *C*
Reference:
https://aws.amazon.com/about-aws/whats-new/2017/10/elastic-load-balancing-application-load-balancers-now-support-multiple-ssl-certificates-and- smart-certificate-selection-using-server-name-indication-sni/

*Community vote distribution*

B (100%)



Question #89*Topic 1*

A network architect is designing a website. It has web, application, and database tiers that will run in AWS. The website uses Amazon DynamoDB.
Which architecture will minimize public exposure of the backend instances?

- A. A VPC with public subnets for the NLB, public subnets for the web tier, private subnets for the application tier, and private subnets for DynamoDB.
- B. A VPC with public subnets for the ALB, private subnets for the web tier, and private subnets for the application tier. The application tier connects DynamoDB through a VPC endpoint.
- C. A VPC with public subnets for the ALB, public subnets for the web tier, private subnets for the application tier, and private subnets for DynamoDB.
- D. A VPC with public subnets for the NLB, private subnets for the web tier, and public subnets for the application tier. The application tier connects DynamoDB through a VPC endpoint.

**Correct Answer:** *D*

*Community vote distribution*

B (90%)

10%



Question #90*Topic 1*

A company is connecting to a VPC over an AWS Direct Connect using a private VIF, and a dynamic VPN connection as a backup. The company's Reliability
Engineering team has been running failover and resiliency tests on the network and the existing VPC by simulating an outage situation on the Direct Connect connection. During the resiliency tests, traffic failed to switch over to the backup VPN connection.
How can this failure be troubleshot?

- A. Ensure that Bidirectional Forwarding Detection is enabled on the Direct Connect connection
- B. Confirm that the same routes are being advertised over both the VPN and Direct Connect.
- C. Reconfigure the Direct Connect session from static routes to Border Gateway Protocol (BGP) peering.
- D. Configure a virtual private gateway for the VPN and another virtual private gateway for Direct Connect.

**Correct Answer:** *C*
Reference:
https://aws.amazon.com/answers/networking/aws-single-data-center-ha-network-connectivity/

*Community vote distribution*

B (100%)



Question #91*Topic 1*

An organization is migrating its on-premises applications to AWS by using a lift-and-shift approach, taking advantage of managed AWS services wherever possible. The company must be able to edit the application code during the migration phase. One application is a traditional three-tier application, consisting of a web presentation tier, an application tier, and a database tier. The external calling client applications need their sessions to remain sticky to both the web and application nodes that they initially connect to.
Which load balancing solution would allow the web and application tiers to scale horizontally independent from one another other?

- A. Use an Application Load Balancer at the web tier and a Classic Load Balancer at the application tier. Set session stickiness on both, but update the application code to create an application-controlled cookie on the Classic Load Balancer.
- B. Use an Application Load Balancer at both the web and application tiers, setting session stickiness at the target group level for both tiers.
- C. Deploy a web node and an application node as separate containers on the same host, using task linking to create a relationship between the pair. Add an Application Load Balancer with session stickiness in front of all web node containers.
- D. Use a Network Load Balancer at the web tier, and an Application Load Balancer at the application tier. Enable session stickiness on the Application Load Balancer, but take advantage of the native WebSockets protocols available to the Network Load Balancer.

**Correct Answer:** *B*

*Community vote distribution*

A (100%)



Question #92*Topic 1*

A team implements a highly available solution using Amazon AppStream 2.0. The AppStream 2.0 fleet needs to communicate with resources both in an existing
VPC and on-premises. The VPC is connected to the on-premises environment using an AWS Direct Connect private virtual interface.
What implementation enables on-premises users to connect to AppStream and existing VPC resources?

- A. Deploy two subnets into the existing VPC. Add a public virtual interface to the Direct Connect connection for users to access the AppStream endpoint
- B. Deploy two subnets into the existing VPC. Add a private virtual interface on the Direct Connect connection for users to access the AppStream endpoint.
- C. Deploy a new VPC with two subnets. Create a VPC peering connection between the two VPCs for users to access the AppStream endpoint.
- D. Deploy one subnet into the existing VPC. Add a private virtual interface on the Direct Connect connection for users to access the AppStream endpoint.

**Correct Answer:** *A*

*Community vote distribution*

B (67%)

A (33%)



Question #93*Topic 1*

An organization has ordered a new AWS Direct Connect connection. The AWS Management Console reports that the connection is available and BGP status is up. However, the networking team is not able to reach instances in the VPC using ping on the organization's private IP address.
What could cause this connectivity issue? (Choose two.)

- A. The VGW is not advertising the correct CIDR range back on-premises.
- B. The instance security group does not allow ICMP traffic.
- C. A public virtual interface must be configured for Amazon EC2 connectivity.
- D. The on-premises router is not advertising the correct CIDR range to AWS.
- E. There is a misconfiguration of the bi-directional forwarding detection.

**Correct Answer:** *CD*

*Community vote distribution*

BD (100%)



Question #94*Topic 1*

A company has a hybrid IT architecture with two AWS Direct Connect connections to provide high availability. The services hosted on-premises are accessible using public IPs, and are also on the 172.16.0.0/16 range. The AWS resources are on the 192.168.0.0/18 range. The company wants to use Amazon Elastic Load
Balancing for SSL offloading, health checks, and sticky sessions.
What should be done to meet these requirements?

- A. Create a Network Load Balancer pointing to the on-premises server's private IP address.
- B. Create an Amazon CloudFront distribution for the on-premises service and use the public IPs of the on-premises servers as the origin.
- C. Create a Network Load Balancer pointing to the on-premises server's public IP address.
- D. Create an Application Load Balancer pointing to the on-premises server's private IP address.

**Correct Answer:** *A*

*Community vote distribution*

D (100%)



Question #95*Topic 1*

A company deployed its production Amazon VPC using CIDR block 33.16.0.0/16. The company has nearly depleted its addresses and now needs to extend the
VPC network.
Which CIDR blocks meet the company's requirement to extend the VPC network with a secondary CIDR? (Choose two.)

- A. 33.17.0.0/16
- B. 172.16.0.0/18
- C. 100.70.0.0/17
- D. 192.168.1.0/24
- E. 10.0.0.0/8

**Correct Answer:** *AC*

*Community vote distribution*

AC (100%)



Question #96*Topic 1*

A company is deploying a new web application that uses a three-tier model with a public-facing Network Load Balancer and web servers in an Amazon VPC. The application servers are hosted in the company's data center. There is an AWS Direct Connect connection between the VPC and the company's data center. Load testing results indicate that up to 100 servers, equally distributed across multiple Availability Zones, are required to handle peak loads.
The network engineer needs to design a VPC that has a /24 CIDR assigned to it.
How should the engineer allocate subnets across three Availability Zones for each tier?

- A. Network Load Balancer: /29 per subnet Web: /26 per subnet
- B. Network Load Balancer: /28 per subnet Web: /25 per subnet
- C. Network Load Balancer: /28 per subnet Web: /27 per subnet
- D. Network Load Balancer: /28 per subnet Web: /26 per subnet

**Correct Answer:** *D*

Question #97*Topic 1*

Changes made to a security group attached to an Application Load Balancer resulted in connectivity issues for a company's production web application. The network engineer needs to lock down permissions for the company's AWS account, automate auditing for any changes, and set up notifications.
What actions should accomplish this?

- A. Configure IAM user policies to lock down permissions for specific users. Enable AWS CloudTrail to identify API calls from users. Use AWS Config to audit any changes, and configure Amazon SNS to send notifications.
- B. Configure IAM user policies to lock down permissions for specific users. Enable AWS CloudTrail to identify the API calls from users. Configure AWS CodeCommit to audit any changes in configurations, and configure Amazon SNS to send notifications.
- C. Configure IAM user policies to lock down permissions for specific users. Enable AWS CloudTrail to identify the API calls from users. Configure Amazon Macie to use machine learning to identify any configuration changes, and configure Amazon SNS to send notifications.
- D. Configure IAM role policies to lock down permissions for specific users. Configure Amazon GuardDuty to audit and monitor configuration changes, and configure Amazon SNS to send notifications.

**Correct Answer:** *D*

*Community vote distribution*

A (100%)



Question #98*Topic 1*

A computing team is evaluating whether to place a high performance computing (HPC) application in AWS. The team is concerned about application performance and wants to know what options are available to increase networking performance.
Which of the following changes would increase performance for this application? (Choose two.)

- A. Place the application across many smaller instances to achieve higher total throughput.
- B. Increase the MTU of the VPC to 9001.
- C. Enable an MTU of 9001 in the application's operating system.
- D. Enable enhanced networking on the instances.
- E. Deploy the application in two Availability Zones and insert them in one placement group.

**Correct Answer:** *BD*

*Community vote distribution*

CD (100%)



Question #99*Topic 1*

An organization has created a web application inside a VPC and wants to make it available to 200 client VPCs. The client VPCs are in the same Region but are owned by other business units within the organization.
What is the best way to meet this requirement, without making the application publicly available?

- A. Configure the application as an AWS PrivateLink-powered service, and have the client VPCs connect to the endpoint service by using an interface VPC endpoint.
- B. Enable VPC peering between the web application VPC and all client VPCs.
- C. Deploy the web application behind an internet-facing Application Load Balancer and control which clients have access by using security groups.
- D. Deploy the web application behind an internal Application Load Balancer and control which clients have access by using security groups.

**Correct Answer:** *C*

*Community vote distribution*

A (100%)



Question #100*Topic 1*

A company's IT Security team needs to ensure that all servers within an Amazon VPC can communicate with a list of five approved external IPs only. The team also wants to receive a notification every time any server tries to open a connection with a non-approved endpoint.
What is the MOST cost-effective solution that meets these requirements?

- A. Add allowed IPs to the network ACL for the application server subnets. Enable VPC Flow Logs with a filter set to ALL. Create an Amazon CloudWatch Logs filter on the VPC Flow Logs log group filtered by REJECT. Create an alarm for this metric to notify the security team.
- B. Enable Amazon GuardDuty on the account and the specific Region. Upload a list of allowed IPs to Amazon S3 and link the S3 object to the GuardDuty trusted IP list. Configure an Amazon CloudWatch Events rule on all GuardDuty findings to trigger an Amazon SNS notification to the security team.
- C. Add allowed IPs to the network ACL for the application server subnets. Enable VPC Flow Logs with a filter set to REJECT. Set an Amazon CloudWatch Logs filter for the log group on every event. Create an alarm for this metric to notify the security team.
- D. Enable Amazon GuardDuty on the account and specific Region. Upload a list of allowed IPs to Amazon S3 and link the S3 object to the GuardDuty threat IP list. Integrate GuardDuty with a compatible SIEM to report on every alarm from GuardDuty.

**Correct Answer:** *A*

*Community vote distribution*

C (100%)

Question #101Topic 1
The Security department has mandated that all outbound traffic from a VPC toward an on-premises datacenter must go through a security appliance that runs on an Amazon EC2 instance.
Which of the following maximizes network performance on AWS? (Choose two.)
A. Support for the enhanced networking drivers
B. Support for sending traffic over the Direct Connect connection
C. The instance sizes and families supported by the security appliance
D. Support for placement groups within the VPC
E. Security appliance support for multiple elastic network interfaces
Correct Answer: BC
Community vote distribution
AC (100%)

Question #102Topic 1
A Network Engineer needs to be automatically notified when a certain TCP port is accessed on a fleet of Amazon EC2 instances running in an Amazon VPC.
Which of the following is the MOST reliable solution?
A. Create an inbound rule in the VPC's network ACL that matches the TCP port. Create an Amazon CloudWatch alarm on the NetworkPackets metric for the ACL that uses Amazon SNS to notify the Administrator when the metric is greater than zero.
B. Install intrusion detection software on each Amazon EC2 instance and configure it to use the AWS CLI to notify the Administrator with Amazon SNS each time the TCP port is accessed.
C. Create VPC Flow Logs that write to Amazon CloudWatch Logs, with a metric filter matching connections on the required port. Create a CloudWatch alarm on the resulting metric that uses Amazon SNS to notify the Administrator when the metric is greater than zero.
D. Install intrusion detection software on each Amazon EC2 instance and configure it to use the AWS CLI to publish to a custom Amazon CloudWatch metric each time the TCP port is accessed. Create a CloudWatch alarm on the resulting metric that uses Amazon SNS to notify the Administrator when the metric is greater than zero.
Correct Answer: A
Community vote distribution
C (100%)

Question #103Topic 1
A network engineer deploys an application in a private subnet in a VPC that connects to many external video feed providers using RTMP over the internet. A NAT gateway has been deployed in a public subnet and is working as expected. From the Amazon EC2 instance, the application is able to connect to all feed providers except one, which hangs when connecting. Manually testing a connection from an Amazon EC2 instance in the public subnet to the problem feed indicates that the feed works as expected.
What is causing this issue?
A. The NAT gateway does not support fragmented packets.
B. The internet gateway only supports an MTU of 1500 bytes.
C. An Amazon EC2 instance expects to communicate with an MTU of 9001.
D. The security group on the instances does not allow PMTUD.
Correct Answer: D
Community vote distribution
A (100%)

Question #104Topic 1
A company has an application running in an Amazon VPC that must be able to communicate with on-premises resources in a data center. Network traffic between
AWS and the data center will initially be minimal, but will increase to more than 10 Gbps over the next few months. The company's goal is to launch the application as quickly as possible.
The network engineer has been asked to design a hybrid IT connectivity solution.
What should be done to meet these requirements?
A. Submit a 1 Gbps AWS Direct Connect connection request, then increase the number of Direct Connect connections, as needed.
B. Allocate elastic IPs to Amazon EC2 instances for temporary access to on-premises resources, then provision AWS VPN connections between an Amazon VPC and the data center.
C. Provision an AWS VPN connection between an Amazon VPC and the data center, then submit an AWS Direct Connect connection request. Later, cut over from the VPN connection to one or more Direct Connect connections, as needed.
D. Provision a 100 Mbps AWS Direct Connect connection between an Amazon VPC and the data center, then submit a Direct Connect connection request. Later, cut over from the hosted connection to one or more Direct Connect connections, as needed.
Correct Answer: B
Community vote distribution
C (100%)

Question #105Topic 1
A company has recently established an AWS Direct Connect connection from its on-premises data center to AWS. A Network Engineer has blocked all traffic destined for Amazon S3 over the company's gateway to the internet from its on-premises firewall. S3 traffic should only traverse the Direct Connect connection.
Currently, no one in the on-premises data center can access Amazon S3.
Which solution will resolve this connectivity issue?
A. Configure a private virtual interface on the Direct Connect connection. Update the on-premises routing tables to choose Direct Connect as the preferred next hop for traffic destined for Amazon S3.
B. Establish an S3 VPC endpoint for the company's Amazon VPC. Configure a private virtual interface on the Direct Connect connection. Update the on-premises routing tables to choose Direct Connect as the preferred next hop.
C. Configure a public virtual interface on the Direct Connect connection. Update the on-premises routing tables to choose Direct Connect as the preferred next hop for traffic destined for Amazon S3.
D. Configure a public virtual interface on the Direct Connect connection. Establish an AWS managed VPN over the connection. Update the on-premises routing tables to choose the VPN connection as the preferred next hop.
Correct Answer: A
Community vote distribution
C (83%)
B (17%)

Question #106Topic 1
A company provisions an AWS Direct Connect connection to permit access to Amazon EC2 resources in several Amazon VPCs and to data stored in private
Amazon S3 buckets. The Network Engineer needs to configure the company's on-premises router for this Direct Connect connection.
Which of the following actions will require the LEAST amount of configuration overhead on the customer router?
A. Configure private virtual interfaces for the VPC resources and for Amazon S3.
B. Configure private virtual interfaces for the VPC resources and a public virtual interface for Amazon S3.
C. Configure a private virtual interface to a Direct Connect gateway for the VPC resources and for Amazon S3.
D. Configure a private virtual interface to a Direct Connect gateway for the VPC resources and a public virtual interface for Amazon S3.
Correct Answer: A
Community vote distribution
D (75%)
B (25%)

Question #107Topic 1
A company has two redundant AWS Direct Connect connections to a VPC. The VPC is configured using BGP metrics so that one Direct Connect connection is used as the primary traffic path. The company wants the primary Direct Connect connection to fail to the secondary in less than one second.
What should be done to meet this requirement?
A. Configure BGP on the company's router with a keep-alive to 300 ms and the BGP hold timer to 900 ms.
B. Enable Bidirectional Forwarding Detection (BFD) on the company's router with a detection minimum interval of 300 ms and a BFD liveness detection multiplier of 3.
C. Enable Dead Peer Detection (DPD) on the company's router with a detection minimum interval of 300 ms and a DPD liveliness detection multiplier of 3.
D. Enable Bidirectional Forwarding Detection (BFD) echo mode on the company's router and disable sending the Internet Control Message Protocol (ICMP) IP packet requests.
Correct Answer: B
Reference:
https://aws.amazon.com/directconnect/faqs/

Question #108Topic 1
A company's network engineering team is solely responsible for deploying VPC infrastructure using AWS CloudFormation. The company wants to give its developers the ability to launch applications using CloudFormation templates so that subnets can be created using available CIDR ranges.
What should be done to meet these requirements?
A. Create a CloudFormation template with Amazon EC2 resources that rely on cfn-init and cfn-signals to inform the stack of available CIDR ranges.
B. Create a CloudFormation template with a custom resource that analyzes traffic activity in VPC Flow Logs and reports on available CIDR ranges.
C. Create a CloudFormation template that references the Fn::Cidr intrinsic function within a subnet resource to select an available CIDR range.
D. Create a CloudFormation template with a custom resource that uses AWS Lambda and Amazon DynamoDB to manage available CIDR ranges.
Correct Answer: C
Community vote distribution
C (67%)
D (33%)

Question #109Topic 1
A company's web application is deployed on Amazon EC2 instances behind a public Application Load Balancer. The application flags malicious requests and uses an AWS Lambda function to add the offending IP addresses to the network ACL to block any further requests for 24 hours. Recently, the application has been receiving more malicious requests, which causes the network ACL to reach its limit of allowed entries.
Which action should be taken to block more IP addresses, without compromising the existing security requirements?
A. Update the AWS Lambda function to remove blocked entries from the network ACL after 2 hours.
B. Update the AWS Lambda function to block malicious IPs in security groups rather than the network ACL.
C. Update the AWS Lambda function to block malicious IPs in AWS WAF attached to the Application Load Balancer.
D. Update the AWS Lambda function to add an additional network ACL to the subnets once the limit for the previous ones has been reached.
Correct Answer: D
Community vote distribution
C (100%)

Question #110Topic 1
A company is using AWS to host all of its applications. Each application is isolated in its own Amazon VPC. Different environments such as Development, Test, and Production are also isolated in their own VPCs. The network engineer needs to automate VPC creation to enforce the company's network and security standards. Additionally, the CIDR range used in each VPC needs to be unique.
Which solution meets all of these requirements?
A. Use AWS CloudFormation to deploy the VPC infrastructure and a custom resource to request a CIDR range from an external IP address management (IPAM) service.
B. Use AWS OpsWorks to deploy the VPC infrastructure and a custom resource to request a CIDR range from an external IP address management (IPAM) service.
C. Use the VPC wizard in the AWS Management Console. Type in the CIDR blocks for the VPC and subnets.
D. Create the VPCs using AWS CLI and use the dry-run flag to validate if the current CIDR range is in use.
Correct Answer: A
Community vote distribution
A (100%)

Question #111Topic 1
You can turn on the AWS Config service from the AWS CLI by running the subscribe command and passing as parameters a valid IAM role, SNS topic, and ____.
A. EBS volume
B. EC2 instance
C. S3 bucket
D. Kinesis stream
Correct Answer: C
You can use the AWS CLI to turn on AWS Config. All it takes is the subscribe command and a few additional parameters. The parameters are -s3-bucket, which specifies the S3 bucket to which AWS Config data will be saved, -sns-topic, which specifies to which SNS topic messages from AWS Config will be sent, and - iam-role, which is an IAM role containing appropriate permissions for AWS Config to access the resources it monitors.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/gs-cli-subscribe.html

Question #112Topic 1
You would like to automate the monitoring of changes in the configurations of your AWS resources and respond programmatically to configurations of only a certain type. To do this, you could use Amazon ____ as the endpoint for the Amazon SNS topics that generate messages from AWS Config.
A. Kinesis
B. Simple Email Service (SES)
C. Simple Storage Service (S3)
D. Simple Queue Service (SQS)
Correct Answer: D
AWS Config uses Amazon Simple Notification Service (SNS) to send you notifications every time a supported AWS resource is created, updated, or otherwise modified as a result of user API activity. However, you might be interested in only certain resource configuration changes. For example, you might consider it critical to know when someone modifies the configuration of a security group, but not need to know every time there is a change to tags on your Amazon EC2 instances. Or, you might want to write a program that performs specific actions when specific resources are updated. For example, you might want to start a certain workflow when a security group configuration is changed. If you want to programmatically consume the data from AWS Config in these or other ways, use an Amazon Simple Queue Service queue as the notification endpoint for Amazon SNS.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/monitor-resource-changes.html

Question #113Topic 1
You can use the ____ command of the AWS Config service CLI to see the compliance state for each AWS resource of a specific type.
A. describe-compliance-by-resource
B. get-compliance-details-by-config-rule
C. describe-compliance-by-config-rule
D. get-compliance-details-by-resource
Correct Answer: A
You can use the AWS Config console, AWS CLI, or AWS Config API to view the compliance state of your rules and resources. The describe-compliance-by- resource command of the AWS Config CLI to see the compliance state for each AWS resource of a specific type. This is distinct from the describe-compliance-by- config-rule command, which gives the compliance state of each rule in AWS Config .
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_view-compliance.html

Question #114Topic 1
When an AWS Config rule is triggered a JSON object known as an AWS Config Event is created. This object contains another JSON string in its ____ parameter, which describes the event that triggered the rule.
A. resultToken
B. eventLeftScope
C. invokingEvent
D. configRuleName
Correct Answer: C
The JSON object for an AWS Config event contains an invoking Event attribute, which describes the event that triggers the evaluation for a rule. If the event is published in response to a resource configuration change, the value for this attribute is a string that contains a JSON configuration Item or a configuration Item
Summary (for oversized configuration items). The configuration item represents the state of the resource at the moment that AWS Config detected the change. If the event is published for a periodic evaluation, the value is a string that contains a JSON object. The object includes information about the evaluation that was triggered. For each type of event, a function must parse the string with a JSON parser to be able to evaluate its contents.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_exa mple-events.html

Question #115Topic 1
When an AWS Config rule is triggered a JSON object known as an AWS Config Event is created. This object contains a(n) ____ attribute, which is a JSON- formatted set of key/value pairs the receiving AWS Lambda function processes as part of its evaluation logic.
A. inputParameters
B. invokingEvent
C. ruleConfiguration
D. mappingTemplate
Correct Answer: A
The JSON object for an AWS Config event contains a ruleParameters attribute, which is a set of key/value pairs that the AWS Lambda function receiving the event processes as part of its evaluation logic. You define parameters when you use the AWS Config console to create a custom rule. You can also define parameters with the InputParameters attribute in the PutConfigRule AWS Config API request or the put-config-rule AWS CLI command. The JSON code for the parameters is contained within a string, so a function must parse the string with a JSON parser to be able to evaluate its contents
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_exa mple-events.html

Question #116Topic 1
When using AWS Config, which two items are stored on S3 as a part of its operation?
A. Configuration Items and Configuration History
B. Configuration Recorder and Configuration Snapshots
C. Configuration History and Configuration Snapshots
D. Configuration Snapshots and Configuration Streams
Correct Answer: C
S3 is used to store the Configuration History files and any Configuration Snapshots of your data within a single bucket, which is defined within the Configuration
Recorder. You can get AWS Config to create a new bucket for you and select an existing bucket. If you have multiple AWS accounts you may want to aggregate your Configuration History and Snapshot files into the same S3 Bucket for your primary account, just be aware that this can be achieved. However, you will need to grant write access for the service principal (config.amazonaws.com) in your other accounts write access to the S3 bucket.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#config-items

Question #117Topic 1
You can use the ____ page of the AWS Config console to look up resources that AWS Config has discovered, including deleted resources and resources that are not currently being recorded.
A. snapshot listing
B. configuration history
C. resource inventory
D. resource database
Correct Answer: C
You can use the AWS Config console, AWS CLI, and AWS Config API to look up the resources that AWS Config has taken an inventory of, or discovered, including deleted resources and resources that AWS Config is not currently recording. AWS Config discovers supported resource types only. You can use the
AWS Config console in the AWS Management console to look up these resources. The Resource Inventory page lets you perform this search.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/looking-up-discovered-resources.html

Question #118Topic 1
An AWS Config rule can be set to be evaluated if a certain set of resources undergoes a configuration change. The set of resources to which the rule applies can be restricted by the rule's ____, which can include a combination of a resource type and a resource ID, for example.
A. trigger
B. domain
C. manifest
D. scope
Correct Answer: D
When you add an AWS Config rule to your account, you can specify when you want AWS Config to run the rule; this is called a trigger. AWS Config evaluates your resource configurations against the rule when the trigger occurs. You choose which resources trigger the evaluation by defining the rule's scope. The scope can include the following:

One or more resource types -
A combination of a resource type and a resource ID A combination of a tag key and value.
When any recorded resource is created, updated, or deleted AWS Config runs the evaluation when it detects a change to a resource that matches the rule's scope. You can use the scope to constrain which resources trigger evaluations. Otherwise, evaluations are triggered when any recorded resource changes.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html

Question #119Topic 1
Which other AWS service is used to track `Related Events' within the Configuration Item?
A. AWS WAF
B. SQS
C. AWS CloudTrail
D. S3
Correct Answer: C
`Related Events' displays the AWS CloudTrail event ID that is related to the change that triggered the creation of the CI. There is a new CI made for every change made against a resource. As a result a different CloudTrail event IDs will be created. This allows you you to deep-dive into who or what and when made the change that triggered this CI. A great feature allowing for some great analysis to be taken, specifically when this affects security resources.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#config-item-table

Question #120Topic 1
Non-compliant resources identified through the use of AWS Config Rules are automatically removed from operational service.
A. It depends on the Rule configuration
B. Only if it remains non-compliant for more than 6 hours
C. True
D. False
Correct Answer: D
Each time a change is made to one of your supported resources, AWS config will check its compliance against any Config Rules that you have in place. If there is a violation against these rules then AWS Config will send a message to the Configuration Stream via SNS and the resource will be marked as `noncompliant'.
It's important to note that this does not mean the resource will be taken out of service or it will stop working. It will continue to operate exactly as it is with its new configuration. AWS Config simply alerts you that there is a violation and it's up to you to take the appropriate action.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_view-compliance.html
Community vote distribution
A (100%)

Question #121Topic 1
Which element of AWS Config can be used to help maintain internal and external compliance controls?
A. Configuration Item
B. Configuration Recorder
C. Configuration Streams
D. Config Rules
Correct Answer: D
AWS Config allows you to utilise Config Rules to help you manage and organise this compliance which acts as an automatic resource compliance checker. When a change is made to a resource, AWS Config will check to see if the resource matches a rule, and if so it will check the compliance of that resource against the rule following the changes made.
Reference:
https://aws.amazon.com/config/

Question #122Topic 1
Which AWS service is used within an AWS Config Rule to perform the logic evaluation of that rule?
A. Inspector
B. WAF
C. Lambda
D. SWF
Correct Answer: C
AWS Config Rules are a great way to help you enforce specific compliance controls and checks across your resources and allows for you to adopt an `ideal' deployment specification for each of your resource types. Each Rule is simply a Lambda function that when called upon evaluates the resource and carries out some simply logic to determine the compliance result with the rule.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_nodejs-sample.html

Question #123Topic 1
AWS Config flags a resource as ____ if a resource violates any conditions of an AWS Config rule that it evaluates on the resource in question.
A. corrupted
B. noncompliant
C. invalid
D. misconfigured
Correct Answer: B
Use AWS Config to evaluate the configuration settings of your AWS resources. You do this by creating AWS Config rules, which represent your ideal configuration settings. AWS Config provides customizable, predefined rules called managed rules to help you get started. You can also create your own custom rules. While
AWS Config continuously tracks the configuration changes that occur among your resources, it checks whether these changes violate any of the conditions in your rules. If a resource violates a rule, AWS Config flags the resource and the rule as noncompliant.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html

Question #124Topic 1
Each custom AWS Config rule you create must be associated with a(n) AWS ____, which contains the logic that evaluates whether your AWS resources comply with the rule.
A. Lambda function
B. Configuration trigger
C. EC2 instance
D. S3 bucket
Correct Answer: A
You can develop custom AWS Config rules to be evaluated by associating each of them with an AWS Lambda function, which contains the logic that evaluates whether your AWS resources comply with the rule. You associate this function with your rule, and the rule invokes the function either in response to configuration changes or periodically. The function then evaluates whether your resources comply with your rule, and sends its evaluation results to AWS Config.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html

Question #125Topic 1
A user is trying to understand the detailed CloudWatch monitoring concept. Which of the below mentioned services does not provide detailed monitoring with
CloudWatch?
A. AWS Route53
B. AWS EMR
C. AWS ELB
D. AWS RDS
Correct Answer: B
CloudWatch is used to monitor AWS as well as the custom services. It provides either basic or detailed monitoring for the supported AWS products. In basic monitoring, a service sends data points to CloudWatch every five minutes, while in detailed monitoring a service sends data points to CloudWatch every minute.
Services, such as RDS, EC2, Auto Scaling, ELB, and Route 53 can provide the monitoring data every minute.
Reference:
http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/supported_services.html

Question #126Topic 1
You can use the ____ command of the AWS Config service CLI to see the compliance state of each of your rules.
A. get-compliance-details-by-resource
B. describe-compliance-by-config-rule
C. get-compliance-details-by-config-rule
D. describe-compliance-by-resource
Correct Answer: B
You can use the describe-compliance-by-config-rule command of the AWS Config CLI to see the compliance state of each of your rules. For each rule that has a compliance type of NON_COMPLIANT, AWS Config returns the number of noncompliant resources for the CappedCount parameter.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_view-compliance.html

Question #127Topic 1
You have several Amazon Glacier vaults you would like to monitor. How might you monitor those vaults?
A. Create a custom AWS Config rule.
B. Use an AWS master Config rule.
C. Use an AWS managed Config rule.
D. Create a KMS policy and attach it to your Amazon Glacier vault.
Correct Answer: A
AWS Config does not currently record Amazon Glacier resources; you must create a custom rule if you wish to monitor such a resource.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_nodejs.html#creating-custom-rules-for-additional-resource-types

Question #128Topic 1
In order to change the name of the AWS Config ____, you must stop the configuration recorder, delete the current one, and create a new one with a new name, since there can only be one of these per AWS account.
A. SNS topic
B. configuration history
C. delivery channel
D. S3 bucket path
Correct Answer: C
As AWS Config continually records the changes that occur to your AWS resources, it sends notifications and updated configuration states through the delivery channel. You can manage the delivery channel to control where AWS Config sends configuration updates. You can have only one delivery channel per AWS account, and the delivery channel is required to use AWS Config. To change the delivery channel name, you must delete it and create a new delivery channel with the desired name. Before you can delete the delivery channel, you must temporarily stop the configuration recorder. The AWS Config console does not provide the option to delete the delivery channel, so you must use the AWS CLI, the AWS Config API, or one of the AWS SDKs.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/update-dc.html

Question #129Topic 1
Which of the following characters is not allowed while creating a Namespace for a CloudWatch metric?
A. /
B. :
C. #
D. @
Correct Answer: D
Namespace is a grouping or a container for a CloudWatch metric. The names must be valid XML characters, typically containing the alphanumeric characters "0-
9A-Za-z" plus "."(period), "-" (hyphen), "_" (underscore), "/" (slash), "#" (hash), and ":" (colon). All AWS namespaces follow the convention AWS/<service>, such as AWS/EC2 and AWS/ELB.
Reference:
http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html

Question #130Topic 1
You would like to ensure that all Amazon S3 buckets going forward, current and newly created ones, have logging enabled. What type of trigger(s) should you use?
A. only a periodic trigger
B. only a configuration change trigger
C. both configuration change and periodic triggers
D. only a transitioning trigger
Correct Answer: B
This case requires only a configuration change trigger because you only need to trigger when S3 buckets are created and changed. There is no time component to when the trigger needs to fire.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html
Community vote distribution
C (67%)
B (33%)

Question #131Topic 1
You have many IAM users with the ability to create EC2 volumes. Most of the data your team works with is sensitive, so you would like to make sure all volumes are encrypted. How might you facilitate this requirement?
A. Create an AWS KMS policy and attach it to all IAM users that can create EC2 volumes.
B. Use AWS Config and create a rule that requires all volumes, upon creation, be encrypted.
C. Use AWS Config to send out reminders to IAM users every time they create an EC2 volume.
D. Set EC2 to notify creators to encrypt their EC2 volumes.
Correct Answer: B
AWS Config is used to evaluate the configuration settings of many AWS resources. When an EC2 volume in created, AWS Config can evaluate the volume against a rule that requires volumes to be encrypted. If the volume is not encrypted, AWS Config flags the volume and the rule as noncompliant.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html

Question #132Topic 1
You can use the ____ command of the AWS Config service CLI to see the compliance state of each resource that AWS Config evaluates for a specific rule.
A. describe-compliance-by-resource
B. describe-compliance-by-config-rule
C. get-compliance-details-by-config-rule
D. get-compliance-details-by-resource
Correct Answer: C
You can use the get-compliance-details-by-config-rule command of the AWS Config CLI to see the compliance state of each resource that AWS Config evaluates for a specific rule.
Reference:
http://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_view-compliance.html

Question #133Topic 1
A user is running a batch process on EBS backed EC2 instances. The batch process launches few EC2 instances to process hadoop Map reduce jobs which can run between 50-600 minutes or sometimes for even more time. The user wants a configuration that can terminate the instance only when the process is completed. How can the user configure this with CloudWatch?
A. Configure a job which terminates all instances after 600 minutes
B. It is not possible to terminate instances automatically
C. Set up the CloudWatch with Auto Scaling to terminate all the instances
D. Configure the CloudWatch action to terminate the instance when the CPU utilization falls below 5%
Correct Answer: D
Amazon CloudWatch alarm watches a single metric over a time period that the user specifies and performs one or more actions based on the value of the metric relative to a given threshold over a number of time periods. The user can setup an action which terminates the instances when their CPU utilization is below a certain threshold for a certain period of time. The EC2 action can either terminate or stop the instance as part of the EC2 action.
Reference:
http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/UsingAlarmActions.html

Question #134Topic 1
You need to create a subnet in a VPC that supports 14 hosts. You need to be as accurate as possible since you run a very large company. What CIDR should you use?
A. /28
B. /24
C. /25
D. /27
Correct Answer: D
/27 supports 27 hosts since AWS reserves 5 addresses. /25 supports 123 hosts, /28 supports 11, /24 supports 251.

Question #135Topic 1
You have a DX connection and a VPN connection as backup for your 10.0.0.0/16 network. You just received a letter indicating that the colocation provider hosting the DX connection will be undergoing maintenance soon. It is critical that you do not experience any downtime or latency during this period.
What is the best course of action?
A. Configure the VPN as a static VPN instead of dynamic.
B. Configure AS_PATH Prepending on the DX connection to make it the less preferred path.
C. Advertise 10.0.0.0/9 and 10.128.0.0/9 over your VPN connection.
D. None of the above.
Correct Answer: D
A more specific route is the only way to force AWS to prefer a VPN connection over a DX connection. A /9 is not more specific than a /16.

Question #136Topic 1
You have two enhanced networking capable instances in a placement group. One with an Intel network interface and one with an ENA.
What network speed will be achieved between the two?
A. 10Gbps
B. 20Gbps
C. 5Gbps
D. You cannot have different network interfaces in a placement group.
Correct Answer: A
10Gbps. The Intel interface has a max speed of 10 and the ENA is 20. The speed will be the lesser of the two.

Question #137Topic 1
Your company has placement groups in two different availability zones. There is a large project coming up and, although resilience is important, cost and speed are the most important factors. The servers in each placement group need to be able to achieve the highest speed possible.
How can this be achieved?
A. Create AMIs from all of the instances, terminate them, and deploy them all into one placement group.
B. In the CLI, run the command "aws ec2 set-placement-group 1 " for all of the instances.
C. Duplicate the VPC, peer the new VPC, create AMIs of the instances, terminate them, and redeploy them in two separate placement groups between the two VPCs.
D. Peer the two placement groups using AWS PG Peering.
Correct Answer: A
There is no AWS PG Peering option, Duplicating the VPC does not align with the cost concern, there is no "aws ec2 set-placement-group" command.
Community vote distribution
C (100%)

Question #138Topic 1
Your network utilizes jumbo frames on its servers and your router. You are trying to access your AWS resources, and you are having issues with packet loss.
What is the best solution?
A. Remove the "Do not Fragment" flag on the packets.
B. Lower the MTU for your network.
C. Call AWS support.
D. You will have to upgrade to Direct Connect.
Correct Answer: A
Remove the "Don't Fragment" Flag on your router. AWS will drop any data with an MTU of greater than 1500 if the "Do not Fragment" flag is set, so you need your router to indicate that data can be fragmented.
Community vote distribution
D (50%)
A (50%)

Question #139Topic 1
You have two VPCs that you need to connect to an on-premises datacenter using VPNs. When you create the tunnels, you find that both tunnels use the same addresses. What two things can you do to overcome this? (Choose two.)
A. Delete the VPN, create a "dummy VPN", recreate the VPN, then delete the "dummy" VPN.
B. Delete your AWS account and create a new one since the VPN tunnel addresses are created from a hash of your account number and a proprietary algorithm.
C. Create a VHF within you router for each network.
D. Create a VRF within your router for each network.
Correct Answer: AD

Question #140Topic 1
Your company just purchased a domain using another registrar and wants to use the same nameservers as your current domain hosted with AWS. How would this be achieved?
A. Every domain must have different nameservers.
B. In the API, create a Reusable Delegation Set.
C. Import the domain to your account and it will automatically set the same nameservers.
D. In the console, create a Reusable Delegation Set.
Correct Answer: B
You can't create a reusable delegation set in the console. AWS does not provide the same nameservers to new domains, but a reusable delegation set can be used with as many domains as you like.

Question #141Topic 1
Your company is connecting one data center with one router to several VPCs and needs to access them transitively. What should you do?
A. Create a VPN to one VPC and peer the others.
B. This is not possible.
C. Use a transit VPC with a VPN running on one or more EC2 instances to route traffic between the VPCs.
D. Just connect; VPCs are transitive in nature.
Correct Answer: C
VPCs are not transitive, so you will need a "transit VPN" in order to route between the VPCs.
Community vote distribution
C (100%)

Question #142Topic 1
Your AWS WorkSpaces users are unable to authenticate. What could be one reason for this?
A. Your AD server is running Windows Server 2016
B. Port 3389 is not open to your AD server.
C. Port 389 is not open to your AD server.
D. Your AD server is running Windows Server 2012 Core Edition.
Correct Answer: C
AD requires port 389.

Question #143Topic 1
You have just deployed a website that utilizes CloudFront, ELB, and S3 to serve content. When users access your site, they are seeing broken image links. You know you configured CloudFront to use cdn.yourdomain.com. What is the most likely reason why your users not seeing the images?
A. There is no rule in your bucket policy allowing public access. [1]
C. There is no record in Route 53 pointing cdn.yourdomain.com to the ALIAS.
D. The users are using Internet Explorer.
Correct Answer: C
You must have a Route 53 record. You never want to give public access to your content bucket.

Question #144Topic 1
You are responsible for several EC2 instances deployed from Amazon AMIs that are required to upload information to an S3 bucket. This information must not traverse the public internet. You must also be able to update the instances. Which option is your best solution?
A. An S3 endpoint and a NAT
B. An S3 endpoint
C. A VPN to the IP addresses specified in the AWS official S3 prefix list
D. A NACL with the AWS prefix list added to it and a VPN.
Correct Answer: B
A NAT is not required as an S3 endpoint will allow an instance to update. C and D are not possible.
Community vote distribution
A (50%)
B (50%)

Question #145Topic 1
Your company is building a new data center. You currently have an on-premises data center that accesses your single VPC via VPN. You need to provide access to your single VPC to your new data center. Since your new data center build is already over budget, you need to keep costs low.
How should you accomplish this?
A. Add a Private VIF and create a Direct Connect connection.
B. Create a new Customer Gateway and add it to your VPN using a CloudHub infrastructure model.
C. Add a Public VIF and create a Direct Connect connection.
D. Create a new Virtual Gateway and add it to your VPN using a CloudHub infrastructure model.
Correct Answer: B
Create a new Customer Gateway. A Private VIF would work, but you want to keep costs low. A Public VIF is only for AWS specific resources, such as S3. A
Virtual Gateway would be created if you were creating a new VPN connection in a new VPC. A Customer Gateway would allow you to add the new datacenter to your VPN.

Question #146Topic 1
You have a website hosted on EC2 that is not serving web pages. You have ensured that the server is running and the site is configured properly. What could be the problem?
A. Your NACL does not allow port 80 outbound.
B. Your NACL does not allow ports 1024 גˆ’ 65535 outbound.
C. Your NACL does not allow ports 1024 גˆ’ 65535 inbound. D. Your security group does not allow outbound traffic.
Correct Answer: B
The ephemeral ports 1024 גˆ’ 65535 are required outbound for return traffic. For the server to access websites, those same ports need to be allowed inbound.

Question #147Topic 1
You are auditing an AWS infrastructure after you noticed some abnormal charges on the bill. You use AWS Config to monitor your changes. What else is required to find out who made the change?
A. There is no information to find this. You will need to sign up for Config Premium.
B. Use the eventID of the change and reference it with your Flow Logs.
C. Use the eventId of the change and reference it with CloudTrail to find the culprit.
D. Use the eventID of the change and reference it with CloudWatch to find the culprit.
Correct Answer: C
CloudTrail is for finding "who" performed an action.

Question #148Topic 1
Your organization has placed a project on hold and has stopped 30 public EC2 instances. These instances use instance store volumes and do not have custom
AMIs associated. You are still being charged every month.
What is the charge probably for?
A. AWS charges for dormant accounts.
B. You have Elastic IPs associated with those instances.
C. There is a "stopped instance" fee that AWS charges every month.
D. You are being charged for the EBS volumes.
Correct Answer: B
You have Elastic IPs associated with those instances. AWS charges for any unused Elastic IPs in your account.
Community vote distribution
B (100%)

Question #149Topic 1
You need to quickly view inbound traffic to an instance to determine why it isn't reaching the instance properly. What is the best tool for this?
A. Wireshark
B. CloudWatch
C. CloudTrail
D. Flow Logs
Correct Answer: D
CloudWatch only shows the amount of data in. Wireshark cannot see anything inside AWS infrastructure. You can only use it to view instance traffic.

Question #150Topic 1
Your company has just completed a transition to IPv6 and has deployed a website on a server. You were able to download software on the instance without an issue. This website is deployed using IPv6, but the public is not able to access it. What should you do to fix this problem?
A. Add an internet gateway for the instance.
B. Add an egress-only internet gateway.
C. Add an inbound rule to your security group that allows inbound traffic on port 80 for ::/0.
D. Add an inbound rule to your security group that allows inbound traffic on port 80 for 0.0.0.0/0.
Correct Answer: C
Your instance can reach the internet if it was able to download sofftware, so an IGW is not needed. 0.0.0.0/0 is for IPv4.

Question #151Topic 1
Your company has two DX locations. You need to configure one link as passive. What should you configure in your router to set that link as the passive link.
A. Set a higher MED.
B. Configure AS_PATH Prepending on the link.
C. Advertise a network with a higher CIDR.
D. Call your service provider and have the ASN changed for that link.
Correct Answer: B
You should configure AS_PATH prepending on the link. A higher CIDR is the same as a more specific prefix, which will make the link more preferred. A higher
MED will make the path less preferred, but this is not the preferred method to accomplish this. Changing your ASN will not help. Configuring AS_PATH
Prepending is the preferred method of AWS to configure an Active-Passive configuration with Direct Connect.
Community vote distribution
A (67%)
B (33%)

Question #152Topic 1
You have just configured an Elastic Load Balancer. Assuming all settings are configured properly, about how long will it take an instance to become healthy with a
6 second HealthCheck Interval, an unhealthy threshold of 5 and a healthy threshold of 10?
A. 120 seconds
B. 30 seconds
C. 6 seconds
D. 60 seconds
Correct Answer: D
60 seconds. 10 healthcheck successes with 6 second intervals.
Community vote distribution
D (100%)

Question #153Topic 1
Your company needs to directly update an S3 bucket that serves as a CloudFront origin with the most reliability possible. Your company also has a set of private
EC2 servers that it needs to access with the same reliability. Which combination will provide the best solution?
A. A Virtual Gateway and a Public VIF
B. A Private VIF is all you need to access all AWS resources.
C. A Hosted VIF and a Private VIF
D. A Public VIF and a Private VIF
Correct Answer: D
The Public VIF will allow access to the S3 bucket, and the Private VIF will allow access to the EC2 instances.
Community vote distribution
D (100%)

Question #154Topic 1
You wish to have a sub-1G connection to AWS to save on costs. How can you achieve this?
A. Just set your router to the speed you want and AWS will charge you based on the actual speed of the port.
B. Contact AWS, they will put you in contact with a technical account manager who can help you get this setup.
C. You can't. The only speeds available for Direct Connect are 1G and 10G.
D. Contact an AWS partner, AWS does not provide sub-1G connection speeds.
Correct Answer: D
Sub-1G service is only available through AWS partners.
Community vote distribution
D (100%)

Question #155Topic 1
You have just peered two VPCs, and you need to improve performance for instances you plan on deploying. What are two steps you would take to do this?
(Choose two.)
A. Create two subnets in the same AZ and create a placement group.
B. Set the MTU of your instances to 1500.
C. Create two subnets in different AZs and create a placement group.
D. Ensure you choose instances that use enhanced networking.
Correct Answer: AD
A placement group can only be deployed in the same AZ and is only useful with enhanced networking instances.

Question #156Topic 1
You have just deployed a website that utilizes CloudFront, ELB, and S3 to serve content. When users access your site, they are seeing broken image links. What is most likely the problem?
A. There is no record in Route 53 pointing cdn.yourdomain.com to the CloudFront ALIAS.
B. You need to create Origin Access Identity for CloudFront and add it to your bucket policy. [1]
D. There is no rule in your bucket policy allowing public access.
Correct Answer: B
You must have an OAI if the bucket policy does not allow public access, which is bad practice.
Community vote distribution
B (100%)

Question #157Topic 1
You have a static VPN connecting your data center and your VPC. You currently have 50 routes added to your route table. You want to add more; how should you do this?
A. 50 is the most you can have for any connection.
B. Just add them, you have a maximum of 100 static routes per route table.
C. Set up Direct Connect. A VPN will not support more routes.
D. Convert your VPN to a dynamic VPN and use BGP.
Correct Answer: D
A dynamic routing table can support 100 routes. A static can only support 50 per IPv4 and 50 per IPv6. Direct Connect will work, but it would be more than you needed.
Community vote distribution
B (100%)

Question #158Topic 1
Your company needs an inexpensive solution to host their AD data in the cloud. They do not need all of the features of AD but do need to be able to use it with
WorkSpaces. What is the best solution?
A. AD Connector
B. Hosted Microsoft AD
C. Simple AD
D. Deploy an AD server on an M3.large instance
Correct Answer: C
Simple AD is the best choice here. If authentication is all you need, it is the most inexpensive option for in-cloud directory.

Question #159Topic 1
You need to find the MTU used by another instance, but tracepath is not working. You know the instance you are trying to tracepath has open security group and
NACL rules. Which protocol do you need to allow to access your instance to remedy this?
A. Protocol 6: TCP
B. Protocol 47: GRE
C. Protocol 17: UDP
D. Protocol 1: ICMP
Correct Answer: D
You need to allow Protocol 1, ICMP, to access your instance. tracepath specifically needs the "destination unreachable" feature of ICMP.
Community vote distribution
C (100%)

Question #160Topic 1
You are under a DDoS attack and you have added a deny all TCP rule to your NACL, but traffic is still coming. What did you do wrong?
A. You configured the rule number to be too low.
B. A NACL can't protect against a DDoS.
C. The DDoS isn't a TCP attack.
D. You need to add a deny rule outbound also since NACLs are stateful.
Correct Answer: C
The DDoS isn't a TCP attack (this time.) A DDoS can use several different protocols. NACLs are stateless. The lower the rule number, the higher the priority.

Question #161Topic 1
When configuring Active/Passive HA on VPN tunnels, choose the two best ways to configure this. (Choose two.)
A. Keep both tunnels up.
B. Configure AS_PATH prepending on one of the paths.
C. Turn off one of the paths until you need it.
D. Configure MED on one of the tunnels.
Correct Answer: AB
AWS prefers AS_PATH prepending and for a tunnel to provide true failover, it must always be on.
Community vote distribution
AD (100%)

Question #162Topic 1
Your company is working on a transition from IPv4 to IPv6 but is concerned about the security of having public IPv6 addresses attached to instances in a public network. They currently use a NAT to allow outbound traffic for instances. Outbound traffic is required for updates. What are two options to alleviate your company's concerns? (Choose two.)
A. Remove any rules allowing ::/0 inbound in the security group.
B. Block ::/0 inbound in the NACL.
C. Create an egress-only internet gateway.
D. Block 0.0.0.0/0 inbound in the NACL.
Correct Answer: AC
0.0.0.0/0 will only block IPv4, blocking ::/0 in the NACL will prevent return traffic and updates to the instances. An egress-only internet gateway or blocking ::/0 inbound in the security group will allow the instances to initiate outbound connections and receive the return traffic, while still preventing outside attackers from initiating connections to the instances.

Question #163Topic 1
You have two placement groups in a VPC. What communication speed can be expected between the two placement groups?
A. 5Gbps
B. 10Gbps
C. 20Gbps
D. You cannot communicate between two placement groups.
Correct Answer: A
5Gbps is the maximum speed for traffic outside of a placement group.
Community vote distribution
A (100%)

Question #164Topic 1
You have two Direct Connect connections and two VPN connections to your network. Site A is VPN 10.1.0.0/24 AS 65000 65000, Site B is VPN 10.1.0.252/30 AS
65000, Site C is DX 10.0.0.0/8 AS 65000 and Site D is DX 10.0.0.0/16 AS 65000 65000 65000. Which site will AWS choose to reach your network?
A. Site A: VPN 10.0.1.0/24 AS 65000 65000
B. Site B: VPN 10.0.1.252/30 AS 65000 65000 65000
C. Site C: DX 10.0.0.0/8 AS 65000
D. Site D: DX 10.0.0.0/16
Correct Answer: B
Site B, the most specific prefix always wins.
Community vote distribution
B (100%)

Question #165Topic 1
You manage a website that uses a load balancer. You are noticing one of the servers is receiving more traffic than the other. What is probably the cause of this?
A. An Elastic Load Balancer sends traffic based on server load. One server must be a larger instance.
B. You have DNS latency routing set, so it is diverting traffic to a different instance.
C. You have sticky sessions configured and there are several power users that happen to be on the other server.
D. The server has more connections available.
Correct Answer: C
Sticky sessions can keep users on a particular server throughout their session. Latency routing would route to the load balancer, not the instances. Load balancers use a round-robin algorithm to balance.

Question #166Topic 1
Your website is under attack and a malicious party is stealing large amounts of data. You have default NACL rules. Stopping the attack is the ONLY priority in this case. Which two commands should you use? (Choose two.)
A. aws ec2 delete-network-acl-entry -network-acl-id acl-5fb84d47 -ingress -rule-number 32768
B. aws ec2 delete-network-acl-entry -network-acl-id acl-5fb84d47 -egress rule-number 100
C. aws ec2 delete-network-acl-entry -network-acl-id acl-5fb84d47 -ingress rule-number 100
D. aws ec2 create-network-acl-entry -network-acl-id acl-5fb84d47 -ingress rule-number 100 -protocol -1 -port-range From =-1,To =-1 -cidr-block 0.0.0.0/0 -rule- action deny
Correct Answer: BC
You should remove the default allow rules in your NACL and a default deny will be the only rule left for inbound and outbound. If you attempt to create a rule number 100, it will encounter an error as there is already a rule 100.
Community vote distribution
BC (100%)

Question #167Topic 1
You are a holdings company that buys many businesses and must integrate their VPCs into your network. You are constantly encountering networks with similar or overlapping subnets.
What is the best way to manage this.
A. BFD
B. VRF
C. A standby router for the overlapping subnets.
D. A strict IP addressing policy that forces new companies to change the IP addresses of their VPCs.
Correct Answer: B
VRF, or Virtual Routing and Forwarding will allow you to have multiple routing tables on your router.

Question #168Topic 1
Your company has a high-availability hybrid solution that utilizes a two Direct Connect connections and a backup VPN connection. For some reason, traffic is preferring the VPN connection instead of the direct connection. You have prepended a longer AS_PATH on the VPN connection, but AWS still prefers it over the
Direct Connect connections.
What might you be able to do to fix this issue?
A. Advertise a less specific prefix on the VPN.
B. Remove the prepended AS_PATH.
C. Reconfigure the VPN as a static VPN instead of dynamic.
D. Increase the MED on the VPN.
Correct Answer: A
The only reason a VPN would be preferred over Direct Connect is if it has a more specific prefix. This was not discussed in the question but is assumed since it is the only criteria in the path selection process that supersedes Direct Connect.

Question #169Topic 1
You work for an international corporation that uses AWS. Due to regulations, you are now required to route the US and China to two different websites. You set up the records and now no other countries can access your site.
Why is this?
A. You forgot to set a default geolocation record.
B. You probably broke your DNS.
C. You must have a geolocation in place for every country.
D. Geolocation features are only available in CloudFront.
Correct Answer: A
A default record is required for traffic that does not match a geolocation criteria to follow.

Question #170Topic 1
Your company is expanding its cloud infrastructure and moving many of its flat files and static assets to S3. You currently use a VPN to access your compute infrastructure, but you require more reliability for your static files as you are offloading all of your important data to AWS. What is your best course of action while keeping costs low?
A. Create a Direct Connect connection using a Private VIF to access both compute and S3 resources.
B. Create an S3 endpoint and create a route to the endpoint prefix list for your VPN to allow access to your S3 resources.
C. Create two Direct Connect connections. Each connected to a Private VIF to ensure maximum resiliency.
D. Create a Direct Connect connection using a Public VIF and route your VPN over the DX connection to your VPN endpoint.
Correct Answer: D
An S3 endpoint cannot be used with a VPN. A Private VIF cannot access S3 resources. A Public VIF with a VPN will ensure security for your compute resources and access to your S3 resources. Two DX connections are very expensive and a Private VIF still won't allow access to your S3 resources.

Question #171Topic 1
Your company currently has a LAG to AWS with two 1Gbps connections. What is the best way to increase throughput on this LAG?
A. Add three 1Gbps connections to the LAG.
B. Add one 10Gbps connections to the LAG.
C. Configure your router to use "jumbo frames" with an MTU of 9001.
D. Add two 1Gbps connections to the LAG.
Correct Answer: D
Add two 1Gbps connections to the LAG. DX does not support jumbo frames, a LAG only supports 4 connections, and adding a 10Gbps connection will be limited to the lowest speed of 1Gbps.

Question #172Topic 1
You have 4 Direct Connect connections from your datacenter. Site A advertises 172.16.0.0/16 AS 65000, Site B advertises 172.16.0.128/25 AS 65000 65000
65000, Site C advertises 172.0.0.0/8 AS 65000 and Site D advertises 172.16.0.0/24 AS 65000. Which site will AWS choose to reach your network?
A. Site A: 172.16.0.0/16 AS 65000
B. Site B: 172.16.0.128/25 AS 65000 65000 65000
C. Site C: 172.0.0.0/8 AS 65000
D. Site D: 172.16.0.0/24 AS 65000
Correct Answer: B
172.16.0.128/25 AS 65000 65000 65000. The most specific prefix is always the first choice for BGP routing. Also, AWS will not accept an advertisement of a network less than /16.

Question #173Topic 1
You have a server that serves www, FTP, and mail. You need to access this server using www.yourname.com, ftp.yourname.com, and mail.yourname.com. You want to ensure an IP change results in the least number of other changes.
What is the best solution?
A. Create PTR records and point the IP address of the server back to www, ftp, and mail.
B. Create an A record pointing to the server's IP address and create CNAME records for www, ftp, and mail and point those to the A record.
C. Create an A record for www, ftp and mail, and point it to the ALIAS of the server.
D. Create CNAME records for www, ftp, and mail and point those to the A record already provided to the instance by AWS.
Correct Answer: B
There is no ALIAS record for an EC2 instance, CNAME records pointed to the A record provided by AWS won't work because if the IP changes, the A record will change also. A PTR record is not appropriate here and cannot point to more than one record. Having three CNAME records and one A record will result in only having to change the A record if the IP changes.

Question #174Topic 1
Your company has a DX connection and you just added a new VPC and Private VIF to which you have connected to your DX link. You copied the settings from the other VPC to ensure it's the same. Once you connected the new VIF, you began seeing problems with connectivity to both VPCs.
You checked to make sure you didn't use the same CIDR with each VPC, so what could be the problem?
A. You used the same VLAN ID for both connections.
B. You overloaded your DX circuit.
C. Your MPLS provider does not allow traffic to two VPCs.
D. You can only connect one VIF to a DX circuit.
Correct Answer: A
You can only have 1 instance of any VLAN ID.
Community vote distribution
A (80%)
B (20%)

Question #175Topic 1
You need to find the public IP address of an instance that you're logged in to. What command would you use?
A. curl ftp://169.254.169.254/latest/meta-data/public-ipv4
B. scp localhost/latest/meta-data/public-ipv4
C. curl http://127.0.0.1/latest/meta-data/public-ipv4
D. curl http://169.254.169.254/latest/meta-data/public-ipv4
Correct Answer: D
curl http://169.254.169.254/latest/meta-data/public-ipv4

Question #176Topic 1
You have a hybrid infrastructure and you have configured your own DNS server on an EC2 instance in your 10.1.3.0/24 subnet. This subnet resides on the VPC
10.1.0.0/16. You need your data center to be able to resolve Route 53 queries in your private hosted zone. What do you need to do to accomplish this?
A. Disable the source/destination check flag for the DNS instance.
B. Configure your DNS server to forward queries for the private hosted zone to 10.1.3.2.
C. Configure your DNS server to forward queries for the private hosted zone to 10.1.0.2.
D. Configure the VPC DHCP option set in the VPC to point to the EC2 DNS server.
Correct Answer: C
10.1.3.2 is not the DNS server. A DHCP option set is not needed since you are resolving AWS resources from on-premises not from a VPC and those instances are already configured to look to Route 53 DNS.

Question #177Topic 1
Your company has signed up to trial AWS WorkSpaces. You aren't sure you're going to keep it, but you want to try it out to see if it works for your organization of
112 users. You need to deploy it with as little work and up-front expense as possible while still allowing access to your Active Directory for authentication.
What two things should you do? (Choose two.)
A. Create a VPN connection.
B. Create an AD connector
C. Setup AWS hosted Microsoft AD
D. Create a Direct Connect connection to AWS.
Correct Answer: AB
A VPN connection and an AD connector will allow you to get up and running without having to migrate users, setup expensive equipment or pay for another directory service.

Question #178Topic 1
You have two autoscaling groups in your VPC. One deploys servers that host the index of your website and another that deploys servers that host the images for your website. What three steps would you take to ensure the right servers are used for the right purpose? (Choose three.)
[1]
B. Create two target groups and associate them with each autoscaling group.
C. Configure a Classic Load Balancer
D. Configure an Application Load Balancer
Correct Answer: ABD
A Classic Load Balancer does not support path-based routing rules

Question #179Topic 1
You have two VPCs that you've peered. You created a route for VPC A to get to an instance in VPC. You are unable to ping the instance. You have double checked your security groups and NACLs.
Why might this be?
A. You forgot to add a return route.
B. ICMP is not supported over peering connections.
C. You have to enable Source/Destination check in the VPCs.
D. You have to configure the peering connection to allow two way traffic.
Correct Answer: A
Every route needs a return route for ICMP traffic.
Community vote distribution
A (100%)

Question #180Topic 1
You want to ensure you have the absolute best transmission rates inside and outside your VPC. You are concerned about the MTU settings. What is the best way to configure your T2 instances to ensure the best compatibility?
A. Set all MTU to 1500 as that is the best way to ensure compatibility.
B. Leave everything as is.
C. Configure two ENIs, one for internal traffic and one for external traffic. Configure the external ENI with an MTU of 1500 and the internal ENI with an MTU of 9001.
D. Set all MTU to 9001 as that is the best way to ensure the best speed. The packets will be fragmented if they have to be.
Correct Answer: C
By using two ENIs, you ensure the right MTU goes to the proper destination.
Community vote distribution
A (100%)

Question #181Topic 1
Which of the following does not configure Amazon CloudFront cache behaviors to forward cookies to an origin for web distributions?
A. Origin server
B. AWS CLI
C. Amazon EMR
D. Amazon S3
Correct Answer: D
Amazon S3 and some HTTP servers do not process cookies. Do not configure Amazon CloudFront cache behaviors to forward cookies to an origin that doesn't process cookies or you'll adversely affect cache ability and consequently performance.
Reference:
http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html

Question #182Topic 1
You received reports from clients in another time zone that they experienced an outage of your website several hours before you arrived at work. What two AWS services could prove crucial in figuring out what happened? (Choose two.)
A. AWS Support
B. CloudTrail
C. CloudWatch
D. Flow Logs
Correct Answer: CD
CloudTrail is for finding out who made a change. This could be a reason for the outage, but you need to see the metrics first. CloudWatch and Flow Logs are the best for this.
Community vote distribution
BC (100%)

Question #183Topic 1
You wish to access all European regions using your Direct Connect connection. How should you accomplish this?
A. Peer VPCs in the different regions and connect DX to one of the regions to communicate with the other.
B. Use a DX Gateway.
C. Find the prefix list for the other region and add it to your route table.
D. One DX connection will connect you to all regions.
Correct Answer: B
The DX Gateway will allow access to multiple regions.

Question #184Topic 1
You are using the CLI to assign multiple IP addresses to interfaces. The operation fails. What is the most likely reason?
A. You cannot assign IP addresses in the CLI.
B. You can only assign 5 IP addresses at a time through the CLI.
C. One or more of the IP addresses could not be assigned.
D. All of the IP addresses could not be assigned.
Correct Answer: C
One more of the IP addresses could not be assigned. It only takes one failed assignment for the entire operation to fail.

Question #185Topic 1
You are a network admin of a US company called Webby Widgets that is expanding to Europe. The company has a website that serves dynamic and static content.
You have been instructed to ensure the European clients receive the least latency possible, no matter where in Europe they live, while still allowing the US clients to receive the same user experience and performance they have been accustomed to. You have also been instructed to ensure both countries use the same URL to access the site and keep costs low.
What two things should you do? (Choose two.)
A. Deploy three VPCs; one for the US, one for the EU, and one as a central VPC that hosts an Elastic Load Balancer that will distribute traffic between the US and EU VPCs.
B. Create two A records: eu.webbywidgets.com that points to the EU resources and us.webbywidgets.com that points to the US resources.
C. Use the Traffic Flow policy creator to create the perfect routing policy.
D. Create a CloudFront distribution to serve the static content from an S3 bucket.
Correct Answer: CD
The Traffic Flow policy creator costs $50/mo. per policy and Elastic Load Balancers cannot distribute traffic between VPCs.

Question #186Topic 1
You are configuring a CloudFront distribution, and when you try to attach an SSL, you do not see your SSL listed. What is the most likely reason for this?
A. You must configure an https record in Route 53 first.
B. Sometimes, it won't show, and you need to retrieve the ARN for the SSL and enter it manually.
C. You requested an SSL for the wrong region.
D. You didn't wait 48 hours after approving the SSL.
Correct Answer: C

Question #187Topic 1
Your company has decided to use AWS WorkSpaces for its hosted desktop solution. Your company has an existing AD of about 57,000 users, and you want to minimize authentication traffic from AWS to your datacenter. Your company has a lot of personnel changes, and it is crucial that these changes are reflected reliably.
What two steps should you take? (Choose two.)
A. Deploy Hosted AD in AWS.
B. Deploy an AD Connector in AWS.
C. Create a DX connection between the datacenter and AWS.
D. Create a VPN between the datacenter AWS.
Correct Answer: AC
A VPN is not reliable enough, and an AD connector will cause too much authentication traffic.

Question #188Topic 1
You are configuring multiple Direct Connect links for your organization and need them to be in an HA Active/Passive configuration with extreme sensitivity to outages in order to encourage very quick failover times. You also need to be able to control which link is active.
What two configuration changes should you implement? (Choose two.)
A. MPLS
B. BFD
C. AS_PATH Prepending
D. BGP
Correct Answer: BC
Bidirectional-Forwarding Detection will allow for faster failover times. AS_PATH Prepending will allow you to choose the default path. BGP is already implemented and MPLS does not matter.

Question #189Topic 1
What number does the binary number 10101000 correspond to?
A. 168
B. 128
C. 192
D. 160
Correct Answer: A
128 + 0 + 32 + 0 + 8 + 0 + 0 + 0 = 168

Question #190Topic 1
What number does the binary number 11000000 correspond to?
A. 128
B. 192
C. 64
D. 117
Correct Answer: B
128 + 64 + 0 + 0 + 0 + 0 + 0 + 0 = 192

Question #191Topic 1
What value in a packet dictates the priority of the packet in a QoS enabled network?
A. BFD
B. IPv6
C. NAT
D. DSCP
Correct Answer: D
The Differentiated Services Code Point value, or DSCP, is used to label packets on QoS enabled networks for prioritization.

Question #192Topic 1
What is the IPv6 subnet CIDR used by a VPC?
A. /128
B. /56
C. /48
D. /16
Correct Answer: B
A VPC will always use /56 as its CIDR
Community vote distribution
B (100%)

Question #193Topic 1
What is the name of the label applied to packets to allow routers to know where to forward in an MPLS network?
A. BFD
B. BGP
C. FEC
D. ABC
Correct Answer: C
Forward Equivalency Class is how routers know where to send packets.

Question #194Topic 1
What port and protocol is used by DNS?
A. 80/TCP
B. 22/TCP
C. 80/TCP and UDP
D. 53/TCP and UDP
Correct Answer: D
DNS uses port 53 and either TCP or UDP depending on what type of DNS message is being sent.

Question #195Topic 1
Which port range must be allowed through a NACL to ensure all return traffic is successful?
A. 1024 גˆ’ 65,535
B. 22
C. 65,000 גˆ’ 65,535
D. 80 גˆ’ 443
Correct Answer: A
1024 גˆ’ 65,535 is the full "ephemeral port" range.

Question #196Topic 1
To allow all traffic to access an instance in "Subnet 1" that uses "Security Group 1", what two options need to be configured? (Choose two.)
A. NACL rule allowing 0.0.0.0/0 to access "Subnet 1"
B. Security Group rule in "Security Group 1" that allows 0.0.0.0/0 inbound
C. Security Group rule in "Security Group 1" that allows outbound traffic to 0.0.0.0/0
D. NACL rule allowing 0.0.0.0/0 to access "Security Group 1"
Correct Answer: AB
You must allow traffic through the NACL and through the Security Group to access the instance. If there is not an Outbound allow setup in the NACL, you may need to set that, but an outbound rule for Security Group 1 is not necessary as security groups are stateful.
Community vote distribution
AB (100%)

Question #197Topic 1
You have created a custom VPC. What are two things you may need to do in order to SSH directly into your instance? (Choose two.)
A. Enable SSH on the instance
B. Attach a NAT Gateway
C. Enable Public IP addresses
D. Attach an Internet Gateway
Correct Answer: CD
Public IP addresses are not enabled by default in a custom VPC. An Internet Gateway is also required.

Question #198Topic 1
Which of these addresses cannot be given to an EC2 instance in your VPC?
A. 10.0.0.157
B. 10.0.0.3
C. 10.0.0.4
D. 10.0.0.253
Correct Answer: B
10.0.0.3 is reserved by AWS for future use.

Question #199Topic 1
Which ports must you allow for HTTP and HTTPS traffic?
A. 25/465
B. 21/22
C. 3389/3306
D. 80/443
Correct Answer: D
80 and 443 are the ports for HTTP and HTTPS, respectively.

Question #200Topic 1
If you have one VPC peered with two VPCs with overlapping CIDRs, which route will be more preferred?
A. 10.1.0.0/16
B. 10.0.0.0/8
C. 10.1.1.5/32
D. 10.1.1.0/24
Correct Answer: C
10.1.1.5/32. The most specific route is preferred.

