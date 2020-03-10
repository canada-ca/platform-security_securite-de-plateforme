# 3. Threat Environment

Cloud native applications based on containers and microservices have vulnerability and attack vectors that need to be mitigated. Container and container orchestrators inherit typical IT vulnerabilities as well as introduce some of their own, especially if containers are started with escalated privileges:

-   **Container Compromise**: An application misconfiguration or vulnerability enables the attacker to get into a container to start probing for weaknesses in the network, process controls, or file system. Compromised containers may then contain 'typical' IT vulnerabilities:
    -   Application level DDOS and XSS against public facing containers
    -   EXEC level download of malware, running a malicious process
    -   Scan of other internal systems for weaknesses or sensitive data
    -   Breakout and unauthorized access across containers, hosts or data centers
    -   Resource hogging to impact or crash other containers
-   **Unauthorized connections between pods**: Compromised containers can attempt to connect with other pods on the same or other hosts to launch an attack.
-   **Data exfiltration from a pod**: Stealing data from a pod; for example reverse shell in a pod for network tunneling to hide confidential data.
-   **Container, Pod or Node compromise**: If the pod host is compromised, a user may escalate to root privilege. An attacker (or developer) can install vulnerable libraries/packages that allow exploits in a container
-   **Resource Compromise**: Attempt to compromise Kubernetes resources such as the API Server or kubelets to disrupt the cluster or gain access to secrets, resources, or containers. Potential kubernetes resources include authorization tokens, identities or secrets that could be used to gain unauthorized access. Bad actors could also disrupt running applications and or try to gain control of the underlying resources used to run containers or privilege escalation (via the kubelet, access to etcd or service tokens).
-   **Attack Kill Chain**: When a series of malicious activities are used together, often within minutes, to achieve the attackers goal [\[8\]](5_References.md).
