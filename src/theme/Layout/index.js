import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { Tooltip } from 'react-tooltip';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />

      <Tooltip clickable anchorSelect="#tee">
        <a href="https://docs.superprotocol.com/fundamentals/#trusted-execution-environment">Trusted Execution Environment</a> (TEE) is a secure area within a CPU and RAM<br/> for executing code; it is isolated and protected from unauthorized access<br/> from outside the environment.
      </Tooltip>

      <Tooltip anchorSelect="#ca">
        Certification Authority (CA) is an entity that signs and issues<br/> digital certificates.
      </Tooltip>

      <Tooltip clickable anchorSelect="#offer">
      <a href="https://docs.superprotocol.com/fundamentals/#offers">Offers</a> are computing services, software products, and data available on the Marketplace for lease and use in orders. They fall into four categories:<br/>
        ᐧ Solution offers: Applications, engines, scripts, base images, and other programs.<br/>
        ᐧ Data offers: Any data required by solutions. AI models fall into this category.<br/>
        ᐧ Compute offers: Confidential computing resources required to execute solutions.<br/>
        ᐧ Storage offers: Decentralized storage used to keep order results after execution.
      </Tooltip>

      <Tooltip clickable anchorSelect="#order">
      <a href="https://docs.superprotocol.com/fundamentals/#orders">Order</a> is a digital contract between a customer and a provider to lease an offer.<br/><br/>
      The term <i>main order</i>—or simply <i>order</i>—implies leasing a compute offer.<br/><br/>
      The term <i>suborder</i> implies leasing a model, engine, or storage offer.
      </Tooltip>

      <Tooltip anchorSelect="#value-offer">
        Value offer is a collective term for solution, data, and storage offers.
      </Tooltip>
    </>
  );
}