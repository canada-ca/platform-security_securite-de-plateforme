# 4. Implementation Recommendations

([Back](../README.md))

The following are general recommendations for securing containers and Kubernetes.

## 4.1 Host Recommendations

The following are recommendations for securing the host:

1. Run docker engine with flags per [CIS Docker Community Edition Benchmark](https://www.cisecurity.org/benchmark/docker/) and [NIST Special Publication 800-190](https://doi.org/10.6028/NIST.SP.800-190).
2. Check for compliance by running tools like [docker-bench](https://github.com/docker/docker-bench-security) against the host. Recommended flags and settings can also be found in the [_Security Controls Mapping to Docker and Kubernetes_](https://www.gcpedia.gc.ca/gcwiki/images/4/48/Security_Controls_Mapping_to_Docker_and_Kubernetes.xlsx) document available on GCpedia.

3. While the benchmarks are the primary reference, consider these additional security best practices:

| Best Practice | Description |
| --- | --- |
| **Container Runtime Security** | <ul>Enable security features like [`AppArmor`](https://www.apparmor.net/) or `SELinux` on your containers for additional protection. </uL>|
| **Software Supply Chain Security** | <ul><li>Implement vulnerability scanning of container images in development, CI/CD pipelines, and production environments.</li><li>Use trusted container registries and consider signing your container images.</li></ul> |
| **Network Security** | <ul>Implement network segmentation, firewalls, and intrusion detection systems (IDS) to protect container networks. <ul>|
| **Least Privilege** | <ul>Enforce the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) by granting containers only the minimum permissions they require to function. </ul>|
| **Monitoring and Logging** | <ul>Continuously monitor your container environment for suspicious activity and maintain detailed logs for forensic analysis.</ul> |

By embracing established security benchmarks and implementing best practices, you can significantly enhance the security posture of your containerized applications and Kubernetes deployments.

## 4.2 Image Builds

Containers are comprised of layered images specified in a `Dockerfile`, which includes a base OS, libraries, and dependencies. Since vulnerabilities can be introduced at each layer of the image, containers should be as minimal as possible, with all components from trusted sources (provenance).

This starts by using trusted and optimized images with no (major) CVE vulnerabilities; and using only trusted versions and registries (trusted dependencies, signed images, secure and trusted registries). For some builds (i.e. `FROM golang`), consider a multi-stage build to reduce size, unnecessary libraries, and vulnerabilities.

Organizations should evolve established processes to better fit containerized application build and deployment.

A sample of specific image build considerations include:

| Consideration | Description |
| --- | --- |
| **Hardening** | <ul>Harden the Docker engine by implementing CIS Docker Benchmark flags for improved security.</ul> |
| **Patching Base OS** | <ul>Can secure all containers running on the same host.</ul>|
| **Container-specific Host OS** | <ul>Consider using a container-specific Host OS like [CoreOS](https://fedoraproject.org/coreos/), [RancherOS](https://rancher.com/docs/os/v1.x/en/), etc. for a smaller attack surface and easier management. </ul>|
| **Labels, Tags, (Not LATEST)** | <ul><li>Use labels and tags to identify the image and version.</li><li>Use [semantic versioning](https://semver.org/) (e.g. `v1.0.0`).</li><li>Don't use `latest`.</li></ul> |
| **Cryptographic Signing** | <ul>Use cryptographic signing for image verification.</ul>  |
| **Best Practices** | <ul>Follow general `Dockerfile` best practices (such as specifying commands in the same line to reduce layers in image)</ul> |

## 4.3 Container Deployment Security

Container deployment can introduce security risks if not properly managed. To mitigate these risks, organizations should consider the following best practices:

| Best Practice | Description |
| --- | --- |
| **Use a Container Registry** | <ul><li>Use a private registry to control access to images.</li><li>Use a container registry that supports TLS to encrypt data in transit.</li><li>Use IAM to control access to the registry.</li></ul> |
| **Use Cryptographically Signed Images** | <ul>Use cryptographically signed images to verify the integrity and authenticity of the image.</ul>|
| **Use CI/CD Pipelines** | <ul><li>automate the build, test, and deployment of containerized applications. </li><li>Scan images for vulnerabilities and secrets.</li><li>Use automated testing to validate the functionality of the application.</li><li>Use infrastructure as code (IaC) to define the configuration of the containerized application.</li><li>Use automation tools to deploy containers to the target environment.</li><li>Use version control to manage changes to the configuration files.</li></ul> |
| **Use Secrets Management Tools** | <ul>Use secrets management tools to securely store and manage sensitive information like passwords, API keys, and certificates.</ul>|
| **Use Monitoring and Logging Tools** | <ul>Use monitoring and logging tools to track the performance and security of containerized applications.</ul> |

## 4.4 Orchestration - Kubernetes

Kubernetes is a popular container orchestration tool that automates the deployment, scaling, and management of containerized applications. Kubernetes provides a rich set of features for securing containerized applications.

The benefits of Kubernetes include:

| Benefit | Description |
| --- | --- |
| **Scalability** | Can scale applications horizontally and vertically to meet demand. |
| **High Availability** | Can automatically restart failed containers and reschedule them on healthy nodes. |
| **Resource Management** | Can manage resources like CPU and memory to ensure that applications run efficiently. |
| **Service Discovery** | Provides a built-in service discovery mechanism that allows applications to communicate with each other. |
| **Load Balancing** | Can distribute incoming traffic across multiple instances of an application to ensure high availability. |
| **Rolling Updates** | Can perform rolling updates of applications to minimize downtime. |
| **Monitoring and Logging** | Provides built-in monitoring and logging capabilities to track the performance and security of applications. |
| **Security** | Provides a rich set of security features to protect containerized applications. |
| **Portability** | Cloud-agnostic and can run on any cloud provider or on-premises infrastructure. |

Although Kubernetes provides many benefits, it also introduces new security challenges. The configuration and management of Clusters require careful attention to ensure that they are secure.

> **Note:** Where possible, it is recommended to use a managed Kubernetes service from a cloud provider, as they often provide additional security features and manage the underlying infrastructure for you.
> This eliminates the need to manage the Control plane and ensures that the cluster is always up to date with the latest security patches.

When managing your own Cluster, it is important to follow best practices for securing the cluster. Specific flags for hardening Can be found in the [CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes/). Open source tools to verify configuration and compliance to CIS Benchmark include and [kube-bench](https://github.com/aquasecurity/kube-bench) and [kubsec.io](https://kubesec.io/).

Regardless of style (Managed or self-managed), high-level recommendations and best practices for securing Kubernetes include:

| Best Practice | Description |
| --- | --- |
| **TLS Everywhere** | <ul>Components and installation methods may enable local ports over HTTPS and administrators should familiarize themselves with the settings of each component to identify potentially unsecured traffic.</ul> |
| **Identity, Authorization, and Authentication** | <ul><li>Through role-based access control, applying identity and access management and restricted access to elevated privileges.</li><li>Permissions on volumes, networks etc. using role and attribute access control.</li><li>Using and securing 'etcd' for storing secrets.</li><li>Disable legacy authorization.</li><li>Rotate keys.</li><li>Specific tools include JSON Web Tokens (JWT) and [SPIFFE](https://spiffe.io/) (Spire).</li></ul> |
| **TLS Everywhere** | <ul>Components and installation methods may enable local ports over HTTPS and administrators should familiarize themselves with the settings of each component to identify potentially unsecured traffic.</ul> |
| **Kubernetes Secrets** | <ul>Ensures that all sensitive information -- such as passwords, `Open Authorization (OAuth)` tokens and `Secure Shell (SSH)` keys -- are encrypted and made available to each Pod only when they are required for a particular task.</ul> |
| **Logging and Telemetry** | <ul>Includes audit trail and use of application monitoring tools built for cloud-native environments.</ul> |
| **Networking** | <ul><li>Use network policies to segment communication between containers or pods: for example to specify with whom a pods or endpoints can communicate.</li><li>Resources to help implement Kubernetes network policy include: <ul><li>[Kubernetes Network Policies feature](https://kubernetes.io/docs/concepts/services-networking/network-policies/)</li><li>[AWS - Limit pod traffic with Kubernetes network policies](https://docs.aws.amazon.com/eks/latest/userguide/cni-network-policy.html)</li><li>[Azure - Limit pod traffic with Kubernetes network policies](https://docs.microsoft.com/en-us/azure/aks/use-network-policies)</li><li>[GCP - Limit pod traffic with Kubernetes network policies](https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy)</li></ul></ul> |

Further details can be found in [kubernetes.io](kubernetes.io), and [NIST Special Publication 800-190 Application Container Security Guide](https://doi.org/10.6028/NIST.SP.800-190).
