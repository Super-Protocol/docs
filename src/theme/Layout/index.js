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
    </>
  );
}