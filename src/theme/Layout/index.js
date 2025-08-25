import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { Tooltip } from 'react-tooltip';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />

      <Tooltip clickable anchorSelect="#tee">
        <a href="https://docs.superprotocol.com/fundamentals/#trusted-execution-environment"><i>Trusted Execution Environment</i></a> (TEE) is a secure area within a CPU and RAM for executing code;<br/> it is isolated and protected from unauthorized access from outside the environment.
      </Tooltip>

      <Tooltip anchorSelect="#ca">
        <i>Certification Authority</i> (CA) is an entity that signs and issues<br/> digital certificates.
      </Tooltip>

      <Tooltip clickable anchorSelect="#offer">
        <a href="https://docs.superprotocol.com/fundamentals/offers/"><i>Offer</i></a> is a computing service, software product, or data available on the Marketplace for lease and use in orders.<br/>
        Offers are divided into four categories:<br/>
          ᐧ Compute offers: Confidential computing resources required to execute solutions and data inside a Trusted Execution Environment.<br/>
          ᐧ Solution offers: Engines, applications, scripts, base images, or other software.<br/>
          ᐧ Data offers: AI models, webpages, configs, datasets, databases, or any other data.<br/>
          ᐧ Storage offers: Decentralized storage that keeps order results after execution.
      </Tooltip>

      <Tooltip clickable anchorSelect="#offer-bottom" place='bottom'>
        <a href="https://docs.superprotocol.com/fundamentals/offers/"><i>Offer</i></a> is a computing service, software product, or data available on the Marketplace for lease and use in orders.<br/>
        Offers are divided into four categories:<br/>
          ᐧ Compute offers: Confidential computing resources required to execute solutions and data inside a Trusted Execution Environment.<br/>
          ᐧ Solution offers: Engines, applications, scripts, base images, or other software.<br/>
          ᐧ Data offers: AI models, webpages, configs, datasets, databases, or any other data that solutions may require.<br/>
          ᐧ Storage offers: Decentralized storage that keeps order results after execution.
      </Tooltip>

      <Tooltip clickable anchorSelect="#value-offer">
        <i>Value offer</i> is a collective term for solution, data, and storage <a href="https://docs.superprotocol.com/fundamentals/offers/">offers</a>.
      </Tooltip>
      
      <Tooltip clickable anchorSelect="#slot">
        <a href="https://docs.superprotocol.com/fundamentals/slots"><i>Slot</i></a> is a set of computing resources that may include CPU, GPU, RAM, disk space, etc.<br/><br/>

        <i>Requirement slot</i> specifies how much computing resources a value offer needs to run.<br/><br/>

        <i>Configuration slot</i> represents a portion of a compute offer's resources available for lease.
      </Tooltip>

      <Tooltip clickable anchorSelect="#requirements">
        <a href="https://docs.superprotocol.com/fundamentals/slots"><i>Requirements</i></a> specify how much computing resources an offer needs to run.<br/>
        A <i>requirement slot</i> is a particular set of requirements that may include CPU, RAM, disk space, bandwidth, traffic, etc.
      </Tooltip>

      <Tooltip clickable anchorSelect="#configuration">
        <a href="https://docs.superprotocol.com/fundamentals/slots"><i>Configuration slots</i> and <i>options</i></a> divide the resources of a physical confidential computing machine into smaller parts for better distribution between orders:<br/>
          ᐧ Configuration slots are responsible for computing resources, such as CPU, GPU, RAM, VRAM, and disk space.<br/>
          ᐧ Configuration options are responsible for network-related resources, such as bandwidth, traffic, and external port availability.<br/><br/>
        <i>Configuration</i> is a combination of configuration slots and configuration options.
      </Tooltip>

      <Tooltip anchorSelect="#engine">
        <i>Engine</i> is an application designed to launch AI models, customize parameters, configure workflows,<br/> and provide an interface to interact with models.
      </Tooltip>

      <Tooltip anchorSelect="#compute">
        <i>Compute</i> means confidential computing resources used to deploy models, launch confidential tunnels,<br/> and execute solutions inside a Trusted Execution Environment.
      </Tooltip>

      <Tooltip anchorSelect="#solution">
        <i>Solution</i> is an application, engine, script, base image, or other software intended to run on Super Protocol.
      </Tooltip>

      <Tooltip anchorSelect="#data">
        <i>Data</i> is an AI model, webpage, config, dataset, database, or other information that solutions may require.
      </Tooltip>

      <Tooltip clickable anchorSelect="#order">
        <a href="https://docs.superprotocol.com/fundamentals/orders/"><i>Orders</i> and <i>suborders</i></a> are digital contracts between customers and providers to lease offers.<br/><br/>
        The term <i>main order</i>—or simply <i>order</i>—implies leasing a compute offer.<br/><br/>
        The term <i>suborder</i> implies leasing an AI model, engine, or any other offer besides a compute offer.
      </Tooltip>

      <Tooltip clickable anchorSelect="#tunnel">
        <a href="https://docs.superprotocol.com/fundamentals/tunnels/"><i>Tunnel</i></a> is a virtual communication channel that enables secure, efficient transmission over a network as if over a direct secure connection.<br/><br/>

        In Super Protocol, a tunnel consists of two components with a confidential connection between them:<br/>
          ᐧ A <i>tunnel server</i> has a public IP address and is accessible over HTTPS via a browser or API.<br/>
          ᐧ A <i>tunnel client</i> hosts a web server; it remains hidden behind the tunnel server and protected from external threats.
      </Tooltip>
    </>
  );
}