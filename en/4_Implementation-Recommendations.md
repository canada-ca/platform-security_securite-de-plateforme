# 4. Implementation Recommendations

The following are general recommendations for securing containers and Kubernetes.

## 4.1 Host Recommendations 

The following are recommendations for securing the host:

1.  Run docker engine with flags per [CIS Docker Community Edition Benchmark](https://www.cisecurity.org/benchmark/docker/): v1.1.0 and NIST Special Publication 800-190 [\[6\]](5_References.md).
2.  Check for compliance by running [docker-bench](https://github.com/docker/docker-bench-security) against the host. Flags can also be found in the *Security Controls Mapping to Docker and Kubernetes* document available on GCpedia.
3.  Other high-level recommendations for hosts include:
    -   Enabling AppArmour or SeLinux on hosts (per host instructions)
    -   OWASP Version control Package testing
    -   Vulnerability checking (based on CVE scores, scanned in dev, CI/CD, prod)
    -   Control parameters (flags)
    -   Use linux namespaces
    -   Utilize Seccomp/seccomp-bpf [^4]
    -   Configure Cgroups
    -   Use R/O Mounts
    -   Update host patches
    -   Run CIS Benchmark security tests [\[14\]](5_References.md)

## 4.2 Image Builds

Containers are comprised of layered images specified in a Dockerfile, which includes a base OS, libraries and dependencies. Since vulnerabilities can be introduced at each layer of the image, containers should be as minimal as possible, with all components from trusted sources (provenance).

This starts by using trusted and optimized images with no (major) CVE vulnerabilities; and using only trusted versions and registries (trusted dependences, signed images, secure and trusted registries). For some builds (i.e. FROM golang), consider a multi-stage build to reduce size, unnecessary libraries and vulnerabilities.

Organizations should evolve established processes to better fit containerized application build and deployment. A sample of specific image build considerations include:

-   Use a non-root user inside containers
-   Use a minimal Host OS (or multi-stage build)
-   Replace rather than patch containers (immutability)
-   Make the filesystem read-only
-   Use Labels, Tags, (Not LATEST)
-   General Dockerfile best practices (such as specifying commands in the same line to reduce layers in image)

## 4.3 Container Security Brokers

Container security brokers can help automate compliance checking, logging, access control and other functions for each step of the container lifecycle. Container security brokers (CSB) test and verify images, reduce risk exposure; provide trust, integrity, assurance; resource and access control; protect processes and network access and secrets. Container Security Brokers/Firewalls, such as [Cloudvisory](https://www.cloudvisory.com/), [NeuVector](https://neuvector.com/), [Twistlock](https://www.twistlock.com/), [Alcide](https://www.alcide.io/), [Sonatype,](https://www.sonatype.com/) [Aqua](https://www.aquasec.com/) can implement the following configurations [\[15\]](5_References.md) on hosted, managed and even CSP-provided services:

-   Prevent unknown images (image provenance)
-   Scan images by CVEs and score (blacklist/whitelist)
-   Stop user privilege escalation (run as non-root)
-   Scan for bad config and hard-coded secrets (keys)
-   Stop suspicious processes
-   Control capabilities/image fingerprinting (TLS, trusted images, signing)
-   Enforce network isolation (by policies, namespaces, RBAC, service mesh)
-   Protect the host resources
-   Encrypt sensitive variables
-   Enforce use of automation tools
-   Visibility across the environment (CI/CD embedded testing)
-   Feedback/logging

## 4.4 Orchestration - Kubernetes

Specific flags for hardening Kubernetes can be found in the [CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes/): v1.2.0. Open source tools to verify configuration and compliance to CIS Benchmark include and [kube-bench](https://github.com/aquasecurity/kube-bench) and [kubsec.io](https://kubesec.io/).

As the number of containers in organizations increases, DevSecOps teams recognizing the need for orchestration and day 2 management are increasingly turning to Kubernetes. High-level recommendations and best practices for securing Kubernetes include:

-   **TLS Everywhere**: Components and installation methods may enable local ports over HTTPS and administrators should familiarize themselves with the settings of each component to identify potentially unsecured traffic
-   **Identity, authorization and authentication**: Through role-based access control, applying identity and access management and restricted access to elevated privileges; permissions on volumes, networks etc. using role and attribute access control; using and securing 'etcd' for storing secrets; disable legacy authorization; rotate keys. Specific tools include JSON Web Tokens and now [SPIFFE](https://spiffe.io/) (spire)
-   **Kubernetes\' secrets** [\[16\]](5_References.md) **feature** ensures that all sensitive information \-- such as passwords, OAuth tokens and Secure Shell keys \-- are encrypted and made available to each Pod only when they are required for a particular task. The secrets feature uses the principle of least privilege to ensure the sensitive data isn\'t inadvertently shared externally or with a user or application that doesn\'t need access to it.
-   **Logging and telemetry**: Includes audit trail and use of application monitoring tools built for cloud native environments.
-   **Networking**: Use network policies to segment communication between containers or pods: for example to specify with whom a pods or endpoints can communicate. Resources to help implement kubernetes network policy include:
    -   [Tutorials and Recipes for Kubernetes Network Policies feature](https://github.com/ahmetb/kubernetes-network-policy-recipes)
    -   [Limiting Pod Communication with Network Policies](https://docs.giantswarm.io/guides/limiting-pod-communication-with-network-policies/)

Further details can be found in accompanying *GC Guidance for Secure Platform Deployment* and other resources, such as the Ultimate Guide to Kubernetes Security [\[13\]](5_References.md), kubernetes.io [\[17\]](5_References.md), Exploring Container Security: An Overview [\[18\]](5_References.md) and NIST Special Publication 800-190 Application Container Security Guide [\[6\]](5_References.md).
