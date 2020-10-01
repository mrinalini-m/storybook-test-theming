import React from 'react';

export interface TestProps {
  children: React.ReactNode;
}

const TestComponent: React.FC<TestProps> = ({ children }) => (
  <div data-testid="test-component">{children}</div>
);

export default TestComponent;
