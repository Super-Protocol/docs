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
        <a href="https://docs.superprotocol.com/fundamentals/#offers"><i>Offer</i></a> is a computing service, software product, or data available on the Marketplace for lease and use in orders.<br/>
        Offers are divided into four categories:<br/>
          ᐧ Solution offers: Engines, applications, scripts, base images, and other software.<br/>
          ᐧ Data offers: AI models, webpages, configs, datasets, databases, and any other data that solutions may require.<br/>
          ᐧ Compute offers: Confidential computing resources required to execute solutions and data inside a Trusted Execution Environment.<br/>
          ᐧ Storage offers: Decentralized storage that keeps order results after execution.
      </Tooltip>

      <Tooltip clickable anchorSelect="#offer-bottom" place='bottom'>
        <a href="https://docs.superprotocol.com/fundamentals/#offers"><i>Offer</i></a> is a computing service, software product, or data available on the Marketplace for lease and use in orders.<br/>
        Offers are divided into four categories:<br/>
          ᐧ Solution offers: Engines, applications, scripts, base images, and other software.<br/>
          ᐧ Data offers: AI models, webpages, configs, datasets, databases, and any other data that solutions may require.<br/>
          ᐧ Compute offers: Confidential computing resources required to execute solutions and data inside a Trusted Execution Environment.<br/>
          ᐧ Storage offers: Decentralized storage that keeps order results after execution.
      </Tooltip>

      <Tooltip anchorSelect="#value-offer">
        <i>Value offer</i> is a collective term for solution, data, and storage offers.
      </Tooltip>

      <Tooltip anchorSelect="#engine">
        <i>Engine</i> is an application designed to launch AI models, customize parameters, configure workflows,<br/> and provide an interface to interact with models.
      </Tooltip>

      <Tooltip anchorSelect="#compute">
        <i>Compute</i> means confidential computing resources required to deploy models, launch confidential tunnels,<br/> and execute solutions inside a Trusted Execution Environment.
      </Tooltip>

      <Tooltip anchorSelect="#solution">
        <i>Solution</i> is an application, engine, script, base image, or other software intended to run on Super Protocol.
      </Tooltip>

      <Tooltip anchorSelect="#data">
        <i>Data</i> is an AI model, webpage, config, dataset, database, etc., that solutions may require.
      </Tooltip>

      <Tooltip anchorSelect="#storage">
        <i>Storage</i>
      </Tooltip>

      <Tooltip clickable anchorSelect="#order">
        <a href="https://docs.superprotocol.com/fundamentals/#orders"><i>Orders</i> and <i>suborders</i></a> are digital contracts between customers and providers to lease offers.<br/><br/>
        The term <i>main order</i>—or simply <i>order</i>—implies leasing a compute offer.<br/><br/>
        The term <i>suborder</i> implies leasing an AI model, engine, or any other offer besides a compute offer.
      </Tooltip>
    </>
  );
}