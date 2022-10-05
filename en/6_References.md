# 6. References

([Back](../README.md))

---

\[1\] Pivotal, \"Essential Hacks: Developing Microservices for PaaS,\" \[Online\]. Available: <https://solutionsreview.com/cloud-platforms/microservices-hacks/>.

\[2\] N. Q. P. Kratzke, \"Understanding Cloud-native Applications after 10 Years of Cloud Computing - A Systematic Mapping Study,\" _Journal of Systems and Software ,_ vol. 126, no. April, p. 1--16, 2017.

\[3\] Cloudops, \"Serverless Computing,\" \[Online\]. Available: <https://www.cloudops.com/2018/02/serverless-computing-hot-or-not-2/>.

\[4\] Government of Canada, \"GC Enterprise Security Architecture Description Document (ESADD) Annex E - Application Security (APP),\" Version 0.6, 2016.

\[5\] Government of Canada, \"GC Enterprise Security Architecture Description Document - Annex F Compute and Storage Services (CSS),\" 2017.

\[6\] National Institute of Standards and Technology, \"NIST SP 800-190: Application Container Security Guide,\" September 2017.

\[7\] Government of Canada, \"Security Controls Mapping to Docker and Kubernetes,\" Version 0.3, 2018.

\[8\] C. Richardson, \"Introduction to Microservices,\" NGINX, \[Online\]. Available: <https://www.nginx.com/blog/introduction-to-microservices/>. \[Accessed 25 July 2016\].

\[9\] C. Richardson, \"Event-Driven Data Management for Microservices,\" NGINX, \[Online\]. Available: <https://www.nginx.com/blog/event-driven-data-management-microservices/>. \[Accessed 25 July 2016\].

\[10\] Narayana, \"Microservices and transactions - an update,\" \[Online\]. Available: <http://jbossts.blogspot.com/2015/04/microservices-and-transactions-update.html>. \[Accessed 23 August 2016\].

\[11\] The New Stack, \"The Ten Commandments of Microservices,\" \[Online\]. Available: <http://thenewstack.io/ten-commandments-microservices/>. \[Accessed 16 Nov 2016\].

\[12\] Kubernetes, \"Managing microservices with the Istio service mes,\" \[Online\]. Available: <https://kubernetes.io/blog/2017/05/managing-microservices-with-istio-service-mesh/>

\[13\] Neuvector, \"The Ultimate Guide to Kubernetes Security,\" \[Online\]. Available: <https://neuvector.com/ultimate-kubernetes-security-guide/>.

\[14\] NCC Group, \"Understanding and Hardening Linux Containers,\" \[Online\]. Available: <https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2016/april/understanding-and-hardening-linux-containers/>.

\[15\] Neuvector, \"Container Security Checklist,\" \[Online\]. Available: <https://neuvector.com/container-security-checklist/>.

\[16\] TechTarget, \"Security, stateful app features mark enterprise-friendly Kubernetes release,\" \[Online\]. Available: <http://searchitoperations.techtarget.com/blog/Modern-Operations-Apps-Stacks/Security-stateful-app-features-mark-enterprise-friendly-Kubernetes-release>.

\[17\] Kubernetes, \"Securing a Cluster,\" \[Online\]. Available: <https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/>.

\[18\] Google, \"Exploring Container Security: An Overview,\" \[Online\]. Available: <https://cloudplatform.googleblog.com/2018/03/exploring-container-security-an-overview.html>.

\[19\] Google, \"Open-sourcing gVisor, a sandboxed container runtime,\" May 2018. \[Online\]. Available: <https://cloudplatform.googleblog.com/2018/05/Open-sourcing-gVisor-a-sandboxed-container-runtime.html>.

---

[^1]: Recently sandboxed containers provide a secure isolation boundary between host OS and image, such as Kata Containers, vSphere Integrated Containers and gVisor \[19\]
[^2]: Note that two definitions of "orchestration" in use. Business process orchestration directs the execution of a business process. Container orchestration (also known as container scheduling) directs the deployment and redeployment of containers to meet demand and performance requirements.
[^3]: An individual microservice may have a small attack surface, but a collection of microservices is likely to have a larger attack surface than a monolithic application that provides the same set of functions.
[^4]: A very recent networking addition is the replacement of iptables with Berkeley Packet Filter (BPF), often implemented with Cilium. Open source and CNI-compatible Cilium brings API-aware network security filtering to Linux container frameworks.
