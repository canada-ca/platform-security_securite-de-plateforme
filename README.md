# Guidance on Secure Containers and Microservices

([Français](#gabarit-pour-dépôts-de-code-source-ouvert-du-gouvernement-du-canada))

*Microservices* are established when a set of functional components work together to compose an application. While this approach improves flexibility and scalability for application development and simplifies functionality, it adds another layer of abstraction that must be secured.

*Container* technology (OS virtualization) enables software to be deployed quickly and run predictably when moved from one environment to another. In modern deployments, containers are often orchestrated by a container orchestration tool, such as Kubernetes (K8s) or a cloud provider, to manage the lifecycle of the containers.

*Microservices* are often deployed in *containers* to take advantage of the benefits of both technologies.

This guidance provides recommendations to secure *containers* and *microservices* when deploying Government of Canada (GC) services. It highlights the controls, configuration and tools to secure GC workloads running in *containers* and orchestrators and recommendations for compliance verification.

## Table of Contents

- [1. Introduction](en/1_Introduction.md)
  - [1.1 Background](en/1_Introduction.md/#11-background)
  - [1.2 Document Purpose and Scope](en/1_Introduction.md/#12-document-purpose-and-scope)
  - [1.3 Audience](en/1_Introduction.md/#13-audience)
  - [1.4 Document Overview](en/1_Introduction.md/#14-document-overview)
- [2. Context](en/2_Context.md/#2-context)
  - [2.1 Definitions](en/2_Context.md/#21-definitions)
  - [2.2 Infrastructure](en/2_Context.md/#22-infrastructure)
  - [2.3 Containers](en/2_Context.md/#23-containers)
  - [2.4 Container Security](en/2_Context.md/#24-container-security)
  - [2.5 Microservices](en/2_Context.md/#25-microservices)
  - [2.6 Orchestration](en/2_Context.md/#26-orchestration)
    - [2.6.1 Service Mesh](en/2_Context.md/#261-service-mesh)
  - [2.7 Functions as a Service](en/2_Context.md/#26-functions-as-a-service)
- [3. Threat Environment](en/3_Threat-Environment.md)
- [4. Implementation Recommendations](en/4_Implementation-Recommendations.md)
  - [4.1 Host Recommendations](en/4_Implementation-Recommendations.md/#41-host-recommendations)
  - [4.2 Image Builds](en/4_Implementation-Recommendations.md/#42-image-builds)
  - [4.3 Container Deployment Security](en/4_Implementation-Recommendations.md/#43-container-deployment-security)
  - [4.4 Orchestration - Kubernetes](en/4_Implementation-Recommendations.md/#44-orchestration---kubernetes)
- [5. Additional Microservices and Container Security Guidelines](en/5_Microservice_Security.md)
  - [5.1 Securing Platform](en/5_Microservice_Security.md#51-securing-platform)
  - [5.2 Securing Container Runtime](en/5_Microservice_Security.md#52-securing-container-runtime)
  - [5.3 Securing Traffic](en/5_Microservice_Security.md#53-securing-traffic)
  - [5.4 Securing Coding Practices](en/5_Microservice_Security.md#54-secure-coding-practices)
  - [5.5 Architecting Your Application for Cloud](en/5_Microservice_Security.md#55-architecting-your-application-for-cloud)
  - [5.6 Securing Container Images](en/5_Microservice_Security.md#56-securing-container-images)
  - [5.7 Observability](en/5_Microservice_Security.md#57-observability)
  - [5.8 Secrets Management](en/5_Microservice_Security.md#58-secrets-management)
  - [5.9 Continuous Integration/Continuous Deployment (CI/CD)](en/5_Microservice_Security.md#59-continuous-integrationcontinuous-deployment-cicd)
  - [5.10 Infrastructure as Code](en/5_Microservice_Security.md#510-infrastructure-as-code)

## List of Figures

- [Figure 2‑1 Monolithic versus Microservice](en/2_Context.md#figure-2-1)
- [Figure 2‑2 High-level overview of VMs, containers, and serverless](en/2_Context.md#figure-2-2)
- [Figure 2‑3 Shared Responsibility Model with Containers](en/2_Context.md#figure-2-3)
- [Figure 2‑4 Container Technologies](en/2_Context.md#figure-2-4)
- [Figure 2‑5 Microservices Architecture (MSA)](en/2_Context.md#figure-2-5)
- [Figure 5-1 VMs vs Containers](en/5_Microservice_Security.md#figure-5-1)
- [Figure 5-2 Kubernetes Attack Surface](en/5_Microservice_Security.md#figure-5-2)
- [Figure 5-3 RBAC in Kubernetes](en/5_Microservice_Security.md#figure-5-3)
- [Figure 5-4 Service Mesh](en/5_Microservice_Security.md#figure-5-4)
- [Figure 5-5 API Gateway with OPA](en/5_Microservice_Security.md#figure-5-5)
- [Figure 5-6 Securing Container Images](en/5_Microservice_Security.md#figure-5-6)

## List of Abbreviations and Acronyms

| Abbreviation | Definition                                         |
| ------------ | -------------------------------------------------- |
| CaaS         | Containers as a service                            |
| CSP          | Cloud Service Provider                             |
| FaaS         | Functions as a service                             |
| GC           | Government of Canada                               |
| IaaS         | Infrastructure as a Service                        |
| IaC          | Infrastructure as code                             |
| IDS          | Intrusion Detection System                         |
| IT           | Information Technology                             |
| JSON         | JavaScript Object Notation                         |
| JWT          | JSON Web Tokens                                    |
| K8s          | Kubernetes                                         |
| MSA          | Microservices Architecture                         |
| mTLS         | Mutual Transport Layer Security                    |
| NIST         | National Institute of Standard and Technology      |
| OAuth        | Open Authentication                                |
| OS           | Operating system                                   |
| PaaS         | Platform as a Service                              |
| PBMM         | Protected B, Medium Integrity, Medium Availability |
| RBAC         | Role-base Access Control                           |
| SaaS         | Software as a Service                              |
| SSH          | Secure Shell                                       |
| TBS          | Treasury Board of Canada Secretariat               |
| TLS          | Transport Layer Security                           |
| VM           | Virtual Machine                                    |

### How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md)

### License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [MIT License](LICENSE).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law. No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program. For more information, see [Federal identity requirements](https://www.canada.ca/en/treasury-board-secretariat/topics/government-communications/federal-identity-requirements.html).

---

## Gabarit pour dépôts de code source ouvert du gouvernement du Canada

- Quel est ce projet?
- Comment ça marche?
- Qui utilisera ce projet?
- Quel est le but de ce projet?

### Comment contribuer

Voir [CONTRIBUTING.md](CONTRIBUTING.md)

### Licence

Sauf indication contraire, le code source de ce projet est protégé par le droit d'auteur de la Couronne du gouvernement du Canada et distribué sous la [licence MIT](LICENSE).

Le mot-symbole « Canada » et les éléments graphiques connexes liés à cette distribution sont protégés en vertu des lois portant sur les marques de commerce et le droit d'auteur. Aucune autorisation n'est accordée pour leur utilisation à l'extérieur des paramètres du programme de coordination de l'image de marque du gouvernement du Canada. Pour obtenir davantage de renseignements à ce sujet, veuillez consulter les [Exigences pour l'image de marque](https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/communications-gouvernementales/exigences-image-marque.html).
