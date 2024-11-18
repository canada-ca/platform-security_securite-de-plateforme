# 1. Introduction

([Back](../README.md))

> **Note:** Generative artificial intelligence was used in the editing process of this publication in accordance with the FASTER principles outlined in the [Guide on the use of generative artificial intelligence - Canada.ca](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html#toc-4).

## 1.1 Background

With the introduction of cloud services and the adoption of "continuous deployment" of software services, the movement of applications from one environment to another (Data Centre &#8596; Public Cloud) and within an environment is required to be agile and predictable. Container technology (OS virtualization) enables software to deploy quickly and run predictably when moved from one environment to another. Further, microservices are established when a set of containers work together to compose an application. While this approach improves flexibility and scalability for application development and simplifies functionality, it adds another layer of abstraction that must be secured.

## 1.2 Document Purpose and Scope

This document provides guidance to developers and operators when deploying applications and services using containers and microservices. It is based on [GC Cloud Reference Architecture](https://gccollab.ca/file/view/590020/gc-cloud-reference-architecture) (v0.95) and is aligned with the [GC Enterprise Security Architecture Program](<http://www.gcpedia.gc.ca/wiki/Government_of_Canada_Enterprise_Security_Architecture_(ESA)_Program>).

## 1.3 Audience

This document is to be used by developers, operators, business owners, project managers, system and system security practitioners leveraging containers and microservices to deliver Government of Canada (GC) services.

## 1.4 Document Overview

This document is structured as follows:

> [Section 1](#11-background) identifies this document and its purpose,
>
> [Section 2](./2_Context.md) provides context, including definitions and scope
>
> [Section 3](./3_Threat-Environment.md) introduces the threat environment and common attack vectors in a microservice architecture
>
> [Section 4](./4_Implementation-Recommendations.md) provides implementation recommendations to secure containers and microservices, including the hosts, orchestrators and security brokers; and
>
> [Section 5](./5_Microservice_Security.md) provides additional guidance on securing microservices, including the Kubernetes tenancy, service mesh, and network traffic.
>
> [Section 6](./6_References.md) identifies the applicable references cited in this document.
