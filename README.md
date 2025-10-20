# Guideline for Secure Application Development Annex B: Secure Containers and Microservices

([Français](#gabarit-pour-dépôts-de-code-source-ouvert-du-gouvernement-du-canada))

With the introduction of cloud services and the adoption of “continuous deployment” of software services, the movement of applications from one environment to another and within an environment is required to be agile and predictable. Container technology (OS virtualization) enables software to deploy quickly and run predictably when moved from one environment to another. Further, microservices are established when a set of containers work together to compose an application. While this approach improves flexibility and scalability for application development and simplifies functionality, it adds another layer of abstraction that must be secured.

This guidance provides recommendations to secure containers and microservices when deploying Government of Canada (GC) services. It highlights the controls, configuration and tools to secure GC workloads running in containers and orchestrators and recommendations for compliance verification.

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
    - [2.5.1 The Ten Commandments of Microservices](en/2_Context.md/#251-the-ten-commandments-of-microservices)
    - [2.5.2 Service Mesh](en/2_Context.md/#252-service-mesh)
  - [2.6 Functions as a Service](en/2_Context.md/#26-functions-as-a-service)
- [3. Threat Environment](en/3_Threat-Environment.md)
- [4. Implementation Recommendations](en/4_Implementation-Recommendations.md)
  - [4.1 Host Recommendations](en/4_Implementation-Recommendations.md/#41-host-recommendations)
  - [4.2 Image Builds](en/4_Implementation-Recommendations.md/#42-image-builds)
  - [4.3 Container Security Brokers](en/4_Implementation-Recommendations.md/#43-container-security-brokers)
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
- [6. References](en/6_References.md)

## List of Tables

- [Table 2‑1 Virtualization and Container Quality Attributes](en/2_Context.md/#23-containers)

## List of Figures

- [Figure 2‑1 Monolithic versus Microservice \[1\]](en/2_Context.md/#21-definitions)
- [Figure 2‑2 High-level overview of VM's, containers, and serverless \[3\]](en/2_Context.md/#21-definitions)
- [Figure 2‑3 Shared Responsibility Model with Containers](en/2_Context.md/#21-definitions)
- [Figure 2‑4 Container Technologies](en/2_Context.md/#23-containers)
- [Figure ‎2‑5 Microservices Architecture (MSA)](en/2_Context.md/#25-microservices)
- [Figure ‎2‑6 Example service mesh (CNCF Project Istio) \[12\]](en/2_Context.md/#252-service-mesh)

## List of Abbreviations and Acronyms

| Abbreviation | Definition                                         |
| ------------ | -------------------------------------------------- |
| CIRT         | Computer Incident Response Team                    |
| CONOPS       | Concept of Operations                              |
| CSE          | Communications Security Establishment              |
| CS EMP       | Cyber Security Event Management Plan               |
| CSP          | Cloud Service Provider                             |
| FedRAMP      | Federal Risk and Authorization Management Program  |
| GC           | Government of Canada                               |
| GSRM         | Government of Canada Strategic Reference Model     |
| IaaS         | Infrastructure as a Service                        |
| IPC          | Information Protection Centre                      |
| IT           | Information Technology                             |
| ITSG         | Information Technology Security Guidance           |
| LAN          | Local Area Network                                 |
| NIST         | National Institute of Standard and Technology      |
| PAA          | Program Alignment Architecture                     |
| PaaS         | Platform as a Service                              |
| PBMM         | Protected B, Medium Integrity, Medium Availability |
| PIA          | Privacy Impact Assessment                          |
| PoAM         | Plan of Actions and Milestones                     |
| RACI         | Responsible, Accountable, Consulted, Informed      |
| SaaS         | Software as a Service                              |
| SDLC         | System Development Lifecycle                       |
| SLA          | Service Level Agreement                            |
| SSC          | Shared Services Canada                             |
| TBS          | Treasury Board of Canada Secretariat               |
| ULL          | Unclassified, Low Integrity, Low Availability      |

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
